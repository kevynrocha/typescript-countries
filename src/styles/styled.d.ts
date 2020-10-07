import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      element: string;
      background: string;
      text: string;
      input?: string;
    };
  }
}
