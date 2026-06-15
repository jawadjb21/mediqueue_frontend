import React from 'react';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import FormErrors from '../shared/FormErrors';

const InstituteField = ({ errors, register }) => {
    return (
        <Field>
            <FieldLabel htmlFor="institue">
                Insitution
            </FieldLabel>

            <Input
                id="institute"
                placeholder=""
                {...register("institute", {
                    required: "Please mention your current institute.",
                    // i is for case-insensitive flag
                    pattern: {
                        value: /^[A-Z ]+$/i,
                        message: "Only alphabets and spaces are allowed."
                    }
                })}
            />
            <FormErrors errors={errors} field={"institute"}></FormErrors>
        </Field>
    );
};

export default InstituteField;