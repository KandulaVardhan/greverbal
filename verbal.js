const vocabs = {
  aberration: "departure from what is expected",
  abreast: "upto date with latest news",
  abstain: "refrain/ desist/ holdback",
  abyss: "gorge/ ravine/ void",
  adept: "expert/ professional/ accomplished",
  agog: "excited/ impatient",
  allure: "attraction/ lure/ draw",
  altruism: "selflessness/ compassion/ goodwill",
  ambivalent: "mixed feelings on something",
  annul: "declare invalid - repeal/ reverse/ rescind",
  apathy: "lack of interest - ennui/ passivity",
  arbitrary: "random/ capricious",
  arbiter: "judge",
  artless: "without guile/ deception - candid/ direct/ forthright",
  audacious: "bold/ daring",
  austere: "simple/ unadorned/ subdued/ stark",
  blight: "thing that spoils something - affliction/ scourge/ bane",
  blithe:
    "casual indifference considered callous/ improper - indifferent/ unconcerned/ blase",
  blowhard: "show-off/ boaster/ bragger",
  bolster: "strengthen/ prop up",
  bombastic:
    "high sounding but with little meaning - pompous/ blustering/ turgid",
  boycott: "veto/ shunning/ rejection",
  burlesque: "a variety show - skit/ farce/ striptease",
  cacophony: "a harsh, discordant mixture of sounds - racket/ noise/ clamor",
  chronic: "constant/ continuing/ persistent",
};
if (window.location.href.search("/index.html") != -1) {
  const questions = Object.keys(vocabs);
  const answers = Object.values(vocabs);
  let size = 10;
  const shuffledArray = questions.sort(() => 0.5 - Math.random()); // shuffles array
  const shuffledQuestions = shuffledArray.slice(0, size); // gets first n elements after shuffle
  let currIndex = 0;
  const currQuestion = shuffledQuestions[currIndex];
  let question = document.getElementById("question");
  question.innerHTML = currQuestion;
  let option1 = document.getElementById("option1val");
  let option2 = document.getElementById("option2val");
  let option3 = document.getElementById("option3val");
  let option4 = document.getElementById("option4val");
  const tempAns = answers.slice();

  const index = tempAns.indexOf(vocabs[currQuestion]);

  tempAns.splice(index, 1);
  //console.log({ removedAns });
  const shuffledAns = tempAns.sort(() => 0.5 - Math.random());
  const topAns = shuffledAns.slice(0, 3);
  topAns.push(vocabs[currQuestion]);
  const finalAns = topAns.sort(() => 0.5 - Math.random());
  option1.innerHTML = finalAns[0];
  option2.innerHTML = finalAns[1];
  option3.innerHTML = finalAns[2];
  option4.innerHTML = finalAns[3];
  currIndex++;
  let result = 0;
  let wrongs = [];

  const countScore = (currQue) => {
    let option1rad = document.getElementById("option1rad");
    let option2rad = document.getElementById("option2rad");
    let option3rad = document.getElementById("option3rad");
    let option4rad = document.getElementById("option4rad");
    let ans = vocabs[currQue];
    if (option1rad.checked) {
      // console.log(option1.innerHTML);
      // console.log(ans);
      option1rad.checked = false;
      if (ans == option1.innerHTML) {
        result++;
      } else {
        wrongs.push(currQue + ":" + ans + " ");
      }
    } else if (option2rad.checked) {
      option2rad.checked = false;
      if (ans == option2.innerHTML) {
        result++;
      } else {
        wrongs.push(currQue + ":" + ans + " ");
      }
    } else if (option3rad.checked) {
      option3rad.checked = false;
      if (ans == option3.innerHTML) {
        result++;
      } else {
        wrongs.push(currQue + ":" + ans + " ");
      }
    } else if (option4rad.checked) {
      option4rad.checked = false;
      if (ans == option4.innerHTML) {
        result++;
      } else {
        wrongs.push(currQue + ":" + ans + " ");
      }
    }
  };
  const btn = document.getElementById("button");
  btn.addEventListener("click", (event) => {
    const temp = countScore(shuffledQuestions[currIndex - 1]);
    if (currIndex === size) {
      //document.getElementById("result").innerHTML = toString(result);
      document.getElementById("result").innerHTML = result + "/" + size;
      document.getElementById("wrongs").innerHTML = wrongs;
      event.target.disabled = true;
    }

    const currQuestion = shuffledQuestions[currIndex];
    let question = document.getElementById("question");
    let questionNumber = document.getElementById("questionNumber");
    questionNumber.innerHTML = currIndex + 1;
    question.innerHTML = currQuestion;
    let option1 = document.getElementById("option1val");
    let option2 = document.getElementById("option2val");
    let option3 = document.getElementById("option3val");
    let option4 = document.getElementById("option4val");
    const tempAns = answers.slice();

    const index = tempAns.indexOf(vocabs[currQuestion]);

    tempAns.splice(index, 1);
    //console.log({ removedAns });
    const shuffledAns = tempAns.sort(() => 0.5 - Math.random());
    const topAns = shuffledAns.slice(0, 3);
    topAns.push(vocabs[currQuestion]);
    const finalAns = topAns.sort(() => 0.5 - Math.random());
    option1.innerHTML = finalAns[0];
    option2.innerHTML = finalAns[1];
    option3.innerHTML = finalAns[2];
    option4.innerHTML = finalAns[3];
    currIndex++;
  });
  // for (let index = 0; index < size; index++) {
  //   const currQuestion = shuffledQuestions[index];
  //   let question = document.getElementById("question");
  //   question.innerHTML = currQuestion;

  // }
} else {
  var table = document.getElementById("myTable");
  const questions = Object.keys(vocabs);
  for (let i = 0; i < questions.length; i++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow();

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = questions[i];
    cell2.innerHTML = vocabs[questions[i]];
  }
}
