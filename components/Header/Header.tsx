import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <>
      <Image
        src="/Workwiz_top.svg"
        alt="Workwiz Logo"
        width={250}
        height={40}
        priority
      />
    </>
  );
};
