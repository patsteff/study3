function createReactiveObject(name) {
    return {
    name,
    handlers: [],
    addHandler: function(handler) {this.handlers.push(handler);},
    doIt: function() {
    for (const handler of this.handlers) {
    handler();
    }
    },
    };
    }
    
    const reactiveObject3 = createReactiveObject('rObj3');
    reactiveObject3.addHandler(() => console.log('handler3.1'));
    reactiveObject3.addHandler(() => console.log('handler3.2'));
    reactiveObject3.doIt(); //output: "handler3.1" /n "handler3.2"