import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [shopifySettings, setShopifySettings] = useState({
    apiKey: "",
    apiSecret: ""
  });
  const [trendyolSettings, setTrendyolSettings] = useState({
    apiKey: "",
    apiSecret: ""
  });

  const handleShopifySave = () => {
    if (!shopifySettings.apiKey || !shopifySettings.apiSecret) {
      toast({
        title: "Hata",
        description: "Tüm alanları doldurunuz",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Başarılı",
      description: "Shopify ayarları kaydedildi",
    });
  };

  const handleTrendyolSave = () => {
    if (!trendyolSettings.apiKey || !trendyolSettings.apiSecret) {
      toast({
        title: "Hata",
        description: "Tüm alanları doldurunuz",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Başarılı",
      description: "Trendyol ayarları kaydedildi",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Ayarlar</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Shopify Entegrasyonu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shopify-api">API Anahtarı</Label>
              <Input 
                id="shopify-api" 
                type="text" 
                placeholder="API Key"
                value={shopifySettings.apiKey}
                onChange={(e) => setShopifySettings(prev => ({
                  ...prev,
                  apiKey: e.target.value
                }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shopify-secret">API Secret</Label>
              <Input
                id="shopify-secret"
                type="password"
                placeholder="API Secret"
                value={shopifySettings.apiSecret}
                onChange={(e) => setShopifySettings(prev => ({
                  ...prev,
                  apiSecret: e.target.value
                }))}
              />
            </div>
            <Button onClick={handleShopifySave}>Kaydet</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trendyol Entegrasyonu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="trendyol-api">API Anahtarı</Label>
              <Input 
                id="trendyol-api" 
                type="text" 
                placeholder="API Key"
                value={trendyolSettings.apiKey}
                onChange={(e) => setTrendyolSettings(prev => ({
                  ...prev,
                  apiKey: e.target.value
                }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trendyol-secret">API Secret</Label>
              <Input
                id="trendyol-secret"
                type="password"
                placeholder="API Secret"
                value={trendyolSettings.apiSecret}
                onChange={(e) => setTrendyolSettings(prev => ({
                  ...prev,
                  apiSecret: e.target.value
                }))}
              />
            </div>
            <Button onClick={handleTrendyolSave}>Kaydet</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}