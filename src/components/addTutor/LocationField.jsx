import React from "react";
import FormErrors from "../shared/FormErrors";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const LocationField = ({ errors, register }) => {
  return (
    <Field>
      <FieldLabel htmlFor="location">Location</FieldLabel>

      <Input
        id="location"
        placeholder="Your location."
        {...register("location", {
          required: "Please mention your location.",
        })}
      />
      <FormErrors errors={errors} field={"location"}></FormErrors>
    </Field>
  );
};

export default LocationField;
