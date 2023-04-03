/**
 * 모든 경우의 수 출력하기
 * @param {number} n 
 * @param {Array<number>} picked 
 * @param {number} toPick 
 */
function pick(n, picked, toPick) {
	if (toPick.length === 0) { console.log(picked); return; }
	let smallest = picked.length === 0 ? 0 : picked[picked.length - 1];
	for (let next = smallest; next < n; ++next) {
		picked.push(next);
		pick(n, picked, toPick - 1);
		picked.pop();
	}
}