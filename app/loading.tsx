import styles from "./status.module.css";

export default function Loading() {
  return <main className={styles.loading} aria-busy="true">
    <div className={styles.loadingField}>Loading</div>
  </main>;
}
