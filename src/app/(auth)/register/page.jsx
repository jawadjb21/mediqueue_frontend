"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import isEmail from 'validator/lib/isEmail';
import Logo from "@/assets/Logo.png";
import { authClient } from "@/lib/auth-client";
import isURL from "validator/lib/isURL";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const watchPassword = watch("password");
    const watchConfirmPassword = watch("confirmPassword");

    const handleRegister = async (data) => {
        setLoading(true);
        const { name, image, email, password, confirmPassword } = data;
        const { data: userData, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
            callbackURL: process.env.BETTER_AUTH_URL,
        });
        if (error) {
            if (error.message?.toLowerCase() === "password is too short") {
                setError("password", {
                    type: "manual",
                    message: "Password needs to be at least 12 characters."
                })
            };
            if (error.message?.toLowerCase() === "passwords don't match") {
                setError("confirmPassword", {
                    type: "manual",
                    message: "Passwords don't match."
                })
            };
            if (error.message?.toLowerCase() === "not a valid email") {
                setError("email", {
                    type: "manual",
                    message: "Please enter a valid email."
                })
            }
            if (error.message?.toLowerCase() === "not a valid url") {
                setError("photo", {
                    type: "manual",
                    message: "Please enter a valid URL."
                })
            }
            setLoading(false);
            return;
        }
        setLoading(false);
        router.push("/");
    }

    const handleGoogleSignIn = async () => {
        console.log("clicked")
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };


    return (
        <Card className="w-full max-w-sm container mx-auto my-auto">
            <div className="flex items-center justify-center mb-4">
                <Image
                    src={Logo}
                    alt="MediQueue"
                    className="h-14 w-14"
                />
                <span className="mt-2 text-primary font-bold text-2xl">
                    MediQueue
                </span>
            </div>
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                    Welcome
                </CardTitle>

                <CardDescription className="text-center">
                    Create your account and start acing.
                </CardDescription>

            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className={"font-bold"}>Name</Label>
                            <Input
                                autoFocus
                                className={"h-11 rounded-xl border-border focus-visible:ring-primary"}
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                {...register("name", { required: "Name is required." })}
                            />
                            {errors.name && (
                                <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
                                    {errors.name.message}
                                </div>
                            )}
                            <Label htmlFor="photo" className={"font-bold"}>Photo</Label>
                            <Input
                                className={"h-11 rounded-xl border-border focus-visible:ring-primary"}
                                id="email"
                                type="text"
                                placeholder="Enter your photo URL"
                                {...register("photo", { required: "Photo is required.", validate: value => isURL(value) || "Please enter a valid URL" })}
                            />
                            {errors.photo && (
                                <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
                                    {errors.photo.message}
                                </div>
                            )}
                            <Label htmlFor="email" className={"font-bold"}>Email</Label>
                            <Input
                                className={"h-11 rounded-xl border-border focus-visible:ring-primary"}
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                {...register("email", { required: "Email is required.", validate: value => isEmail(value) || "Please enter a valid password" })}
                            />
                            {errors.email && (
                                <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
                                    {errors.email.message}
                                </div>
                            )}
                            <Label htmlFor="password" className={"font-bold"}>Password</Label>
                            <div className="relative">
                                <Input className={"h-11 rounded-xl border-border focus-visible:ring-primary pr-10"} id="password" placeholder="Enter your password" type={showPassword ? "text" : "password"} {...register("password", {
                                    required: "Password is required.", minLength: {
                                        value: 1,
                                        message: 'password is too short' // JS only: <p>error message</p> TS only support string
                                    },
                                    validate: value => value === watchConfirmPassword || "password don't match"
                                })} />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && (
                                <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
                                    {errors.password.message}
                                </div>
                            )}
                            <Label htmlFor="confirmPassword" className={"font-bold"}>Confirm Password</Label>
                            <div className="relative">
                                <Input className={"h-11 rounded-xl border-border focus-visible:ring-primary pr-10"}
                                    id="password" placeholder="Enter your password" type={showConfirmPassword ? "text" : "password"}
                                    {...register("confirmPassword", {
                                        required: "Please type your password again.",
                                        validate: value => value === watchPassword || "passwords dont match"
                                    })} />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
                                    {errors.confirmPassword.message}
                                </div>
                            )}

                            <Button type="submit" className="w-full h-11 mt-2 rounded-xl font-semibold shadow-md">
                                {loading ? "Please wait..." : "Register"}
                            </Button>
                        </div>
                    </div>
                </form>
            </CardContent>
            <div className="relative my-2">

                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>

            </div>
            <CardFooter className="flex-col gap-2">
                <Button variant="outline" className="h-11 w-full rounded-xl hover:bg-muted" onClick={handleGoogleSignIn}>
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </Button>
            </CardFooter>
            <CardAction className={"mx-auto mb-2 text-lg"}>
                <p className="text-muted-foreground font-bold">
                    Already have an account?
                    <Link
                        href="/login"
                        className="ml-1 font-medium text-primary hover:underline">
                        Login
                    </Link>

                </p>
            </CardAction>
        </Card >
    );
};

export default RegisterPage;