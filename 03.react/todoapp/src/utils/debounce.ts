import { ChangeEvent } from 'react';

function debounce(callback: (e: ChangeEvent<HTMLInputElement>) => void, timeout: number = 100) {
  let cleanup: number | undefined;
  return (...args: unknown[]) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}

export default debounce;
