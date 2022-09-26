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

module.exports = xWebsite;