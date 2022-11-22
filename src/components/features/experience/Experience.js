import React from "react";
import classes from "./Experience.module.css";
import icon from "../assets/Vector.png";
const Experience = () => {
  const lists = [
    {
      id: 1,
      name: "Analyses.large.CSV.data."
    },
    {
      id: 2,

      name: "List of VIPs revealed."
    },

    {
      id: 3,
      name: "VIPs list updated."
    },
    {
      id: 4,
      name: "Filter VIPs.",
      list: ["Networth", "Popularity", "Profession"]
    },
    {
      id: 5,
      name: "Take Action.",
      list: [
        "Create Email list",
        "Send bulk email to VIPs",
        "Send bulk email to VIPs",
        "Give Discount"
      ]
    }
  ];
  return (
    <div className={classes.container}>
      <h6 className={classes.heading}>
        Your journey to a better customer experience starts here
      </h6>
      <p className={classes.paragraph}>How it works:</p>
      <ul className={classes.list}>
        {lists.map((item) => {
          const { id, name, list } = item;
          return (
            <div key={id}>
              <li className={classes.listitems}>
                <img className={classes.checked} src={icon} alt="icon" />
                {name}
              </li>
              {list && (
                <ul>
                  {list.map((item, index) => (
                    <li className={classes.itemslist} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Experience;
