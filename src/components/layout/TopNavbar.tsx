
import { ThemeToggle } from "./ThemeToggle";
import { MessageCircle, Instagram, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b w-full">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-md mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">GlowUp</h1>
        </Link>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" aria-label="New post">
            <Camera className="h-5 w-5" />
          </Button>
          <Link to="/messages">
            <Button variant="ghost" size="icon" aria-label="Messages">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
