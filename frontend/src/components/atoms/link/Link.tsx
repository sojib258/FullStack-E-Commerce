import Link from "next/link";
import styles from "./link.module.scss";
interface LinkProps {
  href: string;
  customStyle?: object;
  text?: string;
}

const Links: React.FC<LinkProps> = ({ href, customStyle, text }) => {
  return (
    <Link style={customStyle} className={styles.link} href={href}>
      {text}
    </Link>
  );
};

export default Links;
