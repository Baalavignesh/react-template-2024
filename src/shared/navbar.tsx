import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTokens } from "../features/auth/authSlice";

const NavBar: React.FC  = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(
      setTokens({
        accessToken: "",
        refreshToken: "",
        idToken: "",
      })
    );
    navigate("/");
  };

  return (
    <div className="p-4 pl-24 pr-24 flex justify-between items-center bg-custom-black text-white">
      <h2 onClick={() => navigate("/dashboard")} className="cursor-pointer">
        APP NAME
      </h2>
      <div className="flex gap-12">
        <h4 onClick={() => navigate("/about")} className="cursor-pointer">
          How it works?
        </h4>
        <h4 onClick={handleLogout} className="cursor-pointer">
          Logout
        </h4>
      </div>
    </div>
  );
};
export default NavBar;
