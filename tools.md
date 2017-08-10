# Tools  

## [Tools - Cartography, Geo, GIS, Maps](cartography-geo-gis-maps/tools.md)  

## Data  
[Good Tables - service for validating tabular data](http://goodtables.okfnlabs.org/)  
[dummi - data for your projects](http://dummi.io/)  


## CSS  

[https://csstree.github.io/docs/](https://csstree.github.io/docs/)
[css nano - compress your css](http://cssnano.co/)  


## Google Chrome  

[Chrome URLs](chrome-urls.md)  
[Google Chrome Platform Status Samples](https://www.chromestatus.com/samples)  
Google Chrome Platform Status feature support & usage metrics.  
[Google Chrome Platform Status Samples Repository](https://github.com/GoogleChrome/samples)  
A repo containing samples tied to new functionality in each release of Google Chrome.  




## Google Developers  
[Google Samples - Google Developers](https://googlesamples.github.io/)  
[Google Samples - Google Developers Repositories on GitHub](https://github.com/googlesamples)  
[Search - Google Developers Documentation](https://developers.google.com/search/)  

[Google Search](google-search.md)  



# Bookmarklets  

# TO DO: Roll into Super Bookmarklet, aka Web Developer Tools-ish  

[List all Links](javascript:var a%3D%27%27%3Bfor(var ln%3D0%3Bln<document.links.length%3Bln%2B%2B)%7Bvar lk%3Ddocument.links%5Bln%5D%3Ba%2B%3Dln%2B%27: <a href%3D%5C%27%27%2Blk%2B%27%5C%27 title%3D%5C%27%27%2Blk.text%2B%27%5C%27>%27%2Blk%2B%27</a><br>%5Cn%27%3B%7Dw%3Dwindow.open(%27%27,%27Links%27,%27scrollbars,resizable,width%3D400,height%3D600%27)%3Bw.document.write(a)%2BKimberlyanncollins)  

[Search Links](javascript:(function()%7Bvar x,n,nD,z,i%3B function htmlEscape(s)%7Bs%3Ds.replace(/%26/g,%27%26amp%3B%27)%3Bs%3Ds.replace(/>/g,%27%26gt%3B%27)%3Bs%3Ds.replace(/</g,%27%26lt%3B%27)%3Breturn s%3B%7D function attrQuoteEscape(s)%7Bs%3Ds.replace(/%26/g,%27%26amp%3B%27)%3B s%3Ds.replace(/"/g, %27%26quot%3B%27)%3Breturn s%3B%7D x%3Dprompt("show links with this word/phrase in link text or target url (leave blank to list all links):", "")%3B n%3D0%3B if(x!%3Dnull) %7B x%3Dx.toLowerCase()%3B nD %3D window.open().document%3B nD.writeln(%27<html><head><title>Links containing "%27%2BhtmlEscape(x)%2B%27"</title><base target%3D"_blank"></head><body>%27)%3B nD.writeln(%27Links on <a href%3D"%27%2BattrQuoteEscape(location.href)%2B%27">%27%2BhtmlEscape(location.href)%2B%27</a><br> with link text or target url containing %26quot%3B%27 %2B htmlEscape(x) %2B %27%26quot%3B<br><hr>%27)%3B z %3D document.links%3B for (i %3D 0%3B i < z.length%3B %2B%2Bi) %7B if ((z%5Bi%5D.innerHTML %26%26 z%5Bi%5D.innerHTML.toLowerCase().indexOf(x) !%3D -1) %7C%7C z%5Bi%5D.href.toLowerCase().indexOf(x) !%3D -1 ) %7B nD.writeln(%2B%2Bn %2B %27. <a href%3D"%27 %2B attrQuoteEscape(z%5Bi%5D.href) %2B %27">%27 %2B (z%5Bi%5D.innerHTML %7C%7C htmlEscape(z%5Bi%5D.href)) %2B %27</a><br>%27)%3B %7D %7D nD.writeln(%27<hr></body></html>%27)%3B nD.close()%3B %7D %7D)()%3B)  
[Work Around Content Blockers](javascript:(function()%7B var style%3Ddocument.createElement(%27style%27)%3Bstyle.innerHTML%3D%27body&nbsp;div.nH&#123;font:50px&nbsp;Georgia,&nbsp;Times,&nbsp;serif%7D%27%3B%20document.body.appendChild(style)%20%7D)()%3B)  

[View Desktop in Browser](file:///Users/albert/Desktop/)  

