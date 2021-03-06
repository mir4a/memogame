(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.CircleElement = (function(_super) {
    __extends(CircleElement, _super);

    function CircleElement() {
      this.handleClick = __bind(this.handleClick, this);
      this.removeClassHighlight = __bind(this.removeClassHighlight, this);      _ref = CircleElement.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    CircleElement.prototype.build = function() {
      var color;

      color = Math.floor(Math.random() * 999);
      this.item = $("<element class=\"" + this.options["class"] + "\" style=\"background-color: #" + color + "\"></element>");
      this.item.data("element-id", this.id);
      this.item.click(this.handleClick);
      return this.scope.append(this.item);
    };

    CircleElement.prototype.highlight = function(onComplete) {
      var oldOnComplete,
        _this = this;

      if (typeof onComplete !== "function") {
        onComplete = function() {
          return _this.removeClassHighlight();
        };
      } else {
        oldOnComplete = onComplete;
        onComplete = function() {
          _this.removeClassHighlight();
          return oldOnComplete();
        };
      }
      this.item.toggleClass(this.options.highlightClass);
      return setTimeout(onComplete, 300);
    };

    CircleElement.prototype.removeClassHighlight = function() {
      return this.item.toggleClass(this.options.highlightClass);
    };

    CircleElement.prototype.handleClick = function(event) {
      return this.onFire(event);
    };

    return CircleElement;

  })(BaseElement);

}).call(this);
