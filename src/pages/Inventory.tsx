import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertTriangle, ArrowDown, ArrowUp } from "lucide-react";

export default function Inventory() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold">Stok Takibi</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Kritik Stok Seviyesi
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 Ürün</div>
            <p className="text-xs text-muted-foreground">
              Stok seviyesi düşük
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border">
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
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>Ürün {i + 1}</TableCell>
                <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                <TableCell>20</TableCell>
                <TableCell className="flex items-center gap-1">
                  {Math.random() > 0.5 ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  {Math.floor(Math.random() * 10)} adet
                </TableCell>
                <TableCell>
                  {Math.random() > 0.5 ? "Normal" : "Kritik"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}