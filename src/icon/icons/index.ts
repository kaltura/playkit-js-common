import { h } from 'preact';
import { Close } from './close';
import { Print } from './print';
import { Download } from './download';
import { Related } from './related';
import { Message } from './message';
import { Share } from './share';
import { More } from './more';

export const Icons: Record<string, () => h.JSX.Element> = {
  close: Close,
  print: Print,
  download: Download,
  related: Related,
  message: Message,
  share: Share,
  more: More
};
