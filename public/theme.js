try {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    console.log('dark')
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    console.log(document.documentElement.classList)
  }
} catch (_) {
  console.log('error')
}
