"use client";
import Home from "@/components/pages/home/Home";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const HomePage = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default HomePage;
