
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, SendHorizonal } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

const locations = [
  { id: "lib", name: "Library", distance: "0.1 miles", eta: "2-5 min" },
  { id: "sc", name: "Student Center", distance: "0.3 miles", eta: "5-8 min" },
  { id: "eng", name: "Engineering Building", distance: "0.5 miles", eta: "8-12 min" },
  { id: "dorm", name: "Dormitories", distance: "0.8 miles", eta: "12-15 min" },
];

const RequestHelp = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [urgency, setUrgency] = useState<"standard" | "urgent">("standard");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (!selectedLocation) {
      toast({
        title: "Please select a location",
        description: "We need to know where to find you",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send this data to a backend
    toast({
      title: "Request Sent",
      description: "We'll notify nearby helpers of your request.",
      variant: "default",
    });
    
    setSubmitted(true);
  };
  
  const handleReset = () => {
    setSelectedLocation(null);
    setUrgency("standard");
    setMessage("");
    setAnonymous(false);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-xl mx-auto mt-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Help Is On The Way!</CardTitle>
          <CardDescription>We've sent your request to nearby helpers</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6 w-24 h-24 rounded-full bg-redalert-100 flex items-center justify-center mx-auto">
            <div className="w-16 h-16 rounded-full bg-redalert-200 flex items-center justify-center animate-pulse">
              <SendHorizonal className="h-8 w-8 text-redalert-500" />
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <p className="font-medium text-gray-900">Your request details:</p>
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {locations.find(l => l.id === selectedLocation)?.name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Urgency:</span> {urgency === "urgent" ? "Urgent (ASAP)" : "Standard (15-30 min)"}
            </p>
            {message && (
              <p className="text-gray-600">
                <span className="font-medium">Message:</span> {message}
              </p>
            )}
          </div>
          
          <div className="bg-redalert-50 rounded-lg p-4 text-left">
            <p className="text-sm font-medium mb-2">What happens next?</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-redalert-200 flex items-center justify-center text-redalert-700 mr-2 flex-shrink-0">1</span>
                <span>Nearby helpers will receive your request and can choose to respond.</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-redalert-200 flex items-center justify-center text-redalert-700 mr-2 flex-shrink-0">2</span>
                <span>Once someone accepts, you'll get a notification with their ETA.</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-redalert-200 flex items-center justify-center text-redalert-700 mr-2 flex-shrink-0">3</span>
                <span>You can communicate through the app to coordinate the meeting.</span>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={handleReset}>Create Another Request</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto mt-6">
      <CardHeader>
        <CardTitle>Request Help</CardTitle>
        <CardDescription>
          Send a request to nearby community members who can bring you period products.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-3">Where are you?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={cn(
                    "border rounded-lg p-3 cursor-pointer transition-all",
                    selectedLocation === location.id
                      ? "border-redalert-500 bg-redalert-50"
                      : "border-gray-200 hover:border-redalert-200 hover:bg-redalert-50/50"
                  )}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{location.name}</p>
                      <p className="text-xs text-gray-500">{location.distance}</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{location.eta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center text-sm">
              <MapPin className="h-4 w-4 text-redalert-500 mr-2" />
              <Button variant="link" className="h-auto p-0 text-redalert-600">
                Use my current location
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3">How urgent is your need?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className={cn(
                  "border rounded-lg p-3 cursor-pointer transition-all",
                  urgency === "standard"
                    ? "border-redalert-500 bg-redalert-50"
                    : "border-gray-200 hover:border-redalert-200 hover:bg-redalert-50/50"
                )}
                onClick={() => setUrgency("standard")}
              >
                <p className="font-medium text-gray-900">Standard</p>
                <p className="text-xs text-gray-500">15-30 minutes is fine</p>
              </div>
              <div
                className={cn(
                  "border rounded-lg p-3 cursor-pointer transition-all",
                  urgency === "urgent"
                    ? "border-redalert-500 bg-redalert-50"
                    : "border-gray-200 hover:border-redalert-200 hover:bg-redalert-50/50"
                )}
                onClick={() => setUrgency("urgent")}
              >
                <p className="font-medium text-gray-900">Urgent</p>
                <p className="text-xs text-gray-500">Need help ASAP</p>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">Additional Details (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Let helpers know any specific details that might help them find you..."
              className="mt-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" checked={anonymous} onCheckedChange={(checked) => setAnonymous(checked as boolean)} />
            <Label htmlFor="anonymous" className="text-sm text-gray-600">
              Send as anonymous request
            </Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-redalert-500 to-lavender-500 hover:from-redalert-600 hover:to-lavender-600">
          Send Request
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RequestHelp;
