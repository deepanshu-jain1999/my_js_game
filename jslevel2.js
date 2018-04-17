var btn = document.getElementById('btn');
btn.addEventListener("click", function(){ main.init();});

document.onkeydown = function(event) {

     keyCode = window.event.keyCode; 
        

        switch(keyCode) {
        
          case 37: 
            if (direction != 'right') {
               direction = 'left';
            }
               break;

          case 39:
            if (direction != 'left') {
              direction = 'right';
            }
              break;

          case 38:
            if (direction != 'down') {
              direction = 'up';       
            }
              break;

          case 40:
            if (direction != 'up') {
              direction = 'down';        
            }
              break;
          }
      }

      


var main = (function () { 
  
  var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);         // body for snake using canvas 
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }




  var item = function(x, y) {
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);       // body for food using canvas
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  

  var drawSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {                                    // creating snake using array 
          snake.push({x:i, y:0});
      }  
  }
    
      var Background = function(){
      ctx.font = "20px Arial white";
      ctx.fillStyle = 'yellow';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'white';                                            // body for background
      ctx.strokeRect(0, 0, w, h);
      ctx.fillStyle = 'black';



      // make obstacle
      ctx.fillRect(0,60,210,20);                                            //  creating obstacles using canvas
      ctx.strokeText("1",100,73);
            
          //1
      ctx.fillRect(70,250,20,160);
      ctx.strokeText("2",80,310); 
          //2
      ctx.fillRect(90,400,280,20);
      ctx.strokeText("4",130,417);
          //3
      ctx.fillRect(210,110,20,240);
      ctx.strokeText("6",215,150);
          //4
      ctx.fillRect(270,30,90,20);
      ctx.strokeText("8",290,43);
          //5
      ctx.fillRect(290,120,60,140);
      ctx.strokeText("10",305,150); 
          //6
      ctx.fillRect(520,60,20,330);
      ctx.strokeText("12",523,150);
          //7
      ctx.fillRect(390,110,140,20);
      ctx.strokeText("10",410,116); 
          //8
      ctx.fillRect(390,120,20,80);
      ctx.strokeText("8",390,145);
          //9
      ctx.fillRect(450,190,60,20);
      ctx.strokeText("6",460,208);
          //10
      ctx.fillRect(370,300,150,20);
      ctx.strokeText("4",400,314);
          //11
      ctx.fillRect(540,210,20,20);
      ctx.strokeText("2",545,224);
          //12
      var snakeX = snake[0].x;
      var snakeY = snake[0].y;


      //decrease the length of snake according to the number on obstacle

        
      if ( (snakeX >= 0 && snakeX < 21) && (snakeY >= 6 && snakeY < 8) && snake.length != 0 )
        {
          for (var i =1; i <= 1; i++)
          {
          snake.pop();
          }
        }


     if ( (snakeX >= 7 && snakeX < 9) && (snakeY >= 25 && snakeY < 41) && snake.length != 0 )
        {
          
          for (var i =1; i <= 2; i++)
          {
          snake.pop();
          }
          
        }

     if ( (snakeX >= 9 && snakeX < 37 ) && (snakeY >= 40 && snakeY < 42) && snake.length != 0 )
        {
          for (var i =1; i <= 4; i++)
          {
          snake.pop();
          }
          
        }

     if ( (snakeX >= 21 && snakeX < 23) && (snakeY >= 11 && snakeY < 35) && snake.length != 0 )
        {
          for (var i =1; i <= 6; i++)
          {
          snake.pop();
          }
          
        }

      if ( (snakeX >= 27 && snakeX < 36) && (snakeY >= 3 && snakeY < 5) && snake.length != 0 )
        {
          for (var i =1; i <= 8; i++)
          {
          snake.pop();
          }
          
        }

     if ( (snakeX >= 29 && snakeX < 35) && (snakeY >= 12 && snakeY < 26) && snake.length != 0 )
        {
          for (var i =1; i <= 10; i++)
          {
          snake.pop();
          }
          
        }


     if ( (snakeX >= 52 && snakeX < 54) && (snakeY >= 6 && snakeY < 39) && snake.length != 0 )
        {
          for (var i =1; i <= 12; i++)
          {
          snake.pop();
          }
          
        }

     if ( (snakeX >= 39 && snakeX < 53) && (snakeY >= 11 && snakeY < 13) && snake.length != 0 )
        {
          for (var i =1; i <= 10; i++)
          {
          snake.pop();
          }
          
        }
        
    if ( (snakeX >= 39 && snakeX < 41) && (snakeY >= 12 && snakeY < 20) && snake.length != 0 )
        {
          for (var i =1; i <= 8; i++)
          {
          snake.pop();
          }
          
        }
        
    if ( (snakeX >= 45 && snakeX < 51) && (snakeY >= 19 && snakeY < 21) && snake.length != 0 )
        {
          for (var i =1; i <= 6; i++)
          {
          snake.pop();
          }
          
        }
        
     if ( (snakeX >= 37 && snakeX < 52) && (snakeY >= 30 && snakeY < 32) && snake.length != 0 )
        {
          for (var i =1; i <= 4; i++)
          {
          snake.pop();
          }
          
        }
        
     if ( (snakeX >= 54 && snakeX < 56) && (snakeY >= 21 && snakeY < 23) && snake.length != 0 )
        {
          for (var i =1; i <= 2; i++)
          {
          snake.pop();
          }
          
        }
        



      // change the coordinate of head according to the key that player enter

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      }
      else if(direction == 'down') { 
        snakeY++; }


        // checking for boundary ,snake itself and length of snake

      if ( (snakeX < 0) || (snakeX > 59) || (snakeY < 0) || (snakeY > 44) || (Collision(snakeX, snakeY, snake)) || (snake.length <= 0))
       {
        
         ctx.clearRect(0,0,w,h);
          gameloop = clearInterval(gameloop);
          alert('Game over please try again and score is -: ' + score);
          sound.stop();
          location.reload();
          return;          
        }


        // updation and display of score and movement of snake
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; 
          score = score + 10;
          document.getElementById("scoreDisplay").innerText =   score;
          createFood(); 
        } 
        else {
          var tail = snake.pop(); 
          tail.x = snakeX; 
          tail.y = snakeY;
        }
        
        snake.unshift(tail); 
        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        item(food.x, food.y); 
        
      }


         // create food

      var createFood = function() {
        food = {
        x: Math.floor((Math.random() * 59) + 1),
        y: Math.floor((Math.random() * 44) + 1)
        }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;

        
      
        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
        }
      }
      // checking food position with respect to obstacle
       if ( (food.x >= 0 && food.x < 21) && (food.y >= 6 && food.y < 8))
        { 
           food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }


       if ( (food.x >= 7 && food.x < 9) && (food.y > 25 && food.y < 41))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }

       if ( (food.x >= 9 && food.x < 37 ) && (food.y >= 40 && food.y < 42))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }

       if ( (food.x >= 21 && food.x < 23) && (food.y >= 11 && food.y < 35) )
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
        }

       if ( (food.x >= 27 && food.x < 36) && (food.y >= 3 && food.y < 5) )
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }

       if ( (food.x >= 29 && food.x < 35) && (food.y >= 12 && food.y < 26))
        {
         food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }


      if ( (food.x >= 52 && food.x < 54) && (food.y >= 6 && food.y < 39))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }


       if ( (food.x >= 39 && food.x < 53) && (food.y >= 11 && food.y < 13))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }
        
      if ( (food.x >= 39 && food.x < 41) && (food.y >= 12 && food.y < 20))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }
        
     if ( (food.x >= 45 && food.x < 51) && (food.y >= 19 && food.y< 21))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }
        
    if ( (food.x >= 37 && food.x < 52) && (food.y >= 30 && food.x < 32))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }
        
    if ( (food.x >= 54 && food.x < 56) && (food.y >= 21 && food.y < 23))
        {
          food.x = Math.floor((Math.random() * 59) + 1);
          food.y = Math.floor((Math.random() * 44) + 1);
          
        }
      
  }

  var Collision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }



  function sound(src) 
    {
       this.sound= document.createElement("audio");
       this.sound.src= src;
       this.sound.setAttribute("preload", "auto");
       this.sound.setAttribute("controls", "none");
       this.sound.style.display = "none";
       document.body.appendChild(this.sound);
       this.play = function(){
          this.sound.play();
       }
       this.stop = function(){
          this.sound.pause();
    }    
}  


  var init = function(){
      direction = 'right';
      drawSnake();
      createFood();
      sound = new sound("8-bit space.wav");
      sound.play();
      gameloop = setInterval(Background, 90);

  }

    return {
      init : init
      };

    
}());

