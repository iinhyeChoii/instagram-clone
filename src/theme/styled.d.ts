import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      text: string;
      disabledText: string;
      primary: string;
      background: string;
      tint: string;
      tabIconDefault: string;
      tabIconSelected: string;
    };
    // spaces: {
    //     default: number;
    // };
  }
}
