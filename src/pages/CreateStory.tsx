
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, X } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function CreateStory() {
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
      toast.error("Please select an image for your story");
      return;
    }
    
    // In a real app, this would upload the story to a backend
    console.log("Creating story:", { imageUrl: selectedImage });
    
    // Show success toast
    toast.success("Story created successfully!");
    
    // Navigate back to home
    navigate("/");
  };
  
  return (
    <Layout>
      <div className="max-w-lg mx-auto pt-4">
        <h1 className="text-xl font-bold mb-6">Create Story</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!selectedImage ? (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center aspect-[9/16] flex flex-col items-center justify-center">
              <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-4">Upload a photo for your story</p>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="story-image-upload"
              />
              <label htmlFor="story-image-upload">
                <Button type="button" variant="outline" className="mx-auto">
                  Select from Device
                </Button>
              </label>
            </div>
          ) : (
            <div className="relative aspect-[9/16]">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full rounded-lg object-cover"
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
          
          <Button type="submit" className="w-full">
            Share to Story
          </Button>
        </form>
      </div>
    </Layout>
  );
}
