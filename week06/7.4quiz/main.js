const h = [];
function solve(left, right) {
	if (left == right) return h[left];
	const mid = Math.floor((left + right) / 2);
	let ret = Math.max(solve(left, mid), solve(mid + 1, right));
	const lo = mid; hi = mid+1;
	const height = Math.min(h[lo], h[hi]);
	ret = Math.max(ret, height * 2);
	while (left < lo || hi < right) {
		if (hi < right && (lo == left || h[lo-1] < h[hi + 1])) {
			++h;
			height = Math.min(height, h[hi]);
		} else {
			--lo;
			height = Math.min(height, h[lo]);
		}
		ret = Math.max(ret, height * (hi - lo + 1));
	}
	return ret;
}
