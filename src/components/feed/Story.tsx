
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface StoryProps {
  username: string;
  image: string;
  viewed?: boolean;
}

export default function Story({ username, image, viewed = false }: StoryProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Link to={`/stories/${username}`} className="block">
        <div className={`p-[2px] rounded-full ${viewed ? 'bg-muted' : 'bg-gradient-to-tr from-yellow-400 to-purple-600'}`}>
          <div className="bg-background p-[2px] rounded-full">
            <Avatar className="h-16 w-16">
              <img src={image} alt={username} className="object-cover" />
            </Avatar>
          </div>
        </div>
      </Link>
      <p className="text-xs truncate w-16 text-center">{username}</p>
    </div>
  );
}
