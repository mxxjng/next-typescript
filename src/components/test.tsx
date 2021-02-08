import * as React from 'react';
import styled from 'styled-components';
import { Button, Box } from '@chakra-ui/react';

const StyledDiv = styled.div`
  background-color: red;
`;

const Test: React.FC = () => {
  return (
    <div>
      <Box textAlign="center">
        <Button colorScheme="teal" variant="outline">
          Button
        </Button>
      </Box>
    </div>
  );
};
export default Test;
