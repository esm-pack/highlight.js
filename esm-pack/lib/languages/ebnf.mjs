function c(e){let n=e.COMMENT(/\(\*/,/\*\)/),a={className:"attribute",begin:/^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/},t={begin:/=/,end:/[.;]/,contains:[n,{className:"meta",begin:/\?.*\?/},{className:"string",variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"`",end:"`"}]}]};return{name:"Extended Backus-Naur Form",illegal:/\S/,contains:[n,a,t]}}export{c as default};
