import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { adminlogout } from '../../api';
import { useAppContext } from '../context';

const Links = ['create game', 'create category', 'games','categories','articles','column','create script','scripts','slider texts','update password'];

const NavLink = ({ children,link }) => {

    const navigate = useNavigate()

    return(
         <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={() => navigate(`/admin/${link.replaceAll(' ','')}`)}
    >
    {children}
  </Link>
    )
};

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const navigate = useNavigate()
  const {setadmin} = useAppContext()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          
          <HStack spacing={8} alignItems={'center'}>
            <Box>Admin Panel</Box>
           
          
          </HStack>
          
            <HStack>
                  {Links.map((link) => (
                <NavLink key={link} link={link}>{link}</NavLink>
              ))}
              <Button onClick={() => adminlogout(toast,setadmin,navigate)} bg={'red.500'} color="#fff">
                    Logout
                </Button>
            </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} >{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}