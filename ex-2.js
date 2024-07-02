//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

function displayResolved (data){
    console.log(data);
}

function displayRejected (error){
    console.log(error);
}

getJohnProfile().then(displayResolved).catch(displayRejected)
