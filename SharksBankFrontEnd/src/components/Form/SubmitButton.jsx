import styles from "./submitbutton.module.css";

function SubmitButton({ type, text, id }) {
    return (
        <div className={styles.btn}>
            <button type={type} id={id}>
                {text}
            </button>
        </div>
    );
}

export default SubmitButton;
