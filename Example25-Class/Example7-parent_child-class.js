//use child class in parent class: https://www.geeksforgeeks.org/es6-classes/

//EXAMPLE1: use child variables in parent
class geeks {
                constructor(g) {
                    this.Character = g
                }
}
class GeeksforGeeks extends geeks {   //Here extends is a keyword
        disp() {
            console.log("Example1: No of Character: "+this.Character)
        }
}
var obj = new GeeksforGeeks(13);
obj.disp()



//EXAMPLE2: call child function in parent using "super" keyword

class SudhirforGeeks {
                        doPrint() {
                           let message="Example2: This doPrint() from Parent called."
                           return message
                        }
}

class gfg extends SudhirforGeeks {         //Here extends is a keyword
                        doPrint() {
                            
                            console.log("Example2: This doPrint() is printing a string.")
                            return super.doPrint() //Here super is a keyword equal to this.doPrint()
                        }
                        show() {
                            return this.doPrint() + ',---> This is from child'; //here this.doPrint() equal to super.doPrint()
                        }
}
var obj = new gfg()
console.log(obj.doPrint())
console.log(obj.show())
