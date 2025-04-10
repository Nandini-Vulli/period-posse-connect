
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, Bell, Clock, Heart, MapPin, User } from "lucide-react";
import RequestHelp from "./RequestHelp";
import OfferHelp from "./OfferHelp";
import Badge from "./Badge";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full p-6">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Sarah!</h1>
          <p className="text-gray-600">Ready to connect with your community?</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2">
          <Button variant="outline" className="border-redalert-200 text-redalert-700">
            <Bell className="h-4 w-4 mr-2" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-redalert-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-redalert-500"></span>
            </span>
          </Button>
          <Button variant="outline" className="border-redalert-200 text-redalert-700">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="need-help">Need Help</TabsTrigger>
          <TabsTrigger value="offer-help">Offer Help</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Your Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-lavender-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold">Supporter</p>
                    <p className="text-xs text-gray-500">5 helps away from next level</p>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-gradient-to-r from-redalert-500 to-lavender-500 rounded-full" style={{width: "65%"}}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Point Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Heart className="h-8 w-8 text-redalert-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold">750 pts</p>
                    <p className="text-xs text-gray-500">Earned this month</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Lifetime: 2,450 pts</span>
                  <Button variant="ghost" size="sm" className="text-redalert-600 hover:text-redalert-700 hover:bg-redalert-50 p-0 h-auto">
                    View History
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-teal-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold">5 min</p>
                    <p className="text-xs text-gray-500">Average response</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Helped: 12 people</span>
                  <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                    Top 10%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                <Badge 
                  name="First Help" 
                  icon={<Heart className="h-6 w-6" />} 
                  color="bg-redalert-500" 
                  unlocked={true} 
                />
                <Badge 
                  name="Quick Response" 
                  icon={<Clock className="h-6 w-6" />} 
                  color="bg-teal-500" 
                  level={2}
                  unlocked={true} 
                />
                <Badge 
                  name="Campus Hero" 
                  icon={<MapPin className="h-6 w-6" />} 
                  color="bg-lavender-500" 
                  unlocked={true} 
                />
                <Badge 
                  name="Super Supporter" 
                  icon={<Award className="h-6 w-6" />} 
                  color="bg-gray-500" 
                  unlocked={false} 
                />
                <Badge 
                  name="Community Builder" 
                  icon={<User className="h-6 w-6" />} 
                  color="bg-gray-500" 
                  unlocked={false} 
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-700 mr-3">
                        {i === 1 ? (
                          <Heart className="h-4 w-4" />
                        ) : i === 2 ? (
                          <Award className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {i === 1 
                            ? "You helped Emily at Science Building" 
                            : i === 2 
                            ? "You earned the 'Quick Response' badge" 
                            : "You received 150 points for your help"}
                        </p>
                        <p className="text-xs text-gray-500">{i === 1 ? "2 hours ago" : i === 2 ? "Yesterday" : "3 days ago"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Nearby Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-redalert-100 flex items-center justify-center text-redalert-700 mr-3">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {i === 1 
                            ? "3 people helped in your area today" 
                            : i === 2 
                            ? "New request at Student Center (0.3 miles)" 
                            : "Jennifer is now a top helper in your area"}
                        </p>
                        <p className="text-xs text-gray-500">{i === 1 ? "Today" : i === 2 ? "15 minutes ago" : "This week"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="need-help">
          <RequestHelp />
        </TabsContent>
        
        <TabsContent value="offer-help">
          <OfferHelp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
