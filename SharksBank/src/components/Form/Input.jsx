import styles from "./input.module.css";

function Input({ type, name, placeholder }) {
    return (
        <div className={styles.input}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
            />
        </div>
    );
}

export default Input;
