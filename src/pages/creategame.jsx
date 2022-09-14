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
import { creategame, getAllcategories, showtoast } from "../api";

export default function Creategame() {
  const [loading, setloading] = useState(false);
  const [gamename, setgamename] = useState("");
  const [imagealttag,setimagealttag] = useState('')
  const [gamefile, setgamefile] = useState(null);
  const [gamecategoryid, setgamecategoryid] = useState("");
  const [imageUrl,setImageUrl] = useState("")
//   const [topyellowtitle, settopyellowtitle] = useState("Tips Bermain Slot PP");
//   const [provider, setprovider] = useState("PP");
//   const [stake, setstake] = useState("200 – 9.8K");
//   const [paragraphtitle, setparagraphtitle] = useState("");
//   const [paragraph, setparagraph] = useState("");
//   const [orangetitle, setorangetitle] = useState("LAKUKAN TIPS DARI AWAL & ULANGI");
//   const [note, setnote] = useState("JIKA TERSEDIA / INGIN MEMBELI FITUR SPIN LAKUKAN POLA DIATAS SEBANYAK 2X");
  const [buttonone, setbuttonone] = useState("");
  const [buttononelink,setbuttononelink] = useState("")
  const [buttontwolink,setbuttontwolink] = useState("")
  const [buttontwo, setbuttontwo] = useState("");
  const [categories, setcategories] = useState([]);

  const toast = useToast();


  const create = () => {
    if (
      !gamename ||
      !imagealttag
    //   !topyellowtitle ||
    //   !provider ||
    //   !stake ||
    //   !paragraphtitle ||
    //   !paragraph ||
    //   !orangetitle ||
    //   !note ||
      // !buttonone ||
      // !buttontwo ||
      // !buttononelink ||
      // !buttontwolink
    ) {
      return showtoast(
        toast,
        "Empty Fields",
        "please fill all the fields",
        "error"
      );
    }

    console.log(imageUrl,'imagurl')
    

    const form = new FormData();
    form.append("gamename", gamename);
    form.append('imagealttag',imagealttag)
    form.append("gamecategoryid",gamecategoryid)
    form.append("photo", gamefile);
    form.append("imageurl",imageUrl)
    // form.append("topyellowtitle", topyellowtitle);
    // form.append("provider", provider);
    // form.append("stake", stake);
    // form.append("paragraphtitle", paragraphtitle);
    // form.append("paragraph", paragraph);
    // form.append("orangetitle", orangetitle);
    // form.append("note", note);
    form.append("buttonone", buttonone);
    form.append("buttononelink", buttononelink);
    form.append("buttontwolink", buttontwolink);
    form.append("buttontwo", buttontwo);

    creategame(form, setloading, toast);
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
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Create game</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Game Name</FormLabel>
                <Input
                  type="text"
                  value={gamename}
                  onChange={(e) => setgamename(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Game image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setgamefile(e.target.files[0])}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image Url</FormLabel>
                <Input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormControl>
                <FormControl>
                <FormLabel>Image alt tag</FormLabel>
                <Input
                  type="text"
                  value={imagealttag}
                  onChange={(e) => setimagealttag(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Game Category</FormLabel>
                <Select placeholder="Select category" onChange={(e) => setgamecategoryid(e.target.value)}>
                  {categories.map((cat) => {
                    return (
                      <option value={cat?._id}>{cat?.gamecategoryname}</option>
                    );
                  })}
                </Select>
              </FormControl>
              {/* <FormControl>
                <FormLabel>Top Yellow title</FormLabel>
                <Input
                  type="text"
                  value={topyellowtitle}
                  onChange={(e) => settopyellowtitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Provider</FormLabel>
                <Input
                  type="text"
                  value={provider}
                  onChange={(e) => setprovider(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Stake</FormLabel>
                <Input
                  type="text"
                  value={stake}
                  onChange={(e) => setstake(e.target.value)}
                />
              </FormControl> */}

              {/* <FormControl>
                <FormLabel>Paragraph title</FormLabel>
                <Input
                  type="text"
                  value={paragraphtitle}
                  onChange={(e) => setparagraphtitle(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Paragraph</FormLabel>
                <Textarea
                  value={paragraph}
                  onChange={(e) => setparagraph(e.target.value)}
                />
              </FormControl> */}

              {/* <FormControl>
                <FormLabel>Orange title</FormLabel>
                <Input
                  type="text"
                  value={orangetitle}
                  onChange={(e) => setorangetitle(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Note</FormLabel>
                <Textarea
                  value={note}
                  onChange={(e) => setnote(e.target.value)}
                />
              </FormControl> */}
              {/* <FormControl>
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
                  value={buttononelink}
                  onChange={(e) => setbuttononelink(e.target.value)}
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
                  type="text"
                  value={buttontwolink}
                  onChange={(e) => setbuttontwolink(e.target.value)}
                />
              </FormControl> */}
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
