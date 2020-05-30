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
//25
function task25(a, b, c) {
    if(a + b > c && b + c > a && c + a > b)
        return "y = 1"
    else 
        return "y = 0"
}
task25(3, 4, 5);
//38
function task38(a, b, c, d) {
    if(d/c == c/b && c/b == b/a)
        return true
    else
        return false
} 
//45
function task45(x, y) {
    if(x * x + y * y <= 1 && y - x > 0 && y + x > 0)
        return 7 * x * x + 2
    else 
        return 0
}
//59
function task59(n) {
    let x = [];
    x[0] = n % 10;
    x[1] = (n - x[0]) / 10 % 10;
    x[2] = (n - x[1] * 10 - x[0]) / 100;
    let swapp;
    do {
        swapp = false;
        for (var i=0; i < x.length-1; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
    return {x};
}