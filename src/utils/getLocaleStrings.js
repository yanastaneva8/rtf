// src/utils/getLocaleStrings.js
import en from '../locales/en.json';
import bg from '../locales/bg.json';

export function getLocaleStrings(locale = 'en') {
  switch (locale) {
    case 'bg':
      return bg;
    case 'en':
    default:
      return en;
  }
}
