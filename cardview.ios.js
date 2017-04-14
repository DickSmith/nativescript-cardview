"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("platform");
var cardview_common_1 = require("./cardview-common");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        var _this = _super.call(this) || this;
        var width = platform_1.screen.mainScreen.widthDIPs - 20;
        _this.nativeView = new UIView(CGRectMake(10, 30, width, 0));
        _this.nativeView.layer.masksToBounds = false;
        _this.shadowColor = "black";
        _this.radius = 1;
        _this.shadowRadius = 1;
        _this.shadowOpacity = 0.4;
        _this.shadowOffsetHeight = 2;
        _this.shadowOffsetWidth = 0;
        return _this;
    }
    Object.defineProperty(CardView.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.layer.cornerRadius = value;
    };
    CardView.prototype[cardview_common_1.shadowRadiusProperty.setNative] = function (value) {
        this.nativeView.layer.shadowRadius = value;
    };
    CardView.prototype[cardview_common_1.shadowOffsetWidthProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOffset = CGSizeMake(value, this.nativeView.layer.shadowOffset.height);
    };
    CardView.prototype[cardview_common_1.shadowOffsetHeightProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOffset = CGSizeMake(this.nativeView.layer.shadowOffset.width, value);
    };
    CardView.prototype[cardview_common_1.shadowColorProperty.setNative] = function (value) {
        this.nativeView.layer.shadowColor = value.ios.CGColor;
    };
    CardView.prototype[cardview_common_1.shadowOpacityProperty.setNative] = function (value) {
        this.nativeView.layer.shadowOpacity = value;
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;
//# sourceMappingURL=cardview.ios.js.map