import React from "react";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import FormErrors from "../shared/FormErrors";
import { isNumeric } from "validator";

const FeeField = ({ register, errors }) => {
  return (
    <Field>
      <FieldLabel htmlFor="fee">Hourly Fee</FieldLabel>

      <Input
        id="fee"
        placeholder="Fee"
        {...register("fee", {
          required: "Please mention your fees.",
          validate: (value) => {
            // validator only checks on strings. Add tutor submits strings, and validation passes. But, in backend, it's stored
            // as Number. On edit form(Update Tutor), it's now submitted as Number(from database). SO, validation fails on Update.
            // So, convert to String to pass validation. 
            return isNumeric(String(value)) || "Please enter a number only.";
          },
        })}
      />
      <FormErrors errors={errors} field={"fee"}></FormErrors>
    </Field>
  );
};

export default FeeField;
