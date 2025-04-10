
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, User, Mail, Lock, MapPin, Bell, Shield } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [userRole, setUserRole] = useState("both");
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [safetyUnderstanding, setSafetyUnderstanding] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === "signup") {
      // Basic validation
      if (password !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please make sure your passwords match.",
          variant: "destructive",
        });
        return;
      }
      
      if (!termsAgreed || !safetyUnderstanding) {
        toast({
          title: "Agreement Required",
          description: "Please agree to our terms and safety understanding.",
          variant: "destructive",
        });
        return;
      }
    }
    
    // In a real app, this would connect to an auth service
    toast({
      title: type === "login" ? "Login Successful" : "Account Created",
      description: "Welcome to RedAlert!",
      variant: "default",
    });
    
    // For demonstration purposes, we'll redirect to the dashboard
    window.location.href = "/dashboard";
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-redalert-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {type === "login" ? "Welcome Back" : "Create an Account"}
        </CardTitle>
        <CardDescription>
          {type === "login" 
            ? "Sign in to your RedAlert account" 
            : "Join our community of support and empowerment"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location (City/Area)
                </Label>
                <Input 
                  id="location" 
                  placeholder="Enter your city or area" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender (Optional)</Label>
                <select 
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>I want to join as:</Label>
                <RadioGroup defaultValue="both" value={userRole} onValueChange={setUserRole} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="requester" id="requester" />
                    <Label htmlFor="requester">I may need help</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="supporter" id="supporter" />
                    <Label htmlFor="supporter">I want to help others</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both">Both</Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Password
            </Label>
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {type === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input 
                    id="confirmPassword" 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm your password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Label>Preferences:</Label>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="notifications" 
                    checked={enableNotifications}
                    onCheckedChange={(checked) => setEnableNotifications(checked as boolean)}
                  />
                  <label
                    htmlFor="notifications"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    <Bell className="h-4 w-4" />
                    Enable real-time notifications for requests nearby
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="privateProfile" 
                    checked={privateProfile}
                    onCheckedChange={(checked) => setPrivateProfile(checked as boolean)}
                  />
                  <label
                    htmlFor="privateProfile"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  >
                    <Shield className="h-4 w-4" />
                    Make my profile private (only show when I respond)
                  </label>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Label>Agreement:</Label>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={termsAgreed}
                    onCheckedChange={(checked) => setTermsAgreed(checked as boolean)}
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the <a href="/terms" className="text-redalert-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-redalert-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="safety" 
                    checked={safetyUnderstanding}
                    onCheckedChange={(checked) => setSafetyUnderstanding(checked as boolean)}
                    required
                  />
                  <label
                    htmlFor="safety"
                    className="text-sm leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I understand this app is for mutual assistance and not for medical or life-threatening emergencies
                  </label>
                </div>
              </div>
            </>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-redalert-500 to-lavender-500 hover:from-redalert-600 hover:to-lavender-600"
            disabled={type === "signup" && (!termsAgreed || !safetyUnderstanding)}
          >
            {type === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {type === "login" ? (
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-redalert-600 hover:underline">
              Sign up
            </a>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-redalert-600 hover:underline">
              Login
            </a>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
