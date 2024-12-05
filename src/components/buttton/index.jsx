import "./index.css";

function Button(basement) {

    const{variant = "primary", size = "medium", children} = basement;
    const classes = `my-button my-button--${variant} my-button--${size}`;

    return(
        <button className={classes}>{children}</button>
    );
}

export default Button;