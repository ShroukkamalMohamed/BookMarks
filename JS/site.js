// ^====================>>>>>Elements<<<<<<<<<=======================
var bookMarkName = document.getElementById("bookmarkname");
var bookMarkUrl = document.getElementById("bookmarkurl");
var bookmarkTable = document.getElementById("bookmarkTable");
// *====================>>>>>Variables<<<<<<<<<======================
var bookMarkList = [];
// ~====================>>>>>Function<<<<<<<<<=======================
function DisplayBookMarks(bookMarklst) {
    var tbldata = "";

    for (var i = 0; i < bookMarkList.length; i++) {
        tbldata = `<tr>
       <td>${i + 1}</td>
       <td>${bookMarkList[i].bookMarkName}</td>
       <td>${bookMarkList[i].bookMarkUrl}</td> </tr>`
    }
    bookmarkTable.innerHTML += tbldata;
}
//? ==================>>>>>Events<<<<<<<<<<=========================
function insert() {
    var bookmark = { bookMarkName: bookMarkName.value, bookMarkUrl: bookMarkUrl.value };
    bookMarkList.push(bookmark);
    DisplayBookMarks(bookMarkList);

}