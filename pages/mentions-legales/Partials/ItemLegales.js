function ItemLegales({ title, description }) {
  return (
    <div className="legale-page-container-item">
      <div className="legale-page-container-item-title">
        <h3 className="color-primary text-30 medium">{title}</h3>
      </div>
      <div className="legale-page-container-item-description">
        <p className="text-16 regular color-black">{description}</p>
      </div>
    </div>
  );
}

export default ItemLegales;
