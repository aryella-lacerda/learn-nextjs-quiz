import styles from "./statistic.module.css";

type Props = {
  value: string | number;
  label: string;
  bgColor: string;
};

export const Statistic = ({ value, label, bgColor }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.value}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {value}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
