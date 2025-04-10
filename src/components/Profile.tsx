import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Award, Gift, Heart, Clock, CheckCircle, MessageCircle, MapPin, Bell, Settings } from "lucide-react";

const Profile = () => {
  return (
    <div className="w-full p-6">
      <Card className="border-none shadow-none">
        <CardHeader className="px-0 pt-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-redalert-400 to-lavender-500 flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">Sarah Miller</h1>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  State University
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button variant="outline" size="sm" className="text-gray-600">
                <Edit2 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-redalert-500 mr-2" />
                  <h3 className="font-medium">Helper Level</h3>
                </div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold">Supporter</p>
                    <p className="text-xs text-gray-500">5 helps away from next level</p>
                  </div>
                  <div className="text-xs font-medium text-redalert-600 bg-redalert-50 px-2 py-0.5 rounded-full">
                    Level 3
                  </div>
                </div>
                <div className="mt-2 h-2 bg-gray-100 rounded-full">
                  <div className="h-full bg-gradient-to-r from-redalert-500 to-lavender-500 rounded-full" style={{width: "65%"}}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-lavender-500 mr-2" />
                  <h3 className="font-medium">Total Points</h3>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">2,450</p>
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Lifetime points earned</p>
                    <p className="text-xs font-medium text-green-600">+750 this month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-teal-500 mr-2" />
                  <h3 className="font-medium">Community Impact</h3>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">12 people</p>
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Helped since joining</p>
                    <p className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                      Top 10%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="badges" className="mt-8">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>
            
            <TabsContent value="badges">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Earned Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
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
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Super Supporter</h3>
                          <span className="text-xs text-redalert-600">3 more helps needed</span>
                        </div>
                        <p className="text-sm text-gray-600">Help 15 different people to earn this badge</p>
                        <div className="mt-1 h-1.5 bg-gray-100 rounded-full">
                          <div className="h-full bg-redalert-300 rounded-full" style={{width: "80%"}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                        <User className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Community Builder</h3>
                          <span className="text-xs text-redalert-600">8 more helps needed</span>
                        </div>
                        <p className="text-sm text-gray-600">Help 20 people to earn this exclusive badge</p>
                        <div className="mt-1 h-1.5 bg-gray-100 rounded-full">
                          <div className="h-full bg-redalert-300 rounded-full" style={{width: "60%"}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex">
                        <div className="h-10 w-10 rounded-full bg-redalert-100 flex items-center justify-center text-redalert-700 mr-4 flex-shrink-0">
                          {i % 2 === 0 ? (
                            <Heart className="h-5 w-5" />
                          ) : i % 3 === 0 ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <MapPin className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {i === 1 
                              ? "You helped Emily at Science Building" 
                              : i === 2 
                              ? "You earned the 'Quick Response' badge" 
                              : i === 3
                              ? "You received 150 points for your help"
                              : i === 4
                              ? "You helped Jessica at Student Center"
                              : "You reached Supporter Level 3"}
                          </p>
                          <p className="text-sm text-gray-500">{i === 1 ? "2 hours ago" : i === 2 ? "Yesterday" : i === 3 ? "3 days ago" : i === 4 ? "Last week" : "2 weeks ago"}</p>
                          <Separator className="my-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Helper Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Average Response Time</p>
                        <p className="text-xl font-bold">5 minutes</p>
                        <div className="h-1.5 bg-gray-100 rounded-full mt-1">
                          <div className="h-full bg-teal-500 rounded-full" style={{width: "85%"}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Help Acceptance Rate</p>
                        <p className="text-xl font-bold">92%</p>
                        <div className="h-1.5 bg-gray-100 rounded-full mt-1">
                          <div className="h-full bg-redalert-500 rounded-full" style={{width: "92%"}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Favorite Location to Help</p>
                        <p className="text-xl font-bold">Library</p>
                        <div className="h-1.5 bg-gray-100 rounded-full mt-1">
                          <div className="h-full bg-lavender-500 rounded-full" style={{width: "65%"}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-medium mb-3">Helper Breakdown</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Helped as Anonymous</p>
                            <p className="text-sm font-medium">4 times</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Helped as Sarah</p>
                            <p className="text-sm font-medium">8 times</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Urgent Requests</p>
                            <p className="text-sm font-medium">5 times</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">Standard Requests</p>
                            <p className="text-sm font-medium">7 times</p>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Total Helps</p>
                            <p className="text-sm font-medium">12 times</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
