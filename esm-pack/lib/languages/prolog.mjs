function O(n){let s={begin:/[a-z][A-Za-z0-9_]*/,relevance:0},t={className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},a={begin:/\(/,end:/\)/,relevance:0},c={begin:/\[/,end:/\]/},i={className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},o={className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},_={className:"string",begin:/0'(\\'|.)/},E={className:"string",begin:/0'\\s/},e=[s,t,a,{begin:/:-/},c,i,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,o,_,E,n.C_NUMBER_MODE];return a.contains=e,c.contains=e,{name:"Prolog",contains:e.concat([{begin:/\.$/}])}}export{O as default};
