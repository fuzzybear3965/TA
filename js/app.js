var app = angular.module('ece106',['ngMaterial'])

app.controller('ece106Controller', ['$scope', PostsController = function($scope) {
        $scope.activeTabs = [];
        
        $scope.isOpenTab = function(tab) {
            if($scope.activeTabs.indexOf(tab) > -1) {
                return true;
            } else {
                return false;
            }
        }

        $scope.openTab = function(tab) {
            if($scope.isOpenTab(tab)) {
                $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
            } else {
                $scope.activeTabs.push(tab);
            }
        }

        $scope.docs = {
            "Doc1": {
                "title": "Week 1: Quiz 1, Problem 2",
                "url": "docs/Week1.pdf"
            },
            "Post 2": {
                "title": "Week 2: Continuous Charge Homework Questions",
                "url": "docs/HomeworkQuestions.pdf"
            }
        };
    }]
);
