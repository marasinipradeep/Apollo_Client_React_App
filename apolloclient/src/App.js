import React, {useState} from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';

import ExchangeRate from './Components/ExchangeRates';
import Dogs from './Components/Dogs';
import DogPhoto from './Components/DogPhoto';
import DelayedQuery from './Components/DelayedQuery';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

function App() {

  const [selectedDog, setSelectedDog] = useState(null);
  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <h2>Building Query components 🚀</h2>
     {selectedDog && <DogPhoto breed={selectedDog} />} 
      <DelayedQuery/>
      <Dogs onDogSelected={onDogSelected} />

      {/* <ExchangeRate/> */}

    </ApolloProvider>
  );
}

export default App;
