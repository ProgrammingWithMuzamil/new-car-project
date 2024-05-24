import { manufacturers } from '@/constants';
import { CarProps, filterProps } from "@/type";

export async function fetchCar(filter:filterProps){
   const{ manufacturer,year, model,limit,fuels} = filter;
     const 	headers= {
        'X-RapidAPI-Key': 'abd9215eabmsh55ebf5475a01fb5p1cdc23jsn1fdc3b359119',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
     }

     const response = await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fule_type=${fuels}`,{
        headers: headers,}
     );

     const result= await response.json();
     return result
}

export const calculateCarRent = (city_mpg:number, year:number)=>{
   const basePricePerDay = 50;
   const mileageFactore = 0.1;
   const ageFactor = 0.05;

   const mileageRate = city_mpg * mileageFactore;
   const ageRate = (new Date().getFullYear()- year) * ageFactor;
  
   
   const rentalRatePerDay = basePricePerDay + mileageRate +ageRate;
   return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps,angle?: string)=>{
   const url = new URL('https:cdn.imagin.stuio/getimage');
   const { make, year, model } = car;
   url.searchParams.append('customer','hrjavascript-mastery');
   url.searchParams.append('make', make);
   url.searchParams.append('modelFamily', model.split(' ')[0]);
   url.searchParams.append('zoomType', 'fullscreen');
   url.searchParams.append('modelYar', `${year}`);
   url.searchParams.append('angle', `${angle}`);
   return `${url}`;
}
export const updateSearchParams = (type: string, value: string)=>{
   const searchParams = new URLSearchParams(window.location.search)

   searchParams.set(type,value)

 const newPathname = `${window.location.pathname}?${searchParams.toString()}`
 return newPathname;
}