// import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";

async function requestData(url, method, params = null, userToken = null) {
  let login_status = reactLocalStorage.getObject("loginToken");
  if (userToken !== null) {
    login_status = userToken;
  }
  // let bash_url = 'http://3.15.208.163:8888/api/v1/';
  let bash_url = "http://trutask.easytodb.com/api/v1/";
  // let bash_url = "http://13.233.157.149:3002/api/user/";
  let apiUrl = bash_url + url;
  console.log("Url " + method, apiUrl);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "http://trutask.easytodb.com");
  // myHeaders.append("Access-Control-Allow-Origin", "http://13.233.157.149:3002");
  const options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "User " + login_status,
    },
  };
  if (method === "DELETE") {
    // options['body'] = none;
  } else if (method !== "GET") {
    options["body"] = JSON.stringify(params);
  }

  // console.log("options", options);
  return await fetch(apiUrl, options)
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("result", result);
        if (result.status === false && result.loginStatus === false) {
          reactLocalStorage.clear();
          setTimeout(function () {
            window.location.reload();
          }, 200);
        }
        return result;
      },
      (error) => {
        //this.setState({ error });
      }
    );
}

async function Request(url, method, object_get = {}) {
  let bash_url = "http://trutask.easytodb.com/api/v1/";
  let apiUrl = bash_url + url;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(object_get);
  return await fetch(apiUrl, {
    method: "POST",
    headers: myHeaders,
    body: object_get,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

async function FromAdd(url, method, object_get = {}, tokenCustom = null) {
  let bash_url = "http://trutask.easytodb.com/api/v1/";
  let apiUrl = bash_url + url;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(object_get);
  console.log("raw", raw);
  return await fetch(apiUrl, {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

async function fileUplodeDynamic(
  url,
  method,
  file,
 // object_get = {},
  tokenCustom = null
) {
  let bash_url = "http://trutask.easytodb.com/api/v1/";
  let apiUrl = bash_url + url;
  // let data = new FormData();
  // data.append("image", file);
  // Object.keys(object_get).forEach(function (key) {
  //   let ddd = object_get[key];
  //   data.append(key, ddd);
  // });

  let headers = {
    // 'Accept': 'application/json',
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "http://trutask.easytodb.com",
    // 'Authorization': 'Bearer ' + login_status,
  };

  // Display the key/value pairs
  for (var pair of file.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
  }

  return await fetch(apiUrl, {
    method: "POST",
    body: file,
    redirect: "follow",
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

async function OrderCreate(url, method, object_get = {}, tokenCustom = null) {
  let bash_url = "http://api.vintagebazaar.in/api/user/";
  let apiUrl = bash_url + url;
  const data = new FormData();
  Object.keys(object_get).forEach(function (key) {
    let ddd = object_get[key];
    if (key == "product_data") {
      ddd = JSON.stringify(object_get[key]);
    }
    // console.log('key',ddd);
    data.append(key, ddd);
  });

  for (var pair of data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  console.log("data", data);
  let headers = {
    // 'Accept': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "http://api.vintagebazaar.in",
    // 'Authorization': 'Bearer ' + login_status,
  };

  return await fetch(apiUrl, {
    method: method,
    headers: headers,
    body: data,
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

async function fileUplode(
  url,
  method,
  file,
  option,
  object_get = {},
  tokenCustom = null
) {
  let bash_url = "http://api.vintagebazaar.in/api/user/";
  let apiUrl = bash_url + url;
  const data = new FormData();
  // data.append('image', file);
  if (option == "Single") {
    data.append("image", file);
  } else {
    let i = 0;
    Object.keys(file).forEach(function (key) {
      data.append("image", file[i]);
      i++;
    });
  }

  Object.keys(object_get).forEach(function (key) {
    data.append(key, object_get[key]);
  });

  for (var pair of data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  console.log("data", data);
  let headers = {
    // 'Accept': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "http://api.vintagebazaar.in",
    // 'Authorization': 'Bearer ' + login_status,
  };
  console.log("data", data);

  return await fetch(apiUrl, {
    method: method,
    headers: headers,
    body: data,
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log(result);
        return result;
      },
      (error) => {
        return error;
      }
    );
}

export default {
  requestData,
  fileUplode,
  fileUplodeDynamic,
  OrderCreate,
  FromAdd,
  Request,
  // post,
  // put,
  // // delete,
  // upload
};
