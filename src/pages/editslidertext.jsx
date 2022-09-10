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
import {
  createarticle,
  creategamecategory,
  createscript,
  editscript,
  editslidertext,
  getAllcategories,
  showtoast,
} from "../api";

export default function Editslidertext() {

    const locationstate = useLocation().state

  const [loading, setloading] = useState(false);
  const [text, settext] = useState(locationstate ? locationstate.text :"");

  const toast = useToast();

  const navigate = useNavigate()

  const update = () => {
    if (!text) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const obj = {
      text,
    };

    editslidertext(obj, setloading, toast,locationstate?._id,navigate);
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
            <Heading fontSize={"4xl"}>Edit Slider text</Heading>
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
                <FormLabel>Slider text</FormLabel>
                <Textarea
                  type="text"
                  value={text}
                  onChange={(e) => settext(e.target.value)}
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
                  Edit
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}