import "./topbar.css";
import userImg from "../../assets/images/man.png";
import { Link } from "react-router-dom";

export const Topbar = () => {
  const toggleSidebar = () => {
    window.dispatchEvent(new Event("toggle-sidebar"));
  };
  return (
    <>
      <div className="topbar">
        <div className="topbar-left d-flex gap-lg-5 gap-2 align-items-center">
          {/* ✅ MOBILE / TABLET TOGGLE ONLY */}
          <button className="toggle_btn mobile_only" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>

          <p className="welcome-text">
            👋 Welcome back,<span className="d-md-inline-block d-none"> Admin — manage your billing & reports efficiently !</span>
          </p>
        </div>

        <div className="topbar-right">
          <div className="topbar-icons">
            <div className="profile-section dropdown">
              <Link className="dropdown-toggle" data-bs-toggle="dropdown">
                <img src={userImg} alt="Profile" className="profile-pic" />
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link to="/settings" className="dropdown-item">
                    <i class="fi fi-tr-customize"></i>&nbsp;Settings
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item">
                    <i className="fi fi-tr-sign-out-alt"></i>&nbsp;Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
