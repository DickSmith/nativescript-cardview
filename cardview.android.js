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
var cardview_common_1 = require("./cardview-common");
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.setRadius(value);
    };
    CardView.prototype[cardview_common_1.elevationProperty.setNative] = function (value) {
        this.nativeView.setCardElevation(value);
    };
    CardView.prototype.createNativeView = function () {
        return new android.support.v7.widget.CardView(this._context);
    };
    CardView.prototype.initNativeView = function () {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    };
    CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(value.android);
            }
            catch (error) {
                console.log("bad background-color value:", error);
            }
        }
    };
    CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;
//# sourceMappingURL=cardview.android.js.map