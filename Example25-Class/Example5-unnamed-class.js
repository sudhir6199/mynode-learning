//https://www.geeksforgeeks.org/javascript-class-expression/
//UnNamed Class
const Worker = class {
        constructor(yname) {
                                this.yname = yname;
                            }
        returnName() {
                            return this.yname;
                    }
};

module.exports = Worker;