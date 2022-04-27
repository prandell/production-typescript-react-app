import { createGlobalStyle } from 'styled-components'

const palette = {
  themeLight: {
    primary: '#515053',
    secondary: '#e7dfdd',
    secondaryText: '#747272',
    accent: '#6e76fb',
    secondaryAccent: '#4717f6'
  },
  themeDark: {
    primary: '#e7dfdd',
    secondary: '#0e0b16',
    secondaryText: '#cccccc',
    accent: '#6e76fb',
    secondaryAccent: '#4717f6'
  }
}

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-colour: ${palette.themeLight.primary};
  --secondary-colour: ${palette.themeLight.secondary};
  --secondary-text-colour: ${palette.themeLight.secondaryText};
  --accent-colour: ${palette.themeLight.accent};
  --secondary-accent-colour: ${palette.themeLight.secondaryAccent};
}

[data-theme='dark'] {
  --primary-colour: ${palette.themeDark.primary};
  --secondary-colour: ${palette.themeDark.secondary};
  --secondary-text-colour: ${palette.themeDark.secondaryText};
  --accent-colour: ${palette.themeDark.accent};
  --secondary-accent-colour: ${palette.themeDark.secondaryAccent};
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  color: var(--primary-colour);
  text-decoration: none;
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
}

* {
  box-sizing: border-box;
}

.app {
  height: 100%;
  background-color: var(--secondary-colour);
  padding: 20px 40px;
  color: var(--primary-colour);
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

html {
  height: 100%;
  background-color: var(--secondary-colour);
}

body {
  height: 100%;
  background-color: var(--secondary-colour);
}

@font-face {
  font-family: 'Jhiaxus-Oblique';
  src: url('fonts/Jhiaxus-Oblique.ttf.woff') format('woff'),
    url('fonts/Jhiaxus-Oblique.ttf.svg#Jhiaxus-Oblique') format('svg'),
    url('fonts/Jhiaxus-Oblique.ttf.eot'),
    url('fonts/Jhiaxus-Oblique.ttf.eot?#iefix') format('embedded-opentype');
  font-weight: normal;
  font-style: normal;
}

/* Palette
    VOID #0E0B16
    FUSCHIA #A239CA
    JEWEL #4717F6
    STARK #E7DFDD
  Randell Comics
    #0f1014
    #f9f9f9
    #cbcdf6
    #9da1f3
    #6f76f1
*/
`
