"use client";
import Home from "@/components/pages/home/Home";
import { StoreProvider } from "easy-peasy";
import store from "../store";

const HomePage = () => {
  return (
    <StoreProvider store={store}>
      <Home />
    </StoreProvider>
  );
};

export default HomePage;
