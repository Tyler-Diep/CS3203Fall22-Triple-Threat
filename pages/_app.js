import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
