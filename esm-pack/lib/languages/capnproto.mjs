function s(t){let n=["struct","enum","interface","union","group","import","using","const","annotation","extends","in","of","on","as","with","from","fixed"],e=["Void","Bool","Int8","Int16","Int32","Int64","UInt8","UInt16","UInt32","UInt64","Float32","Float64","Text","Data","AnyPointer","AnyStruct","Capability","List"],a=["true","false"],o={variants:[{match:[/(struct|enum|interface)/,/\s+/,t.IDENT_RE]},{match:[/extends/,/\s*\(/,t.IDENT_RE,/\s*\)/]}],scope:{1:"keyword",3:"title.class"}};return{name:"Cap\u2019n Proto",aliases:["capnp"],keywords:{keyword:n,type:e,literal:a},contains:[t.QUOTE_STRING_MODE,t.NUMBER_MODE,t.HASH_COMMENT_MODE,{className:"meta",begin:/@0x[\w\d]{16};/,illegal:/\n/},{className:"symbol",begin:/@\d+\b/},o]}}export{s as default};
