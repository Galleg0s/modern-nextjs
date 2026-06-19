import React from "react";

import Navbar from "@/components/navigation/navbar";

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}

export default RootLayout;
