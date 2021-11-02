//event function
var cel=document.getElementById("cel");
var fah=document.getElementById("fah");

cel.addEventListener('input' ,function(){     //celsius to fahrehnhite
   let c = this.value;                        //input value of celsius is stored in c
   let f = (c * 9/5) + 32 ;                   //convert cel into fah and stored in f 
   fah.value=f;                               
});

fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    cel.value=c;

});
