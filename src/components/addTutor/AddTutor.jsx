"use client";
import { Button } from "@/components/ui/button";
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
import fields from "@/data/tutorFieldItems.json"


const AddTutor = ({ postTutor }) => {

    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError
    } = useForm();

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
                        <Field
                            orientation="horizontal"
                            className="justify-start py-4"
                        >
                            <Button
                                variant="outline"
                                type="button"
                                className="min-w-32"
                            >
                                <Link href={"/"}>
                                    Cancel
                                </Link>
                            </Button>
                        </Field>

                        <div className="mb-10 text-center">
                            <h1 className="text-4xl font-bold text-foreground">
                                Become a Tutor
                            </h1>

                            <p className="mt-3 text-muted-foreground">
                                Share your expertise and connect with students looking
                                to learn from experienced educators.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(postTutor)}>
                            <FieldGroup>
                                <FieldSet>

                                    <FieldGroup>
                                        <NameField errors={errors} register={register} ></NameField>

                                        <ImageField errors={errors} register={register}></ImageField>

                                        <SubjectField control={control} errors={errors} ></SubjectField>

                                        <DaysField control={control} errors={errors}></DaysField>

                                        <FeeField errors={errors} register={register}></FeeField>

                                        <SlotField errors={errors} register={register}></SlotField>

                                        <StartField control={control} errors={errors}></StartField>

                                        <InstituteField errors={errors} register={register}></InstituteField>

                                        <LocationField errors={errors} register={register}></LocationField>

                                        <ModeField control={control} errors={errors}></ModeField>
                                    </FieldGroup>
                                </FieldSet>

                                <FieldSeparator />

                                <Field
                                    orientation="horizontal"
                                    className="justify-end gap-3 pt-4"
                                >
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="min-w-32"
                                    >
                                        <Link href={"/"}>
                                            Cancel
                                        </Link>
                                    </Button>

                                    <Button
                                        type="submit"
                                        className="min-w-32"
                                    >
                                        Submit
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div >
        </div >
    );
};

export default AddTutor;