import React from "react";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import FormErrors from "../shared/FormErrors";
import { Input } from "../ui/input";
import isURL from "validator/lib/isURL";

const ImageField = ({ register, errors }) => {
  return (
    <Field>
      <FieldLabel htmlFor="image">Image</FieldLabel>

      <Input
        id="image"
        placeholder="https://www.example.com"
        {...register("image", {
          required: false,
          validate: (value) => {
            if (!value) return true;
            return isURL(value) || "Please enter a valid URL.";
          },
        })}
      />
      <FormErrors errors={errors} field={"image"}></FormErrors>

      <FieldDescription>Enter a image URL.</FieldDescription>
    </Field>
  );
};

export default ImageField;
