
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4 hero-gradient">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-2 text-redalert-800">Join RedAlert</h1>
          <p className="text-center text-gray-600 mb-8">Supporting women across India with dignity and care</p>
          <AuthForm type="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
