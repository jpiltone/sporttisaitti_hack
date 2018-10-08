function getsporttisaittilink(url, file, hrefid)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", url, true);
	rawFile.responsetype = "document";

	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var i;
				var allText = rawFile.responseText;
				let parser = new DOMParser();
				let parsedHtml = parser.parseFromString(allText, 'text/html');
				filenames = parsedHtml.getElementsByClassName("filename");
				
				for (i = 0; i < filenames.length; i++) {
					 var href = filenames[i].getElementsByTagName("a")[0].href;
					 var foo = href.search(file);
					 if (foo > -1) {
						  var links = document.getElementById(hrefid);
						  links.href = href;
					 }
					 
				}
			}
		}
	}

	rawFile.send(null);
}