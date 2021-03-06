
angular.module("employeeApp", [])
    .controller("employeeController", function($scope, employeeService){

        $scope.editIndex = -1;
        $scope.editObject =   {
            firstName: "",
            lastName: "",
            imgSrc: "",
            from: {city: "", state:""},
            phone: "",
            email: "",
            jobTitle: "",
            jobDesc: ""
        };

        $scope.employeeArray = employeeService.getStaffArray();


        //edit button click
        $scope.editingPerson = function(personIndex){
            $scope.editObject = angular.copy($scope.employeeArray[personIndex]);
          /*
          *WHY COPY???
          Because, I wont to seperate the edits from the origanal array. Doing this allows the user to cancel their edit and since the fields are not data-binded to the origanl array, it won't make anychanges.
          */
            $scope.editIndex = personIndex;
        };

        //cancelEdit
        $scope.cancelEdit = function(){
            $scope.editIndex = -1;

        };

        //saveEdit
        $scope.saveEdit = function(personIndex){
            employeeService.updateInfo(personIndex, $scope.editObject);
            $scope.editIndex = -1;
        }
    });

angular.module("employeeApp")
    .service("employeeService", function(){


        //all employees.
        var staffArray = [
            {
                firstName: "Tìm",
                lastName: "Phòng",
                imgSrc: "https://3.bp.blogspot.com/-2hitMEJeVjo/UmrJuPIFa6I/AAAAAAAAZFQ/Hmu_ieZ3RWQ/s1600/olivia-munn.jpg",
                from: {city: "HCM", state:""},
                phone: "01234",
                email: "timphong@gmail.com",
                jobTitle: "AGU",
                jobDesc: ""
            }

        ];

        this.getStaffArray = function(){
            return staffArray;
        };

        //updating person
        this.updateInfo = function(personIndex, obj){
            staffArray.splice(personIndex, 1, obj)
        }
    });