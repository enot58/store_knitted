import React from "react";
import styles from "./style/layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Layout;
