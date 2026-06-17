"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Field,
  FieldGroup,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useForm } from "react-hook-form";
import NameField from "./NameField";
import SubjectField from "./SubjectField";
import DaysField from "./DaysField";
import ImageField from "./ImageField";
import FeeField from "./FeeField";
import SlotField from "./SlotField";
import StartField from "./StartField";
import InstituteField from "./InstituteField";
import LocationField from "./LocationField";
import ModeField from "./ModeField";
import fields from "@/data/tutorFieldItems.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddTutor = ({ postTutor }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const componentsMap = {
    NameField,
    ImageField,
    SubjectField,
    DaysField,
    FeeField,
    SlotField,
    StartField,
    InstituteField,
    LocationField,
    ModeField,
  };

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const availableProps = { control, errors, register };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background py-16">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <Card
          className="
            mx-auto
            w-full
            max-w-4xl
            border-border/50
            shadow-2xl
            backdrop-blur-sm
          "
        >
          <CardContent className="p-8 md:p-10">
            <Field orientation="horizontal" className="justify-start py-4">
              <Button variant="outline" type="button" className="min-w-32">
                <Link href={"/"}>Cancel</Link>
              </Button>
            </Field>

            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-foreground">
                Become a Tutor
              </h1>

              <p className="mt-3 text-muted-foreground">
                Share your expertise and connect with students looking to learn
                from experienced educators.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(async (data) => {
                const result = await postTutor({
                  ...data,
                  userId: user.id,
                });
                if (result.ok) {
                  toast.success(result.message, {
                    position: "top-center",
                    action: {
                      label: "Okay",
                      onClick: () => console.log("Added Tutor"),
                    },
                  });
                  router.push("/tutors");
                  router.refresh();
                }
              })}
            >
              <FieldGroup>
                <FieldSet>
                  <FieldGroup>
                    {fields.map((field) => {
                      {
                        /* 
                                                    React can't render fields from array or object contents like <object.component> 
                                                    So, dynamically render them by storing the components inside an array, and accessing them
                                                    on demand.
                                                */
                      }
                      const Component = componentsMap[field.component];

                      {
                        /* As JSON can't store funcs, get them dynamically */
                      }
                      const componentProps = {};

                      field.props.forEach((propName) => {
                        componentProps[propName] = availableProps[propName];
                      });

                      {
                        /* Now render the component and also destructure the props as arguments dynamically. */
                      }
                      return (
                        <Component
                          key={field.id}
                          {...componentProps}
                        ></Component>
                      );
                    })}
                  </FieldGroup>
                </FieldSet>

                <FieldSeparator />

                <Field
                  orientation="horizontal"
                  className="justify-end gap-3 pt-4"
                >
                  <Button variant="outline" type="button" className="min-w-32">
                    <Link href={"/"}>Cancel</Link>
                  </Button>

                  <Button type="submit" className="min-w-32">
                    Submit
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddTutor;
