import { useContext } from "react";
import { JiwonContext } from "../context/JiwonContext";
import { NavLink, useNavigate } from "react-router";

function SideBar() {
  const [members, setMembers] = useContext(JiwonContext);
  console.log("체크 : ", members);

  const navigate = useNavigate();

  const handleClick = () => {
    // 동적 url이동
    // navigate함수는 두번째 매개변수 {state}를 이용하여 추가적으로 필요한 내용들을
    // 쉽게 전달할 수 있다. 이걸 사용할지 안할지는 선택!
    navigate("/403/10/?hero=수민&weapon=내공", {
      state: { myEnemy: "종창", weakPoint: "유식" },
    });
  };

  return (
    <div className="sidebar">
      <ul>
        {members.map((member) => (
          <li key={member.mid}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue", fontWeight: "bolder" } : null
              }
              to={`/402/${member.mid}`}
            >
              {member.name}
            </NavLink>
          </li>
        ))}
        <li>
          <button onClick={handleClick}>지원버튼</button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
