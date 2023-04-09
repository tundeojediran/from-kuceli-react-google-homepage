import profilepic from "../Images/avatar.jpeg";
export default function Avatar() {
  return (
    <div>
      <img
        src={profilepic}
        alt="avatar"
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          border: "1px solid whitesmoke",
          padding: "2px",
          position: "relative",
          top: "-7px",
        }}
      ></img>
    </div>
  );
}
