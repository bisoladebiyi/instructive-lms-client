import React, { useId, useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate, useSearchParams } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import Logo from "../../components/ui/Logo";
import { HiOutlineExternalLink } from "react-icons/hi";
import toast from "react-hot-toast";

const SignUp = () => {
  const id = useId();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "instructor";
  const isStudent = role === "student";
  const [isLoading, setIsLoading] = useState(false);

  const onSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Account created successfully!");
      navigate(isStudent ? IROUTES.STUDENT_DASHBOARD : IROUTES.DASHBOARD);
    } catch {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-linear-to-br from-primary-50 via-white to-gray-50 flex flex-col items-center justify-center relative py-8 sm:py-12 px-4">
      <Logo className="fixed top-4 left-4 sm:top-6 sm:left-6" />
      <Link
        to={IROUTES.SIGNUP + (isStudent ? "?role=instructor" : "?role=student")}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 text-gray-600 text-xs sm:text-sm font-medium hover:text-primary-600 transition-colors"
      >
        <span className="hidden sm:inline">{isStudent ? "Become an instructor" : "Join as a student"}</span>
        <span className="sm:hidden">{isStudent ? "Instructor" : "Student"}</span>
        <HiOutlineExternalLink />
      </Link>
      <div className="w-full max-w-md mt-12 sm:mt-0">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              {isStudent ? "Join as a Student" : "Create an account"}
            </h1>
            <p className="text-gray-500 text-sm">
              {isStudent ? "Start your learning journey today" : "Inspire. Teach. Transform."}
            </p>
          </div>

          <form onSubmit={onSignUp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First name"
                type="text"
                id={`fName-${id}`}
                name="fName"
              />
              <Input
                label="Last name"
                type="text"
                id={`lName-${id}`}
                name="lName"
              />
            </div>
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
            <Input
              label="Confirm password"
              type="password"
              id={`confirm-password-${id}`}
              name="cPassword"
            />
            <Button type="submit" text="Create Account" className="w-full mt-6" loading={isLoading} />
          </form>
        </div>
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-primary-600 hover:text-primary-700 font-medium"
            to={IROUTES.LOGIN + `?role=${role}`}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
