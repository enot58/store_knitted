import React from "react";
import styles from "./styles/input.module.css";

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: "text" | "password";
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    containerPosition?: "column" | "row";
    style?: React.CSSProperties;
    styleLabel?: React.CSSProperties;
    resetMaxWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
    containerPosition = "row",
    disabled,
    label,
    onChange,
    placeholder,
    type = "text",
    value,
    style,
    styleLabel,
    resetMaxWidth,
}) => {
    return (
        <div
            className={styles.inputContainer}
            style={{
                maxWidth: resetMaxWidth ? "100%" : undefined,
                flexDirection: containerPosition,
                ...style,
            }}
        >
            {label && (
                <label style={styleLabel} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onChange={onChange}
                style={resetMaxWidth ? { maxWidth: "100%" } : {}}
            />
        </div>
    );
};

export default Input;
