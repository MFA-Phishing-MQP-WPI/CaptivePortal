
var useros = detectOS(); 
console.log(useros); 

//Detect OS in order to send and download the correct certificate
function detectOS(){
  let userAgent = window.navigator.userAgent;
  let useros = "not too sure"


  // Detect Windows, MacOS, iOS, Android, other: Go to default 
  if (userAgent.indexOf("Win") != -1) {useros = "Windows"; } 
  else if (userAgent.indexOf("Mac") != -1) {useros = "MacOS"; }
  else if (userAgent.indexOf("Android") != -1) {useros = "Android"; }
  else if (userAgent.indexOf("iPhone") != -1) {useros = "iOS"; }
  else if (userAgent.indexOf("iPad") != -1) {useros = "iOS"; }
  return useros; 
}