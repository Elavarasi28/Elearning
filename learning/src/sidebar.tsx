// components/sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  FileBarChart2,
  Settings,
  Menu,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: LayoutDashboard, path: "/" },
  { name: "My Courses", icon: BookOpen, path: "/mycourses" },
  { name: "Certificates", icon: Award, path: "/certificates" },
  { name: "Quizzes", icon: FileBarChart2, path: "/quizzes" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <nav className="flex flex-col gap-3">
              {navItems.map(({ name, icon: Icon, path }) => (
                <Link
                  key={name}
                  to={path}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                    location.pathname === path
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <aside className="hidden md:flex md:w-64 h-screen border-r p-4">
        <nav className="flex flex-col gap-3 w-full">
          <h2 className="text-lg font-semibold mb-4">E-Learning</h2>
          {navItems.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                location.pathname === path
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
