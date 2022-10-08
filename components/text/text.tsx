import { PropsWithChildren } from "react";
import styles from "./text.module.css";

export const Text = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
