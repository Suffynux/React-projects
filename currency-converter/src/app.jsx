import { useState  , } from "preact/hooks";
import { Inputbox } from "./Components/Inputbox.jsx";
import useCurrencyInfo from "./CustomsHooks/useCurrencyInfo";



export function App() {

  const [amount , setAmount] = useState(0)
  const [currencyTo, setCurrencyFrom] = useState("pkr")
  const [to, setTo] = useState("pkr")
  const [converted , setConverted] = useState(0)
  
  const currencyInfo = useCurrencyInfo(currencyTo)

  const option = Object.keys(currencyInfo)

  // Functionalty for swaping varaibles
  const swap = () => {
    const tempCurrency = currencyTo;
    const tempAmount = amount;
    setCurrencyFrom(to);
    setTo(tempCurrency);
    setAmount(converted);
    setConverted(tempAmount);
  }

   function convertedValue(){
    setConverted(amount * currencyInfo[to])
   }
return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertedValue()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputbox
                                label={currencyTo}
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => {
                                    setCurrencyFrom(currency)
                                }}
                                selectCurrency={currencyTo}
                                onAmountChange={(value) => setAmount(value)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputbox
                                label={to}
                                amount={converted}
                                currencyOption={option}
                                onCurrencyChange={(currency) => {
                                    setTo(currency)
                                }}
                                selectCurrency={to}
                                amountDisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {amount} {currencyTo.toUpperCase()} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
)}
