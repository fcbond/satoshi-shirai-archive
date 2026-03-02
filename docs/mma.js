mailid = new Array();
pre1="@";
post1=".";
pre2="%";
post2="@";
idnum=0;
function mma(ad,expre){
	idnum += 1;
	num=0;
	for(i=0; i<ad.length; i++)
		if(ad.charAt(i)==pre1)num++;
	for(i=0; i<num; i++)
		ad=ad.replace(pre1,post1);
	num=0;
	for(i=0; i<ad.length; i++)
		if(ad.charAt(i)==pre2)num++;
	for(i=0; i<num; i++)
		ad=ad.replace(pre2,post2);
	if(expre==""){
		expre=ad;
	}
	if (expre=="nolink") {
		document.write(ad);
	} else {
		mailid[idnum] = ad;
		document.write("<a href=\"javascript:mmt('" + idnum + "');\">" + expre + "</a>");
	}
}

function mmt(i){
	num=0;
	location.href="mailto:" + mailid[i];
}
