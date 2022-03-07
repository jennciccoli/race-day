let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

if (registeredEarly && runnersAge > 18){
  console.log(`The race will begin at 9:30 AM. Your race number is: ${raceNumber + 1000}.`);
} else if (!registeredEarly && runnersAge > 18){
  console.log(`The race will begin at 11:00 AM. Your race number is: ${raceNumber}.`);
} else if (runnersAge < 18){
  console.log(`The race will begin at 12:30 PM. Your race number is: ${raceNumber}.`);
} else {
  console.log('Please see the registration desk. Thank you.');
}
