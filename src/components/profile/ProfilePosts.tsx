
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Play } from "lucide-react";

interface ProfilePostProps {
  id: string;
  image: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
  views?: number;
}

interface ProfilePostsGridProps {
  posts: ProfilePostProps[];
}

function ProfilePost({ id, image, likes, comments, isVideo = false, views }: ProfilePostProps) {
  return (
    <Link 
      to={`/p/${id}`} 
      className="relative aspect-square group overflow-hidden bg-muted"
    >
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full"
      />
      
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center space-x-4 text-white">
          {isVideo ? (
            <div className="flex items-center">
              <Play className="h-5 w-5 fill-current mr-1" />
              <span className="font-semibold">{views}</span>
            </div>
          ) : (
            <>
              <div className="flex items-center">
                <Heart className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">{likes}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">{comments}</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      {isVideo && (
        <div className="absolute top-2 right-2">
          <Play className="h-5 w-5 text-white" />
        </div>
      )}
    </Link>
  );
}

export default function ProfilePostsGrid({ posts }: ProfilePostsGridProps) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post) => (
        <ProfilePost key={post.id} {...post} />
      ))}
    </div>
  );
}
