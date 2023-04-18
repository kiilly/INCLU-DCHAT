import '../styles/input.css';

export default function SideBarIcon({ icon, text = '' }) {
  return (
        <div className="sidebar-icon group z-10">
          {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
          {text}
        </span>
        </div>);
}
