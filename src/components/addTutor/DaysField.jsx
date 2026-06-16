import React from 'react';
import FormErrors from '../shared/FormErrors';
import { Checkbox } from '../ui/checkbox';
import { Controller } from 'react-hook-form';
import { Field, FieldLabel } from '../ui/field';

const DaysField = ({ errors, control }) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <Field>
            <FieldLabel>
                Available Days
            </FieldLabel>

            <Controller
                name="days"
                control={control}
                defaultValue={[]}
                rules={{
                    validate: (value) =>
                        value?.length > 0 ||
                        "Please select at least 1 day.",
                }}
                render={({ field: { onChange, value } }) => (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
                        {daysOfWeek.map((day) => (
                            <label
                                key={day}
                                className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            rounded-lg
                                                            border
                                                            border-border
                                                            py-3
                                                            px-1
                                                            cursor-pointer
                                                            hover:bg-muted
                                                            "
                            >
                                <Checkbox
                                    checked={value.includes(day)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            onChange([
                                                ...value, day
                                            ]);
                                        } else {
                                            onChange(
                                                value.filter(d => d !== day)
                                            );
                                        }
                                    }}
                                />
                                <span>{day}</span>
                            </label>
                        ))}
                    </div>
                )} />

            <FormErrors
                errors={errors}
                field="days"
            />
        </Field>);
};

export default DaysField;