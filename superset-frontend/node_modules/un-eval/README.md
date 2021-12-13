## un-eval

<code>un_eval</code> is a function that converts an Object to its source.

### Usage

You may use un_eval in node or browser like this:

```javascript
un_eval(yourObject)
```

### Support types

The <code>un_eval</code> support following types


| Type | Support |
|----|----|
| null | _(Yes)_ |
| undefined | _(Yes)_ |
| number | _(Yes)_ |
| string | _(Yes)_ |
| boolean | _(Yes)_ |
| Number | _(Yes)_ |
| String | _(Yes)_ |
| Boolean | _(Yes)_ |
| Date | _(Yes)_ |
| RegExp | _(Yes)_ |
| function | _(Yes)_<sup>[1]</sup> |
| Array | _(Yes)_ |
| Object | _(Yes)_<sup>[2][3]</sup> | 

Notes:

1. ES5 style function only. Arrow functions, generator functions, and, native functions are not supported.
2. All other object is treated as Object type.
3. <code>({})</code>, or <code>[]</code> will be generated if any circular found.

### Examples

```javascript
un_eval(3); // '3'
un_eval(Math.PI); // '3.141592653589793'
un_eval('hello'); // '"hello"'
un_eval(Object(false)); // 'new Boolean(false)'
un_eval(function (x) { return x + 1; }); // '(function (x) { return x + 1; })'
un_eval(/regexp/ig); // '/regexp/gi'
un_eval(new Date(978307200000)); // '(new Date(978307200000))'
un_eval([1,2,3]); // '[1, 2, 3]'
un_eval({x: 2, y: 3}); // '({"x":2, "y":3})'

var obj1 = {};
obj1.x = obj1.y = { value: 3 };
un_eval(obj1); // '({"y":({"value":3}), "x":({"value":3})})'

var obj2 = {};
obj2.x = {};
obj2.y = {};
obj2.x.y = obj2.y;
obj2.y.x = obj2.x;
un_eval(obj2); // '({"x":({"y":({"x":({})})}), "y":({"x":({"y":({})})})})'
```

### eval &amp; uneval

<code>un_eval</code> is disgned to be similar to <code>[uneval](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/uneval)</code> but works cross browser.

<code>un_eval</code> is similar to <code>uneval</code>, but there are few difference:

1. <code>un_eval</code> currently do not support some types such as <code>Error</code>.
2. <code>un_eval</code> will convert native function to <code>"null"</code>.
3. <code>un_eval</code> will format codes differently from <code>uneval</code>.

### Warning

Although, <code>un_eval</code> is designed to output source with no side effect. But there may be some bugs or limitations in the code. You should avoid using <code>un_eval</code> any untrustable objects (maybe from user input) then <code>eval</code> it. NEVER use <code>eval</code> unless you know what will happen.

**USE AS YOUR OWN RISK.**

### License

The MIT License