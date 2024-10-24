"use client";

import { AuthContext } from "@/components/provider/AuthProvider";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !loading && !user) {
      router.push({
        pathname: "/login",
        query: { redirect: router.asPath },
      });
    }
  }, [user, loading, router, mounted]);

  if (!mounted) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <>{children}</>;
  }

  return null;
};

export default PrivateRoute;
