import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Database, ChartBar } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Multi-Cloud Support",
    description: "Connect to AWS, GCP, and Azure. Automatically pull usage data from billing APIs or manually input your consumption metrics.",
  },
  {
    icon: Database,
    title: "GHGP Compliance",
    description: "Built-in Greenhouse Gas Protocol guidelines. Compare your actual emissions against industry baselines and standards.",
  },
  {
    icon: ChartBar,
    title: "Advanced Analytics",
    description: "Visualize CO₂ trends, cost correlations, and usage patterns with embedded dashboards and detailed reporting.",
  },
];

export function FeatureCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Carbon Tracking Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From data collection to regulatory reporting, we provide everything you need for comprehensive cloud carbon management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors hover:shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}