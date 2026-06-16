import React from 'react';
import { Button } from '../ui/button';
import { Trash2Icon } from 'lucide-react';

const DeleteButton = () => {
    return (
        <Button variant='destructive' className={"bg-red-300"}>
            <Trash2Icon className="h-4 w-4 shrink-0" />
        </Button>
    );
};

export default DeleteButton;