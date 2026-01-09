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
  colors: {
    dark: [
      "#f1f8f9",
      "#e5eced",
      "#c6d9db",
      "#a3c4c9",
      "#87b3ba",
      "#74a8b0",
      "#376e76",
      "#3c6b71",
      "#356e78",
      "#31727c",
    ],
  },
  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.cyan[0]}, ${theme.colors.cyan[9]})`,
          },
        }),
      },
    }),
    AppShellHeader: AppShell.Header.extend({
      defaultProps: {
        styles: (theme) => ({
          header: {
            backgroundColor: `light-dark(${theme.colors.cyan[4]}, ${theme.colors.cyan[8]})`,
          },
        }),
      },
    }),
    AppShellNavbar: AppShell.Navbar.extend({
      defaultProps: {
        styles: (theme) => ({
          navbar: {
            backgroundColor: `light-dark(${theme.colors.cyan[2]}, ${theme.colors.cyan[7]})`,
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
            backgroundColor: `light-dark(${theme.colors.teal[0]}, ${theme.colors.dark[9]})`,
          },
        }),
      },
    }),
  },
} as MantineThemeOverride);
