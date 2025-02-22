export const bindClasses = (classes, blockName) =>
  new Proxy(classes, {
    get: (target, prop) => target[`${blockName}${prop}`],
  });

export const isOnServerSide = () => typeof window === 'undefined';

export const add100vhCSSVar = () => {
  const height = document.documentElement.clientHeight;
  const vh = `${height / 100}px`;
  document.body.style.setProperty('--vh', vh);
};
export const atLeastOneNonSpaceChar = (inputValue) => !!(inputValue && inputValue.match(/[^ ]/));
 export const getApiHost = () => {
   if (typeof window === 'undefined') {
     // Логика на стороне сервера
     const { headers } = require('next/headers');
     return process.env.NODE_ENV === 'development'
       ? `https://cms.${process.env.NEXT_PUBLIC_API_MAIN_DOMAIN}`
       : `https://cms.${headers().get('host')}`;
   } else {
     // Логика на стороне клиента или резервный вариант
     return `https://cms.${process.env.NEXT_PUBLIC_API_MAIN_DOMAIN}`;
   }
 };
