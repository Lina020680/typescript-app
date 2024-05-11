import { Interface } from "readline";
import "./styles.css";
import { User } from "./types";



function ProfileCard() {
  const userData: User = {
    avatar:
      "https://th.bing.com/th/id/R.6d9329ffad20f19db341208725fb1b39?rik=LG%2bgUZMtkERySw&riu=http%3a%2f%2fnetworthcelebrities.com%2fwp-content%2fuploads%2f2016%2f01%2fKeanu-Reeves_6.jpg&ehk=Hdnyx%2bPSGEKdczDtLCaDemqch%2bqYkipQZvAIjcdLMHo%3d&risl=&pid=ImgRaw&r=0",
    unseName: "Keanu Reeves",
    profession: "actor",
    hobbies: ["Motorcycles", "Music", "Photography"],
  };
  return (
    <div className="ProfileCard">
      <img src={userData.avatar} />
      <h3>{userData.unseName}</h3>
      <p>Profession: {userData.profession}</p>
      <p>Hobbies: {userData.hobbies[0]}</p>
    </div>
  );
}

export default ProfileCard;
