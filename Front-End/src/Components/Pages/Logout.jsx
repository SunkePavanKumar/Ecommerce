import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userReducer } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  dispatch(userReducer({ type: "logout" }));
  useEffect(() => {
    toast.success("User Logged out successful!😲");
    navigator("/");
  }, []);
}

export default Logout;
