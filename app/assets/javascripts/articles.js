// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// var Articles = function($scope) {
//   $scope.articles = ["abbbb", "bccc"];
// };

var app = angular.module("readie", []);

app.controller("PostCtrl", function($scope) {
  $scope.articles = [];

  $scope.addArticle = function() {
    if ($scope.article.url !== '') {
      $.ajax({
        type: 'post',
        url: "/scrape",
        dataType: 'json',
        data: {url: $scope.article.url}
      }).done(function(data){
        $scope.articles.push(data);
                                              console.log(data);
                                              console.log($scope.articles);
        $scope.$apply(function() {
          $scope.article.url = '';
        });
      });
    }
  };

  $scope.articleRead = function() {
    console.log("hehe");
  };
});

app.directive("add", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      scope.$apply(attrs.add);
    });
  };
});


// app.directive("read", function() {
//   return function (scope, element, attrs) {
//     element.bind("click", function() {
//       scope.$apply(attrs.add);
//     });
//   };
// });

app.directive("singleArticle", function() {
  return {
    restrict: "E",
    scope: {
      "close": "&onClose"
    }
  };
});