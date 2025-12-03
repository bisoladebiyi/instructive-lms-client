import React, { useId, useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate, useSearchParams } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import Logo from "../../components/ui/Logo";
import { HiOutlineExternalLink } from "react-icons/hi";
import toast from "react-hot-toast";

const Login = () => {
  const id = useId();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "instructor";
  const isStudent = role === "student";
  const [isLoading, setIsLoading] = useState(false);

  const onLogIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Signed in successfully!");
      navigate(isStudent ? IROUTES.STUDENT_DASHBOARD : IROUTES.DASHBOARD);
    } catch {
      toast.error("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-linear-to-br from-primary-50 via-white to-gray-50 flex flex-col items-center justify-center relative py-8 sm:py-12 px-4">
      <Logo className="fixed top-4 left-4 sm:top-6 sm:left-6" />
      <Link
        to={IROUTES.LOGIN + (isStudent ? "?role=instructor" : "?role=student")}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm font-medium hover:text-primary-600 transition-colors"
      >
        <span className="hidden sm:inline">{isStudent ? "Login as an instructor" : "Login as a student"}</span>
        <span className="sm:hidden">{isStudent ? "Instructor" : "Student"}</span>
        <HiOutlineExternalLink />
      </Link>
      <div className="w-full max-w-md mt-12 sm:mt-0">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-500 text-sm">
              {isStudent
                ? "Sign in to continue learning"
                : "Sign in to continue to your dashboard"}
            </p>
          </div>

          <form onSubmit={onLogIn} className="space-y-4">
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
            <Button type="submit" text="Sign In" className="w-full mt-6" loading={isLoading} />
          </form>
        </div>
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            className="text-primary-600 hover:text-primary-700 font-medium"
            to={IROUTES.SIGNUP + `?role=${role}`}
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
