import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Dummy authentication
        if (email === "student@placement360.com" && password === "student123") {
            setUser({ email, role: "student", name: "Rahul Sharma" });
            return { success: true, role: "student" };
        } else if (email === "faculty@placement360.com" && password === "faculty123") {
            setUser({ email, role: "faculty", name: "Dr. Priya Mehta" });
            return { success: true, role: "faculty" };
        }
        return { success: false, error: "Invalid credentials" };
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
