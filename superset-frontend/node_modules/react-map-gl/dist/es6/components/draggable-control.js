import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import PropTypes from 'prop-types';
import BaseControl from './base-control';
var propTypes = Object.assign({}, BaseControl.propTypes, {
  draggable: PropTypes.bool,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  offsetLeft: PropTypes.number,
  offsetTop: PropTypes.number
});
var defaultProps = Object.assign({}, BaseControl.defaultProps, {
  draggable: false,
  offsetLeft: 0,
  offsetTop: 0
});
export default class DraggableControl extends BaseControl {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      dragPos: null,
      dragOffset: null
    });

    _defineProperty(this, "_dragEvents", null);

    _defineProperty(this, "_onDragStart", event => {
      var {
        draggable,
        captureDrag
      } = this.props;

      if (draggable || captureDrag) {
        event.stopPropagation();
      }

      if (!draggable) {
        return;
      }

      var dragPos = this._getDragEventPosition(event);

      var dragOffset = this._getDragEventOffset(event);

      this.setState({
        dragPos,
        dragOffset
      });

      this._setupDragEvents();

      var {
        onDragStart
      } = this.props;

      if (onDragStart && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = this._getDragLngLat(dragPos, dragOffset);
        onDragStart(callbackEvent);
      }
    });

    _defineProperty(this, "_onDrag", event => {
      event.stopPropagation();

      var dragPos = this._getDragEventPosition(event);

      this.setState({
        dragPos
      });
      var {
        onDrag
      } = this.props;
      var {
        dragOffset
      } = this.state;

      if (onDrag && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = this._getDragLngLat(dragPos, dragOffset);
        onDrag(callbackEvent);
      }
    });

    _defineProperty(this, "_onDragEnd", event => {
      var {
        dragPos,
        dragOffset
      } = this.state;
      event.stopPropagation();
      this.setState({
        dragPos: null,
        dragOffset: null
      });

      this._removeDragEvents();

      var {
        onDragEnd
      } = this.props;

      if (onDragEnd && dragPos && dragOffset) {
        var callbackEvent = Object.assign({}, event);
        callbackEvent.lngLat = this._getDragLngLat(dragPos, dragOffset);
        onDragEnd(callbackEvent);
      }
    });

    _defineProperty(this, "_onDragCancel", event => {
      event.stopPropagation();
      this.setState({
        dragPos: null,
        dragOffset: null
      });

      this._removeDragEvents();
    });
  }

  componentWillUnmount() {
    super.componentWillUnmount();

    this._removeDragEvents();
  }

  _setupDragEvents() {
    var {
      eventManager
    } = this._context;

    if (!eventManager) {
      return;
    }

    this._dragEvents = {
      panmove: this._onDrag,
      panend: this._onDragEnd,
      pancancel: this._onDragCancel
    };
    eventManager.on(this._dragEvents);
  }

  _removeDragEvents() {
    var {
      eventManager
    } = this._context;

    if (!eventManager || !this._dragEvents) {
      return;
    }

    eventManager.off(this._dragEvents);
    this._dragEvents = null;
  }

  _getDragEventPosition(event) {
    var {
      offsetCenter: {
        x,
        y
      }
    } = event;
    return [x, y];
  }

  _getDragEventOffset(event) {
    var {
      center: {
        x,
        y
      }
    } = event;
    var container = this._containerRef.current;

    if (container) {
      var rect = container.getBoundingClientRect();
      return [rect.left - x, rect.top - y];
    }

    return null;
  }

  _getDraggedPosition(dragPos, dragOffset) {
    return [dragPos[0] + dragOffset[0], dragPos[1] + dragOffset[1]];
  }

  _getDragLngLat(dragPos, dragOffset) {
    var {
      offsetLeft,
      offsetTop
    } = this.props;

    var [x, y] = this._getDraggedPosition(dragPos, dragOffset);

    return this._context.viewport.unproject([x - offsetLeft, y - offsetTop]);
  }

}

_defineProperty(DraggableControl, "propTypes", propTypes);

_defineProperty(DraggableControl, "defaultProps", defaultProps);
//# sourceMappingURL=draggable-control.js.map