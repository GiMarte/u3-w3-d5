const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const News = () => {
  const imgList = Object.values(images);
  const firstImage = imgList[0];
  const secondImage = imgList[1];
  return (
    <div className="container">
      <div className="row">
        <h3 className="p-3 fs-1 fw-bold">Novita'</h3>
        <hr />
        <div className="col p-0">
          <div className="card border-0 rounded bg-transparent text-white">
            <h5 className="card-title px-3 py-0">NUOVA STAZIONE RADIO</h5>
            <p className="card-text px-3 py-0">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </p>
            <div className="card-body r">
              <img
                src={firstImage}
                className="card-img-top raounded"
                alt="chill"
              />
            </div>
          </div>
        </div>
        <div className="col p-0">
          <div className="card border-0 rounded bg-transparent text-white">
            <h5 className="card-title px-3 py-0">NUOVA STAZIONE RADIO</h5>
            <p className="card-text px-3 py-0">
              Ecco la nuova casa latina{" "}
              <span className="invisible">--------------------------</span>
            </p>
            <div className="card-body rounded">
              <img
                src={secondImage}
                className="card-img-top rounded"
                alt="mus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
