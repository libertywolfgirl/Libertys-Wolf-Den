"use client";

import {
  AppShell,
  Button,
  Card,
  createTheme,
  MantineTheme,
  MantineThemeOverride,
  Paper,
  Title,
} from "@mantine/core";
import titleClasses from "./Title.module.css";
import textClasses from "./Text.module.css";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  black: "#011a1fff",
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
      "#306F78",
    ],
    darkGreen: [
      "#17A67D",
      "#0E8661",
      "#09714C",
      "#076447",
      "#09533C",
      "#096071",
      "#0A6A7B",
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
            backgroundColor: `light-dark(${theme.colors.cyan[4]}, ${theme.colors.darkGreen[6]})`,
          },
        }),
      },
    }),
    AppShellNavbar: AppShell.Navbar.extend({
      defaultProps: {
        styles: (theme) => ({
          navbar: {
            backgroundColor: `light-dark(${theme.colors.cyan[1]}, ${theme.colors.darkGreen[5]})`,
          },
        }),
      },
    }),
    Title: Title.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            color: `light-dark(${theme.colors.blue[9]}, ${theme.colors.blue[1]})`,
          },
        }),
        classNames: titleClasses,
      },
    }),
    Text: {
      styles: (theme: MantineTheme) => ({
        root: {
          color: `light-dark(${theme.colors.blue[8]}, ${theme.colors.blue[0]})`,
        },
      }),
      classNames: textClasses,
    },
    Paper: Paper.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.teal[2]}, ${theme.colors.dark[7]})`,
          },
        }),
      },
    }),
    Card: Card.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: `light-dark(${theme.colors.teal[0]}, ${theme.colors.dark[9]})`,
          },
        }),
      },
    }),
    Button: Button.extend({
      defaultProps: {
        styles: (theme) => ({
          root: {
            backgroundColor: theme.colors.teal[9],
          },
        }),
      },
    }),
  },
} as MantineThemeOverride);
