
import Navbar from "@/components/Navbar";
import DashboardComponent from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 mt-16">
        <DashboardComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
