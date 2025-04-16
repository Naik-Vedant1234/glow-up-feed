
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const path = location.pathname;
  
  // Don't show navbar in auth pages
  const isAuthPage = path === "/login" || path === "/signup" || path === "/forgot-password";
  
  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <TopNavbar />}
      <main className="flex-1 w-full max-w-screen-md mx-auto px-4 pb-16">
        {children}
      </main>
      {!isAuthPage && <BottomNavbar />}
    </div>
  );
}
