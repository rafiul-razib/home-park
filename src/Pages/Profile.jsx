import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>this is profile</h1>
    </div>
  );
};

export default Profile;
