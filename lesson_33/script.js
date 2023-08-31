Array.prototype.pow = function (n) {
    return this.map(item => Math.pow(item, n));
};

const arr = [1, 2, 3];
const poweredArr = arr.pow(2);

console.log(poweredArr);

Function.prototype.defer = function (n) {
    setTimeout(this, n);
};

function a() {
    console.log("test");
}

a.defer(1000);
