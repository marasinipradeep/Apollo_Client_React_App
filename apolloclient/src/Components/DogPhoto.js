import { gql, useQuery } from '@apollo/client';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    pollInterval:500 // you will fetch the current breed's image from the server evry 0.5 seconds.If you set pollInterval to 0, the query will not poll.
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
      <>
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
    <button onClick={()=>refetch()}>Refetch!</button>
    </>
  
  );
}

export default DogPhoto;