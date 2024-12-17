function T(t){let r=t.regex,n={keyword:["assert","else","if","in","inherit","let","or","rec","then","with"],literal:["true","false","null"],built_in:["abort","baseNameOf","builtins","derivation","derivationStrict","dirOf","fetchGit","fetchMercurial","fetchTarball","fetchTree","fromTOML","import","isNull","map","placeholder","removeAttrs","scopedImport","throw","toString"]},p={scope:"built_in",match:r.either(...["abort","add","addDrvOutputDependencies","addErrorContext","all","any","appendContext","attrNames","attrValues","baseNameOf","bitAnd","bitOr","bitXor","break","builtins","catAttrs","ceil","compareVersions","concatLists","concatMap","concatStringsSep","convertHash","currentSystem","currentTime","deepSeq","derivation","derivationStrict","dirOf","div","elem","elemAt","false","fetchGit","fetchMercurial","fetchTarball","fetchTree","fetchurl","filter","filterSource","findFile","flakeRefToString","floor","foldl'","fromJSON","fromTOML","functionArgs","genList","genericClosure","getAttr","getContext","getEnv","getFlake","groupBy","hasAttr","hasContext","hashFile","hashString","head","import","intersectAttrs","isAttrs","isBool","isFloat","isFunction","isInt","isList","isNull","isPath","isString","langVersion","length","lessThan","listToAttrs","map","mapAttrs","match","mul","nixPath","nixVersion","null","parseDrvName","parseFlakeRef","partition","path","pathExists","placeholder","readDir","readFile","readFileType","removeAttrs","replaceStrings","scopedImport","seq","sort","split","splitVersion","storeDir","storePath","stringLength","sub","substring","tail","throw","toFile","toJSON","toPath","toString","toXML","trace","traceVerbose","true","tryEval","typeOf","unsafeDiscardOutputDependency","unsafeDiscardStringContext","unsafeGetAttrPos","warn","zipAttrsWith"].map(S=>`builtins\\.${S}`)),relevance:10},e="[A-Za-z_][A-Za-z0-9_'-]*",l={scope:"symbol",match:new RegExp(`<${e}(/${e})*>`)},s="[A-Za-z0-9_\\+\\.-]+",h={scope:"symbol",match:new RegExp(`(\\.\\.|\\.|~)?/(${s})?(/${s})*(?=[\\s;])`)},o=r.either("==","=","\\+\\+","\\+","<=","<\\|","<",">=",">","->","//","/","!=","!","\\|\\|","\\|>","\\?","\\*","&&"),E={scope:"operator",match:r.concat(o,/(?!-)/),relevance:0},m={scope:"number",match:new RegExp(`${t.NUMBER_RE}(?!-)`),relevance:0},g={variants:[{scope:"operator",beforeMatch:/\s/,begin:/-(?!>)/},{begin:[new RegExp(`${t.NUMBER_RE}`),/-/,/(?!>)/],beginScope:{1:"number",2:"operator"}},{begin:[o,/-/,/(?!>)/],beginScope:{1:"operator",2:"operator"}}],relevance:0},u={beforeMatch:/(^|\{|;)\s*/,begin:new RegExp(`${e}(\\.${e})*\\s*=(?!=)`),returnBegin:!0,relevance:0,contains:[{scope:"attr",match:new RegExp(`${e}(\\.${e})*(?=\\s*=)`),relevance:.2}]},d={scope:"char.escape",match:/\\\$/},b={scope:"char.escape",match:/''\$/},a={scope:"subst",begin:/\$\{/,end:/\}/,keywords:n},f={scope:"char.escape",match:/'''/},c={scope:"char.escape",match:/\\(?!\$)./},A={scope:"string",variants:[{begin:"''",end:"''",contains:[b,a,f,c]},{begin:'"',end:'"',contains:[d,a,c]}]},O={scope:"params",match:new RegExp(`${e}\\s*:(?=\\s)`)},i=[m,t.HASH_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),p,A,l,h,O,u,g,E];a.contains=i;let R=[{scope:"meta.prompt",match:/^nix-repl>(?=\s)/,relevance:10},{scope:"meta",beforeMatch:/\s+/,begin:/:([a-z]+|\?)/}];return{name:"Nix",aliases:["nixos"],keywords:n,contains:i.concat(R)}}export{T as default};