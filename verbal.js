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
  coda: "concluding event",
  confound: "to prove a theory wrong",
  deign: "do something that one considers to be beneath one's dignity",
  disingenous: "not candid/sincere - deceitful",
  docile:
    "ready to accept control/instructions - submissive/ compliant/ obedient/ pliant",
  doff: "remove an item of clothing",
  dote: "extremely fond of - adore",
  endow: "provide with a quality/ ability/ asset - bless",
  ephemeral: "lasting for a very short time - fleeting",
  ethos: "characteristic spirit of community - atmosphere",
  facetious:
    "treating issues with deliberately inappropriate humor - flippant/ glib/ tongue-in-cheek",
  faction: "section/ contingent",
  fallow: "inactive/ dormant/ quiet/ slack",
  falter: "move unsteadily - stumble/ fumble",
  flail: "struggle uselessly - flounder/ thrash/ threst/ squirm",
  fluke: "unlikely chance occurence",
  forage: "search of food - hunt/ grub",
  fortuitous: " happening by a lucky chance - fortunate/ opportune",
  fringe: "the unorthodox wing of a group - peripheral",
  garner: "collect/ amass",
  gist: "the essence of text - main idea/ quintessence",
  gossamer:
    "used to refer something very thin/ light/ insubstantial/ delicate - gauzy/ fine",
  grovel: "show fear to obtain forgiveness - be servile/ suck up/ flatter",
  harangue: "lengthy and aggressive speech - tirade/ diatribe/ rant",
  impetuous: "acting quickly without thought/ care - impulsive/ hasty/ rash",
  indictment: "formal charge of serious crime- arraignment/ citation",
  inert: "lacking vigor - idle/ inactive",
  ingrate: "ungrateful person",
  insipid: "lacking interest - vapid/ dull",
  lax: "negligent/ slipshod/ slack",
  listless: "lacking energy - lethargic/ lackadaisical/ enervated",
  livid: "very angry - irate/ infuriated",
  loll: "sit/ lie/ stand in a relaxed way - lounge/ sprawl/ drape oneself",
  lurid: "exaggerated/ melodramatic/ overdramatized",
  mar: "spoil/ ruin/ damage",
  mince: "use polite expression to indicate disapproval",
  minion: "follower of a powerful person - henchman/ yes-man/ lackey",
  mirth: "amusement/ merriment/ high spirits",
  modest: "simple",
  morose: "sullen & ill-tempered - sulky/ gloomy",
  muse: "inspiration for creative artist",
  oblique: "indirect/ roundabout",
  opaque: "not transparent - cloudy/ obscure",
  overwrought: "overblown/ exaggerated/ contrived",
  pertain: "be appropriate/ related to",
  pine: "to feel very sad on missing something",
  placate: "make someone less angry - appease/ pacify/ modify",
  platitude:
    "a statement that has been used too often to be interesting - cliche/ truism/ commonplace",
  plethora: "excess/ overabundance",
  posit:
    "put forward as fact or as a basis for argument - postulate/ propound/ submit",
  prodigal:
    "a person who leaves home and behaves recklessly, but later makes a repetant return",
  prophetic: "predicting the future - visionary",
  purist:
    "person who insists of adherence to traditional rules - pedant/ dogmatist/ perfectionist",
  pyre: "a heap of combustible material especially one for burning a corpse",
  quack:
    "a person who dishonestly claims to have special knowledge in some field - fraud/ charlatan/ swindler",
  reticence:
    "the quality of not revealing one's thoughts/ feelings readily - introversion",
  rue: "bitterly regret - deplore/ lament/ bemoan",
  ruminate: "think deeply about something - contemplate/ mull over",
  stigma: "a mark of disgrace with a particular situation",
  strut: "walk with a conceited gait - parade/ prance",
  sublime: "awesome/ majestic",
  surly: "bad-tempered/ unfriendly/ grumpy/ glum",
  syncopation:
    "displacement of the beat (in music) so that strong beats become weak and vice versa",
  taunt: "remark made in order to provoke someone - jeer/ gibe/ sneer",
  tawdry: "showy but cheap quality - gaudy/ flashy/ garish",
  temperate: "region characterized by mild temperatures - element/ pleasant",
  terse: "sparing in use of words - curt/ brusque/ abrupt",
  tome: "book/ volume/ opus",
  torrid: "full of difficulty/ tribulation",
  transgression: "offense/ crime/ sin",
  treacherous: "traitorous/ disloyal/ perfidious",
  vapid: "insipid/ uninspired/ uninteresting",
  vestige:
    "a trace of something that is disappearing - remnant/ remainder/ fragment",
  vilify:
    "speak/ write in an abusively disparaging manner - disparage/ denigrate/ defame",
  viscous: "thick, sticky between solid and liquid - gummy/ glue-like/ gluey",
  volatile: "liable to change rapidly - tense/ strained/ turbulent",
  waffle: "lengthy but useless talk - prattle/ hot-air/ drivel",
  waft: "drift/ float/ glide",
  wanton:
    "cruel action which is deliberate and unprovoked - malicious/ malevolent/ spiteful",
  whitewash: "cover up/ sweep under the carpet",
  whittle: "diminish/ erode/ wear away",
  winsome: "charming/ winning/ engaging",
  wizened: "shriveled/ wrinkled with age - lined/ creased/ withered",
  wry: "ironic/ sardonic/ satirical",
  zeal: "passion/ fervor",
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
