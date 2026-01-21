"use client";

import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const { replace } = router;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [inputValue, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (inputValue) {
      params.set("query", inputValue);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <TextInput
      placeholder="Search fanfiction..."
      value={inputValue ?? ""}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      rightSection={<IconSearch size={20} />}
    />
  );
};

export default SearchBar;
