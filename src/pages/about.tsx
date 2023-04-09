import React, { FC } from "react";
import Button from "@/components/button";
import Image from "next/image";
/* function About() {
  return (
    <div className="w-screen h-screen bg-red-500 flex justify-center items-center font-extrabold text-9xl">
      <h3 className="text-blue-900 hover:text-white duration-1000 hover:scale-110">
        about ???
      </h3>
    </div>
  );
} */
const tickets = [1, 2, 3, 4, 5, 6, 7, 8];
const About: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-red-500 flex flex-col items-center">
      <h1 className="text-9xl font-extrabold">Home</h1>
      <div className="grid grid-cols-4 gap-10">
        {tickets?.map((e)=>(
            <Button nameButton={e}/>
        ))}
        <Image src={"localhost"} alt="hola"/>
      </div>
    </div>
  );
};

export default About;
