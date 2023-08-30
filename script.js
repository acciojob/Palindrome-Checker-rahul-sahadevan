// complete the given function

function palindrome(str){
	let i =0;
	let j = str.length;

	while(i <= j){
		if(s[i] != s[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;

}
module.exports = palindrome
