
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, MapPin, Users, X } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  
  const handleRemoveImage = () => {
    setSelectedImage(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast.error("Please select an image for your post");
      return;
    }
    
    // In a real app, this would upload the image and post data to a backend
    console.log("Creating post:", { caption, location, imageUrl: selectedImage });
    
    // Show success toast
    toast.success("Post created successfully!");
    
    // Navigate back to home
    navigate("/");
  };
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto pt-4">
        <h1 className="text-xl font-bold mb-6">Create New Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!selectedImage ? (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">Upload a photo for your post</p>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <Button type="button" variant="outline" className="mx-auto">
                  Select from Device
                </Button>
              </label>
            </div>
          ) : (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg object-cover max-h-[400px]"
              />
              <Button
                type="button"
                size="icon"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={handleRemoveImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          <div className="space-y-4">
            <Textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="resize-none"
              rows={4}
            />
            
            <div className="flex items-center space-x-2 border rounded-md p-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Add location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 p-0"
              />
            </div>
            
            <div className="flex items-center space-x-2 border rounded-md p-3">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Tag people</span>
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            Share
          </Button>
        </form>
      </div>
    </Layout>
  );
}
