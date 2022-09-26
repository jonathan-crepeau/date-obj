// console.log('This that pink venom.');

// const date = new Date();

// NOTE - logs the same string representation of the current date & time. The result of new Date() is the same as executing new Date().toString():
// console.log(new Date());

// Checking that its returning a new Date object:
// console.log(typeof date);

// Without the 'new' keyword to call Date as a constructor, you can see the Date.now() method returns an epoch number (current time in ms), with the type being a number instead of a date object:
// const date2 = Date.now()
// console.log(typeof date2)


// SECTION

const augDate = new Date(1659337200*1000);
// console.log(augDate)
// console.log(augDate.toISOString());

const currentDate = new Date();
console.log(currentDate.getTimezoneOffset())



// SECTION Intl.DateTimeFormat

options = { hour: 'numeric', minute: 'numeric', timeZone: 'America/New_York'}
const todayDate = new Date();
console.log(todayDate);
const timeZoneDate = new Intl.DateTimeFormat('en-US', options).format(todayDate);
console.log(timeZoneDate)