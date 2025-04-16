
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const path = location.pathname;
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  // Don't show navbar in auth pages
  const isAuthPage = path === "/login" || path === "/signup" || path === "/forgot-password";
  
  // If not authenticated and not on an auth page, redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isAuthPage) {
      // We use window.location instead of Navigate to force a full page reload
      window.location.href = "/login";
    }
  }, [isAuthenticated, isAuthPage]);
  
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
