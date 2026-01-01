import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme/theme";
import AppShellContainer from "./_components/AppShellContainer";
import { SanityLive } from "../sanity/lib/live";

export const metadata = {
  title: "Liberty's Wolf Den",
  description: "Fanfiction website",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShellContainer>
            {children}
            <SanityLive />
          </AppShellContainer>
        </MantineProvider>
      </body>
    </html>
  );
}
