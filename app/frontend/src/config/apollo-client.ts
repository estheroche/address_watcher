import { ApolloClient, ApolloLink, InMemoryCache, Observable } from '@apollo/client';
import { compose } from 'src/app/app/contexts/ComposeProvider';

const link = new ApolloLink((operation) => {
  return new Observable((observer) => {
    compose.execute(operation.query, operation.variables).then(
      (result) => {
        observer.next(result);
        observer.complete();
      },
      (error) => {
        observer.error(error);
      }
    );
  });
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  connectToDevTools: true,
});
