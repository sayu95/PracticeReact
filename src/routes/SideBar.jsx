import { useContext } from "react";
import { JiwonContext } from "../context/JiwonContext";
import { NavLink } from "react-router";

function SideBar() {
  const [members, setMembers] = useContext(JiwonContext);
  console.log("체크 : ", members);
  return (
    <div className="sidebar">
      <ul>
        {members.map((member) => (
          <li key={member.mid}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue", fontWeight: "bolder" } : null
              }
              to={`/${member.mid}`}
            >
              {member.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
