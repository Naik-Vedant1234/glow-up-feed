
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Here we would normally send a password reset email
    // For this demo, we'll simulate a successful request after a delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Reset link sent",
        description: "Check your email for password reset instructions",
      });
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl font-bold gradient-text">GlowUp</h1>
        <p className="text-muted-foreground mt-2">Reset your password</p>
      </div>
      
      {submitted ? (
        <div className="text-center space-y-4">
          <div className="bg-muted rounded-full p-3 inline-flex">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Check your email</h2>
          <p className="text-muted-foreground">
            We've sent a password reset link to {email}
          </p>
          <div className="pt-4">
            <Link to="/login" className="text-primary hover:underline">
              Return to login
            </Link>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                We'll send you a link to reset your password
              </p>
            </div>
            
            <Button
              type="submit"
              className="w-full auth-button"
              disabled={loading}
            >
              {loading ? "Sending link..." : "Send reset link"}
            </Button>
          </form>
          
          <div className="text-center text-sm">
            <Link to="/login" className="text-primary hover:underline flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to login
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
