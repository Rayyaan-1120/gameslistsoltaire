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
import {
  createarticle,
  creategamecategory,
  createscript,
  getAllcategories,
  showtoast,
} from "../api";

export default function Createscript() {
  const [loading, setloading] = useState(false);
  const [src, setsrc] = useState("");
  const [id, setid] = useState("");

  const toast = useToast();

  const create = () => {
    if (!src || !id) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const obj = {
      src,
      id,
    };

    createscript(obj, setloading, toast);
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
        <Stack spacing={8} maxW={"full"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Create Script</Heading>
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
             
              <FormControl>
                <FormLabel>Script src</FormLabel>
                <Input
                  type="text"
                  value={src}
                  onChange={(e) => setsrc(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Script id</FormLabel>
                <Input
                  type="text"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
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
