import { BackgroundImage, Stack, Title, Text } from "@mantine/core";

const HomePageHero = () => {
  return (
    <BackgroundImage
      src="/wolf-pack.jpg"
      style={{ backgroundPosition: "50% 40%" }}
    >
      <Stack
        justify="center"
        align="center"
        py="7rem"
        px="1rem"
        gap="3rem"
        mih="22rem"
      >
        <Title order={1} ta="center" fw={800} c="blue.1">
          Liberty&apos;s Wolf Den
        </Title>
        <Title order={6} maw="30rem" ta="center" fw={800} c="blue.0">
          Welcome to my den of stories. Feel free to browse fanfiction of all
          types written by me. Enjoy your stay.
        </Title>
      </Stack>
    </BackgroundImage>
  );
};

export default HomePageHero;
