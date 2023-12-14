import { LoginForm } from "@/features/authentication/login";

const LoginPage = () => {
  return (
    <section className="w-screen h-screen bg-secondary flex justify-center items-center relative">
      <LoginForm />
      <div className="absolute bottom-0 left-0 w-full py-2 bg-primary text-white text-center text-sm">
        Powered By Yollo Team
      </div>
    </section>
  );
};

export default LoginPage;
