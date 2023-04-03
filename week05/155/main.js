let n;
const cnt = 10;
const areFriends = Array(cnt).fill().map(x => Array(cnt).fill(false));
// taken[i] : i번째	학생이 짝을 찾았다면 true 그렇지 않으면 false
function countPairings(taken) {
	
	let firstFree = -1;
	for (let i = 0; i < n; i++) {
		if (!taken[i]) {
			firstFree = i;
			break;
		}
	}

	// 기저
	if (firstFree == -1) return 1;

	let res = 0;
	for (let pairWith = firstFree + 1; pairWith < n; pairWith++) {
		if (!taken[pairWith] && areFriends[firstFree][pairWith]) {
			taken[firstFree] = taken[pairWith] = true;
			res += countPairings(taken);
			taken[firstFree] = taken[pairWith] = false;
		}
	}
	return res;
}