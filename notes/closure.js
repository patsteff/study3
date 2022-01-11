const reactiveObject2 = {doIt: function() { this.handler && this.handler();}};
console.log('CHECKPOINT 1a');
reactiveObject2.doIt(); // no output because this.handler === undefined
console.log('CHECKPOINT 1b');


function setHandler(rObj, message, step = 1) {
    let counter = 0;
    rObj.handler = () => {
    counter += step;
    console.log('CLOSURE:', counter, message);
    };
    }
    
    const reactiveObject2c = {doIt: function() { this.handler && this.handler();}};
setHandler(reactiveObject2c, 'handling it 2cccc', 10);
    setHandler(reactiveObject2, 'handling it 2a');
    
    reactiveObject2.doIt(); // output: "CLOSURE: 1 handling it 2a"
    reactiveObject2.doIt(); // output: "CLOSURE: 2 handling it 2a"
    reactiveObject2.doIt(); // output: "CLOSURE: 3 handling it 2a"

    reactiveObject2c.doIt(); // output: "CLOSURE: 10 handling it 2cccc"
reactiveObject2c.doIt(); // output: "CLOSURE: 20 handling it 2cccc"