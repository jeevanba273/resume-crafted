
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const getUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUserData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "How it Works", href: "/how-it-works" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent animated-gradient">
              Resume Crafted
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-primary"
                  : "hover:text-primary text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          {user && (
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/dashboard"
                  ? "text-primary"
                  : "hover:text-primary text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium">
                  {user.email}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account" className="cursor-pointer w-full">
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-base font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              {user && (
                <Link
                  to="/dashboard"
                  className="text-base font-medium transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
              )}
              {user ? (
                <>
                  <Link to="/account" className="text-base font-medium transition-colors hover:text-primary">
                    Account Settings
                  </Link>
                  <Button variant="outline" className="w-full mt-4" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="w-full mt-4">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
