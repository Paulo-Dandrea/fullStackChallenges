/* 
function fatorial(numero) {
	if(numero<=1) {
    	return 1
    } else {
    	return numero * fatorial(numero - 1)
    }
}
*/
f = (n) => n <= 1 ? 1 : n * f(n-1)

