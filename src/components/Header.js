import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="lg:w-24 lg:m-1 rounded-lg md:w-full md:py-3"
        alt="logo"
       src="../assets/Logo.png"
      />
    </Link>
  );
};

const Header = () => {
  const [isLogin, setIsLogin] = useState();

  const changeLogin = () => {
    setIsLogin(!isLogin);
  };

  
  const isOnline = useOnline();
  
  useEffect(()=>{console.log(isOnline)},[isOnline])

  const [temp, setTemp] = useState();
  return (
    <div className="border-b-2 shadow-lg px-3 md:w-full bg-pink-100 ">
    <div className="lg:flex justify-between mx-5 ">
      <Title />
      <div>
        <ul className="flex flex-wrap">
          <li className="m-5 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="m-5 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li
            className={`${temp ? "animate-bounce" : ""} m-5 cursor-pointer`}
            onMouseOver={() => {
              setTemp(true), setTimeout(() => setTemp(false), 4500);
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-5 cursor-pointer">Cart</li>
          <li className="m-5 cursor-pointer">
            <Link to="/instamart">InstaMart</Link>
          </li>
        </ul>
      </div>
      {useOnline() ? <h1>✅</h1> : <h1>🔴</h1>}
      {isLogin ? (
        <button onClick={changeLogin}>Log out</button>
      ) : (
        <button onClick={changeLogin}>Log in</button>
      )}
    </div>
    </div>);
};

export default Header;
