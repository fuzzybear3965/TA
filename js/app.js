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
            "Post 1": {
                "title": "Quiz 1 - Problem 2",
                "url": "docs/Week1.pdf"
            },
            "Post 2": {
                "title": "Continuous Charge Homework Questions",
                "url": "docs/HomeworkQuestions.pdf"
            },
            
            "Post 3": {
                "title": "Quiz 2 - Rings and Discs of Charge",
                "url": "docs/RingsAndDiscsOfCharge.pdf"
            },
            
            "Post 4": {
                "title": "Quiz 3 - Gauss' law",
                "url": "docs/Week3Quiz3.pdf"
            },
            
            "Post 5": {
                "title": "Quiz 4 - Taylor Series Expanding a Potential",
                "url": "docs/Week4Quiz4.pdf"
            }
        };
    }]
);
