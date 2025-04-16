
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface CommentBoxProps {
  postId: string;
  onCommentAdded?: () => void;
}

export default function CommentBox({ postId, onCommentAdded }: CommentBoxProps) {
  const [comment, setComment] = useState("");
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    
    // In a real app, this would send the comment to a backend
    console.log("Submitting comment for post:", postId, comment);
    
    // Show success toast
    toast.success("Comment added successfully!");
    
    // Clear the input
    setComment("");
    
    // Notify parent component
    if (onCommentAdded) {
      onCommentAdded();
    }
  };
  
  return (
    <form onSubmit={handleSubmitComment} className="flex items-center gap-2 w-full">
      <Avatar className="h-7 w-7 hidden sm:block">
        <img src="https://i.pravatar.cc/150?img=1" alt="Your avatar" className="object-cover" />
      </Avatar>
      
      <Input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1 bg-transparent text-sm h-9"
      />
      
      <Button 
        type="submit" 
        variant="ghost" 
        size="sm" 
        className="text-primary text-sm font-semibold px-3"
        disabled={!comment.trim()}
      >
        <Send className="h-4 w-4 mr-1" />
        Post
      </Button>
    </form>
  );
}
