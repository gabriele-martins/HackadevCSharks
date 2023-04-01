import styles from "./index.module.css";

export function Menu() {
  return (
    <section className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#">Sharks Bank</a>
        <a href="#">Contas</a>
        <a href="#">Blog</a>
        <a href="#">Sobre</a>
        <a href="#">Ajuda</a>
      </nav>
    </section>
  );
}
