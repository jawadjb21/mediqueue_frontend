import React from 'react';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import FormErrors from '../shared/FormErrors';
import { isNumeric } from 'validator';

const FeeField = ({ register, errors }) => {
    return (
        <Field>
            <FieldLabel htmlFor="fee">
                Hourly Fee
            </FieldLabel>

            <Input
                id="fee"
                placeholder="Fee"
                {...register("fee", {
                    required: "Please mention your fees.",
                    validate: value => isNumeric(value)
                })}
            />
            <FormErrors errors={errors} field={"fee"}></FormErrors>
        </Field>
    );
};

export default FeeField;