function A(e){let a="true false yes no null",n="[\\w#;/?:@&=+$,.~*'()[\\]]+",E={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},l={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},r={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},c={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,l]},b=e.inherit(c,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),g={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},s={end:",",endsWithParent:!0,excludeEnd:!0,keywords:a,relevance:0},N={begin:/\{/,end:/\}/,contains:[s],illegal:"\\n",relevance:0},o={begin:"\\[",end:"\\]",contains:[s],illegal:"\\n",relevance:0},i=[E,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+n},{className:"type",begin:"!<"+n+">"},{className:"type",begin:"!"+n},{className:"type",begin:"!!"+n},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:a,keywords:{literal:a}},g,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},N,o,r,c],t=[...i];return t.pop(),t.push(b),s.contains=t,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:i}}export{A as default};