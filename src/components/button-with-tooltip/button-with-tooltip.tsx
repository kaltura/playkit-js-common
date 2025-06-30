import { Button, ButtonType } from 'components/button';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface ButtonWithTooltipProps {
  type: ButtonType;
  label: string;
  onClick: () => void;
}

const ButtonWithTooltip = ({ type, label, onClick }: ButtonWithTooltipProps) => {
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>();

  const [isFinalized, setIsFinalized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const onClickWrapper = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (!isFinalized && buttonRef) {
      setIsFinalized(true);

      const textElement = buttonRef.children[0] as HTMLElement;
      setShowTooltip(textElement.offsetWidth < textElement.scrollWidth);
    }
  });

  if (!isFinalized) {
    return (
      <Button
        type={type}
        tooltip={{ label }}
        onClick={onClickWrapper}
        setRef={(ref: HTMLButtonElement) => setButtonRef(ref)}
        disabled={false}
      >
        {label}
      </Button>
    );
  }

  return showTooltip ? (
    <Button type={type} tooltip={{ label }} onClick={onClickWrapper} disabled={false}>
      {label}
    </Button>
  ) : (
    <Button type={type} onClick={onClickWrapper} disabled={false}>
      {label}
    </Button>
  );
};

export { ButtonWithTooltip };
