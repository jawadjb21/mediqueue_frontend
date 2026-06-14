import React from 'react';

const FormErrors = ({errors, field}) => {
    if (!errors?.[field]) return null;
    return (
        <div className="rounded-xl border text-center border-destructive/20 bg-destructive/10 text-sm text-destructive">
            {errors[field].message}
        </div>
    );
};

export default FormErrors;