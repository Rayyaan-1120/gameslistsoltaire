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
  editarticle,
  getAllcategories,
  showtoast,
} from "../api";

export default function Editarticle() {

    const locationstate = useLocation().state
  const navigate = useNavigate()


  const [loading, setloading] = useState(false);
  const [articleheading, setarticleheading] = useState(locationstate ? locationstate.articleheading :"");
  const [articlecategoryid, setarticlecategoryid] = useState(locationstate ? locationstate.articlecategoryid :"");
  const [article, setarticle] = useState(locationstate ? locationstate.article : "");
  const [categories, setcategories] = useState([]);

  const toast = useToast();

  const update = () => {
    if (!articleheading || !articlecategoryid || !article) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    const obj = {
      article,
      articleheading,
      articlecategoryid,
    };

    editarticle(obj, setloading, toast,locationstate?._id,navigate);
  };

  useEffect(() => {
    getAllcategories(setloading, toast, setcategories);
  }, []);

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
            <Heading fontSize={"4xl"}>Edit Article</Heading>
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
                <FormLabel>Article Category</FormLabel>
                <Select
                  placeholder="Select category"
                  defaultValue={articlecategoryid}
                  onChange={(e) => setarticlecategoryid(e.target.value)}
                >
                  {categories.map((cat) => {
                    return (
                      <option value={cat?._id} selected={cat?._id == articlecategoryid}>{cat?.gamecategoryname}</option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Article Heading</FormLabel>
                <Input
                  type="text"
                  value={articleheading}
                  onChange={(e) => setarticleheading(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Main Article</FormLabel>
                <Textarea
                  onChange={(e) => setarticle(e.target.value)}
                  value={article}
                  size="lg"
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
