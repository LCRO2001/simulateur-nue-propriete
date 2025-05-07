import { useState } from "react";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(200000);
  const [démembrementYears, setDémembrementYears] = useState(15);
  const [expectedRent, setExpectedRent] = useState(800);
  const [annualReturn, setAnnualReturn] = useState(3.5);

  const nuePropriétéPrice = purchasePrice * 0.6; // 60% prix en NP (hypothèse)
  const valueAtEnd = purchasePrice; // pleine propriété récupérée
  const duration = démembrementYears;
  const totalRentFuture = expectedRent * 12 * 10; // si location 10 ans après l’usufruit

  const npAnnualizedReturn = (
    ((valueAtEnd - nuePropriétéPrice) / nuePropriétéPrice) /
    duration
  ) * 100;

  const altCapital = nuePropriétéPrice;
  const scpiReturn = altCapital * (annualReturn / 100) * duration;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Simulateur de Rentabilité — Nue-Propriété
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-medium">Prix du bien (€)</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Durée du démembrement (ans)</label>
            <input
              type="number"
              value={démembrementYears}
              onChange={(e) => setDémembrementYears(Number(e.target.value))}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Loyer mensuel futur (€)</label>
            <input
              type="number"
              value={expectedRent}
              onChange={(e) => setExpectedRent(Number(e.target.value))}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Rendement alternatif (%)</label>
            <input
              type="number"
              step="0.1"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
          <p className="mb-2">
            <strong>Montant investi en nue-propriété :</strong>{" "}
            {nuePropriétéPrice.toLocaleString()} €
          </p>
          <p className="mb-2">
            <strong>Rentabilité annuelle estimée nue-propriété :</strong>{" "}
            {npAnnualizedReturn.toFixed(2)} %
          </p>
          <p className="mb-2">
            <strong>Loyers potentiels sur 10 ans après usufruit :</strong>{" "}
            {totalRentFuture.toLocaleString()} €
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
          <h2 className="font-semibold text-lg mb-2">Comparatif avec autres placements</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>
              <strong>SCPI ou Assurance-vie à {annualReturn}% :</strong> {scpiReturn.toLocaleString()} € après {duration} ans
            </li>
            <li>
              <strong>PEA/CTO (hypothèse identique) :</strong> {scpiReturn.toLocaleString()} €
            </li>
            <li>
              <strong>Immobilier locatif :</strong> rendement brut + fiscalité à intégrer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
