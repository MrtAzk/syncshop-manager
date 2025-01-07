import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Matching() {
  const { toast } = useToast();

  const handleRefresh = () => {
    toast({
      title: "Yenileniyor",
      description: "Ürün eşleştirmeleri güncelleniyor...",
    });
  };

  const handleMatch = (platform: string, id: number) => {
    toast({
      title: "Eşleştirme",
      description: `${platform} Ürün ${id} için eşleştirme başlatıldı`,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Eşleştirme Merkezi</h1>
        <Button onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Yenile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Shopify Ürünleri</h2>
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Shopify Ürün {i + 1}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleMatch('Shopify', i + 1)}
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SKU: SH-{1000 + i}
                </p>
                <p className="text-sm text-muted-foreground">
                  Stok: {Math.floor(Math.random() * 100)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Trendyol Ürünleri</h2>
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Trendyol Ürün {i + 1}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleMatch('Trendyol', i + 1)}
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SKU: TR-{2000 + i}
                </p>
                <p className="text-sm text-muted-foreground">
                  Stok: {Math.floor(Math.random() * 100)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}