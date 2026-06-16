import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmptyState = () => {
  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-6 text-7xl">📚</div>

        <h1 className="mb-3 text-3xl font-bold">No Tutors Found</h1>

        <p className="mb-8 text-muted-foreground">
          You haven't added any tutors yet. Start building your tutor profile
          and connect with students.
        </p>

        <Link href="/add-tutors">
          <Button size="lg">Add Your First Tutor</Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;
