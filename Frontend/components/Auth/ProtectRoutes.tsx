"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./authProvider";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loginRequiredRedirect } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      loginRequiredRedirect();
    }
  }, [isAuthenticated, loginRequiredRedirect, router]);

  if (!isAuthenticated) {
    return null; // or a loading indicator
  }

  return <>{children}</>;
};
