import styles from "./Button.module.css";

const Button = ({ children, icon, variant = "primary", ...props }) => {
  const isIconOnly = !children;
  const classes = `${styles.btn} ${styles[variant]} ${isIconOnly ? styles.iconOnly : ""}`;

  return (
    <button {...props} className={classes}>
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
