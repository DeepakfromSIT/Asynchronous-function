function saveToDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

saveToDb(
  "apna college",
  () => {
    console.log("success: your data was saved");
    saveToDb(
      "hello world",
      () => {
        console.log("success2:data2 saved");
        saveToDb(
          "Deepak singh pargaien",
          () => {
            console.log("success3: data3 saved");
            saveToDb(
              "MVM",
              () => {
                console.log("success4: data4 saved");
              },
              () => {
                console.log("failure: weak connection");
              }
            );
          },
          () => {
            console.log("failure3: weak connection");
          }
        );
      },
      () => {
        console.log("failure2: weak connection");
      }
    );
  },
  () => {
    console.log("failure: weak connection, data not saved");
  }
);
