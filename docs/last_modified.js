mon = new Array("January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December");
mst = new Array(12);
mst["Jan"] = "January"; mst["Feb"] = "February"; mst["Mar"] = "March";
mst["Apr"] = "April";   mst["May"] = "May";      mst["Jun"] = "June";
mst["Jul"] = "July";    mst["Aug"] = "August";   mst["Sep"] = "September";
mst["Oct"] = "October"; mst["Nov"] = "November"; mst["Dec"] = "December";
var upd = document.lastModified;
mm = upd.match("(/Janu?a?r?y?|Febr?u?a?r?y?|Marc?h?|Apri?l?|May|June?|July?|Augu?s?t?|Sept?e?m?b?e?r?|Octo?b?e?r?|Nove?m?b?e?r?|Dece?m?b?e?r?/)")
if (mm!=null) {
	mm = RegExp.$1;
	if (mm.length==3) {mm = mst[mm];}
	upd.match(/ ([0-9][0-9]) /);
	dd = RegExp.$1;
	upd.match(/ ([0-9][0-9][0-9][0-9]) /);
	yy = RegExp.$1;
} else if (upd.match(/(\d\d)\D(\d\d)\D(\d\d\d?\d?) /)!=null) {
	mm = RegExp.$1;
	if (mm.substring(0,1)=="0") {mm = mm.substring(1,2);}
	mm = mon[mm];
	dd = RegExp.$2;
	yy = RegExp.$3;
	if (yy < 2000) {yy = "19" + yy;}
} else if (upd.match(/(\d\d\d\d)\D(\d\d)\D(\d\d) /)!=null) {
	mm = RegExp.$2;
	if (mm.substring(0,1)=="0") {mm = mm.substring(1,2);}
	mm = mon[mm];
	dd = RegExp.$3;
	yy = RegExp.$1;
}
if (dd.substring(0,1)=="0") {dd = dd.substring(1,2);}
document.write("<i>Last modified: ",mm," ",dd," ",yy,"</i>")
