import React from "react";

function SectionImagesAndText({
  data,
  greyBackground,
  customClasses,
  inverse,
}) {
  return (
    <section
      className={`section-images-and-text container-l ${
        greyBackground ? "grey-background " : ""
      }${customClasses ? customClasses : " "}`}
    >
      <aside
        className={`section-images-and-text-container${
          inverse ? " inverse" : " "
        }`}
      >
        <div
          className={`section-images-and-text-container-img ${
            data.isGrid ? "grid " : " "
          }`}
        >
          {data.isGrid
            ? data.images.map((itemImg, index) => {
                return <img className="item-img" key={index} src={itemImg} />;
              })
            : data.images &&
              data.images[0] && (
                <img className="item-img" src={data.images[0]} />
              )}
        </div>
        <div className="section-images-and-text-container-text">
          {data.title}
          <p className="text-16 color-black regular">{data.text}</p>
          {data.cta}
        </div>
      </aside>
    </section>
  );
}

export default SectionImagesAndText;
