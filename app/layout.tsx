import "@mantine/core/styles.css";
import React, { ReactNode } from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme/theme";
import AppShellContainer from "./_components/AppShellContainer";
import { SanityLive } from "../sanity/lib/live";
import NavigationData from "./_components/NavigationData";

export const metadata = {
  title: "Liberty's Wolf Den",
  description: "Fanfiction website",
};

type Props = {
  children?: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShellContainer navigationData={<NavigationData />}>
            {children}
            <SanityLive />
          </AppShellContainer>
        </MantineProvider>
      </body>
    </html>
  );
}
