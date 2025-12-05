import { type FC } from "react";

interface NewReleasesProps {
  results: any[]; 
}

const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imgList = Object.values(images);

const NewReleases: FC<NewReleasesProps> = ({ results }) => {
  const placeholder = imgList[3];

  return (
    <div className="container mt-4 ">
      <h3 className="py-3">Nuove uscite</h3>

      <div className="row row-cols-3 row-cols-md-5 g-3">
        {results.length === 0 && (
          <p className="text-muted">Cerca qualcosa per vedere i risultati...</p>
        )}

        {results.slice(0, 10).map((track) => (
          <div key={track.id} className="col">
            <img
              src={track.album?.cover_medium ?? placeholder}
              alt={track.title}
              className="w-100 rounded"
            />
            <p className="fw-bold mt-2">{track.title}</p>
            <p className="text-white">{track.artist?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
