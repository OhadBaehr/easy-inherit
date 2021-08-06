## USAGE
ES6:


    import inherit from ('easy-inherit')
        
        

Node:

  

    const  inherit= require('easy-inherit')


Usage:

    function  fish(){
  		    this.growl=()=>"bloop"
  	}
  	fish.isFishy=true
  	    
  	function  monkey(){
  		this.banana=true
  	}
  	monkey.prototype.eat=()=>"namnamnam"
  	monkey.isHairy=true
     
  	// function name will be the class constructor name ⬇️ (must have a name!)
  	const  monkeyFish=inherit([fish,monkey],function  monkeyFish(brain){
        fish.call(this) // you still need to call "super" manually
        monkey.call(this)
	this.brain=brain
  	})
    
     const  barnie=new  monkeyFish('large')
     console.log(monkeyFish.isHairy) //true
     console.log(monkeyFish.isFishy) //true
     console.log(barnie) /*
  	    monkeyFish {
  		    growl: [Function (anonymous)],
  		    banana: true,
  		    brain: 'large'
  	    }
      */
      console.log(barnie.eat()) //namnamnam
