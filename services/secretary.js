

function getRandomName(){
  return  [
    getRandAdverb(),
    getRandVerb(),
    getRandAdjective(),
    getRandNoun()
  ].join(' ');
}

function getRandomEventType(){
  return ['Meeting','Appointment','Tasks'][Math.random()*3|0];
};




function daysInMonth(year, month) {
  return new Date(year, month+1, 0).getDate();
}


function eventGenerator (eventsNum){

  let schedule = [];
  for(let i = 0; i< eventsNum; i++ ){
    schedule.push({
      name: getRandomName(),
      type: getRandomEventType()
    });
  }

  return schedule;
}


function generateMonth(year, month, ignoreWeekends){
  let days = daysInMonth(year, month);
  let monthSchedule = {};
  for (let i = 1; i <= days; i++){

    if ( ignoreWeekends ){
      let dayOfWeek = new Date(year, month, i).getDay();
      if ( dayOfWeek !== 0 && dayOfWeek !== 6 )
        monthSchedule[i] = eventGenerator( Math.random()*10|0 );
      else
        monthSchedule[i] = [];
    }
    else
      monthSchedule[i] = eventGenerator( Math.random()*10|0 );
  }
  return monthSchedule;
};


function generateYear(year){
  let yearSchedule = {};
  // months.forEach( (month,i) => {
  //   yearSchedule[month] = generateMonth(year, i, true);
  // })
  for (let i = 0; i < 12; i++)
    yearSchedule[i] = generateMonth(year, i, true);
  return yearSchedule;
}
export { generateYear, generateMonth, eventGenerator }





function getRandAdverb(){
  let adverbs = [
    'appropriately',
    'assertively',
    'authoritatively',
    'collaboratively',
    'compellingly',
    'competently',
    'completely',
    'continually',
    'conveniently',
    'credibly',
    'distinctively',
    'dramatically',
    'dynamically',
    'efficiently',
    'energistically',
    'enthusiastically',
    'fungibly',
    'globally',
    'holisticly',
    'interactively',
    'intrinsically',
    'monotonectally',
    'objectively',
    'phosfluorescently',
    'proactively',
    'professionally',
    'progressively',
    'quickly',
    'rapidiously',
    'seamlessly',
    'synergistically',
    'uniquely'
  ];
  let pick = Math.random()*adverbs.length+1 |0;
  return adverbs[pick];
}


function getRandVerb(){
  let verbs = [
    'actualize',
    'administrate',
    'aggregate',
    'architect',
    'benchmark',
    'brand',
    'build',
    'cloudify',
    'communicate',
    'conceptualize',
    'coordinate',
    'create',
    'cultivate',
    'customize',
    'deliver',
    'deploy',
    'develop',
    'dinintermediate disseminate',
    'drive',
    'embrace',
    'e-enable',
    'empower',
    'enable',
    'engage',
    'engineer',
    'enhance',
    'envisioneer',
    'evisculate',
    'evolve',
    'expedite',
    'exploit',
    'extend'
  ];
  let pick = Math.random()*verbs.length+1 |0;
  return verbs[pick];
}

function getRandAdjective(){
  let adjectives = [
    '24/7',
    '24/365',
    'accurate',
    'adaptive',
    'alternative',
    'an expanded array of',
    'B2B',
    'B2C',
    'backend',
    'backward-compatible',
    'best-of-breed',
    'bleeding-edge',
    'bricks-and-clicks',
    'business',
    'clicks-and-mortar',
    'client-based',
    'client-centered',
    'client-centric',
    'client-focused',
    'cloud-based',
    'cloud-centric',
    'cloudified',
    'collaborative',
    'compelling',
    'competitive',
    'cooperative',
    'corporate',
    'cost effective',
    'covalent',
    'cross functional',
    'cross-media',
    'cross-platform'
  ];
  let pick = Math.random()*adjectives.length+1 |0;
  return adjectives[pick];
}

function getRandNoun(){
  let nouns = [
    'action items',
    'alignments',
    'applications',
    'architectures',
    'bandwidth',
    'benefits',
    'best practices',
    'catalysts for change',
    'channels',
    'clouds',
    'collaboration and idea-sharing',
    'communities',
    'content',
    'convergence',
    'core competencies',
    'customer service',
    'data',
    'deliverables',
    'e-business',
    'e-commerce',
    'e-markets',
    'e-tailers',
    'e-services',
    'experiences',
    'expertise',
    'functionalities',
    'fungibility',
    'growth strategies',
    'human capital',
    'ideas',
    'imperatives',
    'infomediaries',
  ];
  let pick = Math.random()*nouns.length+1 |0;
  return nouns[pick];
}
