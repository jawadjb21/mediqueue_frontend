"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form"
import { isMobilePhone } from "validator";

export function BookingDialog({ tutor, postBooking }) {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm();
    /**
     * MAKE A UPDATE SLOT FUNCTION WITH BOOK/CANCEL PARAMS TO KNOW WHICH ACTION TO DO
     * MAKE THIS A FORM
     * CALL BOOK FUNC ON THIS AND CALL SLOT UPDATE FUNCTION INSIDE THAT
     */
    return (
        <Dialog>
            <form onSubmit={handleSubmit(postBooking)}>
                <DialogTrigger asChild>
                    <Button size="lg">Book a session</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        {/* Editable Fields */}

                        <Field>
                            <Label htmlFor="studentName">
                                Student Name
                            </Label>

                            <Input
                                id="studentName"
                                placeholder="Enter your full name"
                                {...register("studentName", {
                                    required: "Student name is required.",
                                })}
                            />
                        </Field>

                        <Field>
                            <Label htmlFor="phone">
                                Phone Number
                            </Label>

                            <Input
                                id="phone"
                                placeholder="+1 234 567 890"
                                {...register("phone", {
                                    required: "Phone number is required.",
                                    validate: (value) => isMobilePhone(value),
                                })}
                            />
                        </Field>

                        {/* Tutor Information */}

                        <div className="rounded-xl border bg-muted/40 p-4">
                            <h3 className="mb-4 font-semibold text-foreground">
                                Tutor Information
                            </h3>

                            <div className="space-y-3">
                                <Field>
                                    {/** Hide this field but track it for form submission */}
                                    <Input
                                        type="hidden"
                                        {...register("tutorId")}
                                        value={tutor._id}
                                    />

                                </Field>

                                <Field>
                                    <Label>Tutor Name</Label>

                                    <Input
                                        value={tutor.name}
                                        readOnly
                                        className="bg-muted text-muted-foreground"
                                    />

                                    {/** Disabled or readOnly attributes are not submitted by register. So, that's for visual effects only.
                                     * Track the actual data using this hidden input field, so one field is for UX, and other is for functionality.
                                     */}
                                    <Input
                                        type="hidden"
                                        {...register("tutorName")}
                                        value={tutor.name}
                                    />
                                </Field>

                                <Field>
                                    <Label>Your Email</Label>

                                    <Input
                                        value={user?.email}
                                        readOnly
                                        className="bg-muted text-muted-foreground"
                                    />

                                    <Input
                                        type="hidden"
                                        {...register("studentEmail")}
                                        value={user?.email}
                                    />
                                </Field>
                            </div>
                        </div>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
