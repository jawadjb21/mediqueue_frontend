import BookingCard from "./BookingCard";

const Bookings = ({ myBookings }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My Bookings</h1>

        <p className="mt-2 text-muted-foreground">
          Review all your tutoring session bookings.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {myBookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Bookings;
