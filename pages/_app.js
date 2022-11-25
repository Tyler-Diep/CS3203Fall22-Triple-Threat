import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <UserProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </UserProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default MyApp;
