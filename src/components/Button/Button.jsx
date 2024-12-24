import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  backgroundColor = "black",
  textColor = "white",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-2 px-4 ${className} bg-${backgroundColor} ${
        textColor === "black" ? "text-black" : `text-${textColor}`
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
