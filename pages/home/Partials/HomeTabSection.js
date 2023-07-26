import React, { useEffect, useState } from "react";

const HomeTabSection = ({ data }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  return (
    <section className={"home-tab"}>
      <aside className={"home-tab-container"}>
        <div className={"home-tab-container-text"}></div>
        <div className={"home-tab-container-listing"}>
          {content.map((item, index) => {
            return <div key={index}>{item.title}</div>;
          })}
        </div>
      </aside>
    </section>
  );
};

export default HomeTabSection;
