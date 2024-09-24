/*************** 
 * Upload Test *
 ***************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// store info about the experiment session:
let expName = 'upload';  // from the Builder filename that created this script
let expInfo = {'Hány éves?*': '', 'Hol nőtt fel?*': ''}; // initial questions to each participants before starting the experiment

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent_formRoutineBegin());
flowScheduler.add(consent_formRoutineEachFrame());
flowScheduler.add(consent_formRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': '12.jpg', 'path': '12.jpg'},
    {'name': '5_pl.png', 'path': '5_pl.png'},
    {'name': 'exp_test_1.xlsx', 'path': 'exp_test_1.xlsx'}, //file for target items
    {'name': '12_pl.png', 'path': '12_pl.png'},
    {'name': '26_pl.png', 'path': '26_pl.png'},
    {'name': '10_pl.png', 'path': '10_pl.png'},
    {'name': '50_pl.png', 'path': '50_pl.png'},
    {'name': '8_pl.png', 'path': '8_pl.png'},
    {'name': '10.jpg', 'path': '10.jpg'},
    {'name': '1.jpg', 'path': '1.jpg'},
    {'name': '44_pl.png', 'path': '44_pl.png'},
    {'name': '9_pl.png', 'path': '9_pl.png'},
    {'name': '9.jpg', 'path': '9.jpg'},
    {'name': '39_pl.png', 'path': '39_pl.png'},
    {'name': '35_1.png', 'path': '35_1.png'},
    {'name': '45_1.png', 'path': '45_1.png'},
    {'name': '14_pl.png', 'path': '14_pl.png'},
    {'name': '21_pl.png', 'path': '21_pl.png'},
    {'name': '51_1.png', 'path': '51_1.png'},
    {'name': '52_1.png', 'path': '52_1.png'},
    {'name': '11_pl.png', 'path': '11_pl.png'},
    {'name': '28.jpg', 'path': '28.jpg'},
    {'name': '15_pl.png', 'path': '15_pl.png'},
    {'name': '16.jpg', 'path': '16.jpg'},
    {'name': '24.jpg', 'path': '24.jpg'},
    {'name': '7.jpg', 'path': '7.jpg'},
    {'name': '21.jpg', 'path': '21.jpg'},
    {'name': '22.jpg', 'path': '22.jpg'},
    {'name': '6_pl.png', 'path': '6_pl.png'},
    {'name': '34_pl.png', 'path': '34_pl.png'},
    {'name': '34_1.png', 'path': '34_1.png'},
    {'name': '4_pl.png', 'path': '4_pl.png'},
    {'name': '39_1.png', 'path': '39_1.png'},
    {'name': '2.jpg', 'path': '2.jpg'},
    {'name': '3.jpg', 'path': '3.jpg'},
    {'name': '31_1.png', 'path': '31_1.png'},
    {'name': '33_1.png', 'path': '33_1.png'},
    {'name': '18_pl.png', 'path': '18_pl.png'},
    {'name': '37_1.png', 'path': '37_1.png'},
    {'name': '30_pl.png', 'path': '30_pl.png'},
    {'name': '13.jpg', 'path': '13.jpg'},
    {'name': '17_pl.png', 'path': '17_pl.png'},
    {'name': '41_pl.png', 'path': '41_pl.png'},
    {'name': '28_pl.png', 'path': '28_pl.png'},
    {'name': '2_pl.png', 'path': '2_pl.png'},
    {'name': '43_pl.png', 'path': '43_pl.png'},
    {'name': '19_pl.png', 'path': '19_pl.png'},
    {'name': '43_1.png', 'path': '43_1.png'},
    {'name': '1_pl.png', 'path': '1_pl.png'},
    {'name': '15.jpg', 'path': '15.jpg'},
    {'name': '22_pl.png', 'path': '22_pl.png'},
    {'name': '48_1.png', 'path': '48_1.png'},
    {'name': '6.jpg', 'path': '6.jpg'},
    {'name': '5.jpg', 'path': '5.jpg'},
    {'name': '11.jpg', 'path': '11.jpg'},
    {'name': '26.jpg', 'path': '26.jpg'},
    {'name': '30_1.png', 'path': '30_1.png'},
    {'name': '37_pl.png', 'path': '37_pl.png'},
    {'name': '14.jpg', 'path': '14.jpg'},
    {'name': '46_1.png', 'path': '46_1.png'},
    {'name': '20_pl.png', 'path': '20_pl.png'},
    {'name': '3_pl.png', 'path': '3_pl.png'},
    {'name': 'Fillers.xlsx', 'path': 'Fillers.xlsx'}, //file for filler items
    {'name': '31_pl.png', 'path': '31_pl.png'},
    {'name': '47_1.png', 'path': '47_1.png'},
    {'name': '50_1.png', 'path': '50_1.png'},
    {'name': '48_pl.png', 'path': '48_pl.png'},
    {'name': '52_pl.png', 'path': '52_pl.png'},
    {'name': '46_pl.png', 'path': '46_pl.png'},
    {'name': '24_pl.png', 'path': '24_pl.png'},
    {'name': '41_1.png', 'path': '41_1.png'},
    {'name': '47_pl.png', 'path': '47_pl.png'},
    {'name': '16_pl.png', 'path': '16_pl.png'},
    {'name': '19.jpg', 'path': '19.jpg'},
    {'name': '4.jpg', 'path': '4.jpg'},
    {'name': '8.jpg', 'path': '8.jpg'},
    {'name': '42_1.png', 'path': '42_1.png'},
    {'name': '42_pl.png', 'path': '42_pl.png'},
    {'name': '23.jpg', 'path': '23.jpg'},
    {'name': '27_pl.png', 'path': '27_pl.png'},
    {'name': '13_pl.png', 'path': '13_pl.png'},
    {'name': '23_pl.png', 'path': '23_pl.png'},
    {'name': '32_1.png', 'path': '32_1.png'},
    {'name': '51_pl.png', 'path': '51_pl.png'},
    {'name': '27.jpg', 'path': '27.jpg'},
    {'name': '33_pl.png', 'path': '33_pl.png'},
    {'name': '45_pl.png', 'path': '45_pl.png'},
    {'name': 'trial_data.xlsx', 'path': 'trial_data.xlsx'}, //file for introductory items
    {'name': '44_1.png', 'path': '44_1.png'},
    {'name': '18.jpg', 'path': '18.jpg'},
    {'name': '20.jpg', 'path': '20.jpg'},
    {'name': '35_pl.png', 'path': '35_pl.png'},
    {'name': '17.jpg', 'path': '17.jpg'},
    {'name': '7_pl.png', 'path': '7_pl.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


var consent_formClock;
var consent;
var consenting;
var box;
var click_consent;
var instructionsClock;
var instruction;
var next_instr;
var key_resp_instr;
var IntroExClock;
var IntroExSentence1;
var IntroExImage1;
var Intro_continue;
var key_resp_intro;
var IntroExSentence2;
var IntroExImage2;
var IntroButton1;
var IntroButton1Text;
var IntroButton1Mouse;
var IntroButton2;
var IntroButton2Text;
var IntroButton2Mouse;
var TargetsClock;
var TargetSentence1;
var TargetsImage1;
var target_continue;
var key_resp_target;
var TargetsSentence2;
var TargetsImage2;
var TargetButton1;
var TargetButton1Text;
var TargetButton1Mouse;
var TargetButton2;
var TargetButton2Text;
var TargetButton2Mouse;
var FillersClock;
var FillerExSentence1;
var FillerImage1;
var Filler_continue;
var key_resp_filler;
var FillerExSentence2;
var FillerExImage2;
var FillerButton1;
var FillerButton1Text;
var FillerButton1Mouse;
var FillerButton2;
var FillerButton2Text;
var FillerButton2Mouse;
var thanksClock;
var thankyou;
var key_resp_thanks;
var thankyou_continue;
var globalClock;
var routineTimer;
var rnnumTrial;
var rnnumItem;
var rnnumFiller;
var wordFiller;
var trial_2;
var RandomFiller;
var ShuffledRandomFiller;

async function experimentInit() {
  // Initialize components for Routine "consent_form"
  consent_formClock = new util.Clock();
  consent = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent',
    text: 'Beleegyezési nyilatkozat:\n\nA kérdőív kitöltésével hozzájárulását fejezi ki egy a Massachusetts Institute of Technology Nyelvészet és Filozófia tanszékén folytatott, Athulya Aravind által vezetett, kutatásban való részvételéhez. Ha kérdése van a kutatással kapcsolatban, azokat a dorakata@mit.edu címre küldheti. A részvétele a kutatásban teljes mértékben önkéntes alapon történik. Ha valamelyik kérdésre nem kíván válaszolni, azt nyugodtan kihagyhatja. A kérdőív kitöltését bármikor bármilyen negatív következmény nélkül megszakíthatja. Az anonimitása biztosított; a kutatókhoz, akik az Ön kutatásban való részévételét kérvényezték, Önről semmilyen személyes információ nem jut el.', // change this for a different consent form
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.08], height: 0.037,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  consenting = new visual.TextStim({
    win: psychoJS.window,
    name: 'consenting',
    text: 'Elolvastam és tudomásul vettem a beleegyezési nyilatkozatot. Elmúltam 18 éves és az anyanyelvem magyar.', //change this for different agreement statement
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });

  //create box to click on to agree to concept form
  box = new visual.Rect ({
    win: psychoJS.window, name: 'box', 
    width: [0.03, 0.03][0], height: [0.03, 0.03][1],
    ori: 0.0, pos: [(- 0.47), (- 0.28)],
    lineWidth: 3.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('grey'),
    opacity: undefined, depth: -3, interpolate: true,
  }); 

  //enabling clicking on the box to express agreement
  click_consent = new core.Mouse({
    win: psychoJS.window,
  });
  click_consent.mouseClock = new util.Clock();
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'A kérdőívben feltett kérdésekre nincsen helyes válasz. Minden kérdésnél kérjük azt a választ jelölje meg amelyik Ön szerint jobban, természetesebben hangzik. Kérjük, hogy a kérdőívben szereplő minden mondatot és válaszlehetőséget figyelmesen olvasson el. \n\nA kérdőív kitöltéséhez szükséges átlagos idő: 20 perc. \n\nKözreműködését előre is köszönöm!', //change this for different instructions
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.037,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });

  // text explaining how to continue
  next_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'next_instr',
    text: "A továbblépéshez nyomja le a 'space' billentyűt!", // change this for differnet continuation message
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.8824, 1.0, 1.0]),  opacity: undefined,
    depth: -2.0 
  });

  //pushing key let's participant continue
  key_resp_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IntroEx"
  IntroExClock = new util.Clock();
  IntroExSentence1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroExSentence1',
    text: '', //left empty here as it is later inserted from the introductory items file
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });

  //insert first picture: the singular one
  IntroExImage1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'IntroExImage1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  //how to continue 
  Intro_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro_continue',
    text: "A továbblépéshez nyomja le a 'space' billentyűt!", //change this for different text explaining how to continue
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.8824, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });

  //pressing a key let's participant proceed
  key_resp_intro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  //sentence on the second slide of an item
  IntroExSentence2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroExSentence2',
    text: 'Ezek _______', //here the text does not change with each item, so it is set for all of them
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  //insert second picture: the plural one
  IntroExImage2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'IntroExImage2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });

  //create a rectangle for a button
  IntroButton1 = new visual.Rect ({
    win: psychoJS.window, name: 'IntroButton1', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [(- 0.33), (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -7, interpolate: true,
  });

  //text for the first button
  IntroButton1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroButton1Text',
    text: '', //changes with each item so not set here
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });

  //turning the rectangle into a button
  IntroButton1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  IntroButton1Mouse.mouseClock = new util.Clock();

  //another rectangle for a second button
  IntroButton2 = new visual.Rect ({
    win: psychoJS.window, name: 'IntroButton2', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [0.33, (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -10, interpolate: true,
  });

  //text for the second button
  IntroButton2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroButton2Text',
    text: '',//it is different for each item so it is not defined here
    font: 'Open Sans',
    units: undefined, 
    pos: [0.33, (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });

  //turn the second rectangle into a button
  IntroButton2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  IntroButton2Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Targets"
  TargetsClock = new util.Clock();

  //display the first sentence
  TargetSentence1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'TargetSentence1',
    text: '', //different for every item, pulled from the file
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });

  //first image: the singular one
  TargetsImage1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TargetsImage1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  //text explaining how to continue
  target_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_continue',
    text: "A továbblépéshez nyomja le a 'space' billentyűt!", //change this for different text about how to proceed
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.8824, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });

  //pressing a key let's participant proceed
  key_resp_target = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  //display second sentence: the plural one
  TargetsSentence2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'TargetsSentence2',
    text: 'Ezek _______',//It is always the same, so it is given here
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  //include the second picture: the plural one
  TargetsImage2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'TargetsImage2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });

  //create a rectangle for the first button
  TargetButton1 = new visual.Rect ({
    win: psychoJS.window, name: 'TargetButton1', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [(- 0.33), (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -7, interpolate: true,
  });

  //text field in the first button
  TargetButton1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TargetButton1Text',
    text: '', //changes for every item, text is pulled from the relevant file
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });

  //turn rectangle into a button
  TargetButton1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  TargetButton1Mouse.mouseClock = new util.Clock();

  //create a rectangle for the second button
  TargetButton2 = new visual.Rect ({
    win: psychoJS.window, name: 'TargetButton2', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [0.33, (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -10, interpolate: true,
  });

  //text for the target button
  TargetButton2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'TargetButton2Text',
    text: '', //pulled from the data, different for each item
    font: 'Open Sans',
    units: undefined, 
    pos: [0.33, (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });

  //turning the second rectangle into a button
  TargetButton2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  TargetButton2Mouse.mouseClock = new util.Clock();
  
  // Initialize components for Routine "Fillers"
  FillersClock = new util.Clock();
  //display for sentence
  FillerExSentence1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FillerExSentence1',
    text: '', //changes for every filler, relevant text is pulled from the filler file
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });

  //display first image: the singular one
  FillerImage1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'FillerImage1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });

  //text explaining how to proceed
  Filler_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Filler_continue',
    text: "A továbblépéshez nyomja le a 'space' billentyűt!", // change this for different message about how to proceed
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.032,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([0.8824, 1.0, 1.0]),  opacity: undefined,
    depth: -3.0 
  });

  //pressing a key let's participant proceed
  key_resp_filler = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  //display second sentence for a filler: the plural one
  FillerExSentence2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FillerExSentence2',
    text: 'Ezek _______', //always the same
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  //display second image: the plural one
  FillerExImage2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'FillerExImage2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });

  //create a rectangle for the first button
  FillerButton1 = new visual.Rect ({
    win: psychoJS.window, name: 'FillerButton1', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [(- 0.33), (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -7, interpolate: true,
  });

  //text for the first button
  FillerButton1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'FillerButton1Text',
    text: '', //different for every item, pulled from the relevant file
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.33), (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });

  //turn rectangle into an actual button
  FillerButton1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  FillerButton1Mouse.mouseClock = new util.Clock();

  //create another rectangle for the second button
  FillerButton2 = new visual.Rect ({
    win: psychoJS.window, name: 'FillerButton2', 
    width: [0.35, 0.1][0], height: [0.35, 0.1][1],
    ori: 0.0, pos: [0.33, (- 0.35)],
    lineWidth: 5.0, lineColor: new util.Color('white'),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    opacity: undefined, depth: -10, interpolate: true,
  });

  //text for the second button
  FillerButton2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'FillerButton2Text',
    text: '', //changes with every item, pulled from the relevant file
    font: 'Open Sans',
    units: undefined, 
    pos: [0.33, (- 0.345)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });

  //turning the second rectangle into a button
  FillerButton2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  FillerButton2Mouse.mouseClock = new util.Clock();
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thankyou = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou',
    text: 'Köszönöm a részvételét!',//change this for different thank you text
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });

  //pressing a key let's participant end the experiment
  key_resp_thanks = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});

  //text explaining how to end the experiment
  thankyou_continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou_continue',
    text: "A kérdőív befejezéséhez nyomja le a 'space' billentyűt!", //change this for different instructions on how to end the experiment
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.38)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('aqua'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers -- this is default from PsychoPy, I did not make any use of it, though
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var consent_formComponents;
function consent_formRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent_form'-------
    t = 0;
    consent_formClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the click_consent
    // current position of the mouse: mouse position is not used here, the initialization comes from the default PsychoPy setup
    click_consent.x = [];
    click_consent.y = [];
    click_consent.leftButton = [];
    click_consent.midButton = [];
    click_consent.rightButton = [];
    click_consent.time = [];
    click_consent.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consent_formComponents = [];
    consent_formComponents.push(consent);
    consent_formComponents.push(consenting);
    consent_formComponents.push(box);
    consent_formComponents.push(click_consent);
    
    for (const thisComponent of consent_formComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consent_formRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent_form'-------
    // get current time
    t = consent_formClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent* updates
    if (t >= 0.5 && consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent.tStart = t;  // (not accounting for frame time here)
      consent.frameNStart = frameN;  // exact frame index
      
      consent.setAutoDraw(true);
    }

    
    // *consenting* updates
    if (t >= 0.5 && consenting.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later (not necessary for this experiment)
      consenting.tStart = t;  // (not accounting for frame time here)
      consenting.frameNStart = frameN;  // exact frame index
      
      consenting.setAutoDraw(true);
    }

    
    // *box* updates
    if (t >= 0.5 && box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      box.tStart = t;  // (not accounting for frame time here)
      box.frameNStart = frameN;  // exact frame index
      
      box.setAutoDraw(true);
    }

    // *click_consent* updates
    if (t >= 0.5 && click_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later (not necessary for this experiment)
      click_consent.tStart = t;  // (not accounting for frame time here)
      click_consent.frameNStart = frameN;  // exact frame index
      
      click_consent.status = PsychoJS.Status.STARTED;
      click_consent.mouseClock.reset();
      prevButtonState = click_consent.getPressed();  // if button is down already this ISN'T a new click
      }
    if (click_consent.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = click_consent.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = click_consent.getPos();
          click_consent.x.push(_mouseXYs[0]);
          click_consent.y.push(_mouseXYs[1]);
          click_consent.leftButton.push(_mouseButtons[0]);
          click_consent.midButton.push(_mouseButtons[1]);
          click_consent.rightButton.push(_mouseButtons[2]);
          click_consent.time.push(click_consent.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [box]) {
            if (obj.contains(click_consent)) {
              gotValidClick = true;
              click_consent.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false); //this was not personalized assuming the participant would continue
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consent_formComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_formRoutineEnd() {
  return async function () {
    //------Ending Routine 'consent_form'-------
    for (const thisComponent of consent_formComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler) not technically necessary for this experiment
    if (click_consent.x) {  psychoJS.experiment.addData('click_consent.x', click_consent.x[0])};
    if (click_consent.y) {  psychoJS.experiment.addData('click_consent.y', click_consent.y[0])};
    if (click_consent.leftButton) {  psychoJS.experiment.addData('click_consent.leftButton', click_consent.leftButton[0])};
    if (click_consent.midButton) {  psychoJS.experiment.addData('click_consent.midButton', click_consent.midButton[0])};
    if (click_consent.rightButton) {  psychoJS.experiment.addData('click_consent.rightButton', click_consent.rightButton[0])};
    if (click_consent.time) {  psychoJS.experiment.addData('click_consent.time', click_consent.time[0])};
    if (click_consent.clicked_name) {  psychoJS.experiment.addData('click_consent.clicked_name', click_consent.clicked_name[0])};
    
    // the Routine "consent_form" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_instr_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_instr.keys = undefined;
    key_resp_instr.rt = undefined;
    _key_resp_instr_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction);
    instructionsComponents.push(next_instr);
    instructionsComponents.push(key_resp_instr);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.5 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }

    if (instruction.status === PsychoJS.Status.STARTED && Boolean((key_resp_instr.keys == 'space'))) {
      instruction.setAutoDraw(false);
    }
    
    // *next_instr* updates
    if (t >= 0.5 && next_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_instr.tStart = t;  // (not accounting for frame time here)
      next_instr.frameNStart = frameN;  // exact frame index
      
      next_instr.setAutoDraw(true);
    }

    if (next_instr.status === PsychoJS.Status.STARTED && Boolean((key_resp_instr.keys == 'space'))) {
      next_instr.setAutoDraw(false);
    }
    
    // *key_resp_instr* updates
    if (t >= 0.5 && key_resp_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_instr.tStart = t;  // (not accounting for frame time here)
      key_resp_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_instr.clearEvents(); });
    }

    if (key_resp_instr.status === PsychoJS.Status.STARTED && Boolean((key_resp_instr.keys == 'space'))) {
      key_resp_instr.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_instr.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_instr_allKeys = _key_resp_instr_allKeys.concat(theseKeys);
      if (_key_resp_instr_allKeys.length > 0) {
        key_resp_instr.keys = _key_resp_instr_allKeys[_key_resp_instr_allKeys.length - 1].name;  // just the last key pressed
        key_resp_instr.rt = _key_resp_instr_allKeys[_key_resp_instr_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_instr.keys', key_resp_instr.keys);
    if (typeof key_resp_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_instr.rt', key_resp_instr.rt);
        routineTimer.reset();
        }
    
    key_resp_instr.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'trial_data.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(IntroExRoutineBegin(snapshot));
      trialsLoopScheduler.add(IntroExRoutineEachFrame());
      trialsLoopScheduler.add(IntroExRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'exp_test_1.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      const snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TargetsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TargetsRoutineEachFrame());
      trials_2LoopScheduler.add(TargetsRoutineEnd());
      const trials_3LoopScheduler = new Scheduler(psychoJS); //intervening filler items!
      trials_2LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_2LoopScheduler.add(trials_3LoopScheduler);
      trials_2LoopScheduler.add(trials_3LoopEnd);
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Fillers.xlsx', wordFiller),
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      const snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(FillersRoutineBegin(snapshot));
      trials_3LoopScheduler.add(FillersRoutineEachFrame());
      trials_3LoopScheduler.add(FillersRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var _key_resp_intro_allKeys;
var IntroExComponents;
function IntroExRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IntroEx'-------
    t = 0;
    IntroExClock.reset(); // clock (not technically necessary)
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    rnnumTrial = getRandomInt(2); // this is used to randomize the buttons 
    psychoJS.experiment.addData('RandomNumberIntro', rnnumTrial); // the randomization of the buttons is saved to be able to evaluate what the participant actually clicked on
    IntroExSentence1.setText(wholeSentenceTrial);
    IntroExImage1.setImage(Pic1Trial);
    key_resp_intro.keys = undefined;
    key_resp_intro.rt = undefined;
    _key_resp_intro_allKeys = [];
    IntroExImage2.setImage(Pic2Trial);
    IntroButton1Text.setText(((rnnumTrial === 1) ? pl1Trial : pl2Trial)); //here we use the random boolean generated to determine which button is which
    // setup some python lists for storing info about the IntroButton1Mouse
    // current position of the mouse: (technically position of the mouse is not necessary, we only need left or right button)
    IntroButton1Mouse.x = [];
    IntroButton1Mouse.y = [];
    IntroButton1Mouse.leftButton = [];
    IntroButton1Mouse.midButton = [];
    IntroButton1Mouse.rightButton = [];
    IntroButton1Mouse.time = [];
    IntroButton1Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    IntroButton2Text.setText(pl2Trial);
    IntroButton2Text.setText(((rnnumTrial === 1) ? pl2Trial : pl1Trial)); //setting the text for the second button based on the random boolean generated above (I say boolean but it is a number 0 or 1)
    // setup some python lists for storing info about the IntroButton2Mouse
    // current position of the mouse: (again this could be left out, only which button was clicked is what was taken into consideration in the evaluation in the end)
    IntroButton2Mouse.x = [];
    IntroButton2Mouse.y = [];
    IntroButton2Mouse.leftButton = [];
    IntroButton2Mouse.midButton = [];
    IntroButton2Mouse.rightButton = [];
    IntroButton2Mouse.time = [];
    IntroButton2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    IntroExComponents = [];
    IntroExComponents.push(IntroExSentence1);
    IntroExComponents.push(IntroExImage1);
    IntroExComponents.push(Intro_continue);
    IntroExComponents.push(key_resp_intro);
    IntroExComponents.push(IntroExSentence2);
    IntroExComponents.push(IntroExImage2);
    IntroExComponents.push(IntroButton1);
    IntroExComponents.push(IntroButton1Text);
    IntroExComponents.push(IntroButton1Mouse);
    IntroExComponents.push(IntroButton2);
    IntroExComponents.push(IntroButton2Text);
    IntroExComponents.push(IntroButton2Mouse);
    
    for (const thisComponent of IntroExComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroExRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IntroEx'-------
    // get current time
    t = IntroExClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IntroExSentence1* updates
    if (t >= 0.5 && IntroExSentence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroExSentence1.tStart = t;  // (not accounting for frame time here)
      IntroExSentence1.frameNStart = frameN;  // exact frame index
      
      IntroExSentence1.setAutoDraw(true);
    }

    if (IntroExSentence1.status === PsychoJS.Status.STARTED && Boolean((key_resp_intro.keys == 'space'))) {
      IntroExSentence1.setAutoDraw(false);
    }
    
    // *IntroExImage1* updates
    if (t >= 0.5 && IntroExImage1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroExImage1.tStart = t;  // (not accounting for frame time here)
      IntroExImage1.frameNStart = frameN;  // exact frame index
      
      IntroExImage1.setAutoDraw(true);
    }

    if (IntroExImage1.status === PsychoJS.Status.STARTED && Boolean((key_resp_intro.keys == 'space'))) {
      IntroExImage1.setAutoDraw(false);
    }
    
    // *Intro_continue* updates
    if (t >= 0.5 && Intro_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro_continue.tStart = t;  // (not accounting for frame time here)
      Intro_continue.frameNStart = frameN;  // exact frame index
      
      Intro_continue.setAutoDraw(true);
    }

    if (Intro_continue.status === PsychoJS.Status.STARTED && Boolean((key_resp_intro.keys == 'space'))) {
      Intro_continue.setAutoDraw(false);
    }
    
    // *key_resp_intro* updates
    if (t >= 0.5 && key_resp_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_intro.tStart = t;  // (not accounting for frame time here)
      key_resp_intro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_intro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_intro.clearEvents(); });
    }

    if (key_resp_intro.status === PsychoJS.Status.STARTED && Boolean((key_resp_intro.keys == 'space'))) {
      key_resp_intro.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_intro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_intro.getKeys({keyList: ['space'], waitRelease: false}); // change this to allow other key(s) to be used to proceed
      _key_resp_intro_allKeys = _key_resp_intro_allKeys.concat(theseKeys);
      if (_key_resp_intro_allKeys.length > 0) {
        key_resp_intro.keys = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].name;  // just the last key pressed
        key_resp_intro.rt = _key_resp_intro_allKeys[_key_resp_intro_allKeys.length - 1].rt;
      }
    }
    
    
    // *IntroExSentence2* updates
    if (((key_resp_intro.keys == 'space')) && IntroExSentence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroExSentence2.tStart = t;  // (not accounting for frame time here)
      IntroExSentence2.frameNStart = frameN;  // exact frame index
      
      IntroExSentence2.setAutoDraw(true);
    }

    
    // *IntroExImage2* updates
    if (((key_resp_intro.keys == 'space')) && IntroExImage2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroExImage2.tStart = t;  // (not accounting for frame time here)
      IntroExImage2.frameNStart = frameN;  // exact frame index
      
      IntroExImage2.setAutoDraw(true);
    }

    
    // *IntroButton1* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton1.tStart = t;  // (not accounting for frame time here)
      IntroButton1.frameNStart = frameN;  // exact frame index
      
      IntroButton1.setAutoDraw(true);
    }

    
    // *IntroButton1Text* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton1Text.tStart = t;  // (not accounting for frame time here)
      IntroButton1Text.frameNStart = frameN;  // exact frame index
      
      IntroButton1Text.setAutoDraw(true);
    }

    // *IntroButton1Mouse* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton1Mouse.tStart = t;  // (not accounting for frame time here)
      IntroButton1Mouse.frameNStart = frameN;  // exact frame index
      
      IntroButton1Mouse.status = PsychoJS.Status.STARTED;
      IntroButton1Mouse.mouseClock.reset();
      prevButtonState = IntroButton1Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (IntroButton1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = IntroButton1Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = IntroButton1Mouse.getPos();
          IntroButton1Mouse.x.push(_mouseXYs[0]);
          IntroButton1Mouse.y.push(_mouseXYs[1]);
          IntroButton1Mouse.leftButton.push(_mouseButtons[0]);
          IntroButton1Mouse.midButton.push(_mouseButtons[1]);
          IntroButton1Mouse.rightButton.push(_mouseButtons[2]);
          IntroButton1Mouse.time.push(IntroButton1Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [IntroButton1]) {
            if (obj.contains(IntroButton1Mouse)) {
              gotValidClick = true;
              IntroButton1Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *IntroButton2* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton2.tStart = t;  // (not accounting for frame time here)
      IntroButton2.frameNStart = frameN;  // exact frame index
      
      IntroButton2.setAutoDraw(true);
    }

    
    // *IntroButton2Text* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton2Text.tStart = t;  // (not accounting for frame time here)
      IntroButton2Text.frameNStart = frameN;  // exact frame index
      
      IntroButton2Text.setAutoDraw(true);
    }

    // *IntroButton2Mouse* updates
    if (((key_resp_intro.keys == 'space')) && IntroButton2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroButton2Mouse.tStart = t;  // (not accounting for frame time here)
      IntroButton2Mouse.frameNStart = frameN;  // exact frame index
      
      IntroButton2Mouse.status = PsychoJS.Status.STARTED;
      IntroButton2Mouse.mouseClock.reset();
      prevButtonState = IntroButton2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (IntroButton2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = IntroButton2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = IntroButton2Mouse.getPos();
          IntroButton2Mouse.x.push(_mouseXYs[0]);
          IntroButton2Mouse.y.push(_mouseXYs[1]);
          IntroButton2Mouse.leftButton.push(_mouseButtons[0]);
          IntroButton2Mouse.midButton.push(_mouseButtons[1]);
          IntroButton2Mouse.rightButton.push(_mouseButtons[2]);
          IntroButton2Mouse.time.push(IntroButton2Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [IntroButton2]) {
            if (obj.contains(IntroButton2Mouse)) {
              gotValidClick = true;
              IntroButton2Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroExComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroExRoutineEnd() {
  return async function () {
    //------Ending Routine 'IntroEx'-------
    for (const thisComponent of IntroExComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_intro.keys', key_resp_intro.keys);
    if (typeof key_resp_intro.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_intro.rt', key_resp_intro.rt);
        }
    
    key_resp_intro.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    // left and right button are enough for this experiment
    if (IntroButton1Mouse.x) {  psychoJS.experiment.addData('IntroButton1Mouse.x', IntroButton1Mouse.x[0])};
    if (IntroButton1Mouse.y) {  psychoJS.experiment.addData('IntroButton1Mouse.y', IntroButton1Mouse.y[0])};
    if (IntroButton1Mouse.leftButton) {  psychoJS.experiment.addData('IntroButton1Mouse.leftButton', IntroButton1Mouse.leftButton[0])};
    if (IntroButton1Mouse.midButton) {  psychoJS.experiment.addData('IntroButton1Mouse.midButton', IntroButton1Mouse.midButton[0])};
    if (IntroButton1Mouse.rightButton) {  psychoJS.experiment.addData('IntroButton1Mouse.rightButton', IntroButton1Mouse.rightButton[0])};
    if (IntroButton1Mouse.time) {  psychoJS.experiment.addData('IntroButton1Mouse.time', IntroButton1Mouse.time[0])};
    if (IntroButton1Mouse.clicked_name) {  psychoJS.experiment.addData('IntroButton1Mouse.clicked_name', IntroButton1Mouse.clicked_name[0])};
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // left and right button are enough for this experiment
    if (IntroButton2Mouse.x) {  psychoJS.experiment.addData('IntroButton2Mouse.x', IntroButton2Mouse.x[0])};
    if (IntroButton2Mouse.y) {  psychoJS.experiment.addData('IntroButton2Mouse.y', IntroButton2Mouse.y[0])};
    if (IntroButton2Mouse.leftButton) {  psychoJS.experiment.addData('IntroButton2Mouse.leftButton', IntroButton2Mouse.leftButton[0])};
    if (IntroButton2Mouse.midButton) {  psychoJS.experiment.addData('IntroButton2Mouse.midButton', IntroButton2Mouse.midButton[0])};
    if (IntroButton2Mouse.rightButton) {  psychoJS.experiment.addData('IntroButton2Mouse.rightButton', IntroButton2Mouse.rightButton[0])};
    if (IntroButton2Mouse.time) {  psychoJS.experiment.addData('IntroButton2Mouse.time', IntroButton2Mouse.time[0])};
    if (IntroButton2Mouse.clicked_name) {  psychoJS.experiment.addData('IntroButton2Mouse.clicked_name', IntroButton2Mouse.clicked_name[0])};
    
    // the Routine "IntroEx" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_target_allKeys;
var TargetsComponents;
RandomFiller = [0,1,2,3,4,5]; 
ShuffledRandomFiller = shuffle(RandomFiller); //randomizing the fillers and ensuring that each of them only occur once
function TargetsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Targets'-------
    t = 0;
    TargetsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (trials_2.thisN === 5) { //after 6 target items there is a filler
            wordFiller = ShuffledRandomFiller[0]
        } else if (trials_2.thisN === 11) { // after another 6 target items there is a filler
                wordFiller = ShuffledRandomFiller[1]
            } else if (trials_2.thisN === 17) {  // after another 6 target items there is a filler
                    wordFiller = ShuffledRandomFiller[2]
                } else if (trials_2.thisN === 23) {  // after another 6 target items there is a filler
                        wordFiller = ShuffledRandomFiller[3]
                    } else if (trials_2.thisN === 29) {  // after another 6 target items there is a filler
                            wordFiller = ShuffledRandomFiller[4]
                        } else if (trials_2.thisN === 35) { // after another 6 target items there is a filler
                                wordFiller = ShuffledRandomFiller[5]
                            }
    rnnumItem = getRandomInt(2); // getting a random number to determine in what order the texts in the two buttons appear
    psychoJS.experiment.addData('RandomNumberItem', rnnumItem); //save the random number to be able to determine which button participant clicked on
    TargetSentence1.setText(wholeSentence);
    TargetsImage1.setImage(Pic1);
    key_resp_target.keys = undefined;
    key_resp_target.rt = undefined;
    _key_resp_target_allKeys = [];
    TargetsImage2.setImage(Pic2);
    TargetButton1Text.setText(((rnnumItem === 1) ? pl1 : pl2)); //using the random number from above to determine button order
    // setup some python lists for storing info about the TargetButton1Mouse
    // current position of the mouse: (not really necessary, just leftButton and rightButton)
    TargetButton1Mouse.x = [];
    TargetButton1Mouse.y = [];
    TargetButton1Mouse.leftButton = [];
    TargetButton1Mouse.midButton = [];
    TargetButton1Mouse.rightButton = [];
    TargetButton1Mouse.time = [];
    TargetButton1Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    TargetButton2Text.setText(((rnnumItem === 1) ? pl2 : pl1)); //using the random number from above to determine the order of the two buttons
    // setup some python lists for storing info about the TargetButton2Mouse
    // current position of the mouse: (info from leftButton and rightButton is sufficient for this experiment)
    TargetButton2Mouse.x = [];
    TargetButton2Mouse.y = [];
    TargetButton2Mouse.leftButton = [];
    TargetButton2Mouse.midButton = [];
    TargetButton2Mouse.rightButton = [];
    TargetButton2Mouse.time = [];
    TargetButton2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    TargetsComponents = [];
    TargetsComponents.push(TargetSentence1);
    TargetsComponents.push(TargetsImage1);
    TargetsComponents.push(target_continue);
    TargetsComponents.push(key_resp_target);
    TargetsComponents.push(TargetsSentence2);
    TargetsComponents.push(TargetsImage2);
    TargetsComponents.push(TargetButton1);
    TargetsComponents.push(TargetButton1Text);
    TargetsComponents.push(TargetButton1Mouse);
    TargetsComponents.push(TargetButton2);
    TargetsComponents.push(TargetButton2Text);
    TargetsComponents.push(TargetButton2Mouse);
    
    for (const thisComponent of TargetsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TargetsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Targets'-------
    // get current time
    t = TargetsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TargetSentence1* updates
    if (t >= 0.5 && TargetSentence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetSentence1.tStart = t;  // (not accounting for frame time here)
      TargetSentence1.frameNStart = frameN;  // exact frame index
      
      TargetSentence1.setAutoDraw(true);
    }

    if (TargetSentence1.status === PsychoJS.Status.STARTED && Boolean((key_resp_target.keys == 'space'))) {
      TargetSentence1.setAutoDraw(false);
    }
    
    // *TargetsImage1* updates
    if (t >= 0.5 && TargetsImage1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetsImage1.tStart = t;  // (not accounting for frame time here)
      TargetsImage1.frameNStart = frameN;  // exact frame index
      
      TargetsImage1.setAutoDraw(true);
    }

    if (TargetsImage1.status === PsychoJS.Status.STARTED && Boolean((key_resp_target.keys == 'space'))) {
      TargetsImage1.setAutoDraw(false);
    }
    
    // *target_continue* updates
    if (t >= 0.5 && target_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_continue.tStart = t;  // (not accounting for frame time here)
      target_continue.frameNStart = frameN;  // exact frame index
      
      target_continue.setAutoDraw(true);
    }

    if (target_continue.status === PsychoJS.Status.STARTED && Boolean((key_resp_target.keys == 'space'))) {
      target_continue.setAutoDraw(false);
    }
    
    // *key_resp_target* updates
    if (t >= 0.5 && key_resp_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_target.tStart = t;  // (not accounting for frame time here)
      key_resp_target.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_target.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_target.clearEvents(); });
    }

    if (key_resp_target.status === PsychoJS.Status.STARTED && Boolean((key_resp_target.keys == 'space'))) {
      key_resp_target.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_target.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_target.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_target_allKeys = _key_resp_target_allKeys.concat(theseKeys);
      if (_key_resp_target_allKeys.length > 0) {
        key_resp_target.keys = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].name;  // just the last key pressed
        key_resp_target.rt = _key_resp_target_allKeys[_key_resp_target_allKeys.length - 1].rt;
      }
    }
    
    
    // *TargetsSentence2* updates
    if (((key_resp_target.keys == 'space')) && TargetsSentence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetsSentence2.tStart = t;  // (not accounting for frame time here)
      TargetsSentence2.frameNStart = frameN;  // exact frame index
      
      TargetsSentence2.setAutoDraw(true);
    }

    
    // *TargetsImage2* updates
    if (((key_resp_target.keys == 'space')) && TargetsImage2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetsImage2.tStart = t;  // (not accounting for frame time here)
      TargetsImage2.frameNStart = frameN;  // exact frame index
      
      TargetsImage2.setAutoDraw(true);
    }

    
    // *TargetButton1* updates
    if (((key_resp_target.keys == 'space')) && TargetButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton1.tStart = t;  // (not accounting for frame time here)
      TargetButton1.frameNStart = frameN;  // exact frame index
      
      TargetButton1.setAutoDraw(true);
    }

    
    // *TargetButton1Text* updates
    if (((key_resp_target.keys == 'space')) && TargetButton1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton1Text.tStart = t;  // (not accounting for frame time here)
      TargetButton1Text.frameNStart = frameN;  // exact frame index
      
      TargetButton1Text.setAutoDraw(true);
    }

    // *TargetButton1Mouse* updates
    if (((key_resp_target.keys == 'space')) && TargetButton1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton1Mouse.tStart = t;  // (not accounting for frame time here)
      TargetButton1Mouse.frameNStart = frameN;  // exact frame index
      
      TargetButton1Mouse.status = PsychoJS.Status.STARTED;
      TargetButton1Mouse.mouseClock.reset();
      prevButtonState = TargetButton1Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (TargetButton1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = TargetButton1Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = TargetButton1Mouse.getPos();
          TargetButton1Mouse.x.push(_mouseXYs[0]);
          TargetButton1Mouse.y.push(_mouseXYs[1]);
          TargetButton1Mouse.leftButton.push(_mouseButtons[0]);
          TargetButton1Mouse.midButton.push(_mouseButtons[1]);
          TargetButton1Mouse.rightButton.push(_mouseButtons[2]);
          TargetButton1Mouse.time.push(TargetButton1Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [TargetButton1]) {
            if (obj.contains(TargetButton1Mouse)) {
              gotValidClick = true;
              TargetButton1Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *TargetButton2* updates
    if (((key_resp_target.keys == 'space')) && TargetButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton2.tStart = t;  // (not accounting for frame time here)
      TargetButton2.frameNStart = frameN;  // exact frame index
      
      TargetButton2.setAutoDraw(true);
    }

    
    // *TargetButton2Text* updates
    if (((key_resp_target.keys == 'space')) && TargetButton2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton2Text.tStart = t;  // (not accounting for frame time here)
      TargetButton2Text.frameNStart = frameN;  // exact frame index
      
      TargetButton2Text.setAutoDraw(true);
    }

    // *TargetButton2Mouse* updates
    if (((key_resp_target.keys == 'space')) && TargetButton2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TargetButton2Mouse.tStart = t;  // (not accounting for frame time here)
      TargetButton2Mouse.frameNStart = frameN;  // exact frame index
      
      TargetButton2Mouse.status = PsychoJS.Status.STARTED;
      TargetButton2Mouse.mouseClock.reset();
      prevButtonState = TargetButton2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (TargetButton2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = TargetButton2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = TargetButton2Mouse.getPos();
          TargetButton2Mouse.x.push(_mouseXYs[0]);
          TargetButton2Mouse.y.push(_mouseXYs[1]);
          TargetButton2Mouse.leftButton.push(_mouseButtons[0]);
          TargetButton2Mouse.midButton.push(_mouseButtons[1]);
          TargetButton2Mouse.rightButton.push(_mouseButtons[2]);
          TargetButton2Mouse.time.push(TargetButton2Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [TargetButton2]) {
            if (obj.contains(TargetButton2Mouse)) {
              gotValidClick = true;
              TargetButton2Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TargetsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TargetsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Targets'-------
    for (const thisComponent of TargetsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_target.keys', key_resp_target.keys);
    if (typeof key_resp_target.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_target.rt', key_resp_target.rt);
        }
    
    key_resp_target.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (TargetButton1Mouse.x) {  psychoJS.experiment.addData('TargetButton1Mouse.x', TargetButton1Mouse.x[0])};
    if (TargetButton1Mouse.y) {  psychoJS.experiment.addData('TargetButton1Mouse.y', TargetButton1Mouse.y[0])};
    if (TargetButton1Mouse.leftButton) {  psychoJS.experiment.addData('TargetButton1Mouse.leftButton', TargetButton1Mouse.leftButton[0])};
    if (TargetButton1Mouse.midButton) {  psychoJS.experiment.addData('TargetButton1Mouse.midButton', TargetButton1Mouse.midButton[0])};
    if (TargetButton1Mouse.rightButton) {  psychoJS.experiment.addData('TargetButton1Mouse.rightButton', TargetButton1Mouse.rightButton[0])};
    if (TargetButton1Mouse.time) {  psychoJS.experiment.addData('TargetButton1Mouse.time', TargetButton1Mouse.time[0])};
    if (TargetButton1Mouse.clicked_name) {  psychoJS.experiment.addData('TargetButton1Mouse.clicked_name', TargetButton1Mouse.clicked_name[0])};
    
    // store data for psychoJS.experiment (ExperimentHandler), technically leftButton and rightButton are enough for this experiment
    if (TargetButton2Mouse.x) {  psychoJS.experiment.addData('TargetButton2Mouse.x', TargetButton2Mouse.x[0])};
    if (TargetButton2Mouse.y) {  psychoJS.experiment.addData('TargetButton2Mouse.y', TargetButton2Mouse.y[0])};
    if (TargetButton2Mouse.leftButton) {  psychoJS.experiment.addData('TargetButton2Mouse.leftButton', TargetButton2Mouse.leftButton[0])};
    if (TargetButton2Mouse.midButton) {  psychoJS.experiment.addData('TargetButton2Mouse.midButton', TargetButton2Mouse.midButton[0])};
    if (TargetButton2Mouse.rightButton) {  psychoJS.experiment.addData('TargetButton2Mouse.rightButton', TargetButton2Mouse.rightButton[0])};
    if (TargetButton2Mouse.time) {  psychoJS.experiment.addData('TargetButton2Mouse.time', TargetButton2Mouse.time[0])};
    if (TargetButton2Mouse.clicked_name) {  psychoJS.experiment.addData('TargetButton2Mouse.clicked_name', TargetButton2Mouse.clicked_name[0])};
    
    // the Routine "Targets" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_filler_allKeys;
var FillersComponents;
function FillersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Fillers'-------
    t = 0;
    FillersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if (trials_2.thisN == 5 || trials_2.thisN == 11 || trials_2.thisN == 17 || trials_2.thisN == 23 || trials_2.thisN == 29 || trials_2.thisN == 35) { // determining that after every 6 target items there is a filler item
        continueRoutine = true
        } else {continueRoutine = false}; 
    rnnumFiller = getRandomInt(2); //get a random number that is either 0 or 1 to determine the order of the two buttons
    psychoJS.experiment.addData('RandomNumberFiller', rnnumFiller); // save the random value to be able to interpret what text was on the button that was clicked by the participant
    FillerExSentence1.setText(wholeSentenceFiller);
    FillerImage1.setImage(Pic1Filler);
    key_resp_filler.keys = undefined;
    key_resp_filler.rt = undefined;
    _key_resp_filler_allKeys = [];
    FillerExImage2.setImage(Pic2Filler);
    FillerButton1Text.setText(((rnnumFiller === 1) ? pl1Filler : pl2Filler)); //use random number to determine which option is displayed on the first button
    // setup some python lists for storing info about the FillerButton1Mouse
    // current position of the mouse:
    FillerButton1Mouse.x = [];
    FillerButton1Mouse.y = [];
    FillerButton1Mouse.leftButton = [];
    FillerButton1Mouse.midButton = [];
    FillerButton1Mouse.rightButton = [];
    FillerButton1Mouse.time = [];
    FillerButton1Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    FillerButton2Text.setText(((rnnumFiller === 1) ? pl2Filler : pl1Filler)); //use random number to determine which response option is displayed on the second button
    // setup some python lists for storing info about the FillerButton2Mouse
    // current position of the mouse:
    FillerButton2Mouse.x = [];
    FillerButton2Mouse.y = [];
    FillerButton2Mouse.leftButton = [];
    FillerButton2Mouse.midButton = [];
    FillerButton2Mouse.rightButton = [];
    FillerButton2Mouse.time = [];
    FillerButton2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    FillersComponents = [];
    FillersComponents.push(FillerExSentence1);
    FillersComponents.push(FillerImage1);
    FillersComponents.push(Filler_continue);
    FillersComponents.push(key_resp_filler);
    FillersComponents.push(FillerExSentence2);
    FillersComponents.push(FillerExImage2);
    FillersComponents.push(FillerButton1);
    FillersComponents.push(FillerButton1Text);
    FillersComponents.push(FillerButton1Mouse);
    FillersComponents.push(FillerButton2);
    FillersComponents.push(FillerButton2Text);
    FillersComponents.push(FillerButton2Mouse);
    
    for (const thisComponent of FillersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FillersRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Fillers'-------
    // get current time
    t = FillersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *FillerExSentence1* updates
    if (t >= 0.5 && FillerExSentence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerExSentence1.tStart = t;  // (not accounting for frame time here)
      FillerExSentence1.frameNStart = frameN;  // exact frame index
      
      FillerExSentence1.setAutoDraw(true);
    }

    if (FillerExSentence1.status === PsychoJS.Status.STARTED && Boolean((key_resp_filler.keys == 'space'))) {
      FillerExSentence1.setAutoDraw(false);
    }
    
    // *FillerImage1* updates
    if (t >= 0.5 && FillerImage1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerImage1.tStart = t;  // (not accounting for frame time here)
      FillerImage1.frameNStart = frameN;  // exact frame index
      
      FillerImage1.setAutoDraw(true);
    }

    if (FillerImage1.status === PsychoJS.Status.STARTED && Boolean((key_resp_filler.keys == 'space'))) {
      FillerImage1.setAutoDraw(false);
    }
    
    // *Filler_continue* updates
    if (t >= 0.5 && Filler_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Filler_continue.tStart = t;  // (not accounting for frame time here)
      Filler_continue.frameNStart = frameN;  // exact frame index
      
      Filler_continue.setAutoDraw(true);
    }

    if (Filler_continue.status === PsychoJS.Status.STARTED && Boolean((key_resp_filler.keys == 'space'))) {
      Filler_continue.setAutoDraw(false);
    }
    
    // *key_resp_filler* updates
    if (t >= 0.5 && key_resp_filler.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_filler.tStart = t;  // (not accounting for frame time here)
      key_resp_filler.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_filler.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_filler.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_filler.clearEvents(); });
    }

    if (key_resp_filler.status === PsychoJS.Status.STARTED && Boolean((key_resp_filler.keys == 'space'))) {
      key_resp_filler.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_filler.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_filler.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_filler_allKeys = _key_resp_filler_allKeys.concat(theseKeys);
      if (_key_resp_filler_allKeys.length > 0) {
        key_resp_filler.keys = _key_resp_filler_allKeys[_key_resp_filler_allKeys.length - 1].name;  // just the last key pressed
        key_resp_filler.rt = _key_resp_filler_allKeys[_key_resp_filler_allKeys.length - 1].rt;
      }
    }
    
    
    // *FillerExSentence2* updates
    if (((key_resp_filler.keys == 'space')) && FillerExSentence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerExSentence2.tStart = t;  // (not accounting for frame time here)
      FillerExSentence2.frameNStart = frameN;  // exact frame index
      
      FillerExSentence2.setAutoDraw(true);
    }

    
    // *FillerExImage2* updates
    if (((key_resp_filler.keys == 'space')) && FillerExImage2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerExImage2.tStart = t;  // (not accounting for frame time here)
      FillerExImage2.frameNStart = frameN;  // exact frame index
      
      FillerExImage2.setAutoDraw(true);
    }

    
    // *FillerButton1* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton1.tStart = t;  // (not accounting for frame time here)
      FillerButton1.frameNStart = frameN;  // exact frame index
      
      FillerButton1.setAutoDraw(true);
    }

    
    // *FillerButton1Text* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton1Text.tStart = t;  // (not accounting for frame time here)
      FillerButton1Text.frameNStart = frameN;  // exact frame index
      
      FillerButton1Text.setAutoDraw(true);
    }

    // *FillerButton1Mouse* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton1Mouse.tStart = t;  // (not accounting for frame time here)
      FillerButton1Mouse.frameNStart = frameN;  // exact frame index
      
      FillerButton1Mouse.status = PsychoJS.Status.STARTED;
      FillerButton1Mouse.mouseClock.reset();
      prevButtonState = FillerButton1Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (FillerButton1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = FillerButton1Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = FillerButton1Mouse.getPos();
          FillerButton1Mouse.x.push(_mouseXYs[0]);
          FillerButton1Mouse.y.push(_mouseXYs[1]);
          FillerButton1Mouse.leftButton.push(_mouseButtons[0]);
          FillerButton1Mouse.midButton.push(_mouseButtons[1]);
          FillerButton1Mouse.rightButton.push(_mouseButtons[2]);
          FillerButton1Mouse.time.push(FillerButton1Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [FillerButton1]) {
            if (obj.contains(FillerButton1Mouse)) {
              gotValidClick = true;
              FillerButton1Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *FillerButton2* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton2.tStart = t;  // (not accounting for frame time here)
      FillerButton2.frameNStart = frameN;  // exact frame index
      
      FillerButton2.setAutoDraw(true);
    }

    
    // *FillerButton2Text* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton2Text.tStart = t;  // (not accounting for frame time here)
      FillerButton2Text.frameNStart = frameN;  // exact frame index
      
      FillerButton2Text.setAutoDraw(true);
    }

    // *FillerButton2Mouse* updates
    if (((key_resp_filler.keys == 'space')) && FillerButton2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FillerButton2Mouse.tStart = t;  // (not accounting for frame time here)
      FillerButton2Mouse.frameNStart = frameN;  // exact frame index
      
      FillerButton2Mouse.status = PsychoJS.Status.STARTED;
      FillerButton2Mouse.mouseClock.reset();
      prevButtonState = FillerButton2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (FillerButton2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = FillerButton2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = FillerButton2Mouse.getPos();
          FillerButton2Mouse.x.push(_mouseXYs[0]);
          FillerButton2Mouse.y.push(_mouseXYs[1]);
          FillerButton2Mouse.leftButton.push(_mouseButtons[0]);
          FillerButton2Mouse.midButton.push(_mouseButtons[1]);
          FillerButton2Mouse.rightButton.push(_mouseButtons[2]);
          FillerButton2Mouse.time.push(FillerButton2Mouse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [FillerButton2]) {
            if (obj.contains(FillerButton2Mouse)) {
              gotValidClick = true;
              FillerButton2Mouse.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FillersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FillersRoutineEnd() {
  return async function () {
    //------Ending Routine 'Fillers'-------
    for (const thisComponent of FillersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_filler.keys', key_resp_filler.keys);
    if (typeof key_resp_filler.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_filler.rt', key_resp_filler.rt);
        }
    
    key_resp_filler.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (FillerButton1Mouse.x) {  psychoJS.experiment.addData('FillerButton1Mouse.x', FillerButton1Mouse.x[0])};
    if (FillerButton1Mouse.y) {  psychoJS.experiment.addData('FillerButton1Mouse.y', FillerButton1Mouse.y[0])};
    if (FillerButton1Mouse.leftButton) {  psychoJS.experiment.addData('FillerButton1Mouse.leftButton', FillerButton1Mouse.leftButton[0])};
    if (FillerButton1Mouse.midButton) {  psychoJS.experiment.addData('FillerButton1Mouse.midButton', FillerButton1Mouse.midButton[0])};
    if (FillerButton1Mouse.rightButton) {  psychoJS.experiment.addData('FillerButton1Mouse.rightButton', FillerButton1Mouse.rightButton[0])};
    if (FillerButton1Mouse.time) {  psychoJS.experiment.addData('FillerButton1Mouse.time', FillerButton1Mouse.time[0])};
    if (FillerButton1Mouse.clicked_name) {  psychoJS.experiment.addData('FillerButton1Mouse.clicked_name', FillerButton1Mouse.clicked_name[0])};
    
    // store data for psychoJS.experiment (ExperimentHandler) (again leftButton and rightButton would safice for this experiment)
    if (FillerButton2Mouse.x) {  psychoJS.experiment.addData('FillerButton2Mouse.x', FillerButton2Mouse.x[0])};
    if (FillerButton2Mouse.y) {  psychoJS.experiment.addData('FillerButton2Mouse.y', FillerButton2Mouse.y[0])};
    if (FillerButton2Mouse.leftButton) {  psychoJS.experiment.addData('FillerButton2Mouse.leftButton', FillerButton2Mouse.leftButton[0])};
    if (FillerButton2Mouse.midButton) {  psychoJS.experiment.addData('FillerButton2Mouse.midButton', FillerButton2Mouse.midButton[0])};
    if (FillerButton2Mouse.rightButton) {  psychoJS.experiment.addData('FillerButton2Mouse.rightButton', FillerButton2Mouse.rightButton[0])};
    if (FillerButton2Mouse.time) {  psychoJS.experiment.addData('FillerButton2Mouse.time', FillerButton2Mouse.time[0])};
    if (FillerButton2Mouse.clicked_name) {  psychoJS.experiment.addData('FillerButton2Mouse.clicked_name', FillerButton2Mouse.clicked_name[0])};
    
    // the Routine "Fillers" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_thanks_allKeys;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_thanks.keys = undefined;
    key_resp_thanks.rt = undefined;
    _key_resp_thanks_allKeys = [];
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thankyou);
    thanksComponents.push(key_resp_thanks);
    thanksComponents.push(thankyou_continue);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'thanks'-------
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankyou* updates
    if (t >= 0.5 && thankyou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou.tStart = t;  // (not accounting for frame time here)
      thankyou.frameNStart = frameN;  // exact frame index
      
      thankyou.setAutoDraw(true);
    }

    
    // *key_resp_thanks* updates
    if (t >= 0.5 && key_resp_thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_thanks.tStart = t;  // (not accounting for frame time here)
      key_resp_thanks.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_thanks.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thanks.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thanks.clearEvents(); });
    }

    if (key_resp_thanks.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_thanks.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_thanks_allKeys = _key_resp_thanks_allKeys.concat(theseKeys);
      if (_key_resp_thanks_allKeys.length > 0) {
        key_resp_thanks.keys = _key_resp_thanks_allKeys[_key_resp_thanks_allKeys.length - 1].name;  // just the last key pressed
        key_resp_thanks.rt = _key_resp_thanks_allKeys[_key_resp_thanks_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *thankyou_continue* updates
    if (t >= 0.5 && thankyou_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou_continue.tStart = t;  // (not accounting for frame time here)
      thankyou_continue.frameNStart = frameN;  // exact frame index
      
      thankyou_continue.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_thanks.keys', key_resp_thanks.keys);
    if (typeof key_resp_thanks.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_thanks.rt', key_resp_thanks.rt);
        routineTimer.reset();
        }
    
    key_resp_thanks.stop();
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
