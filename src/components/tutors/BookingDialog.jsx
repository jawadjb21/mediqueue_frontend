"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { isMobilePhone } from "validator";
import FormErrors from "../shared/FormErrors";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function BookingDialog({ tutor, postBooking }) {
  const router = useRouter();
  
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Book a session</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form
          onSubmit={handleSubmit(async (data) => {
            const result = await postBooking({
              ...data,
              tutorId: tutor._id,
              userId: user.id,
            });
            if (result.ok) {
              toast.success(result.message, {
                position: "top-center",
                action: {
                  label: "Okay",
                  onClick: () => console.log("Okay"),
                },
              });
              router.push("/tutors");
              router.refresh();
            }
          })}
        >
          <DialogHeader>
            <DialogTitle>Book your session</DialogTitle>
            <DialogDescription>
              Fill out your info and book a session
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="studentName">Student Name</Label>

              <Input
                id="studentName"
                autoFocus
                placeholder="Enter your full name"
                {...register("studentName", {
                  required: "Student name is required.",
                })}
              />
              <FormErrors errors={errors} field={"studentName"}></FormErrors>
            </Field>

            <Field>
              <Label htmlFor="phone">Phone Number</Label>

              <Input
                id="phone"
                placeholder="+1 234 567 890"
                {...register("phone", {
                  required: "Phone number is required.",
                  validate: (value) => {
                    return (
                      isMobilePhone(value) ||
                      "Please enter a valid phone number."
                    );
                  },
                })}
              />
              <FormErrors errors={errors} field={"phone"}></FormErrors>
            </Field>

            <Field>
              <Label>Your Email</Label>

              <Input
                value={user?.email || ""}
                readOnly
                className="bg-muted text-muted-foreground"
              />

              <Input
                type="hidden"
                {...register("studentEmail")}
                value={user?.email}
              />
            </Field>

            {/* Tutor Information */}

            <div className="rounded-xl border bg-muted/40 p-4">
              <h3 className="mb-4 font-semibold text-foreground">
                Tutor Information
              </h3>

              <div className="space-y-3">
                <Field>
                  <Label>Tutor Name</Label>

                  <Input
                    value={tutor?.name || ""}
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
              </div>
            </div>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Book Session</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
