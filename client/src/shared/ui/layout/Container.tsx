import Col from "./Col";
import Row from "./Row";
import styles from "./style/container.module.css";

type contentString =
    | "max-content"
    | "min-content"
    | "100%"
    | "95%"
    | "90%"
    | "85%"
    | "80%"
    | "75%"
    | "70%"
    | "65%"
    | "60%"
    | "55%"
    | "50%"
    | "45%"
    | "40%"
    | "35%"
    | "30%"
    | "25%"
    | "20%"
    | "15%"
    | "10%"
    | "5%";
interface IContainerProps {
    children: React.ReactNode;
    contentHeight?: contentString;
    contentWidth?: contentString;
    className?: string[] | string;
    wrap?: boolean;
    flexBasis?: string;
    justifyContent?: string;
    alignItems?: string;
}

const Container: React.FC<IContainerProps> = ({
    children,
    contentHeight = "auto",
    contentWidth,
    className,
    wrap,
    flexBasis,
    alignItems,
    justifyContent,
}) => {
    const hasRow =
        Array.isArray(children) &&
        children.some(
            (child) => child && (child.type === Row || child.type === Col)
        );

    const flexDirection = hasRow ? "row" : "column";
    return (
        <div
            style={{
                flexDirection,
                height: contentHeight,
                width: contentWidth,
                flexWrap: wrap ? "wrap" : "nowrap",
                flexBasis: flexBasis ? flexBasis : "auto",
                justifyContent: justifyContent ? justifyContent : "flex-start",
                alignItems: alignItems ? alignItems : "flex-start",
            }}
            className={[styles.container, className].join(" ")}
        >
            {children}
        </div>
    );
};

export default Container;
