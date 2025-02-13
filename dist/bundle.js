(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/index.js
  var require_index = __commonJS({
    "src/index.js"(exports, module) {
      function greet(name) {
        return `Hello, ${name}!`;
      }
      module.exports = { greet };
    }
  });
  require_index();
})();
