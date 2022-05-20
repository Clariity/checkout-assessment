import type { AppProps } from "next/app";

import { DataProvider } from "../context/data-context";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { SettingsProvider } from "../context/settings-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <SettingsProvider>
        <div className="bg-primary text-fg-primary flex flex-col transition-all duration-100">
          <Navbar />
          <div className="flex justify-center px-2 min-h-screen">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </SettingsProvider>
    </DataProvider>
  );
}

export default MyApp;
