import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Kinezioloģiskā teipošana",
    totalAmount: "Līdz €20.00",
    paymentMethod: "Līdz 30min",
  },
];

export function TeiposanaPricing() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Pakalpojums</TableHead>
          <TableHead>Laiks</TableHead>
          <TableHead className="text-right">Cena</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
