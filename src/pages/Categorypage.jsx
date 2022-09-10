import { Grid } from "../components/Grid";
import { getAllcategories, getAllgames, getarticle, getarticles, getcategorygames, getcolumn, getslidertext } from "../api";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import classes from "../App.module.css";
import { useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser'
import { Loader } from "../components/loader";

export const Categorypage = () => {
  const toast = useToast();

  const {id,category} = useParams()

  const [games, setgames] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadingtwo, setloadingtwo] = useState(true);
  const [loadingthree, setloadingthree] = useState(true);
   const [articles,setarticles] = useState([])
     const [loadingfour,setloadingfour] = useState(true);
  const [columns, setcolumns] = useState([])
  const [mainloading,setmainloading] = useState(true)
  const [loadingfive,setloadingfive] = useState(true);
  const [slidertext,setslidertext] = useState([])



//   useEffect(() => {
//     getcategorygames(setloadingtwo, toast, setgames,id);
//   }, [id]);

  const [gamecategories, setgamecategories] = useState([]);

//   useEffect(() => {
//     getAllcategories(setloading, toast, setgamecategories);
//   }, []);

  const navigate = useNavigate();

//     useEffect(() => {
//         getarticles(setloadingthree,toast,setarticles)
//   },[])

//   useEffect(() => {
//        getcolumn(setloadingfour,toast,setcolumns)
//     },[])

    const [classname,setclassname] = useState('openIt')
  const [classnametwo,setclassnametwo] = useState('closeIt')

        useEffect(() => {
        const asyncfunc = async () => {
           setmainloading(true)
            try{
const all = await Promise.all([getcategorygames(setloadingtwo, toast, setgames,id),getAllcategories(setloading, toast, setgamecategories),getarticles(setloadingthree, toast, setarticles),getcolumn(setloadingfour,toast,setcolumns),getslidertext(setloadingfive,toast,setslidertext)])

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
    },[id])


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
                <a target="_blank" href={columns && columns[0]?.columnthreebuttononelink}>
                  {columns && columns[0]?.columnthreebuttonone}
                </a>
              </td>
            </tr>

            <tr>
              <td>{columns && columns[0]?.columnonetexttwo}</td>
              <td>{columns && columns[0]?.columntwotexttwo}</td>
              <td>
                <a target="_blank" href={columns && columns[0]?.columnthreebuttontwolink}>
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
                    <img src={gamecategories[0]?.gamecategoryimage} />
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
                          <img src={gamec?.gamecategoryimage} />
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
          {category?.toUpperCase()}
        </p>

        {/* {loadingtwo && (
            <div style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
<div className="rays"></div>
            </div>
        )} */}

        {games.length > 0 && (
          <Grid
            data={games}
            provider={category}
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

         
        </footer>
      </div>
    )}
    


      
      </>
  );
};
