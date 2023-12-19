// ^====================>>>>>Elements<<<<<<<<<=======================
var bookMarkName = document.getElementById("bookmarkname");
var bookMarkUrl = document.getElementById("bookmarkurl");
var bookmarkTable = document.getElementById("bookmarkTable");
var bookmarkCard = document.getElementById("bookmarkCard");
// *====================>>>>>Variables<<<<<<<<<======================
var bookMarkList = [];
// ~====================>>>>>Function<<<<<<<<<=======================
function DisplayBookMarks(bookMarklst) {
  var tbldata = "";
  card = "";
  for (var i = 0; i < bookMarkList.length; i++) {
    tbldata = `<tr>
       <td>${i + 1}</td>
       <td>${bookMarkList[i].bookMarkName}</td>
       <td>${bookMarkList[i].bookMarkUrl}</td> </tr>`;
    card = ` <div class="col-md-3 >
      <h4>
        ${bookMarkList[i].bookMarkName}
      </h4>
      <img src="images/Screenshot.png" height="250px" alt="" />
    </div>
 `;
  }
  //   bookmarkTable.innerHTML += tbldata;
  bookmarkCard.innerHTML += card;
}
//? ==================>>>>>Events<<<<<<<<<<=========================
function insert() {
  var bookmark = {
    bookMarkName: bookMarkName.value,
    bookMarkUrl: bookMarkUrl.value,
  };
  bookMarkList.push(bookmark);
  DisplayBookMarks(bookMarkList);
}
