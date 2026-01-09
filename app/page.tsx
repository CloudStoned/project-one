import { FeatureCard } from "@/components/features/FeatureCard";
export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="flex flex-col sm:flex-row m-3 gap-4 justify-center mt-6">
        <FeatureCard title="Feature 1" description="Test" />
        <FeatureCard title="Feature 2" description="Test" />
      </section>
    </main>
  );
}
