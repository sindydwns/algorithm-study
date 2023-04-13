/**
 * @param {string} str
 */
function reverse(str) {
  ++i; // 왜 ++i? 'w' 같은 케이스는 어떻게 처리되나?
  if (str[i] === "b" || str[i] === "w") return [str[i], i];
  let [upperLeft, i0] = reverse(str, i);
  i = i0;
  let [upperRight, i1] = reverse(str, i);
  i = i1;
  let [lowerLeft, i2] = reverse(str, i);
  i = i2;
  let [lowerRight, i3] = reverse(str, i);
  i = i3;
  return [`x${lowerLeft}${lowerRight}${upperLeft}${upperRight}`, i];
}
