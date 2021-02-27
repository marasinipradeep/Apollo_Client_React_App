import React from 'react';

//The useLazyQuery hook is perfect for executing queries in response to events other than component rendering. This hook acts just like useQuery, with one key exception: when useLazyQuery is called, it does not immediately execute its associated query. Instead, it returns a function in its result tuple that you can call whenever you're ready to execute the query:
import {gql, useLazyQuery } from '@apollo/client';


const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;


function DelayedQuery() {
    const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);
  
    if (loading) return <p>Loading ...</p>;
  
    return (
      <div>
        {data && data.dog && <img src={data.dog.displayImage} />}
        <button onClick={() => getDog({ variables: { breed: 'african' } })}>
          Click me!
        </button>
      </div>
    );
  }

  export default DelayedQuery;