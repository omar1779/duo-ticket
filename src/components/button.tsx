import React from "react";


interface props {
    nameButton : string | number
}
const Button:React.FC<props> = (props) => {
  return (
    <button className="h-10 w-32 bg-yellow-600 rounded-lg shadow-2xl text-center hover:bg-yellow-600 duration-500 hover:scale-110 cursor-pointer flex items-center justify-center">
     {props.nameButton}
    </button>
  );
}

export default Button;
