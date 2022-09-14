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
  Spinner,
  Text,
  useColorModeValue,
  useToast,
  ToastProvider,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  createarticle,
  creategamecategory,
  editarticle,
  editbuttonlinkglobal,
  getAllcategories,
  showtoast,
} from "../api";

export default function GlobalButtonlinks() {

    
  const navigate = useNavigate()


  const [loading, setloading] = useState(false);
  const [buttonlinkone, setbuttonlinkone] = useState("");
  const [buttonlinktwo, setbuttonlinktwo] = useState("");
  const [buttonone, setbuttonone] = useState("")
  const [buttontwo, setbuttontwo] = useState("")


  const toast = useToast();

  useEffect(() => {
    const links = localStorage.getItem("buttonlinks")
    if(links !== null){
        const data = JSON.parse(links)
        setbuttonlinkone(data.buttonlinkone)
        setbuttonlinktwo(data.buttonlinktwo)
        setbuttonone(data.buttonone)
        setbuttontwo(data.buttontwo)
    } 
  },[])

  const update = () => {
    if (!buttonlinkone || !buttonlinktwo || !buttonone || !buttontwo) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const obj = {
      buttonlinkone,
      buttonlinktwo,
      buttonone,
      buttontwo
    };

    editbuttonlinkglobal(obj, setloading, toast,navigate);
  };

//   useEffect(() => {
//     getAllcategories(setloading, toast, setcategories);
//   }, []);



  return (
    <>
      <ToastProvider />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} maxW={"full"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Update button Links Globally</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            w={"1000px"}
            mx='auto'
            p={8}
          >
            <Stack spacing={4}>
{/* 
                  <FormControl>
                <FormLabel>Article Category</FormLabel>
                <Select defaultValue={articlecategoryid} placeholder="Select category" onChange={(e) => setarticlecategoryid(e.target.value)}>
                  {categories.map((cat) => {
                    return (
                      <option selected={cat?._id == articlecategoryid} value={cat?._id}>{cat?.gamecategoryname}</option>
                    );
                  })}
                </Select>
              </FormControl> */}
              
              <FormControl>
                <FormLabel>Button one text</FormLabel>
                <Input
                  type="text"
                  value={buttonone}
                  onChange={(e) => setbuttonone(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Button one Link</FormLabel>
                <Input
                  type="text"
                  value={buttonlinkone}
                  onChange={(e) => setbuttonlinkone(e.target.value)}
                />
              </FormControl>
               <FormControl>
                <FormLabel>Button two text</FormLabel>
                <Input
                  type="text"
                  value={buttontwo}
                  onChange={(e) => setbuttontwo(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Button two Link</FormLabel>
                <Input
                  onChange={(e) => setbuttonlinktwo(e.target.value)}
                  value={buttonlinktwo}
                  type="text"
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
                    {loading ? (
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'
/>
                    ) : (
                  'Update Globally'

                    )}

                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
