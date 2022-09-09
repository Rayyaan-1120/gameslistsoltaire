import classes from "./style.module.css";
import Image from "../../images/ST7jTl.png";

export const Popup = ({ close, value, provider }) => {
  console.log(value.rtp, "rtp");

  let rtp = 60;

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
            <header>{value?.topyellowtitle}</header>
            <div className={[classes.provider, classes.content].join(" ")}>
              <div>
                <p>Provider</p>
                <p>{value?.provider}</p>
              </div>

              <div>
                <p>Stake Bet</p>
                <p>{value?.stake}</p>
              </div>
            </div>
            <div className={classes.subheading}>{value.paragraphtitle}</div>
            <div className={[classes.body, classes.content].join(" ")}>
              <p>{value?.paragraph}</p>
              {/* <p>{value.step1}X Spin normal (manual tanpa ceklis)</p>

              <p>Step 1: Panaskan Mesin Slot!</p>
              <p>{value.step2}X Spin normal (manual tanpa ceklis)</p>

              <p>Step 1: Panaskan Mesin Slot!</p>
              <p>{value.step3}X Spin normal (manual tanpa ceklis)</p>

              <p style={{ color: "red" }}>Langkah Terakhir</p>
              <p>{value.step4}X Spin turbo (manual)</p> */}
            </div>
            <div className={classes.subHeader}>{value?.orangetitle}</div>
            <div
              className={[classes.body, classes.content].join(" ")}
              style={{ padding: "10px 24px" }}
            >
              <p style={{ marginTop: 0 }}>Note:</p>
              <p>{value?.note}</p>
            </div>
            <div className={classes.buttons}>
              <button>{value?.buttonone}</button>
              <button>{value?.buttonone}</button>
            </div>
            <div className={classes.buttons}>
              <button>{value?.buttontwo}</button>
              <button>{value?.buttontwo}</button>
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
