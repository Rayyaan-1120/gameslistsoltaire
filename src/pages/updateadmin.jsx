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
import { adminlogin, creategamecategory, getAllcategories, showtoast, updateadmin } from "../api";
import { useAppContext } from "../components/context";

export default function Updateadmin() {
 
  const [loading, setloading] = useState(false);
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");

  const {setadmin} = useAppContext()

  const navigate = useNavigate()

  const toast = useToast();

  const update = () => {
    if (
      !oldpassword ||
      !newpassword 
    ) {
      return showtoast(
        toast,
        "Password required",
        "Please enter the password",
        "error"
      );
    }

    const obj = {
        oldpassword,
        newpassword
    }

    updateadmin(obj, setloading, toast,setadmin,navigate);
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
            <Heading fontSize={"4xl"}>Admin Update password</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Old Password</FormLabel>
                <Input
                  type="text"
                  value={oldpassword}
                  onChange={(e) => setoldpassword(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="text"
                  value={newpassword}
                  onChange={(e) => setnewpassword(e.target.value)}
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
                  Update Password
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
