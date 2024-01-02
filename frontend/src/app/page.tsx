"use client";
import Button from "@/components/atoms/button/Button";
import InputText from "@/components/atoms/inputText/InputText";
import Stock from "@/components/atoms/stockStatus/Stock";
import Location from "@/components/molecules/location/Location";
import NewsletterForm from "@/components/molecules/newsletterFrom/NewsletterForm";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import Icons from "@/components/molecules/productCartIcons/ProductIcons";
import Rating from "@/components/molecules/ratings/Rating";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import Login from "@/components/organisms/login/Login";
import Navbar from "@/components/organisms/navbar/Navbar";
import Newsletter from "@/components/organisms/newsLetter/Newsletter";
import QuickView from "@/components/organisms/quickView/QuickView";
import Register from "@/components/organisms/register/Register";
import { Grid } from "@mui/material";
import { useState } from "react";
const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    console.log("SearchValue", value);
  };
  const handleClose = () => {};
  const handleCloseStart = () => {};

  const products = [6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "0px auto;" }}>
        <h2>Helo</h2>
        <Button arrowIcon={true} text="Shop Now" />
        <br />
        <br />
        <QuickView />
        <br />
        <br />
        <Grid container>
          {products.map((item, index) => (
            <Grid key={index} xl={2.4} lg={3} md={4} xs={6} item>
              <ProductCart src={item} />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <Rating />
        <br />
        <br />
        <Icons />
        <br />
        <br />
        <InputText icon onChange={handleChange} label="Search" />
        <br />
        <br />
        <NewsletterForm />
        <br />
        <br />
        <InputText onChange={handleChange} label="Search cd" />
        <br />
        <br />
        <Newsletter />
        <br />
        <br />
        <SearchBar onChange={handleChange} icon label="Search bar" />
        <br />
        <br />
        <Login />
        <br />
        <br />
        <Register />
        <br />
        <br />
        <Stock />
        <br />
        <br />
        <Location />
      </div>
    </>
  );
};

export default HomePage;
