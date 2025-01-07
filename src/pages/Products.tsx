import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, Plus, Download, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Products() {
  const { toast } = useToast();

  const handleFilter = () => {
    toast({
      title: "Filtrele",
      description: "Filtre menüsü açılıyor...",
    });
  };

  const handleImport = () => {
    toast({
      title: "İçe Aktar",
      description: "Ürün içe aktarma işlemi başlatılıyor...",
    });
  };

  const handleExport = () => {
    toast({
      title: "Dışa Aktar",
      description: "Ürün listesi dışa aktarılıyor...",
    });
  };

  const handleNewProduct = () => {
    toast({
      title: "Yeni Ürün",
      description: "Yeni ürün ekleme formu açılıyor...",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Ürün Yönetimi</h1>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleFilter}>
            <Filter className="h-4 w-4 mr-2" />
            Filtrele
          </Button>
          <Button variant="outline" size="sm" onClick={handleImport}>
            <Upload className="h-4 w-4 mr-2" />
            İçe Aktar
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Dışa Aktar
          </Button>
          <Button size="sm" onClick={handleNewProduct}>
            <Plus className="h-4 w-4 mr-2" />
            Yeni Ürün
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ürün</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead>Fiyat</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>Örnek Ürün {i + 1}</TableCell>
                <TableCell>SKU-{1000 + i}</TableCell>
                <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                <TableCell>₺{(Math.random() * 1000).toFixed(2)}</TableCell>
                <TableCell>Shopify, Trendyol</TableCell>
                <TableCell>Aktif</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}