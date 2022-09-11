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
import { deletearticle, deletecolumn, deletegame, getAllcategories, getAllgames, getarticle, getarticles, getcategorygames, getcolumn } from '../api';
import parse from 'html-react-parser'
import classes from "../App.module.css";


export default function Allcolumn(){

    const [loading,setloading] = useState(false);
    const [columns,setcolumns] = useState([])
    const [fetchagain,setfetchagain] = useState(false)

    const toast = useToast()

    useEffect(() => {
       getcolumn(setloading,toast,setcolumns)
    },[fetchagain])

    const navigate = useNavigate()

    const delcol = (id) => {
        deletecolumn(toast,id,fetchagain,setfetchagain)
    }


    
    return(
        <Box w="full" bg={'gray.500'} minHeight="90vh">
             <Heading w="100%" textAlign={'center'}>Top Table Column</Heading>
           <Grid w="100%" mt={10} mx="auto" templateColumns={'repeat(1, 1fr)'} gap={6}>
              {columns.length > 0 && columns.map((column) => {
                return(
                    <GridItem w={'90%'} mx="auto" minH={300} borderRadius={5} borderColor={'#fff'}>
                        <Box w={'100%'} py={2}>
                            
                            <table>
          <thead>
            <tr>
              <th>{column.columnoneheading}</th>
              <th>{column.columntwoheading}</th>
              <th>{column.columnthreeheading}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{column.columnonetextone}</td>
              <td>{column.columntwotextone}</td>
              <td>
                <a target="_blank" href={
                    column?.columnthreebuttononelink.startsWith("http://") ||
                    column?.columnthreebuttononelink.startsWith("https://")
                      ? column?.columnthreebuttononelink
                      : `//${column?.columnthreebuttononelink}`
                  }>
                  {column.columnthreebuttonone}
                </a>
              </td>
            </tr>

            <tr>
              <td>{column.columnonetexttwo}</td>
              <td>{column.columntwotexttwo}</td>
              <td>
                <a target="_blank" href={
                    column?.columnthreebuttontwolink.startsWith("http://") ||
                    column?.columnthreebuttontwolink.startsWith("https://")
                      ? column?.columnthreebuttontwolink
                      : `//${column?.columnthreebuttontwolink}`
                  }>
                  {column.columnthreebuttontwo}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
                          <Stack direction={'row'} mt={5} gap={2} justifyContent="center">
                             <Button onClick={() => navigate('/admin/editcolumn',{
                                state:column
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