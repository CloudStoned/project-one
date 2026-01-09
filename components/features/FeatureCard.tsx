import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
