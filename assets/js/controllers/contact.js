app.controller("contact", function ($scope, $http, $window) {
        var empty = 'Please'
        var data = {
            fullname: $scope.fullname,
            email: $scope.email,
            message: $scope.message
        }


        $scope.contactinfo = function(){



            if (!$scope.fullname) {
                sweetAlert("Oops...", "Please include your name", "error");
                return;
            };

            if (!$scope.email) {
                sweetAlert("Oops...", "Please include your E-mail", "error");
                return;
            };

            if (!$scope.message) {
                sweetAlert("Oops...", "Please include a message", "error");
                return;
            };

            $http.post('/info', {
                    data
                  });

            $scope.clear()

            swal("Thank you!", "Your message has been submitted!", "success")
        };

        $scope.clear = function () {

            $scope.fullname = "";
            $scope.email = "";
            $scope.message = "";

        }
});
