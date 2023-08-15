import { createContext, useState } from "react";
import React from "react";

export type MyContextValues = {
  name: string;
  gender: string;
  email: string;
  accessCode: string | null;
  updateName: (name: string) => void;
  updateEmail: (email: string) => void;
  updateGender: (gender: string) => void;
  updateAccessCode: (code: string) => void;
  updateUser: (
    name: string,
    email: string,
    gender: string,
    code: string
  ) => void;
};
export const MyContext = createContext<MyContextValues>({
  name: "",
  gender: "",
  email: "",
  accessCode: "",
  updateGender: (gender: string) => {},
  updateEmail: (email: string) => {},
  updateName: (aadhar: string) => {},
  updateAccessCode: (code: string) => {},
  updateUser: (name: string, email: string, gender: string, code: string) => {},
});

export function MyProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    gender: "",
    code: "",
  });
  const updateUser = (
    name: string,
    email: string,
    gender: string,
    code: string
  ) => {
    setUserInfo({ name, email, gender, code });
  };
  const updateAccessCode = (code: string) => {
    let name = userInfo.name;
    let email = userInfo.email;
    let gender = userInfo.gender;
    setUserInfo({ name, email, gender, code });
  };
  const updateName = (name: string) => {
    let email = userInfo.email;
    let gender = userInfo.gender;
    let code = userInfo.code;
    setUserInfo({ name, email, gender, code });
  };
  const updateEmail = (email: string) => {
    let name = userInfo.name;
    let gender = userInfo.gender;
    let code = userInfo.code;
    setUserInfo({ name, email, gender, code });
  };
  const updateGender = (gender: string) => {
    let name = userInfo.name;
    let email = userInfo.email;
    let code = userInfo.code;
    setUserInfo({ name, email, gender, code });
  };
  const contextValues: MyContextValues = {
    name: userInfo.name,
    email: userInfo.email,
    gender: userInfo.gender,
    accessCode: userInfo.code,
    updateName,
    updateEmail,
    updateAccessCode,
    updateGender,
    updateUser,
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
