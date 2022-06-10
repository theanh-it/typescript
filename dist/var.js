"use strict";
// kieu du lieu
var fullname;
fullname = "Nguyen The Anh";
var age;
age = 26;
var nameStudentList;
nameStudentList = ["Nguyen The Anh", "The Anh"];
var ageStudentList;
ageStudentList = [26, 25];
var is_active = true;
//KDL enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//KDL hỗn tạp "Tuple"
var x;
x = ["name", 25];
//KDL any
var any;
