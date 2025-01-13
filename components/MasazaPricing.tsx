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
    invoice: "Apkakles masāža",
    totalAmount: "€20.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Jostas daļas masāža",
    totalAmount: "€20.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Pilna mugura (mugura + sēžas muskuļi)",
    totalAmount: "€25.00",
    paymentMethod: "35-40min",
  },
  {
    invoice: "Abu roku masāža",
    totalAmount: "€25.00",
    paymentMethod: "25-30min",
  },
  {
    invoice: "Abu kāju masāža",
    totalAmount: "€25.00",
    paymentMethod: "30-35min",
  },
  {
    invoice: "Mugura + kājas",
    totalAmount: "€40.00",
    paymentMethod: "55-60min",
  },
];

export function MasazaPricing() {
  return (
    <Table className="text-[16px]">
      <TableHeader>
        <TableRow className="bg-[#f5712c]">
          <TableHead className="font-bold text-[#292929]">
            Pakalpojums
          </TableHead>
          <TableHead className="font-bold text-[#292929]">Laiks</TableHead>
          <TableHead className="text-right font-bold text-[#292929]">
            Cena
          </TableHead>
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
