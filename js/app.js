console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
   const middleEarth = document.createElement('section');
   middleEarth.setAttribute('id', 'middle-earth');
   
	// 2. use a for loop to iterate over the lands array that does the following:
   for (let i = 0; i <lands.length; i++) {
       
     //   2a. creates an article tag (there should be one for each land when the loop is done)
	const article = document.createElement('article');
	//   2b. gives each land article an `id` tag of the corresponding land name
     article.setAttribute('id', land); {

   
	//   2c. includes an h1 with the name of the land inside each land article
      const h1 = document.createElement('h1');
	  h1.innerText = lands;

	
	//   2d. appends each land to the middle-earth section
     article.appendChild(h1);
	 middleEarth.appendChild('article');
   }
	// 3. append the section to the body of the DOM.
	body.appendChild(section);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
   
	// give each hobbit a class of `hobbit`
    
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id

	const theShire = document.getElementById('The-Shire');
    const ul = document.createElement('ul');

    hobbits.forEach(function(hobbit) {
		const li = document.createElement('li');
	})
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
      const div = document.createElement('div');
	  div.setAttribute('id', 'the-ring');
	// give the div a class of `'magic-imbued-jewelry'`
     div.setAttribute('class', 'magic-imbued-jewelry');
	// add the ring as a child of `Frodo`
      frodo.appendChild('div');
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
    const baddiesArr = document.getElementById('article:nth-child(3)');
	const ul = document.createElement('ul')
	// give each of the baddies a class of "baddy"
   const baddies = document.setAttribute('class', baddy)
	// remember to append them to Mordor
	ul.appendChild('Mordor')
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
      const aside = document.createElement('aside');
	  const buddyList = document.createElement('aside');
	  for(let i = 0; i < buddies.length; i++) {
	// put an `unordered list` of the `'buddies'` in the aside
     const buddy = document.createElement('li');
	 buddyList.appendChild(buddy);
}
	
	// insert your aside as a child element of `rivendell`
	aside.appendChild('buddyList');
	rivendell.appendChild('aside');
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	rivendell.appendChild(hobbits);
}
  leaveTheShire();


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	strider.innerText = 'Aragorn';
}
beautifulStranger();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowShip = document.createElement('div');
	theFellowShip.setAttribute('id', 'the-fellowship');
	for(let i = 0; i < fellowshipMembers.length; i++) {
		theFellowShip.appendChild(fellowshipMembers[i]);
	}
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
    rivendell.appendChild(theFellowShip);
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	gandalf.innerText= 'Gandalf the White';
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.border = 'gray';
	gandalf.style.backgroundColor = 'white';
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('the horn of gondor has been blown');
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	theFellowShip.removeChild(boromir);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	mordor.appendChild('frodo');
	mordor.appendChild('sam');
	const mountDoom = document.createElement('div');
	mountDoom.setAttribute('id', 'mount-doom');
	mordor.appendChild(mountDoom);

	// add a div with an id of `'mount-doom'` to `Mordor`
}
   itsDangerousToGoAlone();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const div = document.createElement('div');
	div.setAttribute('id', 'gollum');
	removeRing = frodo.querySelector('#the-ring');
	gollum.appendChild(removeRing);
	const mountDoom = mordor.querySelector('#mount-doom');
	mountDoom.appendChild(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}
   weWantsIt();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	gollum.removeChild(gollum);

	// Move all the `hobbits` back to `the shire`
	for(let i = 0; i < hobbits.length; i++) {
		ulHobbit.appendChild(hobbits[i]);
	}
	theShire.appendChild(ulHobbit);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
