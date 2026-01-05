"use client";

import {
  AppShell,
  Avatar,
  Burger,
  Group,
  Skeleton,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import ColorSchemeToggle from "../../theme/ColorSchemeToggle";

type Props = {
  children?: ReactNode;
};

const AppShellContainer = ({ children }: Props) => {
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
          <Title order={5}>Liberty&apos;s Wolf Den</Title>
          <Avatar src="/wolf-logo.jpg" size={50} radius="xl" />
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Title order={6}>Navigation</Title>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellContainer;
