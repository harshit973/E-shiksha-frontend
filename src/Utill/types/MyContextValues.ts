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