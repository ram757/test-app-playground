import useLocalStorage from "use-local-storage";


const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div data-theme={theme}>
      <span>Theme Transitioner:</span>
      <button onClick={switchTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>
    </div>
  )
}

export default ThemeSwitcher;