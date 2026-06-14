import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useForm } from "react-hook-form";

const AddTutor = () => {
    const {
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

                        <form>
                            <FieldGroup>
                                <FieldSet>
                                    <FieldLegend>Add Tutor</FieldLegend>

                                    <FieldDescription>
                                        Fill in your info and start earning!
                                    </FieldDescription>

                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="name">
                                                Name
                                            </FieldLabel>

                                            <Input
                                                id="card-name"
                                                placeholder="John Doe"
                                                {...register("name", { required: "Name is required."})}
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="image">
                                                Image
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />

                                            <FieldDescription>
                                                Enter a image URL.
                                            </FieldDescription>
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="subject">
                                                Subject
                                            </FieldLabel>
                                            <Select defaultValue="">
                                                <SelectTrigger id="subject">
                                                    <SelectValue placeholder="Subject" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                                                        <SelectItem value="Physics">Physics</SelectItem>
                                                        <SelectItem value="Biology">Biology</SelectItem>
                                                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                                                        <SelectItem value="Programming">Programming</SelectItem>
                                                        <SelectItem value="English">English</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="days">
                                                Available Days
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="fee">
                                                Hourly Fee
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="slots">
                                                Total Slot
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="start">
                                                Start Date
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="institue">
                                                Insitution
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="location">
                                                Location
                                            </FieldLabel>

                                            <Input
                                                id="card-number"
                                                placeholder="https://www.example.com"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="mode">
                                                Teaching Mode
                                            </FieldLabel>

                                            <Select defaultValue="">
                                                <SelectTrigger id="mode">
                                                    <SelectValue placeholder="Mode" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="Offline">Offline</SelectItem>
                                                        <SelectItem value="Online">Online</SelectItem>
                                                        <SelectItem value="Both">Both</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </Field>

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