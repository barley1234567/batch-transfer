import { ChakraProvider } from '@chakra-ui/react';
import BatchTransfer from './components/BatchTransfer';

function App() {
  return (
    <ChakraProvider>
      <BatchTransfer />
    </ChakraProvider>
  );
}

export default App;
