var o=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],i=["true","false","null","undefined","NaN","Infinity"],I=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],g=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],p=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"];var c=[].concat(p,I,g);function m(e){let d=["npm","print"],l=["yes","no","on","off","it","that","void"],S=["then","unless","until","loop","of","by","when","and","or","is","isnt","not","it","that","otherwise","from","to","til","fallthrough","case","enum","native","list","map","__hasProp","__extends","__slice","__bind","__indexOf"],t={keyword:o.concat(S),literal:i.concat(l),built_in:c.concat(d)},n="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",E=e.inherit(e.TITLE_MODE,{begin:n}),r={className:"subst",begin:/#\{/,end:/\}/,keywords:t},s={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:t},a=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,s]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,s]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[r,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/}]},{begin:"@"+n},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];r.contains=a;let A={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:t,contains:["self"].concat(a)}]},_={begin:"(#=>|=>|\\|>>|-?->|!->)"},u={variants:[{match:[/class\s+/,n,/\s+extends\s+/,n]},{match:[/class\s+/,n]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:t};return{name:"LiveScript",aliases:["ls"],keywords:t,illegal:/\/\*/,contains:a.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,_,{className:"function",contains:[E,A],returnBegin:!0,variants:[{begin:"("+n+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",end:"->\\*?"},{begin:"("+n+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+n+"\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},u,{begin:n+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}export{m as default};
