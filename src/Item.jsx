import React from "react";

const Item = ({ content }) => {
  return (
    <li style={{ backgroundColor: "#F6D6EA", color: "#4F4B4E", fontWeight: "bold", padding: "12px", marginBottom: "8px", borderRadius: "4px" }}>
      {content}
    </li>
  );
};

export default Item;
