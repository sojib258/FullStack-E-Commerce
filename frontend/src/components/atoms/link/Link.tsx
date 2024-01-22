import NextLink from "next/link";
import styles from "./link.module.scss";
interface LinkProps {
  href: string;
  customStyle?: object;
  text?: string;
}

const Link: React.FC<LinkProps> = ({ href, customStyle, text }) => {
  return (
    <NextLink style={customStyle} className={styles.link} href={href}>
      {text}
    </NextLink>
  );
};

export default Link;
