


function guessQuote(){
    var text=[`

    <div class="d-flex w-100">
    <div>    <img src="img/13755._UX200_CR0,47,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
    </div> 
       <div class="p-2">
            <p>“A room without books is like a body without a soul.” </p>
        <p>― Marcus Tullius Cicero</p>
        </div>
    </div>
    `,`
    <div class="d-flex w-100">
        <div>    <img src="img/114059._CR0,24,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“A friend is someone who knows all about you and still loves you.” </p>
            <p>― Elbert Hubbard</p>
            </div>
        </div>
    `,` 
    <div class="d-flex w-100">
        <div>    <img src="img/1244._UX200_CR0,40,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“If you tell the truth, you don't have to remember anything.” </p>
            <p>― Mark Twain</p>
            </div>
        </div>
    `,`
    <div class="d-flex w-100">
        <div>    <img src="img/1744830._UX200_CR0,47,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“You've gotta dance like there's nobody watching,
                    Love like you'll never be hurt,
                    Sing like there's nobody listening,
                    And live like it's heaven on earth.”</p>
            <p>― William W. Purkey
            </p>
            </div>
        </div>
    `,`
    
    <div class="d-flex w-100">
        <div>    <img src="img/23924._UX200_CR0,21,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”</p>
            <p>― Martin Luther King Jr.</p>
            </div>
        </div>
    `,`
    <div class="d-flex w-100">
        <div>    <img src="img/259666._UX200_CR0,16,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“You only live once, but if you do it right, once is enough.” </p>
            <p>― Mae West</p>
            </div>
        </div>
    
    `,`
    <div class="d-flex w-100">
        <div>    <img src="img/33394.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” </p>
            <p>― H. Jackson Brown Jr.,</p>
            </div>
        </div>
    `,`
    <div class="d-flex w-100">
        <div>    <img src="img/61105._UX200_CR0,30,200,200_.jpg" class= "rounded-circle"" sty alt="" srcset="">
        </div> 
           <div class="p-2">
                <p>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” </p>
            <p>― Dr. Seuss
            </p>
            </div>
        </div>    
`
]
let result = Object.values(text.reduce((c, v) => {
    c[v] = c[v] || [v, 0];
    c[v][1]++;
    return c;
  },{})).map(o=>({[o[0]] : o[1]}));
 


// Math.floor لتقريب الرقم للاصغر وليس للأكبر والسبب أن عناصر ال Array يبدأ العد فيها من رقم صفر لأنها “Zero Based Index”
//random-->تاخد ارقام من 0-1 . .و
      var user=Math.floor(Math.random()*text.length)
document.getElementById("id").innerHTML=(text[user]);

}


