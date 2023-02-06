import React from 'react';
import {
  ChakraProvider,
  Flex,
  VStack,
  IconButton,
  theme,
  Spacer,
  Tooltip,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaGithub} from 'react-icons/fa';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
          <VStack p={5}>
            <Flex w="100%">
              <Spacer></Spacer>
              <ColorModeSwitcher />
              <Tooltip label='Visit my Github page'><a href="https://github.com/Tero75" target='_blank' rel="noreferrer"><IconButton ml={8} icon={<FaGithub /> }  isRound="true"></IconButton></a></Tooltip>             
            </Flex>
            <Header />
            <Profile />
            <Projects />
          </VStack>
    </ChakraProvider>
  );
}

export default App;
