import {
    Box,
   Button,
   Grid,
   GridItem,
   Heading,
   Image,
   Select,
   Stack,
   Text,
   useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletegame, getAllcategories, getAllgames, getcategorygames } from '../api';



export default function Allgames(){

    const [loading,setloading] = useState(false);
    const [games,setgames] = useState([])
    const [fetchagain,setfetchagain] = useState(false)
    const [category,setcategory] = useState('')
    const [gamecategories,setgamecategories] = useState([]) 

    const toast = useToast()

    useEffect(() => {
       getAllgames(setloading,toast,setgames)
    },[fetchagain])

    const navigate = useNavigate()

    const delgame = (id) => {
        deletegame(toast,id,fetchagain,setfetchagain)
    }

    useEffect(() => {
       getAllcategories(setloading,toast,setgamecategories)
    },[])

    const filtergames = (value) => {
        if(value == 'default'){
           return getAllgames(setloading,toast,setgames)
        }else{
            return getcategorygames(setloading,toast,setgames,value)
        }
    }

    console.log(category,'category')

    
    return(
        <Box w="full" bg={'gray.500'}>
             <Heading w="100%" textAlign={'center'}>All Games</Heading>
             <Select w={'30%'} mx="auto" mt={5} onChange={(e) => {
                setcategory(e.target.value)
                filtergames(e.target.value)
             }}>
                 <option selected value="default">All Categories</option>
                 {gamecategories?.map((gc) => {
                    return(
                      <option value={gc._id}>{gc?.gamecategoryname}</option>
                    )
                 })}
             </Select>
           <Grid w="80%" mt={10} mx="auto" templateColumns={'repeat(5, 1fr)'} gap={3}>
              {games.length > 0 && games.map((game) => {
                return(
                    <GridItem w={'100%'} h={300}>
                        <Image src={game?.gameimage} w={'100%'} objectFit="contain" borderRadius={18} h={'65%'}/>
                        <Box w={'100%'} py={2}>
                            <Text color={'#fff'} textTransform="capitalize" fontSize={20} textAlign="center" py={1}>{game?.gamename}</Text>
                          <Stack direction={'row'} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editgame',{
                                state:game
                             })}>
                                 Edit
                             </Button>
                             <Button onClick={() => delgame(game?.imagepublicid)}>
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