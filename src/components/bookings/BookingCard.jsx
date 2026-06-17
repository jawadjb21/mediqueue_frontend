import { GraduationCap, Mail, Phone, User } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import DeleteButton from '../shared/DeleteButton';
import DeleteBooking from './DeleteBooking';
import { deleteBooking } from '@/lib/deleteBooking';

const BookingCard = ({ booking }) => {
    return (
        <Card
            className="
        group
        overflow-hidden
        border-border/50
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
    "
        >
            <div className="h-2 bg-linear-to-r from-primary via-primary/70 to-primary/30" />

            <CardContent className="p-6">

                {/* Tutor Section */}
                <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">

                        <div className="rounded-2xl bg-primary/10 p-4">
                            <GraduationCap className="h-7 w-7 text-primary" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                Tutor
                            </p>

                            <h2 className="text-xl font-bold">
                                {booking.tutorName}
                            </h2>
                        </div>
                    </div>

                    <div
                        className="
                    rounded-full
                    bg-green-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-green-600
                "
                    >
                        Confirmed
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-6 border-t" />

                {/* Student Details */}
                <div className="space-y-3">

                    <div
                        className="
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    bg-muted/40
                    p-3
                "
                    >
                        <User className="h-5 w-5 text-primary" />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Student
                            </p>

                            <p className="font-semibold">
                                {booking.studentName}
                            </p>
                        </div>
                    </div>

                    <div
                        className="
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    bg-muted/40
                    p-3
                "
                    >
                        <Mail className="h-5 w-5 text-primary" />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Email Address
                            </p>

                            <p className="font-semibold break-all">
                                {booking.studentEmail}
                            </p>
                        </div>
                    </div>

                    <div
                        className="
                    flex
                    items-center
                    gap-4
                    rounded-xl
                    bg-muted/40
                    p-3
                "
                    >
                        <Phone className="h-5 w-5 text-primary" />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Phone Number
                            </p>

                            <p className="font-semibold">
                                {booking.phone}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t pt-4">

                    <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Booking Request
                        </span>
                    </div>

                    <div className="flex items-center gap-2">

                        <DeleteBooking deleteBooking={deleteBooking} booking={booking}
                        />

                        <GraduationCap
                            className="
                h-5
                w-5
                text-primary
                transition-transform
                group-hover:scale-110
            "
                        />
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};

export default BookingCard;