import Image from "next/image";
import { urlFor } from "../_utils/imageUrl";
import { Flex } from "@mantine/core";

export type SanityImageWithOptionalDimensions = {
  asset?: {
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      } | null;
    } | null;
  } | null;
} | null;

type Props = {
  image: SanityImageWithOptionalDimensions;
  title: string;
  padding?: string;
  maxWidth?: number;
  maxHeight?: number;
};

const ImageContainer = ({
  image,
  title,
  padding,
  maxWidth,
  maxHeight,
  minHeight,
}: Props & { minHeight?: number }) => {
  const dimensions = image?.asset?.metadata?.dimensions;

  if (!dimensions) {
    return null;
  }

  const { width: naturalWidth, height: naturalHeight } = dimensions;
  const aspectRatio = naturalWidth / naturalHeight;

  let displayWidth = naturalWidth;
  let displayHeight = naturalHeight;

  if (maxWidth && displayWidth > maxWidth) {
    displayWidth = maxWidth;
    displayHeight = maxWidth / aspectRatio;
  }

  if (maxHeight && displayHeight > maxHeight) {
    displayHeight = maxHeight;
    displayWidth = maxHeight * aspectRatio;
  }

  if (minHeight && displayHeight < minHeight) {
    displayHeight = minHeight;
    displayWidth = minHeight * aspectRatio;
  }

  return (
    <Flex
      justify="center"
      align="center"
      p={padding || 0}
      maw={maxWidth || "100%"}
      mah={maxHeight || "none"}
      m="0 auto"
    >
      <Image
        src={urlFor(image).url()}
        alt={title}
        width={displayWidth}
        height={displayHeight}
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 90vw, 800px"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: maxHeight || "none",
          minHeight: minHeight || "auto",
        }}
      />
    </Flex>
  );
};

export default ImageContainer;
