
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample notification data
const notifications = [
  {
    id: 1,
    type: "like",
    user: { username: "Shravya", avatar: "https://i.pravatar.cc/150?img=5" },
    content: "liked your photo",
    postImage: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=200&auto=format&fit=crop",
    time: "2m",
  },
  {
    id: 2,
    type: "follow",
    user: { username: "Tanish", avatar: "https://i.pravatar.cc/150?img=3" },
    content: "started following you",
    time: "10m",
  },
  {
    id: 3,
    type: "comment",
    user: { username: "Ayush", avatar: "https://i.pravatar.cc/150?img=6" },
    content: "commented: \"Amazing shot! 📸\"",
    postImage: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=200&auto=format&fit=crop",
    time: "1h",
  },
  {
    id: 4,
    type: "mention",
    user: { username: "Alexa", avatar: "https://i.pravatar.cc/150?img=9" },
    content: "mentioned you in a comment",
    postImage: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=200&auto=format&fit=crop",
    time: "3h",
  },
  {
    id: 5,
    type: "follow",
    user: { username: "Samarth", avatar: "https://i.pravatar.cc/150?img=12" },
    content: "started following you",
    time: "5h",
  },
  {
    id: 6,
    type: "like",
    user: { username: "Prikesh", avatar: "https://i.pravatar.cc/150?img=11" },
    content: "liked your photo",
    postImage: "https://images.unsplash.com/photo-1682687220133-3fa6e6e80fc3?q=80&w=200&auto=format&fit=crop",
    time: "12h",
  },
];

interface NotificationItemProps {
  notification: typeof notifications[0];
  onFollowToggle?: (id: number) => void;
  following: boolean;
}

function NotificationItem({ notification, onFollowToggle, following }: NotificationItemProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-start flex-1">
        <Link to={`/profile/${notification.user.username}`}>
          <Avatar className="h-10 w-10 mr-3">
            <img 
              src={notification.user.avatar} 
              alt={notification.user.username} 
              className="object-cover"
            />
          </Avatar>
        </Link>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm">
            <Link to={`/profile/${notification.user.username}`} className="font-semibold hover:underline">
              {notification.user.username}
            </Link>{" "}
            {notification.content}.{" "}
            <span className="text-muted-foreground">{notification.time}</span>
          </p>
        </div>
      </div>
      
      {notification.type === "follow" ? (
        <Button
          variant={following ? "outline" : "default"}
          size="sm"
          onClick={() => onFollowToggle && onFollowToggle(notification.id)}
        >
          {following ? "Following" : "Follow"}
        </Button>
      ) : notification.postImage ? (
        <Link to={`/p/123`}>
          <img 
            src={notification.postImage} 
            alt="" 
            className="h-10 w-10 object-cover"
          />
        </Link>
      ) : null}
    </div>
  );
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("all");
  const [followingState, setFollowingState] = useState<Record<number, boolean>>({
    2: false,
    5: true,
  });
  
  const handleFollowToggle = (id: number) => {
    setFollowingState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter notifications based on active tab
  const filteredNotifications = activeTab === "all" 
    ? notifications 
    : notifications.filter(n => n.type === "follow");
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto animate-fade-in">
        <h1 className="font-bold text-xl mb-4">Activity</h1>
        
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="w-full mb-4">
            <TabsTrigger className="flex-1" value="all">All</TabsTrigger>
            <TabsTrigger className="flex-1" value="follow">Follows</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-0 divide-y">
            {filteredNotifications.map(notification => (
              <NotificationItem 
                key={notification.id} 
                notification={notification}
                onFollowToggle={handleFollowToggle}
                following={!!followingState[notification.id]}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="follow" className="space-y-0 divide-y">
            {filteredNotifications.map(notification => (
              <NotificationItem 
                key={notification.id} 
                notification={notification}
                onFollowToggle={handleFollowToggle}
                following={!!followingState[notification.id]}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
