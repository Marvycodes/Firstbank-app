import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      Contact{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <div>GO to the about page</div>
      </button>
    </div>
  );
}
