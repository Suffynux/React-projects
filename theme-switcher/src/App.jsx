import { useState  ,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/Button";
import Card from "./Components/Card";

function App() {

  const [themeMode , setthemeMode] = useState("light")

  const darkTheme = () => {
    setthemeMode("dark")
  }

  const lightTheme = () => {
    setthemeMode("light")
  }


  //functionality for changing the theme
  useEffect(() => {
    document.querySelector('html').classList.remove('dark' , 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  
  return (
    <ThemeProvider value={{darkTheme , themeMode , lightTheme}}>

<>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">

          <Card />
          </div>
        </div>
      </div>
    </>

    </ThemeProvider>

  );
}

export default App;
