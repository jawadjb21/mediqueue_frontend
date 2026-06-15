import React from 'react';
import FormErrors from '../shared/FormErrors';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Field, FieldLabel } from '../ui/field';
import { Controller } from 'react-hook-form';

const SubjectField = ({ errors, control }) => {
    return (
        <Field>
            <FieldLabel htmlFor="subject">
                Subject
            </FieldLabel>
            <Controller
                name="subject"
                control={control}
                rules={{
                    required: "Please choose a subject."
                }}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <Select value={value} onValueChange={onChange}>
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

                )} />

            <FormErrors
                errors={errors}
                field="subject"
            />
        </Field>);
};

export default SubjectField;