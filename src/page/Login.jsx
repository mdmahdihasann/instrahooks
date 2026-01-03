import From from "../components/login/From";
import Logo from "../components/login/Logo";

const Login = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="login-container w-full max-w-md rounded-md bg-white p-6 shadow-lg">
        <Logo />

        <div className="mt-4 border border-gray-300 rounded-md p-6">
          <From />
        </div>

        <div className="mt-3 border border-gray-300 rounded-md p-4 text-center">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
