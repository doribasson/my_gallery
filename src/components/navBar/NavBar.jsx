// import {LeftNavBar, CenterNavBar, RightNavBar} from "./index"
import CenterNavBar from "./CenterNavBar";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNavBar";
import "./navBar.scss";

function navBar({ resetData }) {
  return (
    <div className="navbar_container">
      <LeftNavBar />
      <CenterNavBar resetData={resetData} />
      <RightNavBar />
    </div>
  );
}
export default navBar;
