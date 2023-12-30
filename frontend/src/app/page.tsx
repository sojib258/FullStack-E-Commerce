"use client";
import Button from "@/components/atoms/button/Button";
import SearchInput from "@/components/atoms/inputText/SearchInput";
import Location from "@/components/molecules/location/Location";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import Navbar from "@/components/organisms/Navbar";
import { useState } from "react";
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    console.log("SearchValue", value);
  };

  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "0px auto;" }}>
        <h2>Helo</h2>
        <Button screenSize="lg" arrowIcon={true} text="Shop Now" />
        <br />
        <br />
        <SearchInput onChange={handleChange} icon label="Search" />
        <br />
        <br />
        <SearchBar
          onChange={handleChange}
          type="password"
          icon
          label="Search bar"
        />
        <br />
        <br />
        <Location />
      </div>
    </>
  );
};

export default HomePage;
