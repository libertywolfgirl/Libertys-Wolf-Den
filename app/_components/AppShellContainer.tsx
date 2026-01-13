"use client";

import { AppShell, Avatar, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import ColorSchemeToggle from "../../theme/ColorSchemeToggle";
import Link from "next/link";
import NavigationData from "./NavigationData";

type Props = {
  children?: ReactNode;
  navigationData?: ReactNode;
};

const AppShellContainer = ({ children, navigationData }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group h="100%" px="md" gap="xl">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/" style={{ textDecoration: "none" }}>
            <Title order={5}>Liberty&apos;s Wolf Den</Title>
          </Link>
          <Avatar src="/wolf-logo.jpg" size={50} radius="xl" />
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Title order={6} pb="1rem">
          Navigation
        </Title>
        {navigationData}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellContainer;
