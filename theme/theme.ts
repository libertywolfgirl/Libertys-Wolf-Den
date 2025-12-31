"use client";

import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  createTheme,
  Title,
} from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.cyan[1]}, ${theme.colors.cyan[7]})`,
          },
        }),
      },
    }),
    AppShellHeader: AppShell.Header.extend({
      defaultProps: {
        styles: (theme) => ({
          header: {
            backgroundColor: `light-dark(${theme.colors.cyan[5]}, ${theme.colors.cyan[9]})`,
          },
        }),
      },
    }),
    AppShellNavbar: AppShell.Navbar.extend({
      defaultProps: {
        styles: (theme) => ({
          navbar: {
            backgroundColor: `light-dark(${theme.colors.cyan[3]}, ${theme.colors.cyan[8]})`,
          },
        }),
      },
    }),
    Title: Title.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            color: `light-dark(${theme.colors.blue[9]}, ${theme.colors.blue[2]})`,
          },
        }),
      },
    }),
    Text: Title.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            color: `light-dark(${theme.colors.blue[8]}, ${theme.colors.blue[1]})`,
          },
        }),
      },
    }),
  },
});
