// "use client";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // Define types for the context
// interface AuthContextType
// {
//     isAuthenticated: boolean;
//     login: (userEmail?: string) => void;
//     logout: () => void;
//     loginRequiredRedirect: () => void;
//     userEmail: string;
// }

// // Initialize AuthContext with proper types
// const AuthContext = createContext<AuthContextType | null>(null);

// const LOGIN_REDIRECT_URL = "/auth";
// const LOGOUT_REDIRECT_URL = "/auth/login";
// const LOGIN_REQUIRED_URL = "/auth/login";
// const LOCAL_STORAGE_KEY = "is-logged-in";
// const LOCAL_USERNAME_KEY = "user-email";

// interface AuthProviderProps
// {
//     children: ReactNode;
// }

// export function AuthProvider({ children }: AuthProviderProps)
// {
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//     const [userEmail, setUserEmail] = useState<string>("");
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     useEffect(() =>
//     {
//         const storedAuthStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
//         if (storedAuthStatus)
//         {
//             const storedAuthStatusInt = parseInt(storedAuthStatus);
//             setIsAuthenticated(storedAuthStatusInt === 1);
//         }
//         const storedUn = localStorage.getItem(LOCAL_USERNAME_KEY);
//         if (storedUn)
//         {
//             setUserEmail(storedUn);
//         }
//     }, []);

//     const login = (userEmail?: string) =>
//     {
//         setIsAuthenticated(true);
//         localStorage.setItem(LOCAL_STORAGE_KEY, "1");
//         if (userEmail)
//         {
//             localStorage.setItem(LOCAL_USERNAME_KEY, userEmail);
//             setUserEmail(userEmail);
//         } else
//         {
//             localStorage.removeItem(LOCAL_USERNAME_KEY);
//         }
//         const nextUrl = searchParams.get("next");
//         const invalidNextUrl = ['/login', '/logout'];
//         const nextUrlValid = nextUrl && nextUrl.startsWith("/") && !invalidNextUrl.includes(nextUrl);
//         if (nextUrlValid)
//         {
//             router.replace(nextUrl);
//             return;
//         } else
//         {
//             router.replace(LOGIN_REDIRECT_URL);
//             return;
//         }
//     };

//     const logout = () =>
//     {
//         setIsAuthenticated(false);
//         localStorage.setItem(LOCAL_STORAGE_KEY, "0");
//         router.replace(LOGOUT_REDIRECT_URL);
//     };

//     const loginRequiredRedirect = () =>
//     {
//         // user is not logged in via API
//         setIsAuthenticated(false);
//         localStorage.setItem(LOCAL_STORAGE_KEY, "0");
//         let loginWithNextUrl = `${LOGIN_REQUIRED_URL}?next=${pathname}`;
//         if (LOGIN_REQUIRED_URL === pathname)
//         {
//             loginWithNextUrl = `${LOGIN_REQUIRED_URL}`;
//         }
//         router.replace(loginWithNextUrl);
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout, loginRequiredRedirect, userEmail }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export function useAuth()
// {
//     const context = useContext(AuthContext);
//     if (!context)
//     {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// }
