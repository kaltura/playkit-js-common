import { h } from 'preact';
import { Close } from './close';

export const Icons: Record<string, () => h.JSX.Element> = {
  close: Close
};
