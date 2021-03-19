
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import IndexPage from '../src/components/IndexPage'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /*new styles*/
    display:flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({theme})=> theme.colors.primary};
  }
  html, body{
    min-height: 100vh;
  }
  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <IndexPage />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}