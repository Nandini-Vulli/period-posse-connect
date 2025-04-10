
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
            <span className="text-sm font-medium">Join 2,500+ people in our community</span>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex -space-x-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-gradient-to-br ${
                    i % 2 === 0 ? "from-redalert-400 to-redalert-500" : "from-lavender-400 to-lavender-500"
                  }`}
                >
                  <span className="text-xs font-medium text-white">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="bg-white shadow-md rounded-full px-6 py-2 flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
