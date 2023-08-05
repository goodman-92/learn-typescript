function log(string: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Method ${string} ${key} called with arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${key} returned: ${result}`);
      return result;
    };
    return descriptor;
  }
}


class Person {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("LOG: Entering method.");

    console.log(`Hello, my name is ${this.name}`)
    console.log("LOG: Exiting method.")
  }
}

// @addGreeting
class Person2 {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  // @loggedMethod('greet')
  @log('hello')
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const p = new Person('Ray')
const p2 = new Person2('Ray')
// p.greet()
p2.greet();

function loggedMethod(originalMethod: any, _context: any) {

  function replacementMethod(this: any, ...args: any[]) {
    // console.log("LOG: Entering method.")
    const result = originalMethod.call(this, ...args);
    // console.log("LOG: Exiting method.")
    return result;
  }

  return replacementMethod;
}

function addGreeting(target: any) {
  target.prototype.greet = function () {
    console.log('hello')
  }

  return target;
}

