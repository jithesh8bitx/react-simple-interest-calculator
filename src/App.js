import { useState } from "react";
import "./App.css";
import { TextField, Stack, Button } from "@mui/material";


function App() {
  const [interest, setInterest] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [isPrincipal, setIsPrincipal] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const getValidate = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]+$/) || value == "") {
      if (name == "principal") {
        setPrincipal(value);
        setIsPrincipal(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name == "principal") {
        setPrincipal(value);
        setIsPrincipal(false);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(false);
      } else {
        setYear(value);
        setIsYear(false);
      }
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (principal || rate || year) {
      setInterest((principal * rate * year) / 100);
    } else {
      alert("Please fill the form");
    }
  };

  const handleReset = () => {
    setInterest(0);
    setPrincipal(0);
    setRate(0);
    setYear(0);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="App h-screen d-flex justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: "450px" }} className="bg-light p-5 rounded">
        <h1>Simple Interest App</h1>
        <p>Calculate simple interest easily</p>
        <div className="shadow d-flex flex-column justify-content-center align-items-center rounded bg-warning p-3">
          <h1>₹ {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form className="mt-4" onSubmit={handleCalculate}>
          <div className="mb-2">
            <TextField
              onChange={getValidate}
              name="principal"
              value={principal || ""}
              className="w-100 mb-4"
              label="₹ Principal Amount"
              variant="outlined"
            />
            {!isPrincipal && (
              <div>
                <p className="text-danger">Invalid value !</p>
              </div>
            )}
            <TextField
              onChange={getValidate}
              name="rate"
              value={rate || ""}
              className="w-100 mb-4"
              label="Rate of Interest (p.a) %"
              variant="outlined"
            />
            {!isRate && (
              <div>
                <p className="text-danger">Invalid value !</p>
              </div>
            )}
            <TextField
              onChange={getValidate}
              name="year"
              value={year || ""}
              className="w-100 mb-4"
              label="Year (Yr)"
              variant="outlined"
            />
            {!isYear && (
              <div>
                <p className="text-danger">Invalid Year !</p>
              </div>
            )}
            <Stack
              direction="row"
              spacing={2}
              style={{ width: "fit-content" }}
              className="mx-auto"
            >
              <Button
                type="submit"
                disabled={isPrincipal && isRate && isYear ? false : true}
                variant="contained"
              >
                Calculate
              </Button>
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
