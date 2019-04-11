
function a(N){
    for(var i=N;i>=1;i--){
        var s="";
        for(var j=1;j<=i;j++){
            s=s+j;
        }
        
        for(var k=1 ;k<=(N-i);k++){
            s=s+"*";
        }
        
        console.log(s+s.split("").reverse().join(""));
    }
        
}

a(10)