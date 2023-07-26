import React, { useEffect, useState } from "react";

const SectionImagesAndText = ({
  data,
  greyBackground,
  customClasses,
  inverse,
}) => {
  const [content, setContent] = useState({});
  useEffect(() => {
    if (data) {
      setContent(data);
    }
  }, [data]);

  return (
    <section
      className={
        "section-images-and-text container-l " +
        (greyBackground ? "grey-background " : "") +
        (customClasses ? customClasses : " ")
      }
    >
      <aside
        className={
          "section-images-and-text-container" + (inverse ? " inverse" : " ")
        }
      >
        <div
          className={
            `section-images-and-text-container-img ` +
            (content.isGrid ? "grid " : " ")
          }
        >
          {content.isGrid
            ? content.images.map((itemImg, index) => {
                return <img className={"item-img"} key={index} src={itemImg} />;
              })
            : content.images &&
              content.images[0] && (
                <img className={"item-img"} src={content.images[0]} />
              )}
        </div>
        <div className={"section-images-and-text-container-text"}>
          {content.title}
          <p className={"text-16 color-black regular"}>{content.text}</p>
          {content.cta}
        </div>
      </aside>
    </section>
  );
};

export default SectionImagesAndText;
