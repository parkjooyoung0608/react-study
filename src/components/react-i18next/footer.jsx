import React from "react";

const Footer = ({ t }) => {
  return (
    <div className="Footer">
      <div>{t("footer.date", { date: new Date() })}</div>
    </div>
  );
};

export default Footer;
