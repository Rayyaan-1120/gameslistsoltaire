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
import { creategamecategory, editgamecategory, getAllcategories, showtoast } from "../api";

export default function Editgamecategory() {

    const locationstate = useLocation().state
 
  const [loading, setloading] = useState(false);
  const [gamecategoryname, setgamecategoryname] = useState(locationstate ? locationstate.gamecategoryname :"");
  const [gamefile, setgamefile] = useState(null);
  const [imagealttag,setimagealttag] = useState(locationstate.imagealttag ? locationstate.imagealttag :'')


  const toast = useToast();

  const navigate = useNavigate()

  const update = () => {
    if (
      !gamecategoryname
    ) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const form = new FormData();
    form.append("gamecategoryname", gamecategoryname);
    form.append("photo", gamefile);
    form.append('imagealttag',imagealttag)

    editgamecategory(form, setloading, toast,locationstate?._id,navigate);
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
            <Heading fontSize={"4xl"}>Edit game category</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Game Category Name</FormLabel>
                <Input
                  type="text"
                  value={gamecategoryname}
                  onChange={(e) => setgamecategoryname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Game Category image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setgamefile(e.target.files[0])}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image Alt tag</FormLabel>
                <Input
                  type="text"
                  value={imagealttag}
                  onChange={(e) => setimagealttag(e.target.value)}
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
