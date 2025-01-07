import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Orders() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Siparişler</h1>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sipariş No</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead>Müşteri</TableHead>
              <TableHead>Tutar</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Durum</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>#{10000 + i}</TableCell>
                <TableCell>
                  {new Date().toLocaleDateString("tr-TR")}
                </TableCell>
                <TableCell>Müşteri {i + 1}</TableCell>
                <TableCell>₺{(Math.random() * 1000).toFixed(2)}</TableCell>
                <TableCell>
                  {Math.random() > 0.5 ? "Shopify" : "Trendyol"}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {Math.random() > 0.5 ? "Tamamlandı" : "Hazırlanıyor"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}