import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';

import ExchangeRate from './Components/ExchangeRates';
import Dogs from './Components/Dogs';
import DogPhoto from './Components/DogPhoto';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <Dogs/>
      <DogPhoto/>
    <ExchangeRate/>

    </ApolloProvider>
  );
}

export default App;
