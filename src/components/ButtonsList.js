import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  let buttons = ["All","Music","Play","Films","Audio","Games","Devotional","Fun","Action","Video","License","Bike Riding","Bull Fight","Serials","Movies"];
  return (
    <div className="">
      {
        buttons.map(item => <Button name={item} key={item}/>)
      }
    </div>
  );
};

export default ButtonsList;
