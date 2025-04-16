
import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-link ${path === "/" ? "active" : ""}`}>
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      
      <Link to="/search" className={`nav-link ${path === "/search" ? "active" : ""}`}>
        <Search size={24} />
        <span className="text-xs mt-1">Search</span>
      </Link>
      
      <Link to="/create" className={`nav-link ${path === "/create" ? "active" : ""}`}>
        <PlusSquare size={24} />
        <span className="text-xs mt-1">Create</span>
      </Link>
      
      <Link to="/notifications" className={`nav-link ${path === "/notifications" ? "active" : ""}`}>
        <Heart size={24} />
        <span className="text-xs mt-1">Activity</span>
      </Link>
      
      <Link to="/profile" className={`nav-link ${path === "/profile" ? "active" : ""}`}>
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  );
}
