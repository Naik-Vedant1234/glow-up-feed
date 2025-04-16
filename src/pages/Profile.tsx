
import Layout from "@/components/layout/Layout";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfilePostsGrid from "@/components/profile/ProfilePosts";

// Sample profile data
const profileData = {
  username: "vedant_naik",
  fullName: "Vedant Naik",
  bio: "Coder & Traveller \n🌎 Exploring the world one click at a time\n🏙️ Based in Los Angeles",
  profileImage: "https://i.pravatar.cc/150?img=1",
  postsCount: 42,
  followersCount: 1342,
  followingCount: 567,
  isCurrentUser: true
};

// Sample posts data
const posts = [
  {
    id: "p1",
    image: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=500&auto=format&fit=crop",
    likes: 243,
    comments: 12
  },
  {
    id: "p2",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=500&auto=format&fit=crop",
    likes: 189,
    comments: 8
  },
  {
    id: "p3",
    image: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=500&auto=format&fit=crop",
    likes: 367,
    comments: 24
  },
  {
    id: "p4",
    image: "https://images.unsplash.com/photo-1682687220133-3fa6e6e80fc3?q=80&w=500&auto=format&fit=crop",
    likes: 421,
    comments: 32,
    isVideo: true,
    views: 1250
  },
  {
    id: "p5",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    likes: 512,
    comments: 45
  },
  {
    id: "p6",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop",
    likes: 278,
    comments: 19
  }
];

export default function Profile() {
  return (
    <Layout>
      <ProfileHeader {...profileData} />
      <ProfilePostsGrid posts={posts} />
    </Layout>
  );
}
