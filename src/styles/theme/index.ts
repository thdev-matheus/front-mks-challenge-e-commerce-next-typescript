export class Theme {
  static light = {
    primary: "#0F52BA",
    secondary: "#FFFF30",
    bgPrimary: "#FFFFFF",
    bgSecondary: "#373737",
    textPrimary: "#2C2C2C",
    textSecondary: "#FFFFFF",
    black: "#000000",
    white: "#FFFFFF",
  };

  static dark = {
    primary: this.light.primary,
    secondary: this.light.secondary,
    bgPrimary: this.light.bgSecondary,
    bgSecondary: this.light.bgPrimary,
    textPrimary: this.light.textSecondary,
    textSecondary: this.light.textPrimary,
    black: this.light.black,
    white: this.light.white,
  };

  static getTheme() {
    const currentTheme = localStorage.getItem("@MKS-THEME");

    if (!currentTheme) {
      this.setTheme("light");
      return "light";
    }

    return currentTheme as "light" | "dark";
  }

  static setTheme(value: "light" | "dark") {
    localStorage.setItem("@MKS-THEME", value);
  }
}
