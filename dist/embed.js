!function(){"use strict";const t=t=>console.warn("AwayFL loader not support "+t),n=window;let r;n.swfObject&&console.warn("Replace `swfObject` to AwayFl loader!"),document.addEventListener("load",(()=>{}));const e={registerObject:()=>t("registerObject"),getObjectById:()=>t("getObjectById"),switchOffAutoHideShow:()=>t("switchOffAutoHideShow"),enableUriEncoding:()=>t("enableUriEncoding"),getFlashPlayerVersion:()=>t("getFlashPlayerVersion"),createSWF:()=>t("createSWF"),showExpressInstall:()=>t("showExpressInstall"),createCSS:()=>t("createCSS"),getQueryParamValue:()=>t("getQueryParamValue"),get ua(){return t("ua")},embedSWF:function(t,e,i,o,a,s,l,d,c,g){const h="string"==typeof e?document.getElementById(e):e,u=function(t,e,i,o){if(r=n.AWAY_EMBED_CFG,!r)throw"AwayFL configuration not found, insert define a `AWAY_AMBED_CFG` as in wiki";if(!r.loaderUrl)throw"AwayFL loader not defined! Runtime will not load correctly!";const a=r.loaderUrl;let s=r.baseUrl,l=r.runtimeUrl;if(!s){const t=l||a;s=a.substring(0,t.lastIndexOf("/"))}l||(console.warn("AwayFL Runtime Url not defined, will be used url of base or loader!"),l=s+"/runtime.js");const d=document.createElement("iframe");d.style.border="none",d.width=i||e.getAttribute("width"),d.height=o||e.getAttribute("height"),e.innerHTML="",e.appendChild(d);const c={width:d.clientWidth,height:d.clientHeight,splash:r.splash,progress:r.progress||{},runtime:[l],binary:[{path:t,resourceType:"GAME",name:t,meta:{}}],baseUrl:s},g='<!DOCTYPE html>\r\n<head>\r\n\t<meta name="viewport"\r\n\t\tcontent="height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui" />\r\n\t<title>AWAYFL EMBEDED PLAYER 0.0.14</title>\r\n\t<style>\r\n\t\t* {\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t\tcanvas {\r\n\t\t\toutline: none\r\n\t\t}\r\n\r\n\t\thtml, body {\r\n\t\t\tmargin: 0;\r\n\t\t\toverflow: hidden;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tbackground-color: white;\r\n\t\t}\r\n\r\n\t\t#splash {\r\n\t\t\tposition: absolute;\r\n\t\t\tvisibility: hidden;\r\n\t\t\tz-index: 10;\r\n\t\t}\r\n\r\n\t\t#splash__image {\r\n\t\t\tposition: absolute;\r\n\t\t\tbackground-size: cover;\r\n\t\t\tbackground-position: center;\r\n\t\t\tbackground-repeat: no-repeat;\r\n\t\t\tvisibility: visible;\r\n\t\t\ttransition: all 0.5s;\r\n\t\t\tz-index: 10;\r\n\t\t}\r\n\r\n\t\t#progress__root {\r\n\t\t\tposition: absolute;\r\n\t\t}\r\n\r\n\t\t#progress__line {\r\n\t\t\twidth: 0;\r\n\t\t\theight: 100%;\r\n\t\t\ttransition: all 0.5s;\r\n\t\t\tbackground: #cc0000;\r\n\t\t}\r\n\t</style>\r\n\r\n\t<script src="__LOADER_URL__"><\/script>\r\n</head>\r\n\r\n<body>\r\n\t<div id="splash__image">\r\n\t\t<div id="progress__root">\r\n\t\t\t<div id="progress__line"></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<script>\r\n\t\twindow.addEventListener("load", () => {\r\n\r\n\t\t\tconst config = JSON.parse(__GAME_CONFIG__);\r\n\r\n\t\t\tAWAYFL.LegacyLoader.init(config);\r\n\t\t\tAWAYFL.LegacyLoader.runGame((fill) => {\r\n\t\t\t\t//\r\n\t\t\t}, (config, hideLoader) => {\r\n\t\t\t\tconst player = new AWAYFL.Player(document, config);\r\n\t\t\t\tplayer.loadAndPlay().then(()=> hideLoader());\r\n\t\t\t})\r\n\t\t});\r\n\t<\/script>\r\n</body>'.replace(/__LOADER_URL__/,a).replace(/__GAME_CONFIG__/,JSON.stringify(JSON.stringify(c)));return d.srcdoc=g,d}(t,h,i,o);u.onload=()=>{g&&g({success:!0,ref:u,id:h.id})}}};n.swfObject=e}();
//# sourceMappingURL=embed.js.map
