import { gql, useQuery } from '@apollo/client';
//The useQuery hook's result object provides fine-grained information about the status of the query via the networkStatus property. To take advantage of this information, we set the notifyOnNetworkStatusChange option to true so our query component re-renders while a refetch is in flight:
import { NetworkStatus } from '@apollo/client';


const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data,refetch,networkStatus } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    notifyOnNetworkStatusChange:true
   // pollInterval:500 // you will fetch the current breed's image from the server evry 0.5 seconds.If you set pollInterval to 0, the query will not poll.
  });

  if(networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
      <>
    <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} alt="dog type"/>
    {/* Refetching is an excellent way to guarantee fresh data, but it introduces some complexity with loading state.  */}
    <button onClick={()=>refetch()}>Refetch!</button> 
    </>
  
  );
}

export default DogPhoto;