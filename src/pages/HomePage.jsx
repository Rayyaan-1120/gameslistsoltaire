import { Grid } from "../components/Grid";
import {
  getAllcategories,
  getAllgames,
  getarticle,
  getarticles,
  getcategorygames,
  getcolumn,
  gethomepagearticle,
  gethomepagegames,
  getslidertext,
} from "../api";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import classes from "../App.module.css";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser'
import { Loader } from "../components/loader";

export const Homepage = () => {
  const toast = useToast();

  const [games, setgames] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtwo, setloadingtwo] = useState(true);
  const [loadingthree, setloadingthree] = useState(true);
  const [loadingfour,setloadingfour] = useState(true);
  const [loadingfive,setloadingfive] = useState(true);
  const [callfunction, setcallfunction] = useState(false);
  const [articles, setarticles] = useState([]);
  const [columns, setcolumns] = useState([])
  const [slidertext,setslidertext] = useState([])
  const [mainloading,setmainloading] = useState(true)

  const [gamecategories, setgamecategories] = useState([]);

  

  const navigate = useNavigate();

const [classname,setclassname] = useState('openIt')
  const [classnametwo,setclassnametwo] = useState('closeIt')

    useEffect(() => {
        const asyncfunc = async () => {

            try{
const all = await Promise.all([gethomepagegames(setloadingtwo, toast, setgames),getAllcategories(setloading, toast, setgamecategories),gethomepagearticle(setloadingthree, toast, setarticles),getcolumn(setloadingfour,toast,setcolumns),getslidertext(setloadingfive,toast,setslidertext)])

            if(all){
                setmainloading(false)
                 setclassname('closeIt')
                 setclassnametwo('openIt')
             }
            }catch{
                 setmainloading(false)
            }

            
        }
        asyncfunc()
    },[])

  
  return (
    <>

    {mainloading ? (
        <Loader className={classname}/>
    ) : (
<div className={`${classes.container} ${classnametwo}`}>
        <div className={classes.header}>
          <div>
           {slidertext[0]?.text}
          </div>
        </div>
 
     {loadingfour ? (
  <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="basic"></div>
            </div>
     ) : (
        <table>
          <thead>
            <tr>
              <th>{columns && columns[0]?.columnoneheading}</th>
              <th>{columns && columns[0]?.columntwoheading}</th>
              <th>{columns && columns[0]?.columnthreeheading}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{columns && columns[0]?.columnonetextone}</td>
              <td>{columns && columns[0]?.columntwotextone}</td>
              <td>
                <a target="_blank" 
                 href={
                    columns[0]?.columnthreebuttononelink.startsWith("http://") ||
                    columns[0]?.columnthreebuttononelink.startsWith("https://")
                      ? columns[0]?.columnthreebuttononelink
                      : `//${columns[0]?.columnthreebuttononelink}`
                  }
                >
                  {columns && columns[0]?.columnthreebuttonone}
                </a>
              </td>
            </tr>

            <tr>
              <td>{columns && columns[0]?.columnonetexttwo}</td>
              <td>{columns && columns[0]?.columntwotexttwo}</td>
              <td>
                <a target="_blank" 
                 href={
                    columns[0]?.columnthreebuttontwolink.startsWith("http://") ||
                    columns[0]?.columnthreebuttontwolink.startsWith("https://")
                      ? columns[0]?.columnthreebuttontwolink
                      : `//${columns[0]?.columnthreebuttontwolink}`
                  }
                >
                  {columns && columns[0]?.columnthreebuttontwo}
                </a>
              </td>
            </tr>
          </tbody>
        </table>

     ) }


        <section
          style={{ margin: "30px 0 10px 0" }}
          //   className={classes.sidebars}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="basic"></div>
            </div>
          ) : (
            <>
              <div className={classes.sidebarfull}>
                {gamecategories.length > 0 && (
                  <a
                    onClick={() =>
                      navigate(
                        `/${gamecategories[0]?.gamecategoryname}/${gamecategories[0]?._id}`
                      )
                    }
                  >
                    <img src={gamecategories[0]?.gamecategoryimage} alt={
                            gamecategories[0]?.imagealttag ? gamecategories[0].imagealttag : "No Image"
                          } />
                    <div></div>
                  </a>
                )}
              </div>
              <div className={classes.sidebarContainer}>
                {gamecategories.length > 0 &&
                  gamecategories?.map((gamec, ind) => {
                    if (ind == 0) return;

                    return (
                      <div className={classes.sidebar}>
                        <a
                          onClick={() =>
                            navigate(
                              `/${gamec?.gamecategoryname}/${gamec?._id}`
                            )
                          }
                        >
                          <img src={gamec?.gamecategoryimage} alt={
                            gamec?.imagealttag ? gamec.imagealttag : "No Image"
                          }/>
                          <div></div>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </section>

        <p className={classes.gridHeading}>
          {gamecategories[0]?.gamecategoryname?.toUpperCase()}
        </p>

        {/* {loadingtwo && (
            <div style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
<div className="rays"></div>
            </div>
        )} */}

        {games.length > 0 && (
          <Grid
            data={games}
            callfunction={callfunction}
            provider={gamecategories[0]?.gamecategoryname}
            loading={loadingtwo}
          />
        )}

        <footer>
          {articles &&
            articles.map((art) => {
              return (
                <>
                  <h1>
                    <strong>{art?.articleheading}</strong>
                  </h1>
                  {parse(art?.article)}
                </>
              );
            })}

            {articles.length == 0 && (
               <h1>No Article</h1>
            )}

         
        </footer>
      </div>
    )}
    


      
      </>
  );
};
