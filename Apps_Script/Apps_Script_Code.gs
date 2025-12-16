function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  var timestamp = new Date();
  var v1 = e.parameter.v1;
  var i1 = e.parameter.i1;
  var rp1 = e.parameter.rp1;
  var ap1 = e.parameter.ap1;
  var v2 = e.parameter.v2;
  var i2 = e.parameter.i2;
  var rp2 = e.parameter.rp2;
  var ap2 = e.parameter.ap2;
  var e1 = e.parameter.e1;
  var e2 = e.parameter.e2;
  var c1 = e.parameter.c1;
  var c2 = e.parameter.c2;

  sheet.appendRow([timestamp, v1, i1, rp1, ap1, v2, i2, rp2, ap2, e1, e2, c1, c2]);

  return ContentService.createTextOutput("Success");
}

