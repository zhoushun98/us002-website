/*!
 * IMPORTANT NOTE:
 * 
 *   This file is licensed only for the use of Apple developers in providing MusicKit Web Services,
 *   and is subject to the Apple Media Services Terms and Conditions and the Apple Developer Program
 *   License Agreement. You may not copy, modify, re-host, or create derivative works of this file or the
 *   accompanying Documentation, or any part thereof, including any updates, without Apple's written consent.
 * 
 *   ACKNOWLEDGEMENTS:
 *   /musickit/v1/acknowledgements.txt
 */
const r=/([bptsq]){1}:(rgb\([\d,]+)\)/g,t={b:"backgroundColor",p:"primaryTextColor",s:"secondaryTextColor",t:"tertiaryTextColor",q:"quaternaryTextColor"};function o(o){if("string"!=typeof o)return{};const e=o.match(r);return e?e.map((r=>r.split(":"))).reduce(((r,o)=>{const[e,n]=o;r[t[e]]=n;const s=n.substring(4,n.length-1);return r[`${t[e]}RGBValues`]=s,r}),{}):{}}export{o as j}