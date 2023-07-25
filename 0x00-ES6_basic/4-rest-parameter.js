export default function returnHowManyArguments(..par) {
	let total = 0;
  	for (const arg of par) {
    		total += 1;
  		}
  	return total;

}
