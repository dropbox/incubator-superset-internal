(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[1193],{

/***/ 63048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm_PairedTTest)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/distributions/distributions.js
var distributions = __webpack_require__(75079);
// EXTERNAL MODULE: ./node_modules/reactable/lib/reactable.js
var reactable = __webpack_require__(24353);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 1 modules
var emotion_react_browser_esm = __webpack_require__(11965);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-paired-t-test/esm/TTestTable.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/no-array-index-key, react/jsx-no-bind */





const dataPropType = prop_types_default().arrayOf(prop_types_default().shape({
  group: prop_types_default().arrayOf((prop_types_default()).string),
  values: prop_types_default().arrayOf(prop_types_default().shape({
    x: (prop_types_default()).number,
    y: (prop_types_default()).number
  }))
}));
const propTypes = {
  alpha: (prop_types_default()).number,
  data: dataPropType.isRequired,
  groups: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  liftValPrec: (prop_types_default()).number,
  metric: (prop_types_default()).string.isRequired,
  pValPrec: (prop_types_default()).number
};
const defaultProps = {
  alpha: 0.05,
  liftValPrec: 4,
  pValPrec: 6
};

class TTestTable extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      control: 0,
      liftValues: [],
      pValues: []
    };
  }

  componentDidMount() {
    const {
      control
    } = this.state;
    this.computeTTest(control); // initially populate table
  }

  getLiftStatus(row) {
    const {
      control,
      liftValues
    } = this.state; // Get a css class name for coloring

    if (row === control) {
      return 'control';
    }

    const liftVal = liftValues[row];

    if (Number.isNaN(liftVal) || !Number.isFinite(liftVal)) {
      return 'invalid'; // infinite or NaN values
    }

    return liftVal >= 0 ? 'true' : 'false'; // green on true, red on false
  }

  getPValueStatus(row) {
    const {
      control,
      pValues
    } = this.state;

    if (row === control) {
      return 'control';
    }

    const pVal = pValues[row];

    if (Number.isNaN(pVal) || !Number.isFinite(pVal)) {
      return 'invalid';
    }

    return ''; // p-values won't normally be colored
  }

  getSignificance(row) {
    const {
      control,
      pValues
    } = this.state;
    const {
      alpha
    } = this.props; // Color significant as green, else red

    if (row === control) {
      return 'control';
    } // p-values significant below set threshold


    return pValues[row] <= alpha;
  }

  computeLift(values, control) {
    const {
      liftValPrec
    } = this.props; // Compute the lift value between two time series

    let sumValues = 0;
    let sumControl = 0;
    values.forEach((value, i) => {
      sumValues += value.y;
      sumControl += control[i].y;
    });
    return ((sumValues - sumControl) / sumControl * 100).toFixed(liftValPrec);
  }

  computePValue(values, control) {
    const {
      pValPrec
    } = this.props; // Compute the p-value from Student's t-test
    // between two time series

    let diffSum = 0;
    let diffSqSum = 0;
    let finiteCount = 0;
    values.forEach((value, i) => {
      const diff = control[i].y - value.y;
      /* eslint-disable-next-line */

      if (isFinite(diff)) {
        finiteCount += 1;
        diffSum += diff;
        diffSqSum += diff * diff;
      }
    });
    const tvalue = -Math.abs(diffSum * Math.sqrt((finiteCount - 1) / (finiteCount * diffSqSum - diffSum * diffSum)));

    try {
      return (2 * new distributions.Studentt(finiteCount - 1).cdf(tvalue)).toFixed(pValPrec); // two-sided test
    } catch (error) {
      return NaN;
    }
  }

  computeTTest(control) {
    // Compute lift and p-values for each row
    // against the selected control
    const {
      data
    } = this.props;
    const pValues = [];
    const liftValues = [];

    if (!data) {
      return;
    }

    for (let i = 0; i < data.length; i += 1) {
      if (i === control) {
        pValues.push('control');
        liftValues.push('control');
      } else {
        pValues.push(this.computePValue(data[i].values, data[control].values));
        liftValues.push(this.computeLift(data[i].values, data[control].values));
      }
    }

    this.setState({
      control,
      liftValues,
      pValues
    });
  }

  render() {
    const {
      data,
      metric,
      groups
    } = this.props;
    const {
      control,
      liftValues,
      pValues
    } = this.state;

    if (!Array.isArray(groups) || groups.length === 0) {
      throw Error('Group by param is required');
    } // Render column header for each group


    const columns = groups.map((group, i) => (0,emotion_react_browser_esm.jsx)(reactable.Th, {
      key: i,
      column: group
    }, group));
    const numGroups = groups.length; // Columns for p-value, lift-value, and significance (true/false)

    columns.push((0,emotion_react_browser_esm.jsx)(reactable.Th, {
      key: numGroups + 1,
      column: "pValue"
    }, "p-value"));
    columns.push((0,emotion_react_browser_esm.jsx)(reactable.Th, {
      key: numGroups + 2,
      column: "liftValue"
    }, "Lift %"));
    columns.push((0,emotion_react_browser_esm.jsx)(reactable.Th, {
      key: numGroups + 3,
      column: "significant"
    }, "Significant"));
    const rows = data.map((entry, i) => {
      const values = groups.map((group, j // group names
      ) => (0,emotion_react_browser_esm.jsx)(reactable.Td, {
        key: j,
        column: group,
        data: entry.group[j]
      }));
      values.push((0,emotion_react_browser_esm.jsx)(reactable.Td, {
        key: numGroups + 1,
        className: this.getPValueStatus(i),
        column: "pValue",
        data: pValues[i]
      }));
      values.push((0,emotion_react_browser_esm.jsx)(reactable.Td, {
        key: numGroups + 2,
        className: this.getLiftStatus(i),
        column: "liftValue",
        data: liftValues[i]
      }));
      values.push((0,emotion_react_browser_esm.jsx)(reactable.Td, {
        key: numGroups + 3,
        className: this.getSignificance(i).toString(),
        column: "significant",
        data: this.getSignificance(i)
      }));
      return (0,emotion_react_browser_esm.jsx)(reactable.Tr, {
        key: i,
        className: i === control ? 'control' : '',
        onClick: this.computeTTest.bind(this, i)
      }, values);
    }); // When sorted ascending, 'control' will always be at top

    const sortConfig = groups.concat([{
      column: 'pValue',
      sortFunction: (a, b) => {
        if (a === 'control') {
          return -1;
        }

        if (b === 'control') {
          return 1;
        }

        return a > b ? 1 : -1; // p-values ascending
      }
    }, {
      column: 'liftValue',
      sortFunction: (a, b) => {
        if (a === 'control') {
          return -1;
        }

        if (b === 'control') {
          return 1;
        }

        return parseFloat(a) > parseFloat(b) ? -1 : 1; // lift values descending
      }
    }, {
      column: 'significant',
      sortFunction: (a, b) => {
        if (a === 'control') {
          return -1;
        }

        if (b === 'control') {
          return 1;
        }

        return a > b ? -1 : 1; // significant values first
      }
    }]);
    return (0,emotion_react_browser_esm.jsx)("div", null, (0,emotion_react_browser_esm.jsx)("h3", null, metric), (0,emotion_react_browser_esm.jsx)(reactable.Table, {
      className: "table",
      id: `table_${metric}`,
      sortable: sortConfig
    }, (0,emotion_react_browser_esm.jsx)(reactable.Thead, null, columns), rows));
  }

}

TTestTable.propTypes = propTypes;
TTestTable.defaultProps = defaultProps;
/* harmony default export */ const esm_TTestTable = (TTestTable);
;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-paired-t-test/esm/PairedTTest.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@superset-ui/legacy-plugin-chart-paired-t-test/esm/PairedTTest.js
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/no-array-index-key */





const PairedTTest_propTypes = {
  alpha: (prop_types_default()).number,
  className: (prop_types_default()).string,
  data: prop_types_default().objectOf(dataPropType).isRequired,
  groups: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  liftValPrec: (prop_types_default()).number,
  metrics: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  pValPrec: (prop_types_default()).number
};
const PairedTTest_defaultProps = {
  alpha: 0.05,
  className: '',
  liftValPrec: 4,
  pValPrec: 6
};

class PairedTTest extends react.PureComponent {
  render() {
    const {
      className,
      metrics,
      groups,
      data,
      alpha,
      pValPrec,
      liftValPrec
    } = this.props;
    return (0,emotion_react_browser_esm.jsx)("div", {
      className: `superset-legacy-chart-paired-t-test ${className}`
    }, (0,emotion_react_browser_esm.jsx)("div", {
      className: "paired-ttest-table"
    }, (0,emotion_react_browser_esm.jsx)("div", {
      className: "scrollbar-content"
    }, metrics.map((metric, i) => (0,emotion_react_browser_esm.jsx)(esm_TTestTable, {
      key: i,
      metric: metric,
      groups: groups,
      data: data[metric],
      alpha: alpha,
      pValPrec: Math.min(pValPrec, 32),
      liftValPrec: Math.min(liftValPrec, 32)
    })))));
  }

}

PairedTTest.propTypes = PairedTTest_propTypes;
PairedTTest.defaultProps = PairedTTest_defaultProps;
/* harmony default export */ const esm_PairedTTest = (PairedTTest);

/***/ }),

/***/ 75079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* unused reexport */ __webpack_require__(5076);
exports.Studentt = __webpack_require__(17135);
/* unused reexport */ __webpack_require__(77846);
/* unused reexport */ __webpack_require__(36920);


/***/ }),

/***/ 36920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var mathfn = __webpack_require__(3015);

function BinomialDistribution(properbility, size) {
  if (!(this instanceof BinomialDistribution)) {
    return new BinomialDistribution(properbility, size);
  }

  if (typeof properbility !== 'number') {
    throw TypeError('properbility must be a number');
  }
  if (typeof size !== 'number') {
    throw TypeError('size must be a number');
  }

  if (size <= 0.0) {
    throw TypeError('size must be positive');
  }
  if (properbility < 0.0 || properbility > 1) {
    throw TypeError('properbility must be between 0 and 1');
  }

  this._properbility = properbility;
  this._size = size;
}
module.exports = BinomialDistribution;

BinomialDistribution.prototype.pdf = function (x) {
  var n = this._size;
  var p = this._properbility;

  // choose(n, x)
  var binomialCoefficent = mathfn.gamma(n + 1) / (
    mathfn.gamma(x + 1) * mathfn.gamma(n - x + 1)
  )

  return binomialCoefficent * Math.pow(p, x) * Math.pow(1 - p, n - x);
};

BinomialDistribution.prototype.cdf = function (x) {
  return mathfn.incBeta(1 - this._properbility, this._size - x, x + 1);
};

BinomialDistribution.prototype.inv = function (p) {
  throw new Error('Inverse CDF of binomial distribution is not implemented');
};

BinomialDistribution.prototype.median = function () {
  return Math.round(this._properbility * this._size);
};

BinomialDistribution.prototype.mean = function () {
  return this._properbility * this._size;
};

BinomialDistribution.prototype.variance = function () {
  return this._properbility * this._size * (1 - this._properbility);
};


/***/ }),

/***/ 5076:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var mathfn = __webpack_require__(3015);

function NormalDistribution(mean, sd) {
  if (!(this instanceof NormalDistribution)) {
    return new NormalDistribution(mean, sd);
  }

  if (typeof mean !== 'number' && mean !== undefined) {
    throw TypeError('mean must be a number');
  }
  if (typeof sd !== 'number' && sd !== undefined) {
    throw TypeError('sd must be a number');
  }

  if (sd !== undefined && sd <= 0.0) {
    throw TypeError('sd must be positive');
  }

  this._mean = mean || 0;
  this._sd = sd || 1;
  this._var = this._sd * this._sd;
}
module.exports = NormalDistribution;

// -0.5 * log(2 Pi)
var HALF_TWO_PI_LOG = -0.91893853320467274180;

NormalDistribution.prototype.pdf = function (x) {
  return Math.exp(HALF_TWO_PI_LOG - Math.log(this._sd) - Math.pow(x - this._mean, 2) / (2 * this._var));
};

NormalDistribution.prototype.cdf = function (x) {
  return 0.5 * (1 + mathfn.erf((x - this._mean) / Math.sqrt(2 * this._var)));
};

NormalDistribution.prototype.inv = function (p) {
  return -Math.SQRT2 * this._sd * mathfn.invErfc(2 * p) + this._mean;
};

NormalDistribution.prototype.median = function () {
  return this._mean;
};

NormalDistribution.prototype.mean = function () {
  return this._mean;
};

NormalDistribution.prototype.variance = function () {
  return this._var;
};


/***/ }),

/***/ 17135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var mathfn = __webpack_require__(3015);

function StudenttDistribution(df) {
  if (!(this instanceof StudenttDistribution)) {
    return new StudenttDistribution(df);
  }

  if (typeof df !== 'number') {
    throw TypeError('mean must be a number');
  }
  if (df <= 0) {
    throw RangeError('df must be a positive number');
  }

  this._df = df;

  this._pdf_const = (mathfn.gamma((df + 1) / 2) / (Math.sqrt(df * Math.PI) * mathfn.gamma(df / 2)));
  this._pdf_exp = -((df + 1) / 2);

  this._df_half = df / 2;
}
module.exports = StudenttDistribution;

StudenttDistribution.prototype.pdf = function (x) {
  return this._pdf_const * Math.pow(1 + ((x*x) / this._df), this._pdf_exp);
};

StudenttDistribution.prototype.cdf = function (x) {
  var fac = Math.sqrt(x * x + this._df);

  return mathfn.incBeta((x + fac) / (2 * fac), this._df_half, this._df_half);
};

StudenttDistribution.prototype.inv = function (p) {
  var fac = mathfn.invIncBeta(2 * Math.min(p, 1 - p), this._df_half, 0.5);
  var y = Math.sqrt(this._df * (1 - fac) / fac);
  return (p > 0.5) ? y : -y;
};

StudenttDistribution.prototype.median = function () {
  return 0;
};

StudenttDistribution.prototype.mean = function () {
  return (this._df > 1) ? 0 : undefined;
};

StudenttDistribution.prototype.variance = function () {
  if (this._df > 2) return this._df / (this._df - 2);
  else if (this._df > 1) return Infinity;
  else return undefined;
};


/***/ }),

/***/ 77846:
/***/ ((module) => {


function UniformDistribution(a, b) {
  if (!(this instanceof UniformDistribution)) {
    return new UniformDistribution(a, b);
  }

  if (typeof a !== 'number' && a !== undefined) {
    throw TypeError('mean must be a number');
  }
  if (typeof b !== 'number' && b !== undefined) {
    throw TypeError('sd must be a number');
  }

  this._a = typeof a === 'number' ? a : 0;
  this._b = typeof b === 'number' ? b : 1;

  if (this._b <= this._a) {
    throw new RangeError('a must be greater than b');
  }

  this._k = 1 / (this._b - this._a);
  this._mean = (this._a + this._b) / 2;
  this._var = (this._a - this._b) * (this._a - this._b) / 12;
}
module.exports = UniformDistribution;

UniformDistribution.prototype.pdf = function (x) {
  return (x < this._a || x > this._b) ? 0 : this._k;
};

UniformDistribution.prototype.cdf = function (x) {
  if (x < this._a) return 0;
  else if (x > this._b) return 1;
  else return (x - this._a) * this._k;
};

UniformDistribution.prototype.inv = function (p) {
  if (p < 0 || p > 1) return NaN;
  else return p * (this._b - this._a) + this._a;
};

UniformDistribution.prototype.median = function () {
  return this._mean;
};

UniformDistribution.prototype.mean = function () {
  return this._mean;
};

UniformDistribution.prototype.variance = function () {
  return this._var;
};


/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var gammaCollection = __webpack_require__(13862);
var log1p = __webpack_require__(33326).log1p;

//
// The beta functions are taken from the jStat library, and modified to fit
// the API and style pattern used in this module.
// See: https://github.com/jstat/jstat/
// License: MIT
//

//Copyright (c) 2013 jStat
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in
//all copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//THE SOFTWARE.

function beta(x, y) {
	if (x < 0 || y < 0) {
   throw RangeError('Arguments must be positive.');
	}

  // Some special cases
  else if (x === 0 && y === 0) return NaN;
  else if (x === 0 || y === 0) return Infinity;

	// make sure x + y doesn't exceed the upper limit of usable values
  else if (x + y > 170) {
    return Math.exp(logBeta(x, y));
  }

  else {
    return gammaCollection.gamma(x) * gammaCollection.gamma(y) / gammaCollection.gamma(x + y);
  }
}
exports.beta = beta;

function logBeta(x, y) {
  if (x < 0 || y < 0) {
   throw RangeError('Arguments must be positive.');
	}

  // Some special cases
  else if (x === 0 && y === 0) return NaN;
  else if (x === 0 || y === 0) return Infinity;

  else {
    return gammaCollection.logGamma(x) + gammaCollection.logGamma(y) - gammaCollection.logGamma(x + y);
  }
}
exports.logBeta = logBeta;

// evaluates the continued fraction for incomplete beta function by modified Lentz's method.
function betacf(x, a, b) {
	var fpmin = 1e-30,
		m = 1,
		m2, aa, c, d, del, h, qab, qam, qap;
	// These q's will be used in factors that occur in the coefficients
	qab = a + b;
	qap = a + 1;
	qam = a - 1;
	c = 1;
	d = 1 - qab * x / qap;
	if (Math.abs(d) < fpmin) d = fpmin;
	d = 1 / d;
	h = d;
	for (; m <= 100; m++) {
		m2 = 2 * m;
		aa = m * (b - m) * x / ((qam + m2) * (a + m2));
		// One step (the even one) of the recurrence
		d = 1 + aa * d;
		if (Math.abs(d) < fpmin) d = fpmin;
		c = 1 + aa / c;
		if (Math.abs(c) < fpmin) c = fpmin;
		d = 1 / d;
		h *= d * c;
		aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
		// Next step of the recurrence (the odd one)
		d = 1 + aa * d;
		if (Math.abs(d) < fpmin) d = fpmin;
		c = 1 + aa / c;
		if (Math.abs(c) < fpmin) c = fpmin;
		d = 1 / d;
		del = d * c;
		h *= del;
		if (Math.abs(del - 1.0) < 3e-7) break;
	}
	return h;
}

// Returns the incomplete beta function I_x(a,b)
function regualizedBeta(x, a, b) {
	if(x < 0 || x > 1) {
    throw new RangeError('First argument must be between 0 and 1.');
	}

  // Special cases, there can make trouble otherwise
  else if (a === 1 && b === 1) return x;
  else if (x === 0) return 0;
  else if (x === 1) return 1;
  else if (a === 0) return 1;
  else if (b === 0) return 0;

  else {
    var bt =
      Math.exp(gammaCollection.logGamma(a + b) -
      gammaCollection.logGamma(a) -
      gammaCollection.logGamma(b) +
      a * Math.log(x) +
      b * log1p(-x));

    // Use continued fraction directly.
    if (x < (a + 1) / (a + b + 2)) return bt * betacf(x, a, b) / a;
    // else use continued fraction after making the symmetry transformation.
    else return 1 - bt * betacf(1 - x, b, a) / b;
  }
}
function incBeta(x, a, b) {
	return regualizedBeta(x, a, b) * beta(a, b);
}
exports.incBeta = incBeta;

// Returns the inverse of the incomplete beta function
function invIncBeta(p, a, b) {
  if(x < 0 || x > 1) {
    throw new RangeError('First argument must be between 0 and 1.');
	}

  // Special cases, there can make trouble otherwise
  else if (a === 1 && b === 1) return p;
  else if (p === 1) return 1;
  else if (p === 0) return 0;
  else if (a === 0) return 0;
  else if (b === 0) return 1;

  else {
    var EPS = 1e-8,
        a1 = a - 1,
        b1 = b - 1,
        j = 0,
        lna, lnb, pp, t, u, err, x, al, h, w, afac;

	if(a >= 1 && b >= 1) {
    pp = (p < 0.5) ? p : 1 - p;
    t = Math.sqrt(-2 * Math.log(pp));

		x = (2.30753 + t * 0.27061) / (1 + t* (0.99229 + t * 0.04481)) - t;
		if(p < 0.5) x = -x;
		al = (x * x - 3) / 6;
		h = 2 / (1 / (2 * a - 1)  + 1 / (2 * b - 1));
		w = (x * Math.sqrt(al + h) / h) - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
		x = a / (a + b * Math.exp(2 * w));
	} else {
		lna = Math.log(a / (a + b));
		lnb = Math.log(b / (a + b));
		t = Math.exp(a * lna) / a;
		u = Math.exp(b * lnb) / b;
		w = t + u;
		if (p < t / w) x = Math.pow(a * w * p, 1 / a);
		else x = 1 - Math.pow(b * w * (1 - p), 1 / b);
	}

	afac = -gammaCollection.logGamma(a) - gammaCollection.logGamma(b) + gammaCollection.logGamma(a + b);

  for(; j < 10; j++) {
		if(x === 0 || x === 1) return x;
		err = regualizedBeta(x, a, b) - p;

    t = Math.exp(a1 * Math.log(x) + b1 * log1p(-x) + afac);
		u = err / t;
		x -= (t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x)))));

    if (x <= 0) x = 0.5 * (x + t);
		if (x >= 1) x = 0.5 * (x + t + 1);

		if (Math.abs(t) < EPS * x && j > 0) break;
	}

	return x;
  }
}
exports.invIncBeta = invIncBeta;


/***/ }),

/***/ 93953:
/***/ ((__unused_webpack_module, exports) => {


//
// Modified from:
//  C++: http://www.johndcook.com/cpp_erf.html
//
var ERF_A = [
  0.254829592,
  -0.284496736,
  1.421413741,
  -1.453152027,
  1.061405429
];
var ERF_P = 0.3275911;

function erf(x) {
  var sign = 1;
  if (x < 0) sign = -1;

  x = Math.abs(x);

  var t = 1.0/(1.0 + ERF_P*x);
  var y = 1.0 - (((((ERF_A[4]*t + ERF_A[3])*t) + ERF_A[2])*t + ERF_A[1])*t + ERF_A[0])*t*Math.exp(-x*x);

  return sign * y;
}
exports.erf = erf;

//
// Combined from two sources:
//  Python: http://pydoc.net/Python/timbre/1.0.0/timbre.stats/
//  JavaScript: https://github.com/jstat/jstat/blob/master/src/special.js
//
var M_2_SQRTPI = 1.12837916709551257;

var ERFC_COF = [
  -2.8e-17, 1.21e-16, -9.4e-17, -1.523e-15, 7.106e-15,
   3.81e-16, -1.12708e-13, 3.13092e-13, 8.94487e-13,
  -6.886027e-12, 2.394038e-12, 9.6467911e-11,
  -2.27365122e-10, -9.91364156e-10, 5.059343495e-9,
   6.529054439e-9, -8.5238095915e-8, 1.5626441722e-8,
   1.303655835580e-6, -1.624290004647e-6,
  -2.0278578112534e-5, 4.2523324806907e-5,
   3.66839497852761e-4, -9.46595344482036e-4,
  -9.561514786808631e-3, 1.9476473204185836e-2,
   6.4196979235649026e-1, -1.3026537197817094
];
var ERFC_COF_LAST = ERFC_COF[ERFC_COF.length - 1];

function erfc(x) {
  function erfccheb(y) {
    var d = 0.0, dd = 0.0, temp = 0.0,
        t = 2.0 / (2.0 + y), ty = 4.0 * t - 2.0;
  
    for (var i = 0, l = ERFC_COF.length - 1; i < l; i++) {
      temp = d;
      d = ty * d - dd + ERFC_COF[i];
      dd = temp;
    }
  
    return t * Math.exp(-y * y + 0.5 * (ERFC_COF_LAST + ty * d) - dd);
  }
  
  return x >= 0.0 ? erfccheb(x) : 2.0 - erfccheb(-x);
}
exports.erfc = erfc;

//
// Combined from three sources:
//  Python: http://pydoc.net/Python/timbre/1.0.0/timbre.stats/
//  JavaScript: https://github.com/jstat/jstat/blob/master/src/special.js
//  C: https://github.com/Peteysoft/sea_ice/blob/master/src/mcc_ice/inverf.c
//
function invErfc(p) {
  if (p < 0.0 || p > 2.0) {
    throw RangeError('Argument must be betweeen 0 and 2');
  }

  else if (p === 0.0) {
    return Infinity;
  }
  
  else if (p === 2.0) {
    return -Infinity;
  }
  
  else {
    var pp = p < 1.0 ? p : 2.0 - p;
    var t = Math.sqrt(-2.0 * Math.log(pp / 2.0));
    var x = -0.70711 * ((2.30753 + t * 0.27061) / (1.0 + t * (0.99229 + t * 0.04481)) - t);

    var err1 = erfc(x) - pp;
    x += err1 / (M_2_SQRTPI * Math.exp(-x * x) - x * err1);
    var err2 = erfc(x) - pp;
    x += err2 / (M_2_SQRTPI * Math.exp(-x * x) - x * err2);

    return p < 1.0 ? x : -x;
  }
}
exports.invErfc = invErfc;

//
// Used math: inverf(x) = -inverfc(1 + x);
//  NOTE: you are welcome to add a specific approximation
//
function invErf(p) {
  if (p < -1.0 || p > 1.0) {
    throw RangeError('Argument must be betweeen -1 and 1');
  }

  return -invErfc(p + 1);
}
exports.invErf = invErf;


/***/ }),

/***/ 13862:
/***/ ((__unused_webpack_module, exports) => {


//
// Modified form:
//  C++: http://www.johndcook.com/cpp_gamma.html
//

// Euler's gamma constant
var GAMMA_CONST = 0.577215664901532860606512090;

// numerator coefficients for approximation over the interval (1,2)
var P_COFF = [
  -1.71618513886549492533811E+0,
   2.47656508055759199108314E+1,
  -3.79804256470945635097577E+2,
   6.29331155312818442661052E+2,
   8.66966202790413211295064E+2,
  -3.14512729688483675254357E+4,
  -3.61444134186911729807069E+4,
   6.64561438202405440627855E+4
];

// denominator coefficients for approximation over the interval (1,2)
var Q_COFF = [
  -3.08402300119738975254353E+1,
   3.15350626979604161529144E+2,
  -1.01515636749021914166146E+3,
  -3.10777167157231109440444E+3,
   2.25381184209801510330112E+4,
   4.75584627752788110767815E+3,
  -1.34659959864969306392456E+5,
  -1.15132259675553483497211E+5
];

function gamma(x) {
  if (x <= 0.0) {
    throw new RangeError('Argument must be positive.');
	}

	// For small x, 1/Gamma(x) has power series x + gamma x^2  - ...
	// So in this range, 1/Gamma(x) = x + gamma x^2 with error on the order of x^3.
	// The relative error over this interval is less than 6e-7.
  else if (x < 0.001) {
    return 1.0/(x*(1.0 + GAMMA_CONST*x));
  }
  
  // The algorithm directly approximates gamma over (1,2) and uses
  // reduction identities to reduce other arguments to this interval.
  else if (x < 12.0) {
    var y = x, n = 0, lessOne = (y < 1.0);

    // Add or subtract integers as necessary to bring y into (1,2)
    if (lessOne) {
      y += 1.0;
    } else {
      n = Math.floor(y) - 1;
      y -= n;
    }
    
    var num = 0.0, den = 1.0, z = y - 1;
    for (var i = 0; i < 8; i++) {
      num = (num + P_COFF[i])*z;
      den = den*z + Q_COFF[i];
    }
    var result = num/den + 1.0;

    // Apply correction if argument was not initially in (1,2)
    if (lessOne) {
      result /= (y-1.0);
    } else {
      // Use the identity gamma(z+n) = z*(z+1)* ... *(z+n-1)*gamma(z)
      for (i = 0; i < n; i++)
        result *= y++;
    }

    return result;
  }

  // Correct answer too large to display. Force +infinity.
  else if (x > 171.624) {
		return Infinity;
  }
  
  else {
    return Math.exp(logGamma(x));
  }
}

// gamma functions goes under two names
exports.gamma = gamma;

//
// Modified form:
//  C++: http://www.johndcook.com/cpp_gamma.html
//

var C_COFF = [
   1.0/12.0,
  -1.0/360.0,
   1.0/1260.0,
  -1.0/1680.0,
   1.0/1188.0,
  -691.0/360360.0,
   1.0/156.0,
  -3617.0/122400.0
];

var HALF_LOG_TWO_PI = 0.91893853320467274178032973640562;

function logGamma(x) {
  if (x <= 0.0) {
    throw new RangeError('Argument must be positive.');
	}

  else if (x < 12.0) {
    return Math.log(Math.abs(gamma(x)));
  }

  // Abramowitz and Stegun 6.1.41
  // Asymptotic series should be good to at least 11 or 12 figures
  // For error analysis, see Whittiker and Watson
  // A Course in Modern Analysis (1927), page 252
  
  else {
    var  z = 1.0/(x*x);
    var sum = C_COFF[7];
    for (var i = 6; i >= 0; i--) {
      sum *= z;
      sum += C_COFF[i];
    }
    var series = sum/x;
    return (x - 0.5)*Math.log(x) - x + HALF_LOG_TWO_PI + series;
  }
}
exports.logGamma = logGamma;


/***/ }),

/***/ 33326:
/***/ ((__unused_webpack_module, exports) => {


//
// Modified from:
//  C++: http://www.johndcook.com/cpp_erf.html
//

function log1p(x) {
  if (x <= -1.0) {
    throw new RangeError('Argument mustbe greater than -1.0');
  }

  // x is large enough that the obvious evaluation is OK
  else if (Math.abs(x) > 1e-4) {
      return Math.log(1.0 + x);
  }

  // Use Taylor approx. log(1 + x) = x - x^2/2 with error roughly x^3/3
  // Since |x| < 10^-4, |x|^3 < 10^-12, relative error less than 10^-8
  else {
    return (-0.5*x + 1.0)*x;
  }
}
exports.log1p = log1p;

//
// Modified from:
//  C++: http://www.johndcook.com/cpp_erf.html
//
var TABLE_LOOKUP = [
  0.000000000000000,
  0.000000000000000,
  0.693147180559945,
  1.791759469228055,
  3.178053830347946,
  4.787491742782046,
  6.579251212010101,
  8.525161361065415,
  10.604602902745251,
  12.801827480081469,
  15.104412573075516,
  17.502307845873887,
  19.987214495661885,
  22.552163853123421,
  25.191221182738683,
  27.899271383840894,
  30.671860106080675,
  33.505073450136891,
  36.395445208033053,
  39.339884187199495,
  42.335616460753485,
  45.380138898476908,
  48.471181351835227,
  51.606675567764377,
  54.784729398112319,
  58.003605222980518,
  61.261701761002001,
  64.557538627006323,
  67.889743137181526,
  71.257038967168000,
  74.658236348830158,
  78.092223553315307,
  81.557959456115029,
  85.054467017581516,
  88.580827542197682,
  92.136175603687079,
  95.719694542143202,
  99.330612454787428,
  102.968198614513810,
  106.631760260643450,
  110.320639714757390,
  114.034211781461690,
  117.771881399745060,
  121.533081515438640,
  125.317271149356880,
  129.123933639127240,
  132.952575035616290,
  136.802722637326350,
  140.673923648234250,
  144.565743946344900,
  148.477766951773020,
  152.409592584497350,
  156.360836303078800,
  160.331128216630930,
  164.320112263195170,
  168.327445448427650,
  172.352797139162820,
  176.395848406997370,
  180.456291417543780,
  184.533828861449510,
  188.628173423671600,
  192.739047287844900,
  196.866181672889980,
  201.009316399281570,
  205.168199482641200,
  209.342586752536820,
  213.532241494563270,
  217.736934113954250,
  221.956441819130360,
  226.190548323727570,
  230.439043565776930,
  234.701723442818260,
  238.978389561834350,
  243.268849002982730,
  247.572914096186910,
  251.890402209723190,
  256.221135550009480,
  260.564940971863220,
  264.921649798552780,
  269.291097651019810,
  273.673124285693690,
  278.067573440366120,
  282.474292687630400,
  286.893133295426990,
  291.323950094270290,
  295.766601350760600,
  300.220948647014100,
  304.686856765668720,
  309.164193580146900,
  313.652829949878990,
  318.152639620209300,
  322.663499126726210,
  327.185287703775200,
  331.717887196928470,
  336.261181979198450,
  340.815058870798960,
  345.379407062266860,
  349.954118040770250,
  354.539085519440790,
  359.134205369575340,
  363.739375555563470,
  368.354496072404690,
  372.979468885689020,
  377.614197873918670,
  382.258588773060010,
  386.912549123217560,
  391.575988217329610,
  396.248817051791490,
  400.930948278915760,
  405.622296161144900,
  410.322776526937280,
  415.032306728249580,
  419.750805599544780,
  424.478193418257090,
  429.214391866651570,
  433.959323995014870,
  438.712914186121170,
  443.475088120918940,
  448.245772745384610,
  453.024896238496130,
  457.812387981278110,
  462.608178526874890,
  467.412199571608080,
  472.224383926980520,
  477.044665492585580,
  481.872979229887900,
  486.709261136839360,
  491.553448223298010,
  496.405478487217580,
  501.265290891579240,
  506.132825342034830,
  511.008022665236070,
  515.890824587822520,
  520.781173716044240,
  525.679013515995050,
  530.584288294433580,
  535.496943180169520,
  540.416924105997740,
  545.344177791154950,
  550.278651724285620,
  555.220294146894960,
  560.169054037273100,
  565.124881094874350,
  570.087725725134190,
  575.057539024710200,
  580.034272767130800,
  585.017879388839220,
  590.008311975617860,
  595.005524249382010,
  600.009470555327430,
  605.020105849423770,
  610.037385686238740,
  615.061266207084940,
  620.091704128477430,
  625.128656730891070,
  630.172081847810200,
  635.221937855059760,
  640.278183660408100,
  645.340778693435030,
  650.409682895655240,
  655.484856710889060,
  660.566261075873510,
  665.653857411105950,
  670.747607611912710,
  675.847474039736880,
  680.953419513637530,
  686.065407301994010,
  691.183401114410800,
  696.307365093814040,
  701.437263808737160,
  706.573062245787470,
  711.714725802289990,
  716.862220279103440,
  722.015511873601330,
  727.174567172815840,
  732.339353146739310,
  737.509837141777440,
  742.685986874351220,
  747.867770424643370,
  753.055156230484160,
  758.248113081374300,
  763.446610112640200,
  768.650616799717000,
  773.860102952558460,
  779.075038710167410,
  784.295394535245690,
  789.521141208958970,
  794.752249825813460,
  799.988691788643450,
  805.230438803703120,
  810.477462875863580,
  815.729736303910160,
  820.987231675937890,
  826.249921864842800,
  831.517780023906310,
  836.790779582469900,
  842.068894241700490,
  847.352097970438420,
  852.640365001133090,
  857.933669825857460,
  863.231987192405430,
  868.535292100464630,
  873.843559797865740,
  879.156765776907600,
  884.474885770751830,
  889.797895749890240,
  895.125771918679900,
  900.458490711945270,
  905.796028791646340,
  911.138363043611210,
  916.485470574328820,
  921.837328707804890,
  927.193914982476710,
  932.555207148186240,
  937.921183163208070,
  943.291821191335660,
  948.667099599019820,
  954.046996952560450,
  959.431492015349480,
  964.820563745165940,
  970.214191291518320,
  975.612353993036210,
  981.015031374908400,
  986.422203146368590,
  991.833849198223450,
  997.249949600427840,
  1002.670484599700300,
  1008.095434617181700,
  1013.524780246136200,
  1018.958502249690200,
  1024.396581558613400,
  1029.838999269135500,
  1035.285736640801600,
  1040.736775094367400,
  1046.192096209724900,
  1051.651681723869200,
  1057.115513528895000,
  1062.583573670030100,
  1068.055844343701400,
  1073.532307895632800,
  1079.012946818975000,
  1084.497743752465600,
  1089.986681478622400,
  1095.479742921962700,
  1100.976911147256000,
  1106.478169357800900,
  1111.983500893733000,
  1117.492889230361000,
  1123.006317976526100,
  1128.523770872990800,
  1134.045231790853000,
  1139.570684729984800,
  1145.100113817496100,
  1150.633503306223700,
  1156.170837573242400
];

function logFactorial(n) {
  if (n < 0) {
    throw new Error('Argument may not be negative.');
  }

  // For big values use a function
  else if (n > 254) {
    var x = n + 1;
    return (x - 0.5)*Math.log(x) - x + 0.5*Math.log(2*Math.PI) + 1.0/(12.0*x);
  }
  
  // For small values use a table lookup
  else {
    return TABLE_LOOKUP[n];
  }
}
exports.logFactorial = logFactorial;


/***/ }),

/***/ 3015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var files = (/* unused pure expression or super */ null && (['erf', 'gamma', 'beta', 'log']));

function exportFns(fns) {
  var keys = Object.keys(fns);

  for (var n = 0, r = keys.length; n < r; n++) {
    exports[ keys[n] ] = fns[keys[n]];
  }
}

exportFns(__webpack_require__(2581));
exportFns(__webpack_require__(93953));
exportFns(__webpack_require__(13862));
exportFns(__webpack_require__(33326));


/***/ }),

/***/ 24353:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactableTable = __webpack_require__(25002);

var _reactableTr = __webpack_require__(85844);

var _reactableTd = __webpack_require__(82628);

var _reactableTh = __webpack_require__(72490);

var _reactableTfoot = __webpack_require__(54336);

var _reactableThead = __webpack_require__(68369);

var _reactableSort = __webpack_require__(49213);

var _reactableUnsafe = __webpack_require__(5288);

_react2['default'].Children.children = function (children) {
    return _react2['default'].Children.map(children, function (x) {
        return x;
    }) || [];
};

// Array.prototype.find polyfill - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(predicate) {
            if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
            for (var i = 0; i < length; i++) {
                if (i in list) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return value;
                    }
                }
            }
            return undefined;
        }
    });
}

var Reactable = { Table: _reactableTable.Table, Tr: _reactableTr.Tr, Td: _reactableTd.Td, Th: _reactableTh.Th, Tfoot: _reactableTfoot.Tfoot, Thead: _reactableThead.Thead, Sort: _reactableSort.Sort, unsafe: _reactableUnsafe.unsafe };

exports["default"] = Reactable;

if (typeof window !== 'undefined') {
    window.Reactable = Reactable;
}
module.exports = exports['default'];


/***/ }),

/***/ 32455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9060);

var _reactDom2 = _interopRequireDefault(_reactDom);

var FiltererInput = (function (_React$Component) {
    _inherits(FiltererInput, _React$Component);

    function FiltererInput() {
        _classCallCheck(this, FiltererInput);

        _get(Object.getPrototypeOf(FiltererInput.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(FiltererInput, [{
        key: 'onChange',
        value: function onChange() {
            this.props.onFilter(_reactDom2['default'].findDOMNode(this).value);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('input', { type: 'text',
                className: this.props.className,
                placeholder: this.props.placeholder,
                value: this.props.value,
                onKeyUp: this.onChange.bind(this),
                onChange: this.onChange.bind(this) });
        }
    }]);

    return FiltererInput;
})(_react2['default'].Component);

exports.FiltererInput = FiltererInput;
;

var Filterer = (function (_React$Component2) {
    _inherits(Filterer, _React$Component2);

    function Filterer() {
        _classCallCheck(this, Filterer);

        _get(Object.getPrototypeOf(Filterer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Filterer, [{
        key: 'render',
        value: function render() {
            if (typeof this.props.colSpan === 'undefined') {
                throw new TypeError('Must pass a colSpan argument to Filterer');
            }

            return _react2['default'].createElement(
                'tr',
                { className: 'reactable-filterer' },
                _react2['default'].createElement(
                    'td',
                    { colSpan: this.props.colSpan },
                    _react2['default'].createElement(FiltererInput, { onFilter: this.props.onFilter,
                        value: this.props.value,
                        placeholder: this.props.placeholder,
                        className: this.props.className ? 'reactable-filter-input ' + this.props.className : 'reactable-filter-input' })
                )
            );
        }
    }]);

    return Filterer;
})(_react2['default'].Component);

exports.Filterer = Filterer;
;


/***/ }),

/***/ 10499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.extractDataFrom = extractDataFrom;

var _stringable = __webpack_require__(50354);

function extractDataFrom(key, column) {
    var value;
    if (typeof key !== 'undefined' && key !== null && key.__reactableMeta === true) {
        value = key.data[column];
    } else {
        value = key[column];
    }

    if (typeof value !== 'undefined' && value !== null && value.__reactableMeta === true) {
        value = typeof value.props.value !== 'undefined' && value.props.value !== null ? value.props.value : value.value;
    }

    return (0, _stringable.stringable)(value) ? value : '';
}


/***/ }),

/***/ 27997:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.filterPropsFrom = filterPropsFrom;
var internalProps = {
    hideTableHeader: true,
    column: true,
    columns: true,
    sortable: true,
    filterable: true,
    filtering: true,
    onFilter: true,
    filterPlaceholder: true,
    filterClassName: true,
    currentFilter: true,
    sort: true,
    sortBy: true,
    sortableColumns: true,
    onSort: true,
    defaultSort: true,
    defaultSortDescending: true,
    itemsPerPage: true,
    filterBy: true,
    hideFilterInput: true,
    noDataText: true,
    currentPage: true,
    onPageChange: true,
    previousPageLabel: true,
    nextPageLabel: true,
    pageButtonLimit: true,
    childNode: true,
    data: true,
    children: true
};

function filterPropsFrom(baseProps) {
    baseProps = baseProps || {};
    var props = {};
    for (var key in baseProps) {
        if (!(key in internalProps)) {
            props[key] = baseProps[key];
        }
    }

    return props;
}


/***/ }),

/***/ 17603:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
// this is a bit hacky - it'd be nice if React exposed an API for this


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isReactComponent = isReactComponent;

function isReactComponent(thing) {
    return thing !== null && typeof thing === 'object' && typeof thing.props !== 'undefined';
}


/***/ }),

/***/ 50354:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.stringable = stringable;

function stringable(thing) {
    return thing !== null && typeof thing !== 'undefined' && typeof (thing.toString === 'function');
}


/***/ }),

/***/ 12900:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.toArray = toArray;

function toArray(obj) {
    var ret = [];
    for (var attr in obj) {
        ret[attr] = obj;
    }

    return ret;
}


/***/ }),

/***/ 5290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

function pageHref(num) {
    return '#page-' + (num + 1);
}

var Paginator = (function (_React$Component) {
    _inherits(Paginator, _React$Component);

    function Paginator() {
        _classCallCheck(this, Paginator);

        _get(Object.getPrototypeOf(Paginator.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Paginator, [{
        key: 'handlePrevious',
        value: function handlePrevious(e) {
            e.preventDefault();
            this.props.onPageChange(this.props.currentPage - 1);
        }
    }, {
        key: 'handleNext',
        value: function handleNext(e) {
            e.preventDefault();
            this.props.onPageChange(this.props.currentPage + 1);
        }
    }, {
        key: 'handlePageButton',
        value: function handlePageButton(page, e) {
            e.preventDefault();
            this.props.onPageChange(page);
        }
    }, {
        key: 'renderPrevious',
        value: function renderPrevious() {
            if (this.props.currentPage > 0) {
                return _react2['default'].createElement(
                    'a',
                    { className: 'reactable-previous-page',
                        href: pageHref(this.props.currentPage - 1),
                        onClick: this.handlePrevious.bind(this) },
                    this.props.previousPageLabel || 'Previous'
                );
            }
        }
    }, {
        key: 'renderNext',
        value: function renderNext() {
            if (this.props.currentPage < this.props.numPages - 1) {
                return _react2['default'].createElement(
                    'a',
                    { className: 'reactable-next-page',
                        href: pageHref(this.props.currentPage + 1),
                        onClick: this.handleNext.bind(this) },
                    this.props.nextPageLabel || 'Next'
                );
            }
        }
    }, {
        key: 'renderPageButton',
        value: function renderPageButton(className, pageNum) {

            return _react2['default'].createElement(
                'a',
                { className: className,
                    key: pageNum,
                    href: pageHref(pageNum),
                    onClick: this.handlePageButton.bind(this, pageNum) },
                pageNum + 1
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (typeof this.props.colSpan === 'undefined') {
                throw new TypeError('Must pass a colSpan argument to Paginator');
            }

            if (typeof this.props.numPages === 'undefined') {
                throw new TypeError('Must pass a non-zero numPages argument to Paginator');
            }

            if (typeof this.props.currentPage === 'undefined') {
                throw new TypeError('Must pass a currentPage argument to Paginator');
            }

            var pageButtons = [];
            var pageButtonLimit = this.props.pageButtonLimit;
            var currentPage = this.props.currentPage;
            var numPages = this.props.numPages;
            var lowerHalf = Math.round(pageButtonLimit / 2);
            var upperHalf = pageButtonLimit - lowerHalf;

            for (var i = 0; i < this.props.numPages; i++) {
                var showPageButton = false;
                var pageNum = i;
                var className = "reactable-page-button";
                if (currentPage === i) {
                    className += " reactable-current-page";
                }
                pageButtons.push(this.renderPageButton(className, pageNum));
            }

            if (currentPage - pageButtonLimit + lowerHalf > 0) {
                if (currentPage > numPages - lowerHalf) {
                    pageButtons.splice(0, numPages - pageButtonLimit);
                } else {
                    pageButtons.splice(0, currentPage - pageButtonLimit + lowerHalf);
                }
            }

            if (numPages - currentPage > upperHalf) {
                pageButtons.splice(pageButtonLimit, pageButtons.length - pageButtonLimit);
            }

            return _react2['default'].createElement(
                'tbody',
                { className: 'reactable-pagination' },
                _react2['default'].createElement(
                    'tr',
                    null,
                    _react2['default'].createElement(
                        'td',
                        { colSpan: this.props.colSpan },
                        this.renderPrevious(),
                        pageButtons,
                        this.renderNext()
                    )
                )
            );
        }
    }]);

    return Paginator;
})(_react2['default'].Component);

exports.Paginator = Paginator;
;


/***/ }),

/***/ 49213:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var Sort = {
    Numeric: function Numeric(a, b) {
        var valA = parseFloat(a.toString().replace(/,/g, ''));
        var valB = parseFloat(b.toString().replace(/,/g, ''));

        // Sort non-numeric values alphabetically at the bottom of the list
        if (isNaN(valA) && isNaN(valB)) {
            valA = a;
            valB = b;
        } else {
            if (isNaN(valA)) {
                return 1;
            }
            if (isNaN(valB)) {
                return -1;
            }
        }

        if (valA < valB) {
            return -1;
        }
        if (valA > valB) {
            return 1;
        }

        return 0;
    },

    NumericInteger: function NumericInteger(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return a > b ? 1 : -1;
        }

        return a - b;
    },

    Currency: function Currency(a, b) {
        // Parse out dollar signs, then do a regular numeric sort
        a = a.replace(/[^0-9\.\-\,]+/g, '');
        b = b.replace(/[^0-9\.\-\,]+/g, '');

        return exports.Sort.Numeric(a, b);
    },

    Date: (function (_Date) {
        function Date(_x, _x2) {
            return _Date.apply(this, arguments);
        }

        Date.toString = function () {
            return _Date.toString();
        };

        return Date;
    })(function (a, b) {
        // Note: this function tries to do a standard javascript string -> date conversion
        // If you need more control over the date string format, consider using a different
        // date library and writing your own function
        var valA = Date.parse(a);
        var valB = Date.parse(b);

        // Handle non-date values with numeric sort
        // Sort non-numeric values alphabetically at the bottom of the list
        if (isNaN(valA) || isNaN(valB)) {
            return exports.Sort.Numeric(a, b);
        }

        if (valA > valB) {
            return 1;
        }
        if (valB > valA) {
            return -1;
        }

        return 0;
    }),

    CaseInsensitive: function CaseInsensitive(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
};
exports.Sort = Sort;


/***/ }),

/***/ 25002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _libFilter_props_from = __webpack_require__(27997);

var _libExtract_data_from = __webpack_require__(10499);

var _unsafe = __webpack_require__(5288);

var _thead = __webpack_require__(68369);

var _th = __webpack_require__(72490);

var _tr = __webpack_require__(85844);

var _tfoot = __webpack_require__(54336);

var _paginator = __webpack_require__(5290);

var Table = (function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        this.state = {
            currentPage: this.props.currentPage ? this.props.currentPage : 0,
            currentSort: {
                column: null,
                direction: this.props.defaultSortDescending ? -1 : 1
            },
            filter: ''
        };

        // Set the state of the current sort to the default sort
        if (props.sortBy !== false || props.defaultSort !== false) {
            var sortingColumn = props.sortBy || props.defaultSort;
            this.state.currentSort = this.getCurrentSort(sortingColumn);
        }
    }

    _createClass(Table, [{
        key: 'filterBy',
        value: function filterBy(filter) {
            this.setState({ filter: filter });
        }

        // Translate a user defined column array to hold column objects if strings are specified
        // (e.g. ['column1'] => [{key: 'column1', label: 'column1'}])
    }, {
        key: 'translateColumnsArray',
        value: function translateColumnsArray(columns) {
            return columns.map((function (column, i) {
                if (typeof column === 'string') {
                    return {
                        key: column,
                        label: column
                    };
                } else {
                    if (typeof column.sortable !== 'undefined') {
                        var sortFunction = column.sortable === true ? 'default' : column.sortable;
                        this._sortable[column.key] = sortFunction;
                    }

                    return column;
                }
            }).bind(this));
        }
    }, {
        key: 'parseChildData',
        value: function parseChildData(props) {
            var data = [],
                tfoot = undefined;

            // Transform any children back to a data array
            if (typeof props.children !== 'undefined') {
                _react2['default'].Children.forEach(props.children, (function (child) {
                    if (typeof child === 'undefined' || child === null) {
                        return;
                    }

                    switch (`${child.type}`) {
                        case `${_thead.Thead}`:
                            break;
                        case `${_tfoot.Tfoot}`:
                            if (typeof tfoot !== 'undefined') {
                                console.warn('You can only have one <Tfoot>, but more than one was specified.' + 'Ignoring all but the last one');
                            }
                            tfoot = child;
                            break;
                        case `${_tr.Tr}`:
                            var childData = child.props.data || {};

                            _react2['default'].Children.forEach(child.props.children, function (descendant) {
                                // TODO
                                /* if (descendant.type.ConvenienceConstructor === Td) { */
                                if (typeof descendant !== 'object' || descendant == null) {
                                    return;
                                } else if (typeof descendant.props.column !== 'undefined') {
                                    var value = undefined;

                                    if (typeof descendant.props.data !== 'undefined') {
                                        value = descendant.props.data;
                                    } else if (typeof descendant.props.children !== 'undefined') {
                                        value = descendant.props.children;
                                    } else {
                                        console.warn('exports.Td specified without ' + 'a `data` property or children, ' + 'ignoring');
                                        return;
                                    }

                                    childData[descendant.props.column] = {
                                        value: value,
                                        props: (0, _libFilter_props_from.filterPropsFrom)(descendant.props),
                                        __reactableMeta: true
                                    };
                                } else {
                                    console.warn('exports.Td specified without a ' + '`column` property, ignoring');
                                }
                            });

                            data.push({
                                data: childData,
                                props: (0, _libFilter_props_from.filterPropsFrom)(child.props),
                                __reactableMeta: true
                            });
                            break;

                        default:
                            console.warn('The only possible children of <Table> are <Thead>, <Tr>, ' + 'or one <Tfoot>.');
                    }
                }).bind(this));
            }

            return { data: data, tfoot: tfoot };
        }
    }, {
        key: 'initialize',
        value: function initialize(props) {
            this.data = props.data || [];

            var _parseChildData = this.parseChildData(props);

            var data = _parseChildData.data;
            var tfoot = _parseChildData.tfoot;

            this.data = this.data.concat(data);
            this.tfoot = tfoot;

            this.initializeSorts(props);
            this.initializeFilters(props);
        }
    }, {
        key: 'initializeFilters',
        value: function initializeFilters(props) {
            this._filterable = {};
            // Transform filterable properties into a more friendly list
            for (var i in props.filterable) {
                var column = props.filterable[i];
                var columnName = undefined,
                    filterFunction = undefined;

                if (column instanceof Object) {
                    if (typeof column.column !== 'undefined') {
                        columnName = column.column;
                    } else {
                        console.warn('Filterable column specified without column name');
                        continue;
                    }

                    if (typeof column.filterFunction === 'function') {
                        filterFunction = column.filterFunction;
                    } else {
                        filterFunction = 'default';
                    }
                } else {
                    columnName = column;
                    filterFunction = 'default';
                }

                this._filterable[columnName] = filterFunction;
            }
        }
    }, {
        key: 'initializeSorts',
        value: function initializeSorts(props) {
            this._sortable = {};
            // Transform sortable properties into a more friendly list
            for (var i in props.sortable) {
                var column = props.sortable[i];
                var columnName = undefined,
                    sortFunction = undefined;

                if (column instanceof Object) {
                    if (typeof column.column !== 'undefined') {
                        columnName = column.column;
                    } else {
                        console.warn('Sortable column specified without column name');
                        return;
                    }

                    if (typeof column.sortFunction === 'function') {
                        sortFunction = column.sortFunction;
                    } else {
                        sortFunction = 'default';
                    }
                } else {
                    columnName = column;
                    sortFunction = 'default';
                }

                this._sortable[columnName] = sortFunction;
            }
        }
    }, {
        key: 'getCurrentSort',
        value: function getCurrentSort(column) {
            var columnName = undefined,
                sortDirection = undefined;

            if (column instanceof Object) {
                if (typeof column.column !== 'undefined') {
                    columnName = column.column;
                } else {
                    console.warn('Default column specified without column name');
                    return;
                }

                if (typeof column.direction !== 'undefined') {
                    if (column.direction === 1 || column.direction === 'asc') {
                        sortDirection = 1;
                    } else if (column.direction === -1 || column.direction === 'desc') {
                        sortDirection = -1;
                    } else {
                        var defaultDirection = this.props.defaultSortDescending ? 'descending' : 'ascending';

                        console.warn('Invalid default sort specified. Defaulting to ' + defaultDirection);
                        sortDirection = this.props.defaultSortDescending ? -1 : 1;
                    }
                } else {
                    sortDirection = this.props.defaultSortDescending ? -1 : 1;
                }
            } else {
                columnName = column;
                sortDirection = this.props.defaultSortDescending ? -1 : 1;
            }

            return {
                column: columnName,
                direction: sortDirection
            };
        }
    }, {
        key: 'updateCurrentSort',
        value: function updateCurrentSort(sortBy) {
            if (sortBy !== false && sortBy.column !== this.state.currentSort.column && sortBy.direction !== this.state.currentSort.direction) {

                this.setState({ currentSort: this.getCurrentSort(sortBy) });
            }
        }
    }, {
        key: 'updateCurrentPage',
        value: function updateCurrentPage(nextPage) {
            if (typeof nextPage !== 'undefined' && nextPage !== this.state.currentPage) {
                this.setState({ currentPage: nextPage });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.initialize(this.props);
            this.sortByCurrentSort();
            this.filterBy(this.props.filterBy);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.initialize(nextProps);
            this.updateCurrentPage(nextProps.currentPage);
            this.updateCurrentSort(nextProps.sortBy);
            this.sortByCurrentSort();
            this.filterBy(nextProps.filterBy);
        }
    }, {
        key: 'applyFilter',
        value: function applyFilter(filter, children) {
            // Helper function to apply filter text to a list of table rows
            filter = filter.toLowerCase();
            var matchedChildren = [];

            for (var i = 0; i < children.length; i++) {
                var data = children[i].props.data;

                for (var filterColumn in this._filterable) {
                    if (typeof data[filterColumn] !== 'undefined') {
                        // Default filter
                        if (typeof this._filterable[filterColumn] === 'undefined' || this._filterable[filterColumn] === 'default') {
                            if ((0, _libExtract_data_from.extractDataFrom)(data, filterColumn).toString().toLowerCase().indexOf(filter) > -1) {
                                matchedChildren.push(children[i]);
                                break;
                            }
                        } else {
                            // Apply custom filter
                            if (this._filterable[filterColumn]((0, _libExtract_data_from.extractDataFrom)(data, filterColumn).toString(), filter)) {
                                matchedChildren.push(children[i]);
                                break;
                            }
                        }
                    }
                }
            }

            return matchedChildren;
        }
    }, {
        key: 'sortByCurrentSort',
        value: function sortByCurrentSort() {
            // Apply a sort function according to the current sort in the state.
            // This allows us to perform a default sort even on a non sortable column.
            var currentSort = this.state.currentSort;

            if (currentSort.column === null) {
                return;
            }

            this.data.sort((function (a, b) {
                var keyA = (0, _libExtract_data_from.extractDataFrom)(a, currentSort.column);
                keyA = (0, _unsafe.isUnsafe)(keyA) ? keyA.toString() : keyA || '';
                var keyB = (0, _libExtract_data_from.extractDataFrom)(b, currentSort.column);
                keyB = (0, _unsafe.isUnsafe)(keyB) ? keyB.toString() : keyB || '';

                // Default sort
                if (typeof this._sortable[currentSort.column] === 'undefined' || this._sortable[currentSort.column] === 'default') {

                    // Reverse direction if we're doing a reverse sort
                    if (keyA < keyB) {
                        return -1 * currentSort.direction;
                    }

                    if (keyA > keyB) {
                        return 1 * currentSort.direction;
                    }

                    return 0;
                } else {
                    // Reverse columns if we're doing a reverse sort
                    if (currentSort.direction === 1) {
                        return this._sortable[currentSort.column](keyA, keyB);
                    } else {
                        return this._sortable[currentSort.column](keyB, keyA);
                    }
                }
            }).bind(this));
        }
    }, {
        key: 'onSort',
        value: function onSort(column) {
            // Don't perform sort on unsortable columns
            if (typeof this._sortable[column] === 'undefined') {
                return;
            }

            var currentSort = this.state.currentSort;

            if (currentSort.column === column) {
                currentSort.direction *= -1;
            } else {
                currentSort.column = column;
                currentSort.direction = this.props.defaultSortDescending ? -1 : 1;
            }

            // Set the current sort and pass it to the sort function
            this.setState({ currentSort: currentSort });
            this.sortByCurrentSort();

            if (typeof this.props.onSort === 'function') {
                this.props.onSort(currentSort);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            var children = [];
            var columns = undefined;
            var userColumnsSpecified = false;
            var showHeaders = typeof this.props.hideTableHeader === 'undefined';

            var firstChild = null;

            if (this.props.children) {
                if (this.props.children.length > 0 && this.props.children[0] && this.props.children[0].type === _thead.Thead) {
                    firstChild = this.props.children[0];
                } else if (this.props.children.type === _thead.Thead) {
                    firstChild = this.props.children;
                }
            }

            if (firstChild !== null) {
                columns = _thead.Thead.getColumns(firstChild);
            } else {
                columns = this.props.columns || [];
            }

            if (columns.length > 0) {
                userColumnsSpecified = true;
                columns = this.translateColumnsArray(columns);
            }

            // Build up table rows
            if (this.data && typeof this.data.map === 'function') {
                // Build up the columns array
                children = children.concat(this.data.map((function (rawData, i) {
                    var data = rawData;
                    var props = {};
                    if (rawData.__reactableMeta === true) {
                        data = rawData.data;
                        props = rawData.props;
                    }

                    // Loop through the keys in each data row and build a td for it
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            // Update the columns array with the data's keys if columns were not
                            // already specified
                            if (userColumnsSpecified === false) {
                                (function () {
                                    var column = {
                                        key: k,
                                        label: k
                                    };

                                    // Only add a new column if it doesn't already exist in the columns array
                                    if (columns.find(function (element) {
                                        return element.key === column.key;
                                    }) === undefined) {
                                        columns.push(column);
                                    }
                                })();
                            }
                        }
                    }

                    return _react2['default'].createElement(_tr.Tr, _extends({ columns: columns, key: i, data: data }, props));
                }).bind(this)));
            }

            if (this.props.sortable === true) {
                for (var i = 0; i < columns.length; i++) {
                    this._sortable[columns[i].key] = 'default';
                }
            }

            // Determine if we render the filter box
            var filtering = false;
            if (this.props.filterable && Array.isArray(this.props.filterable) && this.props.filterable.length > 0 && !this.props.hideFilterInput) {
                filtering = true;
            }

            // Apply filters
            var filteredChildren = children;
            if (this.state.filter !== '') {
                filteredChildren = this.applyFilter(this.state.filter, filteredChildren);
            }

            // Determine pagination properties and which columns to display
            var itemsPerPage = 0;
            var pagination = false;
            var numPages = undefined;
            var currentPage = this.state.currentPage;
            var pageButtonLimit = this.props.pageButtonLimit || 10;

            var currentChildren = filteredChildren;
            if (this.props.itemsPerPage > 0) {
                itemsPerPage = this.props.itemsPerPage;
                numPages = Math.ceil(filteredChildren.length / itemsPerPage);

                if (currentPage > numPages - 1) {
                    currentPage = numPages - 1;
                }

                pagination = true;
                currentChildren = filteredChildren.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
            }

            // Manually transfer props
            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

            var noDataText = this.props.noDataText ? _react2['default'].createElement(
                'tr',
                { className: 'reactable-no-data' },
                _react2['default'].createElement(
                    'td',
                    { colSpan: columns.length },
                    this.props.noDataText
                )
            ) : null;

            var tableHeader = null;
            if (columns && columns.length > 0 && showHeaders) {
                tableHeader = _react2['default'].createElement(_thead.Thead, { columns: columns,
                    filtering: filtering,
                    onFilter: function (filter) {
                        _this.setState({ filter: filter });
                        if (_this.props.onFilter) {
                            _this.props.onFilter(filter);
                        }
                    },
                    filterPlaceholder: this.props.filterPlaceholder,
                    filterClassName: this.props.filterClassName,
                    currentFilter: this.state.filter,
                    sort: this.state.currentSort,
                    sortableColumns: this._sortable,
                    onSort: this.onSort.bind(this),
                    key: 'thead' });
            }
            return _react2['default'].createElement(
                'table',
                props,
                tableHeader,
                _react2['default'].createElement(
                    'tbody',
                    { className: 'reactable-data', key: 'tbody' },
                    currentChildren.length > 0 ? currentChildren : noDataText
                ),
                pagination === true ? _react2['default'].createElement(_paginator.Paginator, { colSpan: columns.length,
                    pageButtonLimit: pageButtonLimit,
                    numPages: numPages,
                    currentPage: currentPage,
                    onPageChange: function (page) {
                        _this.setState({ currentPage: page });
                        if (_this.props.onPageChange) {
                            _this.props.onPageChange(page);
                        }
                    },
                    previousPageLabel: this.props.previousPageLabel,
                    nextPageLabel: this.props.nextPageLabel,
                    key: 'paginator' }) : null,
                this.tfoot
            );
        }
    }]);

    return Table;
})(_react2['default'].Component);

exports.Table = Table;

Table.defaultProps = {
    sortBy: false,
    defaultSort: false,
    defaultSortDescending: false,
    itemsPerPage: 0,
    filterBy: '',
    hideFilterInput: false
};


/***/ }),

/***/ 82628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _libIs_react_component = __webpack_require__(17603);

var _libStringable = __webpack_require__(50354);

var _unsafe = __webpack_require__(5288);

var _libFilter_props_from = __webpack_require__(27997);

var Td = (function (_React$Component) {
    _inherits(Td, _React$Component);

    function Td() {
        _classCallCheck(this, Td);

        _get(Object.getPrototypeOf(Td.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Td, [{
        key: 'stringifyIfNotReactComponent',
        value: function stringifyIfNotReactComponent(object) {
            if (!(0, _libIs_react_component.isReactComponent)(object) && (0, _libStringable.stringable)(object) && typeof object !== 'undefined') {
                return object.toString();
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            // Attach any properties on the column to this Td object to allow things like custom event handlers
            var mergedProps = (0, _libFilter_props_from.filterPropsFrom)(this.props);
            if (typeof this.props.column === 'object') {
                for (var key in this.props.column) {
                    if (key !== 'key' && key !== 'name') {
                        mergedProps[key] = this.props.column[key];
                    }
                }
            }
            // handleClick aliases onClick event
            mergedProps.onClick = this.props.handleClick;

            var stringifiedChildProps;

            if (typeof this.props.data === 'undefined') {
                stringifiedChildProps = this.stringifyIfNotReactComponent(this.props.children);
            }

            if ((0, _unsafe.isUnsafe)(this.props.children)) {
                return _react2['default'].createElement('td', _extends({}, mergedProps, {
                    dangerouslySetInnerHTML: { __html: this.props.children.toString() } }));
            } else {
                return _react2['default'].createElement(
                    'td',
                    mergedProps,
                    stringifiedChildProps || this.props.children
                );
            }
        }
    }]);

    return Td;
})(_react2['default'].Component);

exports.Td = Td;
;


/***/ }),

/***/ 54336:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var Tfoot = (function (_React$Component) {
    _inherits(Tfoot, _React$Component);

    function Tfoot() {
        _classCallCheck(this, Tfoot);

        _get(Object.getPrototypeOf(Tfoot.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Tfoot, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('tfoot', this.props);
        }
    }]);

    return Tfoot;
})(_react2['default'].Component);

exports.Tfoot = Tfoot;


/***/ }),

/***/ 72490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _unsafe = __webpack_require__(5288);

var _libFilter_props_from = __webpack_require__(27997);

var Th = (function (_React$Component) {
    _inherits(Th, _React$Component);

    function Th() {
        _classCallCheck(this, Th);

        _get(Object.getPrototypeOf(Th.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Th, [{
        key: 'render',
        value: function render() {
            var childProps = undefined;

            if ((0, _unsafe.isUnsafe)(this.props.children)) {
                return _react2['default'].createElement('th', _extends({}, (0, _libFilter_props_from.filterPropsFrom)(this.props), {
                    dangerouslySetInnerHTML: { __html: this.props.children.toString() } }));
            } else {
                return _react2['default'].createElement(
                    'th',
                    (0, _libFilter_props_from.filterPropsFrom)(this.props),
                    this.props.children
                );
            }
        }
    }]);

    return Th;
})(_react2['default'].Component);

exports.Th = Th;
;


/***/ }),

/***/ 68369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _th = __webpack_require__(72490);

var _filterer = __webpack_require__(32455);

var _libFilter_props_from = __webpack_require__(27997);

var Thead = (function (_React$Component) {
    _inherits(Thead, _React$Component);

    function Thead() {
        _classCallCheck(this, Thead);

        _get(Object.getPrototypeOf(Thead.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Thead, [{
        key: 'handleClickTh',
        value: function handleClickTh(column) {
            this.props.onSort(column.key);
        }
    }, {
        key: 'handleKeyDownTh',
        value: function handleKeyDownTh(column, event) {
            if (event.keyCode === 13) {
                this.props.onSort(column.key);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // Declare the list of Ths
            var Ths = [];
            for (var index = 0; index < this.props.columns.length; index++) {
                var column = this.props.columns[index];
                var thClass = 'reactable-th-' + column.key.replace(/\s+/g, '-').toLowerCase();
                var sortClass = '';
                var thRole = null;

                if (this.props.sortableColumns[column.key]) {
                    sortClass += 'reactable-header-sortable ';
                    thRole = 'button';
                }

                if (this.props.sort.column === column.key) {
                    sortClass += 'reactable-header-sort';
                    if (this.props.sort.direction === 1) {
                        sortClass += '-asc';
                    } else {
                        sortClass += '-desc';
                    }
                }

                if (sortClass.length > 0) {
                    thClass += ' ' + sortClass;
                }

                if (typeof column.props === 'object' && typeof column.props.className === 'string') {
                    thClass += ' ' + column.props.className;
                }

                Ths.push(_react2['default'].createElement(
                    _th.Th,
                    _extends({}, column.props, {
                        className: thClass,
                        key: index,
                        onClick: this.handleClickTh.bind(this, column),
                        onKeyDown: this.handleKeyDownTh.bind(this, column),
                        role: thRole,
                        tabIndex: '0' }),
                    column.label
                ));
            }

            // Manually transfer props
            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

            return _react2['default'].createElement(
                'thead',
                props,
                this.props.filtering === true ? _react2['default'].createElement(_filterer.Filterer, {
                    colSpan: this.props.columns.length,
                    onFilter: this.props.onFilter,
                    placeholder: this.props.filterPlaceholder,
                    value: this.props.currentFilter,
                    className: this.props.filterClassName
                }) : null,
                _react2['default'].createElement(
                    'tr',
                    { className: 'reactable-column-header' },
                    Ths
                )
            );
        }
    }], [{
        key: 'getColumns',
        value: function getColumns(component) {
            // Can't use React.Children.map since that doesn't return a proper array
            var columns = [];
            _react2['default'].Children.forEach(component.props.children, function (th) {
                var column = {};
                if (!th) return;
                if (typeof th.props !== 'undefined') {
                    column.props = (0, _libFilter_props_from.filterPropsFrom)(th.props);

                    // use the content as the label & key
                    if (typeof th.props.children !== 'undefined') {
                        column.label = th.props.children;
                        column.key = column.label;
                    }

                    // the key in the column attribute supersedes the one defined previously
                    if (typeof th.props.column === 'string') {
                        column.key = th.props.column;

                        // in case we don't have a label yet
                        if (typeof column.label === 'undefined') {
                            column.label = column.key;
                        }
                    }
                }

                if (typeof column.key === 'undefined') {
                    throw new TypeError('<th> must have either a "column" property or a string ' + 'child');
                } else {
                    columns.push(column);
                }
            });

            return columns;
        }
    }]);

    return Thead;
})(_react2['default'].Component);

exports.Thead = Thead;
;


/***/ }),

/***/ 85844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _td = __webpack_require__(82628);

var _libTo_array = __webpack_require__(12900);

var _libFilter_props_from = __webpack_require__(27997);

var Tr = (function (_React$Component) {
    _inherits(Tr, _React$Component);

    function Tr() {
        _classCallCheck(this, Tr);

        _get(Object.getPrototypeOf(Tr.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Tr, [{
        key: 'render',
        value: function render() {
            var children = (0, _libTo_array.toArray)(_react2['default'].Children.children(this.props.children));

            if (this.props.data && this.props.columns && typeof this.props.columns.map === 'function') {
                if (typeof children.concat === 'undefined') {
                    console.log(children);
                }

                children = children.concat(this.props.columns.map((function (_ref, i) {
                    var _ref$props = _ref.props;
                    var props = _ref$props === undefined ? {} : _ref$props;

                    var column = _objectWithoutProperties(_ref, ['props']);

                    if (this.props.data.hasOwnProperty(column.key)) {
                        var value = this.props.data[column.key];

                        if (typeof value !== 'undefined' && value !== null && value.__reactableMeta === true) {
                            props = value.props;
                            value = value.value;
                        }

                        return _react2['default'].createElement(
                            _td.Td,
                            _extends({ column: column, key: column.key }, props),
                            value
                        );
                    } else {
                        return _react2['default'].createElement(_td.Td, { column: column, key: column.key });
                    }
                }).bind(this)));
            }

            // Manually transfer props
            var props = (0, _libFilter_props_from.filterPropsFrom)(this.props);

            return _react2['default'].createElement('tr', props, children);
        }
    }]);

    return Tr;
})(_react2['default'].Component);

exports.Tr = Tr;
;

Tr.childNode = _td.Td;
Tr.dataType = 'object';


/***/ }),

/***/ 5288:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.unsafe = unsafe;
exports.isUnsafe = isUnsafe;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Unsafe = (function () {
    function Unsafe(content) {
        _classCallCheck(this, Unsafe);

        this.content = content;
    }

    _createClass(Unsafe, [{
        key: "toString",
        value: function toString() {
            return this.content;
        }
    }]);

    return Unsafe;
})();

function unsafe(str) {
    return new Unsafe(str);
}

;

function isUnsafe(obj) {
    return obj instanceof Unsafe;
}

;


/***/ })

}]);