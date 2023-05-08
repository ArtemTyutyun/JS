Array.prototype.pow = function (n) {
  return this.map((x) => Math.pow(x, n));
};

Function.prototype.defer = function (n) {
  setTimeout(this, n);
};

const arr = [1, 2, 3];
arr.pow(2).forEach((x) => console.log(x));

function a() {
  console.log("test");
}
a.defer(1000);
