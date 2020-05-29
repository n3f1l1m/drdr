//1
function task1(x, y) {
    return ((y + 1) * (x + (x * x + 1) ** 6 * Math.sin(x * x - 3) - Math.tan(y)));
}
task1(10 , 7);
// 14
function task14(a, b) {
    if(a + b < 3)
        return (Math.atan(a + b)) ** 4;
    else if(a + b > 5)
        return (Math.log(a + b)/Math.log(8)) ** 2;
    else 
        return a ** 15;
}
task14(1, 1);
function task25(a, b, c) {
    if(a + b > c && b + c > a && c + a > b)
        return "y = 1"
    else 
        return "y = 0"
}