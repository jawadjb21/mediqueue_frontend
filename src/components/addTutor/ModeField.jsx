import React from 'react';
import { Field, FieldLabel } from '../ui/field';
import { Controller } from 'react-hook-form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import FormErrors from '../shared/FormErrors';

const ModeField = ({ control, errors }) => {
    return (
        <Field>
            <FieldLabel htmlFor="mode">
                Teaching Mode
            </FieldLabel>
            <Controller
                name="mode"
                defaultValue=""
                control={control}
                render={({ field: { value, onChange } }) => (
                    <Select value={value} onValueChange={onChange}>
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
                )}
            />
            <FormErrors errors={errors} field={"mode"}></FormErrors>
        </Field>
    );
};

export default ModeField;