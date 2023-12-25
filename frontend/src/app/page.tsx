"use client";
import Button from "@/components/atoms/button/Button";

const HomePage = () => {
  const handleClick = () => {
    alert("Hurray!");
  };

  return (
    <>
      <h2>Helo</h2>
      <Button arrowIcon={true} text="Shop Now" />
    </>
  );
};

export default HomePage;
