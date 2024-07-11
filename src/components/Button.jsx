const Button = ({ label, icon, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
        ${backgroundColor ? backgroundColor : "bg-coral-red"}
        ${borderColor ? borderColor : "border-coral-red"}
        ${textColor ? textColor : "text-white"}
        rounded-full`}
    >
      {label}{" "}
      {icon && (
        <img src={icon} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
