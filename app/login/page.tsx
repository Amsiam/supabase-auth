"use client";

import { signIn } from "@/actions/auth";
import SubmitFormButton from "@/components/SubmitFormButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();

  const [state, formAction] = useFormState(signIn, {});

  useEffect(() => {
    if (state?.success === false) {
      toast({
        title: "Error!",
        description: state?.message ?? "Something wrong happend",
        variant: "destructive",
      });
    }
    if (state?.success === true) {
      toast({
        title: "Success!",
        description: state?.message ?? "Login Successful",
        variant: "success",
      });
      router.push("/dashboard");
    }
  }, [state]);
  return (
    <div className="h-screen flex justify-center items-center">
      <form action={formAction}>
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitFormButton className="w-full">Sign In</SubmitFormButton>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
