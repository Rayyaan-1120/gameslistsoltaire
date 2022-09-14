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
import { creategame, editgame, getAllcategories, showtoast } from "../api";

export default function EditGame() {

    const locationstate = useLocation().state

  const [loading, setloading] = useState(false);
  const [gamename, setgamename] = useState(locationstate ? locationstate.gamename : "");
  const [gamefile, setgamefile] = useState(null);
  const [imagealttag,setimagealttag] = useState(locationstate.imagealttag ? locationstate.imagealttag :"")

  const [gamecategoryid, setgamecategoryid] = useState(locationstate ? locationstate.gamecategoryid :"");
  const [topyellowtitle, settopyellowtitle] = useState(locationstate ? locationstate.topyellowtitle :"");
  const [provider, setprovider] = useState(locationstate ? locationstate.provider :"");
  const [stake, setstake] = useState(locationstate ? locationstate.stake : "");
  const [paragraphtitle, setparagraphtitle] = useState(locationstate ? locationstate.paragraphtitle :"");
  const [paragraph, setparagraph] = useState(locationstate ? locationstate.paragraph :"");
  const [orangetitle, setorangetitle] = useState(locationstate ? locationstate.orangetitle :"");
  const [note, setnote] = useState(locationstate ? locationstate.note :"");
  const [buttonone, setbuttonone] = useState( locationstate ? locationstate.buttonone :"");
  const [buttononelink, setbuttononelink] = useState( locationstate?.buttononelink ? locationstate.buttononelink :"");
  const [buttontwo, setbuttontwo] = useState( locationstate ? locationstate.buttontwo :"");
  const [buttontwolink, setbuttontwolink] = useState( locationstate?.buttontwolink ? locationstate.buttontwolink :"");
  const [categories, setcategories] = useState([]);
  const [imageUrl,setImageUrl] = useState("")


  const toast = useToast();

  const navigate = useNavigate()

  const update = () => {
    if (
      !gamename ||
    //   !topyellowtitle ||
      !imagealttag 
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

    const form = new FormData();
    form.append("gamename", gamename);
    form.append("imagealttag",imagealttag)
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
    form.append("buttontwo", buttontwo);
    form.append("buttononelink", buttononelink);
    form.append("buttontwolink", buttontwolink);

    editgame(form, setloading, toast,locationstate?._id,navigate);
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
            <Heading fontSize={"4xl"}>Update game</Heading>
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
                <FormLabel>Image alt Tag</FormLabel>
                <Input
                  type="text"
                  value={imagealttag}
                  onChange={(e) => setimagealttag(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Game Category</FormLabel>
                <Select defaultValue={gamecategoryid} placeholder="Select category" onChange={(e) => setgamecategoryid(e.target.value)}>
                  {categories.map((cat) => {
                    return (
                      <option selected={cat?._id == gamecategoryid} value={cat?._id}>{cat?.gamecategoryname}</option>
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
