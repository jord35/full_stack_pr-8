export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="mt-4 text-xl font-medium">Page introuvable</p>
            <p className="mt-2 text-gray-600">
                La page que vous cherchez n{"'"}existe pas.
            </p>
        </main>
    );
}
