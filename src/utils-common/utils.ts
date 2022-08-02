export const generateId = (): string => {
  return new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
};

const generateNumberedId = (): string => {
  const uuid = generateId();
  let numStr = '';
  for (let i = 0; i < uuid.length; i++) {
    const char = uuid.charAt(i);
    numStr += Number.isNaN(+char) ? char.charCodeAt(0) : char;
  }
  return numStr;
};

export function getUserId(): string {
  if (typeof Storage === 'undefined') {
    // No web storage Support, just generate and return a anonymous user id
    return _generateAnonymousUserId();
  }
  // Web storage is supported
  let anonymousUserId;
  anonymousUserId = localStorage.getItem('anonymousUserId');
  if (!anonymousUserId) {
    anonymousUserId = _generateAnonymousUserId();
    localStorage.setItem('anonymousUserId', anonymousUserId);
  }
  return anonymousUserId;
}

function _generateAnonymousUserId() {
  const HashSeparatorText = 'HashSeparator';
  const DefaultAnonymousPrefix = 'Guest';
  return `##${DefaultAnonymousPrefix}${HashSeparatorText}${generateNumberedId()}##`;
}
