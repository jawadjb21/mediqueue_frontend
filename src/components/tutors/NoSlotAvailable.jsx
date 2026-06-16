"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

const NoSlotAvailable = () => {
    return (
        <Button
            onClick={() =>
                toast("No Slots available for the tutor", {
                    position: "top-center",
                    action: {
                        label: "Okay",
                        onClick: () => console.log("Okay"),
                    },
                })
            }
        >
            Book a Session
        </Button>);
};

export default NoSlotAvailable;