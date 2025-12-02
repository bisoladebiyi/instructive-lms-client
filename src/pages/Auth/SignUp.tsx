import { useId } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate, useSearchParams } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import Logo from "../../components/ui/Logo";
import { HiOutlineExternalLink } from "react-icons/hi";

const SignUp = () => {
  const id = useId();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "instructor";
  const isStudent = role === "student";

  const onSignUp = () => {
    navigate(isStudent ? IROUTES.STUDENT_DASHBOARD : IROUTES.DASHBOARD);
  };

  return (
    <div className="min-h-full bg-linear-to-br from-primary-50 via-white to-gray-50 flex flex-col items-center justify-center relative py-12">
      <Logo className="fixed top-6 left-6" />
      <Link
        to={IROUTES.SIGNUP + (isStudent ? "?role=instructor" : "?role=student")}
        className="absolute top-6 right-6 flex items-center gap-1.5 text-gray-600 text-sm font-medium hover:text-primary-600 transition-colors"
      >
        {isStudent ? "Become an instructor" : "Join as a student"} <HiOutlineExternalLink />
      </Link>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              {isStudent ? "Join as a Student" : "Create an account"}
            </h1>
            <p className="text-gray-500 text-sm">
              {isStudent ? "Start your learning journey today" : "Inspire. Teach. Transform."}
            </p>
          </div>

          <form action="" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
            <Button onClick={onSignUp} text="Create Account" className="w-full mt-6" />
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
