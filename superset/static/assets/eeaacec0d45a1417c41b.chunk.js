"use strict";
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([[5215],{

/***/ 1738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wG": () => (/* reexport */ WINDING),
  "WZ": () => (/* reexport */ cutPolygonByGrid),
  "GU": () => (/* reexport */ cutPolygonByMercatorBounds),
  "dj": () => (/* reexport */ cutPolylineByGrid),
  "ct": () => (/* reexport */ cutPolylineByMercatorBounds),
  "Ny": () => (/* reexport */ polygon_utils_modifyPolygonWindingDirection)
});

// UNUSED EXPORTS: Polygon, _Polygon, clipPolygon, clipPolyline, earcut, forEachSegmentInPolygon, getPolygonSignedArea, getPolygonWindingDirection

;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/polygon-utils.js

const WINDING = {
  CLOCKWISE: 1,
  COUNTER_CLOCKWISE: -1
};
function polygon_utils_modifyPolygonWindingDirection(points, direction, options = {}) {
  const windingDirection = getPolygonWindingDirection(points, options);

  if (windingDirection !== direction) {
    reversePolygon(points, options);
    return true;
  }

  return false;
}
function getPolygonWindingDirection(points, options = {}) {
  return Math.sign(polygon_utils_getPolygonSignedArea(points, options));
}
function polygon_utils_getPolygonSignedArea(points, options = {}) {
  const {
    start = 0,
    end = points.length
  } = options;
  const dim = options.size || 2;
  let area = 0;

  for (let i = start, j = end - dim; i < end; i += dim) {
    area += (points[i] - points[j]) * (points[i + 1] + points[j + 1]);
    j = i;
  }

  return area / 2;
}
function polygon_utils_forEachSegmentInPolygon(points, visitor, options = {}) {
  const {
    start = 0,
    end = points.length,
    size = 2,
    isClosed
  } = options;
  const numPoints = (end - start) / size;

  for (let i = 0; i < numPoints - 1; ++i) {
    visitor(points[start + i * size], points[start + i * size + 1], points[start + (i + 1) * size], points[start + (i + 1) * size + 1], i, i + 1);
  }

  const endPointIndex = start + (numPoints - 1) * size;
  const isClosedEx = isClosed || equals(points[start], points[endPointIndex]) && equals(points[start + 1], points[endPointIndex + 1]);

  if (!isClosedEx) {
    visitor(points[endPointIndex], points[endPointIndex + 1], points[start], points[start + 1], numPoints - 1, 0);
  }
}

function reversePolygon(points, options) {
  const {
    start = 0,
    end = points.length,
    size = 2
  } = options;
  const numPoints = (end - start) / size;
  const numSwaps = Math.floor(numPoints / 2);

  for (let i = 0; i < numSwaps; ++i) {
    const b1 = start + i * size;
    const b2 = start + (numPoints - 1 - i) * size;

    for (let j = 0; j < size; ++j) {
      const tmp = points[b1 + j];
      points[b1 + j] = points[b2 + j];
      points[b2 + j] = tmp;
    }
  }
}

function polygon_utils_modifyPolygonWindingDirectionPoints(points, direction, options = {}) {
  const currentDirection = getPolygonWindingDirectionPoints(points, options);

  if (currentDirection !== direction) {
    points.reverse();
    return true;
  }

  return false;
}
function getPolygonWindingDirectionPoints(points, options = {}) {
  return Math.sign(polygon_utils_getPolygonSignedAreaPoints(points, options));
}
function polygon_utils_getPolygonSignedAreaPoints(points, options = {}) {
  const {
    start = 0,
    end = points.length
  } = options;
  let area = 0;

  for (let i = start, j = end - 1; i < end; ++i) {
    area += (points[i][0] - points[j][0]) * (points[i][1] + points[j][1]);
    j = i;
  }

  return area / 2;
}
function polygon_utils_forEachSegmentInPolygonPoints(points, visitor, options = {}) {
  const {
    start = 0,
    end = points.length,
    isClosed
  } = options;

  for (let i = start; i < end - 1; ++i) {
    visitor(points[i], points[i + 1], i, i + 1);
  }

  const isClosedEx = isClosed || equals(points[end - 1], points[0]);

  if (!isClosedEx) {
    visitor(points[end - 1], points[0], end - 1, 0);
  }
}
//# sourceMappingURL=polygon-utils.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/polygon.js


class Polygon {
  constructor(points, options = {}) {
    this.points = points;
    this.isFlatArray = !isArray(points[0]);
    this.options = {
      start: options.start || 0,
      end: options.end || points.length,
      size: options.size || 2,
      isClosed: options.isClosed
    };
    Object.freeze(this);
  }

  getSignedArea() {
    if (this.isFlatArray) return getPolygonSignedArea(this.points, this.options);
    return getPolygonSignedAreaPoints(this.points, this.options);
  }

  getArea() {
    return Math.abs(this.getSignedArea());
  }

  getWindingDirection() {
    return Math.sign(this.getSignedArea());
  }

  forEachSegment(visitor) {
    if (this.isFlatArray) {
      forEachSegmentInPolygon(this.points, (x1, y1, x2, y2, i1, i2) => {
        visitor([x1, y1], [x2, y2], i1, i2);
      }, this.options);
    } else {
      forEachSegmentInPolygonPoints(this.points, visitor, this.options);
    }
  }

  modifyWindingDirection(direction) {
    if (this.isFlatArray) {
      return modifyPolygonWindingDirection(this.points, direction, this.options);
    }

    return modifyPolygonWindingDirectionPoints(this.points, direction, this.options);
  }

}
//# sourceMappingURL=polygon.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/earcut.js

function earcut(data, holeIndices, dim, areas) {
  dim = dim || 2;
  const hasHoles = holeIndices && holeIndices.length;
  const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
  let outerNode = linkedList(data, 0, outerLen, dim, true, areas && areas[0]);
  const triangles = [];
  if (!outerNode || outerNode.next === outerNode.prev) return triangles;
  let invSize;
  let maxX;
  let maxY;
  let minX;
  let minY;
  let x;
  let y;
  if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim, areas);

  if (data.length > 80 * dim) {
    minX = maxX = data[0];
    minY = maxY = data[1];

    for (let i = dim; i < outerLen; i += dim) {
      x = data[i];
      y = data[i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }

    invSize = Math.max(maxX - minX, maxY - minY);
    invSize = invSize !== 0 ? 1 / invSize : 0;
  }

  earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
  return triangles;
}

function linkedList(data, start, end, dim, clockwise, area) {
  let i;
  let last;

  if (area === undefined) {
    area = getPolygonSignedArea(data, {
      start,
      end,
      size: dim
    });
  }

  if (clockwise === area < 0) {
    for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
  } else {
    for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
  }

  if (last && earcut_equals(last, last.next)) {
    removeNode(last);
    last = last.next;
  }

  return last;
}

function filterPoints(start, end) {
  if (!start) return start;
  if (!end) end = start;
  let p = start;
  let again;

  do {
    again = false;

    if (!p.steiner && (earcut_equals(p, p.next) || earcut_area(p.prev, p, p.next) === 0)) {
      removeNode(p);
      p = end = p.prev;
      if (p === p.next) break;
      again = true;
    } else {
      p = p.next;
    }
  } while (again || p !== end);

  return end;
}

function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
  if (!ear) return;
  if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
  let stop = ear;
  let prev;
  let next;

  while (ear.prev !== ear.next) {
    prev = ear.prev;
    next = ear.next;

    if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
      triangles.push(prev.i / dim);
      triangles.push(ear.i / dim);
      triangles.push(next.i / dim);
      removeNode(ear);
      ear = next.next;
      stop = next.next;
      continue;
    }

    ear = next;

    if (ear === stop) {
      if (!pass) {
        earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
      } else if (pass === 1) {
        ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
        earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
      } else if (pass === 2) {
        splitEarcut(ear, triangles, dim, minX, minY, invSize);
      }

      break;
    }
  }
}

function isEar(ear) {
  const a = ear.prev;
  const b = ear;
  const c = ear.next;
  if (earcut_area(a, b, c) >= 0) return false;
  let p = ear.next.next;

  while (p !== ear.prev) {
    if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && earcut_area(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }

  return true;
}

function isEarHashed(ear, minX, minY, invSize) {
  const a = ear.prev;
  const b = ear;
  const c = ear.next;
  if (earcut_area(a, b, c) >= 0) return false;
  const minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x;
  const minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y;
  const maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x;
  const maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
  const minZ = zOrder(minTX, minTY, minX, minY, invSize);
  const maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
  let p = ear.prevZ;
  let n = ear.nextZ;

  while (p && p.z >= minZ && n && n.z <= maxZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && earcut_area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && earcut_area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }

  while (p && p.z >= minZ) {
    if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && earcut_area(p.prev, p, p.next) >= 0) return false;
    p = p.prevZ;
  }

  while (n && n.z <= maxZ) {
    if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && earcut_area(n.prev, n, n.next) >= 0) return false;
    n = n.nextZ;
  }

  return true;
}

function cureLocalIntersections(start, triangles, dim) {
  let p = start;

  do {
    const a = p.prev;
    const b = p.next.next;

    if (!earcut_equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
      triangles.push(a.i / dim);
      triangles.push(p.i / dim);
      triangles.push(b.i / dim);
      removeNode(p);
      removeNode(p.next);
      p = start = b;
    }

    p = p.next;
  } while (p !== start);

  return filterPoints(p);
}

function splitEarcut(start, triangles, dim, minX, minY, invSize) {
  let a = start;

  do {
    let b = a.next.next;

    while (b !== a.prev) {
      if (a.i !== b.i && isValidDiagonal(a, b)) {
        let c = splitPolygon(a, b);
        a = filterPoints(a, a.next);
        c = filterPoints(c, c.next);
        earcutLinked(a, triangles, dim, minX, minY, invSize);
        earcutLinked(c, triangles, dim, minX, minY, invSize);
        return;
      }

      b = b.next;
    }

    a = a.next;
  } while (a !== start);
}

function eliminateHoles(data, holeIndices, outerNode, dim, areas) {
  const queue = [];
  let i;
  let len;
  let start;
  let end;
  let list;

  for (i = 0, len = holeIndices.length; i < len; i++) {
    start = holeIndices[i] * dim;
    end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
    list = linkedList(data, start, end, dim, false, areas && areas[i + 1]);
    if (list === list.next) list.steiner = true;
    queue.push(getLeftmost(list));
  }

  queue.sort(compareX);

  for (i = 0; i < queue.length; i++) {
    eliminateHole(queue[i], outerNode);
    outerNode = filterPoints(outerNode, outerNode.next);
  }

  return outerNode;
}

function compareX(a, b) {
  return a.x - b.x;
}

function eliminateHole(hole, outerNode) {
  outerNode = findHoleBridge(hole, outerNode);

  if (outerNode) {
    const b = splitPolygon(outerNode, hole);
    filterPoints(outerNode, outerNode.next);
    filterPoints(b, b.next);
  }
}

function findHoleBridge(hole, outerNode) {
  let p = outerNode;
  const hx = hole.x;
  const hy = hole.y;
  let qx = -Infinity;
  let m;

  do {
    if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
      const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);

      if (x <= hx && x > qx) {
        qx = x;

        if (x === hx) {
          if (hy === p.y) return p;
          if (hy === p.next.y) return p.next;
        }

        m = p.x < p.next.x ? p : p.next;
      }
    }

    p = p.next;
  } while (p !== outerNode);

  if (!m) return null;
  if (hx === qx) return m;
  const stop = m;
  const mx = m.x;
  const my = m.y;
  let tanMin = Infinity;
  let tan;
  p = m;

  do {
    if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
      tan = Math.abs(hy - p.y) / (hx - p.x);

      if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
        m = p;
        tanMin = tan;
      }
    }

    p = p.next;
  } while (p !== stop);

  return m;
}

function sectorContainsSector(m, p) {
  return earcut_area(m.prev, m, p.prev) < 0 && earcut_area(p.next, m, m.next) < 0;
}

function indexCurve(start, minX, minY, invSize) {
  let p = start;

  do {
    if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
    p.prevZ = p.prev;
    p.nextZ = p.next;
    p = p.next;
  } while (p !== start);

  p.prevZ.nextZ = null;
  p.prevZ = null;
  sortLinked(p);
}

function sortLinked(list) {
  let e;
  let i;
  let inSize = 1;
  let numMerges;
  let p;
  let pSize;
  let q;
  let qSize;
  let tail;

  do {
    p = list;
    list = null;
    tail = null;
    numMerges = 0;

    while (p) {
      numMerges++;
      q = p;
      pSize = 0;

      for (i = 0; i < inSize; i++) {
        pSize++;
        q = q.nextZ;
        if (!q) break;
      }

      qSize = inSize;

      while (pSize > 0 || qSize > 0 && q) {
        if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
          e = p;
          p = p.nextZ;
          pSize--;
        } else {
          e = q;
          q = q.nextZ;
          qSize--;
        }

        if (tail) tail.nextZ = e;else list = e;
        e.prevZ = tail;
        tail = e;
      }

      p = q;
    }

    tail.nextZ = null;
    inSize *= 2;
  } while (numMerges > 1);

  return list;
}

function zOrder(x, y, minX, minY, invSize) {
  x = 32767 * (x - minX) * invSize;
  y = 32767 * (y - minY) * invSize;
  x = (x | x << 8) & 0x00ff00ff;
  x = (x | x << 4) & 0x0f0f0f0f;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;
  y = (y | y << 8) & 0x00ff00ff;
  y = (y | y << 4) & 0x0f0f0f0f;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;
  return x | y << 1;
}

function getLeftmost(start) {
  let p = start;
  let leftmost = start;

  do {
    if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
    p = p.next;
  } while (p !== start);

  return leftmost;
}

function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
  return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

function isValidDiagonal(a, b) {
  return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (earcut_area(a.prev, a, b.prev) || earcut_area(a, b.prev, b)) || earcut_equals(a, b) && earcut_area(a.prev, a, a.next) > 0 && earcut_area(b.prev, b, b.next) > 0);
}

function earcut_area(p, q, r) {
  return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

function earcut_equals(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

function intersects(p1, q1, p2, q2) {
  const o1 = sign(earcut_area(p1, q1, p2));
  const o2 = sign(earcut_area(p1, q1, q2));
  const o3 = sign(earcut_area(p2, q2, p1));
  const o4 = sign(earcut_area(p2, q2, q1));
  if (o1 !== o2 && o3 !== o4) return true;
  if (o1 === 0 && onSegment(p1, p2, q1)) return true;
  if (o2 === 0 && onSegment(p1, q2, q1)) return true;
  if (o3 === 0 && onSegment(p2, p1, q2)) return true;
  if (o4 === 0 && onSegment(p2, q1, q2)) return true;
  return false;
}

function onSegment(p, q, r) {
  return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
  return num > 0 ? 1 : num < 0 ? -1 : 0;
}

function intersectsPolygon(a, b) {
  let p = a;

  do {
    if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
    p = p.next;
  } while (p !== a);

  return false;
}

function locallyInside(a, b) {
  return earcut_area(a.prev, a, a.next) < 0 ? earcut_area(a, b, a.next) >= 0 && earcut_area(a, a.prev, b) >= 0 : earcut_area(a, b, a.prev) < 0 || earcut_area(a, a.next, b) < 0;
}

function middleInside(a, b) {
  let p = a;
  let inside = false;
  const px = (a.x + b.x) / 2;
  const py = (a.y + b.y) / 2;

  do {
    if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
    p = p.next;
  } while (p !== a);

  return inside;
}

function splitPolygon(a, b) {
  const a2 = new Node(a.i, a.x, a.y);
  const b2 = new Node(b.i, b.x, b.y);
  const an = a.next;
  const bp = b.prev;
  a.next = b;
  b.prev = a;
  a2.next = an;
  an.prev = a2;
  b2.next = a2;
  a2.prev = b2;
  bp.next = b2;
  b2.prev = bp;
  return b2;
}

function insertNode(i, x, y, last) {
  const p = new Node(i, x, y);

  if (!last) {
    p.prev = p;
    p.next = p;
  } else {
    p.next = last.next;
    p.prev = last;
    last.next.prev = p;
    last.next = p;
  }

  return p;
}

function removeNode(p) {
  p.next.prev = p.prev;
  p.prev.next = p.next;
  if (p.prevZ) p.prevZ.nextZ = p.nextZ;
  if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
  this.i = i;
  this.x = x;
  this.y = y;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
//# sourceMappingURL=earcut.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/lineclip.js

function clipPolyline(positions, bbox, options = {}) {
  const {
    size = 2,
    startIndex = 0,
    endIndex = positions.length
  } = options;
  const numPoints = (endIndex - startIndex) / size;
  const result = [];
  let part = [];
  let a;
  let b;
  let codeA = -1;
  let codeB;
  let lastCode;

  for (let i = 1; i < numPoints; i++) {
    a = getPointAtIndex(positions, i - 1, size, startIndex, a);
    b = getPointAtIndex(positions, i, size, startIndex, b);

    if (codeA < 0) {
      codeA = bitCode(a, bbox);
    }

    codeB = lastCode = bitCode(b, bbox);

    while (true) {
      if (!(codeA | codeB)) {
        push(part, a);

        if (codeB !== lastCode) {
          push(part, b);

          if (i < numPoints - 1) {
            result.push(part);
            part = [];
          }
        } else if (i === numPoints - 1) {
          push(part, b);
        }

        break;
      } else if (codeA & codeB) {
        break;
      } else if (codeA) {
        intersect(a, b, codeA, bbox, a);
        codeA = bitCode(a, bbox);
      } else {
        intersect(a, b, codeB, bbox, b);
        codeB = bitCode(b, bbox);
      }
    }

    codeA = lastCode;
  }

  if (part.length) result.push(part);
  return result;
}
function clipPolygon(positions, bbox, options = {}) {
  const {
    size = 2,
    endIndex = positions.length
  } = options;
  let {
    startIndex = 0
  } = options;
  let numPoints = (endIndex - startIndex) / size;
  let result;
  let p;
  let prev;
  let inside;
  let prevInside;

  for (let edge = 1; edge <= 8; edge *= 2) {
    result = [];
    prev = getPointAtIndex(positions, numPoints - 1, size, startIndex, prev);
    prevInside = !(bitCode(prev, bbox) & edge);

    for (let i = 0; i < numPoints; i++) {
      p = getPointAtIndex(positions, i, size, startIndex, p);
      inside = !(bitCode(p, bbox) & edge);
      if (inside !== prevInside) push(result, intersect(prev, p, edge, bbox));
      if (inside) push(result, p);
      copy(prev, p);
      prevInside = inside;
    }

    positions = result;
    startIndex = 0;
    numPoints = result.length / size;
    if (!numPoints) break;
  }

  return result;
}
function intersect(a, b, edge, bbox, out = []) {
  let t;
  let snap;

  if (edge & 8) {
    t = (bbox[3] - a[1]) / (b[1] - a[1]);
    snap = 3;
  } else if (edge & 4) {
    t = (bbox[1] - a[1]) / (b[1] - a[1]);
    snap = 1;
  } else if (edge & 2) {
    t = (bbox[2] - a[0]) / (b[0] - a[0]);
    snap = 2;
  } else if (edge & 1) {
    t = (bbox[0] - a[0]) / (b[0] - a[0]);
    snap = 0;
  } else {
    return null;
  }

  for (let i = 0; i < a.length; i++) {
    out[i] = (snap & 1) === i ? bbox[snap] : t * (b[i] - a[i]) + a[i];
  }

  return out;
}
function bitCode(p, bbox) {
  let code = 0;
  if (p[0] < bbox[0]) code |= 1;else if (p[0] > bbox[2]) code |= 2;
  if (p[1] < bbox[1]) code |= 4;else if (p[1] > bbox[3]) code |= 8;
  return code;
}
//# sourceMappingURL=lineclip.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/utils.js
function utils_push(target, source) {
  const size = source.length;
  const startIndex = target.length;

  if (startIndex > 0) {
    let isDuplicate = true;

    for (let i = 0; i < size; i++) {
      if (target[startIndex - size + i] !== source[i]) {
        isDuplicate = false;
        break;
      }
    }

    if (isDuplicate) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    target[startIndex + i] = source[i];
  }

  return true;
}
function utils_copy(target, source) {
  const size = source.length;

  for (let i = 0; i < size; i++) {
    target[i] = source[i];
  }
}
function utils_getPointAtIndex(positions, index, size, offset, out = []) {
  const startI = offset + index * size;

  for (let i = 0; i < size; i++) {
    out[i] = positions[startI + i];
  }

  return out;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/cut-by-grid.js


function cutPolylineByGrid(positions, options = {}) {
  const {
    size = 2,
    broken = false,
    gridResolution = 10,
    gridOffset = [0, 0],
    startIndex = 0,
    endIndex = positions.length
  } = options;
  const numPoints = (endIndex - startIndex) / size;
  let part = [];
  const result = [part];
  const a = utils_getPointAtIndex(positions, 0, size, startIndex);
  let b;
  let codeB;
  const cell = getGridCell(a, gridResolution, gridOffset, []);
  const scratchPoint = [];
  utils_push(part, a);

  for (let i = 1; i < numPoints; i++) {
    b = utils_getPointAtIndex(positions, i, size, startIndex, b);
    codeB = bitCode(b, cell);

    while (codeB) {
      intersect(a, b, codeB, cell, scratchPoint);
      const codeAlt = bitCode(scratchPoint, cell);

      if (codeAlt) {
        intersect(a, scratchPoint, codeAlt, cell, scratchPoint);
        codeB = codeAlt;
      }

      utils_push(part, scratchPoint);
      utils_copy(a, scratchPoint);
      moveToNeighborCell(cell, gridResolution, codeB);

      if (broken && part.length > size) {
        part = [];
        result.push(part);
        utils_push(part, a);
      }

      codeB = bitCode(b, cell);
    }

    utils_push(part, b);
    utils_copy(a, b);
  }

  return broken ? result : result[0];
}
const TYPE_INSIDE = 0;
const TYPE_BORDER = 1;

function concatInPlace(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}

function cutPolygonByGrid(positions, holeIndices, options = {}) {
  if (!positions.length) {
    return [];
  }

  const {
    size = 2,
    gridResolution = 10,
    gridOffset = [0, 0],
    edgeTypes = false
  } = options;
  const result = [];
  const queue = [{
    pos: positions,
    types: edgeTypes && new Array(positions.length / size).fill(TYPE_BORDER),
    holes: holeIndices || []
  }];
  const bbox = [[], []];
  let cell = [];

  while (queue.length) {
    const {
      pos,
      types,
      holes
    } = queue.shift();
    getBoundingBox(pos, size, holes[0] || pos.length, bbox);
    cell = getGridCell(bbox[0], gridResolution, gridOffset, cell);
    const code = bitCode(bbox[1], cell);

    if (code) {
      let parts = bisectPolygon(pos, types, size, 0, holes[0] || pos.length, cell, code);
      const polygonLow = {
        pos: parts[0].pos,
        types: parts[0].types,
        holes: []
      };
      const polygonHigh = {
        pos: parts[1].pos,
        types: parts[1].types,
        holes: []
      };
      queue.push(polygonLow, polygonHigh);

      for (let i = 0; i < holes.length; i++) {
        parts = bisectPolygon(pos, types, size, holes[i], holes[i + 1] || pos.length, cell, code);

        if (parts[0]) {
          polygonLow.holes.push(polygonLow.pos.length);
          polygonLow.pos = concatInPlace(polygonLow.pos, parts[0].pos);

          if (edgeTypes) {
            polygonLow.types = concatInPlace(polygonLow.types, parts[0].types);
          }
        }

        if (parts[1]) {
          polygonHigh.holes.push(polygonHigh.pos.length);
          polygonHigh.pos = concatInPlace(polygonHigh.pos, parts[1].pos);

          if (edgeTypes) {
            polygonHigh.types = concatInPlace(polygonHigh.types, parts[1].types);
          }
        }
      }
    } else {
      const polygon = {
        positions: pos
      };

      if (edgeTypes) {
        polygon.edgeTypes = types;
      }

      if (holes.length) {
        polygon.holeIndices = holes;
      }

      result.push(polygon);
    }
  }

  return result;
}

function bisectPolygon(positions, edgeTypes, size, startIndex, endIndex, bbox, edge) {
  const numPoints = (endIndex - startIndex) / size;
  const resultLow = [];
  const resultHigh = [];
  const typesLow = [];
  const typesHigh = [];
  const scratchPoint = [];
  let p;
  let side;
  let type;
  const prev = utils_getPointAtIndex(positions, numPoints - 1, size, startIndex);
  let prevSide = Math.sign(edge & 8 ? prev[1] - bbox[3] : prev[0] - bbox[2]);
  let prevType = edgeTypes && edgeTypes[numPoints - 1];
  let lowPointCount = 0;
  let highPointCount = 0;

  for (let i = 0; i < numPoints; i++) {
    p = utils_getPointAtIndex(positions, i, size, startIndex, p);
    side = Math.sign(edge & 8 ? p[1] - bbox[3] : p[0] - bbox[2]);
    type = edgeTypes && edgeTypes[startIndex / size + i];

    if (side && prevSide && prevSide !== side) {
      intersect(prev, p, edge, bbox, scratchPoint);
      utils_push(resultLow, scratchPoint) && typesLow.push(prevType);
      utils_push(resultHigh, scratchPoint) && typesHigh.push(prevType);
    }

    if (side <= 0) {
      utils_push(resultLow, p) && typesLow.push(type);
      lowPointCount -= side;
    } else if (typesLow.length) {
      typesLow[typesLow.length - 1] = TYPE_INSIDE;
    }

    if (side >= 0) {
      utils_push(resultHigh, p) && typesHigh.push(type);
      highPointCount += side;
    } else if (typesHigh.length) {
      typesHigh[typesHigh.length - 1] = TYPE_INSIDE;
    }

    utils_copy(prev, p);
    prevSide = side;
    prevType = type;
  }

  return [lowPointCount ? {
    pos: resultLow,
    types: edgeTypes && typesLow
  } : null, highPointCount ? {
    pos: resultHigh,
    types: edgeTypes && typesHigh
  } : null];
}

function getGridCell(p, gridResolution, gridOffset, out) {
  const left = Math.floor((p[0] - gridOffset[0]) / gridResolution) * gridResolution + gridOffset[0];
  const bottom = Math.floor((p[1] - gridOffset[1]) / gridResolution) * gridResolution + gridOffset[1];
  out[0] = left;
  out[1] = bottom;
  out[2] = left + gridResolution;
  out[3] = bottom + gridResolution;
  return out;
}

function moveToNeighborCell(cell, gridResolution, edge) {
  if (edge & 8) {
    cell[1] += gridResolution;
    cell[3] += gridResolution;
  } else if (edge & 4) {
    cell[1] -= gridResolution;
    cell[3] -= gridResolution;
  } else if (edge & 2) {
    cell[0] += gridResolution;
    cell[2] += gridResolution;
  } else if (edge & 1) {
    cell[0] -= gridResolution;
    cell[2] -= gridResolution;
  }
}

function getBoundingBox(positions, size, endIndex, out) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < endIndex; i += size) {
    const x = positions[i];
    const y = positions[i + 1];
    minX = x < minX ? x : minX;
    maxX = x > maxX ? x : maxX;
    minY = y < minY ? y : minY;
    maxY = y > maxY ? y : maxY;
  }

  out[0][0] = minX;
  out[0][1] = minY;
  out[1][0] = maxX;
  out[1][1] = maxY;
  return out;
}
//# sourceMappingURL=cut-by-grid.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/cut-by-mercator-bounds.js


const DEFAULT_MAX_LATITUDE = 85.051129;
function cutPolylineByMercatorBounds(positions, options = {}) {
  const {
    size = 2,
    startIndex = 0,
    endIndex = positions.length,
    normalize = true
  } = options;
  const newPositions = positions.slice(startIndex, endIndex);
  wrapLongitudesForShortestPath(newPositions, size, 0, endIndex - startIndex);
  const parts = cutPolylineByGrid(newPositions, {
    size,
    broken: true,
    gridResolution: 360,
    gridOffset: [-180, -180]
  });

  if (normalize) {
    for (const part of parts) {
      shiftLongitudesIntoRange(part, size);
    }
  }

  return parts;
}
function cutPolygonByMercatorBounds(positions, holeIndices, options = {}) {
  const {
    size = 2,
    normalize = true,
    edgeTypes = false
  } = options;
  holeIndices = holeIndices || [];
  const newPositions = [];
  const newHoleIndices = [];
  let srcStartIndex = 0;
  let targetIndex = 0;

  for (let ringIndex = 0; ringIndex <= holeIndices.length; ringIndex++) {
    const srcEndIndex = holeIndices[ringIndex] || positions.length;
    const targetStartIndex = targetIndex;
    const splitIndex = findSplitIndex(positions, size, srcStartIndex, srcEndIndex);

    for (let i = splitIndex; i < srcEndIndex; i++) {
      newPositions[targetIndex++] = positions[i];
    }

    for (let i = srcStartIndex; i < splitIndex; i++) {
      newPositions[targetIndex++] = positions[i];
    }

    wrapLongitudesForShortestPath(newPositions, size, targetStartIndex, targetIndex);
    insertPoleVertices(newPositions, size, targetStartIndex, targetIndex, options.maxLatitude);
    srcStartIndex = srcEndIndex;
    newHoleIndices[ringIndex] = targetIndex;
  }

  newHoleIndices.pop();
  const parts = cutPolygonByGrid(newPositions, newHoleIndices, {
    size,
    gridResolution: 360,
    gridOffset: [-180, -180],
    edgeTypes
  });

  if (normalize) {
    for (const part of parts) {
      shiftLongitudesIntoRange(part.positions, size);
    }
  }

  return parts;
}

function findSplitIndex(positions, size, startIndex, endIndex) {
  let maxLat = -1;
  let pointIndex = -1;

  for (let i = startIndex + 1; i < endIndex; i += size) {
    const lat = Math.abs(positions[i]);

    if (lat > maxLat) {
      maxLat = lat;
      pointIndex = i - 1;
    }
  }

  return pointIndex;
}

function insertPoleVertices(positions, size, startIndex, endIndex, maxLatitude = DEFAULT_MAX_LATITUDE) {
  const firstLng = positions[startIndex];
  const lastLng = positions[endIndex - size];

  if (Math.abs(firstLng - lastLng) > 180) {
    const p = utils_getPointAtIndex(positions, 0, size, startIndex);
    p[0] += Math.round((lastLng - firstLng) / 360) * 360;
    utils_push(positions, p);
    p[1] = Math.sign(p[1]) * maxLatitude;
    utils_push(positions, p);
    p[0] = firstLng;
    utils_push(positions, p);
  }
}

function wrapLongitudesForShortestPath(positions, size, startIndex, endIndex) {
  let prevLng = positions[0];
  let lng;

  for (let i = startIndex; i < endIndex; i += size) {
    lng = positions[i];
    const delta = lng - prevLng;

    if (delta > 180 || delta < -180) {
      lng -= Math.round(delta / 360) * 360;
    }

    positions[i] = prevLng = lng;
  }
}

function shiftLongitudesIntoRange(positions, size) {
  let refLng;
  const pointCount = positions.length / size;

  for (let i = 0; i < pointCount; i++) {
    refLng = positions[i * size];

    if ((refLng + 180) % 360 !== 0) {
      break;
    }
  }

  const delta = -Math.round(refLng / 360) * 360;

  if (delta === 0) {
    return;
  }

  for (let i = 0; i < pointCount; i++) {
    positions[i * size] += delta;
  }
}
//# sourceMappingURL=cut-by-mercator-bounds.js.map
;// CONCATENATED MODULE: ./node_modules/@math.gl/polygon/dist/esm/index.js







//# sourceMappingURL=index.js.map

/***/ })

}]);