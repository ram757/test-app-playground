import { useEffect, useState } from "react"
import ApiClient from "../service/api/apiClient";

type ChuckNorrisJoke = {
  value: string;
}

const ChuckNorris = (): React.ReactElement => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // const PEOPLE_URL = 'https://swapi.dev/api/people';
    ApiClient.get<ChuckNorrisJoke>('https://api.chucknorris.io/jokes/random?category=dev')
      .then((jokeData: ChuckNorrisJoke) => {
        console.log(jokeData);
        setJoke(jokeData.value)
      });
  }, []);

  return (
    <p>
      {joke}
    </p>
  )
}

export default ChuckNorris;