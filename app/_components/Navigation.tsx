"use client";

import { Box, NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();

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
            component="div"
            classNames={{ root: classes.root }}
            variant="filled"
            key={genre._id}
            active={pathname.startsWith(genrePath)}
            mb="xs"
            label={
              <span
                className={classes.labelLink}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(genrePath);
                }}
              >
                {genre.title}
              </span>
            }
          >
            {genre.fandoms.map((fandom) => {
              const fandomPath = `${genrePath}/${fandom.slug.current}`;

              return (
                <NavLink
                  component="div"
                  classNames={{ root: classes.root }}
                  key={fandom._id}
                  active={pathname.startsWith(fandomPath)}
                  variant="filled"
                  mb="xs"
                  label={
                    <span
                      className={classes.labelLink}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(fandomPath);
                      }}
                    >
                      {fandom.title}
                    </span>
                  }
                >
                  {fandom.stories.map((story) => {
                    const storyPath = `${fandomPath}/${story.slug.current}`;

                    return (
                      <NavLink
                        component="div"
                        classNames={{ root: classes.root }}
                        key={story._id}
                        active={pathname === storyPath}
                        variant="filled"
                        mb="xs"
                        label={
                          <span
                            className={classes.labelLink}
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(storyPath);
                            }}
                          >
                            {story.title}
                          </span>
                        }
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
