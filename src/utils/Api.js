const urls = [
    "https://swapi.py4e.com/api/people/1", //luke
    "https://swapi.py4e.com/api/people/11", //anakin
    "https://swapi.py4e.com/api/people/10", //obi-wan
    "https://swapi.py4e.com/api/people/4", //darth vader
    "https://swapi.py4e.com/api/people/3", //r2-d2
    "https://swapi.py4e.com/api/people/2", //c-3po
    "https://swapi.py4e.com/api/people/13", //chewbacca
    "https://swapi.py4e.com/api/people/20", //yoda
  ]

  export const fetchData = async () => {
    try {
        const response = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );
        console.log(response);
        return response;
    } catch (er) {
        console.log('Error', er);
    }
  }