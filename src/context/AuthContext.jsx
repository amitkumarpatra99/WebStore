import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing user session
        const storedUser = localStorage.getItem("webStoreUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login - in a real app, verify against backend
        // For now, check if user exists in 'registeredUsers' in localStorage
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
                const foundUser = registeredUsers.find(u => u.email === email && u.password === password);

                if (foundUser) {
                    const { password, ...userWithoutPassword } = foundUser;
                    setUser(userWithoutPassword);
                    localStorage.setItem("webStoreUser", JSON.stringify(userWithoutPassword));
                    resolve(userWithoutPassword);
                } else {
                    reject("Invalid email or password");
                }
            }, 1000);
        });
    };

    const signup = (name, email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

                if (registeredUsers.some(u => u.email === email)) {
                    reject("Email already registered");
                    return;
                }

                const newUser = { id: Date.now(), name, email, password }; // Store password locally for mock auth
                registeredUsers.push(newUser);
                localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

                const { password: _, ...userWithoutPassword } = newUser;
                setUser(userWithoutPassword);
                localStorage.setItem("webStoreUser", JSON.stringify(userWithoutPassword));
                resolve(userWithoutPassword);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("webStoreUser");
    };

    const updateUser = (updatedData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
                const userIndex = registeredUsers.findIndex(u => u.email === user.email);

                if (userIndex !== -1) {
                    const updatedUser = { ...registeredUsers[userIndex], ...updatedData };
                    registeredUsers[userIndex] = updatedUser;
                    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

                    const { password, ...userWithoutPassword } = updatedUser;
                    setUser(userWithoutPassword);
                    localStorage.setItem("webStoreUser", JSON.stringify(userWithoutPassword));
                    resolve(userWithoutPassword);
                } else {
                    reject("User not found");
                }
            }, 500);
        });
    };

    const value = {
        user,
        login,
        signup,
        logout,
        updateUser,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
