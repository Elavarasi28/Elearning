// src/pages/home.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"

export default function Home() {
  const courses = [
    { title: "HTML", level: "Beginner", instructor: "John" },
    { title: "CSS", level: "Advanced", instructor: "Alice" },
    { title: "JavaScript", level: "Intermediate", instructor: "Mike" },
  ]

  return (
    <section className="p-4 sm:p-6 lg:p-10 w-full">
      {/* Greeting Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Welcome, Elavarasi</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
          <Flame className="h-4 w-4 text-orange-500" />
          <span>5-day learning streak</span>
        </div>
      </div>

      {/* Top Courses You May Like */}
      <div>
        <h2 className="text-lg font-medium mb-4">Top Courses you may like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-2">{course.level}</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>
                      {course.instructor.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{course.instructor}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
