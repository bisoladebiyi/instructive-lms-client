import { useId } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import Logo from "../../components/ui/Logo";
import { HiOutlineExternalLink } from "react-icons/hi";

const Login = () => {
  const id = useId();
  const navigate = useNavigate();

  const onLogIn = () => {
    navigate(IROUTES.DASHBOARD);
  };
  return (
    <div className="min-h-full bg-linear-to-br from-primary-50 via-white to-gray-50 flex flex-col items-center justify-center relative py-12">
      <Logo className="fixed top-6 left-6" />
      <Link
        to={IROUTES.LOGIN + "?role=student"}
        className="absolute top-6 right-6 flex items-center gap-1.5 text-gray-600 text-sm font-medium hover:text-primary-600 transition-colors"
      >
        Login as a student <HiOutlineExternalLink />
      </Link>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to continue to your dashboard</p>
          </div>

          <form action="" className="space-y-4">
            <Input
              label="Email"
              type="email"
              id={`email-${id}`}
              name="email"
            />
            <Input
              label="Password"
              type="password"
              id={`password-${id}`}
              name="password"
            />
            <Button onClick={onLogIn} text="Sign In" className="w-full mt-6" />
          </form>
        </div>
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            className="text-primary-600 hover:text-primary-700 font-medium"
            to={IROUTES.SIGNUP + "?role=instructor"}
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
