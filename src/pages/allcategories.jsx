import {
    Box,
   Button,
   Grid,
   GridItem,
   Heading,
   Image,
   Stack,
   Text,
   useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletegame, deletegamecategory, getAllcategories, getAllgames } from '../api';



export default function Allcategories(){

    const [loading,setloading] = useState(false);
    const [gamecategories,setgamecategories] = useState([])
    const [fetchagain,setfetchagain] = useState(false)

    const toast = useToast()

    useEffect(() => {
       getAllcategories(setloading,toast,setgamecategories)
    },[fetchagain])

    const navigate = useNavigate()

    const delgame = (id) => {
        deletegamecategory(toast,id,fetchagain,setfetchagain)
    }

    return(
        <Box w="full" bg={'gray.500'}>
             <Heading w="100%" textAlign={'center'}>All Game Categories</Heading>
           <Grid w="80%" mt={10} mx="auto" templateColumns={'repeat(8, 1fr)'} gap={8}>
              {gamecategories.length > 0 && gamecategories.map((gamec) => {
                return(
                    <GridItem w={'100%'} h={250}>
                        <Image src={gamec?.gamecategoryimage} w={'100%'} objectFit="contain" borderRadius={18} h={'60%'}/>
                        <Box w={'100%'} py={2}>
                          <Text color={'#fff'} textTransform="capitalize" fontSize={20} textAlign="center" py={1}>{gamec?.gamecategoryname}</Text>
                          <Stack direction={'row'} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editgamecategory',{
                                state:gamec
                             })}>
                                 Edit
                             </Button>
                             <Button onClick={() => delgame(gamec?.imagepublicid)}>
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