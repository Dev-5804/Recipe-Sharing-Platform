import Link from "next/link"
import Image from "next/image"
import { ChefHat, Clock, Heart, Share2, UtensilsCrossed, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { recipes } from "@/lib/data"

interface RecipePageProps {
  params: {
    id: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = recipes.find((r) => r.id === params.id) || recipes[0]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
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
      <main className="container px-4 py-6 md:px-6 md:py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 space-y-2">
            <div className="flex flex-wrap gap-2">
              {recipe.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{recipe.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>By {recipe.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <UtensilsCrossed className="h-4 w-4" />
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          </div>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mb-8 flex flex-wrap gap-4">
            <Button className="gap-2">
              <Heart className="h-4 w-4" />
              <span>Save Recipe</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">Description</h2>
                <p className="text-muted-foreground">
                  This delicious recipe is perfect for any occasion. The combination of flavors creates a memorable dish
                  that everyone will love. Follow the simple instructions below to create this culinary masterpiece in
                  your own kitchen.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">Instructions</h2>
                <ol className="ml-4 list-decimal space-y-4 text-muted-foreground">
                  <li>
                    <p>
                      Prepare all ingredients by measuring and chopping as needed. Having everything ready will make the
                      cooking process smoother.
                    </p>
                  </li>
                  <li>
                    <p>Heat a large pan over medium heat. Add olive oil and wait until it shimmers.</p>
                  </li>
                  <li>
                    <p>Add the chopped onions and garlic to the pan. Sauté until translucent, about 3-4 minutes.</p>
                  </li>
                  <li>
                    <p>Add the main ingredients and stir to combine. Cook for 5-7 minutes, stirring occasionally.</p>
                  </li>
                  <li>
                    <p>Pour in the liquid ingredients and bring to a simmer. Reduce heat to low and cover.</p>
                  </li>
                  <li>
                    <p>Cook for 20-25 minutes, or until everything is tender and flavors have melded together.</p>
                  </li>
                  <li>
                    <p>Remove from heat and let rest for 5 minutes before serving.</p>
                  </li>
                  <li>
                    <p>Garnish with fresh herbs and serve hot with your choice of side dishes.</p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">Ingredients</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span>2 tablespoons olive oil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>1 large onion, diced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>3 cloves garlic, minced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>1 pound main ingredient, prepared</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>2 cups liquid component</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>1 teaspoon salt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>1/2 teaspoon black pepper</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>1 tablespoon fresh herbs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">Nutrition</h2>
                <div className="space-y-2">
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-muted-foreground">Calories</span>
                    <span className="font-medium">320 kcal</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-muted-foreground">Protein</span>
                    <span className="font-medium">24g</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-muted-foreground">Carbohydrates</span>
                    <span className="font-medium">28g</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span className="text-muted-foreground">Fat</span>
                    <span className="font-medium">16g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fiber</span>
                    <span className="font-medium">4g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
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
