import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Logo />
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default App;
