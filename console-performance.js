/**
 * ConsolePerformance
 * Usage :
 *   var tests = {"fn1_name":fn1, "fn2_name", fn2};
 *   var Perf = new ConsolePerformance(tests);
 *   Perf.runTests(args);``
 * @param  object tests name:function map of tests
 * @param  string name  title before tests
 * @return void         constructor
 */
var ConsolePerformance = function(tests,name){
  this.tests = tests;
  this.name  = name || 'CONSOLE PERFORMANCE TESTS:';
  this.style = 'color:#fff;background-color:#000;padding:6px 30px';
};
/**
 * doTitle internal function for logging Tests Name before starting
 * @return void
 */
ConsolePerformance.prototype.doTitle = function(){
  console.info('%c%s',this.style,this.name);
};
/**
 * runTest run a single test, executes fn, prints time when finished
 * @param  string   label name of function shown on console
 * @param  Function fn    test function to run
 * @param  mixed    args  arguements passed to each test
 * @return void
 */
ConsolePerformance.prototype.runTest = function(label,fn,args){
  console.time(label);
  fn.apply(null,args);
  console.timeEnd(label);
};
/**
 * runTests main function to iterate
 * @param  mixed args set of arguments to pass to each test
 * @return void
 */
ConsolePerformance.prototype.runTests = function(args){
    var _this = this;
    _this.doTitle();
    for(var testName in _this.tests){
      if(_this.tests.hasOwnProperty(testName)){
        var testFn = _this.tests[testName];
        _this.runTest(testName,testFn,arguments);
      }
    }
};
