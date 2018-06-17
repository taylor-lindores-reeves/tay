require("./css/main.sass");
require("./index.html");
require("./App");
console.log(`Environment is: ${process.env.NODE_ENV}`);

const funfun = () => {
    return class Hello {
        constructor() {
            this.event()
            this.hi = 'hellooooo mother fuckers'
        }

        event() {
            console.log(this.hi)
        }
    }
}

funfun() 