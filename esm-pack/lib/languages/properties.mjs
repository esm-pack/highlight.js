function o(a){let t="[ \\t\\f]*",r="[ \\t\\f]+",n=t+"[:=]"+t,s=r,i="("+n+"|"+s+")",e="([^\\\\:= \\t\\f\\n]|\\\\.)+",c={end:i,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,contains:[a.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:e+n},{begin:e+s}],contains:[{className:"attr",begin:e,endsParent:!0}],starts:c},{className:"attr",begin:e+t+"$"}]}}export{o as default};
