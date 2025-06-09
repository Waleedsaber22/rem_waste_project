import { theme } from "../../constants/theme";
import { ThemeContext } from "./ThemeContext";
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{
        ...theme,
        primaryColors: theme.colors.primary,
        primaryLightColors: theme.colors.primaryLight,
        primaryDarkColors: theme.colors.primaryDark,
        darkPrimaryColors: theme.colors.primary,
        secondaryColors: theme.colors.secondary,
        secondaryLightColors: theme.colors.secondaryLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
