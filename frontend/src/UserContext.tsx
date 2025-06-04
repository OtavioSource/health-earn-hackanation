import { createContext, useContext, useState } from "react";

export class User {
    isLoggedIn?: boolean;
    name?: string;
    age?: number;
    address: string;
    firstTime?: boolean;
    balance?: string;
    email?: string;
    weight?: number;
    height?: number;

    constructor(isLoggedIn: boolean, name: string, age: number, address: string, firstTime: boolean) {
        this.isLoggedIn = isLoggedIn;
        this.name = name;
        this.age = age;
        this.address = address;
        this.firstTime = firstTime;
    }

}

type UserContextType = {
  user: User;
  setUser: (value: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ address: "" })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useAuth must be used within UserProvider");
  return context;
}