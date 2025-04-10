
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock, Award, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface Request {
  id: string;
  location: string;
  distance: string;
  time: string;
  urgent: boolean;
  anonymous: boolean;
  name?: string;
  message?: string;
}

const mockRequests: Request[] = [
  {
    id: "req-1",
    location: "Library - Main Floor",
    distance: "0.2 miles",
    time: "3 min ago",
    urgent: true,
    anonymous: false,
    name: "Emily",
    message: "I'm wearing a blue jacket and sitting near the computers."
  },
  {
    id: "req-2",
    location: "Student Center - Cafe",
    distance: "0.5 miles",
    time: "8 min ago",
    urgent: false,
    anonymous: true,
    message: "Need tampons please. I'm at the back corner table."
  },
  {
    id: "req-3",
    location: "Engineering Building - Room 204",
    distance: "0.8 miles",
    time: "15 min ago",
    urgent: false,
    anonymous: false,
    name: "Taylor",
  },
];

const OfferHelp = () => {
  const [requests, setRequests] = useState<Request[]>(mockRequests);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [accepted, setAccepted] = useState(false);
  const { toast } = useToast();
  
  const handleAccept = () => {
    if (!selectedRequest) return;
    
    // In a real app, we would send this data to a backend
    toast({
      title: "You've accepted the request",
      description: "Thank you for offering help! You can now coordinate with the requester.",
      variant: "default",
    });
    
    setAccepted(true);
  };
  
  const handleReset = () => {
    setSelectedRequest(null);
    setAccepted(false);
    // Remove the accepted request from the list
    if (selectedRequest) {
      setRequests(requests.filter(r => r.id !== selectedRequest.id));
    }
  };

  if (accepted && selectedRequest) {
    return (
      <Card className="w-full max-w-xl mx-auto mt-6">
        <CardHeader className="text-center border-b">
          <CardTitle className="text-xl">You're helping someone!</CardTitle>
          <CardDescription>Thank you for making a difference</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">
                {selectedRequest.anonymous ? "Anonymous" : selectedRequest.name}
              </h3>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1 text-redalert-500" />
                {selectedRequest.location}
              </p>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1 text-gray-500" />
                Requested {selectedRequest.time}
              </p>
            </div>
            {selectedRequest.urgent && (
              <Badge className="bg-redalert-500">Urgent</Badge>
            )}
          </div>
          
          {selectedRequest.message && (
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
              "{selectedRequest.message}"
            </div>
          )}
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Recommended Items to Bring:</h3>
            <div className="grid grid-cols-2 gap-3">
              <Card className="border-redalert-100">
                <CardContent className="p-3 flex items-center">
                  <div className="h-8 w-8 bg-redalert-100 rounded-full flex items-center justify-center text-redalert-600 mr-2">
                    <span className="text-xs font-medium">P</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pads</p>
                    <p className="text-xs text-gray-500">Regular absorbency</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-redalert-100">
                <CardContent className="p-3 flex items-center">
                  <div className="h-8 w-8 bg-redalert-100 rounded-full flex items-center justify-center text-redalert-600 mr-2">
                    <span className="text-xs font-medium">T</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tampons</p>
                    <p className="text-xs text-gray-500">Regular absorbency</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-redalert-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">Your Rewards</h3>
              <Award className="h-5 w-5 text-lavender-500" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-gray-600">Helper Points</span>
                <span className="font-medium">+50 pts</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Quick Response Bonus</span>
                <span className="font-medium">+15 pts</span>
              </p>
              <Separator className="my-2" />
              <p className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium text-redalert-600">+65 pts</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button className="bg-redalert-500 text-white hover:bg-redalert-600">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message Requester
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button variant="ghost" onClick={handleReset}>
            Return to Available Requests
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-xl mx-auto mt-6">
      <CardHeader>
        <CardTitle>Offer Help</CardTitle>
        <CardDescription>
          People nearby need your help. Select a request to respond to.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.length > 0 ? (
            requests.map((request) => (
              <Card 
                key={request.id}
                className={cn(
                  "cursor-pointer transition-all hover:shadow",
                  selectedRequest?.id === request.id 
                    ? "border-redalert-500 bg-redalert-50/50" 
                    : "border-gray-200"
                )}
                onClick={() => setSelectedRequest(request)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">
                          {request.anonymous ? "Anonymous" : request.name}
                        </h3>
                        {request.urgent && (
                          <Badge className="ml-2 bg-redalert-500">Urgent</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {request.location}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{request.distance}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{request.time}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-xs text-redalert-600 bg-redalert-50 px-2 py-0.5 rounded-full">
                        <Heart className="h-3 w-3 mr-1" />
                        <span>+50 pts</span>
                      </div>
                    </div>
                  </div>
                  
                  {request.message && (
                    <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      "{request.message}"
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No Requests Right Now</h3>
              <p className="text-gray-600 mt-1">
                There are no active requests in your area at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAccept}
          disabled={!selectedRequest}
          className={cn(
            "w-full",
            selectedRequest 
              ? "bg-gradient-to-r from-redalert-500 to-lavender-500 hover:from-redalert-600 hover:to-lavender-600" 
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          )}
        >
          {selectedRequest ? "Accept Request" : "Select a Request First"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferHelp;
