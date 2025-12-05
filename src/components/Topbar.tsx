import { useState } from "react";
import mela from "../assets/logos/apple.svg";

interface TopbarProps {
  onSearchChange: (value: string) => void;
}

const Topbar = ({ onSearchChange }: TopbarProps) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="container-fluid p-0" id="topbar">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center ">
          <button
            className="border-0 bg-transparent"
            onClick={() => setShowInput((prev) => !prev)}>
            <i className="bi bi-list fs-2 text-danger"></i>
          </button>

          {showInput && (
            <input
              type="text"
              className="form-control w-50"
              placeholder="Cerca artisti, album…"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          )}

          <div className="d-flex align-items-center">
            <img src={mela} alt="logo" id="logo" />
            <p className="fs-3 m-1">Music</p>
          </div>

          <a href="#" className="text-danger text-decoration-none">
            Accedi
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;
