import { Grid } from "./components/Grid/";
import classes from "./App.module.css";
import Programatic from "./images/pragmatic.png";
import Soft from "./images/pgsoft.png";
import Banero from "./images/habanero.png";
import Slot from "./images/idnslot.png";
import Gaming from "./images/microgaming.png";
import Image76 from "./images/76.webp";
import Image74 from "./images/74.webp";
import Image72 from "./images/72.webp";
import Image73 from "./images/73.webp";
import Image75 from "./images/75.webp";
import Image71 from "./images/71.webp";
import Image70 from "./images/70.webp";
import Image69 from "./images/69.webp";
import ImageSGDQ6J from "./images/SGDQ6J.jpg";
import ImageSGDLGa from "./images/SGDLGa.jpg";
import { Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "./pages/admin";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import Creategame from "./pages/creategame";
import Creategamecategory from "./pages/createcategory";
import Allgames from "./pages/allgames";
import EditGame from "./pages/editgame";
import Allcategories from "./pages/allcategories";
import Editgamecategory from "./pages/editcategory";
import { Homepage } from "./pages/HomePage";
import { Categorypage } from "./pages/Categorypage";
import Createarticle from "./pages/createArticle";
import Editarticle from "./pages/editarticle";
import Allarticles from "./pages/allarticles";
import Createcolumn from "./pages/createcolumn";
import Allcolumn from "./pages/allcolumn";
import { AppContextProvider, useAppContext } from "./components/context";
import Adminlogin from "./pages/adminlogin";
import Editcolumn from "./pages/editcolumn";
import Createscript from "./pages/createscript";
import Allscripts from "./pages/allscripts";
import { getscripts } from "./api";
import { useEffect, useState } from "react";
import Editscript from "./pages/editscript";

export const App = () => {
  const { admin } = useAppContext();

  const [loading, setloading] = useState(false);
  const [scripts, setscripts] = useState([]);

  const toast = useToast();

  useEffect(() => {
    getscripts(setloading, toast, setscripts);
  }, []);

  useEffect(() => {
    if (scripts.length > 0) {
      scripts.map((scr, ind) => {
        const exisitingscript = document.getElementById(scr.id);
        if (!exisitingscript) {
          const script = document.createElement("script");
          script.src = scr.src;
          script.id = scr.id;
          script.defer = true;
          document.head.appendChild(script);
        }

        return;
      });
    }
  }, [scripts]);

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:category/:id" element={<Categorypage />} />
        <Route
          path="/admin"
          element={
            localStorage.getItem("admin") || admin ? (
              <Admin />
            ) : (
              <Navigate to={"/adminlogin"} />
            )
          }
        >
          <Route path="games" element={<Allgames />} />
          <Route path="categories" element={<Allcategories />} />
          <Route path="articles" element={<Allarticles />} />
          <Route path="column" element={<Allcolumn />} />
          <Route path="scripts" element={<Allscripts />} />
          <Route path="creategame" element={<Creategame />} />
          <Route path="editgame" element={<EditGame />} />
          <Route path="createcategory" element={<Creategamecategory />} />
          <Route path="editgamecategory" element={<Editgamecategory />} />
          <Route path="createarticle" element={<Createarticle />} />
          <Route path="editarticle" element={<Editarticle />} />
          <Route path="createcolumn" element={<Createcolumn />} />
          <Route path="editcolumn" element={<Editcolumn />} />
          <Route path="createscript" element={<Createscript />} />
          <Route path="editscript" element={<Editscript />} />
        </Route>
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route
          path="/admin"
          index
          element={<Navigate to={"/admin/games"} replace />}
        />
      </Routes>
    </ChakraProvider>
  );
};
