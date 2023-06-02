import { useState } from "react";

const useSwitchDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.querySelector("body");
    if (body) {
      if (darkMode) {
        body.classList.remove("dark");
      } else {
        body.classList.add("dark");
      }
    }
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useSwitchDarkMode;
