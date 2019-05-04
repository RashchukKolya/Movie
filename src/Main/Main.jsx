import React from "react";
import Card from "../Card/Card";
import style from "./Main.module.css";

const Main = ({ data }) => {
  console.log(data);
  return (
    <div className={style.main}>
      {!data ? (
        <h1>Loading...</h1>
      ) : (
        data.map(el => <Card key={Math.random()} el={el} />)
      )}
    </div>
  );
};

export default Main;
