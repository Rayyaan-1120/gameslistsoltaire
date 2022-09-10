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
import { deletearticle, deletegame, deletescript, getAllcategories, getAllgames, getarticle, getarticles, getcategorygames, getscripts, getslidertext } from '../api';


export default function Allslidertexts(){

    const [loading,setloading] = useState(false);
    const [slidertexts,setslidertexts] = useState([])
    const [fetchagain,setfetchagain] = useState(false)

    const toast = useToast()

    useEffect(() => {
       getslidertext(setloading,toast,setslidertexts)
    },[fetchagain])

    const navigate = useNavigate()


    
    return(
        <Box w="full" bg={'gray.500'} minHeight="90vh">
             <Heading w="100%" textAlign={'center'}>All Slider texts</Heading>
           <Grid w="100%" mt={10} mx="auto" templateColumns={'repeat(1, 1fr)'} gap={6}>
              {slidertexts.length > 0 && slidertexts.map((slidertext) => {
                return(
                    <GridItem w={'90%'} mx="auto" minH={150} borderRadius={5} borderColor={'#fff'}>
                        <Box w={'100%'} py={2}>
                          <Stack>
                                <Text fontSize={24}  color={'#fff'}>{slidertext?.text}</Text>
                          </Stack>
                          <Stack direction={'row'} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editslidertext',{
                                state:slidertext
                             })}>
                                 Edit
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