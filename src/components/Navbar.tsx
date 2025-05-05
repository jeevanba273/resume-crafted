
import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Sun, Moon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/App";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
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
    { name: "Dashboard", href: "/dashboard", authRequired: true },
    { name: "Pricing", href: "/pricing" },
    { name: "How it Works", href: "/how-it-works" },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : 'bg-white dark:bg-gray-900 border-b dark:border-gray-800'}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold enhanced-gradient">
              Resume Crafted
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {!loading && navItems.map((item) => {
            // Only show Dashboard link if user is logged in and the item requires auth
            if (item.authRequired && !user) {
              return null;
            }
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover-lift ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "hover:text-primary text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {!loading ? (
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full hover-glow hover:border-primary/50">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 animate-fade-in">
                  <div className="px-2 py-1.5 text-sm font-medium">
                    {user.email}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer w-full flex items-center">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/account" className="cursor-pointer w-full flex items-center">
                      Account Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={toggleDarkMode} className="cursor-pointer flex items-center gap-2">
                    {isDarkMode ? (
                      <>
                        <Sun className="h-4 w-4" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 dark:text-red-400">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={toggleDarkMode} className="dark-mode-toggle mr-2">
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="hover-lift">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="hover-glow animate-fade-in">Get Started</Button>
                </Link>
              </>
            )
          ) : (
            <div className="w-10 h-10"></div> // Placeholder with same width during loading
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="animated-icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="dark:bg-gray-900">
            <div className="flex flex-col space-y-6 mt-8">
              {!loading && navItems.map((item) => {
                // Only show Dashboard link if user is logged in and the item requires auth
                if (item.authRequired && !user) {
                  return null;
                }
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                );
              })}
              {!loading ? (
                user ? (
                  <>
                    <Link to="/account" className="text-base font-medium transition-colors hover:text-primary">
                      Account Settings
                    </Link>
                    <div onClick={toggleDarkMode} className="flex items-center gap-2 cursor-pointer text-base font-medium">
                      {isDarkMode ? (
                        <>
                          <Sun className="h-4 w-4" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </div>
                    <Button variant="outline" className="w-full mt-4" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <div onClick={toggleDarkMode} className="flex items-center gap-2 cursor-pointer text-base font-medium">
                      {isDarkMode ? (
                        <>
                          <Sun className="h-4 w-4" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </div>
                    <Link to="/login">
                      <Button variant="outline" className="w-full mt-4">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </>
                )
              ) : null}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
