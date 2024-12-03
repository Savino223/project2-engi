import "./index.css";

function Button(basement) {

    const{variant = "primary", children} = basement;
    const classes = `my-button my-button--${variant}`;

    return(
        <button className={classes}>{children}</button>
    );
}

export default Button;