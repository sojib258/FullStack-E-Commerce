import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import { ReactNode } from "react";

interface DefaultTemplateProps {
  children?: ReactNode;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
