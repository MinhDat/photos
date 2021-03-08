import "./style.scss";

export default function List({ item }) {
  return (
    <div className="list-wrap flex">
      <img
        {...{
          className: "list-img",
          src: item && item.links ? item.links[0]?.href : undefined,
          alt: "",
        }}
      />
      <div className="list-info column">
        <h3 className="list-title">{item.data[0].title}</h3>
        <p className="list-description">{item.data[0].description}</p>
      </div>
    </div>
  );
}
