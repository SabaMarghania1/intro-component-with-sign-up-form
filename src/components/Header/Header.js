import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header__container}>
      <h1 className={styles.title}>Learn to code by watching others</h1>
      <p className={styles.paragraph}>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is
        great, but understanding how developers think is invaluable.{" "}
      </p>
    </header>
  );
}

export default Header;
