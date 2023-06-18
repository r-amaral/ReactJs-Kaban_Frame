import React from "react";
import { getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, useCollectionRef } from "../Firebase/firebaseConfig";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface AuthContextProps {
    userName: userNametype;
}

type userNametype = string | null | undefined;

export const AuthContext = React.createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userName, setUserName] = React.useState<userNametype>("");

    onAuthStateChanged(auth, (user: any) => {
        const getUser = async () => {
            const data = await getDocs(useCollectionRef);

            const usersDataBase = data.docs.map((doc): any => ({
                ...doc.data(),
                id: doc.id,
            }));

            const userDataBase = usersDataBase.find(
                (element) => element.email === user?.email
            );

            user ? setUserName(userDataBase.fullName) : console.log("Sing-out");
        };
        getUser();
    });

    return (
        <AuthContext.Provider
            value={{
                userName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
