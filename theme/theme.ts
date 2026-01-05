"use client";

import {
  AppShell,
  Card,
  createTheme,
  MantineTheme,
  MantineThemeOverride,
  Title,
} from "@mantine/core";
import titleClasses from "./Title.module.css";
import textClasses from "./Text.module.css";

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
        classNames: titleClasses,
      },
    }),
    Text: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: `light-dark(${theme.colors.blue[8]}, ${theme.colors.blue[1]})`,
        },
      }),
      classNames: textClasses,
    },
    Card: Card.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.gray[0]}, ${theme.colors.gray[8]})`,
          },
        }),
      },
    }),
  },
} as MantineThemeOverride);
