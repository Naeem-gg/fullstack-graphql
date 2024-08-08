import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query GetPosts{
    posts{
      id,title,views
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>{"data coming from graphql server".toUpperCase()}</h1>
      <ul>
        {data.posts.map((post: { id:string,title:string,views:number}) => (
          <li key={post.id}>{JSON.stringify(post)}</li>
        ))}
      </ul>
    </div>
  );
}
