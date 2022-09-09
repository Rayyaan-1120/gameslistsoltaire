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
import { creategamecategory, getAllcategories, showtoast } from "../api";

export default function Creategamecategory() {
 
  const [loading, setloading] = useState(false);
  const [gamecategoryname, setgamecategoryname] = useState("");
  const [gamefile, setgamefile] = useState(null);

  const toast = useToast();

  const create = () => {
    if (
      !gamecategoryname ||
      !gamefile
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
    form.append("photo", gamefile[0]);

    creategamecategory(form, setloading, toast);
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
            <Heading fontSize={"4xl"}>Create game category</Heading>
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
                <FormLabel>Game image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setgamefile(e.target.files)}
                />
              </FormControl>
             
              <Stack spacing={10}>
                <Button
                onClick={create}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Create
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
