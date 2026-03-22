import { useNavigate } from "react-router-dom";

export default function Button({
  text = "Click Me",
  to,
  onClick,
  type = "button",
  className = "",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`relative overflow-hidden bg-black text-white px-8 py-2 rounded-lg text-lg font-medium group ${className}`}
    >
      {/* Circular background */}
      <span className="absolute left-0 top-1/2 w-10 h-10 bg-[#0D3B53] rounded-full -translate-y-1/2 scale-0 group-hover:scale-[12] transition-transform duration-500 ease-out"></span>

      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
}