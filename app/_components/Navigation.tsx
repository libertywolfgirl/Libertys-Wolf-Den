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
      />
      {nav.map((genre) => {
        const genrePath = `/fanfiction/${genre.slug.current}`;

        return (
          <NavLink
            classNames={{ root: classes.root, label: classes.label }}
            variant="filled"
            key={genre._id}
            label={genre.title}
            component={Link}
            href={genrePath}
            active={pathname.startsWith(genrePath)}
          >
            {genre.fandoms.map((fandom) => {
              const fandomPath = `${genrePath}/${fandom.slug.current}`;

              return (
                <NavLink
                  classNames={{ root: classes.root, label: classes.label }}
                  variant="filled"
                  key={fandom._id}
                  label={fandom.title}
                  component={Link}
                  href={fandomPath}
                  active={pathname.startsWith(fandomPath)}
                >
                  {fandom.stories.map((story) => {
                    const storyPath = `${fandomPath}/${story.slug.current}`;

                    return (
                      <NavLink
                        classNames={{
                          root: classes.root,
                          label: classes.label,
                        }}
                        variant="filled"
                        key={story._id}
                        label={story.title}
                        component={Link}
                        href={storyPath}
                        active={pathname === storyPath}
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
