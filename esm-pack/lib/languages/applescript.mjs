function c(e){let t=e.regex,n=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),r={className:"params",begin:/\(/,end:/\)/,contains:["self",e.C_NUMBER_MODE,n]},o=e.COMMENT(/--/,/$/),i=e.COMMENT(/\(\*/,/\*\)/,{contains:["self",o]}),a=[o,i,e.HASH_COMMENT_MODE],s=[/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/],l=[/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/];return{name:"AppleScript",aliases:["osascript"],keywords:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",literal:"AppleScript false linefeed return pi quote result space tab true",built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name|0 paragraph paragraphs rest reverse running time version weekday word words year"},contains:[n,e.C_NUMBER_MODE,{className:"built_in",begin:t.concat(/\b/,t.either(...l),/\b/)},{className:"built_in",begin:/^\s*return\b/},{className:"literal",begin:/\b(text item delimiters|current application|missing value)\b/},{className:"keyword",begin:t.concat(/\b/,t.either(...s),/\b/)},{beginKeywords:"on",illegal:/[${=;\n]/,contains:[e.UNDERSCORE_TITLE_MODE,r]},...a],illegal:/\/\/|->|=>|\[\[/}}export{c as default};
