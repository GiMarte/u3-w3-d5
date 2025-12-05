import mela from "../assets/logos/apple.svg";

interface TopbarProps {
  onSearchChange: (value: string) => void;
}

const Sidebar = ({ onSearchChange }: TopbarProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center">
          <img src={mela} alt="logo" id="logo" />
          <p className="fs-3 m-1">Music</p>
        </div>
        <div>
          <input
            type="text"
            className="form-control w-100 my-4"
            placeholder="🔍 Cerca"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <p>
            <i className="bi bi-house text-danger"></i> Home
          </p>
          <p>
            <i className="bi bi-grid text-danger"></i> Novita'
          </p>
          <p>
            {" "}
            <i className="bi bi-broadcast text-danger"></i>Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
