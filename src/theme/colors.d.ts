declare type ColorPrimary = 'primary';

declare type ColorBaseTypes = 'background' | 'foreground';

declare type ColorTypes =
  | 'card'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'destructive';

declare type ColorTints =
  | 'tint-lightest'
  | 'tint-lighter'
  | 'tint'
  | 'tint-darker'
  | 'tint-darkest';

declare type ColorTheme = {
  [Key in `--${ColorPrimary}`]: string;
} & {
  [Key in `--${ColorBaseTypes}`]: string;
} & {
  [Key in `--${ColorTypes}`]: string;
} & {
  [Key in `--${ColorTypes}-${Exclude<ColorBaseTypes, 'background'>}`]: string;
} & {
  [Key in `--${ColorTints}`]: string;
};

declare type Color = {
  light: ColorTheme;
  dark: ColorTheme;
};

declare type ColorConfig = {
  [Key in ColorTypes]: {
    DEFAULT: string;
    dark: string;
  };
};
