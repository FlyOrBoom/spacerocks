var url=["https://xyzt.design/spacerocks","about","robot","blog","stuff","https://twitter.com/SpaceRocksFTC/","https://github.com/15303/ftc_app/","https://majorstemacademy.org/","https://www.collinsaerospace.com/","https://xyzt.design/","https://www.fontdiner.com/","https://daltonmaag.com/","https://mckltype.com/","https://pages.github.com/"],doc=document,script=doc.scripts[0];function insertLast(a){script.parentElement.insertBefore(a,script)}function setAttributes(a,t){for(var n in t)a.setAttribute(n,t[n])}if("15303 Space Rocks"!==doc.title){var navBar=doc.createElement("div");navBar.id="navbar",insertLast(navBar);var navLogo=doc.createElement("img");setAttributes(navLogo,{id:"nav-logo",src:"logo.svg"}),navBar.appendChild(navLogo);var navLink=doc.createElement("a");navLink.href="javascript:to(0)",navBar.appendChild(navLink);var navChunk=doc.createElement("div");navChunk.id="nav-chunk",navChunk.title="back to home",navLink.appendChild(navChunk);var canvasL=doc.createElement("canvas");canvasL.id="canvas-left",canvasL.width="2000",canvasL.height="2000",insertLast(canvasL);var canvasR=doc.createElement("canvas");canvasR.width="2000",canvasR.height="2000",canvasR.id="canvas-right",insertLast(canvasR),document.getElementById("credits").innerHTML="Written by Ella &middot; Designed & programmed by <strike>StackOverflow</strike> <a class='link' href='javascript:open(9)'>Shawn</a><br>Fonts by <a class='link' href='javascript:open(10)'>Neapolitan</a>, <a class='link' href='javascript:open(11)'>Dalton Mag</a>, & <a class='link' href='javascript:open(12)'>MCKL</a> &middot; Hosted by <a class='link' href='javascript:open(13)'>Github Pages</a>"}var blank=doc.createElement("div");blank.id="blank",blank.classList="clear",insertLast(blank);var blanca=doc.createElement("div");function bigBang(a,t,n,e){a.beginPath(),a.arc(t,n,e,0,2*Math.PI),a.fill()}blanca.id="blanca",blanca.classList="clear",insertLast(blanca),(canvasL=canvasL.getContext("2d")).fillStyle="#fff",(canvasR=canvasR.getContext("2d")).fillStyle="#fff";for(var i=0;i<2e3;i++)for(var j=0;j<2;j++){var y=Math.random()*screen.height*2,z=Math.random()*screen.width*.001,r=Math.random();.75<r?1600<i?(r=Math.random())<(1675-i)/100&&bigBang(canvasL,i,y,z):bigBang(canvasL,i,y,z):r<.25&&(i<500?(r=Math.random())<(i-325)/100&&bigBang(canvasR,i,y,z):bigBang(canvasR,i,y,z))}function to(t){doc.getElementById("blank").classList="opaque";var n=new Date;n=n.getTime();var e=setInterval(function(){var a=new Date;a.getTime(),500<a-n&&(clearInterval(e),window.location=url[t])},10)}function open(t){doc.getElementById("blanca").classList="opaque",doc.getElementById("blanca").style.backgroundColor="#fff";var n=new Date;n=n.getTime();var e=setInterval(function(){var a=new Date;a.getTime(),500<a-n&&(clearInterval(e),window.location=url[t])},10)}
