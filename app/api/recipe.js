// app/api/recipes/route.js (App Router)
import clientPromise from "@/lib/mongodb";

export async function GET() {
    const client = await clientPromise;
    const db = client.db("your-database-name");
    const recipes = await db.collection("recipes").find({}).toArray();

    return Response.json(recipes);
}
