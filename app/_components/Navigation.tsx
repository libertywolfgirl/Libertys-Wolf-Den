"use client";

import { Box, NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navigation.module.css";

type StoryNav = {
  _id: string;
  title: string;
  slug: { current: string };
};

type FandomNav = {
  _id: string;
  title: string;
  slug: { current: string };
  stories: StoryNav[];
};

type GenreNav = {
  _id: string;
  title: string;
  slug: { current: string };
  fandoms: FandomNav[];
};

const Navigation = ({ nav }: { nav: GenreNav[] }) => {
  const pathname = usePathname();

  return (
    <Box>
      <NavLink
        classNames={{ root: classes.root, label: classes.label }}
        variant="filled"
        component={Link}
        href="/fanfiction"
        label="Fanfiction"
        active={pathname === "/fanfiction"}
        mb="xs"
      />
      {nav.map((genre) => {
        const genrePath = `/fanfiction/${genre.slug.current}`;

        return (
          <NavLink
            classNames={{ root: classes.root }}
            variant="filled"
            key={genre._id}
            active={pathname.startsWith(genrePath)}
            mb="xs"
            label={
              <Link href={genrePath} className={classes.labelLink}>
                {genre.title}
              </Link>
            }
          >
            {genre.fandoms.map((fandom) => {
              const fandomPath = `${genrePath}/${fandom.slug.current}`;

              return (
                <NavLink
                  classNames={{ root: classes.root }}
                  key={fandom._id}
                  label={
                    <Link href={fandomPath} className={classes.labelLink}>
                      {fandom.title}
                    </Link>
                  }
                  active={pathname.startsWith(fandomPath)}
                  variant="filled"
                  mb="xs"
                >
                  {fandom.stories.map((story) => {
                    const storyPath = `${fandomPath}/${story.slug.current}`;

                    return (
                      <NavLink
                        classNames={{ root: classes.root }}
                        key={story._id}
                        label={
                          <Link href={storyPath} className={classes.labelLink}>
                            {story.title}
                          </Link>
                        }
                        active={pathname === storyPath}
                        variant="filled"
                        mb="xs"
                      />
                    );
                  })}
                </NavLink>
              );
            })}
          </NavLink>
        );
      })}
      <NavLink
        classNames={{ root: classes.root, label: classes.label }}
        variant="filled"
        component={Link}
        href="/about"
        label="About the Author"
        active={pathname === "/about"}
      />
    </Box>
  );
};

export default Navigation;
