import React from "react";

const FooterLink = ({ header, li1, li2, li3, li4, li5 }) => {
  const commonStyles =
    "my-2 text-sm font-bold text-white hover:cursor-pointer mx-4 hover:underline";

  return (
    <div>
      <ul>
        <li className="text-xs text-white my-5 mx-4">{header}</li>
        <li className={commonStyles}>{li1}</li>
        <li className={commonStyles}>{li2}</li>
        <li className={commonStyles}>{li3}</li>
        <li className={commonStyles}>{li4}</li>
        <li className={commonStyles}>{li5}</li>
      </ul>
    </div>
  );
};

export default FooterLink;
