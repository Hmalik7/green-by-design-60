import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow"></div>
          <h1 className="text-xl font-bold">CarbonTracker</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#track" className="text-sm font-medium hover:text-primary transition-colors">
            Track Usage
          </a>
          <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}