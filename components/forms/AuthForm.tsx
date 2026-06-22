"use client";

import { schema } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Props } from "next/script";
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { signInSchema } from "@/lib/validations";

interface AuthFormProps<T extends FieldValues> {
  formType: "SIGN_IN" | "SING_UP";
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; data: T }>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    // Do something with the form values.
    console.log(data);
    onSubmit();
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <form
      className="mt-10 space-y-6"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      {Object.keys(defaultValues).map((field) => {
        return (
          <Controller
            key={field}
            name={field as Path<T>}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                className="flex w-full flex-col gap-2.5"
                data-invalid={fieldState.invalid}
              >
                <FieldLabel
                  htmlFor={`form-rhf-${field.name}`}
                  className="paragraph-medium text-dark400_light700"
                >
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FieldLabel>
                <Input
                  {...field}
                  required
                  id={`form-rhf-${field.name}`}
                  aria-invalid={fieldState.invalid}
                  placeholder={`Add ${field.name}`}
                  autoComplete="off"
                  type={field.name ? "password" : "text"}
                  className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        );
      })}

      <Button
        type="button"
        form="form-rhf"
        disabled={form.formState.isSubmitting}
        className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter text-light-900!"
      >
        {form.formState.isSubmitting
          ? buttonText === "Sign In"
            ? "Signing In..."
            : "Signing Up..."
          : buttonText}
      </Button>
      {formType === "SIGN_IN" ? (
        <p>
          Don't have an account?{" "}
          <Link
            href={ROUTES.SIGN_UP}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign Up
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link
            href={ROUTES.SIGN_IN}
            className="paragraph-semibold primary-text-gradient"
          >
            Sign In
          </Link>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
