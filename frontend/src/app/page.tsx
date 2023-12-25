"use client";
import Button from "@/components/atoms/button/Button";
import InputText from "@/components/atoms/inputText/InputText";

const HomePage = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("BLD", e.target.value);
  };

  return (
    <>
      <div style={{ width: "80%", margin: "0px auto;" }}>
        <h2>Helo</h2>
        <Button screenSize="lg" arrowIcon={true} text="Shop Now" />
        <br />
        <br />
        <InputText label="Search" />
      </div>
    </>
  );
};

export default HomePage;
