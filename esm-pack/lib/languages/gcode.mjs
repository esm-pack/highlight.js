function A(t){let n=t.regex,_={$pattern:/[A-Z]+|%/,keyword:["THEN","ELSE","ENDIF","IF","GOTO","DO","WHILE","WH","END","CALL","SUB","ENDSUB","EQ","NE","LT","GT","LE","GE","AND","OR","XOR","%"],built_in:["ATAN","ABS","ACOS","ASIN","COS","EXP","FIX","FUP","ROUND","LN","SIN","SQRT","TAN","EXISTS"]},c=/\b/;function e(E,T){if(E.index===0)return;let i=E.input[E.index-1];i>="0"&&i<="9"||i!=="_"&&T.ignoreMatch()}let o=/[+-]?((\.\d+)|(\d+)(\.\d*)?)/,s=/[GM]\s*\d+(\.\d+)?/,a=/T\s*\d+/,r=/O\s*\d+/,O=/O<.+>/,N=/[ABCUVWXYZ]\s*/,R=/[FHIJKPQRS]\s*/,S=[t.COMMENT(/\(/,/\)/),t.COMMENT(/;/,/$/),t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.C_NUMBER_MODE,{scope:"title.function",variants:[{match:n.concat(c,s)},{begin:s,"on:begin":e},{match:n.concat(c,a)},{begin:a,"on:begin":e}]},{scope:"symbol",variants:[{match:n.concat(c,r)},{begin:r,"on:begin":e},{match:n.concat(c,O)},{begin:O,"on:begin":e},{match:/\*\s*\d+\s*$/}]},{scope:"operator",match:/^N\s*\d+/},{scope:"variable",match:/-?#\s*\d+/},{scope:"property",variants:[{match:n.concat(c,N,o)},{begin:n.concat(N,o),"on:begin":e}]},{scope:"params",variants:[{match:n.concat(c,R,o)},{begin:n.concat(R,o),"on:begin":e}]}];return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,disableAutodetect:!0,keywords:_,contains:S}}export{A as default};