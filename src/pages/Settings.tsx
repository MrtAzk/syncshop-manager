import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
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
              <Input id="shopify-api" type="text" placeholder="API Key" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shopify-secret">API Secret</Label>
              <Input
                id="shopify-secret"
                type="password"
                placeholder="API Secret"
              />
            </div>
            <Button>Kaydet</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trendyol Entegrasyonu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="trendyol-api">API Anahtarı</Label>
              <Input id="trendyol-api" type="text" placeholder="API Key" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="trendyol-secret">API Secret</Label>
              <Input
                id="trendyol-secret"
                type="password"
                placeholder="API Secret"
              />
            </div>
            <Button>Kaydet</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}