
function p1(){

	function log(message) {
		console.log(message);
	}

	let message:string = "hello";

	log(message);

}


function p2(){
	enum Color{
		red,
		green,
		blue,
	};

	let BackgroundColor = Color.blue;
	
	console.log(BackgroundColor);

}

function p3(){

	interface Point{
		x:number,
		y:number,
	}

	let drawPoint = (point:Point)=>{
		console.log(point.x + " " + point.y);
	}

	drawPoint({x:1,y:2});

}



class Point{
	constructor(private _x?:number,private y?:number){ // ? means optional, private means add it to object privat emembers with same name
	}


	// replace getters setters to this form. so we can use assignments easily
	get x(){
		return this._x;
	}

	set x(value){
		this._x = value + 1;
	}

	draw(){
		console.log(this._x + " - " + this.y);
	}

}


let mypoint = new Point(1,2);
console.log(mypoint.x);
mypoint.x = 3;
mypoint.draw();
