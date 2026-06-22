"use client";

import { signInSchema } from "@/lib/validations";

import AuthForm from "../../../components/forms/AuthForm";

function SignIn() {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}

export default SignIn;
