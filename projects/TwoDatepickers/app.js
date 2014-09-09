/**
 * Created by dimitry.friedman on 8/26/2014.
 */
(function (window, angular) {
    angular.module('app', ['ui.bootstrap']);
    angular.module('app')
        .controller({'DatePickerController': ['$scope', datePickerController]});


    function datePickerController(scope) {
        this.sendNewsletter = false;
        this.startDate = new Date();
        this.minDate = this.startDate;
        //TODO: change - start date plus 7 days
        this.endDate = new Date(this.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.dateOptions = {
            showWeeks: 'false',
            maxMode: 'day'
        }
        //start date picker
        this.open1 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened2 = false;
            this.opened1 = true;
        }
        //end date picker
        this.open2 = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.opened1 = false;
            this.opened2 = true;
        }
        this.sendBtnClicked = function () {
            if(this.offerForm.$valid) {
                console.log(this.startDate + "\n" + this.endDate + "\n" + this.email + "\n" + this.sendNewsletter)
            }else(console.log("form invalid"))
        }
    }
})(window, angular);