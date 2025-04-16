
import { useRef } from "react";
import Story from "./Story";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample story data
const stories = [
  { id: 1, username: "johndoe", image: "https://i.pravatar.cc/150?img=1", viewed: false },
  { id: 2, username: "janedoe", image: "https://i.pravatar.cc/150?img=5", viewed: false },
  { id: 3, username: "mike_smith", image: "https://i.pravatar.cc/150?img=3", viewed: true },
  { id: 4, username: "sarahparker", image: "https://i.pravatar.cc/150?img=9", viewed: false },
  { id: 5, username: "alex_wilson", image: "https://i.pravatar.cc/150?img=6", viewed: true },
  { id: 6, username: "emmajones", image: "https://i.pravatar.cc/150?img=11", viewed: false },
  { id: 7, username: "robert_smith", image: "https://i.pravatar.cc/150?img=12", viewed: false },
  { id: 8, username: "olivia42", image: "https://i.pravatar.cc/150?img=20", viewed: true },
  { id: 9, username: "david.brown", image: "https://i.pravatar.cc/150?img=17", viewed: false },
  { id: 10, username: "sophie_green", image: "https://i.pravatar.cc/150?img=23", viewed: false },
];

export default function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  
  return (
    <div className="relative mb-6">
      <div 
        className="flex space-x-4 overflow-x-auto py-4 scrollbar-none"
        ref={scrollRef}
      >
        {/* Add Story Button */}
        <div className="flex flex-col items-center space-y-1">
          <Button className="h-16 w-16 rounded-full" variant="outline">
            <span className="text-xl">+</span>
          </Button>
          <p className="text-xs">Your story</p>
        </div>
        
        {/* Stories */}
        {stories.map((story) => (
          <Story
            key={story.id}
            username={story.username}
            image={story.image}
            viewed={story.viewed}
          />
        ))}
      </div>
      
      {/* Scroll Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-80 h-8 w-8 rounded-full"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-80 h-8 w-8 rounded-full"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
