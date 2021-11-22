var Promise = require("promise");
console.log("Test \n");

const testAsync = (action, msg) => {
  return new Promise((resolve, reject) => {
    console.log(msg);

    if ("resolve" == action) {
      console.log("OK! - resolve");
      resolve("ok");
    }
    if ("reject" == action) {
      console.log("reject");
      reject("Error - reject");
    }
    if ("error" == action) {
      console.log("Error - throw");
      throw new Error("Error - throw");
    }
  });
};

const main = async (action) => {
  await testAsync(action, "run mongo save");

  console.log("kafka run after reject");
  return 200;
};

console.log("Success:");
main("resolve").then((status) => {
  console.log("Success END with: ", status);
  console.log("=============");
  console.log("UnSuccess:");
  main("reject").catch((error) => {
    console.log(error);
    console.log("=============");
    console.log("UnSuccess:");
    console.log(
      main("error").catch((error2) => {
        console.log(error2);
      })
    );
  });
});
