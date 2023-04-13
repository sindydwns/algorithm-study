/**
 * @param {string} pattern 
 * @param {string} filename
 */
function main(pattern, filename) {
	let pos = 0;
	while (pos < filename.length && (pattern[pos] == '?' || pattern[pos] == "*"))
		pos++;
	if (pos == pattern.length)
		return pos == filename.length;
	if (pattern[pos] == "*")
		for (let skip = 0; pos + skip <= filename.length; skip++)
			if (main(pattern.substring(pos + 1), filename.substring(pos + skip)))
				return true;
	return false;
}