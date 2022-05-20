/* eslint-disable no-undef */
/* eslint-disable no-var */

function setColorsByTheme(defaultDarkTheme: string, defaultLightTheme: string) {
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  var prefersDarkFromMQ = mql.matches;
  var persistedPreference = localStorage.getItem("theme");
  var root = document.body;
  var colorMode = "";
  var hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = JSON.parse(persistedPreference as string);
  } else {
    colorMode = prefersDarkFromMQ ? defaultDarkTheme : defaultLightTheme;
    localStorage.setItem("theme", JSON.stringify(colorMode));
  }

  root.classList.add(colorMode);
}

interface ThemeScriptProps {
  defaultDarkTheme: string;
  defaultLightTheme: string;
}
export function ThemeScript({
  defaultDarkTheme,
  defaultLightTheme,
}: ThemeScriptProps) {
  const themeScript = `(${setColorsByTheme})(
        '${defaultDarkTheme}',
        '${defaultLightTheme}'
      )`;
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
