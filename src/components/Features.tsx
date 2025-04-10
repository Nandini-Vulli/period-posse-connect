
import { CheckCircle2, Users, Award, Clock, MessageCircle, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Quick Assistance",
    description: "Send a request and get connected with nearby helpers within minutes.",
    icon: Clock,
    color: "from-redalert-500 to-redalert-600",
  },
  {
    title: "Location Matching",
    description: "Our smart system finds helpers in your vicinity for quick response times.",
    icon: MapPin,
    color: "from-lavender-500 to-lavender-600",
  },
  {
    title: "Discreet Communication",
    description: "Private in-app messaging for respectful and dignified help coordination.",
    icon: MessageCircle,
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Community Building",
    description: "Join a network of supporters who understand and care for each other.",
    icon: Users,
    color: "from-redalert-500 to-lavender-500",
  },
  {
    title: "Reward System",
    description: "Earn points, badges, and recognition for helping others in need.",
    icon: Award,
    color: "from-lavender-500 to-teal-500",
  },
  {
    title: "Always Ready",
    description: "Whether you need help or want to help, the platform is always there for you.",
    icon: CheckCircle2,
    color: "from-teal-500 to-redalert-500",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How RedAlert Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects people who need period products with those who can help, creating a supportive community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 border border-redalert-200 rounded-full text-redalert-700 bg-redalert-50">
            <span className="text-sm font-medium">Be among the first to join our community</span>
          </div>
          
          <div className="mt-10">
            <p className="text-gray-600">RedAlert is a newly launched app. Join now and help shape the future of period support!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
