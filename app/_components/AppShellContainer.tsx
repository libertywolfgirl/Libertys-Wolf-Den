"use client";

import { AppShell, Avatar, Burger, Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import ColorSchemeToggle from "../../theme/ColorSchemeToggle";
import Link from "next/link";
import Image from "next/image";

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
          <Flex pos="relative" w={50} h={50}>
            <Image
              src="/wolf-logo.jpg"
              alt="wolf logo"
              fill
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </Flex>
          <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p={{ sm: "sm", lg: "md" }}>
        <Title order={6} pb="1rem" fw={600}>
          Navigation
        </Title>
        {navigationData}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellContainer;
