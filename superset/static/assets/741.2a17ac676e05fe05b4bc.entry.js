(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[741],{

/***/ 28195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}


//# sourceMappingURL=invariant.esm.js.map


/***/ }),

/***/ 15047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ shallowEqual)
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
  var compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (compareResult !== void 0) {
    return !!compareResult;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
}


//# sourceMappingURL=shallowequal.esm.js.map


/***/ }),

/***/ 79512:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! geolib 2.0.23 by Manuel Bieh
* Library to provide geo functions like distance calculation,
* conversion of decimal coordinates to sexagesimal and vice versa, etc.
* WGS 84 (World Geodetic System 1984)
* 
* @author Manuel Bieh
* @url http://www.manuelbieh.com/
* @version 2.0.23
* @license MIT 
**/;(function(global, undefined) {

    "use strict";

    function Geolib() {}

    // Constants
    Geolib.TO_RAD = Math.PI / 180;
    Geolib.TO_DEG = 180 / Math.PI;
    Geolib.PI_X2 = Math.PI * 2;
    Geolib.PI_DIV4 = Math.PI / 4;

    // Setting readonly defaults
    var geolib = Object.create(Geolib.prototype, {
        version: {
            value: "2.0.23"
        },
        radius: {
            value: 6378137
        },
        minLat: {
            value: -90
        },
        maxLat: {
            value: 90
        },
        minLon: {
            value: -180
        },
        maxLon: {
            value: 180
        },
        sexagesimalPattern: {
            value: /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,2}))?)'\s*(([0-9]{1,3}(\.([0-9]{1,4}))?)"\s*)?([NEOSW]?)$/
        },
        measures: {
            value: Object.create(Object.prototype, {
                "m" : {value: 1},
                "km": {value: 0.001},
                "cm": {value: 100},
                "mm": {value: 1000},
                "mi": {value: (1 / 1609.344)},
                "sm": {value: (1 / 1852.216)},
                "ft": {value: (100 / 30.48)},
                "in": {value: (100 / 2.54)},
                "yd": {value: (1 / 0.9144)}
            })
        },
        prototype: {
            value: Geolib.prototype
        },
        extend: {
            value: function(methods, overwrite) {
                for(var prop in methods) {
                    if(typeof geolib.prototype[prop] === 'undefined' || overwrite === true) {
                        if(typeof methods[prop] === 'function' && typeof methods[prop].bind === 'function') {
                            geolib.prototype[prop] = methods[prop].bind(geolib);
                        } else {
                            geolib.prototype[prop] = methods[prop];
                        }
                    }
                }
            }
        }
    });

    if (typeof(Number.prototype.toRad) === 'undefined') {
        Number.prototype.toRad = function() {
            return this * Geolib.TO_RAD;
        };
    }

    if (typeof(Number.prototype.toDeg) === 'undefined') {
        Number.prototype.toDeg = function() {
            return this * Geolib.TO_DEG;
        };
    }

    // Here comes the magic
    geolib.extend({

        decimal: {},

        sexagesimal: {},

        distance: null,

        getKeys: function(point) {

            // GeoJSON Array [longitude, latitude(, elevation)]
            if(Object.prototype.toString.call(point) == '[object Array]') {

                return {
                    longitude: point.length >= 1 ? 0 : undefined,
                    latitude: point.length >= 2 ? 1 : undefined,
                    elevation: point.length >= 3 ? 2 : undefined
                };

            }

            var getKey = function(possibleValues) {

                var key;

                possibleValues.every(function(val) {
                    // TODO: check if point is an object
                    if(typeof point != 'object') {
                        return true;
                    }
                    return point.hasOwnProperty(val) ? (function() { key = val; return false; }()) : true;
                });

                return key;

            };

            var longitude = getKey(['lng', 'lon', 'longitude']);
            var latitude = getKey(['lat', 'latitude']);
            var elevation = getKey(['alt', 'altitude', 'elevation', 'elev']);

            // return undefined if not at least one valid property was found
            if(typeof latitude == 'undefined' &&
                typeof longitude == 'undefined' &&
                typeof elevation == 'undefined') {
                return undefined;
            }

            return {
                latitude: latitude,
                longitude: longitude,
                elevation: elevation
            };

        },

        // returns latitude of a given point, converted to decimal
        // set raw to true to avoid conversion
        getLat: function(point, raw) {
            return raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]);
        },

        // Alias for getLat
        latitude: function(point) {
            return this.getLat.call(this, point);
        },

        // returns longitude of a given point, converted to decimal
        // set raw to true to avoid conversion
        getLon: function(point, raw) {
            return raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude]);
        },

        // Alias for getLon
        longitude: function(point) {
            return this.getLon.call(this, point);
        },

        getElev: function(point) {
            return point[this.getKeys(point).elevation];
        },

        // Alias for getElev
        elevation: function(point) {
            return this.getElev.call(this, point);
        },

        coords: function(point, raw) {

            var retval = {
                latitude: raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]),
                longitude: raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude])
            };

            var elev = point[this.getKeys(point).elevation];

            if(typeof elev !== 'undefined') {
                retval['elevation'] = elev;
            }

            return retval;

        },

        // Alias for coords
        ll: function(point, raw) {
            return this.coords.call(this, point, raw);
        },


        // checks if a variable contains a valid latlong object
        validate: function(point) {

            var keys = this.getKeys(point);

            if(typeof keys === 'undefined' || typeof keys.latitude === 'undefined' || keys.longitude === 'undefined') {
                return false;
            }

            var lat = point[keys.latitude];
            var lng = point[keys.longitude];

            if(typeof lat === 'undefined' || !this.isDecimal(lat) && !this.isSexagesimal(lat)) {
                return false;
            }

            if(typeof lng === 'undefined' || !this.isDecimal(lng) && !this.isSexagesimal(lng)) {
                return false;
            }

            lat = this.useDecimal(lat);
            lng = this.useDecimal(lng);

            if(lat < this.minLat || lat > this.maxLat || lng < this.minLon || lng > this.maxLon) {
                return false;
            }

            return true;

        },

        /**
        * Calculates geodetic distance between two points specified by latitude/longitude using
        * Vincenty inverse formula for ellipsoids
        * Vincenty Inverse Solution of Geodesics on the Ellipsoid (c) Chris Veness 2002-2010
        * (Licensed under CC BY 3.0)
        *
        * @param    object    Start position {latitude: 123, longitude: 123}
        * @param    object    End position {latitude: 123, longitude: 123}
        * @param    integer   Accuracy (in meters)
        * @param    integer   Precision (in decimal cases)
        * @return   integer   Distance (in meters)
        */
        getDistance: function(start, end, accuracy, precision) {

            accuracy = Math.floor(accuracy) || 1;
            precision = Math.floor(precision) || 0;

            var s = this.coords(start);
            var e = this.coords(end);

            var a = 6378137, b = 6356752.314245,  f = 1/298.257223563;  // WGS-84 ellipsoid params
            var L = (e['longitude']-s['longitude']).toRad();

            var cosSigma, sigma, sinAlpha, cosSqAlpha, cos2SigmaM, sinSigma;

            var U1 = Math.atan((1-f) * Math.tan(parseFloat(s['latitude']).toRad()));
            var U2 = Math.atan((1-f) * Math.tan(parseFloat(e['latitude']).toRad()));
            var sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
            var sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);

            var lambda = L, lambdaP, iterLimit = 100;
            do {
                var sinLambda = Math.sin(lambda), cosLambda = Math.cos(lambda);
                sinSigma = (
                    Math.sqrt(
                        (
                            cosU2 * sinLambda
                        ) * (
                            cosU2 * sinLambda
                        ) + (
                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
                        ) * (
                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
                        )
                    )
                );
                if (sinSigma === 0) {
                    return geolib.distance = 0;  // co-incident points
                }

                cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
                sigma = Math.atan2(sinSigma, cosSigma);
                sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
                cosSqAlpha = 1 - sinAlpha * sinAlpha;
                cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;

                if (isNaN(cos2SigmaM)) {
                    cos2SigmaM = 0;  // equatorial line: cosSqAlpha=0 (§6)
                }
                var C = (
                    f / 16 * cosSqAlpha * (
                        4 + f * (
                            4 - 3 * cosSqAlpha
                        )
                    )
                );
                lambdaP = lambda;
                lambda = (
                    L + (
                        1 - C
                    ) * f * sinAlpha * (
                        sigma + C * sinSigma * (
                            cos2SigmaM + C * cosSigma * (
                                -1 + 2 * cos2SigmaM * cos2SigmaM
                            )
                        )
                    )
                );

            } while (Math.abs(lambda-lambdaP) > 1e-12 && --iterLimit>0);

            if (iterLimit === 0) {
                return NaN;  // formula failed to converge
            }

            var uSq = (
                cosSqAlpha * (
                    a * a - b * b
                ) / (
                    b*b
                )
            );

            var A = (
                1 + uSq / 16384 * (
                    4096 + uSq * (
                        -768 + uSq * (
                            320 - 175 * uSq
                        )
                    )
                )
            );

            var B = (
                uSq / 1024 * (
                    256 + uSq * (
                        -128 + uSq * (
                            74-47 * uSq
                        )
                    )
                )
            );

            var deltaSigma = (
                B * sinSigma * (
                    cos2SigmaM + B / 4 * (
                        cosSigma * (
                            -1 + 2 * cos2SigmaM * cos2SigmaM
                        ) -B / 6 * cos2SigmaM * (
                            -3 + 4 * sinSigma * sinSigma
                        ) * (
                            -3 + 4 * cos2SigmaM * cos2SigmaM
                        )
                    )
                )
            );

            var distance = b * A * (sigma - deltaSigma);

            distance = distance.toFixed(precision); // round to 1mm precision

            //if (start.hasOwnProperty(elevation) && end.hasOwnProperty(elevation)) {
            if (typeof this.elevation(start) !== 'undefined' && typeof this.elevation(end) !== 'undefined') {
                var climb = Math.abs(this.elevation(start) - this.elevation(end));
                distance = Math.sqrt(distance * distance + climb * climb);
            }

            return this.distance = Math.round(distance * Math.pow(10, precision) / accuracy) * accuracy / Math.pow(10, precision);

            /*
            // note: to return initial/final bearings in addition to distance, use something like:
            var fwdAz = Math.atan2(cosU2*sinLambda,  cosU1*sinU2-sinU1*cosU2*cosLambda);
            var revAz = Math.atan2(cosU1*sinLambda, -sinU1*cosU2+cosU1*sinU2*cosLambda);

            return { distance: s, initialBearing: fwdAz.toDeg(), finalBearing: revAz.toDeg() };
            */

        },


        /**
        * Calculates the distance between two spots.
        * This method is more simple but also far more inaccurate
        *
        * @param    object    Start position {latitude: 123, longitude: 123}
        * @param    object    End position {latitude: 123, longitude: 123}
        * @param    integer   Accuracy (in meters)
        * @return   integer   Distance (in meters)
        */
        getDistanceSimple: function(start, end, accuracy) {

            accuracy = Math.floor(accuracy) || 1;

            var distance =
                Math.round(
                    Math.acos(
                        Math.sin(
                            this.latitude(end).toRad()
                        ) *
                        Math.sin(
                            this.latitude(start).toRad()
                        ) +
                        Math.cos(
                            this.latitude(end).toRad()
                        ) *
                        Math.cos(
                            this.latitude(start).toRad()
                        ) *
                        Math.cos(
                            this.longitude(start).toRad() - this.longitude(end).toRad()
                        )
                    ) * this.radius
                );

            return geolib.distance = Math.floor(Math.round(distance/accuracy)*accuracy);

        },


    /**
        * Calculates the center of a collection of geo coordinates
        *
        * @param        array       Collection of coords [{latitude: 51.510, longitude: 7.1321}, {latitude: 49.1238, longitude: "8° 30' W"}, ...]
        * @return       object      {latitude: centerLat, longitude: centerLng}
        */
        getCenter: function(coords) {

            var coordsArray = coords;
            if(typeof coords === 'object' && !(coords instanceof Array)) {

                coordsArray = [];

                for(var key in coords) {
                    coordsArray.push(
                        this.coords(coords[key])
                    );
                }

            }

            if(!coordsArray.length) {
                return false;
            }

            var X = 0.0;
            var Y = 0.0;
            var Z = 0.0;
            var lat, lon, hyp;

            coordsArray.forEach(function(coord) {

                lat = this.latitude(coord).toRad();
                lon = this.longitude(coord).toRad();

                X += Math.cos(lat) * Math.cos(lon);
                Y += Math.cos(lat) * Math.sin(lon);
                Z += Math.sin(lat);

            }, this);

            var nb_coords = coordsArray.length;
            X = X / nb_coords;
            Y = Y / nb_coords;
            Z = Z / nb_coords;

            lon = Math.atan2(Y, X);
            hyp = Math.sqrt(X * X + Y * Y);
            lat = Math.atan2(Z, hyp);

            return {
                latitude: (lat * Geolib.TO_DEG).toFixed(6),
                longitude: (lon * Geolib.TO_DEG).toFixed(6)
            };

        },


        /**
        * Gets the max and min, latitude, longitude, and elevation (if provided).
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return   object      {maxLat: maxLat,
        *                     minLat: minLat
        *                     maxLng: maxLng,
        *                     minLng: minLng,
        *                     maxElev: maxElev,
        *                     minElev: minElev}
        */
        getBounds: function(coords) {

            if (!coords.length) {
                return false;
            }

            var useElevation = this.elevation(coords[0]);

            var stats = {
                maxLat: -Infinity,
                minLat: Infinity,
                maxLng: -Infinity,
                minLng: Infinity
            };

            if (typeof useElevation != 'undefined') {
                stats.maxElev = 0;
                stats.minElev = Infinity;
            }

            for (var i = 0, l = coords.length; i < l; ++i) {

                stats.maxLat = Math.max(this.latitude(coords[i]), stats.maxLat);
                stats.minLat = Math.min(this.latitude(coords[i]), stats.minLat);
                stats.maxLng = Math.max(this.longitude(coords[i]), stats.maxLng);
                stats.minLng = Math.min(this.longitude(coords[i]), stats.minLng);

                if (useElevation) {
                    stats.maxElev = Math.max(this.elevation(coords[i]), stats.maxElev);
                    stats.minElev = Math.min(this.elevation(coords[i]), stats.minElev);
                }

            }

            return stats;

        },

        /**
        * Calculates the center of the bounds of geo coordinates.
        *
        * On polygons like political borders (eg. states)
        * this may gives a closer result to human expectation, than `getCenter`,
        * because that function can be disturbed by uneven distribution of
        * point in different sides.
        * Imagine the US state Oklahoma: `getCenter` on that gives a southern
        * point, because the southern border contains a lot more nodes,
        * than the others.
        *
        * @param        array       Collection of coords [{latitude: 51.510, longitude: 7.1321}, {latitude: 49.1238, longitude: "8° 30' W"}, ...]
        * @return       object      {latitude: centerLat, longitude: centerLng}
        */
        getCenterOfBounds: function(coords) {
            var b = this.getBounds(coords);
            var latitude = b.minLat + ((b.maxLat - b.minLat) / 2);
            var longitude = b.minLng + ((b.maxLng - b.minLng) / 2);
            return {
                latitude: parseFloat(latitude.toFixed(6)),
                longitude: parseFloat(longitude.toFixed(6))
            };
        },


        /**
        * Computes the bounding coordinates of all points on the surface
        * of the earth less than or equal to the specified great circle
        * distance.
        *
        * @param object Point position {latitude: 123, longitude: 123}
        * @param number Distance (in meters).
        * @return array Collection of two points defining the SW and NE corners.
        */
        getBoundsOfDistance: function(point, distance) {

            var latitude = this.latitude(point);
            var longitude = this.longitude(point);

            var radLat = latitude.toRad();
            var radLon = longitude.toRad();

            var radDist = distance / this.radius;
            var minLat = radLat - radDist;
            var maxLat = radLat + radDist;

            var MAX_LAT_RAD = this.maxLat.toRad();
            var MIN_LAT_RAD = this.minLat.toRad();
            var MAX_LON_RAD = this.maxLon.toRad();
            var MIN_LON_RAD = this.minLon.toRad();

            var minLon;
            var maxLon;

            if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {

                var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
                minLon = radLon - deltaLon;

                if (minLon < MIN_LON_RAD) {
                    minLon += Geolib.PI_X2;
                }

                maxLon = radLon + deltaLon;

                if (maxLon > MAX_LON_RAD) {
                    maxLon -= Geolib.PI_X2;
                }

            } else {
                // A pole is within the distance.
                minLat = Math.max(minLat, MIN_LAT_RAD);
                maxLat = Math.min(maxLat, MAX_LAT_RAD);
                minLon = MIN_LON_RAD;
                maxLon = MAX_LON_RAD;
            }

            return [
                // Southwest
                {
                    latitude: minLat.toDeg(),
                    longitude: minLon.toDeg()
                },
                // Northeast
                {
                    latitude: maxLat.toDeg(),
                    longitude: maxLon.toDeg()
                }
            ];

        },


        /**
        * Checks whether a point is inside of a polygon or not.
        * Note that the polygon coords must be in correct order!
        *
        * @param        object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       bool        true if the coordinate is inside the given polygon
        */
        isPointInside: function(latlng, coords) {

            for(var c = false, i = -1, l = coords.length, j = l - 1; ++i < l; j = i) {

                if(
                    (
                        (this.longitude(coords[i]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[j])) ||
                        (this.longitude(coords[j]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[i]))
                    ) &&
                    (
                        this.latitude(latlng) < (this.latitude(coords[j]) - this.latitude(coords[i])) *
                        (this.longitude(latlng) - this.longitude(coords[i])) /
                        (this.longitude(coords[j]) - this.longitude(coords[i])) +
                        this.latitude(coords[i])
                    )
                ) {
                    c = !c;
                }

            }

            return c;

        },


       /**
        * Pre calculate the polygon coords, to speed up the point inside check.
        * Use this function before calling isPointInsideWithPreparedPolygon()
        * @see          Algorythm from http://alienryderflex.com/polygon/
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        */
        preparePolygonForIsPointInsideOptimized: function(coords) {

            for(var i = 0, j = coords.length-1; i < coords.length; i++) {

            if(this.longitude(coords[j]) === this.longitude(coords[i])) {

                    coords[i].constant = this.latitude(coords[i]);
                    coords[i].multiple = 0;

                } else {

                    coords[i].constant = this.latitude(coords[i]) - (
                        this.longitude(coords[i]) * this.latitude(coords[j])
                    ) / (
                        this.longitude(coords[j]) - this.longitude(coords[i])
                    ) + (
                        this.longitude(coords[i])*this.latitude(coords[i])
                    ) / (
                        this.longitude(coords[j])-this.longitude(coords[i])
                    );

                    coords[i].multiple = (
                        this.latitude(coords[j])-this.latitude(coords[i])
                    ) / (
                        this.longitude(coords[j])-this.longitude(coords[i])
                    );

                }

                j=i;

            }

        },

      /**
       * Checks whether a point is inside of a polygon or not.
       * "This is useful if you have many points that need to be tested against the same (static) polygon."
       * Please call the function preparePolygonForIsPointInsideOptimized() with the same coords object before using this function.
       * Note that the polygon coords must be in correct order!
       *
       * @see          Algorythm from http://alienryderflex.com/polygon/
       *
       * @param     object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
       * @param     array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
       * @return        bool        true if the coordinate is inside the given polygon
       */
        isPointInsideWithPreparedPolygon: function(point, coords) {

            var flgPointInside = false,
            y = this.longitude(point),
            x = this.latitude(point);

            for(var i = 0, j = coords.length-1; i < coords.length; i++) {

                if ((this.longitude(coords[i]) < y && this.longitude(coords[j]) >=y ||
                    this.longitude(coords[j]) < y && this.longitude(coords[i]) >= y)) {

                    flgPointInside^=(y*coords[i].multiple+coords[i].constant < x);

                }

                j=i;

            }

            return flgPointInside;

        },


        /**
        * Shortcut for geolib.isPointInside()
        */
        isInside: function() {
            return this.isPointInside.apply(this, arguments);
        },


        /**
        * Checks whether a point is inside of a circle or not.
        *
        * @param        object      coordinate to check (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      coordinate of the circle's center (e.g. {latitude: 51.4812, longitude: 7.4025})
        * @param        integer     maximum radius in meters
        * @return       bool        true if the coordinate is within the given radius
        */
        isPointInCircle: function(latlng, center, radius) {
            return this.getDistance(latlng, center) < radius;
        },


        /**
        * Shortcut for geolib.isPointInCircle()
        */
        withinRadius: function() {
            return this.isPointInCircle.apply(this, arguments);
        },


        /**
        * Gets rhumb line bearing of two points. Find out about the difference between rhumb line and
        * great circle bearing on Wikipedia. It's quite complicated. Rhumb line should be fine in most cases:
        *
        * http://en.wikipedia.org/wiki/Rhumb_line#General_and_mathematical_description
        *
        * Function heavily based on Doug Vanderweide's great PHP version (licensed under GPL 3.0)
        * http://www.dougv.com/2009/07/13/calculating-the-bearing-and-compass-rose-direction-between-two-latitude-longitude-coordinates-in-php/
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @return       integer     calculated bearing
        */
        getRhumbLineBearing: function(originLL, destLL) {

            // difference of longitude coords
            var diffLon = this.longitude(destLL).toRad() - this.longitude(originLL).toRad();

            // difference latitude coords phi
            var diffPhi = Math.log(
                Math.tan(
                    this.latitude(destLL).toRad() / 2 + Geolib.PI_DIV4
                ) /
                Math.tan(
                    this.latitude(originLL).toRad() / 2 + Geolib.PI_DIV4
                )
            );

            // recalculate diffLon if it is greater than pi
            if(Math.abs(diffLon) > Math.PI) {
                if(diffLon > 0) {
                    diffLon = (Geolib.PI_X2 - diffLon) * -1;
                }
                else {
                    diffLon = Geolib.PI_X2 + diffLon;
                }
            }

            //return the angle, normalized
            return (Math.atan2(diffLon, diffPhi).toDeg() + 360) % 360;

        },


        /**
        * Gets great circle bearing of two points. See description of getRhumbLineBearing for more information
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @return       integer     calculated bearing
        */
        getBearing: function(originLL, destLL) {

            destLL['latitude'] = this.latitude(destLL);
            destLL['longitude'] = this.longitude(destLL);
            originLL['latitude'] = this.latitude(originLL);
            originLL['longitude'] = this.longitude(originLL);

            var bearing = (
                (
                    Math.atan2(
                        Math.sin(
                            destLL['longitude'].toRad() -
                            originLL['longitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['latitude'].toRad()
                        ),
                        Math.cos(
                            originLL['latitude'].toRad()
                        ) *
                        Math.sin(
                            destLL['latitude'].toRad()
                        ) -
                        Math.sin(
                            originLL['latitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['latitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['longitude'].toRad() - originLL['longitude'].toRad()
                        )
                    )
                ).toDeg() + 360
            ) % 360;

            return bearing;

        },


        /**
        * Gets the compass direction from an origin coordinate to a destination coordinate.
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @param        string      Bearing mode. Can be either circle or rhumbline
        * @return       object      Returns an object with a rough (NESW) and an exact direction (NNE, NE, ENE, E, ESE, etc).
        */
        getCompassDirection: function(originLL, destLL, bearingMode) {

            var direction;
            var bearing;

            if(bearingMode == 'circle') {
                // use great circle bearing
                bearing = this.getBearing(originLL, destLL);
            } else {
                // default is rhumb line bearing
                bearing = this.getRhumbLineBearing(originLL, destLL);
            }

            switch(Math.round(bearing/22.5)) {
                case 1:
                    direction = {exact: "NNE", rough: "N"};
                    break;
                case 2:
                    direction = {exact: "NE", rough: "N"};
                    break;
                case 3:
                    direction = {exact: "ENE", rough: "E"};
                    break;
                case 4:
                    direction = {exact: "E", rough: "E"};
                    break;
                case 5:
                    direction = {exact: "ESE", rough: "E"};
                    break;
                case 6:
                    direction = {exact: "SE", rough: "E"};
                    break;
                case 7:
                    direction = {exact: "SSE", rough: "S"};
                    break;
                case 8:
                    direction = {exact: "S", rough: "S"};
                    break;
                case 9:
                    direction = {exact: "SSW", rough: "S"};
                    break;
                case 10:
                    direction = {exact: "SW", rough: "S"};
                    break;
                case 11:
                    direction = {exact: "WSW", rough: "W"};
                    break;
                case 12:
                    direction = {exact: "W", rough: "W"};
                    break;
                case 13:
                    direction = {exact: "WNW", rough: "W"};
                    break;
                case 14:
                    direction = {exact: "NW", rough: "W"};
                    break;
                case 15:
                    direction = {exact: "NNW", rough: "N"};
                    break;
                default:
                    direction = {exact: "N", rough: "N"};
            }

            direction['bearing'] = bearing;
            return direction;

        },


        /**
        * Shortcut for getCompassDirection
        */
        getDirection: function(originLL, destLL, bearingMode) {
            return this.getCompassDirection.apply(this, arguments);
        },


        /**
        * Sorts an array of coords by distance from a reference coordinate
        *
        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       array       ordered array
        */
        orderByDistance: function(latlng, coords) {

            var coordsArray = Object.keys(coords).map(function(idx) {
                var distance = this.getDistance(latlng, coords[idx]);
                var augmentedCoord = Object.create(coords[idx]);
                augmentedCoord.distance = distance;
                augmentedCoord.key = idx;
                return augmentedCoord;
            }, this);

            return coordsArray.sort(function(a, b) {
                return a.distance - b.distance;
            });

        },

        /**
        * Check if a point lies in line created by two other points
        *
        * @param    object    Point to check: {latitude: 123, longitude: 123}
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @return   boolean
        */
        isPointInLine: function(point, start, end) {

            return (this.getDistance(start, point, 1, 3)+this.getDistance(point, end, 1, 3)).toFixed(3)==this.getDistance(start, end, 1, 3);
        },

                /**
        * Check if a point lies within a given distance from a line created by two other points
        *
        * @param    object    Point to check: {latitude: 123, longitude: 123}
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @pararm   float     maximum distance from line
        * @return   boolean
        */
        isPointNearLine: function(point, start, end, distance) {
            return this.getDistanceFromLine(point, start, end) < distance;
        },

                     /**
        * return the minimum distance from a point to a line
        *
        * @param    object    Point away from line
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @return   float     distance from point to line
        */
        getDistanceFromLine: function(point, start, end) {
            var d1 = this.getDistance(start, point, 1, 3);
            var d2 = this.getDistance(point, end, 1, 3);
            var d3 = this.getDistance(start, end, 1, 3);
            var distance = 0;

            // alpha is the angle between the line from start to point, and from start to end //
            var alpha = Math.acos((d1*d1 + d3*d3 - d2*d2)/(2*d1*d3));
            // beta is the angle between the line from end to point and from end to start //
            var beta = Math.acos((d2*d2 + d3*d3 - d1*d1)/(2*d2*d3));

            // if the angle is greater than 90 degrees, then the minimum distance is the
            // line from the start to the point //
            if(alpha>Math.PI/2) {
                distance = d1;
            }
            // same for the beta //
            else if(beta > Math.PI/2) {
                distance = d2;
            }
            // otherwise the minimum distance is achieved through a line perpendular to the start-end line,
            // which goes from the start-end line to the point //
            else {
                distance = Math.sin(alpha) * d1;
            }

            return distance;
        },

        /**
        * Finds the nearest coordinate to a reference coordinate
        *
        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       array       ordered array
        */
        findNearest: function(latlng, coords, offset, limit) {

            offset = offset || 0;
            limit = limit || 1;
            var ordered = this.orderByDistance(latlng, coords);

            if(limit === 1) {
                return ordered[offset];
            } else {
                return ordered.splice(offset, limit);
            }

        },


        /**
        * Calculates the length of a given path
        *
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       integer     length of the path (in meters)
        */
        getPathLength: function(coords) {

            var dist = 0;
            var last;

            for (var i = 0, l = coords.length; i < l; ++i) {
                if(last) {
                    //console.log(coords[i], last, this.getDistance(coords[i], last));
                    dist += this.getDistance(this.coords(coords[i]), last);
                }
                last = this.coords(coords[i]);
            }

            return dist;

        },


        /**
        * Calculates the speed between to points within a given time span.
        *
        * @param        object      coords with javascript timestamp {latitude: 51.5143, longitude: 7.4138, time: 1360231200880}
        * @param        object      coords with javascript timestamp {latitude: 51.5502, longitude: 7.4323, time: 1360245600460}
        * @param        object      options (currently "unit" is the only option. Default: km(h));
        * @return       float       speed in unit per hour
        */
        getSpeed: function(start, end, options) {

            var unit = options && options.unit || 'km';

            if(unit == 'mph') {
                unit = 'mi';
            } else if(unit == 'kmh') {
                unit = 'km';
            }

            var distance = geolib.getDistance(start, end);
            var time = ((end.time*1)/1000) - ((start.time*1)/1000);
            var mPerHr = (distance/time)*3600;
            var speed = Math.round(mPerHr * this.measures[unit] * 10000)/10000;
            return speed;

        },


        /**
         * Computes the destination point given an initial point, a distance
         * and a bearing
         *
         * see http://www.movable-type.co.uk/scripts/latlong.html for the original code
         *
         * @param        object     start coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
         * @param        float      longitude of the inital point in degree
         * @param        float      distance to go from the inital point in meter
         * @param        float      bearing in degree of the direction to go, e.g. 0 = north, 180 = south
         * @param        float      optional (in meter), defaults to mean radius of the earth
         * @return       object     {latitude: destLat (in degree), longitude: destLng (in degree)}
         */
        computeDestinationPoint: function(start, distance, bearing, radius) {

            var lat = this.latitude(start);
            var lng = this.longitude(start);

            radius = (typeof radius === 'undefined') ? this.radius : Number(radius);

            var δ = Number(distance) / radius; // angular distance in radians
            var θ = Number(bearing).toRad();

            var φ1 = Number(lat).toRad();
            var λ1 = Number(lng).toRad();

            var φ2 = Math.asin( Math.sin(φ1)*Math.cos(δ) +
                Math.cos(φ1)*Math.sin(δ)*Math.cos(θ) );
            var λ2 = λ1 + Math.atan2(Math.sin(θ)*Math.sin(δ)*Math.cos(φ1),
                    Math.cos(δ)-Math.sin(φ1)*Math.sin(φ2));
            λ2 = (λ2+3*Math.PI) % (2*Math.PI) - Math.PI; // normalise to -180..+180°

            return {
                latitude: φ2.toDeg(),
                longitude: λ2.toDeg()
            };

        },


        /**
        * Converts a distance from meters to km, mm, cm, mi, ft, in or yd
        *
        * @param        string      Format to be converted in
        * @param        float       Distance in meters
        * @param        float       Decimal places for rounding (default: 4)
        * @return       float       Converted distance
        */
        convertUnit: function(unit, distance, round) {

            if(distance === 0) {

                return 0;

            } else if(typeof distance === 'undefined') {

                if(this.distance === null) {
                    throw new Error('No distance was given');
                } else if(this.distance === 0) {
                    return 0;
                } else {
                    distance = this.distance;
                }

            }

            unit = unit || 'm';
            round = (null == round ? 4 : round);

            if(typeof this.measures[unit] !== 'undefined') {
                return this.round(distance * this.measures[unit], round);
            } else {
                throw new Error('Unknown unit for conversion.');
            }

        },


        /**
        * Checks if a value is in decimal format or, if neccessary, converts to decimal
        *
        * @param        mixed       Value(s) to be checked/converted (array of latlng objects, latlng object, sexagesimal string, float)
        * @return       float       Input data in decimal format
        */
        useDecimal: function(value) {

            if(Object.prototype.toString.call(value) === '[object Array]') {

                var geolib = this;

                value = value.map(function(val) {

                    //if(!isNaN(parseFloat(val))) {
                    if(geolib.isDecimal(val)) {

                        return geolib.useDecimal(val);

                    } else if(typeof val == 'object') {

                        if(geolib.validate(val)) {

                            return geolib.coords(val);

                        } else {

                            for(var prop in val) {
                                val[prop] = geolib.useDecimal(val[prop]);
                            }

                            return val;

                        }

                    } else if(geolib.isSexagesimal(val)) {

                        return geolib.sexagesimal2decimal(val);

                    } else {

                        return val;

                    }

                });

                return value;

            } else if(typeof value === 'object' && this.validate(value)) {

                return this.coords(value);

            } else if(typeof value === 'object') {

                for(var prop in value) {
                    value[prop] = this.useDecimal(value[prop]);
                }

                return value;

            }


            if (this.isDecimal(value)) {

                return parseFloat(value);

            } else if(this.isSexagesimal(value) === true) {

                return parseFloat(this.sexagesimal2decimal(value));

            }

            throw new Error('Unknown format.');

        },

        /**
        * Converts a decimal coordinate value to sexagesimal format
        *
        * @param        float       decimal
        * @return       string      Sexagesimal value (XX° YY' ZZ")
        */
        decimal2sexagesimal: function(dec) {

            if (dec in this.sexagesimal) {
                return this.sexagesimal[dec];
            }

            var tmp = dec.toString().split('.');

            var deg = Math.abs(tmp[0]);
            var min = ('0.' + (tmp[1] || 0))*60;
            var sec = min.toString().split('.');

            min = Math.floor(min);
            sec = (('0.' + (sec[1] || 0)) * 60).toFixed(2);

            this.sexagesimal[dec] = (deg + '° ' + min + "' " + sec + '"');

            return this.sexagesimal[dec];

        },


        /**
        * Converts a sexagesimal coordinate to decimal format
        *
        * @param        float       Sexagesimal coordinate
        * @return       string      Decimal value (XX.XXXXXXXX)
        */
        sexagesimal2decimal: function(sexagesimal) {

            if (sexagesimal in this.decimal) {
                return this.decimal[sexagesimal];
            }

            var regEx = new RegExp(this.sexagesimalPattern);
            var data = regEx.exec(sexagesimal);
            var min = 0, sec = 0;

            if(data) {
                min = parseFloat(data[2]/60);
                sec = parseFloat(data[4]/3600) || 0;
            }

            var dec = ((parseFloat(data[1]) + min + sec)).toFixed(8);
            //var   dec = ((parseFloat(data[1]) + min + sec));

                // South and West are negative decimals
                dec = (data[7] == 'S' || data[7] == 'W') ? parseFloat(-dec) : parseFloat(dec);
                //dec = (data[7] == 'S' || data[7] == 'W') ? -dec : dec;

            this.decimal[sexagesimal] = dec;

            return dec;

        },


        /**
        * Checks if a value is in decimal format
        *
        * @param        string      Value to be checked
        * @return       bool        True if in sexagesimal format
        */
        isDecimal: function(value) {

            value = value.toString().replace(/\s*/, '');

            // looks silly but works as expected
            // checks if value is in decimal format
            return (!isNaN(parseFloat(value)) && parseFloat(value) == value);

        },


        /**
        * Checks if a value is in sexagesimal format
        *
        * @param        string      Value to be checked
        * @return       bool        True if in sexagesimal format
        */
        isSexagesimal: function(value) {

            value = value.toString().replace(/\s*/, '');

            return this.sexagesimalPattern.test(value);

        },

        round: function(value, n) {
            var decPlace = Math.pow(10, n);
            return Math.round(value * decPlace)/decPlace;
        }

    });

    // Node module
    if ( true && typeof module.exports !== 'undefined') {

        module.exports = geolib;

        // react native
        if (typeof global === 'object') {
          global.geolib = geolib;
        }

    // AMD module
    } else if (true) {

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return geolib;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // we're in a browser
    } else {}

}(this));


/***/ }),

/***/ 18172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vV": () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t)}function _(){return true||0,U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return false&&0,en.get(t,n)},set:function(t){var r=this[Q]; false&&0,en.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.O&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),k(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),k(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),k(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),k(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{N:function(n,t){return new f(n,t)},T:function(n,t){return new c(n,t)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;E(n),k(n)}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),on.deleteProperty=function(t,r){return false&&0,en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return false&&0,en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t)},this.produceWithPatches=function(n,t){return"function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; false&&(0);var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 53893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "red": () => (/* binding */ red),
/* harmony export */   "pink": () => (/* binding */ pink),
/* harmony export */   "purple": () => (/* binding */ purple),
/* harmony export */   "deepPurple": () => (/* binding */ deepPurple),
/* harmony export */   "indigo": () => (/* binding */ indigo),
/* harmony export */   "blue": () => (/* binding */ blue),
/* harmony export */   "lightBlue": () => (/* binding */ lightBlue),
/* harmony export */   "cyan": () => (/* binding */ cyan),
/* harmony export */   "teal": () => (/* binding */ teal),
/* harmony export */   "green": () => (/* binding */ green),
/* harmony export */   "lightGreen": () => (/* binding */ lightGreen),
/* harmony export */   "lime": () => (/* binding */ lime),
/* harmony export */   "yellow": () => (/* binding */ yellow),
/* harmony export */   "amber": () => (/* binding */ amber),
/* harmony export */   "orange": () => (/* binding */ orange),
/* harmony export */   "deepOrange": () => (/* binding */ deepOrange),
/* harmony export */   "brown": () => (/* binding */ brown),
/* harmony export */   "grey": () => (/* binding */ grey),
/* harmony export */   "blueGrey": () => (/* binding */ blueGrey),
/* harmony export */   "darkText": () => (/* binding */ darkText),
/* harmony export */   "lightText": () => (/* binding */ lightText),
/* harmony export */   "darkIcons": () => (/* binding */ darkIcons),
/* harmony export */   "lightIcons": () => (/* binding */ lightIcons),
/* harmony export */   "white": () => (/* binding */ white),
/* harmony export */   "black": () => (/* binding */ black),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var red = {"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"};
var pink = {"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"};
var purple = {"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"};
var deepPurple = {"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"};
var indigo = {"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"};
var blue = {"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"};
var lightBlue = {"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"};
var cyan = {"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"};
var teal = {"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"};
var green = {"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"};
var lightGreen = {"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"};
var lime = {"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"};
var yellow = {"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"};
var amber = {"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"};
var orange = {"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"};
var deepOrange = {"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"};
var brown = {"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"};
var grey = {"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"};
var blueGrey = {"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"};
var darkText = {"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"};
var lightText = {"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"};
var darkIcons = {"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"};
var lightIcons = {"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"};
var white = "#ffffff";
var black = "#000000";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  red: red,
  pink: pink,
  purple: purple,
  deepPurple: deepPurple,
  indigo: indigo,
  blue: blue,
  lightBlue: lightBlue,
  cyan: cyan,
  teal: teal,
  green: green,
  lightGreen: lightGreen,
  lime: lime,
  yellow: yellow,
  amber: amber,
  orange: orange,
  deepOrange: deepOrange,
  brown: brown,
  grey: grey,
  blueGrey: blueGrey,
  darkText: darkText,
  lightText: lightText,
  darkIcons: darkIcons,
  lightIcons: lightIcons,
  white: white,
  black: black
});


/***/ }),

/***/ 9563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _AlphaPointer = __webpack_require__(82519);

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer2.default
};

exports["default"] = (0, _common.ColorWrap)(AlphaPicker);

/***/ }),

/***/ 82519:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlphaPointer = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = AlphaPointer;

/***/ }),

/***/ 88858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Block = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

var _BlockSwatches = __webpack_require__(53014);

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = exports.Block = function Block(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    _color2.default.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: _color2.default.getContrastingColor(hex),
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, { 'hide-triangle': triangle === 'hide' });

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'block-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.head },
      transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: '6px 6px 0 0' }),
      _react2.default.createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange, onSwatchHover: onSwatchHover }),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};

Block.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['top', 'hide'])
};

Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top'
};

exports["default"] = (0, _common.ColorWrap)(Block);

/***/ }),

/***/ 53014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BlockSwatches = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports["default"] = BlockSwatches;

/***/ }),

/***/ 21847:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Chrome = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _ChromeFields = __webpack_require__(32564);

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = __webpack_require__(14066);

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = __webpack_require__(20289);

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chrome = exports.Chrome = function Chrome(_ref) {
  var onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        width: '225px',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.color },
          _react2.default.createElement(
            'div',
            { style: styles.swatch },
            _react2.default.createElement('div', { style: styles.active }),
            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.toggles },
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              onChange: onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_ChromeFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

Chrome.propTypes = {
  disableAlpha: _propTypes2.default.bool
};

Chrome.defaultProps = {
  disableAlpha: false
};

exports["default"] = (0, _common.ColorWrap)(Chrome);

/***/ }),

/***/ 32564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromeFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

var ChromeFields = exports.ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChromeFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: ''
    }, _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    }, _this.handleChange = function (data, e) {
      if (data.hex) {
        _color2.default.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(data.s && data.s || _this.props.hsl.s),
          l: Number(data.l && data.l || _this.props.hsl.l),
          source: 'hsl'
        }, e);
      }
    }, _this.showHighlight = function (e) {
      e.target.style.background = '#eee';
    }, _this.hideHighlight = function (e) {
      e.target.style.background = 'transparent';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChromeFields, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.hsl.a === 1 && this.state.view !== 'hex') {
        this.setState({ view: 'hex' });
      } else if (this.state.view !== 'rgb' && this.state.view !== 'hsl') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hsl.a !== 1 && this.state.view === 'hex') {
        this.setState({ view: 'rgb' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: styles.toggle },
          _react2.default.createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                return _this2.icon = icon;
              } },
            _react2.default.createElement(
              'svg',
              {
                style: styles.svg,
                viewBox: '0 0 24 24',
                onMouseOver: this.showHighlight,
                onMouseEnter: this.showHighlight,
                onMouseOut: this.hideHighlight
              },
              _react2.default.createElement('path', {
                ref: function ref(iconUp) {
                  return _this2.iconUp = iconUp;
                },
                fill: '#333',
                d: 'M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z'
              }),
              _react2.default.createElement('path', {
                ref: function ref(iconDown) {
                  return _this2.iconDown = iconDown;
                },
                fill: '#333',
                d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z'
              })
            )
          )
        )
      );
    }
  }]);

  return ChromeFields;
}(_react2.default.Component);

exports["default"] = ChromeFields;

/***/ }),

/***/ 14066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromePointer = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointer = exports.ChromePointer = function ChromePointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = ChromePointer;

/***/ }),

/***/ 20289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromePointerCircle = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = ChromePointerCircle;

/***/ }),

/***/ 9703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Circle = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _materialColors = __webpack_require__(53893);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(1150);

var _CircleSwatch = __webpack_require__(26249);

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = exports.Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  });

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_CircleSwatch2.default, {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  circleSize: _propTypes2.default.number,
  circleSpacing: _propTypes2.default.number
};

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']]
};

exports["default"] = (0, _common.ColorWrap)(Circle);

/***/ }),

/***/ 26249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircleSwatch = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + circleSize / 2 + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      style: styles.Swatch,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

exports["default"] = (0, _reactcss.handleHover)(CircleSwatch);

/***/ }),

/***/ 57319:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _alpha = __webpack_require__(66713);

var alpha = _interopRequireWildcard(_alpha);

var _Checkboard = __webpack_require__(34349);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = alpha.calculateChange(e, skip, _this.props, _this.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(_react.PureComponent || _react.Component);

exports["default"] = Alpha;

/***/ }),

/***/ 34349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Checkboard = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = __webpack_require__(45704);

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports["default"] = Checkboard;

/***/ }),

/***/ 88288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(23279);

var _debounce2 = _interopRequireDefault(_debounce);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.handleSwatchHover = function (data, event) {
        var isValidColor = _color2.default.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = _color2.default.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };

      _this.state = _extends({}, _color2.default.toState(props.color, 0));

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState(_extends({}, _color2.default.toState(nextProps.color, this.state.oldHue)));
      }
    }, {
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }

        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }]);

    return ColorPicker;
  }(_react.PureComponent || _react.Component);

  ColorPicker.propTypes = _extends({}, Picker.propTypes);

  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });

  return ColorPicker;
};

exports["default"] = ColorWrap;

/***/ }),

/***/ 27747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      if (_this.props.label) {
        _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, e.target.value), e);
      } else {
        _this.props.onChange && _this.props.onChange(e.target.value, e);
      }

      _this.setState({ value: e.target.value });
    };

    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var stringValue = String(e.target.value);
      var isPercentage = stringValue.indexOf('%') > -1;
      var number = Number(stringValue.replace(/%/g, ''));
      if (!isNaN(number)) {
        var amount = _this.props.arrowOffset || 1;

        // Up
        if (e.keyCode === 38) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number + amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number + amount, e);
          }

          if (isPercentage) {
            _this.setState({ value: number + amount + '%' });
          } else {
            _this.setState({ value: number + amount });
          }
        }

        // Down
        if (e.keyCode === 40) {
          if (_this.props.label !== null) {
            _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, number - amount), e);
          } else {
            _this.props.onChange && _this.props.onChange(number - amount, e);
          }

          if (isPercentage) {
            _this.setState({ value: number - amount + '%' });
          } else {
            _this.setState({ value: number - amount });
          }
        }
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_defineProperty({}, _this.props.label, newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.input;
      if (nextProps.value !== this.state.value) {
        if (input === document.activeElement) {
          this.setState({ blurValue: String(nextProps.value).toUpperCase() });
        } else {
          this.setState({ value: String(nextProps.value).toUpperCase(), blurValue: !this.state.blurValue && String(nextProps.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: 'false'
        }),
        this.props.label && !this.props.hideLabel ? _react2.default.createElement(
          'span',
          { style: styles.label, onMouseDown: this.handleMouseDown },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(_react.PureComponent || _react.Component);

exports["default"] = EditableInput;

/***/ }),

/***/ 26358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _hue = __webpack_require__(33716);

var hue = _interopRequireWildcard(_hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e, skip) {
      var change = hue.calculateChange(e, skip, _this.props, _this.container);
      change && _this.props.onChange && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$direction = this.props.direction,
          direction = _props$direction === undefined ? 'horizontal' : _props$direction;


      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            className: 'hue-' + direction,
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'style',
            null,
            '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
          ),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(_react.PureComponent || _react.Component);

exports["default"] = Hue;

/***/ }),

/***/ 96207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Raised = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raised = exports.Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
      radius = _ref.radius,
      background = _ref.background,
      children = _ref.children;

  var styles = (0, _reactcss2.default)({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },

    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, { 'zDepth-1': zDepth === 1 });

  return _react2.default.createElement(
    'div',
    { style: styles.wrap },
    _react2.default.createElement('div', { style: styles.bg }),
    _react2.default.createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Raised.propTypes = {
  background: _propTypes2.default.string,
  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: _propTypes2.default.number
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2
};

exports["default"] = Raised;

/***/ }),

/***/ 76659:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = __webpack_require__(23493);

var _throttle2 = _interopRequireDefault(_throttle);

var _saturation = __webpack_require__(37599);

var saturation = _interopRequireWildcard(_saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e, skip) {
      _this.props.onChange && _this.throttle(_this.props.onChange, saturation.calculateChange(e, skip, _this.props, _this.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e, true);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'style',
          null,
          '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
        ),
        _react2.default.createElement(
          'div',
          { style: styles.white, className: 'saturation-white' },
          _react2.default.createElement('div', { style: styles.black, className: 'saturation-black' }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react.PureComponent || _react.Component);

exports["default"] = Saturation;

/***/ }),

/***/ 62489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Swatch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _interaction = __webpack_require__(82538);

var _ = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER = 13;

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onHover = _ref.onHover,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0, _reactcss2.default)({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };

  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }

  return _react2.default.createElement(
    'div',
    _extends({
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && _react2.default.createElement(_.Checkboard, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

exports["default"] = (0, _interaction.handleFocus)(Swatch);

/***/ }),

/***/ 1150:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Alpha = __webpack_require__(57319);

Object.defineProperty(exports, "Alpha", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
}));

var _Checkboard = __webpack_require__(34349);

Object.defineProperty(exports, "Checkboard", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkboard).default;
  }
}));

var _EditableInput = __webpack_require__(27747);

Object.defineProperty(exports, "EditableInput", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EditableInput).default;
  }
}));

var _Hue = __webpack_require__(26358);

Object.defineProperty(exports, "Hue", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
}));

var _Raised = __webpack_require__(96207);

Object.defineProperty(exports, "Raised", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Raised).default;
  }
}));

var _Saturation = __webpack_require__(76659);

Object.defineProperty(exports, "Saturation", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Saturation).default;
  }
}));

var _ColorWrap = __webpack_require__(88288);

Object.defineProperty(exports, "ColorWrap", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
}));

var _Swatch = __webpack_require__(62489);

Object.defineProperty(exports, "Swatch", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatch).default;
  }
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 99766:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Compact = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

var _CompactColor = __webpack_require__(49613);

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = __webpack_require__(82018);

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compact = exports.Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    { style: styles.Compact },
    _react2.default.createElement(
      'div',
      { style: styles.compact, className: 'compact-picker ' + className },
      _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(colors, function (c) {
          return _react2.default.createElement(_CompactColor2.default, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange,
            onSwatchHover: onSwatchHover
          });
        }),
        _react2.default.createElement('div', { style: styles.clear })
      ),
      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']
};

exports["default"] = (0, _common.ColorWrap)(Compact);

/***/ }),

/***/ 49613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompactColor = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactColor = exports.CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: _color2.default.getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });

  return _react2.default.createElement(
    _common.Swatch,
    {
      style: styles.color,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement('div', { style: styles.dot })
  );
};

exports["default"] = CompactColor;

/***/ }),

/***/ 82018:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompactFields = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFields = exports.CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement('div', { style: styles.active }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

exports["default"] = CompactFields;

/***/ }),

/***/ 19700:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Github = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(1150);

var _GithubSwatch = __webpack_require__(13255);

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      triangle = _ref.triangle,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-left-triangle': {
      triangle: {
        top: '35px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        left: '9px',
        transform: 'rotate(180deg)'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-left-triangle': triangle == 'bottom-left',
    'bottom-right-triangle': triangle === 'bottom-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, {
        color: c,
        key: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

Github.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right'])
};

Github.defaultProps = {
  width: 200,
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left'
};

exports["default"] = (0, _common.ColorWrap)(Github);

/***/ }),

/***/ 13255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GithubSwatch = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: hoverSwatch
    })
  );
};

exports["default"] = (0, _reactcss.handleHover)(GithubSwatch);

/***/ }),

/***/ 10565:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _HuePointer = __webpack_require__(88878);

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  });

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker ' + className },
    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer2.default
};

exports["default"] = (0, _common.ColorWrap)(HuePicker);

/***/ }),

/***/ 88878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderPointer = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = SliderPointer;

/***/ }),

/***/ 54363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Material = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Material = exports.Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    null,
    _react2.default.createElement(
      'div',
      { style: styles.material, className: 'material-picker ' + className },
      _react2.default.createElement(_common.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports["default"] = (0, _common.ColorWrap)(Material);

/***/ }),

/***/ 33165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Photoshop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _PhotoshopFields = __webpack_require__(21962);

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = __webpack_require__(31804);

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = __webpack_require__(40670);

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _PhotoshopButton = __webpack_require__(10170);

var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

var _PhotoshopPreviews = __webpack_require__(29628);

var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var _props$className = this.props.className,
          className = _props$className === undefined ? '' : _props$className;

      var styles = (0, _reactcss2.default)({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      });

      return _react2.default.createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker ' + className },
        _react2.default.createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.controls },
            _react2.default.createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: styles.previews },
                _react2.default.createElement(_PhotoshopPreviews2.default, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              _react2.default.createElement(
                'div',
                { style: styles.actions },
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
                _react2.default.createElement(_PhotoshopFields2.default, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_react2.default.Component);

Photoshop.propTypes = {
  header: _propTypes2.default.string
};

Photoshop.defaultProps = {
  header: 'Color Picker'
};

exports["default"] = (0, _common.ColorWrap)(Photoshop);

/***/ }),

/***/ 10170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopBotton = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopBotton = exports.PhotoshopBotton = function PhotoshopBotton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

exports["default"] = PhotoshopBotton;

/***/ }),

/***/ 21962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPicker = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      _color2.default.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields },
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    _react2.default.createElement(
      'div',
      { style: styles.fieldSymbols },
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

exports["default"] = PhotoshopPicker;

/***/ }),

/***/ 40670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.pointer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      _react2.default.createElement('div', { style: styles.leftInside })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement('div', { style: styles.rightInside })
    )
  );
};

exports["default"] = PhotoshopPointerCircle;

/***/ }),

/***/ 31804:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = PhotoshopPointerCircle;

/***/ }),

/***/ 29628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPreviews = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement('div', { style: styles.new }),
      _react2.default.createElement('div', { style: styles.current })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

exports["default"] = PhotoshopPreviews;

/***/ }),

/***/ 89753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Sketch = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _SketchFields = __webpack_require__(24530);

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = __webpack_require__(13067);

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    },
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      _react2.default.createElement(
        'div',
        { style: styles.sliders },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: styles.activeColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    _react2.default.createElement(_SketchPresetColors2.default, {
      colors: presetColors,
      onClick: onChange,
      onSwatchHover: onSwatchHover
    })
  );
};

Sketch.propTypes = {
  disableAlpha: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};

exports["default"] = (0, _common.ColorWrap)(Sketch);

/***/ }),

/***/ 24530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SketchFields = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

var SketchFields = exports.SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      _color2.default.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.double },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.alpha },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

exports["default"] = SketchFields;

/***/ }),

/***/ 13067:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SketchPresetColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      var key = '' + c.color + (c.title || '');
      return _react2.default.createElement(
        'div',
        { key: key, style: styles.swatchWrap },
        _react2.default.createElement(_common.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
          }
        }))
      );
    })
  );
};

SketchPresetColors.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    color: _propTypes2.default.string,
    title: _propTypes2.default.string
  })])).isRequired
};

exports["default"] = SketchPresetColors;

/***/ }),

/***/ 49857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Slider = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(1150);

var _SliderSwatches = __webpack_require__(6457);

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = __webpack_require__(77792);

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = exports.Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { className: 'slider-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.hue },
      _react2.default.createElement(_common.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.defaultProps = {
  pointer: _SliderPointer2.default
};

exports["default"] = (0, _common.ColorWrap)(Slider);

/***/ }),

/***/ 77792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderPointer = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = SliderPointer;

/***/ }),

/***/ 64377:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderSwatch = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports["default"] = SliderSwatch;

/***/ }),

/***/ 6457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderSwatches = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SliderSwatch = __webpack_require__(64377);

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.80',
        active: Math.round(hsl.l * 100) / 100 === 0.80 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        first: true
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.65',
        active: Math.round(hsl.l * 100) / 100 === 0.65 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.50',
        active: Math.round(hsl.l * 100) / 100 === 0.50 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.35',
        active: Math.round(hsl.l * 100) / 100 === 0.35 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.20',
        active: Math.round(hsl.l * 100) / 100 === 0.20 && Math.round(hsl.s * 100) / 100 === 0.50,
        onClick: onClick,
        last: true
      })
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports["default"] = SliderSwatches;

/***/ }),

/***/ 93926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Swatches = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _materialColors = __webpack_require__(53893);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(1150);

var _SwatchesGroup = __webpack_require__(23088);

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatches = exports.Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    _color2.default.isValidHex(data) && onChange({
      hex: data,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker ' + className },
    _react2.default.createElement(
      _common.Raised,
      null,
      _react2.default.createElement(
        'div',
        { style: styles.overflow },
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(colors, function (group) {
            return _react2.default.createElement(_SwatchesGroup2.default, {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange,
              onSwatchHover: onSwatchHover
            });
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

Swatches.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string))

  /* eslint-disable max-len */
};Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']]
};

exports["default"] = (0, _common.ColorWrap)(Swatches);

/***/ }),

/***/ 85638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SwatchesColor = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        fill: _color2.default.getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        fill: '#333'
      }
    },
    'transparent': {
      check: {
        fill: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return _react2.default.createElement(
    _common.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(
        'svg',
        { style: { width: '24px', height: '24px' }, viewBox: '0 0 24 24' },
        _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
      )
    )
  );
};

exports["default"] = SwatchesColor;

/***/ }),

/***/ 23088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SwatchesGroup = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _SwatchesColor = __webpack_require__(85638);

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      group = _ref.group,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.group },
    (0, _map2.default)(group, function (color, i) {
      return _react2.default.createElement(_SwatchesColor2.default, {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

exports["default"] = SwatchesGroup;

/***/ }),

/***/ 64503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Twitter = undefined;

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(45697);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(79941);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(35161);

var _map2 = _interopRequireDefault(_map);

var _color = __webpack_require__(64809);

var _color2 = _interopRequireDefault(_color);

var _common = __webpack_require__(1150);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = exports.Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hexcode, e) {
    _color2.default.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'twitter-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      (0, _map2.default)(colors, function (c, i) {
        return _react2.default.createElement(_common.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: '0 0 4px ' + c
          }
        });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex.replace('#', ''),
        onChange: handleChange
      }),
      _react2.default.createElement('div', { style: styles.clear })
    )
  );
};

Twitter.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right']),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

Twitter.defaultProps = {
  width: 276,
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left'
};

exports["default"] = (0, _common.ColorWrap)(Twitter);

/***/ }),

/***/ 66713:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (props.hsl.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (props.a !== _a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),

/***/ 45704:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var checkboardCache = {};

var render = exports.render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

var get = exports.get = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');
  var checkboard = render(c1, c2, size, serverCanvas);

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  checkboardCache[key] = checkboard;
  return checkboard;
};

/***/ }),

/***/ 64809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.red = undefined;

var _each = __webpack_require__(66073);

var _each2 = _interopRequireDefault(_each);

var _tinycolor = __webpack_require__(17621);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = {
  simpleCheckForValidColor: function simpleCheckForValidColor(data) {
    var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
    var checked = 0;
    var passed = 0;
    (0, _each2.default)(keysToCheck, function (letter) {
      if (data[letter]) {
        checked += 1;
        if (!isNaN(data[letter])) {
          passed += 1;
        }
        if (letter === 's' || letter === 'l') {
          var percentPatt = /^\d+%$/;
          if (percentPatt.test(data[letter])) {
            passed += 1;
          }
        }
      }
    });
    return checked === passed ? data : false;
  },
  toState: function toState(data, oldHue) {
    var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
    var hsl = color.toHsl();
    var hsv = color.toHsv();
    var rgb = color.toRgb();
    var hex = color.toHex();
    if (hsl.s === 0) {
      hsl.h = oldHue || 0;
      hsv.h = oldHue || 0;
    }
    var transparent = hex === '000000' && rgb.a === 0;

    return {
      hsl: hsl,
      hex: transparent ? 'transparent' : '#' + hex,
      rgb: rgb,
      hsv: hsv,
      oldHue: data.h || oldHue || hsl.h,
      source: data.source
    };
  },
  isValidHex: function isValidHex(hex) {
    // disable hex4 and hex8
    var lh = String(hex).charAt(0) === '#' ? 1 : 0;
    return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();
  },
  getContrastingColor: function getContrastingColor(data) {
    if (!data) {
      return '#fff';
    }
    var col = this.toState(data);
    if (col.hex === 'transparent') {
      return 'rgba(0,0,0,0.4)';
    }
    var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
  }
};
var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

/***/ }),

/***/ 33716:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (props.direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (props.hsl.h !== h) {
      return {
        h: h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (props.hsl.h !== _h) {
      return {
        h: _h,
        s: props.hsl.s,
        l: props.hsl.l,
        a: props.hsl.a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),

/***/ 82538:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-invalid-this */


var handleFocus = exports.handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Focus, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          _react2.default.createElement(Component, _extends({}, this.props, this.state))
        );
      }
    }]);

    return Focus;
  }(_react2.default.Component);
};

/***/ }),

/***/ 37599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, skip, props, container) {
  e.preventDefault();

  var _container$getBoundin = container.getBoundingClientRect(),
      containerWidth = _container$getBoundin.width,
      containerHeight = _container$getBoundin.height;

  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  } else if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left * 100 / containerWidth;
  var bright = -(top * 100 / containerHeight) + 100;

  return {
    h: props.hsl.h,
    s: saturation,
    v: bright,
    a: props.hsl.a,
    source: 'rgb'
  };
};

/***/ }),

/***/ 24198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.xS = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.Ie = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = undefined;

var _Alpha = __webpack_require__(9563);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Block = __webpack_require__(88858);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circle = __webpack_require__(9703);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Chrome = __webpack_require__(21847);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
});

var _Compact = __webpack_require__(99766);

Object.defineProperty(exports, "Ie", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
}));

var _Github = __webpack_require__(19700);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Github).default;
  }
});

var _Hue = __webpack_require__(10565);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Material = __webpack_require__(54363);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Material).default;
  }
});

var _Photoshop = __webpack_require__(33165);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Photoshop).default;
  }
});

var _Sketch = __webpack_require__(89753);

Object.defineProperty(exports, "xS", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sketch).default;
  }
}));

var _Slider = __webpack_require__(49857);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _Swatches = __webpack_require__(93926);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatches).default;
  }
});

var _Twitter = __webpack_require__(64503);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Twitter).default;
  }
});

var _ColorWrap = __webpack_require__(88288);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_unused_export__ = _Chrome2.default;

/***/ }),

/***/ 82514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ DndContext),
  "W": () => (/* binding */ createDndContext)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14890);
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/types.js
var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/equality.js
var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOffset.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        clientOffset: payload.clientOffset
      });

    case END_DRAG:
    case DROP:
      return initialState;

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/registry.js
var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function registry_addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function registry_removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function registry_removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/js_utils.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isString(input) {
  return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject(input) {
  return _typeof(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dragOperation.js
function dragOperation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dragOperation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dragOperation_ownKeys(Object(source), true).forEach(function (key) { dragOperation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dragOperation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dragOperation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var dragOperation_initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dragOperation_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case BEGIN_DRAG:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case PUBLISH_DRAG_SOURCE:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        isSourcePublic: true
      });

    case HOVER:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        targetIds: payload.targetIds
      });

    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        targetIds: without(state.targetIds, payload.targetId)
      });

    case DROP:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case END_DRAG:
      return dragOperation_objectSpread(dragOperation_objectSpread({}, state), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/refCount.js

function refCount_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;

    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/dirtiness.js

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/dirtyHandlerIds.js





function dirtyHandlerIds_reduce() {
  var _state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;

  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HOVER:
      break;

    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;

    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);

  if (!didChange) {
    return NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/stateId.js
function stateId_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/reducers/index.js
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function reducers_reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: dirtyHandlerIds_reduce(state.dirtyHandlerIds, {
      type: action.type,
      payload: reducers_objectSpread(reducers_objectSpread({}, action.payload), {}, {
        prevTargetIds: get(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: reduce(state.dragOffset, action),
    refCount: refCount_reduce(state.refCount, action),
    dragOperation: dragOperation_reduce(state.dragOperation, action),
    stateId: stateId_reduce(state.stateId)
  };
}
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/local/setClientOffset.js

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/beginDrag.js




var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      if (!getSourceClientOffset) {
        throw new Error('getSourceClientOffset must be defined');
      }

      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants(sourceIds, monitor, registry) {
  (0,invariant_esm/* invariant */.k)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    (0,invariant_esm/* invariant */.k)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  (0,invariant_esm/* invariant */.k)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  (0,invariant_esm/* invariant */.k)(isObject(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/publishDragSource.js

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/matchesType.js
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/hover.js



function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  (0,invariant_esm/* invariant */.k)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0,invariant_esm/* invariant */.k)(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    (0,invariant_esm/* invariant */.k)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    (0,invariant_esm/* invariant */.k)(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/drop.js
function drop_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function drop_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { drop_ownKeys(Object(source), true).forEach(function (key) { drop_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { drop_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function drop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    drop_verifyInvariants(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: drop_objectSpread(drop_objectSpread({}, options), dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function drop_verifyInvariants(monitor) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0,invariant_esm/* invariant */.k)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  (0,invariant_esm/* invariant */.k)(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/endDrag.js


function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();

    if (sourceId != null) {
      var source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }

    return {
      type: END_DRAG
    };
  };
}

function verifyIsDragging(monitor) {
  (0,invariant_esm/* invariant */.k)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/actions/dragDrop/index.js






function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/coords.js
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function coords_getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function coords_getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropMonitorImpl.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DragDropMonitorImpl = /*#__PURE__*/function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);

    this.store = store;
    this.registry = registry;
  }

  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      (0,invariant_esm/* invariant */.k)(typeof listener === 'function', 'listener must be a function.');
      (0,invariant_esm/* invariant */.k)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      (0,invariant_esm/* invariant */.k)(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      (0,invariant_esm/* invariant */.k)(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      (0,invariant_esm/* invariant */.k)(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      (0,invariant_esm/* invariant */.k)(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return coords_getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return coords_getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/utils/getNextUniqueId.js
var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/interfaces.js
var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/contracts.js
function contracts_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { contracts_typeof = function _typeof(obj) { return typeof obj; }; } else { contracts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return contracts_typeof(obj); }


function validateSourceContract(source) {
  (0,invariant_esm/* invariant */.k)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  (0,invariant_esm/* invariant */.k)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0,invariant_esm/* invariant */.k)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  (0,invariant_esm/* invariant */.k)(typeof type === 'string' || contracts_typeof(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/raw.js
// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
    flushing = true;
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}
var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
// @ts-ignore

var flushing = false; // `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
  flushing = false;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === 'function') {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode('');
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/asap.js
 // rawAsap provides everything we need except exception management.
// RawTasks are recycled to reduce GC churn.

var freeTasks = []; // We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.

var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
  if (pendingErrors.length) {
    throw pendingErrors.shift();
  }
}
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */


function asap(task) {
  var rawTask;

  if (freeTasks.length) {
    rawTask = freeTasks.pop();
  } else {
    rawTask = new RawTask();
  }

  rawTask.task = task;
  rawAsap(rawTask);
} // We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.

var RawTask =
/** @class */
function () {
  function RawTask() {}

  RawTask.prototype.call = function () {
    try {
      this.task.call();
    } catch (error) {
      if (asap.onerror) {
        // This hook exists purely for testing purposes.
        // Its name will be periodically randomized to break any code that
        // depends on its existence.
        asap.onerror(error);
      } else {
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        pendingErrors.push(error);
        requestErrorThrow();
      }
    } finally {
      this.task = null;
      freeTasks[freeTasks.length] = this;
    }
  };

  return RawTask;
}();
;// CONCATENATED MODULE: ./node_modules/@react-dnd/asap/dist/esm/browser/index.js

;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/HandlerRegistryImpl.js
function HandlerRegistryImpl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HandlerRegistryImpl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HandlerRegistryImpl_createClass(Constructor, protoProps, staticProps) { if (protoProps) HandlerRegistryImpl_defineProperties(Constructor.prototype, protoProps); if (staticProps) HandlerRegistryImpl_defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();

  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);

    case HandlerRole.TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;

    case 'T':
      return HandlerRole.TARGET;

    default:
      (0,invariant_esm/* invariant */.k)(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl = /*#__PURE__*/function () {
  function HandlerRegistryImpl(store) {
    HandlerRegistryImpl_classCallCheck(this, HandlerRegistryImpl);

    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }

  HandlerRegistryImpl_createClass(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(registry_addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(registry_addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      (0,invariant_esm/* invariant */.k)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      (0,invariant_esm/* invariant */.k)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      (0,invariant_esm/* invariant */.k)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      (0,invariant_esm/* invariant */.k)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource(sourceId) {
      var _this = this;

      (0,invariant_esm/* invariant */.k)(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(registry_removeSource(sourceId));
      asap(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget(targetId) {
      (0,invariant_esm/* invariant */.k)(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(registry_removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      (0,invariant_esm/* invariant */.k)(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      (0,invariant_esm/* invariant */.k)(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/DragDropManagerImpl.js
function DragDropManagerImpl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DragDropManagerImpl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DragDropManagerImpl_createClass(Constructor, protoProps, staticProps) { if (protoProps) DragDropManagerImpl_defineProperties(Constructor.prototype, protoProps); if (staticProps) DragDropManagerImpl_defineProperties(Constructor, staticProps); return Constructor; }







function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return (0,redux/* createStore */.MT)(reducers_reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var DragDropManagerImpl = /*#__PURE__*/function () {
  function DragDropManagerImpl() {
    var _this = this;

    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    DragDropManagerImpl_classCallCheck(this, DragDropManagerImpl);

    this.isSetUp = false;

    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    };

    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    store.subscribe(this.handleRefCountChange);
  }

  DragDropManagerImpl_createClass(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();
;// CONCATENATED MODULE: ./node_modules/dnd-core/dist/esm/factories.js

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new DragDropManagerImpl(debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/DndContext.js


/**
 * Create the React Context
 */

var DndContext = react.createContext({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  };
}

/***/ }),

/***/ 60938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DragSourceMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28195);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl = /*#__PURE__*/function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();

/***/ }),

/***/ 56941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ DropTargetMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28195);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var isCallingCanDrop = false;
var DropTargetMonitorImpl = /*#__PURE__*/function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__/* .invariant */ .k)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

/***/ }),

/***/ 8556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ SourceConnector)
/* harmony export */ });
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35214);
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62980);
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15047);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var SourceConnector = /*#__PURE__*/function () {
  function SourceConnector(backend) {
    var _this = this;

    _classCallCheck(this, SourceConnector);

    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__/* .wrapConnectorHooks */ .p)({
      dragSource: function dragSource(node, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dragSourceRef = node;
        } else {
          _this.dragSourceNode = node;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dragPreviewRef = node;
        } else {
          _this.dragPreviewNode = node;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  _createClass(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (didChange) {
        this.disconnectDragPreview();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragPreview) {
        this.lastConnectedDragPreview = dragPreview;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();

/***/ }),

/***/ 89026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ TargetConnector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15047);
/* harmony import */ var _wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35214);
/* harmony import */ var _utils_isRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62980);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TargetConnector = /*#__PURE__*/function () {
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck(this, TargetConnector);

    this.hooks = (0,_wrapConnectorHooks__WEBPACK_IMPORTED_MODULE_0__/* .wrapConnectorHooks */ .p)({
      dropTarget: function dropTarget(node, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if ((0,_utils_isRef__WEBPACK_IMPORTED_MODULE_1__/* .isRef */ .d)(node)) {
          _this.dropTargetRef = node;
        } else {
          _this.dropTargetNode = node;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  _createClass(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_2__/* .shallowEqual */ .w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();

/***/ }),

/***/ 33273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ registerTarget),
/* harmony export */   "w": () => (/* binding */ registerSource)
/* harmony export */ });
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);
  return [sourceId, function () {
    return registry.removeSource(sourceId);
  }];
}

/***/ }),

/***/ 35214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ wrapConnectorHooks)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/utils/cloneWithRef.js



function setRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else {
    ref.current = node;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0,invariant_esm/* invariant */.k)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0,react.cloneElement)(element, {
      ref: newRef
    });
  } else {
    return (0,react.cloneElement)(element, {
      ref: function ref(node) {
        setRef(previousRef, node);
        setRef(newRef, node);
      }
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/common/wrapConnectorHooks.js



function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0,react.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

/***/ }),

/***/ 48586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
 // suppress the useLayoutEffect warning on server side.

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ 5627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ useMonitorOutput)
});

// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(48586);
// EXTERNAL MODULE: ./node_modules/@react-dnd/shallowequal/dist/shallowequal.esm.js
var shallowequal_esm = __webpack_require__(15047);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useCollector.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */

function useCollector(monitor, collect, onUpdate) {
  var _useState = (0,react.useState)(function () {
    return collect(monitor);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      collected = _useState2[0],
      setCollected = _useState2[1];

  var updateCollected = (0,react.useCallback)(function () {
    var nextValue = collect(monitor);

    if (!(0,shallowequal_esm/* shallowEqual */.w)(collected, nextValue)) {
      setCollected(nextValue);

      if (onUpdate) {
        onUpdate();
      }
    }
  }, [collected, monitor, onUpdate]); // update the collected properties after the first render
  // and the components are attached to dnd-core

  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(updateCollected, []);
  return [collected, updateCollected];
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js
function useMonitorOutput_slicedToArray(arr, i) { return useMonitorOutput_arrayWithHoles(arr) || useMonitorOutput_iterableToArrayLimit(arr, i) || useMonitorOutput_unsupportedIterableToArray(arr, i) || useMonitorOutput_nonIterableRest(); }

function useMonitorOutput_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useMonitorOutput_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useMonitorOutput_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useMonitorOutput_arrayLikeToArray(o, minLen); }

function useMonitorOutput_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useMonitorOutput_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useMonitorOutput_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useMonitorOutput(monitor, collect, onCollect) {
  var _useCollector = useCollector(monitor, collect, onCollect),
      _useCollector2 = useMonitorOutput_slicedToArray(_useCollector, 2),
      collected = _useCollector2[0],
      updateCollected = _useCollector2[1];

  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function subscribeToMonitorStateChange() {
    var handlerId = monitor.getHandlerId();

    if (handlerId == null) {
      return undefined;
    }

    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [handlerId]
    });
  }, [monitor, updateCollected]);
  return collected;
}

/***/ }),

/***/ 27034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ useDrag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js + 1 modules
var useMonitorOutput = __webpack_require__(5627);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(48586);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(33273);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(40917);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DragSourceMonitorImpl.js
var DragSourceMonitorImpl = __webpack_require__(60938);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/SourceConnector.js
var SourceConnector = __webpack_require__(8556);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drag.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }








function useDragSourceMonitor() {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var monitor = (0,react.useMemo)(function () {
    return new DragSourceMonitorImpl/* DragSourceMonitorImpl */.p(manager);
  }, [manager]);
  var connector = (0,react.useMemo)(function () {
    return new SourceConnector/* SourceConnector */.x(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDragHandler(spec, monitor, connector) {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var handler = (0,react.useMemo)(function () {
    return {
      beginDrag: function beginDrag() {
        var _spec$current = spec.current,
            begin = _spec$current.begin,
            item = _spec$current.item;

        if (begin) {
          var beginResult = begin(monitor);
          (0,invariant_esm/* invariant */.k)(beginResult == null || _typeof(beginResult) === 'object', 'dragSpec.begin() must either return an object, undefined, or null');
          return beginResult || item || {};
        }

        return item || {};
      },
      canDrag: function canDrag() {
        if (typeof spec.current.canDrag === 'boolean') {
          return spec.current.canDrag;
        } else if (typeof spec.current.canDrag === 'function') {
          return spec.current.canDrag(monitor);
        } else {
          return true;
        }
      },
      isDragging: function isDragging(globalMonitor, target) {
        var isDragging = spec.current.isDragging;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
      },
      endDrag: function endDrag() {
        var end = spec.current.end;

        if (end) {
          end(monitor.getItem(), monitor);
        }

        connector.reconnect();
      }
    };
  }, []);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function registerHandler() {
    var _registerSource = (0,registration/* registerSource */.w)(spec.current.item.type, handler, manager),
        _registerSource2 = _slicedToArray(_registerSource, 2),
        handlerId = _registerSource2[0],
        unregister = _registerSource2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrag.js
function useDrag_slicedToArray(arr, i) { return useDrag_arrayWithHoles(arr) || useDrag_iterableToArrayLimit(arr, i) || useDrag_unsupportedIterableToArray(arr, i) || useDrag_nonIterableRest(); }

function useDrag_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useDrag_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDrag_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDrag_arrayLikeToArray(o, minLen); }

function useDrag_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useDrag_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDrag_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDragSource hook
 * @param sourceSpec The drag source specification *
 */

function useDrag(spec) {
  var specRef = (0,react.useRef)(spec);
  specRef.current = spec; // TODO: wire options into createSourceConnector

  (0,invariant_esm/* invariant */.k)(spec.item != null, 'item must be defined');
  (0,invariant_esm/* invariant */.k)(spec.item.type != null, 'item type must be defined');

  var _useDragSourceMonitor = useDragSourceMonitor(),
      _useDragSourceMonitor2 = useDrag_slicedToArray(_useDragSourceMonitor, 2),
      monitor = _useDragSourceMonitor2[0],
      connector = _useDragSourceMonitor2[1];

  useDragHandler(specRef, monitor, connector);
  var result = (0,useMonitorOutput/* useMonitorOutput */.U)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDragSource = (0,react.useMemo)(function () {
    return connector.hooks.dragSource();
  }, [connector]);
  var connectDragPreview = (0,react.useMemo)(function () {
    return connector.hooks.dragPreview();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dragSourceOptions = specRef.current.options || null;
    connector.reconnect();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dragPreviewOptions = specRef.current.previewOptions || null;
    connector.reconnect();
  }, [connector]);
  return [result, connectDragSource, connectDragPreview];
}

/***/ }),

/***/ 40917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useDragDropManager)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28195);
/* harmony import */ var _common_DndContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82514);



/**
 * A hook to retrieve the DragDropManager from Context
 */

function useDragDropManager() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_common_DndContext__WEBPACK_IMPORTED_MODULE_1__/* .DndContext */ .L),
      dragDropManager = _useContext.dragDropManager;

  (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_2__/* .invariant */ .k)(dragDropManager != null, 'Expected drag drop context');
  return dragDropManager;
}

/***/ }),

/***/ 22068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useDrop)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@react-dnd/invariant/dist/invariant.esm.js
var invariant_esm = __webpack_require__(28195);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useMonitorOutput.js + 1 modules
var useMonitorOutput = __webpack_require__(5627);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(48586);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/registration.js
var registration = __webpack_require__(33273);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDragDropManager.js
var useDragDropManager = __webpack_require__(40917);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/TargetConnector.js
var TargetConnector = __webpack_require__(89026);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/esm/common/DropTargetMonitorImpl.js
var DropTargetMonitorImpl = __webpack_require__(56941);
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/internal/drop.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useDropTargetMonitor() {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var monitor = (0,react.useMemo)(function () {
    return new DropTargetMonitorImpl/* DropTargetMonitorImpl */.H(manager);
  }, [manager]);
  var connector = (0,react.useMemo)(function () {
    return new TargetConnector/* TargetConnector */.Y(manager.getBackend());
  }, [manager]);
  return [monitor, connector];
}
function useDropHandler(spec, monitor, connector) {
  var manager = (0,useDragDropManager/* useDragDropManager */.N)();
  var handler = (0,react.useMemo)(function () {
    return {
      canDrop: function canDrop() {
        var canDrop = spec.current.canDrop;
        return canDrop ? canDrop(monitor.getItem(), monitor) : true;
      },
      hover: function hover() {
        var hover = spec.current.hover;

        if (hover) {
          hover(monitor.getItem(), monitor);
        }
      },
      drop: function drop() {
        var drop = spec.current.drop;

        if (drop) {
          return drop(monitor.getItem(), monitor);
        }
      }
    };
  }, [monitor]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function registerHandler() {
    var _registerTarget = (0,registration/* registerTarget */.n)(spec.current.accept, handler, manager),
        _registerTarget2 = _slicedToArray(_registerTarget, 2),
        handlerId = _registerTarget2[0],
        unregister = _registerTarget2[1];

    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [monitor, connector]);
}
;// CONCATENATED MODULE: ./node_modules/react-dnd/dist/esm/hooks/useDrop.js
function useDrop_slicedToArray(arr, i) { return useDrop_arrayWithHoles(arr) || useDrop_iterableToArrayLimit(arr, i) || useDrop_unsupportedIterableToArray(arr, i) || useDrop_nonIterableRest(); }

function useDrop_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function useDrop_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useDrop_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useDrop_arrayLikeToArray(o, minLen); }

function useDrop_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function useDrop_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function useDrop_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/**
 * useDropTarget Hook
 * @param spec The drop target specification
 */

function useDrop(spec) {
  var specRef = (0,react.useRef)(spec);
  specRef.current = spec;
  (0,invariant_esm/* invariant */.k)(spec.accept != null, 'accept must be defined');

  var _useDropTargetMonitor = useDropTargetMonitor(),
      _useDropTargetMonitor2 = useDrop_slicedToArray(_useDropTargetMonitor, 2),
      monitor = _useDropTargetMonitor2[0],
      connector = _useDropTargetMonitor2[1];

  useDropHandler(specRef, monitor, connector);
  var result = (0,useMonitorOutput/* useMonitorOutput */.U)(monitor, specRef.current.collect || function () {
    return {};
  }, function () {
    return connector.reconnect();
  });
  var connectDropTarget = (0,react.useMemo)(function () {
    return connector.hooks.dropTarget();
  }, [connector]);
  (0,useIsomorphicLayoutEffect/* useIsomorphicLayoutEffect */.L)(function () {
    connector.dropTargetOptions = spec.options || null;
    connector.reconnect();
  }, [spec.options]);
  return [result, connectDropTarget];
}

/***/ }),

/***/ 62980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ isRef)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof(obj) === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current')
  );
}

/***/ }),

/***/ 24754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoprefix = undefined;

var _forOwn2 = __webpack_require__(2525);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports["default"] = autoprefix;

/***/ }),

/***/ 36002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports["default"] = active;

/***/ }),

/***/ 91765:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(67294);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports["default"] = hover;

/***/ }),

/***/ 14147:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.flattenNames = undefined;

var _isString2 = __webpack_require__(47037);

var _isString3 = _interopRequireDefault(_isString2);

var _forOwn2 = __webpack_require__(2525);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _isPlainObject2 = __webpack_require__(68630);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _map2 = __webpack_require__(35161);

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports["default"] = flattenNames;

/***/ }),

/***/ 79941:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(14147);

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(18556);

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(24754);

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(91765);

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(36002);

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(57742);

var _loop3 = _interopRequireDefault(_loop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports["default"] = ReactCSS;

/***/ }),

/***/ 57742:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports["default"] = loopable;

/***/ }),

/***/ 18556:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeClasses = undefined;

var _forOwn2 = __webpack_require__(2525);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _cloneDeep2 = __webpack_require__(50361);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports["default"] = mergeClasses;

/***/ })

}]);