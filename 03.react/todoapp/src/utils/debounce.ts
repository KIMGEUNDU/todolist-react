function debounce(callback: () => void, timeout: number = 300) {
  let cleanup: number | undefined;
  return (...args: string[]) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, ...args), timeout);
  };
}

export default debounce;
