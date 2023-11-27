import { formatCurrency, formatDate } from '@/lib/format';

export default function InvestmentCard({
  name,
  origin,
  category,
  interest,
  value,
  created_at,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 relative">
      <div className="flex justify-between items-center">
        <h3 className="investment-name text-lg font-semibold text-gray-700">
          {name}
        </h3>
        <p className="investment-value text-lg font-semibold text-gray-700">
          {formatCurrency(value / 100)}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Origem:</span>
          <span className="investment-origin">{origin}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Categoria:</span>
          <span className="investment-category">{category}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Taxa:</span>
          <span className="investment-interest">{interest}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold mr-1">Data:</span>
          <span className="investment-created_at">
            {formatDate(created_at)}
          </span>
        </p>
      </div>
    </div>
  );
}
