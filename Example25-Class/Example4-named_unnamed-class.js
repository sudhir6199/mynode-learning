//https://www.geeksforgeeks.org/javascript-class-expression/


//Named Class:  is used internally, but not outside of the class if imported by another program.
const xWebsite = class Geek {
                            constructor(xname){
	                                            this.xname = xname;
                                             }
                            websiteName() {
	                                        return this.xname;
                                          }
                            };

const x = new xWebsite("This is NamedClass");
console.log(x.websiteName());

module.exports = new xWebsite("This is NamedClass");


//UnNamed Class
const Worker = class {
                                constructor(yname) {
	                                                    this.yname = yname;
                                                    }
                                returnName() {
	                                                return this.yname;
                                            }
};

const y = new Worker("This is UnNamed Class");
console.log(y.returnName());

module.exports = Worker;