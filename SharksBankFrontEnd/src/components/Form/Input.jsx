import styles from "./input.module.css";

function Input({ type, name, placeholder, register, errors }) {
    return (
        <div className={errors[name] ? styles.inputError : styles.input}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                {...register(name, { required: true })}
            />
            {errors[name]?.type === "required" && (
                <div className={styles.errorMessage}>
                    O campo {name} está invalido.
                </div>
                
            )}
        </div>
    );
}

export default Input;
