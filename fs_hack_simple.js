function getsporttisaittilink(url, file, hrefclass)
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
				alert(allText);
				let parser = new DOMParser();
				let parsedHtml = parser.parseFromString(allText, 'text/html');
				filenames = parsedHtml.getElementsByClassName("filename");
				
				for (i = 0; i < filenames.length; i++) {
					 var href = filenames[i].getElementsByTagName("a")[0].href;
					 alert("foo");
					 var foo = href.search(file);
					 if (foo > -1) {
						  var links = document.getElementsByClassName(hrefclass);
						  links[0].href = href;
					 }
					 
				}
			}
		}
	}

	rawFile.send(null);
}