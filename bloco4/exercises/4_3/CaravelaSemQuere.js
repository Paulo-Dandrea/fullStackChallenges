let n = 20;

for ( let y = 0 ; y < n ; y += 1) {

         
            for ( let x = 0 ; x < y ; x += 1){
                for (let z = n; z > y; z -= 1){
                      process.stdout.write(' ');
                }
            process.stdout.write ('o');
            }
        
            
            
    process.stdout.write('\n');
}


// process.stdout.write("Hello, World");
// process.stdout.clearLine();
// process.stdout.cursorTo(0);
// process.stdout.write("\n"); // end the line