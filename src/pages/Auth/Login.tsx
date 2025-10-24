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
    <div className="h-full bg-gray-50 flex flex-col items-center justify-center relative">
      <Logo className="fixed top-3 left-3" />
      <Link
        to={IROUTES.LOGIN + "?role=student"}
        className="absolute top-3 right-3 flex items-center gap-1 text-gray-500 underline tex-sm hover:text-gray-600"
      >
        📚 Login as a student! <HiOutlineExternalLink />
      </Link>
      <form action="">
        <h1 className="font-medium text-xl mb-2">Log in</h1>
        <p className="text-gray-700 text-sm mb-5">Inspire. Teach. Transform.</p>

        <Input
          label="Email"
          type="email"
          id={`email-${id}`}
          name="email"
          className="mb-3"
        />
        <Input
          label="Password"
          type="password"
          id={`password-${id}`}
          name="password"
          className="mb-3"
        />
        <Button onClick={onLogIn} text="Log in" className="w-full" />
      </form>
      <p className="text-sm mt-4">
        Don't have an account?{" "}
        <Link
          className="text-blue-400"
          to={IROUTES.SIGNUP + "?role=instructor"}
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
