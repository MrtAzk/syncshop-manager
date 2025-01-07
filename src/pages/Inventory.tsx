import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Download,
  Filter,
  RefreshCw,
  Plus,
} from "lucide-react";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ürün adı en az 2 karakter olmalıdır.",
  }),
  currentStock: z.number().min(0, {
    message: "Stok miktarı 0'dan küçük olamaz.",
  }),
  minStock: z.number().min(0, {
    message: "Minimum stok miktarı 0'dan küçük olamaz.",
  }),
});

// Mock data
const mockProducts = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Ürün ${i + 1}`,
  currentStock: Math.floor(Math.random() * 100),
  minStock: 20,
  lastMovement: {
    type: Math.random() > 0.5 ? "increase" : "decrease",
    amount: Math.floor(Math.random() * 10),
  },
  status: Math.random() > 0.5 ? "normal" : "critical",
}));

export default function Inventory() {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      currentStock: 0,
      minStock: 0,
    },
  });

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const criticalStockCount = products.filter(
    (product) => product.status === "critical"
  ).length;

  const handleExport = () => {
    toast({
      title: "Dışa Aktarma Başlatıldı",
      description: "Stok raporu hazırlanıyor...",
    });
    // Implement CSV export logic here
  };

  const handleRefresh = () => {
    toast({
      title: "Stok Bilgileri Güncellendi",
      description: "Tüm veriler yenilendi.",
    });
    // Implement refresh logic here
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newProduct = {
      id: products.length + 1,
      name: values.name,
      currentStock: values.currentStock,
      minStock: values.minStock,
      lastMovement: {
        type: "increase",
        amount: values.currentStock,
      },
      status: values.currentStock <= values.minStock ? "critical" : "normal",
    };

    setProducts([...products, newProduct]);
    setIsAddDialogOpen(false);
    form.reset();

    toast({
      title: "Ürün Eklendi",
      description: `${values.name} başarıyla eklendi.`,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Stok Takibi</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Dışa Aktar
          </Button>
          <Button variant="outline" onClick={handleRefresh}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Yenile
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Yeni Ürün
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Yeni Ürün Ekle</DialogTitle>
                <DialogDescription>
                  Stok takibi için yeni bir ürün ekleyin.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ürün Adı</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="currentStock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mevcut Stok</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="minStock"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Minimum Stok</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="submit">Ekle</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Kritik Stok Seviyesi
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalStockCount} Ürün</div>
            <p className="text-xs text-muted-foreground">
              Stok seviyesi minimum limitin altında
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border">
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="relative flex-1">
            <Input
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
            <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ürün</TableHead>
              <TableHead>Mevcut Stok</TableHead>
              <TableHead>Minimum Stok</TableHead>
              <TableHead>Son Hareket</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.currentStock}</TableCell>
                <TableCell>{product.minStock}</TableCell>
                <TableCell className="flex items-center gap-1">
                  {product.lastMovement.type === "increase" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  {product.lastMovement.amount} adet
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === "critical"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {product.status === "critical" ? "Kritik" : "Normal"}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}