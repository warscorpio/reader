// function myFunction(){
  // let UserText = document.querySelector("div #text").value;
let userText = [
  ['私 ', '名詞', '普通名詞', '', '', 'わたし'],
['は ', '助詞', '副助詞', '', '', 'は'],
['家族', '名詞', '普通名詞', '', '', 'かぞく'],
['と', '助詞', '格助詞', '', '', 'と'],
['友達', '名詞', '普通名詞', '', '', 'ともだち'],
['を', '助詞', '格助詞', '', '', 'を'],
['寂し', '形容詞', '', 'イ形容詞イ段', '語幹', 'さびし'],
['が', '助詞', '格助詞', '', '', 'が'],
['あり', '動詞', '', '子音動詞ラ行', '基本連用形', 'あり'],
['ました', '接尾辞', '動詞性接尾辞', '動詞性接尾辞ます型', 'タ形', 'ました'],
['。', '特殊', '句点', '', '', '。']];
 for(n in userText){
   document.getElementById('answers').innerText += " " + userText[n][0];
}
//
// function hoverFunction(x){
//          x.style.fontSize = "20px";
//      }
// function normalFunction(x){
//      x.style.fontSize = "15px";
//    }
//    for(n in UserText){
//      if(UserText[n].includes("名詞", 0) && UserText[n].includes("わたし", 0)){
// document.getElementById('answers').style.color += "red";
//         console.log(UserText[n][0]);
//         // .style.color = "blue";
//       }
//     }
    function placetext(userText){
  for(key in userText){
    let place  = "[]"
    if (userText[key][1]=="副詞"){
      place = `<span onmouseover="" class="adverb w3-teal w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="助詞") {
      place = `<span onmouseover="" class="particle w3-blue-gray w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="動詞") {
      place = `<span onmouseover="" class="verb w3-blue w3-round">${userText[key][0]}</span>`
    } else if (userText[key][4]=="名" | userText[key][4]=="姓") {
      place = `<span onmouseover="" class="name w3-pink w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="名詞") {
      place = `<span onmouseover="" class="noun w3-pink w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="形容詞" | userText[key][1]=="形状詞") {
      place = `<span onmouseover="" class="adjective w3-purple w3-round">${userText[key][0]}</span>`
    } else if (userText[key][2]=="動詞的") {
      place = `<span onmouseover="" class="verbalsuffix w3-lime w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="感動詞") {
      place = `<span onmouseover="" class="Interjection w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="助動詞") {
      place = `<span onmouseover="" class="auxverb w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="接尾辞" & userText[key][3]=="サ変可能") {
      place = `<span onmouseover="" class="verbsuruduffix w3-lime w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="接尾辞") {
      place = `<span onmouseover="" class="suffix w3-lime w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="接続詞") {
      place = `<span onmouseover="" class="conjunction w3-orange w3-round">${userText[key][0]}</span>`
    } else if (userText[key][1]=="連体詞") {
      place = `<span onmouseover="" class="adjective w3-purple w3-round">${userText[key][0]}</span>`
    } else {
      place = `<span class="empty">${userText[key][0]} </span>`
    }

    document.getElementById("answerBox").innerHTML +=  place;
    document.getElementById("answerBox").innerHTML += "  "
  }
}
//
// for(n in UserText){
//   if(UserText[n].includes("名詞", 0) && UserText[n].includes("わたし", 0)){
//     // document.getElementById("answers").innerHTML += "<span style='color:red'>"'</span>';
//      console.log(UserText[n]);
//   //   // let c = UserText[n][0];
//   //   // c.style.color = "red";
// // console.log(UserText.indexOf(UserText.find(arr => arr.includes("わたし"))));
// // console.log(UserText.findIndex(arr => arr.includes("わたし")));
// }
// }
