"use client";

import { signUpSchema } from "@/lib/validations";

import AuthForm from "../../../components/forms/AuthForm";

function SignUp() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignUp;
