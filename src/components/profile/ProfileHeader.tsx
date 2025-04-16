
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Grid, Bookmark, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  profileImage: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isCurrentUser?: boolean;
}

export default function ProfileHeader({
  username,
  fullName,
  bio,
  profileImage,
  postsCount,
  followersCount,
  followingCount,
  isCurrentUser = false,
}: ProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  
  return (
    <div className="p-4 animate-fade-in">
      <div className="flex items-start mb-6">
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
          <img src={profileImage} alt={username} className="object-cover" />
        </Avatar>
        
        <div className="ml-6 flex-1">
          <div className="flex items-center flex-wrap gap-2">
            <h1 className="text-xl font-semibold">{username}</h1>
            
            {isCurrentUser ? (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button
                  className={isFollowing ? "" : "auth-button"}
                  variant={isFollowing ? "outline" : "default"}
                  size="sm"
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button variant="outline" size="sm">
                  Message
                </Button>
              </div>
            )}
          </div>
          
          <div className="flex mt-3 space-x-5">
            <div className="text-center">
              <span className="font-semibold">{postsCount}</span>
              <p className="text-xs sm:text-sm">posts</p>
            </div>
            <Link to={`/profile/${username}/followers`} className="text-center">
              <span className="font-semibold">{followersCount}</span>
              <p className="text-xs sm:text-sm">followers</p>
            </Link>
            <Link to={`/profile/${username}/following`} className="text-center">
              <span className="font-semibold">{followingCount}</span>
              <p className="text-xs sm:text-sm">following</p>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="font-semibold">{fullName}</h2>
        <p className="text-sm whitespace-pre-line">{bio}</p>
      </div>
      
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="posts">
            <Grid className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="reels">
            <Film className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Reels</span>
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Bookmark className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Saved</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
