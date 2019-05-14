let wordList = [];

// add function
function addWord(){
  // create input variables
  let word = document.getElementById('word').value;
  let definition = document.getElementById('definition').value;
  let example = document.getElementById('example').value;
  word = word.toLowerCase()
  // double words controll
  for (j = 0; j < wordList.length ; j ++){
  if(word === wordList[j][0]){
    document.getElementById('word').value = "";
    document.getElementById('definition').value = "";
    document.getElementById('example').value = "";
    return alert (word + " is already in the list.");
    }
  }
  // add values to array
  wordList.push([word, definition, example]);
  document.getElementById('word').value = "";
  document.getElementById('definition').value = "";
  document.getElementById('example').value = "";
  // structure to show values
  let text;
  for (i = 0 ; i < wordList.length ; i ++){
    text = wordList[i].join("\xa0\xa0|\xa0\xa0");
  }

  let li = document.createElement("p");
  let liText = document.createTextNode(text);
  li.appendChild(liText);
  document.getElementById('wordli').appendChild(li);
  // create x mark
  let close = document.createElement("span");
  let closeText = document.createTextNode("\u00D7");
  close.className = "close";
  close.appendChild(closeText);
  li.appendChild(close);
  // remove words from list and array
  let remove = document.getElementsByClassName('close');
  for (n = 0; n < remove.length; n++){
      remove[n].onclick = function(){
      this.parentElement.remove(this.parentElement);

      for (l = 0; l < wordList.length; l++){
      let str = this.parentElement.innerText;
      if(str.includes(wordList[l][0]) === true){
        return wordList.splice(wordList[l], 1);
      }
      }
}
}
}

function searchWrap(){
  document.getElementById('box1').style.display = "none";
  document.getElementById('box2').style.display = "block";
}

function addWrap(){
  document.getElementById('box1').style.display = "block";
  document.getElementById('box2').style.display = "none";
}

// search function
function searchWord(){
let search = document.getElementById("search").value;

for (m = 0; m < wordList.length; m++){
  if (search === wordList[m][0]){
    document.getElementById("searchli").innerHTML = wordList[m].join("\xa0\xa0|\xa0\xa0");
    document.getElementById("search").value = "";
    return;
}
}

for (m = 0; m < wordList.length; m++){
  if (search !== wordList[m][0]){
    alert (search + " is no in the list");
    document.getElementById("search").value = "";
    return;
}
}
}
