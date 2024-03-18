import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";

function BackToTopButton({ inViewport }) {
  const [isVisible, setIsVisible] = useState(inViewport);

  useEffect(() => {
    // function handleScroll() {
    //   if (window.scrollY > 300) {
    //     setIsVisible(true);
    //   } else {
    //     setIsVisible(false);
    //   }
    // }

    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    setIsVisible(inViewport);
  }, [inViewport]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="back-to-top "
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "60px",
        right: 40,
      }}
      onClick={scrollToTop}
      color="gray"
      variant="outline"
      radius="xl"
    >
      Back to Top
    </Button>
  );
}

export default BackToTopButton;
