import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface DefaultTemplateProps {
  children?: ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
