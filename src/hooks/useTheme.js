import { useState } from "react";

export function useTheme(initialTheme = true) {

  const [theme, setTheme] = useState(initialTheme);

    if( theme ) {
        document.documentElement.setAttribute("data-theme", 'light');
    } else {
        document.documentElement.setAttribute("data-theme", 'dark');
    }


  return {
    theme,
    setTheme,
  };
}
