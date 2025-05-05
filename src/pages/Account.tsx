import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
const AccountPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const {
    toast
  } = useToast();

  // Profile schema for validation
  const profileSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address")
  });

  // Password schema for validation
  const passwordSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters")
  }).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });
  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      email: ""
    }
  });
  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: ""
    }
  });
  useEffect(() => {
    const getUserData = async () => {
      try {
        // Get current user
        const {
          data: {
            user
          }
        } = await supabase.auth.getUser();
        setUser(user);
        if (user) {
          // Load user profile data
          const {
            data: profile
          } = await supabase.from('profiles').select('full_name').eq('id', user.id).maybeSingle();
          profileForm.setValue("email", user.email || "");
          if (profile) {
            profileForm.setValue("fullName", profile.full_name || "");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();

    // Set up auth state listener
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(session === undefined);
    });
    return () => subscription.unsubscribe();
  }, [profileForm]);
  const handleProfileSubmit = async (data: z.infer<typeof profileSchema>) => {
    if (!user) return;
    setLoadingProfile(true);
    try {
      // Update email if changed
      if (data.email !== user.email) {
        const {
          error: emailError
        } = await supabase.auth.updateUser({
          email: data.email
        });
        if (emailError) throw emailError;
        toast({
          title: "Email update initiated",
          description: "Please check your inbox to confirm your new email address"
        });
      }

      // Update profile info
      const {
        error: profileError
      } = await supabase.from('profiles').update({
        full_name: data.fullName
      }).eq('id', user.id);
      if (profileError) throw profileError;
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully"
      });
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile",
        variant: "destructive"
      });
    } finally {
      setLoadingProfile(false);
    }
  };
  const handlePasswordSubmit = async (data: z.infer<typeof passwordSchema>) => {
    setLoadingPassword(true);
    try {
      const {
        error
      } = await supabase.auth.updateUser({
        password: data.password
      });
      if (error) throw error;
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully"
      });
      passwordForm.reset();
    } catch (error: any) {
      toast({
        title: "Password update failed",
        description: error.message || "Failed to update password",
        variant: "destructive"
      });
    } finally {
      setLoadingPassword(false);
    }
  };
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12">
          <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-lg shadow-sm border bg-slate-900">
              <h2 className="text-lg font-medium mb-4">Profile Information</h2>
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)} className="space-y-4">
                  <FormField control={profileForm.control} name="fullName" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={profileForm.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" disabled={loadingProfile}>
                    {loadingProfile ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="p-6 rounded-lg shadow-sm border bg-slate-900">
              <h2 className="text-lg font-medium mb-4">Change Password</h2>
              
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
                  <FormField control={passwordForm.control} name="password" render={({
                  field
                }) => <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter new password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={passwordForm.control} name="confirmPassword" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Confirm new password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" disabled={loadingPassword}>
                    {loadingPassword ? "Updating..." : "Update Password"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default AccountPage;