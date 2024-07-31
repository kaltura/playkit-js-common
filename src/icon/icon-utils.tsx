import { h, ComponentChildren } from 'preact';
import { Icon } from './index';

export const IconType = {
  // PDF
  PDF: 'pdf',
  // presentation
  PPT: 'ppt',
  PPTX: 'pptx',
  // documents
  DOC: 'doc',
  DOCX: 'docx',
  TXT: 'txt',
  RTF: 'rtf',
  ODP: 'odp',
  // image
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  SVG: 'svg',
  // ZIP
  ZIP: 'zip',
  // excel
  XLS: 'xls',
  XLSX: 'xlsx',
  CSV: 'csv',
  ODS: 'ods',
  AUDIO: 'audio'
};

export const getIconByFileExt = (fileExt: string): ComponentChildren => {
  switch (fileExt) {
    case IconType.PDF:
      return <Icon name={'pdf'} />;
    case IconType.PPT:
    case IconType.PPTX:
      return <Icon name={'presentation'} />;
    case IconType.DOC:
    case IconType.DOCX:
    case IconType.TXT:
    case IconType.RTF:
    case IconType.ODP:
      return <Icon name={'document'} />;
    case IconType.JPEG:
    case IconType.JPG:
    case IconType.PNG:
    case IconType.SVG:
      return <Icon name={'image'} />;
    case IconType.AUDIO:
      return <Icon name={'audio'} />;
    case IconType.ZIP:
      return <Icon name={'zip'} />;
    case IconType.XLS:
    case IconType.XLSX:
    case IconType.CSV:
    case IconType.ODS:
      return <Icon name={'excel'} />;
    default:
      return <Icon name={'genericFile'} />;
  }
};
