import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const cloudProviders = [
  { value: "aws", label: "Amazon Web Services" },
  { value: "gcp", label: "Google Cloud Platform" },
  { value: "azure", label: "Microsoft Azure" },
];

const serviceTypes = [
  { value: "compute", label: "Compute (EC2, VM, Compute Engine)" },
  { value: "storage", label: "Storage (S3, Cloud Storage, Blob)" },
  { value: "database", label: "Database (RDS, CloudSQL, SQL Database)" },
  { value: "networking", label: "Networking (VPC, Load Balancer)" },
  { value: "serverless", label: "Serverless (Lambda, Functions)" },
];

export function CloudDataForm() {
  const [provider, setProvider] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [usage, setUsage] = useState("");
  const [cost, setCost] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock CO2 calculation (in real app, this would be backend/R calculation)
    const mockCO2 = (parseFloat(cost) * 0.85).toFixed(2); // Simplified calculation
    
    toast({
      title: "Data Recorded Successfully",
      description: `Estimated CO₂ emission: ${mockCO2} kg CO₂e`,
    });
    
    // Reset form
    setProvider("");
    setServiceType("");
    setUsage("");
    setCost("");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Track Your Cloud Usage
            </h2>
            <p className="text-xl text-muted-foreground">
              Input your cloud service data to calculate carbon emissions
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Cloud Service Data Collection</CardTitle>
              <CardDescription>
                Choose between automatic API integration or manual data entry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="manual" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                  <TabsTrigger value="api" disabled>
                    API Integration
                    <span className="ml-2 text-xs bg-muted px-2 py-1 rounded">Coming Soon</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="manual" className="space-y-6 mt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="provider">Cloud Provider</Label>
                        <Select value={provider} onValueChange={setProvider} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cloud provider" />
                          </SelectTrigger>
                          <SelectContent>
                            {cloudProviders.map((p) => (
                              <SelectItem key={p.value} value={p.value}>
                                {p.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type</Label>
                        <Select value={serviceType} onValueChange={setServiceType} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((s) => (
                              <SelectItem key={s.value} value={s.value}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="usage">Usage Amount</Label>
                        <Input
                          id="usage"
                          type="number"
                          step="0.01"
                          placeholder="e.g., 100 (GB-hours, vCPU-hours)"
                          value={usage}
                          onChange={(e) => setUsage(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cost">Monthly Cost (USD)</Label>
                        <Input
                          id="cost"
                          type="number"
                          step="0.01"
                          placeholder="e.g., 45.50"
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Calculate CO₂ Emissions
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="api" className="space-y-4 mt-6">
                  <div className="text-center p-8 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Automatic API Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect directly to your cloud provider's billing API for automatic data collection.
                      This feature requires backend integration with Supabase.
                    </p>
                    <Button variant="outline" disabled>
                      Configure API Access
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}