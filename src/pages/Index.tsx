
import Layout from "@/components/layout/Layout";
import Stories from "@/components/feed/Stories";
import Post from "@/components/feed/Post";

// Sample post data
const posts = [
  {
    id: "p1",
    username: "johndoe",
    userImage: "https://i.pravatar.cc/150?img=1",
    location: "Los Angeles, California",
    image: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=1170&auto=format&fit=crop",
    caption: "Beautiful sunset at the beach today! 🌅 #sunset #beach #vibes",
    likes: 1243,
    comments: 42,
    timestamp: "2 hours ago"
  },
  {
    id: "p2",
    username: "janedoe",
    userImage: "https://i.pravatar.cc/150?img=5",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=1170&auto=format&fit=crop",
    caption: "Morning coffee and productivity! ☕ #coffee #work #morningroutine",
    likes: 982,
    comments: 17,
    timestamp: "5 hours ago"
  },
  {
    id: "p3",
    username: "mike_smith",
    userImage: "https://i.pravatar.cc/150?img=3",
    location: "New York City",
    image: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1170&auto=format&fit=crop",
    caption: "City lights and busy nights 🌃 #nyc #citylife #nightphotography",
    likes: 2567,
    comments: 89,
    timestamp: "1 day ago"
  }
];

export default function Index() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <Stories />
        
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </Layout>
  );
}
