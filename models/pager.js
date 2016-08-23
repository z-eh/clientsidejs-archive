/**
 * KnockoutJS Pager model
 */

define(["jquery", "ko"], function($, ko) {
    var PagerModel = function (ko, records, dataLoader) {
        var self = this;

        self.getObservableArray = function (array) {
            if (typeof (array) == 'function') {
                return array;
            }

            return ko.observableArray(array);
        };

        self.alternateRecordCount = null;
        self.pageSizeOptions = ko.observableArray([1, 5, 25, 50, 100, 250, 500]);
        self.dataLoader = dataLoader;
        self.records = self.getObservableArray(records);
        self.currentPageIndex = ko.observable(self.records().length > 0 ? 0 : -1);
        self.currentPageSize = ko.observable(25);
        self.recordCount = ko.computed(function () {
            return self.alternateRecordCount == null ? self.records().length : self.alternateRecordCount;
        });
        self.maxPageIndex = ko.computed(function () {
            return Math.ceil(self.records().length / self.currentPageSize()) - 1;
        });
        self.computeStartIndex = function (pageIndex) {
            return pageIndex * parseInt(self.currentPageSize().toString());
        };
        self.computeFutureElementCount = function (pageIndex) {
            return (pageIndex < 2 ? 0 : self.computeStartIndex(pageIndex)) + parseInt(self.currentPageSize().toString());
        };
        self.currentPageRecords = ko.computed(function () {
            var newPageIndex = -1;
            var pageIndex = self.currentPageIndex();
            var maxPageIndex = self.maxPageIndex();
            if (pageIndex > maxPageIndex) {
                newPageIndex = maxPageIndex;
            } else if (pageIndex == -1) {
                if (maxPageIndex > -1) {
                    newPageIndex = 0;
                } else {
                    newPageIndex = -2;
                }
            } else {
                newPageIndex = pageIndex;
            }

            if (newPageIndex != pageIndex) {
                if (newPageIndex >= -1) {
                    self.currentPageIndex(newPageIndex);
                }

                return [];
            }

            var pageSize = parseInt(self.currentPageSize().toString());
            var startIndex = self.computeStartIndex(pageIndex);
            var endIndex = startIndex + pageSize;
            return self.records().slice(startIndex, endIndex);
        }).extend({ throttle: 5 });
        self.moveFirst = function () {
            self.changePageIndex(0);
        };
        self.movePrevious = function () {
            self.changePageIndex(self.currentPageIndex() - 1);
        };
        self.moveNext = function () {
            if (typeof (self.dataLoader) == "function") {
                self.dataLoader(self);
        }
            self.changePageIndex(self.currentPageIndex() +1);
    };
        self.moveLast = function () {
            self.changePageIndex(self.maxPageIndex());
    };
        self.changePageIndex = function (newIndex) {
            if (newIndex < 0
                || newIndex == self.currentPageIndex()
                || newIndex > self.maxPageIndex()) {
                return;
        }

            self.currentPageIndex(newIndex);
    };
        self.onPageSizeChange = function (data, event) {
            var newPageSize = $(event.target).text();
            self.currentPageSize(newPageSize);
            $(".current-page-size").text(newPageSize);
            self.currentPageIndex(0);
    };
        self.renderNoRecords = function () {
            var message = "<span data-bind=\"visible: pager.recordCount() == 0\">No records found.</span>";
            $("div.NoRecords").html(message);
    };

        self.renderNoRecords();
    };

    return PagerModel;
});