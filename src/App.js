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
import Allslidertexts from "./pages/allslidertext";
import Editslidertext from "./pages/editslidertext";
import Updateadmin from "./pages/updateadmin";
import GlobalButtonlinks from "./pages/Globalbuttonlink";

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
          <Route path="slidertexts" element={<Allslidertexts />} />
          <Route path="creategame" element={<Creategame />} />
          <Route path="editgame" element={<EditGame />} />
          <Route path="createcategory" element={<Creategamecategory />} />
          <Route path="editgamecategory" element={<Editgamecategory />} />
          <Route path="createarticle" element={<Createarticle />} />
          <Route path="editarticle" element={<Editarticle />} />
          {/* <Route path="createcolumn" element={<Createcolumn />} /> */}
          <Route path="editcolumn" element={<Editcolumn />} />
          <Route path="createscript" element={<Createscript />} />
          <Route path="editscript" element={<Editscript />} />
          <Route path="editslidertext" element={<Editslidertext />} />
          <Route path="updatepassword" element={<Updateadmin />} />
          <Route path="globalbuttonlinks" element={<GlobalButtonlinks />} />
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
