// src/pages/home.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Flame, BookOpen, Clock, Star } from "lucide-react"

export default function Home() {
  const courses = [
    { 
      title: "HTML Fundamentals", 
      level: "Beginner", 
      instructor: "John Smith",
      duration: "4 hours",
      rating: 4.8,
      students: 1240,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Advanced CSS Mastery", 
      level: "Advanced", 
      instructor: "Alice Johnson",
      duration: "6 hours",
      rating: 4.9,
      students: 890,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "JavaScript Essentials", 
      level: "Intermediate", 
      instructor: "Mike Wilson",
      duration: "8 hours",
      rating: 4.7,
      students: 1560,
      color: "from-orange-500 to-red-500"
    },
  ]

  return (
    <section className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-10 w-full max-w-7xl mx-auto">
      {/* Greeting Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black-900 mb-2 sm:mb-3">
          Welcome, Elavarasi
        </h1>
        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-black-600">
          <Flame className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-orange-500 flex-shrink-0" />
          <span className="font-medium">5-day learning streak</span>
        </div>
      </div>

      {/* Top Courses You May Like */}
      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-black-900">
          Top Courses you may like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] cursor-pointer">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Top Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${course.color}`}></div>
              
              <CardHeader className="pb-3 sm:pb-4 relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-semibold">{course.rating}</span>
                  </div>
                </div>
                <Badge className={`text-xs sm:text-sm px-3 py-1 font-semibold bg-gradient-to-r ${course.color} text-white border-0 shadow-sm`}>
                  {course.level}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                {/* Course Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                
                {/* Instructor */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10 ring-2 ring-white shadow-sm">
                    <AvatarFallback className="text-xs sm:text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                      {course.instructor}
                    </p>
                    <p className="text-xs text-gray-500">Instructor</p>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
