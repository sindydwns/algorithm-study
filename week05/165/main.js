let n;
const dist = Array(cnt).fill().map(x => Array(cnt).fill(0));
function shortestPath(path, visited, currentLength) {
	if (path.length == n)
		return currentLength + dist[path[0]][path[path.length - 1]];
	let res = Infinity;
	for (let next = 0; next < n; next++) {
		if (visited[next]) continue;
		const here = path[path.length - 1];
		path.push(next);
		visited[next] = true;
		const cand = shortestPath(path, visited, currentLength + dist[here][next]);
		res = min(ret, cand);
		visited[next] = false;
		path.pop();
	}
	return res;
}