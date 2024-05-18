export async function fetchCar(){
     const 	headers= {
        'X-RapidAPI-Key': 'abd9215eabmsh55ebf5475a01fb5p1cdc23jsn1fdc3b359119',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
     }

     const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,}
     );

     const result= await response.json();
     return result
}