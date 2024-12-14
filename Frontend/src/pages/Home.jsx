import { HiOutlineArrowLeft, HiOutlineLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";
import Loading from "../ui/Loading";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { logout, isPending } = useLogout();

  const handleEntrance = () => {
    navigate("/auth");
  };

  const handleLeave = () => {
    logout();
    return isPending ? <Loading /> : navigate("/");
  };

  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl flex items-center justify-center gap-x-48">
        <h1 className="p-4 text-xl text-secondary-700">صفحه اصلی</h1>
        <div>
          {user ? (
            <div className="flex items-center gap-x-2">
              <h1 className="text-secondary-700 font-black">{user.name}</h1>
              <button
                className="btn btn--secondary gap-x-2 flex items-center"
                onClick={handleLeave}
              >
                <HiOutlineArrowLeft className="w-5 h-5" />
                <span>خروج</span>
              </button>
            </div>
          ) : (
            <button
              className="btn btn--outline flex items-center gap-x-2"
              onClick={handleEntrance}
            >
              <HiOutlineLogin className="w-5 h-5" />
              <span>ورود/عضویت</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
