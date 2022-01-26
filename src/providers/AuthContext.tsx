import { ReactNode, useState, createContext, Dispatch, SetStateAction} from "react";

interface AuthContextType {
  authentication: boolean
  setAuthentication: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType>(null!)

const AuthProvider = ({children}:{children: ReactNode}) => {


  const [authentication, setAuthentication] = useState<boolean>(false);


  const authContextValues = {authentication, setAuthentication}

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
