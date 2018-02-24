module.exports = function solveEquation(equation) {
  console.log(equation);
    var a,b,c,D,x=[];
    //Todo: prettier regexp
    equation = equation.replace( "* x^2", "" ).replace( "* x", "" ).replace( /[+]\s/g, "+" ).replace( /[-]\s/g, "-" ).split(/\s/g);
    a = +equation[0];
    b = +equation[2];
    c = +equation[4];
    D = b*b-4*a*c;
    if(D >= 0){
        x[0] = Math.round((-b + Math.sqrt(D))/(2*a));
        x[1] = Math.round((-b - Math.sqrt(D))/(2*a));
        return x.sort((a,b) => a - b);
    }else return null;

}
