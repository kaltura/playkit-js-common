import { h, Fragment } from 'preact';

import { useState, useRef, useLayoutEffect } from 'preact/hooks';
import { ui } from '@playkit-js/kaltura-player-js';
const { Tooltip } = ui.Components;

import * as styles from './text-with-tooltip.scss';

const TextWithTooltip = ({ text, numberOfLines }: { text: string; numberOfLines: number }) => {
  const comparisonTextRef = useRef(null);
  const textRef = useRef(null);

  const [showTooltip, setShowTooltip] = useState(false);
  const [isFinalized, setIsFinalized] = useState(false);

  useLayoutEffect(() => {
    if (!isFinalized && textRef?.current && comparisonTextRef?.current) {
      setIsFinalized(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const textHeight = textRef?.current?.getBoundingClientRect().height;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const comparisonTextHeight = comparisonTextRef?.current?.getBoundingClientRect().height;
      setShowTooltip(textHeight < comparisonTextHeight);
    }
  });

  const textElement = (
    <div ref={textRef} style={{ '-webkit-line-clamp': numberOfLines }} className={styles.text}>
      {text}
    </div>
  );
  const comparisonTextElement = (
    <div ref={comparisonTextRef} style={{ '-webkit-line-clamp': numberOfLines + 1 }} className={styles.text}>
      {text}
    </div>
  );
  const content = !isFinalized ? (
    <Fragment>
      {textElement}
      {comparisonTextElement}
    </Fragment>
  ) : (
    textElement
  );

  if (!text) return null;

  return <div className={styles.textWithTooltip}>{showTooltip ? <Tooltip label={text}>{content}</Tooltip> : content}</div>;
};

export { TextWithTooltip };
