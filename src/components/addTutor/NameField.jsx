import React from 'react';
import { Field, FieldLabel } from '../ui/field';
import { Input } from '../ui/input';
import FormErrors from '../shared/FormErrors';

const NameField = ({ register, errors }) => {
    return (
        <Field>
            <FieldLabel htmlFor="name">
                Name
            </FieldLabel>

            <Input
                id="name"
                placeholder="John Doe"
                {...register("name", { required: "Name is required." })}
            />
            <FormErrors errors={errors} field={"name"}></FormErrors>
        </Field>
    );
};

export default NameField;