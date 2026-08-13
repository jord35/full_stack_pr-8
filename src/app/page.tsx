import { getProperties } from "@/lib/api";

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold">Kasa</h1>
      <p className="mt-2 text-gray-600">
        {properties.length} logements disponibles
      </p>
      <ul className="mt-8 w-full max-w-2xl space-y-4">
        {properties.map((property) => (
          <li
            key={property.id}
            className="rounded-lg border border-gray-200 p-4"
          >
            <h2 className="text-lg font-semibold">{property.title}</h2>
            <p className="text-sm text-gray-600">{property.location}</p>
            <p className="text-sm font-medium text-red-500">
              {property.price_per_night} € / nuit
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
