import type { YarnProduct } from "@/data/yarn-products";

interface ComparisonTableProps {
  products: YarnProduct[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  const columns = [
    { key: "counts", label: "Count Range" },
    { key: "composition", label: "Composition" },
    { key: "tensileStrength", label: "Tensile Strength" },
    { key: "shrinkage", label: "Shrinkage" },
    { key: "applications", label: "Applications" },
    { key: "moq", label: "MOQ" },
  ] as const;

  return (
    <div className="mt-8 overflow-x-auto rounded-card shadow-card">
      <table className="w-full min-w-[800px] border-collapse text-sm">
        <thead>
          <tr className="bg-primary text-white">
            <th className="sticky left-0 z-10 bg-primary px-4 py-3 text-left font-semibold">
              Yarn Type
            </th>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-bg transition-colors hover:bg-primary/5"
            >
              <td className="sticky left-0 z-10 bg-surface px-4 py-3 font-semibold text-heading">
                {product.name}
              </td>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-muted">
                  {col.key === "applications"
                    ? product.applications.join(", ")
                    : product[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
