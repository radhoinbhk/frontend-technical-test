import type { AppProps } from "next/app";
import Head from "next/head";
import { getLoggedUserId } from "utils/getLoggedUserId";
import "styles/globals.css";
import { ThemeProvider } from "@mui/system";
import customTheme from "theme";
import { Provider } from "react-redux";
import { store } from "redux/store";
import ResponsiveAppBar from "components/AppBar";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <Head>
            <title>Frontend Technical test - Leboncoin</title>
            <meta
              name="description"
              content="Frontend exercise for developpers who want to join us on leboncoin.fr"
            ></meta>
          </Head>
          <ResponsiveAppBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
