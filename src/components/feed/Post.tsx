
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  username: string;
  userImage: string;
  location?: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export default function Post({
  id,
  username,
  userImage,
  location,
  image,
  caption,
  likes,
  comments,
  timestamp,
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <div className="border rounded-lg overflow-hidden bg-card mb-6 animate-fade-in">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Link to={`/profile/${username}`}>
            <Avatar className="h-9 w-9">
              <img src={userImage} alt={username} className="object-cover" />
            </Avatar>
          </Link>
          <div>
            <Link to={`/profile/${username}`} className="font-semibold text-sm hover:underline">
              {username}
            </Link>
            {location && (
              <p className="text-xs text-muted-foreground">{location}</p>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="relative">
        <img 
          src={image} 
          alt={caption} 
          className="w-full object-cover max-h-[500px]" 
          onDoubleClick={handleLike}
        />
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 hover:text-red-500"
              onClick={handleLike}
            >
              <Heart className={`h-6 w-6 ${liked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <MessageCircle className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9"
            onClick={() => setSaved(!saved)}
          >
            <Bookmark className={`h-6 w-6 ${saved ? "fill-current" : ""}`} />
          </Button>
        </div>
        
        <p className="font-semibold text-sm">{likeCount.toLocaleString()} likes</p>
        
        <div className="mt-1">
          <p className="text-sm">
            <Link to={`/profile/${username}`} className="font-semibold hover:underline mr-1">
              {username}
            </Link>
            {caption}
          </p>
        </div>
        
        {comments > 0 && (
          <Link to={`/p/${id}`} className="text-muted-foreground text-sm mt-1 block">
            View all {comments} comments
          </Link>
        )}
        
        <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
      </div>
      
      <div className="border-t px-3 py-2">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <Button variant="ghost" className="text-primary text-sm font-semibold">Post</Button>
        </div>
      </div>
    </div>
  );
}
