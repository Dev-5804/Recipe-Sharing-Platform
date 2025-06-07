import Link from "next/link"
import { ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import RecipeCard from "@/components/recipe-card"
import { recipes } from "@/lib/data"

export default function DessertCategory() {
  const dessertRecipes = recipes.filter((recipe) => recipe.categories.includes("Dessert"))

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ChefHat className="h-6 w-6" />
            <span>RecipeShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 md:px-6 md:py-10">
        <section className="mb-12">
          <div className="rounded-lg bg-muted p-6 text-center md:p-12">
            <div className="mx-auto max-w-[800px] space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Dessert Recipes
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Indulge in these sweet and delightful dessert recipes!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Popular Dessert Recipes</h2>
            <Link href="/recipes" className="text-sm font-medium text-primary">
              View all recipes
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dessertRecipes.length > 0 ? (
              dessertRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p className="text-muted-foreground">No dessert recipes found.</p>
            )}
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <ChefHat className="h-6 w-6" />
              <span>RecipeShare</span>
            </Link>
            <p className="text-sm text-muted-foreground">Share and discover amazing recipes from around the world.</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}