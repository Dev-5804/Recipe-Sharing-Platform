import Link from "next/link"
import Image from "next/image"
import { Clock, Heart, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Recipe {
  id: string
  title: string
  image: string
  author: string
  time: string
  difficulty: string
  categories: string[]
  likes: number
}

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
          <div className="absolute right-2 top-2">
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {recipe.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <Link href={`/recipes/${recipe.id}`}>
            <h3 className="font-semibold hover:underline">{recipe.title}</h3>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{recipe.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{recipe.time}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/recipes/${recipe.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Recipe
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
