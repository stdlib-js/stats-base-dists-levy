// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,t=e.toString,i=e.__defineGetter__,o=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,c){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof c||null===c||"[object Array]"===t.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((s="value"in c)&&(a.call(r,n)||u.call(r,n)?(f=r.__proto__,r.__proto__=e,delete r[n],r[n]=c.value,r.__proto__=f):r[n]=c.value),l="get"in c,p="set"in c,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,c.get),p&&o&&o.call(r,n,c.set),r};function f(r,n,e){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function s(r,n,e){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}var p=Math.floor,y=Math.ceil;function h(r){return r<0?y(r):p(r)}var v=Number,g=v.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,b=1023;function m(r){return r===d||r===g}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return w&&"symbol"==typeof Symbol.toStringTag}var A,_=Object.prototype.toString,E=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",U=N()?function(r){var n,e,t,i,o;if(null==r)return _.call(r);e=r[S],o=S,n=null!=(i=r)&&E.call(i,o);try{r[S]=void 0}catch(n){return _.call(r)}return t=_.call(r),n?r[S]=e:delete r[S],t}:function(r){return _.call(r)},j="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,x="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,e;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(j&&e instanceof Uint32Array||"[object Uint32Array]"===U(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var T,k=A,F="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,e;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),e=n,r=(F&&e instanceof Float64Array||"[object Float64Array]"===U(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var P,$=T,G="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,e;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),e=n,r=(G&&e instanceof Uint8Array||"[object Uint8Array]"===U(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var W,C=P,M="function"==typeof Uint16Array,R="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,e;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),e=n,r=(M&&e instanceof Uint16Array||"[object Uint16Array]"===U(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var q,X={uint16:W,uint8:C};(q=new X.uint16(1))[0]=4660;var Y,z,B=52===new X.uint8(q.buffer)[0];!0===B?(Y=1,z=0):(Y=0,z=1);var D={HIGH:Y,LOW:z},J=new $(1),K=new k(J.buffer),Q=D.HIGH,rr=D.LOW;function nr(r,n){return J[0]=n,r[0]=K[Q],r[1]=K[rr],r}function er(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var tr,ir,or=!0===B?1:0,ar=new $(1),ur=new k(ar.buffer);function cr(r){return ar[0]=r,ur[or]}!0===B?(tr=1,ir=0):(tr=0,ir=1);var fr={HIGH:tr,LOW:ir},sr=new $(1),lr=new k(sr.buffer),pr=fr.HIGH,yr=fr.LOW;function hr(r,n){return lr[pr]=r,lr[yr]=n,sr[0]}var vr=[0,0];function gr(r,n){var e,t;return er(vr,r),e=vr[0],e&=2147483647,t=cr(n),hr(e|=t&=2147483648,vr[1])}function dr(r){return Math.abs(r)}function br(r,n,e,t){return l(r)||m(r)?(n[t]=r,n[t+e]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}s((function(r){return br(r,[0,0],1,0)}),"assign",br);var mr=[0,0],wr=[0,0];function Nr(r,n){var e,t;return 0===n||0===r||l(r)||m(r)?r:(br(r,mr,1,0),n+=mr[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-b|0}(r=mr[0]),n<-1074?gr(0,r):n>1023?r<0?g:d:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,er(wr,r),e=wr[0],e&=2148532223,t*hr(e|=n+b<<20,wr[1])))}var Ar=1.4426950408889634,_r=1/(1<<28);function Er(r){var n;return l(r)||r===d?r:r===g?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<_r?1+r:function(r,n,e){var t,i,o,a;return Nr(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(n=h(r<0?Ar*r-.5:Ar*r+.5)),1.9082149292705877e-10*n,n)}var Sr=!0===B?0:1,Ur=new $(1),jr=new k(Ur.buffer);function Ir(r,n){return Ur[0]=r,jr[Sr]=n>>>0,Ur[0]}var xr=.8450629115104675;function Tr(r){var n,e,t,i,o,a,u,c;if(l(r))return NaN;if(r===d)return 0;if(r===g)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),o=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(e<1.25)return u=(o=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,c=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+xr+u/c:1-xr-u/c;if(e<28){if(o=1/(e*e),e<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=Er(-(t=Ir(e,0))*t-.5625)*Er((t-e)*(t+e)+i/o),n?2-i/e:i/e}return n?2:0}var kr=Math.sqrt;function Fr(r,n,e){return l(r)||l(n)||l(e)||e<=0?NaN:r<n?0:Tr(kr(e/(2*(r-n))))}function Or(r){return function(){return r}}function Vr(r,n,e){c(r,n,{configurable:!1,enumerable:!1,get:e})}function Pr(r){return"number"==typeof r}s(Fr,"factory",(function(r,n){return l(r)||l(n)||n<=0?Or(NaN):function(e){return l(e)?NaN:e<r?0:Tr(kr(n/(2*(e-r))))}}));var $r=v.prototype.toString,Gr=N();function Lr(r){return"object"==typeof r&&(r instanceof v||(Gr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===U(r)))}function Hr(r){return Pr(r)||Lr(r)}function Wr(r){return Pr(r)&&r>0}function Cr(r){return Lr(r)&&r.valueOf()>0}function Mr(r){return Wr(r)||Cr(r)}function Rr(r){return Pr(r)&&l(r)}function Zr(r){return Lr(r)&&l(r.valueOf())}function qr(r){return Rr(r)||Zr(r)}s(Hr,"isPrimitive",Pr),s(Hr,"isObject",Lr),s(Mr,"isPrimitive",Wr),s(Mr,"isObject",Cr),s(qr,"isPrimitive",Rr),s(qr,"isObject",Zr);var Xr=!0===B?1:0,Yr=new $(1),zr=new k(Yr.buffer);function Br(r,n){return Yr[0]=r,zr[Xr]=n>>>0,Yr[0]}var Dr=.6931471803691238,Jr=1.9082149292705877e-10,Kr=1048575;function Qr(r){var n,e,t,i,o,a,u,c,f,s,p,y;return 0===r?g:l(r)||r<0?NaN:(o=0,(e=cr(r))<1048576&&(o-=54,e=cr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-b|0,o+=(c=614244+(e&=Kr)&1048576|0)>>20|0,u=(r=Br(r,e|1072693248^c))-1,(Kr&2+e)<3?0===u?0===o?0:o*Dr+o*Jr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Dr-(a-o*Jr-u)):(c=e-398458|0,f=440401-e|0,i=(p=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),t=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=t+i,(c|=f)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Dr-(n-(s*(n+a)+o*Jr)-u)):0===o?u-s*(u-a):o*Dr-(s*(u-a)-o*Jr-u))))}function rn(r,n){return l(r)||l(n)||n<=0?NaN:(2.7316469947045987+Qr(16*n*n*3.141592653589793))/2}function nn(r,n){return l(r)||l(n)||n<=0?NaN:d}function en(r){var n,e,t,i;return l(r)?NaN:0===r?d:2===r?g:1===r?0:r>2||r<0?NaN:(r>1?(n=-1,e=2-r):(n=1,e=r),(r=1-e)<=.5?(t=r*(r+10),i=function(r){var n,e;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,e=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),e=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/e)}(r),n*(.08913147449493408*t+t*i)):e>=.25?(t=kr(-2*Qr(e)),i=function(r){var n,e;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,e=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,e=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/e)}(e-=.25),n*(t/(2.249481201171875+i))):(e=kr(-Qr(e)))<3?(i=function(r){var n,e;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,e=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,e=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/e)}(e-1.125),n*(.807220458984375*e+i*e)):e<6?(i=function(r){var n,e;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,e=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),e=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/e)}(e-3),n*(.9399557113647461*e+i*e)):(i=function(r){var n,e;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,e=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),e=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/e)}(e-6),n*(.9836282730102539*e+i*e)))}function tn(r){return p(r)===r}function on(r){return tn(r/2)}function an(r){return on(r>0?r-1:r+1)}function un(r){return 0|r}var cn=1048576,fn=[1,1.5],sn=[0,.5849624872207642],ln=[0,1.350039202129749e-8],pn=2147483647,yn=1048575,hn=1048576,vn=2147483647,gn=1083179008,dn=1e300,bn=1e-300,mn=[0,0],wn=[0,0];function Nn(r,n){var e,t,i,o,a,u,c,f,s,p,y,h,v,w;if(l(r)||l(n))return NaN;if(er(mn,n),a=mn[0],0===mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return kr(r);if(-.5===n)return 1/kr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(m(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(n===d)?0:d}(r,n)}if(er(mn,r),o=mn[0],0===mn[1]){if(0===o)return function(r,n){return n===g?d:n===d?0:n>0?an(n)?r:0:an(n)?gr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&an(n))return-1;if(m(r))return r===g?Nn(-0,-n):n<0?0:d}if(r<0&&!1===tn(n))return(r-r)/(r-r);if(i=dr(r),e=o&vn|0,t=a&vn|0,c=a>>>31|0,u=(u=o>>>31|0)&&an(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&cr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===c?u*dn*dn:u*bn*bn;if(e>1072693248)return 0===c?u*dn*dn:u*bn*bn;y=function(r,n){var e,t,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ir(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=e,r}(wn,i)}else y=function(r,n,e){var t,i,o,a,u,c,f,s,l,p,y,h,v,g,d,m,w,N,A,_,E;return N=0,e<cn&&(N-=53,e=cr(n*=9007199254740992)),N+=(e>>20)-b|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,N+=1,e-=cn),a=Ir(i=(m=(n=Br(n,e))-(f=fn[_]))*(w=1/(n+f)),0),t=524288+(e>>1|536870912),c=Br(0,t+=_<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Ir(c=3+(o=a*a)+(d+=(u=w*(m-a*c-a*(n-(c-f))))*(a+i)),0),v=(y=-7.028461650952758e-9*(l=Ir(l=(m=a*c)+(w=u*c+(d-(c-3-o))*i),0))+.9617966939259756*(w-(l-m))+ln[_])-((h=Ir(h=(p=.9617967009544373*l)+y+(s=sn[_])+(g=N),0))-g-s-p),r[0]=h,r[1]=v,r}(wn,i,e);if(p=(n-(f=Ir(n,0)))*y[0]+n*y[1],s=f*y[0],er(mn,h=p+s),v=un(mn[0]),w=un(mn[1]),v>=gn){if(0!=(v-gn|w))return u*dn*dn;if(p+8008566259537294e-32>h-s)return u*dn*dn}else if((v&vn)>=1083231232){if(0!=(v-3230714880|w))return u*bn*bn;if(p<=h-s)return u*bn*bn}return h=function(r,n,e){var t,i,o,a,u,c,f,s,l,p;return l=((s=r&pn|0)>>20)-b|0,f=0,s>1071644672&&(i=Br(0,((f=r+(hn>>l+1)>>>0)&~(yn>>(l=((f&pn)>>20)-b|0)))>>>0),f=(f&yn|hn)>>20-l>>>0,r<0&&(f=-f),n-=i),r=un(r=cr(c=1-((c=(o=.6931471824645996*(i=Ir(i=e+n,0)))+(a=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Nr(c,f):Br(c,r)}(v,s,p),u*h}var An=2*Nn(en(.5),2);function _n(r,n){return l(r)||l(n)||n<=0?NaN:r+n/An}function En(r,n){return l(r)||l(n)||n<=0?NaN:r+n/3}function Sn(r,n){return l(r)||l(n)||n<=0?NaN:d}function Un(r,n){return l(r)||l(n)||n<=0?NaN:d}function jn(r,n,e){return l(r)||l(n)||l(e)||e<=0?NaN:r<n?g:Qr(Tr(kr(e/(2*(r-n)))))}s(jn,"factory",(function(r,n){return l(r)||l(n)||n<=0?Or(NaN):function(e){return l(e)?NaN:e<r?g:Qr(Tr(kr(n/(2*(e-r)))))}}));var In=1.8378770664093456;function xn(r,n,e){var t;return l(r)||l(n)||l(e)||e<=0?NaN:r<=n?g:(t=r-n,.5*(Qr(e)-In-e/t-3*Qr(t)))}s(xn,"factory",(function(r,n){return l(r)||l(n)||n<=0?Or(NaN):function(e){var t;return l(e)?NaN:e<=r?g:(t=e-r,.5*(Qr(n)-In-n/t-3*Qr(t)))}}));var Tn=6.283185307179586;function kn(r,n,e){return l(r)||l(n)||l(e)||e<=0?NaN:r<=n?0:kr(e/Tn)*Er(-e/(2*(r-n)))/Nn(r-n,1.5)}function Fn(r,n,e){var t;return l(n)||l(e)||l(r)||e<=0||r<0||r>1?NaN:n+e/(2*(t=en(r))*t)}function On(r){return"number"==typeof r}function Vn(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function Pn(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+Vn(i):Vn(i)+r,t&&(r="-"+r)),r}s(kn,"factory",(function(r,n){return l(r)||l(n)||n<=0?Or(NaN):function(e){return l(e)?NaN:e<=r?0:kr(n/Tn)*Er(-n/(2*(e-r)))/Nn(e-r,1.5)}})),s(Fn,"factory",(function(r,n){return l(r)||l(n)||n<=0?Or(NaN):function(e){var t;return l(e)||e<0||e>1?NaN:(t=en(e),r+n/(2*t*t))}}));var $n=String.prototype.toLowerCase,Gn=String.prototype.toUpperCase;function Ln(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!On(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=Pn(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=Pn(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===Gn.call(r.specifier)?Gn.call(e):$n.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Hn(r){return"string"==typeof r}var Wn=Math.abs,Cn=String.prototype.toLowerCase,Mn=String.prototype.toUpperCase,Rn=String.prototype.replace,Zn=/e\+(\d)$/,qn=/e-(\d)$/,Xn=/^(\d+)$/,Yn=/^(\d+)e/,zn=/\.0$/,Bn=/\.0*e/,Dn=/(\..*[^0])0*e/;function Jn(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!On(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":Wn(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=Rn.call(e,Dn,"$1e"),e=Rn.call(e,Bn,"e"),e=Rn.call(e,zn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Rn.call(e,Zn,"e+0$1"),e=Rn.call(e,qn,"e-0$1"),r.alternate&&(e=Rn.call(e,Xn,"$1."),e=Rn.call(e,Yn,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Mn.call(r.specifier)?Mn.call(e):Cn.call(e)}function Kn(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function Qn(r,n,e){var t=n-r.length;return t<0?r:r=e?r+Kn(t):Kn(t)+r}var re=String.fromCharCode,ne=isNaN,ee=Array.isArray;function te(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function ie(r){var n,e,t,i,o,a,u,c,f;if(!ee(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(Hn(t=r[c]))a+=t;else{if(n=void 0!==t.precision,!(t=te(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,f=0;f<e.length;f++)switch(i=e.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,ne(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,ne(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=Ln(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!ne(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ne(o)?String(t.arg):re(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=Jn(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Pn(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Qn(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var oe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ae(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function ue(r){var n,e,t,i;for(e=[],i=0,t=oe.exec(r);t;)(n=r.slice(i,oe.lastIndex-t[0].length)).length&&e.push(n),e.push(ae(t)),i=oe.lastIndex,t=oe.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function ce(r){return"string"==typeof r}function fe(r){var n,e,t;if(!ce(r))throw new TypeError(fe("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=ue(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return ie.apply(null,e)}function se(){var r,n;if(!(this instanceof se))return 0===arguments.length?new se:new se(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Pr(r=arguments[0])||qr(r))throw new TypeError(fe("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Wr(n))throw new TypeError(fe("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Pr(n)||qr(n))throw new TypeError(fe("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),c(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Wr(r))throw new TypeError(fe("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}Vr(se.prototype,"entropy",(function(){return rn(this.mu,this.c)})),Vr(se.prototype,"mean",(function(){return nn(this.mu,this.c)})),Vr(se.prototype,"median",(function(){return _n(this.mu,this.c)})),Vr(se.prototype,"mode",(function(){return En(this.mu,this.c)})),Vr(se.prototype,"stdev",(function(){return Sn(this.mu,this.c)})),Vr(se.prototype,"variance",(function(){return Un(this.mu,this.c)})),s(se.prototype,"cdf",(function(r){return Fr(r,this.mu,this.c)})),s(se.prototype,"logcdf",(function(r){return jn(r,this.mu,this.c)})),s(se.prototype,"logpdf",(function(r){return xn(r,this.mu,this.c)})),s(se.prototype,"pdf",(function(r){return kn(r,this.mu,this.c)})),s(se.prototype,"quantile",(function(r){return Fn(r,this.mu,this.c)}));var le={};return f(le,"cdf",Fr),f(le,"Levy",se),f(le,"entropy",rn),f(le,"logcdf",jn),f(le,"logpdf",xn),f(le,"mean",nn),f(le,"median",_n),f(le,"mode",En),f(le,"pdf",kn),f(le,"quantile",Fn),f(le,"stdev",Sn),f(le,"variance",Un),le},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).levy=n();
//# sourceMappingURL=index.js.map
