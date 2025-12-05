const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const NewsRadio = () => {
  const imgList = Object.values(images);
  const primaImg = imgList[3];
  const secImg = imgList[4];
  const terImg = imgList[5];
  const quartImg = imgList[6];
  const quintImg = imgList[7];

  return (
    <div className="container mt-5">
      <h3 className="py-3">Nuovi episodi radio</h3>
      <div className="row row-cols-5 ">
        <div>
          <img src={primaImg} alt="album artist" className="rounded w-100" />
          <p className="mt-3">Prologo con Abuelo</p>
        </div>
        <div>
          <img src={secImg} alt="album artist" className="rounded w-100" />
          <p className="mt-3">The Wanderer</p>
        </div>
        <div>
          <img src={terImg} alt="album artist" className="rounded w-100" />
          <p className="mt-3">Michael Buble & Carly Pearce</p>
        </div>
        <div>
          <img src={quartImg} alt="album artist" className="rounded w-100" />
          <p className="mt-3">Stephan Moccio: The Zane Lowe Interview</p>
        </div>
        <div>
          <img src={quintImg} alt="album artist" className="rounded w-100" />
          <p className="mt-3">Chart Spotlight: Julia Micheaels</p>
        </div>
      </div>
    </div>
  );
};

export default NewsRadio;
