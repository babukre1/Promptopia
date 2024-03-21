import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "./globals.css";
import { Suspense } from "react";
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            <Suspense>{children}</Suspense>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
