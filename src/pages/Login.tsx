
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4 hero-gradient">
        <AuthForm type="login" />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
