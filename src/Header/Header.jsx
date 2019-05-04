import React from "react";
import logo from "../logo.png";
import style from "./Header.module.css";

const Header = ({searchFunc}) => {
  return (
    <div className={style.main}>
      <div className={style.div_logo}>
        <img className={style.logo} src={logo} alt="Fox" />
        <h2 className={style.title}>My FoX Film</h2>
      </div>
      <form className={style.form} onSubmit={searchFunc}>
        <input
          className={style.input}
          type="text"
          placeholder="Enter movie name..."
        />
        <button type='submit' className={style.btn}>Search</button>
        <button className={style.btn}>Sort by date</button>
        <button className={style.btn}>Sort by rating</button>
      </form>
    </div>
  );
};

export default Header;
