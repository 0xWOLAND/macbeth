// --------------------------------------------------
// Variables
var greed = document.getElementById("greed");
var righteousness = document.getElementById("righteousness");
var ambition = document.getElementById("ambition");

var arr = [];
var main = document.getElementById("main");
// ------------------------------------------------------------
var macbeth = ["greed", "justice", "love"];
var lady_macbeth = ["greed", "psychological issues", "love"];
var banquo = ["righteousness", "psychological issues"];
var duncan = ["righteousness", "betrayal"];
var ambition_banquo = [
  "ambition",
  "virtuous",
  "psychological issues",
  "assassinated",
];
var macduff = ["ambition", "vengeful", "related to macduff"];

var descriptions = [
  lady_macbeth,
  macbeth,
  duncan,
  banquo,
  ambition_banquo,
  macduff,
];
var names = [
  "Lady Macbeth",
  "Macbeth",
  "Duncan",
  "Banquo",
  "Banquo ",
  "Macduff's Family",
];
// ------------------------------------------------------------
function first_round(param) {
  arr.push(param);
  document.getElementById("greed").remove();
  document.getElementById("righteousness").remove();
  document.getElementById("ambition").remove();
  if (arr.includes("greed")) {
    greedSelected();
  } else if (arr.includes("righteousness")) {
    righteousnessSelected();
  } else {
    ambitionSelected();
  }
}

function greedSelected() {
  var justice = document.createElement("INPUT");
  main.appendChild(justice);
  justice.type = "button";
  justice.value = "Justice";
  justice.className = "child";
  justice.id = "justice";
  justice.onclick = function () {
    document.getElementById("justice").remove();
    document.getElementById("psychological_issues").remove();
    arr.push("justice");
    arr.push("love");
    var temp = document.createElement("INPUT");
    temp.type = "button";
    temp.value = "Love";
    temp.className = "child";
    temp.id = "love";
    temp.onclick = function () {
      document.getElementById("love").remove();
      printDeath();
    };
    main.appendChild(temp);
  };
  var psychological_issues = document.createElement("INPUT");
  main.appendChild(psychological_issues);
  psychological_issues.type = "button";
  psychological_issues.value = "Psychological Issues";
  psychological_issues.id = "psychological_issues";
  psychological_issues.className = "child";
  psychological_issues.onclick = function () {
    document.getElementById("justice").remove();
    document.getElementById("psychological_issues").remove();
    arr.push("psychological issues");
    arr.push("love");
    var temp = document.createElement("INPUT");
    temp.type = "button";
    temp.value = "Love";
    temp.className = "child";
    temp.id = "love";
    temp.onclick = function () {
      document.getElementById("love").remove();
      printDeath();
    };
    main.appendChild(temp);
  };
}

function righteousnessSelected() {
  var betrayal = document.createElement("INPUT");
  main.appendChild(betrayal);
  betrayal.type = "button";
  betrayal.value = "Betrayal";
  betrayal.className = "child";
  betrayal.id = "betrayal";
  betrayal.onclick = function () {
    arr.push("betrayal");
    document.getElementById("betrayal").remove();
    document.getElementById("psychological_issues").remove();
    printDeath();
  };
  var psychological_issues = document.createElement("INPUT");
  main.appendChild(psychological_issues);
  psychological_issues.type = "button";
  psychological_issues.value = "Psychological Issues";
  psychological_issues.id = "psychological_issues";
  psychological_issues.className = "child";
  psychological_issues.onclick = function () {
    arr.push("psychological issues");
    document.getElementById("betrayal").remove();
    document.getElementById("psychological_issues").remove();
    printDeath();
  };
}

function ambitionSelected() {
  var vengeful = document.createElement("INPUT");
  main.appendChild(vengeful);
  vengeful.type = "button";
  vengeful.value = "Vengeful";
  vengeful.className = "child";
  vengeful.id = "vengeful";
  vengeful.onclick = function () {
    document.getElementById("vengeful").remove();
    document.getElementById("virtuous").remove();
    arr.push("vengeful");
    var temp = document.createElement("INPUT");
    temp.type = "button";
    temp.value = "Related to Macduff";
    temp.className = "child";
    temp.id = "relation";
    temp.onclick = function () {
      arr.push("related to macduff");
      document.getElementById("relation").remove();
      printDeath();
    };
    main.appendChild(temp);
  };
  var virtuous = document.createElement("INPUT");
  main.appendChild(virtuous);
  virtuous.type = "button";
  virtuous.value = "Virtuous";
  virtuous.id = "virtuous";
  virtuous.className = "child";
  virtuous.onclick = function () {
    arr.push("virtuous");
    document.getElementById("vengeful").remove();
    document.getElementById("virtuous").remove();
    var temp = document.createElement("INPUT");
    temp.type = "button";
    temp.value = "Psychological Issues";
    temp.className = "child";
    temp.id = "psychological_issues";
    temp.onclick = function () {
      arr.push("psychological issues");
      document.getElementById("psychological_issues").remove();
      var temp = document.createElement("INPUT");
      temp.type = "button";
      temp.value = "Assassinated";
      temp.className = "child";
      temp.id = "assassinated";
      main.appendChild(temp);
      temp.onclick = function () {
        arr.push("assassinated");
        document.getElementById("assassinated").remove();
        printDeath();
      };
    };
    main.appendChild(temp);
  };
}

function printDeath() {
  console.log("arr: " + arr);
  var bool = true;
  for (var i = 0; i < descriptions.length; i++) {
    if (descriptions[i].length == arr.length) {
      for (var j = 0; j < arr.length; j++) {
        console.log("i: " + i + "\nDescription: " + descriptions[i][j]);
        if (descriptions[i][j] != arr[j]) {
          bool = false;
        }
      }
      if (bool) {
        var temp = document.createElement("H1");
        temp.innerText = "You have concocted the death for " + names[i];
        main.appendChild(temp);
      }
      bool = true;
    }
  }
}
