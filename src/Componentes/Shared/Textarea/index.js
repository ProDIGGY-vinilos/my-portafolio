import styles from "./TextareaS.module.css";

const TextareaS = ({ label, name, placeholder, register, error = "" }) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <textarea
        className={styles.textArea}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <p className={styles.textColor}>{error}</p>}
    </div>
  );
};

export default TextareaS;
