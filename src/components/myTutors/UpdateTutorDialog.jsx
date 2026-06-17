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
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { Field, FieldGroup, FieldSeparator, FieldSet } from "../ui/field";
import NameField from "../addTutor/NameField";
import ImageField from "../addTutor/ImageField";
import SubjectField from "../addTutor/SubjectField";
import DaysField from "../addTutor/DaysField";
import FeeField from "../addTutor/FeeField";
import SlotField from "../addTutor/SlotField";
import StartField from "../addTutor/StartField";
import InstituteField from "../addTutor/InstituteField";
import LocationField from "../addTutor/LocationField";
import ModeField from "../addTutor/ModeField";
import fields from "@/data/tutorFieldItems.json";
import Link from "next/link";
import { updateTutor } from "@/lib/updateTutor";

const UpdateTutorDialog = ({ tutor }) => {
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
    handleSubmit,
    register,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: tutor.name,
      image: tutor.image,
      subject: tutor.subject,
      days: tutor.days,
      fee: tutor.fee,
      slot: tutor.slot,
      location: tutor.location,
      institute: tutor.institute,
      mode: tutor.mode,
      start: tutor.start,
    },
  });

  const availableProps = {
    control,
    errors,
    register,
  };

  return (
    <Dialog className={"w-full"}>
      <DialogTrigger asChild>
        <Button>
          <Pencil className="h-4 w-4 shrink-0" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Tutor Info</DialogTitle>
          <DialogDescription>Modify the fields.</DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          <form
            onSubmit={handleSubmit((data) => {
              updateTutor({
                ...data,
                tutorId: tutor._id,
                // As this is hitting same endpoint as updateSlot, use flag to indicate whole update or only slot(booking, cancelling).
                updateAll: true,
              });
            })}
          >
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  {fields.map((field) => {
                    const Component = componentsMap[field.component];

                    const componentProps = {};

                    field.props.forEach((propName) => {
                      componentProps[propName] = availableProps[propName];
                    });

                    return (
                      <Component key={field.id} {...componentProps}></Component>
                    );
                  })}
                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button type="submit" className="min-w-32">
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTutorDialog;
