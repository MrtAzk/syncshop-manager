import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 md:h-[64px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container h-full flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold">E-Commerce Panel</span>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Global arama..."
              className="w-full pl-9"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              3
            </Badge>
          </Button>
          
          <ThemeToggle />
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}