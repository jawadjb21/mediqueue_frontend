import Link from "next/link";

const PaginationBar = ({ currentPage, totalPages }) => {
  return (
    <div className="mt-12 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/tutors?page=${page}`}
          className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        border
                        transition-colors
                        ${
                          currentPage === page
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:bg-muted"
                        }
                    `}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default PaginationBar;
