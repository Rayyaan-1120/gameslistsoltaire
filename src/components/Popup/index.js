import classes from "./style.module.css";
import Image from "../../images/ST7jTl.png";
import parse from "html-react-parser";

export const Popup = ({ close, value, provider }) => {
  console.log(value.rtp, "rtp");

  return (
    <div className={classes.popup}>
      <div className={classes.container}>
        {value?.rtp < 20 && (
          <div className={classes.otherContainer}>
            <img src={Image} />

            <p>
              Slot {provider?.toUpperCase()} <br />
              RTP Slot Ini Sedang Rendah, Silahkan Untuk Memilih Slot Dengan RTP
              Yang Tinggi.
            </p>

            <div className={classes.icon} onClick={close}>
              X
            </div>
          </div>
        )}

        {value?.rtp >= 20 && (
          <>
            {/* <header>{value?.topyellowtitle}</header> */}
            <header>Tips Bermain Slot PP</header>
            <div className={[classes.provider, classes.content].join(" ")}>
              <div>
                <p>Provider</p>
                {/* <p>{value?.provider}</p> */}
                <p>PP</p>
              </div>

              <div>
                <p>Stake Bet</p>
                {/* <p>{value?.stake}</p> */}
                <p>200 – 9.8K</p>
              </div>
            </div>
            {/* <div className={classes.subheading}>{value.paragraphtitle}</div> */}
            <div className={classes.subheading}>POLA KHUSUS DARI BT88 RTP</div>
            <div className={[classes.body, classes.content].join(" ")}>
              {/* {parse(value?.paragraph)} */}

              <p>{value.step1}X Spin normal (manual tanpa ceklis)</p>

              <p>Step 1: Panaskan Mesin Slot!</p>
              <p>{value.step2}X Spin normal (manual tanpa ceklis)</p>

              <p>Step 1: Panaskan Mesin Slot!</p>
              <p>{value.step3}X Spin normal (manual tanpa ceklis)</p>

              <p style={{ color: "red" }}>Langkah Terakhir</p>
              <p>{value.step4}X Spin turbo (manual)</p>
            </div>
            {/* <div className={classes.subHeader}>{value?.orangetitle}</div> */}
            <div className={classes.subHeader}>
              LAKUKAN TIPS DARI AWAL & ULANGI
            </div>
            <div
              className={[classes.body, classes.content].join(" ")}
              style={{ padding: "10px 24px" }}
            >
              <p style={{ marginTop: 0 }}>Note:</p>
              {/* <p> */}
              <p>
                {" "}
                JIKA TERSEDIA / INGIN MEMBELI FITUR SPIN LAKUKAN POLA DIATAS
                SEBANYAK 2X
              </p>
              {/* </p> */}
              {/* {parse(value?.note)} */}
            </div>
            <div className={classes.buttons}>
              <button>
                <a
                  target={"_blank"}
                  href={
                    value?.buttononelink.startsWith("http://") ||
                    value?.buttononelink.startsWith("https://")
                      ? value?.buttononelink
                      : `//${value?.buttononelink}`
                  }
                  // href={value?.buttononelink}
                >
                  {value?.buttonone}
                </a>
              </button>
              <button>
                <a
                  target={"_blank"}
                  href={
                    value?.buttontwolink.startsWith("http://") ||
                    value?.buttontwolink.startsWith("https://")
                      ? value?.buttontwolink
                      : `//${value?.buttontwolink}`
                  }
                >
                  {value?.buttonone}
                </a>
              </button>
            </div>
            {/* 
           
            
            
          */}{" "}
            <div className={classes.icon} onClick={close}>
              X
            </div>
          </>
        )}
      </div>
    </div>
  );
};
