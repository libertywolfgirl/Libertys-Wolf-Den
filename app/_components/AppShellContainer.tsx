"use client";

import { AppShell, Avatar, Burger, Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import ColorSchemeToggle from "../../theme/ColorSchemeToggle";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  navigationData?: ReactNode;
};

const AppShellContainer = ({ children, navigationData }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: { sm: 200, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding={{ base: "xs", sm: "sm", lg: "md" }}
      withBorder={false}
    >
      <AppShell.Header>
        <Flex h="100%" px="md" gap={{ base: "xs", sm: "xl" }} align="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/" style={{ textDecoration: "none" }}>
            <Title order={5}>Liberty&apos;s Wolf Den</Title>
          </Link>
          <Avatar src="/wolf-logo.jpg" size={50} radius="xl" />
          <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p={{ sm: "sm", lg: "md" }}>
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
