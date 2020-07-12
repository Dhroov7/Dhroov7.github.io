let randomPageName = getRandomPageName(5);
TimeMe.initialize({
  currentPageName: randomPageName,
  idleTimeoutInSeconds: 5,
});
let urlParams = window.location.pathname;
setInterval(function () {
  if (urlParams !== window.location.pathname) {
    urlParams = window.location.pathname;
    TimeMe.resetRecordedPageTime(randomPageName);
  }
}, 5000);

setInterval(function () {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds().toFixed(2);
  let payload = getPayload(urlParams);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:9090", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(payload);

  function getPayload(urlParams) {
    let payload = [],
      timeStamp = getCurrentTimeStamp(),
      client_id = getClientId(),
      params = urlParams.split("/");

    // if (params.length === 2) {
    //   if (params[0] === "category") {
    //     payload.push("type=category");
    //     payload.push("category=" + params[1]);
    //   }
    // } else if (params.length > 2) {
    //   if (params[0] === "timeline") {
    //     payload.push("type=aricle");
    //     payload.push("category=" + params[1]);
    //     payload.push("title=" + params[params.length - 1]);
    //   }
    // }
    payload.push("timestamp=" + timeStamp);
    payload.push("client_id=" + client_id);
    payload.push("url=" + window.location.href);
    payload.push("time_spent=" + timeSpentOnPage);

    return payload.join("&");
  }

  function getCurrentTimeStamp() {
    let date = new Date(),
      year = date.getFullYear(),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
  }

  function getClientId() {
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");

      if (cookiePair[0].trim() === "_gid") {
        let gid = cookiePair[1].split(".").join("_");
        return gid;
      }
    }

    return null;
  }
}, 30000);

function getRandomPageName(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
