import Link from "next/link"
import { ChefHat, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import RecipeCard from "@/components/recipe-card"
import { recipes } from "@/lib/data"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ChefHat className="h-6 w-6" />
            <span>RecipeShare</span>
          </Link>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
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
                Discover & Share Delicious Recipes
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Join our community of food lovers to find and share your favorite recipes
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/recipes">
                  <Button size="lg">Browse Recipes</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg">
                    Share Your Recipe
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Categories</h2>
            <Link href="/categories" className="text-sm font-medium text-primary">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { name: "Vegetarian", icon: "🥗" },
              { name: "Non-Vegetarian", icon: "🍖" },
              { name: "Breakfast", icon: "🍳" },
              { name: "Lunch", icon: "🍱" },
              { name: "Dinner", icon: "🍽️" },
              { name: "Dessert", icon: "🍰" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center transition-colors hover:bg-muted/50"
              >
                <span className="text-3xl mb-2">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Popular Recipes</h2>
            <Link href="/recipes" className="text-sm font-medium text-primary">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.slice(0, 8).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
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
