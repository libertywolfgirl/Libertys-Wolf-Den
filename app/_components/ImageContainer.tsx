import Image from "next/image";
import { urlFor } from "../_utils/imageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Flex } from "@mantine/core";

const ImageContainer = ({
  image,
  title,
  maximumHeight,
  padding,
}: {
  image: SanityImageSource;
  title: string;
  maximumHeight?: number;
  padding?: string;
}) => {
  return (
    <Flex justify="center" align="center" p={padding || 0}>
      <Image
        src={urlFor(image).url()}
        alt={title}
        width={1000}
        height={1000}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "75vw",
          maxHeight: maximumHeight || 800,
        }}
      />
    </Flex>
  );
};

export default ImageContainer;
