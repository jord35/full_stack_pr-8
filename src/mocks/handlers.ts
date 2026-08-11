import { http, HttpResponse } from "msw";
import properties from "./data/properties.json";

export const handlers = [
    // Liste des propriétés
    http.get("/api/properties", () => {
        return HttpResponse.json(properties);
    }),

    // Détail d'une propriété
    http.get("/api/properties/:id", ({ params }) => {
        const property = properties.find((p) => p.id === params.id);
        if (!property) {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json(property);
    }),
];
