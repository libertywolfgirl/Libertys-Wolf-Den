import { BackgroundImage, Stack, Title, Text } from "@mantine/core";

const HomePageHero = () => {
  return (
    <BackgroundImage src="/wolf-pack.jpg">
      <Stack
        justify="center"
        align="center"
        py="3rem"
        px="1rem"
        gap="2rem"
        mb="4rem"
        mih="22rem"
      >
        <Title order={1} ta="center" c="blue.1">
          Liberty's Wolf Den
        </Title>
        <Text maw="30rem" ta="center" c="blue.0">
          Welcome to my den of stories. Feel free to browse fanfiction of all
          types written by me. Enjoy your stay.
        </Text>
      </Stack>
    </BackgroundImage>
  );
};

export default HomePageHero;
