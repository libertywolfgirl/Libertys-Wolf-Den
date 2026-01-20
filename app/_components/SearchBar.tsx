"use client";

import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [inputValue, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) {
      return router.push(`${pathname}/?q=${inputValue}`);
    } else {
      return router.push(`${pathname}/`);
    }
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <TextInput
      placeholder="Search..."
      value={inputValue ?? ""}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      rightSection={<IconSearch size={20} />}
    />
  );
};

export default SearchBar;
