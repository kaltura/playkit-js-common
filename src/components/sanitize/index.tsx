// @ts-nocheck
import * as sanitizeHtml from 'sanitize-html';

export interface SanitizeProps {
  children: string;
  sanitizeOptions?: any;
}

export const Sanitize = ({ children, sanitizeOptions = {} }) => {
  return sanitizeHtml(children, sanitizeOptions);
};

export { sanitizeHtml };
