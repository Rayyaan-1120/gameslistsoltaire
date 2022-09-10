import {
    Box,
   Button,
   Grid,
   GridItem,
   Heading,
   HStack,
   Image,
   Select,
   Stack,
   Text,
   useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletearticle, deletegame, deletescript, getAllcategories, getAllgames, getarticle, getarticles, getcategorygames, getscripts } from '../api';
import parse from 'html-react-parser'


export default function Allscripts(){

    const [loading,setloading] = useState(false);
    const [scripts,setscripts] = useState([])
    const [fetchagain,setfetchagain] = useState(false)

    const toast = useToast()

    useEffect(() => {
       getscripts(setloading,toast,setscripts)
    },[fetchagain])

    const navigate = useNavigate()

    const delscripts = (id) => {
        deletescript(toast,id,fetchagain,setfetchagain)
    }


    
    return(
        <Box w="full" bg={'gray.500'} minHeight="90vh">
             <Heading w="100%" textAlign={'center'}>All Scripts</Heading>
           <Grid w="100%" mt={10} mx="auto" templateColumns={'repeat(1, 1fr)'} gap={6}>
              {scripts.length > 0 && scripts.map((script) => {
                return(
                    <GridItem w={'90%'} mx="auto" minH={150} borderRadius={5} borderColor={'#fff'}>
                        <Box w={'100%'} py={2}>
                          <Stack>
                            <HStack>
                                <Text fontSize={22} mr={6} color={'#fff'}>Script Src</Text>
                                <Text fontSize={20}  color={'#fff'}>{script.src}</Text>
                            </HStack>
                            <HStack>
                                <Text fontSize={22} mr={6} color={'#fff'}>Script Id</Text>
                                <Text fontSize={20}  color={'#fff'}>{script.id}</Text>
                            </HStack>
                          </Stack>
                          <Stack direction={'row'} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editscript',{
                                state:script
                             })}>
                                 Edit
                             </Button>
                             <Button onClick={() => delscripts(script?._id)}>
                                 Delete
                             </Button>
                          </Stack> 
                        </Box>
                    </GridItem>
                )
              })}
           </Grid> 
        </Box>
    )
}