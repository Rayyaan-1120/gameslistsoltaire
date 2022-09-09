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
import { ChakraProvider } from "@chakra-ui/react";
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

const data = [
  {
    image: Image76,
    rtp: 51,
    step1: 15,
    step2: 50,
    step3: 7,
    step4: 30,
  },

  {
    image: Image74,
    rtp: 8,
    step1: 15,
    step2: 50,
    step3: 7,
    step4: 30,
  },

  {
    image: Image72,
    rtp: 68,
    step1: 45,
    step2: 30,
    step3: 3,
    step4: 70,
  },

  {
    image: Image73,
    rtp: 51,
    step1: 55,
    step2: 40,
    step3: 3,
    step4: 50,
  },

  {
    image: Image75,
    rtp: 36,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image71,
    rtp: 7,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image70,
    rtp: 3,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image69,
    rtp: 52,
    step1: 45,
    step2: 30,
    step3: 5,
    step4: 50,
  },

  {
    image: ImageSGDQ6J,
    rtp: 16,
    step1: 45,
    step2: 30,
    step3: 5,
    step4: 50,
  },

  {
    image: ImageSGDLGa,
    rtp: 99,
    step1: 45,
    step2: 40,
    step3: 7,
    step4: 50,
  },

  {
    image: Image76,
    rtp: 51,
    step1: 15,
    step2: 50,
    step3: 7,
    step4: 30,
  },

  {
    image: Image74,
    rtp: 8,
    step1: 15,
    step2: 50,
    step3: 7,
    step4: 30,
  },

  {
    image: Image72,
    rtp: 68,
    step1: 45,
    step2: 30,
    step3: 3,
    step4: 70,
  },

  {
    image: Image73,
    rtp: 51,
    step1: 55,
    step2: 40,
    step3: 3,
    step4: 50,
  },

  {
    image: Image75,
    rtp: 36,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image71,
    rtp: 7,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image70,
    rtp: 3,
    step1: 55,
    step2: 30,
    step3: 7,
    step4: 30,
  },

  {
    image: Image69,
    rtp: 52,
    step1: 45,
    step2: 30,
    step3: 5,
    step4: 50,
  },

  {
    image: ImageSGDQ6J,
    rtp: 16,
    step1: 45,
    step2: 30,
    step3: 5,
    step4: 50,
  },

  {
    image: ImageSGDLGa,
    rtp: 99,
    step1: 45,
    step2: 40,
    step3: 7,
    step4: 50,
  },
];

// const Homepage = () => {
//   return (
//     <div className={classes.uppercontainer}>
//       <div className={classes.container}>
//         <div className={classes.header}>
//           <div>
//             ** RTP SLOT LIVE HARI INI ** LIVE RTP SLOT HARI INI ** INFO RTP SLOT
//             TERGACOR** BT88RTP **
//           </div>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>NAMA SITUS</th>
//               <th>MINIMAL DEPOSIT</th>
//               <th>DAFTAR & LOGIN</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>BINTANG TOGEL88</td>
//               <td>RP 10.000</td>
//               <td>
//                 <a target="_blank" href="https://rebrand.ly/duabt-rtp">
//                   DAFTAR
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>BNB303</td>
//               <td>RP 10.000</td>
//               <td>
//                 <a target="_blank" href="https://rebrand.ly/daftar-bnb303-1">
//                   DAFTAR
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         <section
//           style={{ margin: "30px 0 10px 0" }}
//           className={classes.sidebars}
//         >
//           <div className={classes.sidebar}>
//             <a href="https://bt88rtp.info/pragmaticplay.html">
//               <img src={Programatic} />
//               <div></div>
//             </a>
//           </div>

//           <div className={classes.sidebarContainer}>
//             <div className={classes.sidebar}>
//               <a href="https://bt88rtp.info/pg.html">
//                 <img src={Soft} />
//                 <div></div>
//               </a>
//             </div>

//             <div className={classes.sidebar}>
//               <a href="https://bt88rtp.info/habanero.html">
//                 <img src={Banero} />
//                 <div></div>
//               </a>
//             </div>
//           </div>

//           <div className={classes.sidebarContainer}>
//             <div className={classes.sidebar}>
//               <a href="https://bt88rtp.info/idnslot.html">
//                 <img src={Slot} />
//                 <div></div>
//               </a>
//             </div>

//             <div className={classes.sidebar}>
//               <a href="https://bt88rtp.info/microgaming.html">
//                 <img src={Gaming} />
//                 <div></div>
//               </a>
//             </div>
//           </div>
//         </section>

//         <p className={classes.gridHeading}>IDN SLOT</p>

//         <Grid data={data} />

//         <footer>
//           <h1>
//             <strong>Info RTP Slot Gacor IDN Play Hari Ini</strong>
//           </h1>
//           <p>
//             Info RTP Slot Gacor IDN Play Hari Ini - Para pemain game online judi
//             slot, pasti heran dan banyak belum mengetahui rtp slot pada jenis
//             permainan IDN Play. Tepat Anda tidak perlu khawatir, kali ini kami
//             akan membagikan kepada Anda list atau bocoran rtp slot pada game IDN
//             Play yang bisa Anda simak di bawah ini.
//           </p>
//           <h2>Daftar RTP Slot Gacor IDN Play Di Hari Ini</h2>
//           <p>
//             Sebagai salah satu Admin judi slot terpercaya, kami akan bagikan RTP
//             gacor hari ini, yang mungkin Anda ingin mainkan pada jenis permainan
//             favorit di IDN Play. Agar dapat memenangkan setiap permainan yang
//             kalian pertaruhkan pada judi online slot.
//           </p>
//           <h3>RTP Slot Gacor Ulta Poker IDN Play</h3>
//           <p>
//             Game yang satu ini sangat menarik, dan jangan sampai Anda lewatkan
//             dalam permainan slot judi online. Ultra poker memiliki RTP hingga
//             90% pada hari ini. Tentu nilai tersebut cukup tinggi, dan kalia bisa
//             memenangkan jenis permainan ini pada pertaruhan slot online pada idn
//             play.
//           </p>
//           <h3>RTP Slot Gacor Power Of Odin</h3>
//           <p>
//             Yang kedua ialah slot IDN Play dengan permainan power of odin. Game
//             slot yang satu ini memiliki RTP 92%, dan berada lebih tinggi
//             nilainya dibandingkan dengan ultra poker.
//           </p>
//           <h3>RTP Slot Kutukan Piramida</h3>
//           <p>
//             Game slot kutukan piramida mempunyai rtp hingga 90%. Setiap waktu
//             mesin game slot ini akan melakukan update pada rtpnya di dalam
//             permainan idn play.
//           </p>
//           <h3>RTP Slot Crypto Profits</h3>
//           <p>
//             Malam ini permainan slot gacor 2022 adalah crypto profits pada
//             permainan IDN play. Dan gara-gara terlalu gacor nya banyak content
//             creator Indonesia yang menjadikan sebagai referensi bermain Situs
//             Judi Slot Online dengan nilai RTP nya yang cukup terbilang tinggi
//             sekitaran 92%.
//           </p>
//           <h3>RTP Slot Gacor Macan Hoki Idnplay</h3>
//           <p>
//             Slot online gacor yang lainnya dengan deposit pulsa tanpa potongan
//             adalah Permainan Situs Judi Slot Macan Hoki, yang dihasilkan oleh
//             provider IDN Play. Permainan Slot ini menjadi pilihan yang paling
//             terbaik, para pemain akan meraih nilai RTP tinggi yakni 90.10%.
//           </p>
//           <h3>RTP Slot Gacor Golden Wild Idn Play</h3>
//           <p>
//             Jenis permainan Slot Paling Gacor dengan target Maxwin jackpot
//             paling besar dari idn Play adalah golden wild. Slot Online yang satu
//             ini memiliki nilai RTP sekitar 89,90%.
//           </p>
//           <h3>RTP Slot Gacor Domino QQ</h3>
//           <p>
//             Domino QQ jenis permainan slot dengan topik domino, RTP Link Slot
//             Winrate Paling tinggi sekitar 87,58%. Domino QQ merupakan jenis slot
//             gacor yang biasa Anda mainkan di hari ini dengan tingkat
//             keberuntungan yang sangat baik.
//           </p>
//           <h3>RTP Slot Good Of Wealth</h3>
//           <p>
//             Game yang satu ini menjadi terfavorit oleh para pemain slot online
//             Idn play. Bukan hanya dapat meraih kemenangan besar, namun rtp slot
//             Good Of Wealth memiliki 89% nilainya sangat besar tentu keuntungan
//             untuk para slotters mania.
//           </p>
//           <h3>RTP Slot Kutukan Medusa</h3>
//           <p>
//             Sama seperti game slot pada umumnya, di idn play dalam permainan
//             kutukan medusa mempunyai nilai rtp tinggi yaitu 90.06%. Game yang
//             satu ini sangat banyak di mainkan oleh para pecinta slot judi
//             online.
//           </p>
//           <h3>RTP Slot Naga Emas IDN Play</h3>
//           <p>
//             Naga Emas mempunyai nilai Rtp tinggi, game ini dapat dimainkan oleh
//             siapapun, dengan nilai RTP 80.90%, cukup besar bukan keuntungan yang
//             akan di dapatkan oleh para pecinta slot mania pada idn play.
//           </p>
//           <h3>RTP Slot Gacor Cash Spin</h3>
//           <p>
//             Cash spin merupakan game yang tengah populer di provider Idn Play.
//             Selain memiliki Rtp slot tinggi, tentu tingkat kemenanangan sangat
//             baik. Nilai rtp Cash Spin ialah 89.09% yang akan di dapat pada saat
//             memainkan game ini.
//           </p>
//           <h3>RTP Slot Pirate Teasure Di IDN Play</h3>
//           <p>
//             Game yang satu ini sangat diminati oleh slot mania, karena Pirate
//             Teasure cukup mudah dimainkan. Tentu hal ini juga tergantung pada
//             keberuntungan Anda di hari ini. Rtp yang akan di raih oleh setiap
//             pemain ialah 87.38% dan setiap saat pasti akan di update.
//           </p>
//           <h3>RTP Slot Glory Of Rome IDN Play</h3>
//           <p>
//             Glory Of Rome mempunyai nilai rtp cukup baik yaitu 88.09% di
//             permainan slot Idn Play. Permainan ini cukup menyenangkan, dan para
//             slot mania bisa dengan mudah memenangkan pertaruhan di slot IDN
//             play.
//           </p>
//           <h3>RTP Slot Gacor Ultra Gatot Kaca</h3>
//           <p>
//             Ultra Gatot Kaca merupakan game slot dengan jumlah keberuntungan
//             yang sangat tinggi. Game ini disajikan oleh idn Play, dan memiliki
//             nilai Rtp 90% cukup tingi sekali bagi permainan slot online.
//           </p>
//           <h3>Rtp Slot IDN Play Golden Wisnu</h3>
//           <p>
//             Permainan slot memang sangat menyenangkan, terlebih lagi jenis game
//             IDN Play dengan rtp yang cukup tinggi. Nah disini ada Golden Wisnu,
//             dengan Rtp mencapai 92%. Menjadi pilihan untuk Anda yang sedang
//             bermain slot di IDN Play.
//           </p>
//           <p>
//             IDN Play salah satu permainan judi slot online yang menjanjikan
//             kemenangan dan keberuntungan kepada setiap pemain. Bukan hanya itu
//             banyak bonus yang akan di raih dan menjadi aturan tersendiri dari
//             setiap layanan provider IDN Play. Jadi jangan sampai melewatkan
//             permainan ini.
//           </p>
//           <p>
//             Silahkan bermain di situs judi online slot gacor disini, dan raihlah
//             kesempatan menjadi seorang jutawan, daftarkan diri Anda sekarang
//             juga. Karena IDN Play menjadi pilihan tepat bagi para slot mania.
//           </p>
//           <h4>Penutup Info RTP Slot Gacor Hari ini</h4>
//           <p>
//             Demikian yang dapat kami sampaikan, tentang Info RTP Slot Gacor Idn
//             Play Hari Ini. Selamat bermain dan jangan lupa chatt kepada kami
//             apabila mempunyai pertanyaan tentang slot judi online khususnya pada
//             permainan IDN Play.
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

export const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:category/:id" element={<Categorypage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="games" element={<Allgames />} />
          <Route path="categories" element={<Allcategories />} />
          <Route path="articles" element={<Allarticles />} />
          <Route path="creategame" element={<Creategame />} />
          <Route path="editgame" element={<EditGame />} />
          <Route path="createcategory" element={<Creategamecategory />} />
          <Route path="editgamecategory" element={<Editgamecategory />} />
          <Route path="createarticle" element={<Createarticle />} />
          <Route path="editarticle" element={<Editarticle />} />
        </Route>
        <Route
          path="/admin"
          index
          element={<Navigate to={"/admin/games"} replace />}
        />
      </Routes>
    </ChakraProvider>
  );
};
