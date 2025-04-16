
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CommentBox from "./CommentBox";
import { toast } from "sonner";

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
  const [commentCount, setCommentCount] = useState(comments);
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleCommentAdded = () => {
    setCommentCount(commentCount + 1);
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog
    toast.success("Share dialog opened!");
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
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9"
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9"
              onClick={handleShare}
            >
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
        
        {commentCount > 0 && (
          <button 
            className="text-muted-foreground text-sm mt-1 block"
            onClick={() => setShowComments(!showComments)}
          >
            View all {commentCount} comments
          </button>
        )}
        
        <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
      </div>
      
      {showComments && (
        <div className="px-3 py-2 border-t">
          <div className="max-h-40 overflow-y-auto mb-3">
            <div className="p-2 flex">
              <Avatar className="h-7 w-7 mr-2">
                <img src="https://i.pravatar.cc/150?img=5" alt="Comment user" className="object-cover" />
              </Avatar>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">janedoe</span> This looks amazing!
                </p>
                <p className="text-xs text-muted-foreground">2h</p>
              </div>
            </div>
          </div>
          <CommentBox postId={id} onCommentAdded={handleCommentAdded} />
        </div>
      )}
      
      {!showComments && (
        <div className="border-t px-3 py-2">
          <CommentBox postId={id} onCommentAdded={handleCommentAdded} />
        </div>
      )}
    </div>
  );
}
