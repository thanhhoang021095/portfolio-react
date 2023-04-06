import React, { FC } from "react";
import { MainContent } from "./components/MainContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollTopButton } from "./components/Button";

export const PageLayout: FC = () => {
  return (
    <>
      <Header />
      <div className="relative md:pt-40 pt-60 z-0" data-testid="main-content">
        <MainContent />
      </div>
      <Footer />
      <ScrollTopButton />
    </>
  );
};
