import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <div className="h-10 w-64 animate-pulse rounded bg-muted" />

        <div className="mt-3 h-4 w-96 animate-pulse rounded bg-muted" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="mb-4 h-48 animate-pulse rounded-xl bg-muted" />

              <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-muted" />

              <div className="mb-4 h-4 w-1/2 animate-pulse rounded bg-muted" />

              <div className="flex gap-2">
                <div className="h-8 w-20 animate-pulse rounded-full bg-muted" />
                <div className="h-8 w-20 animate-pulse rounded-full bg-muted" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
