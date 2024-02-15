import PlanButton from "@/components/PlanButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Birth = () => {
  return (
    <div className="p-5 dark:bg-black bg-[#F8F9FA] h-screen">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <div className="flex-col flex">
            <h1 className="text-2xl font-bold mb-1 dark:text-white text-black ">
             Order Birth Certificate
            </h1>
            <span className="text-lg underline font-light dark:text-white text-black">
              Frank Pritchett
            </span>
          </div>
          <div className="bg-[#565E6D] rounded-3xl flex items-center gap-1 shrink-0">
            <span className="dark:text-white text-white px-2 py-1">
              Not started
            </span>
          </div>
        </div>
        <p className="text-sm dark:text-white text-black">
          Frank was born in Italy.Here are some of the providers who offer
          procurement of birth certificates.Be sure to request the long-birth
          certificate.
        </p>
      </div>
      <div className="mt-7">
        <Table className="dark:text-white text-black">
          <TableHeader>
            <TableRow className="bg-[#f1f1f6] dark:bg-black/80">
              <TableHead className="border">Providers</TableHead>
              <TableHead className="border">Type</TableHead>
              <TableHead className="border">Fees</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border bg-[#FAFAFB] dark:bg-black/80">
            <TableRow>
              <TableCell className="border">Pratiche</TableCell>
              <TableCell className="border">
                <PlanButton label="Facilitator" />
              </TableCell>
              <TableCell className=" border">$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border underline">
                Italian Citizenship & Genealogy Services
              </TableCell>
              <TableCell className="border">
                <PlanButton label="Geneologist" />
              </TableCell>
              <TableCell className=" border">$$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border underline">
             Mazzeschi
              </TableCell>
              <TableCell className="border">
                <PlanButton label="Law Firm" />
              </TableCell>
              <TableCell className=" border">$$</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Birth;
