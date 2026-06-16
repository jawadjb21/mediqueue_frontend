import React from "react";
import FormErrors from "../shared/FormErrors";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { isNumeric } from "validator";

const SlotField = ({ register, errors }) => {
  return (
    <Field>
      <FieldLabel htmlFor="slot">Total Slot</FieldLabel>

      <Input
        id="slot"
        placeholder="Your total available slots."
        {...register("slot", {
          required: "Slot Number is required.",
          validate: (value) => {
            return isNumeric(value) || "Please enter a number only.";
          },
          min: {
            value: 1,
            message: "You need to have at least 1 slot available.",
          },
        })}
      />
      <FormErrors errors={errors} field={"slot"}></FormErrors>
    </Field>
  );
};

export default SlotField;
