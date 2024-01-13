# if-not
a package that helps you to check if a condition is false without excessive use of !<br><br><br>

installation:
```
npm install if-not
```
<br><br>
example with and without if-not:
```typescript
// with if-not:
import ifnot from "if-not";

ifnot(false, console.log, "Hello world!", "second argument!");
ifnot(true, console.log, "this won't be executed!");

// without if-not, look at all the bangs! all the indentation! this is unacceptable!
if(!false) {
	console.log("Hello world!", "second argument!");
}
if(!true) {
	console.log("this won't be executed");
}
```
output for both:
```
$ node .
Hello world! second argument!
$
```
