import Link from "next/link";
import styles from "./button.module.css";

type Props = {
  href?: string;
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
};

const InnerButton = ({ text, onClick, isDisabled }: Props) => {
  const containerStyle = [
    styles.container,
    isDisabled ? styles.isDisabled : "",
  ].join(" ");

  return (
    <button className={containerStyle} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
};

export const Button = ({ href, ...props }: Props) => {
  return href ? (
    <Link href={href}>
      <InnerButton {...props} />
    </Link>
  ) : (
    <InnerButton {...props} />
  );
};
