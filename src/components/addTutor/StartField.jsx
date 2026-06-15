import React from 'react';
import FormErrors from '../shared/FormErrors';
import { Calendar } from '../ui/calendar';
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '../ui/button';
import { Controller } from 'react-hook-form';
import { Field, FieldLabel } from '../ui/field';

const StartField = ({ control, errors }) => {
    return (
        <Field>
            <FieldLabel htmlFor="start">
                Start Date
            </FieldLabel>
            <Controller
                name="start"
                control={control}
                rules={{
                    required: "Please choose your start date."
                }}
                render={({ field: { value, onChange } }) => (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={!value}
                                className="w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                            >
                                {value ? format(value, "PPP") : <span>Pick a date</span>}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={value}
                                onSelect={onChange}
                                defaultMonth={value}
                            />
                        </PopoverContent>
                    </Popover>
                )} />
            <FormErrors errors={errors} field={"start"}></FormErrors>
        </Field>
    );
};

export default StartField;