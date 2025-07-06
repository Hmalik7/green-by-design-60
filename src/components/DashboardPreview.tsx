import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Database } from "lucide-react";

const mockData = {
  totalEmissions: 2847.5,
  monthlyChange: -12.3,
  ghgpTarget: 3200,
  providers: [
    { name: "AWS", emissions: 1623.2, percentage: 57 },
    { name: "GCP", emissions: 892.1, percentage: 31 },
    { name: "Azure", emissions: 332.2, percentage: 12 },
  ],
  recentEntries: [
    { service: "EC2 Compute", emissions: 234.5, date: "2024-01-15" },
    { service: "S3 Storage", emissions: 45.2, date: "2024-01-14" },
    { service: "RDS Database", emissions: 123.8, date: "2024-01-13" },
  ],
};

export function DashboardPreview() {
  const compliancePercentage = (mockData.totalEmissions / mockData.ghgpTarget) * 100;
  const isCompliant = compliancePercentage <= 100;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dashboard Overview
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time carbon footprint monitoring and GHGP compliance tracking
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {mockData.totalEmissions.toLocaleString()} kg
                </CardTitle>
                <CardDescription>Total CO₂ Emissions (This Month)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant={mockData.monthlyChange < 0 ? "default" : "destructive"}>
                    {mockData.monthlyChange > 0 ? "+" : ""}{mockData.monthlyChange}%
                  </Badge>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {compliancePercentage.toFixed(1)}%
                </CardTitle>
                <CardDescription>GHGP Target Utilization</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={compliancePercentage} className="w-full" />
                <Badge variant={isCompliant ? "default" : "destructive"} className="mt-2">
                  {isCompliant ? "Compliant" : "Exceeds Target"}
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-success">
                  {mockData.ghgpTarget.toLocaleString()} kg
                </CardTitle>
                <CardDescription>GHGP Monthly Target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Remaining: {(mockData.ghgpTarget - mockData.totalEmissions).toLocaleString()} kg
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Provider Breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Emissions by Cloud Provider</CardTitle>
                <CardDescription>Current month breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockData.providers.map((provider, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{provider.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {provider.emissions.toFixed(1)} kg CO₂e
                      </span>
                    </div>
                    <Progress value={provider.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest emission calculations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockData.recentEntries.map((entry, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <div>
                      <div className="font-medium">{entry.service}</div>
                      <div className="text-sm text-muted-foreground">{entry.date}</div>
                    </div>
                    <Badge variant="outline">
                      {entry.emissions} kg CO₂e
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Integration Notice */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Enhanced Analytics Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For advanced features like embedded Grafana dashboards, R-powered CO₂ calculations, 
                and real-time API integrations, connect to Supabase for full backend functionality.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Embedded Grafana</Badge>
                <Badge variant="outline">R Statistical Engine</Badge>
                <Badge variant="outline">Real-time APIs</Badge>
                <Badge variant="outline">Advanced Permissions</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}