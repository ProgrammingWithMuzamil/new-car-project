import { CarCard, CustomFilter, Hero, SearchBar } from "@/components/index";
import { fetchCar } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allcars = await fetchCar();
  console.log(allcars)
  const DataisEmpty = !Array.isArray(allcars) || allcars.length<1 || !allcars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filer-container">
            <CustomFilter />
            <CustomFilter />

          </div>
        </div>

        {!DataisEmpty?(
          <div className="home__cars-wrapper">
             {allcars.map((car)=>(<CarCard car={car}/>))}
          </div>
        ):(
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops no result</h2>
            <p>{allcars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
