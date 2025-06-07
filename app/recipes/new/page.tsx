"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChefHat, Plus, Trash2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewRecipePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [ingredients, setIngredients] = useState([{ id: 1, value: "" }])
  const [steps, setSteps] = useState([{ id: 1, value: "" }])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  const addIngredient = () => {
    const newId = ingredients.length > 0 ? Math.max(...ingredients.map((i) => i.id)) + 1 : 1
    setIngredients([...ingredients, { id: newId, value: "" }])
  }

  const removeIngredient = (id: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ingredient) => ingredient.id !== id))
    }
  }

  const updateIngredient = (id: number, value: string) => {
    setIngredients(ingredients.map((ingredient) => (ingredient.id === id ? { ...ingredient, value } : ingredient)))
  }

  const addStep = () => {
    const newId = steps.length > 0 ? Math.max(...steps.map((s) => s.id)) + 1 : 1
    setSteps([...steps, { id: newId, value: "" }])
  }

  const removeStep = (id: number) => {
    if (steps.length > 1) {
      setSteps(steps.filter((step) => step.id !== id))
    }
  }

  const updateStep = (id: number, value: string) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, value } : step)))
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ChefHat className="h-6 w-6" />
            <span>RecipeShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 md:px-6 md:py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Create New Recipe</h1>
            <p className="text-muted-foreground">Share your culinary creation with the world</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Basic Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Recipe Title</Label>
                  <Input id="title" placeholder="Enter recipe title" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Cooking Time</Label>
                  <Input id="time" placeholder="e.g. 30 minutes" required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="servings">Servings</Label>
                  <Input id="servings" type="number" min="1" placeholder="e.g. 4" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Briefly describe your recipe"
                  className="min-h-[100px]"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Categories</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegetarian" />
                  <Label htmlFor="vegetarian">Vegetarian</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="non-vegetarian" />
                  <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegan" />
                  <Label htmlFor="vegan">Vegan</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="breakfast" />
                  <Label htmlFor="breakfast">Breakfast</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lunch" />
                  <Label htmlFor="lunch">Lunch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dinner" />
                  <Label htmlFor="dinner">Dinner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dessert" />
                  <Label htmlFor="dessert">Dessert</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="snack" />
                  <Label htmlFor="snack">Snack</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="drink" />
                  <Label htmlFor="drink">Drink</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Recipe Image</h2>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-2 text-lg font-medium">Upload Recipe Image</h3>
                    <p className="text-sm text-muted-foreground">Drag and drop or click to upload</p>
                  </div>
                  <Input id="recipe-image" type="file" accept="image/*" className="hidden" />
                  <Label
                    htmlFor="recipe-image"
                    className="cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    Select Image
                  </Label>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Ingredients</h2>
                <Button type="button" variant="outline" size="sm" onClick={addIngredient}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Ingredient
                </Button>
              </div>
              <div className="space-y-2">
                {ingredients.map((ingredient) => (
                  <div key={ingredient.id} className="flex items-center gap-2">
                    <Input
                      value={ingredient.value}
                      onChange={(e) => updateIngredient(ingredient.id, e.target.value)}
                      placeholder="e.g. 2 tablespoons olive oil"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeIngredient(ingredient.id)}
                      disabled={ingredients.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Instructions</h2>
                <Button type="button" variant="outline" size="sm" onClick={addStep}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Step
                </Button>
              </div>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex gap-2">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <Textarea
                        value={step.value}
                        onChange={(e) => updateStep(step.id, e.target.value)}
                        placeholder={`Step ${index + 1}: Describe what to do`}
                        className="min-h-[80px]"
                        required
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeStep(step.id)}
                      disabled={steps.length === 1}
                      className="flex-shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/dashboard">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Recipe"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
