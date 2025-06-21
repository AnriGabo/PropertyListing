import { useState } from "react";
import "./App.css";
import HeaderBackground from "./components/backgroundImage/HeaderBackground";
import FilterBarList from "./components/filterBar/FilterBarList";
import ReusableCard from "./components/cabinList/ReusableCard";

function App() {
  // 1)ვქმნით მშობელში ცარიელ სთეითს, შვილიდან მივიღებთ სთეითის ღირებულებას
  const [country, setCountry] = useState<string>("");

  console.log(country);
  return (
    <div className="All__Wrapper">
      <HeaderBackground />
      {/* სეთსთეითი გავუშვით შვილობილ კომპონენტში, შვილი მიიღებს, და ღილაკზე დაჭერის setCountry country updateმოხდება */}
      {/*FilterBarList-ში, როცა მომხმარებელი დააჭერს მაგ:Sweden, --> updateCountry("Sweden"), --> state === "Sweden" */}
      <FilterBarList updateCountry={setCountry} />

      {/* countryსთეითს სადაც ინახება უშუალოდ დაჭერილი ღილაკსი ველიუ,მაგ("Sweden"), გადავაწოდებთ fetch,გავფილტრავთ და ეგაა */}
      <ReusableCard chooseCountry={country} />
    </div>
  );
}

export default App;
