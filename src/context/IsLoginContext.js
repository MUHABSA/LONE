import { createContext, useMemo, useState } from 'react';

const isLogined = JSON.parse(localStorage.getItem('isLogined'));

export const IsLoginContext = createContext({ isLogin: isLogined });

export function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(isLogined);
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);
  return (
    <IsLoginContext.Provider value={value}>{children}</IsLoginContext.Provider>
  );
}
