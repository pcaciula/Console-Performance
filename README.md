# Console-Performance
Super Basic Javascript performance testing w/console output of execution times
### Usage:
---
```javascript
var tests = {'fn1_name':fn1,'fn2_name':fn2,'fn3_name':fn3};
var Perf  = new ConsolePerformance(tests);
Perf.runTests(args);
```
---
### Output Looks Like:
```
CONSOLE PERFORMANCE TESTS:
fn1_name: 0.178ms
fn2_name: 0.124ms
fn3_name: 0.122ms
```
