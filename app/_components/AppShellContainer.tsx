"use client";

import { AppShell, Burger, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";

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
      bg="cyan.2"
      withBorder={false}
    >
      <AppShell.Header bg="cyan.9">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Header</div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg="cyan.7">
        Navbar
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
