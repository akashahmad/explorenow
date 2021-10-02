import React from "react";

export const P = (props) => {
  return (
    <p
      className={`black ${
        props?.light ? "font-futura text-gray-600 opacity-70 text-xs " : ""
      }
     ${props?.small ? "text-sm " : ""} ${
        props?.extraSmall ? "extra-small " : ""
      }
      ${
        props?.large ? "text-xl " : ""
      }
      ${props?.className}`}
    >
      {props.children}
    </p>
  );
};
