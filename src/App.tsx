import { Header } from './components/Header';
import { KPICard } from './components/KPICard';
import { CategoryRevenueChart } from './components/CategoryRevenueChart';
import { ProfitMarginChart } from './components/ProfitMarginChart';
import { ProductProfitabilityTable } from './components/ProductProfitabilityTable';
import { CostsVsRevenueChart } from './components/CostsVsRevenueChart';
import { DollarSign, ShoppingCart, Receipt } from 'lucide-react';
import {
  kpiData,
  categoryRevenue,
  profitMarginData,
  productProfitability,
  costsVsRevenue,
} from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Dashboard de Ventas y Finanzas
          </h2>
          <p className="text-gray-600">
            Bienvenido, aquí tienes un resumen del rendimiento de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="TOTAL DE VENTAS"
            value={`S/ ${kpiData.totalSales.toLocaleString('es-PE', {
              minimumFractionDigits: 2,
            })}`}
            change={kpiData.salesChange}
            icon={<DollarSign className="w-6 h-6 text-blue-600" />}
            iconBgColor="bg-blue-50"
          />
          <KPICard
            title="Nº DE TRANSACCIONES"
            value={kpiData.totalTransactions.toLocaleString()}
            change={kpiData.transactionsChange}
            icon={<ShoppingCart className="w-6 h-6 text-green-600" />}
            iconBgColor="bg-green-50"
          />
          <KPICard
            title="TICKET PROMEDIO"
            value={`S/ ${kpiData.averageTicket.toFixed(2)}`}
            change={kpiData.ticketChange}
            icon={<Receipt className="w-6 h-6 text-purple-600" />}
            iconBgColor="bg-purple-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CategoryRevenueChart data={categoryRevenue} />
          <ProfitMarginChart data={profitMarginData} />
        </div>

        <div className="mb-8">
          <ProductProfitabilityTable data={productProfitability} />
        </div>

        <div>
          <CostsVsRevenueChart data={costsVsRevenue} />
        </div>
      </main>
    </div>
  );
}

export default App;
