"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Input } from "@/components/ui/input";
// import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

interface LocalSearchProps {
  imgSrc: string;
  route: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearch = ({
  imgSrc,
  route,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (value: string) => {
    setSearchQuery(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width="24"
        height="24"
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
