import classes from "./style.module.css";
import Image from "../../images/71.webp";
import { useState } from "react";
import { Popup } from "../Popup";

export const Grid = ({ data, callfunction, provider, loading }) => {
  const [open, setOpen] = useState(false);
  const [popupValue, setPopupValue] = useState(null);

  const close = () => setOpen(false);
  const openPopup = (item) => {
    console.log(item);
    setOpen(true);
    setPopupValue(item);
  };

  console.log(callfunction);

  const generaterandomrtp = () => {
    return Math.trunc(Math.random() * 100) + 1;
  };

  var lastTime = localStorage.getItem(provider + "_lastTime");
  var currentTime = new Date().getTime();

  var time_rand = [
    300000, 360000, 420000, 480000, 540000, 600000, 660000, 720000, 780000,
    840000, 900000,
  ];
  var random_time = Math.floor(Math.random() * time_rand.length - 1) + 1;

  var time_to_refresh =
    localStorage.getItem(provider + "_time_to_refresh") == null
      ? time_rand[random_time]
      : localStorage.getItem(provider + "_time_to_refresh");
  if (localStorage.getItem(provider + "_time_to_refresh") == null) {
    localStorage.setItem(provider + "_time_to_refresh", time_to_refresh);
  }

  return (
    <>
      <section className={classes.grid}>
        {loading ? (
          <div
            style={{
              width: "100%",
              height: "100",
              display: "grid",
              placeItems: "center",
              placeContent: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                margin: "auto",
              }}
            >
              <div className="basic"></div>
            </div>
          </div>
        ) : (
          <>
            {data.length > 0 &&
              data
                .map((item, i) => {
                  if (!lastTime || currentTime - lastTime >= time_to_refresh) {
                    localStorage.setItem(
                      provider + "_time_to_refresh",
                      time_rand[random_time]
                    );

                    var xx = Math.floor(Math.random() * 99) + 1;

                    localStorage.setItem(provider + "_lastTime", currentTime);
                    localStorage.setItem(provider + "_xx_" + i, xx);

                    var random_val_1 = [15, 25, 35, 45, 55];
                    var random_1 =
                      random_val_1[
                        Math.floor(Math.random() * random_val_1.length - 1) + 1
                      ];
                    localStorage.setItem(
                      "random_1_xx_" + provider + "_" + i,
                      random_1
                    );

                    var random_val_2 = [10, 20, 30, 40, 50];
                    var random_2 =
                      random_val_2[
                        Math.floor(Math.random() * random_val_2.length - 1) + 1
                      ];
                    localStorage.setItem(
                      "random_2_xx_" + provider + "_" + i,
                      random_2
                    );

                    var random_val_3 = [3, 5, 7, 9];
                    var random_3 =
                      random_val_3[
                        Math.floor(Math.random() * random_val_3.length - 1) + 1
                      ];
                    localStorage.setItem(
                      "random_3_xx_" + provider + "_" + i,
                      random_3
                    );

                    var random_val_4 = [20, 30, 40, 50, 60, 70];
                    var random_4 =
                      random_val_4[
                        Math.floor(Math.random() * random_val_4.length - 1) + 1
                      ];
                    localStorage.setItem(
                      "random_4_xx_" + provider + "_" + i,
                      random_4
                    );
                  } else {
                    var xx = localStorage.getItem(provider + "_xx_" + i);

                    var random_1 = localStorage.getItem(
                      "random_1_xx_" + provider + "_" + i
                    );
                    var random_2 = localStorage.getItem(
                      "random_2_xx_" + provider + "_" + i
                    );
                    var random_3 = localStorage.getItem(
                      "random_3_xx_" + provider + "_" + i
                    );
                    var random_4 = localStorage.getItem(
                      "random_4_xx_" + provider + "_" + i
                    );
                  }

                  item.rtp = xx;

                  return (
                    <div key={i} className={classes.gridItem}>
                      <div
                        className={classes.image}
                        onClick={openPopup.bind(this, item)}
                      >
                        <img
                          src={item.gameimage}
                          onClick={openPopup.bind(this, item)}
                        />

                        <div className={classes.overlay}>
                          <div onClick={openPopup.bind(this, item)}>
                            POLO MAIN
                          </div>
                        </div>
                      </div>

                      <div
                        className={classes.percent}
                        onClick={openPopup.bind(this, item)}
                      >
                        <div
                          className={classes.progress}
                          style={{
                            width: `${xx}%`,
                            backgroundColor: (() => {
                              if (xx < 30) return "#c73000";
                              if (xx > 70) return "#28a745";
                              return "#ffc107";
                            })(),
                          }}
                        ></div>
                        <p>RTP {xx}%</p>
                      </div>
                    </div>
                  );
                })
                .reverse()}
          </>
        )}
      </section>

      {open && <Popup close={close} value={popupValue} provider={provider} />}
    </>
  );
};
