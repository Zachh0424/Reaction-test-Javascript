 
       //here i'll just create a var for my box
       var box = document.getElementById("box");
      
      // var circle = document.getElementById("circle");
      //var triangle = document.getElementById("triangle");
       
       
       //create a var to associate with random shapes
      // var shape;
       
       //create a var to associate random colors
       //var color;
       
       var clickedTime;
       var createdTime;
       var reactionTime;
        //alert(Date.now());
       

        time();

        

     
        function time() {
            
            /*need a random var for time
             *it should be anywhere from 1-5 secs
             *(or 1000-5000 miliseconds)
            */
            var randTime = Math.random();
            randTime=randTime*2000;
            
            
            createdTime=Date.now();
            
                //this will inact a function after a set amount of time
                 setTimeout(function() {

                 //randomly display either a square or a circle
                 if (Math.random() > 0.5) {
                     box.style.borderRadius="100px";
                 }
                 else{
                    box.style.borderRadius="0";
                 }
                 
                  //randomly give position of shape
                 var top = Math.random();
                 var left = Math.random();
                
                top=top*300;
                left=left*500;
                 
                 box.style.top=top+"px";
                 box.style.left=left+"px";
                 
                 
                 
                    box.style.backgroundColor=randColor();
                    //box.style.display=randShape;
                    
                    
                    //display the box at certain time
                    box.style.display="block";
            
                    createdTime=Date.now();
        
                    //this will be set for 3000 milliseconds which = 3 sec.
                }, randTime);
                
        }
       
       
       
       //this function will make the box disappear when clicked
         box.onclick=function() {
        
        clickedTime=Date.now();
        
        reactionTime=(clickedTime-createdTime)/1000;
        
        document.getElementById("time").innerHTML=reactionTime;
        
        this.style.display="none";
       
        time();
        
     }
     
     //random color generator
        function randColor() {
           //splits the string of no. & letters into an array
           var letters = '0123456789ABCDEF'.split('');
           var color = '#';
           
           //grabs individual random characters in the letters array index for random color 
           for (var i = 0; i<6; i++){
               color += letters[Math.round(Math.random() * 15)];
           }
           return color;
        }
        
        
     /*
     function randShape(shape){
        
        shape = Math.random();
        shape = shape*3000;
        
        switch (shape) {
            case 1:
                box.style.display="block";
                break;
            case 2:
                circle.style.display="block";
                break;
            case 3:
                traingle.style.display="block";
                break;
        }
        
        return shape;
     }
     */