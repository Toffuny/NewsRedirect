//kohl
var pattern=/the atlantic/;
var viewtext_base_url = "https://www.economist.com/";
var newurl;
if (pattern.test(window.document.title)) // if it matches pattern defined above
{
  newurl = viewtext_base_url;
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect

}

var patterna=/theatlantic/;
var viewtext_base_urla = "https://www.economist.com/";
var newurla;
if (patterna.test(window.document.title)) // if it matches pattern defined above
{
  newurla = viewtext_base_urla;
  chrome.extension.sendRequest({redirect: newurla}); // send message to redirect

}

var pattern2=/the fiscal times/;
var viewtext_base_url2 = "https://slate.com/";
var newurl2;
if (pattern2.test(window.document.title)) // if it matches pattern defined above
{
  newurl2 = viewtext_base_url2;
  chrome.extension.sendRequest({redirect: newurl2}); // send message to redirect

}

var pattern2a=/fiscaltimes/;
var viewtext_base_url2a = "https://slate.com/";
var newurl2a;
if (pattern2a.test(window.document.title)) // if it matches pattern defined above
{
  newurl2a = viewtext_base_url2a;
  chrome.extension.sendRequest({redirect: newurl2a}); // send message to redirect

}

var pattern3=/news, sport and opinion from the guardian's us edition/;
var viewtext_base_url3 = "https://www.forbes.com/";
var newurl3;
if (pattern3.test(window.document.title)) // if it matches pattern defined above
{
  newurl3 = viewtext_base_url3;
  chrome.extension.sendRequest({redirect: newurl3}); // send message to redirect

}

var pattern4=/national review/;
var viewtext_base_url4 = "https://www.nation.co.ke/";
var newurl4;
if (pattern4.test(window.document.title)) // if it matches pattern defined above
{
  newurl4 = viewtext_base_url4;
  chrome.extension.sendRequest({redirect: newurl4}); // send message to redirect

}

var pattern4a=/nationalreview/;
var viewtext_base_url4a = "https://www.nation.co.ke/";
var newurl4a;
if (pattern4.test(window.document.title)) // if it matches pattern defined above
{
  newurl4a = viewtext_base_url4a;
  chrome.extension.sendRequest({redirect: newurl4a}); // send message to redirect

}

var pattern5=/washington post/;
var viewtext_base_url5 = "https://www.sandiegouniontribune.com/";
var newurl5;
if (pattern5.test(window.document.title)) // if it matches pattern defined above
{
  newurl5 = viewtext_base_url5;
  chrome.extension.sendRequest({redirect: newurl5}); // send message to redirect

}

var pattern5a=/washingtonpost/;
var viewtext_base_url5a = "https://www.sandiegouniontribune.com/";
var newurl5a;
if (pattern5a.test(window.document.title)) // if it matches pattern defined above
{
  newurl5a = viewtext_base_url5a;
  chrome.extension.sendRequest({redirect: newurl5a}); // send message to redirect

}

// var pattern6=/fox news/;
// var viewtext_base_url6 = "https://www.huffingtonpost.com/";
// var newurl6;
// if (pattern6.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl6 = viewtext_base_url6;
//   chrome.extension.sendRequest({redirect: newurl6}); // send message to redirect

// }

// var pattern6a=/foxnews/;
// var viewtext_base_url6a = "https://www.huffingtonpost.com/";
// var newurl6a;
// if (pattern6.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl6a = viewtext_base_url6a;
//   chrome.extension.sendRequest({redirect: newurl6a}); // send message to redirect

// }

// var pattern7=/cbs news/;
// var viewtext_base_url7 = "https://www.apnews.com/";
// var newurl7;
// if (pattern7.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl7 = viewtext_base_url7;
//   chrome.extension.sendRequest({redirect: newurl7}); // send message to redirect

// }

// var pattern7a=/cbs/;
// var viewtext_base_url7a = "https://www.apnews.com/";
// var newurl7a;
// if (pattern7a.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl7a = viewtext_base_url7a;
//   chrome.extension.sendRequest({redirect: newurl7a}); // send message to redirect

// }
// var pattern8=/cnn/;
// var viewtext_base_url8 = "https://www.reuters.com/";
// var newurl8;
// if (pattern8.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl8 = viewtext_base_url8;
//   chrome.extension.sendRequest({redirect: newurl8}); // send message to redirect

// }

// var pattern9=/usa today/;
// var viewtext_base_url9 = "https://abcnews.go.com/";
// var newurl9;
// if (pattern9.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl9 = viewtext_base_url9;
//   chrome.extension.sendRequest({redirect: newurl9}); // send message to redirect

// }


// var pattern9a=/usatoday/;
// var viewtext_base_url9a = "https://abcnews.go.com/";
// var newurl9a;
// if (pattern9a.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl9a = viewtext_base_url9a;
//   chrome.extension.sendRequest({redirect: newurl9a}); // send message to redirect

// }

var pattern10=/conservative blog/;
var viewtext_base_url10 = "http://occupydemocrats.com/";
var newurl10;
if (pattern10.test(window.document.title)) // if it matches pattern defined above
{
  newurl10 = viewtext_base_url10;
  chrome.extension.sendRequest({redirect: newurl10}); // send message to redirect

}

var pattern11=/us uncut/;
var viewtext_base_url11 = "https://www.theblaze.com/";
var newurl11;
if (pattern11.test(window.document.title)) // if it matches pattern defined above
{
  newurl11 = viewtext_base_url11;
  chrome.extension.sendRequest({redirect: newurl11}); // send message to redirect

}

var pattern11a=/usuncut/;
var viewtext_base_url11a = "https://www.theblaze.com/";
var newurl11a;
if (pattern11a.test(window.document.title)) // if it matches pattern defined above
{
  newurl11a = viewtext_base_url11a;
  chrome.extension.sendRequest({redirect: newurl11a}); // send message to redirect

}

// var pattern12=/breitbart news network/;
// var viewtext_base_url12 = "http://www.naturalnewsradio.com/";
// var newurl12;
// if (pattern12.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl12 = viewtext_base_url12;
//   chrome.extension.sendRequest({redirect: newurl12}); // send message to redirect

// }


// var pattern12a=/breitbart/;
// var viewtext_base_url12a = "http://www.naturalnewsradio.com/";
// var newurl12a;
// if (pattern12.test(window.document.title)) // if it matches pattern defined above
// {
//   newurl12a = viewtext_base_url12a;
//   chrome.extension.sendRequest({redirect: newurl12a}); // send message to redirect

// }






// /



//STEPHANIE

var pattern13=/national review/;
var viewtext_base_url13 = "https://www.vanityfair.com/";
var newurl13;
if (pattern13.test(window.document.title)) // if it matches pattern defined above
{
  newurl13 = viewtext_base_url13;
  chrome.extension.sendRequest({redirect: newurl13}); // send message to redirect

}

var pattern13a=/nationalreview/;
var viewtext_base_url13a = "https://www.vanityfair.com/";
var newurl13a;
if (pattern13a.test(window.document.title)) // if it matches pattern defined above
{
  newurl13a = viewtext_base_url13a;
  chrome.extension.sendRequest({redirect: newurl13a}); // send message to redirect

}

var pattern13b=/vanityfair/;
var viewtext_base_url13b = "https://www.nationalreview.com/";
var newurl13b;
if (pattern13b.test(window.document.title)) // if it matches pattern defined above
{
  newurl13b = viewtext_base_url13b;
  chrome.extension.sendRequest({redirect: newurl13b}); // send message to redirect

}

var pattern13b=/vanity fair/;
var viewtext_base_url13b = "https://www.nationalreview.com/";
var newurl13b;
if (pattern13b.test(window.document.title)) // if it matches pattern defined above
{
  newurl13b = viewtext_base_url13b;
  chrome.extension.sendRequest({redirect: newurl13b}); // send message to redirect

}



//

var pattern14=/slate/;
var viewtext_base_url14 = "https://www.weeklystandard.com/";
var newurl14;
if (pattern14.test(window.document.title)) // if it matches pattern defined above
{
  newurl14 = viewtext_base_url14;
  chrome.extension.sendRequest({redirect: newurl14}); // send message to redirect

}

var pattern14a=/weeklystandard/;
var viewtext_base_url14a = "https://slate.com/";
var newurl14a;
if (pattern14a.test(window.document.title)) // if it matches pattern defined above
{
  newurl14a = viewtext_base_url14a;
  chrome.extension.sendRequest({redirect: newurl14a}); // send message to redirect

}

var pattern14b=/weekly standard/;
var viewtext_base_url14b = "https://slate.com/";
var newurl14b;
if (pattern14b.test(window.document.title)) // if it matches pattern defined above
{
  newurl14b = viewtext_base_url14b;
  chrome.extension.sendRequest({redirect: newurl14b}); // send message to redirect

}

//

var pattern15=/infowars/;
var viewtext_base_url15 = "https://twitter.com/patribotics";
var newurl15;
if (pattern15.test(window.document.title)) // if it matches pattern defined above
{
  newurl15 = viewtext_base_url15;
  chrome.extension.sendRequest({redirect: newurl15}); // send message to redirect

}

var pattern15a=/info wars/;
var viewtext_base_url15a = "https://twitter.com/patribotics";
var newurl15a;
if (pattern15a.test(window.document.title)) // if it matches pattern defined above
{
  newurl15a = viewtext_base_url15a;
  chrome.extension.sendRequest({redirect: newurl15a}); // send message to redirect

}


var pattern16=/patribotics/;
var viewtext_base_url16 = "https://infowars.com";
var newurl16;
if (pattern16.test(window.document.title)) // if it matches pattern defined above
{
  newurl16 = viewtext_base_url16;
  chrome.extension.sendRequest({redirect: newurl16}); // send message to redirect

}

//

var pattern17=/theblaze/;
var viewtext_base_url17 = "https://www.palmerreport.com";
var newurl17;
if (pattern17.test(window.document.title)) // if it matches pattern defined above
{
  newurl17 = viewtext_base_url17;
  chrome.extension.sendRequest({redirect: newurl17}); // send message to redirect

}

var pattern17a=/the blaze/;
var viewtext_base_url17a = "https://www.palmerreport.com";
var newurl17a;
if (pattern17a.test(window.document.title)) // if it matches pattern defined above
{
  newurl17a = viewtext_base_url17a;
  chrome.extension.sendRequest({redirect: newurl17a}); // send message to redirect

}


var pattern18=/palmerreport/;
var viewtext_base_url18 = "https://www.infowars.com";
var newurl18;
if (pattern18.test(window.document.title)) // if it matches pattern defined above
{
  newurl18 = viewtext_base_url18;
  chrome.extension.sendRequest({redirect: newurl18}); // send message to redirect

}

var pattern18a=/palmer report/;
var viewtext_base_url18a = "https://www.infowars.com";
var newurl18a;
if (pattern18a.test(window.document.title)) // if it matches pattern defined above
{
  newurl18a = viewtext_base_url18a;
  chrome.extension.sendRequest({redirect: newurl18a}); // send message to redirect

}


//

var pattern19=/redstate/;
var viewtext_base_url19 = "https://twitter.com/forwardprogs/";
var newurl19;
if (pattern19.test(window.document.title)) // if it matches pattern defined above
{
  newurl19 = viewtext_base_url19;
  chrome.extension.sendRequest({redirect: newurl19}); // send message to redirect

}


var pattern19a=/red state/;
var viewtext_base_url19a = "https://twitter.com/forwardprogs/";
var newurl19a;
if (pattern19a.test(window.document.title)) // if it matches pattern defined above
{
  newurl19a = viewtext_base_url19a;
  chrome.extension.sendRequest({redirect: newurl19a}); // send message to redirect

}


var pattern20=/forward progressives/;
var viewtext_base_url20 = "https://www.redstate.com";
var newurl20;
if (pattern20.test(window.document.title)) // if it matches pattern defined above
{
  newurl20 = viewtext_base_url20;
  chrome.extension.sendRequest({redirect: newurl20}); // send message to redirect

}


var pattern20a=/forwardprogressives/;
var viewtext_base_url20a = "https://www.redstate.com";
var newurl20a;
if (pattern20a.test(window.document.title)) // if it matches pattern defined above
{
  newurl20a = viewtext_base_url20a;
  chrome.extension.sendRequest({redirect: newurl20a}); // send message to redirect

}

//

var pattern21=/drudge report/;
var viewtext_base_url21 = "https://www.newrepublic.com";
var newurl21;
if (pattern21.test(window.document.title)) // if it matches pattern defined above
{
  newurl21 = viewtext_base_url21;
  chrome.extension.sendRequest({redirect: newurl21}); // send message to redirect

}


var pattern21a=/drudgereport/;
var viewtext_base_url21a = "https://www.newrepublic.com";
var newurl21a;
if (pattern21a.test(window.document.title)) // if it matches pattern defined above
{
  newurl21a = viewtext_base_url21a;
  chrome.extension.sendRequest({redirect: newurl21a}); // send message to redirect

}

var pattern21b=/new republic/;
var viewtext_base_url21b = "https://www.drudgereport.com";
var newurl21b;
if (pattern21b.test(window.document.title)) // if it matches pattern defined above
{
  newurl21b = viewtext_base_url21b;
  chrome.extension.sendRequest({redirect: newurl21b}); // send message to redirect

}


var pattern21c=/newrepublic/;
var viewtext_base_url21c = "https://www.drudgereport.com";
var newurl21c;
if (pattern21c.test(window.document.title)) // if it matches pattern defined above
{
  newurl21c = viewtext_base_url21c;
  chrome.extension.sendRequest({redirect: newurl21c}); // send message to redirect

}

//

var pattern22=/thefederalist/;
var viewtext_base_url22 = "https://www.huffingtonpost.com";
var newurl22;
if (pattern22.test(window.document.title)) // if it matches pattern defined above
{
  newurl22 = viewtext_base_url22;
  chrome.extension.sendRequest({redirect: newurl22}); // send message to redirect

}

var pattern22a=/the federalist/;
var viewtext_base_url22a = "https://www.huffingtonpost.com";
var newurl22a;
if (pattern22a.test(window.document.title)) // if it matches pattern defined above
{
  newurl22a = viewtext_base_url22a;
  chrome.extension.sendRequest({redirect: newurl22a}); // send message to redirect

}

//


var pattern23=/foxnews/;
var viewtext_base_url23 = "https://www.buzzfeednews.com";
var newurl23;
if (pattern23.test(window.document.title)) // if it matches pattern defined above
{
  newurl23 = viewtext_base_url23;
  chrome.extension.sendRequest({redirect: newurl23}); // send message to redirect

}

var pattern23a=/fox news/;
var viewtext_base_url23a = "https://www.buzzfeednews.com";
var newurl23a;
if (pattern23a.test(window.document.title)) // if it matches pattern defined above
{
  newurl23a = viewtext_base_url23a;
  chrome.extension.sendRequest({redirect: newurl23a}); // send message to redirect

}


var pattern23b=/buzzfeednews/;
var viewtext_base_url23b = "https://www.foxnews.com";
var newurl23b;
if (pattern23b.test(window.document.title)) // if it matches pattern defined above
{
  newurl23b = viewtext_base_url23b;
  chrome.extension.sendRequest({redirect: newurl23b}); // send message to redirect

}


var pattern23c=/buzzfeed news/;
var viewtext_base_url23c = "https://www.foxnews.com";
var newurl23c;
if (pattern23c.test(window.document.title)) // if it matches pattern defined above
{
  newurl23c = viewtext_base_url23c;
  chrome.extension.sendRequest({redirect: newurl23c}); // send message to redirect

}


//

var pattern24=/motherjones/;
var viewtext_base_url24 = "https://www.theamericanconservative.com/";
var newurl24;
if (pattern24.test(window.document.title)) // if it matches pattern defined above
{
  newurl24 = viewtext_base_url24;
  chrome.extension.sendRequest({redirect: newurl24}); // send message to redirect

}

var pattern24a=/mother jones/;
var viewtext_base_url24a = "https://www.theamericanconservative.com/";
var newurl24a;
if (pattern24a.test(window.document.title)) // if it matches pattern defined above
{
  newurl24a = viewtext_base_url24a;
  chrome.extension.sendRequest({redirect: newurl24a}); // send message to redirect

}

var pattern24b=/mother jones news/;
var viewtext_base_url24b = "https://www.theamericanconservative.com/";
var newurl24b;
if (pattern24b.test(window.document.title)) // if it matches pattern defined above
{
  newurl24b = viewtext_base_url24b;
  chrome.extension.sendRequest({redirect: newurl24b}); // send message to redirect

}

//

var pattern25=/msnbc/;
var viewtext_base_url25 = "https://www.washingtontimes.com/";
var newurl25;
if (pattern25.test(window.document.title)) // if it matches pattern defined above
{
  newurl25 = viewtext_base_url25;
  chrome.extension.sendRequest({redirect: newurl25}); // send message to redirect

}

var pattern25a=/msnbc news/;
var viewtext_base_url25a = "https://www.washingtontimes.com/";
var newurl25a;
if (pattern25a.test(window.document.title)) // if it matches pattern defined above
{
  newurl25a = viewtext_base_url25a;
  chrome.extension.sendRequest({redirect: newurl25a}); // send message to redirect

}

//


var pattern26=/dailykos/;
var viewtext_base_url26 = "https://www.dailywire.com/";
var newurl26;
if (pattern26.test(window.document.title)) // if it matches pattern defined above
{
  newurl26 = viewtext_base_url26;
  chrome.extension.sendRequest({redirect: newurl26}); // send message to redirect

}

var pattern26a=/daily kos/;
var viewtext_base_url26a = "https://www.dailywire.com/";
var newurl26a;
if (pattern26a.test(window.document.title)) // if it matches pattern defined above
{
  newurl26a = viewtext_base_url26a;
  chrome.extension.sendRequest({redirect: newurl26a}); // send message to redirect

}


//



var pattern27=/alternet/;
var viewtext_base_url27 = "https://www.newsmax.com/";
var newurl27;
if (pattern27.test(window.document.title)) // if it matches pattern defined above
{
  newurl27 = viewtext_base_url27;
  chrome.extension.sendRequest({redirect: newurl27}); // send message to redirect

}


//


var pattern28=/secondnexus/;
var viewtext_base_url28 = "https://www.oann.com/";
var newurl28;
if (pattern28.test(window.document.title)) // if it matches pattern defined above
{
  newurl28 = viewtext_base_url28;
  chrome.extension.sendRequest({redirect: newurl28}); // send message to redirect

}

var pattern28a=/second nexus/;
var viewtext_base_url28a = "https://www.oann.com/";
var newurl28a;
if (pattern28a.test(window.document.title)) // if it matches pattern defined above
{
  newurl28a = viewtext_base_url28a;
  chrome.extension.sendRequest({redirect: newurl28a}); // send message to redirect

}

//


var pattern29=/occupydemocrats/;
var viewtext_base_url29 = "https://www.breitbart.com/";
var newurl29;
if (pattern29.test(window.document.title)) // if it matches pattern defined above
{
  newurl29 = viewtext_base_url29;
  chrome.extension.sendRequest({redirect: newurl29}); // send message to redirect

}

var pattern30=/occupy democrats/;
var viewtext_base_url30 = "https://www.breitbart.com/";
var newurl30;
if (pattern30.test(window.document.title)) // if it matches pattern defined above
{
  newurl30 = viewtext_base_url30;
  chrome.extension.sendRequest({redirect: newurl30}); // send message to redirect

}





//TIFFANY

var pattern31=/huffington post/;
var viewtext_base_url31 = "https://www.thefederalist.com";
var newurl31;
if (pattern31.test(window.document.title)) // if it matches pattern defined above
{
  newurl31 = viewtext_base_url31;
  chrome.extension.sendRequest({redirect: newurl31}); // send message to redirect

}

var pattern32a=/huffingtonpost/;
var viewtext_base_url32a = "https://www.thefederalist.com";
var newurl32a;
if (pattern32a.test(window.document.title)) // if it matches pattern defined above
{
  newurl32a = viewtext_base_url32a;
  chrome.extension.sendRequest({redirect: newurl32a}); // send message to redirect

}

//

var pattern32=/CNN/;
var viewtext_base_url32 = "https://www.usatoday.com";
var newurl32;
if (pattern32.test(window.document.title)) // if it matches pattern defined above
{
  newurl32 = viewtext_base_url32;
  chrome.extension.sendRequest({redirect: newurl32}); // send message to redirect

}

//

var pattern32c=/cnn/;
var viewtext_base_url32c = "https://www.usatoday.com";
var newurl32c;
if (pattern32c.test(window.document.title)) // if it matches pattern defined above
{
  newurl32c = viewtext_base_url32c;
  chrome.extension.sendRequest({redirect: newurl32c}); // send message to redirect

}

var pattern32d=/cnn news/;
var viewtext_base_url32d = "https://www.usatoday.com";
var newurl32d;
if (pattern32d.test(window.document.title)) // if it matches pattern defined above
{
  newurl32d = viewtext_base_url32d;
  chrome.extension.sendRequest({redirect: newurl32d}); // send message to redirect

}


//

var pattern32b=/the american conservative/;
var viewtext_base_url32b = "https://www.motherjones.com";
var newurl32b;
if (pattern32b.test(window.document.title)) // if it matches pattern defined above
{
  newurl32b = viewtext_base_url32b;
  chrome.extension.sendRequest({redirect: newurl32b}); // send message to redirect

}

//

var pattern33=/theamericanconservative/;
var viewtext_base_url33 = "https://www.motherjones.com";
var newurl33;
if (pattern33.test(window.document.title)) // if it matches pattern defined above
{
  newurl33 = viewtext_base_url33;
  chrome.extension.sendRequest({redirect: newurl33}); // send message to redirect

}

//

var pattern33a=/american conservative/;
var viewtext_base_url33a = "https://motherjones.com";
var newurl33a;
if (pattern33a.test(window.document.title)) // if it matches pattern defined above
{
  newurl33a = viewtext_base_url33a;
  chrome.extension.sendRequest({redirect: newurl33a}); // send message to redirect

}

var pattern33c=/the american conservative/;
var viewtext_base_url33c = "https://motherjones.com";
var newurl33c;
if (pattern33c.test(window.document.title)) // if it matches pattern defined above
{
  newurl33c = viewtext_base_url33c;
  chrome.extension.sendRequest({redirect: newurl33c}); // send message to redirect

}

//

var pattern33b=/washington times/;
var viewtext_base_url33b = "https://www.msnbc.com";
var newurl33b;
if (pattern33b.test(window.document.title)) // if it matches pattern defined above
{
  newurl33b = viewtext_base_url33b;
  chrome.extension.sendRequest({redirect: newurl33b}); // send message to redirect

}

//

var pattern34=/washingtontimes/;
var viewtext_base_url34 = "https://www.msnbc.com";
var newurl34;
if (pattern34.test(window.document.title)) // if it matches pattern defined above
{
  newurl34 = viewtext_base_url34;
  chrome.extension.sendRequest({redirect: newurl34}); // send message to redirect

}

//

var pattern35=/daily wire/;
var viewtext_base_url35 = "https://www.dailykos.com";
var newurl35;
if (pattern35.test(window.document.title)) // if it matches pattern defined above
{
  newurl35 = viewtext_base_url35;
  chrome.extension.sendRequest({redirect: newurl35}); // send message to redirect

}

//

var pattern35a=/dailywire/;
var viewtext_base_url35a = "https://www.dailykos.com";
var newurl35a;
if (pattern35a.test(window.document.title)) // if it matches pattern defined above
{
  newurl35a = viewtext_base_url35a;
  chrome.extension.sendRequest({redirect: newurl35a}); // send message to redirect

}

//

var pattern35b=/newsmax/;
var viewtext_base_url35b = "https://www.alternet.org";
var newurl35b;
if (pattern35b.test(window.document.title)) // if it matches pattern defined above
{
  newurl35b = viewtext_base_url35b;
  chrome.extension.sendRequest({redirect: newurl35b}); // send message to redirect

}

//

var pattern36=/news max/;
var viewtext_base_url36 = "https://www.alternet.org";
var newurl36;
if (pattern36.test(window.document.title)) // if it matches pattern defined above
{
  newurl36 = viewtext_base_url36;
  chrome.extension.sendRequest({redirect: newurl36}); // send message to redirect

}

//

var pattern36a=/oann/;
var viewtext_base_url36a = "https://www.secondnexus.com";
var newurl36a;
if (pattern36a.test(window.document.title)) // if it matches pattern defined above
{
  newurl36a = viewtext_base_url36a;
  chrome.extension.sendRequest({redirect: newurl36a}); // send message to redirect

}

//

var pattern36b=/oneamericanewsnetwork/;
var viewtext_base_url36b = "https://www.secondnexus.com";
var newurl36b;
if (pattern36b.test(window.document.title)) // if it matches pattern defined above
{
  newurl36b = viewtext_base_url36b;
  chrome.extension.sendRequest({redirect: newurl36b}); // send message to redirect

}

//

var pattern37=/one america news network/;
var viewtext_base_url37 = "https://www.secondnexus.com";
var newurl37;
if (pattern37.test(window.document.title)) // if it matches pattern defined above
{
  newurl37 = viewtext_base_url37;
  chrome.extension.sendRequest({redirect: newurl37}); // send message to redirect

}

//

var pattern37a=/breitbart/;
var viewtext_base_url37a = "http://www.smirkingchimp.com/";
var newurl37a;
if (pattern37a.test(window.document.title)) // if it matches pattern defined above
{
  newurl37a = viewtext_base_url37a;
  chrome.extension.sendRequest({redirect: newurl37a}); // send message to redirect

}

//



var pattern38=/conservative tribune/;
var viewtext_base_url38 = "https://www.facebook.com/OccupyDemocrats/";
var newurl38;
if (pattern38.test(window.document.title)) // if it matches pattern defined above
{
  newurl38 = viewtext_base_url38;
  chrome.extension.sendRequest({redirect: newurl38}); // send message to redirect

}

var pattern39=/conservativetribune/;
var viewtext_base_url39 = "https://www.facebook.com/OccupyDemocrats/";
var newurl39;
if (pattern39.test(window.document.title)) // if it matches pattern defined above
{
  newurl39 = viewtext_base_url39;
  chrome.extension.sendRequest({redirect: newurl39}); // send message to redirect

}

//

var pattern39a=/americanconservative/;
var viewtext_base_url39a = "https://www.motherjones.com";
var newurl39a;
if (pattern39a.test(window.document.title)) // if it matches pattern defined above
{
  newurl39a = viewtext_base_url39a;
  chrome.extension.sendRequest({redirect: newurl39a}); // send message to redirect

}

//

var pattern39b=/vice/;
var viewtext_base_url39b = "https://news.sky.com/";
var newurl39b;
if (pattern39b.test(window.document.title)) // if it matches pattern defined above
{
  newurl39b = viewtext_base_url39b;
  chrome.extension.sendRequest({redirect: newurl39b}); // send message to redirect

}

//

var pattern40=/sky news/;
var viewtext_base_url40 = "https://www.vice.com/en_us";
var newurl40;
if (pattern40.test(window.document.title)) // if it matches pattern defined above
{
  newurl40 = viewtext_base_url40;
  chrome.extension.sendRequest({redirect: newurl40}); // send message to redirect

}

//

var pattern40a=/skynews/;
var viewtext_base_url40a = "https://www.vice.com/en_us";
var newurl40a;
if (pattern40a.test(window.document.title)) // if it matches pattern defined above
{
  newurl40a = viewtext_base_url40a;
  chrome.extension.sendRequest({redirect: newurl40a}); // send message to redirect

}

//

var pattern40b=/vox/;
var viewtext_base_url40b = "https://www.forbes.com/#ecf2f42254cc";
var newurl40b;
if (pattern40b.test(window.document.title)) // if it matches pattern defined above
{
  newurl40b = viewtext_base_url40b;
  chrome.extension.sendRequest({redirect: newurl40b}); // send message to redirect

}

//

var pattern41=/forbes/;
var viewtext_base_url41 = "https://www.vox.com/";
var newurl41;
if (pattern41.test(window.document.title)) // if it matches pattern defined above
{
  newurl41 = viewtext_base_url41;
  chrome.extension.sendRequest({redirect: newurl41}); // send message to redirect

}

//
