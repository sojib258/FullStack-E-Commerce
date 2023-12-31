"use client";
import Button from "@/components/atoms/button/Button";
import InputText from "@/components/atoms/inputText/InputText";
import Location from "@/components/molecules/location/Location";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import Login from "@/components/organisms/login/Login";
import Navbar from "@/components/organisms/navbar/Navbar";
import Register from "@/components/organisms/register/Register";
import { useState } from "react";
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    console.log("SearchValue", value);
  };
  const handleClose = () => {};
  const handleCloseStart = () => {};

  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "0px auto;" }}>
        <h2>Helo</h2>
        <Button arrowIcon={true} text="Shop Now" />
        <br />
        <br />
        <InputText icon onChange={handleChange} label="Search" />
        <br />
        <br />
        <InputText onChange={handleChange} label="Search cd" />
        <br />
        <br />
        <SearchBar
          onChange={handleChange}
          type="text"
          icon
          label="Search bar"
        />
        <br />
        <br />
        <Login />
        <br />
        <br />
        <Register />
        <br />
        <br />
        <Location />
      </div>
    </>
  );
};

export default HomePage;
