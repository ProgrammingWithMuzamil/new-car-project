"use client"
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components/index";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { fetchCar } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
 const [allcars, setAllcars] = useState([]);
 const [loading, setLoading] = useState(false);

 const [manufacture, setManufacture] = useState("");
 const [model, setModel] = useState("")

 const [fuel, setFuel] = useState("");
 const [year, setYear] = useState(2022);

 const [limit, setLimit] = useState(10);

 const getCars = async() =>{
  setLoading(true);
      try {
        const result = await fetchCar({
          manufacturer: manufacture || " ",
          year: year || 2022 ,
          limit: limit || 10,
          fuels: fuel || " ",
          model: model || "",
        });
         setAllcars(result);
      } catch (error) {
        console.log(error);
      } finally{
          setLoading(false);
      }
    
 }

 useEffect(()=>{
  getCars();

 },[model,limit,fuel,year,manufacture])
  console.log(allcars);
  const DataisEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar  
          setManufacture={setManufacture}
          setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter title="fuel" option={fuels}  setFilter={setFuel}/>
            <CustomFilter title="year" option={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allcars.length >0 ? (
          <section>
          <div className="home__cars-wrapper">
            {allcars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          {loading &&(
            <div className="mt-16 w-full flex-center">
              <Image
              src="/loader.svg" 
              alt="loder"
              width={50}
              height={50}
              className="object-contain"/>
            </div>
          )}
          <ShowMore
          pageNumber={ limit/10}
          isNext={limit > allcars.length}
          setLimit={setLimit}
          />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops no result</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
