"use client"

import { useState } from "react"
import Link from "next/link"
import { ChefHat, LogOut, Plus, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import RecipeCard from "@/components/recipe-card"
import { recipes } from "@/lib/data"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("my-recipes")
  const userRecipes = recipes.slice(0, 4)
  const savedRecipes = recipes.slice(4, 8)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <ChefHat className="h-6 w-6" />
            <span>RecipeShare</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/recipes/new">
              <Button size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                <span>New Recipe</span>
              </Button>
            </Link>
            <div className="relative">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 md:px-6 md:py-10">
        <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <Card>
              <CardHeader>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-1 p-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your recipes and saved content</p>
            </div>
            <Tabs defaultValue="my-recipes" onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="my-recipes">My Recipes</TabsTrigger>
                <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
              </TabsList>
              <TabsContent value="my-recipes" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold tracking-tight">My Recipes</h2>
                  <Link href="/recipes/new">
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Recipe
                    </Button>
                  </Link>
                </div>
                {userRecipes.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {userRecipes.map((recipe) => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                      <ChefHat className="h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No recipes yet</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You haven&apos;t created any recipes yet. Start sharing your culinary creations!
                      </p>
                      <Link href="/recipes/new" className="mt-4">
                        <Button>Create Your First Recipe</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="saved" className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Saved Recipes</h2>
                {savedRecipes.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {savedRecipes.map((recipe) => (
                      <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                      <ChefHat className="h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">No saved recipes</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You haven&apos;t saved any recipes yet. Browse and save recipes you like!
                      </p>
                      <Link href="/recipes" className="mt-4">
                        <Button>Browse Recipes</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
