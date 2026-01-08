import styles from './Heading.module.css';

export function Heading() {
  const classes = `${styles.cyan} ${styles.heading} `;
  return <h1 className={classes}>Olá Mundo!</h1>;
}
