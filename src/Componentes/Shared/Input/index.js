import styles from "./InputS.module.css";

const InputS = ({
  id,
  name,
  type,
  placeholder,
  label,
  register,
  error = "",
}) => {
  return (
    <div className={styles.formControl} key={id}>
      {label && <label>{label}</label>}
      <input
        {...register(name)}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className={styles.textColor}>{error}</p>}
    </div>
  );
};

export default InputS;
