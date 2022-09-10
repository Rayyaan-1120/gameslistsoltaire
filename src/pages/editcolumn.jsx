import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  ToastProvider,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createcoulmn, creategamecategory, editcolumn, getAllcategories, showtoast } from "../api";

export default function Editcolumn() {
 
  const [loading, setloading] = useState(false);

  const locationstate = useLocation().state

    const [columnoneheading,setcolumnoneheading] = useState(locationstate ? locationstate?.columnoneheading :'')
    const [columnonetextone,setcolumnonetextone] = useState(locationstate ? locationstate?.columnonetextone :'')
    const [columnonetexttwo,setcolumnonetexttwo] = useState(locationstate ? locationstate?.columnonetexttwo :'')
    const [columntwoheading,setcolumntwoheading] = useState( locationstate ? locationstate?.columntwoheading :'')
    const [columntwotextone,setcolumntwotextone] = useState( locationstate ? locationstate?.columntwotextone :'')
    const [columntwotexttwo,setcolumntwotexttwo] = useState( locationstate ? locationstate?.columntwotexttwo :'')
    const [columnthreeheading,setcolumnthreeheading] = useState( locationstate ? locationstate?.columnthreeheading :'')
    const [columnthreebuttonone,setcolumnthreebuttonone] = useState( locationstate ? locationstate?.columnthreebuttonone :'')
    const [columnthreebuttononelink,setcolumnthreebuttononelink] = useState( locationstate ? locationstate?.columnthreebuttononelink :'')
    const [columnthreebuttontwo,setcolumnthreebuttontwo] = useState( locationstate ? locationstate?.columnthreebuttontwo :'')
    const [columnthreebuttontwolink,setcolumnthreebuttontwolink] = useState( locationstate ? locationstate?.columnthreebuttontwolink :'')


  const navigate = useNavigate()
  const toast = useToast();

  const update = () => {
    if (
      !columnoneheading ||
    !columnonetextone ||
    !columnonetexttwo ||
    !columntwoheading ||
    !columntwotextone ||
    !columntwotexttwo ||
    !columnthreeheading ||
    !columnthreebuttonone ||
    !columnthreebuttononelink ||
    !columnthreebuttontwo ||
    !columnthreebuttontwolink 
    ) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const obj = {
          columnoneheading,
    columnonetextone,
    columnonetexttwo,
    columntwoheading,
    columntwotextone,
    columntwotexttwo,
    columnthreeheading,
    columnthreebuttonone,
    columnthreebuttononelink,
    columnthreebuttontwo,
    columnthreebuttontwolink,
    }
    
    editcolumn(obj, setloading, toast,locationstate?._id,navigate);
  };


  return (
    <>
      <ToastProvider />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Edit column</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Column One Heading</FormLabel>
                <Input
                  type="text"
                  value={columnoneheading}
                  onChange={(e) => setcolumnoneheading(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column One Text one</FormLabel>
                <Input
                  type="text"
                  value={columnonetextone}
                  onChange={(e) => setcolumnonetextone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column One Text two</FormLabel>
                <Input
                  type="text"
                  value={columnonetexttwo}
                  onChange={(e) => setcolumnonetexttwo(e.target.value)}
                />
              </FormControl>
                <FormControl>
                <FormLabel>Column Two Heading</FormLabel>
                <Input
                  type="text"
                  value={columntwoheading}
                  onChange={(e) => setcolumntwoheading(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Two Text one</FormLabel>
                <Input
                  type="text"
                  value={columntwotextone}
                  onChange={(e) => setcolumntwotextone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Two Text two</FormLabel>
                <Input
                  type="text"
                  value={columntwotexttwo}
                  onChange={(e) => setcolumntwotexttwo(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Three Heading</FormLabel>
                <Input
                  type="text"
                  value={columnthreeheading}
                  onChange={(e) => setcolumnthreeheading(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Three Button one</FormLabel>
                <Input
                  type="text"
                  value={columnthreebuttonone}
                  onChange={(e) => setcolumnthreebuttonone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Three Button one Link</FormLabel>
                <Input
                  type="text"
                  value={columnthreebuttononelink}
                  onChange={(e) => setcolumnthreebuttononelink(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Column Three Button two</FormLabel>
                <Input
                  type="text"
                  value={columnthreebuttontwo}
                  onChange={(e) => setcolumnthreebuttontwo(e.target.value)}
                />
              </FormControl>
               <FormControl>
                <FormLabel>Column Three Button two Link</FormLabel>
                <Input
                  type="text"
                  value={columnthreebuttontwolink}
                  onChange={(e) => setcolumnthreebuttontwolink(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={update}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Update
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}