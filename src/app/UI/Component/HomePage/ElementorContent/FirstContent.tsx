import React from "react";
import dress from "../../../../../../assets/content/dress.jpg";
const FirstContent = () => {
  return (
    <section id="first__content">
      <div className="flex flex-row items-start justify-start p-4">
        <div className="p-3">
          <img src={dress.src} />
        </div>
      </div>
    </section>
  );
};

export default FirstContent;
