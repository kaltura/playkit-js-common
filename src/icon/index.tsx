import { h, FunctionComponent } from 'preact';
import * as classnames from 'classnames';
import { Icons } from './icons';
import * as styles from './icon.scss';

export enum IconSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export interface IconProps {
  name: string;
  size?: IconSize;
}

export const Icon: FunctionComponent<IconProps> = (props) => {
  const Icon = Icons[props.name];
  if (!Icon) {
    return null;
  }
  return (
    <div className={classnames(styles.iconWrapper, styles[props.size!])}>
      <Icon />
    </div>
  );
};

Icon.defaultProps = {
  size: IconSize.medium
};
