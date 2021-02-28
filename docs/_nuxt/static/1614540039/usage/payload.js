__NUXT_JSONP__("/usage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{document:{slug:"usage",description:"",title:"Usage",position:"000400000000",category:"Guide",components:["Directive zum anwenden von Fonts","Komponenten mit Lazy funktionialität"],toc:[{id:M,depth:A,text:B},{id:N,depth:A,text:O},{id:C,depth:A,text:P},{id:Q,depth:R,text:S},{id:T,depth:R,text:U}],body:{type:"root",children:[{type:b,tag:m,props:{className:[V,W]},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nuxt-speedkit"}]},{type:a,value:" benutzt du um die Performance der Website zu erhöhen."},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nDafür werden verschiedene Werkzeuge zur verfügung gestellt, die dir beim laden der Resourcen (Bilder, Schriften) und Komponenten helfen."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Geholfen wird bei:"}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Beschleunigen des initialen Seiten-Loads."}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Ressourcen sparende Komponente. (e.g. Lazy load bei Bilder)"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Laden und verwenden von WebFonts."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Primär dient dieses Modul zum überprüfen ob ein Benutzer mit einer Schlechten Verbindung oder nicht ausreichender Hardware zugreift."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Falls dieser Fall eintritt (e.g. Lighhous \u002F Pagespeed Insight), wird das ausführen des Javascript blockiert, dies veringert den initial Seiten Load."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Im Anschluss kann der Benutzer über eine Interaktion (e.g. Button-Click) das Javascript scharfschalten und die Seite verwenden. (Alle benötigten Scripte werden wurden als Preload schon geladen.)"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Mit den mitgelieferten Komponenten (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:") und dem Einsatz der Directive "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:", wird das laden der Bilder und Schriften ausgesteuert."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Das Laden der Resourcen geschieht erst beim erreichen des sichtbaren Viewport."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Für den Fall das sich eine Komponenten Initial schon im Viewpoert befindet, muss diese als "},{type:b,tag:l,props:{to:"\u002Fusage#kritische-komponente"},children:[{type:a,value:B}]},{type:a,value:" definiert werden."}]},{type:a,value:e},{type:b,tag:E,props:{id:M},children:[{type:b,tag:n,props:{href:"#kritische-komponente"},children:[{type:a,value:B}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Eine Kritische Komponente, ist eine Kompoente die schon initial Sichtbar ist und somit Schriften und Bilder priorisiert geladen werden."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Alle Komponenten können Kritische Komponenten sein. Um eine kritische komponente zu erzeugen muss die Eigenschaft "},{type:b,tag:g,props:{},children:[{type:a,value:X}]},{type:a,value:" gesetzt werden. Wenn gesetzt, werden die enthaltenen Resources Priorisiert geladen (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003Clink rel=\"preload\" …"}]},{type:a,value:F}]},{type:a,value:e},{type:b,tag:m,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:Y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:X}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:":critical"}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:b,tag:c,props:{className:[d,f,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:"true"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:E,props:{id:N},children:[{type:b,tag:n,props:{href:"#fonts"},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Um die in der "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt.config"}]},{type:a,value:" definierten Schriften zu verwenden, wird die Direktive "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:" verwendet."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Mehr unter "},{type:b,tag:l,props:{to:"\u002Fv-font"},children:[{type:a,value:s}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:m,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:Y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:b,tag:c,props:{className:[d,f,_]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:"$fonts.getFont(…)"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aa}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:E,props:{id:C},children:[{type:b,tag:n,props:{href:"#components"},children:[{type:a,value:P}]}]},{type:a,value:e},{type:b,tag:ab,props:{id:Q},children:[{type:b,tag:n,props:{href:"#einbindung-von-komponenten"},children:[{type:a,value:S}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Für das einbinden von Komponenten in einer Seite wird analog zur Eigenschaft "},{type:b,tag:g,props:{},children:[{type:a,value:C}]},{type:a,value:", "},{type:b,tag:g,props:{},children:[{type:a,value:"speedkitComponents"}]},{type:a,value:" angeboten. Mit dieser Eigenschaft werden Komponenten automatisch Lazy behandelt und erst aktiviert wenn diese im Viewport sind."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"alert",props:{},children:[{type:a,value:"\nImport muss Funktional sein. (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"() =\u003E import('…')"}]},{type:a,value:"`)\n"}]},{type:a,value:e},{type:b,tag:m,props:{className:[V,W]},children:[{type:a,value:e},{type:b,tag:m,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,"language-js"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:"\n  speedkitComponents"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,"function-variable","function"]},children:[{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"Stage"}]}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"arrow",y]},children:[{type:a,value:"=\u003E"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"'@\u002Fcomponents\u002Forganisms\u002FStage'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Alle Komponenten werden mit einem "},{type:b,tag:g,props:{},children:[{type:a,value:"rootMargin"}]},{type:a,value:" beschrieben. Dieser kann mit der "},{type:b,tag:l,props:{to:"\u002Foptions#components"},children:[{type:a,value:"Option "},{type:b,tag:g,props:{},children:[{type:a,value:"lazyOffset.components"}]}]},{type:a,value:" angepasst werden."}]},{type:a,value:e},{type:b,tag:ab,props:{id:T},children:[{type:b,tag:n,props:{href:"#modul-komponenten"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Die Modul Komponenten können über den Namespace "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt-speedkit-components"}]},{type:a,value:" importiert werden."}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{to:"\u002Fcomponents\u002Fspeedkit-layer"},children:[{type:a,value:"\nSpeedkitLayer\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{to:"\u002Fcomponents\u002Fspeedkit-picture"},children:[{type:a,value:"\nSpeedkitPicture\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{to:"\u002Fcomponents\u002Fspeedkit-iframe"},children:[{type:a,value:"\nSpeedkitIframe\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{to:"\u002Fcomponents\u002Fspeedkit-youtube"},children:[{type:a,value:"\nSpeedkitYoutube\n"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:m,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:"speedkit-picture"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ah}]},{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:ae}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:D}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"'nuxt-speedkit-components\u002FSpeedkitPicture'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:I}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:D}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ah}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]}]},{type:a,value:e}]}]}]},{type:a,value:e}]}]},dir:"\u002Fen",path:"\u002Fen\u002Fusage",extension:".md",createdAt:ai,updatedAt:ai,to:"\u002Fusage",language:"en",draft:false},prev:{slug:"options",title:"Options",to:"\u002Foptions"},next:{slug:"performance",title:"Performance",to:"\u002Fperformance"}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","code","p"," ","tag","li","nuxt-link","div","a","\u003C","keyword","module","\u003E","v-font","nuxt-content-highlight","pre","line-numbers","\"","{","operator","}",2,"Kritische Komponente","components","SpeedkitPicture","h2",")","language-html","attr-name",":","maybe-class-name","\n  ","script","kritische-komponente","fonts","Fonts","Components","einbindung-von-komponenten",3,"Einbindung von Komponenten","modul-komponenten","Modul Komponenten","prose","dark:prose-dark","critical","component","attr-value","attr-equals","=","\u002F\u003E","h3","\n    ","(","import","string","template","\u003C\u002F","2021-02-28T19:19:33.140Z")));