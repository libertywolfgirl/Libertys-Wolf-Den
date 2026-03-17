"use client";

import { Checkbox, Group, TextInput, Text, Stack } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../_hooks/useDebounce";

const SearchBar = () => {
  const router = useRouter();
  const { replace } = router;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [inputValue, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const debouncedInputValue = useDebounce(inputValue, 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedInputValue) {
      params.set("query", debouncedInputValue);
    } else {
      params.delete("query");
    }
    if (checked) {
      params.set("completed", "true");
    } else {
      params.delete("completed");
    }
    replace(`${pathname}?${params.toString()}`);
    router.refresh();
  }, [debouncedInputValue, checked]);

  return (
    <Stack align="center" w="100%">
      <Text fw={600} fz="1.5rem" pb="md">
        Looking for something specific?
      </Text>
      <Group justify="center" gap="xl" w="100%">
        <TextInput
          placeholder="Search fanfiction..."
          value={inputValue ?? ""}
          onChange={handleChange}
          rightSection={<IconSearch size={20} />}
          w={{ base: "100%", md: "75%" }}
        />
        <Checkbox
          label="Completed?"
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
      </Group>
    </Stack>
  );
};

export default SearchBar;
