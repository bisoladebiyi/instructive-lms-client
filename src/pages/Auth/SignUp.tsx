import { useId } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router";
import { IROUTES } from "../../utils/constants/routes";
import Logo from "../../components/ui/Logo";
import { HiOutlineExternalLink } from "react-icons/hi";

const SignUp = () => {
  const id = useId();
  const navigate = useNavigate();

  const onSignUp = () => {
    navigate(IROUTES.DASHBOARD);
  };
  return (
    <div className="h-full bg-gray-50 flex flex-col items-center justify-center relative">
      <Logo className="fixed top-3 left-3" />
      <Link
        to={IROUTES.SIGNUP + "?role=student"}
        className="absolute top-3 right-3 flex items-center gap-1 text-gray-500 underline tex-sm hover:text-gray-600"
      >
        📚Join as a student! <HiOutlineExternalLink />
      </Link>
      <form action="">
        <h1 className="font-medium text-xl mb-2">Create an account</h1>
        <p className="text-gray-700 text-sm mb-5">
          Inspire. Teach. Transform. 🧑‍🏫
        </p>

        <Input
          label="First name"
          type="text"
          id={`fName-${id}`}
          name="fName"
          className="mb-3"
        />
        <Input
          label="Last name"
          type="text"
          id={`lName-${id}`}
          name="fName"
          className="mb-3"
        />
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
        <Input
          label="Confirm password"
          type="password"
          id={`confirm-password-${id}`}
          name="cPassword"
          className="mb-3"
        />
        <Button onClick={onSignUp} text="Sign up" className="w-full" />
      </form>
      <p className="text-sm mt-4">
        Already have an account?{" "}
        <Link className="text-blue-400" to={IROUTES.LOGIN + "?role=instructor"}>
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
