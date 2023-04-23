import styles from "./radio.module.css";

function Radio({ id, value, text }) {
    return (
        <div className={styles.inputGenero}>
            <label htmlFor="">{text}</label>
            <input type="radio" name="genero" id={id} value={value} />
        </div>
    );
}

export default Radio;
