
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-indigo-950
        px-4
      "
    >
      <div className="w-full max-w-lg">
        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            p-6
          "
        >
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white">
              💱 Currency Converter
            </h1>

            <p className="text-gray-300 mt-2">
              Real-Time Exchange Rates
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative h-8 flex justify-center items-center">
              <button
                type="button"
                onClick={swap}
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  text-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                ⇅
              </button>
            </div>

            <div className="mt-3 mb-5">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                shadow-lg
                transition-all
                duration-300
              "
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>

          {/* Result Card */}
          <div
            className="
              mt-6
              p-4
              rounded-2xl
              bg-white/10
              border
              border-white/20
              text-center
            "
          >
            <p className="text-gray-300 text-sm">
              Exchange Result
            </p>

            <h2 className="text-xl font-semibold text-green-400 mt-2">
              {amount} {from.toUpperCase()}
            </h2>

            <p className="text-white text-lg my-1">=</p>

            <h1 className="text-4xl font-extrabold text-white">
              {convertedAmount.toFixed(2)} {to.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

