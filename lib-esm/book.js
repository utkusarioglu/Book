var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Parent } from "@utkusarioglu/mixer";
import { M_Namespace } from "@utkusarioglu/m_namespace";
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(namespace) {
        var _this = _super.call(this) || this;
        _this._book = {};
        _this.RESOLUTION_RULES = {
            During: [
                undefined,
                "get_Chapter()",
            ],
        };
        _this.set_GlobalNamespace(namespace);
        return _this;
    }
    Book.prototype.add_Chapter = function (item_name, item_data, per_item_call) {
        if (per_item_call === void 0) { per_item_call = function (item) { return item; }; }
        this._book[item_name] = per_item_call(item_data);
        return this;
    };
    Book.prototype.get_Chapter = function (item_name) {
        if (this.has_Chapter(item_name)) {
            return this._book[item_name];
        }
        else {
            return null;
        }
    };
    Book.prototype.has_Chapter = function (item_name) {
        return this._book.hasOwnProperty(item_name);
    };
    Book.prototype.get_AllChapters = function () {
        return this._book;
    };
    Book.prototype.get_AllChapterNames = function () {
        return Object.keys(this._book);
    };
    Book.prototype.add_BookContent = function (library_content, per_item_call) {
        var _this = this;
        if (per_item_call === void 0) { per_item_call = function (item) { return item; }; }
        Object.entries(library_content).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            _this.add_Chapter(key, value, per_item_call);
        });
        return this;
    };
    Book.prototype.add_Books = function (library_set, per_item_call) {
        var _this = this;
        if (per_item_call === void 0) { per_item_call = function (item) { return item; }; }
        Object.values(library_set).forEach(function (library_item) {
            _this.add_BookContent(library_item, per_item_call);
        });
        return this;
    };
    return Book;
}(Parent().with(M_Namespace)));
export { Book };
//# sourceMappingURL=book.js.map