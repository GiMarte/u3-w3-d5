import mela from "../assets/logos/apple.svg";

interface TopbarProps {
  onSearchChange: (value: string) => void;
}

const Sidebar = ({ onSearchChange }: TopbarProps) => {
  return (
    <div className="container ms-3">
      <div className="row">
        <div className="d-flex align-items-center">
          <img src={mela} alt="logo" id="logo" />
          <p className="fs-3 m-1">Music</p>
        </div>
        <div>
          <input
            type="text"
            className="form-control w-75 my-4 bg-transparent"
            placeholder="🔍 Cerca"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <p className="fs-3">
            <i className="bi bi-house text-danger"></i> Home
          </p>
          <p className="fs-3">
            <i className="bi bi-grid text-danger"></i> Novita'
          </p>
          <p className="fs-3">
            {" "}
            <i className="bi bi-broadcast text-danger"></i> Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
