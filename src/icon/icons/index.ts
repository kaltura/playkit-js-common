import { h } from 'preact';
import { Close } from './close';
import { Print } from './print';
import { Download } from './download';
import { Related } from './related';
import { Message } from './message';
import { Share } from './share';
import { More } from './more';
import { QuizIcon } from './quiz';
import { Switch } from './switch';
import { Add } from './add';
import { MinimizedVideo } from './minimizedVideo';
import { PictureInPicture } from './pictureInPicture';
import { Expand } from './expand';

export const Icons: Record<string, () => h.JSX.Element> = {
  close: Close,
  print: Print,
  download: Download,
  related: Related,
  message: Message,
  share: Share,
  more: More,
  quiz: QuizIcon,
  switch: Switch,
  add: Add,
  minimizedVideo: MinimizedVideo,
  pictureInPicture: PictureInPicture,
  expand: Expand
};
