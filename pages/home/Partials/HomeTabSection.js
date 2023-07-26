import React from "react";

function HomeTabSection({ data }) {
  return (
    <section className="home-tab">
      <aside className="home-tab-container">
        <div className="home-tab-container-text" />
        <div className="home-tab-container-listing">
          {data.map((item, index) => {
            return <div key={index}>{item.title}</div>;
          })}
        </div>
      </aside>
    </section>
  );
}

export default HomeTabSection;
