import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TutorCard = ({ tutor }) => {
    return (
        <Card
            className="
                overflow-hidden
                border-border/50
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover"
                />
            </div>

            <CardContent className="space-y-4 p-5">
                <div>
                    <h3 className="line-clamp-1 text-xl font-bold text-foreground">
                        {tutor.name}
                    </h3>

                    <p className="line-clamp-1 text-sm text-muted-foreground">
                        {tutor.institute}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant="secondary"
                    >
                        {tutor.subject}
                    </Badge>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                    <span className="text-sm text-muted-foreground">
                        Session Fee
                    </span>

                    <span className="text-lg font-bold text-primary">
                        ${tutor.fee}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="px-5 pb-5 pt-0">
                <Button
                    asChild
                    className="w-full"
                >
                    <Link href={`/tutors/${tutor._id}`}>
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default TutorCard;