var u="[A-Za-z$_][0-9A-Za-z$_]*",B=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],w=["true","false","null","undefined","NaN","Infinity"],S=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],_=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],N=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],U=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],D=[].concat(N,S,_);function X(e){let a=e.regex,h=(t,{after:r})=>{let l="</"+t[0].slice(1);return t.input.indexOf(l,r)!==-1},n=u,T={begin:"<>",end:"</>"},k=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(t,r)=>{let l=t[0].length+t.index,d=t.input[l];if(d==="<"||d===","){r.ignoreMatch();return}d===">"&&(h(t,{after:l})||r.ignoreMatch());let b,x=t.input.substring(l);if(b=x.match(/^\s*=/)){r.ignoreMatch();return}if((b=x.match(/^\s+extends\s+/))&&b.index===0){r.ignoreMatch();return}}},c={$pattern:u,keyword:B,literal:w,built_in:D,"variable.language":U},m="[0-9](_?[0-9])*",E=`\\.(${m})`,R="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",I={className:"number",variants:[{begin:`(\\b(${R})((${E})|\\.)?|(${E}))[eE][+-]?(${m})\\b`},{begin:`\\b(${R})\\b((${E})\\b|\\.)?|(${E})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},f={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"xml"}},p={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"css"}},C={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,s]},g={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},M=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,C,y,{match:/\$\d+/},I];s.contains=M.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(M)});let O=[].concat(g,s.contains),A=O.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(O)}]),i={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:A},P={variants:[{match:[/class/,/\s+/,n,/\s+/,/extends/,/\s+/,a.concat(n,"(",a.concat(/\./,n),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:a.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...S,..._]}},$={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Z={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[i],illegal:/%/},F={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function z(t){return a.concat("(?!",t.join("|"),")")}let G={match:a.concat(/\b/,z([...N,"super","import"].map(t=>`${t}\\s*\\(`)),n,a.lookahead(/\s*\(/)),className:"title.function",relevance:0},K={begin:a.concat(/\./,a.lookahead(a.concat(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},Y={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},i]},v="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",H={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,/(async\s*)?/,a.lookahead(v)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[i]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:A,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),$,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,C,y,g,{match:/\$\d+/},I,L,{scope:"attr",match:n+a.lookahead(":"),relevance:0},H,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[g,e.REGEXP_MODE,{className:"function",begin:v,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:A}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:T.begin,end:T.end},{match:k},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},Z,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[i,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[i]},G,F,P,Y,{match:/\$[(.]/}]}}export{X as default};
