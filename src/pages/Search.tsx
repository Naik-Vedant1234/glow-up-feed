
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

// Sample search results
const users = [
  { id: 1, username: "vedant_naik", fullName: "Vedant Naik", avatar: "https://i.pravatar.cc/150?img=1", isFollowing: false },
  { id: 2, username: "kalra_akshat", fullName: "Akshat Kalra", avatar: "https://i.pravatar.cc/150?img=5", isFollowing: true },
  { id: 3, username: "ayush_kumar", fullName: "Ayush Kumar", avatar: "https://i.pravatar.cc/150?img=3", isFollowing: false },
  { id: 4, username: "prikesh_kumar", fullName: "Prikesh Kumar", avatar: "https://i.pravatar.cc/150?img=9", isFollowing: true },
  { id: 5, username: "tanish", fullName: "Tanish Kumar", avatar: "https://i.pravatar.cc/150?img=6", isFollowing: false },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof users>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 0) {
      setIsSearching(true);
      // Filter users based on search query
      const filteredUsers = users.filter(
        user => 
          user.username.toLowerCase().includes(value.toLowerCase()) ||
          user.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredUsers);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };
  
  const clearSearch = () => {
    setQuery("");
    setIsSearching(false);
    setSearchResults([]);
  };
  
  // Popular content to show when not searching
  const popularContent = [
    { id: "p1", image: "https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=500&auto=format&fit=crop" },
    { id: "p2", image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=500&auto=format&fit=crop" },
    { id: "p3", image: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=500&auto=format&fit=crop" },
    { id: "p4", image: "https://images.unsplash.com/photo-1682687220133-3fa6e6e80fc3?q=80&w=500&auto=format&fit=crop" },
    { id: "p5", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" },
    { id: "p6", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop" },
    { id: "p7", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500&auto=format&fit=crop" },
    { id: "p8", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=500&auto=format&fit=crop" },
    { id: "p9", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" },
  ];
  
  return (
    <Layout>
      <div className="mb-4 relative">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            value={query}
            onChange={handleSearch}
            placeholder="Search users..."
            className="pl-10 pr-10 py-2"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              onClick={clearSearch}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      {isSearching ? (
        <div className="space-y-4 animate-fade-in">
          {searchResults.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            searchResults.map(user => (
              <div key={user.id} className="flex items-center justify-between">
                <Link to={`/profile/${user.username}`} className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <img src={user.avatar} alt={user.username} className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{user.username}</p>
                    <p className="text-muted-foreground text-xs">{user.fullName}</p>
                  </div>
                </Link>
                <Button
                  variant={user.isFollowing ? "outline" : "default"}
                  size="sm"
                  className={user.isFollowing ? "" : ""}
                >
                  {user.isFollowing ? "Following" : "Follow"}
                </Button>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="animate-fade-in">
          <h2 className="font-semibold mb-4">Explore</h2>
          <div className="grid grid-cols-3 gap-1">
            {popularContent.map(item => (
              <Link key={item.id} to={`/p/${item.id}`} className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt="" 
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
