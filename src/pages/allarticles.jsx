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
import { deletearticle, deletegame, getAllcategories, getAllgames, getarticle, getarticles, getcategorygames } from '../api';



export default function Allarticles(){

    const [loading,setloading] = useState(false);
    const [articles,setarticles] = useState([])
    const [fetchagain,setfetchagain] = useState(false)
    const [category,setcategory] = useState('')
    const [gamecategories,setgamecategories] = useState() 

    const toast = useToast()

    useEffect(() => {
       getarticles(setloading,toast,setarticles)
    },[fetchagain])

    const navigate = useNavigate()

    const delarticle = (id) => {
        deletearticle(toast,id,fetchagain,setfetchagain)
    }

    useEffect(() => {
       getAllcategories(setloading,toast,setgamecategories)
    },[])

    const filtergames = (value) => {
        if(value == 'default'){
           return getarticles(setloading,toast,setarticles)
        }else{
            return getarticle(setloading,toast,setarticles,value)
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
           <Grid w="100%" mt={10} mx="auto" templateColumns={'repeat(1, 1fr)'} gap={6}>
              {articles.length > 0 && articles.map((article) => {
                return(
                    <GridItem w={'90%'} mx="auto" minH={300} borderRadius={5} borderColor={'#fff'}>
                        <Box w={'100%'} py={2}>
                            <Text color={'#fff'} textTransform="capitalize" fontSize={25} fontWeight="bold" textAlign="center" py={1}>{article?.articleheading}</Text>
                            <Text color={'#fff'}  fontSize={18}   py={4}>{article?.article}</Text>
                          <Stack direction={'row'} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editarticle',{
                                state:article
                             })}>
                                 Edit
                             </Button>
                             <Button onClick={() => delarticle(article?._id)}>
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