
import Navbar from "@/components/Navbar";
import ProfileComponent from "@/components/Profile";
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 mt-16">
        <ProfileComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
