import "./index.css";

function Header({ level = 1, className = "", children }) {

  const Tag = `h${level}`; 
  const classes = `heading heading--${level} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
}

export default Header;
