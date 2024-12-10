import "./index.css";

function Typography(props) {
    const { size = "md", className = "", children } = props;
    const classes = `typography typography--${size} ${className}`;
    return (
        <p className={classes}>{children}</p>
    );
}

export default Typography;
