import React from "react";
import "./ChitStack.css";

const StackData = [
  {
    name: "Total Active Batchs",
    number: "5",
    icon: "fi fi-tr-ballot",
    rating_number: "+2.4%",
    rating_style: "stack_rating_increase",
    style: {
      backgroundColor: "#0088ff30",
      color: "rgb(0, 136, 255)",
    },
  },
  {
    name: "Monthly Collection",
    number: "12,34,500",
    rating_style: "stack_rating_increase",
    icon: "fi fi-tr-money-bills",
    rating_number: "+5.4%",
    style: {
      backgroundColor: "#00ff2f36",
      color: "#00a018",
    },
  },
  {
    name: "Total Amount",
    number: "42,00000",
    icon: " fi fi-tr-time-forward",
    style: {
      backgroundColor: "#7b008130",
      color: "#830093",
    },
  },
  {
    name: "Pending Payment",
    number: "2,80000",
    icon: "fi fi-tr-triangle-warning",
    style: {
      backgroundColor: "#ffc2003d",
      color: "#ffc107",
    },
  },
];

export const ChitStack = () => {
  return (
    <div className="stick_cards_list">
      <div className="row gy-4">
        {StackData?.map((item, index) => {
          return (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stack_single_card">
                <div className="row gy-3 align-items-center">
                  <div className="col-8">
                    <div className="stack_inner_icon" style={item.style}>
                      <i class={item.icon}></i>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-end">
                      <p className={item.rating_style}>{item.rating_number}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="stack_text">{item.name}</p>
                    <h5 className="stack_title">{item.number}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
