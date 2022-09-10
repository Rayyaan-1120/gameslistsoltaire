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
import { useNavigate } from "react-router-dom";
import { adminlogin, creategamecategory, getAllcategories, showtoast } from "../api";
import { useAppContext } from "../components/context";

export default function Adminlogin() {
 
  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState("");

  const {setadmin} = useAppContext()

  const navigate = useNavigate()

  const toast = useToast();

  const login = () => {
    if (
      !password 
    ) {
      return showtoast(
        toast,
        "Password required",
        "Please enter the password",
        "error"
      );
    }

    const obj = {
        password
    }

    adminlogin(obj, setloading, toast,setadmin,navigate);
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
            <Heading fontSize={"4xl"}>Admin Login</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="text"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormControl>
             
              <Stack spacing={10}>
                <Button
                onClick={login}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
