// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,i=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,c=t.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,n){var f,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(u.call(r,e)||c.call(r,e)?(f=r.__proto__,r.__proto__=t,delete r[e],r[e]=n.value,r.__proto__=f):r[e]=n.value),l="get"in n,p="set"in n,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,n.get),p&&a&&a.call(r,e,n.set),r};function s(r,e,n){f(r,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r,e,n){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function p(r){return r!=r}var y=Math.floor,d=Math.ceil;function v(r){return r<0?d(r):y(r)}var h=Number,g=h.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,m=1023;function w(r){return r===b||r===g}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return N&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,j=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",U=A()?function(r){var e,n,t,i,o;if(null==r)return E.call(r);n=r[S],o=S,e=null!=(i=r)&&j.call(i,o);try{r[S]=void 0}catch(e){return E.call(r)}return t=E.call(r),e?r[S]=n:delete r[S],t}:function(r){return E.call(r)},x="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(x&&n instanceof Uint32Array||"[object Uint32Array]"===U(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?T:function(){throw new Error("not implemented")};var O,k=_,F="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,e,n;if("function"!=typeof V)return!1;try{e=new V([1,3.14,-3.14,NaN]),n=e,r=(F&&n instanceof Float64Array||"[object Float64Array]"===U(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,$=O,G="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,e,n;if("function"!=typeof H)return!1;try{e=new H(e=[1,3.14,-3.14,256,257]),n=e,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===U(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,C=L,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,e,n;if("function"!=typeof Z)return!1;try{e=new Z(e=[1,3.14,-3.14,65536,65537]),n=e,r=(R&&n instanceof Uint16Array||"[object Uint16Array]"===U(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new $(1),Q=new k(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return K[0]=e,r[0]=Q[rr],r[1]=Q[er],r}function tr(r,e){return 1===arguments.length?nr([0,0],r):nr(r,e)}var ir,or,ar=!0===D?1:0,ur=new $(1),cr=new k(ur.buffer);function fr(r){return ur[0]=r,cr[ar]}!0===D?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new $(1),pr=new k(lr.buffer),yr=sr.HIGH,dr=sr.LOW;function vr(r,e){return pr[yr]=r,pr[dr]=e,lr[0]}var hr=[0,0];function gr(r,e){var n,t;return tr(hr,r),n=hr[0],n&=2147483647,t=fr(e),vr(n|=t&=2147483648,hr[1])}function br(r){return Math.abs(r)}function mr(r,e){return p(e)||w(e)?(r[0]=e,r[1]=0,r):0!==e&&br(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)}var wr=[0,0],Nr=[0,0];function Ar(r,e){var n,t;return 0===e||0===r||p(r)||w(r)?r:(function(r,e){1===arguments.length?mr([0,0],r):mr(r,e)}(wr,r),e+=wr[1],e+=function(r){var e=fr(r);return(e=(2146435072&e)>>>20)-m|0}(r=wr[0]),e<-1074?gr(0,r):e>1023?r<0?g:b:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,tr(Nr,r),n=Nr[0],n&=2148532223,t*vr(n|=e+m<<20,Nr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function jr(r){var e;return p(r)||r===b?r:r===g?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,e,n){var t,i,o,a;return Ar(1-(e-(t=r-e)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(e=v(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*e,e)}var Sr=!0===D?0:1,Ur=new $(1),xr=new k(Ur.buffer);function Ir(r,e){return Ur[0]=r,xr[Sr]=e>>>0,Ur[0]}var Tr=.8450629115104675;function Or(r){var e,n,t,i,o,a,u,c;if(p(r))return NaN;if(r===b)return 0;if(r===g)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),o=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(n<1.25)return u=(o=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,c=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),e?1+Tr+u/c:1-Tr-u/c;if(n<28){if(o=1/(n*n),n<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=jr(-(t=Ir(n,0))*t-.5625)*jr((t-n)*(t+n)+i/o),e?2-i/n:i/n}return e?2:0}var kr=Math.sqrt;function Fr(r,e,n){return p(r)||p(e)||p(n)||n<=0?NaN:r<e?0:Or(kr(n/(2*(r-e))))}function Vr(r){return function(){return r}}function Pr(r,e,n){f(r,e,{configurable:!1,enumerable:!1,get:n})}function Lr(r){return"number"==typeof r}l(Fr,"factory",(function(r,e){return p(r)||p(e)||e<=0?Vr(NaN):function(n){return p(n)?NaN:n<r?0:Or(kr(e/(2*(n-r))))}}));var $r=h.prototype.toString,Gr=A();function Hr(r){return"object"==typeof r&&(r instanceof h||(Gr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===U(r)))}function Mr(r){return Lr(r)||Hr(r)}function Wr(r){return Lr(r)&&r>0}function Cr(r){return Hr(r)&&r.valueOf()>0}function Rr(r){return Wr(r)||Cr(r)}function Zr(r){return Lr(r)&&p(r)}function qr(r){return Hr(r)&&p(r.valueOf())}function Xr(r){return Zr(r)||qr(r)}l(Mr,"isPrimitive",Lr),l(Mr,"isObject",Hr),l(Rr,"isPrimitive",Wr),l(Rr,"isObject",Cr),l(Xr,"isPrimitive",Zr),l(Xr,"isObject",qr);var Yr=!0===D?1:0,zr=new $(1),Br=new k(zr.buffer);function Dr(r,e){return zr[0]=r,Br[Yr]=e>>>0,zr[0]}var Jr=.6931471803691238,Kr=1.9082149292705877e-10,Qr=1048575;function re(r){var e,n,t,i,o,a,u,c,f,s,l,y;return 0===r?g:p(r)||r<0?NaN:(o=0,(n=fr(r))<1048576&&(o-=54,n=fr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-m|0,o+=(c=614244+(n&=Qr)&1048576|0)>>20|0,u=(r=Dr(r,n|1072693248^c))-1,(Qr&2+n)<3?0===u?0===o?0:o*Jr+o*Kr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Jr-(a-o*Kr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(c|=f)>0?(e=.5*u*u,0===o?u-(e-s*(e+a)):o*Jr-(e-(s*(e+a)+o*Kr)-u)):0===o?u-s*(u-a):o*Jr-(s*(u-a)-o*Kr-u))))}function ee(r,e){return p(r)||p(e)||e<=0?NaN:(2.7316469947045987+re(16*e*e*3.141592653589793))/2}function ne(r,e){return p(r)||p(e)||e<=0?NaN:b}function te(r){var e,n,t,i;return p(r)?NaN:0===r?b:2===r?g:1===r?0:r>2||r<0?NaN:(r>1?(e=-1,n=2-r):(e=1,n=r),(r=1-n)<=.5?(t=r*(r+10),i=function(r){var e,n;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(e=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,n=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(e=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),n=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),e/n)}(r),e*(.08913147449493408*t+t*i)):n>=.25?(t=kr(-2*re(n)),i=function(r){var e,n;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(e=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,n=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(e=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,n=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),e/n)}(n-=.25),e*(t/(2.249481201171875+i))):(n=kr(-re(n)))<3?(i=function(r){var e,n;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(e=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,n=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(e=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,n=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),e/n)}(n-1.125),e*(.807220458984375*n+i*n)):n<6?(i=function(r){var e,n;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(e=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,n=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(e=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),n=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),e/n)}(n-3),e*(.9399557113647461*n+i*n)):(i=function(r){var e,n;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(e=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,n=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(e=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),n=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),e/n)}(n-6),e*(.9836282730102539*n+i*n)))}function ie(r){return y(r)===r}function oe(r){return ie(r/2)}function ae(r){return oe(r>0?r-1:r+1)}function ue(r){return 0|r}var ce=1048576,fe=[1,1.5],se=[0,.5849624872207642],le=[0,1.350039202129749e-8],pe=2147483647,ye=1048575,de=1048576,ve=2147483647,he=1083179008,ge=1e300,be=1e-300,me=[0,0],we=[0,0];function Ne(r,e){var n,t,i,o,a,u,c,f,s,l,y,d,v,h;if(p(r)||p(e))return NaN;if(tr(me,e),a=me[0],0===me[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return kr(r);if(-.5===e)return 1/kr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(w(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(e===b)?0:b}(r,e)}if(tr(me,r),o=me[0],0===me[1]){if(0===o)return function(r,e){return e===g?b:e===b?0:e>0?ae(e)?r:0:ae(e)?gr(b,r):b}(r,e);if(1===r)return 1;if(-1===r&&ae(e))return-1;if(w(r))return r===g?Ne(-0,-e):e<0?0:b}if(r<0&&!1===ie(e))return(r-r)/(r-r);if(i=br(r),n=o&ve|0,t=a&ve|0,c=a>>>31|0,u=(u=o>>>31|0)&&ae(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&fr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*ge*ge:u*be*be;if(n>1072693248)return 0===c?u*ge*ge:u*be*be;y=function(r,e){var n,t,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ir(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=n,r}(we,i)}else y=function(r,e,n){var t,i,o,a,u,c,f,s,l,p,y,d,v,h,g,b,w,N,A,_,E;return N=0,n<ce&&(N-=53,n=fr(e*=9007199254740992)),N+=(n>>20)-m|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,N+=1,n-=ce),a=Ir(i=(b=(e=Dr(e,n))-(f=fe[_]))*(w=1/(e+f)),0),t=524288+(n>>1|536870912),c=Dr(0,t+=_<<18),g=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Ir(c=3+(o=a*a)+(g+=(u=w*(b-a*c-a*(e-(c-f))))*(a+i)),0),v=(y=-7.028461650952758e-9*(l=Ir(l=(b=a*c)+(w=u*c+(g-(c-3-o))*i),0))+.9617966939259756*(w-(l-b))+le[_])-((d=Ir(d=(p=.9617967009544373*l)+y+(s=se[_])+(h=N),0))-h-s-p),r[0]=d,r[1]=v,r}(we,i,n);if(l=(e-(f=Ir(e,0)))*y[0]+e*y[1],s=f*y[0],tr(me,d=l+s),v=ue(me[0]),h=ue(me[1]),v>=he){if(0!=(v-he|h))return u*ge*ge;if(l+8008566259537294e-32>d-s)return u*ge*ge}else if((v&ve)>=1083231232){if(0!=(v-3230714880|h))return u*be*be;if(l<=d-s)return u*be*be}return d=function(r,e,n){var t,i,o,a,u,c,f,s,l,p;return l=((s=r&pe|0)>>20)-m|0,f=0,s>1071644672&&(i=Dr(0,((f=r+(de>>l+1)>>>0)&~(ye>>(l=((f&pe)>>20)-m|0)))>>>0),f=(f&ye|de)>>20-l>>>0,r<0&&(f=-f),e-=i),r=ue(r=fr(c=1-((c=(o=.6931471824645996*(i=Ir(i=n+e,0)))+(a=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ar(c,f):Dr(c,r)}(v,s,l),u*d}var Ae=2*Ne(te(.5),2);function _e(r,e){return p(r)||p(e)||e<=0?NaN:r+e/Ae}function Ee(r,e){return p(r)||p(e)||e<=0?NaN:r+e/3}function je(r,e){return p(r)||p(e)||e<=0?NaN:b}function Se(r,e){return p(r)||p(e)||e<=0?NaN:b}function Ue(r,e,n){return p(r)||p(e)||p(n)||n<=0?NaN:r<e?g:re(Or(kr(n/(2*(r-e)))))}l(Ue,"factory",(function(r,e){return p(r)||p(e)||e<=0?Vr(NaN):function(n){return p(n)?NaN:n<r?g:re(Or(kr(e/(2*(n-r)))))}}));var xe=1.8378770664093456;function Ie(r,e,n){var t;return p(r)||p(e)||p(n)||n<=0?NaN:r<=e?g:(t=r-e,.5*(re(n)-xe-n/t-3*re(t)))}l(Ie,"factory",(function(r,e){return p(r)||p(e)||e<=0?Vr(NaN):function(n){var t;return p(n)?NaN:n<=r?g:(t=n-r,.5*(re(e)-xe-e/t-3*re(t)))}}));var Te=6.283185307179586;function Oe(r,e,n){return p(r)||p(e)||p(n)||n<=0?NaN:r<=e?0:kr(n/Te)*jr(-n/(2*(r-e)))/Ne(r-e,1.5)}function ke(r,e,n){var t;return p(e)||p(n)||p(r)||n<=0||r<0||r>1?NaN:e+n/(2*(t=te(r))*t)}function Fe(r){return"number"==typeof r}function Ve(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function Pe(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+Ve(i):Ve(i)+r,t&&(r="-"+r)),r}l(Oe,"factory",(function(r,e){return p(r)||p(e)||e<=0?Vr(NaN):function(n){return p(n)?NaN:n<=r?0:kr(e/Te)*jr(-e/(2*(n-r)))/Ne(n-r,1.5)}})),l(ke,"factory",(function(r,e){return p(r)||p(e)||e<=0?Vr(NaN):function(n){var t;return p(n)||n<0||n>1?NaN:(t=te(n),r+e/(2*t*t))}}));var Le=String.prototype.toLowerCase,$e=String.prototype.toUpperCase;function Ge(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Fe(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Pe(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Pe(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===$e.call(r.specifier)?$e.call(n):Le.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function He(r){return"string"==typeof r}var Me=Math.abs,We=String.prototype.toLowerCase,Ce=String.prototype.toUpperCase,Re=String.prototype.replace,Ze=/e\+(\d)$/,qe=/e-(\d)$/,Xe=/^(\d+)$/,Ye=/^(\d+)e/,ze=/\.0$/,Be=/\.0*e/,De=/(\..*[^0])0*e/;function Je(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Fe(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Me(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Re.call(n,De,"$1e"),n=Re.call(n,Be,"e"),n=Re.call(n,ze,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Re.call(n,Ze,"e+0$1"),n=Re.call(n,qe,"e-0$1"),r.alternate&&(n=Re.call(n,Xe,"$1."),n=Re.call(n,Ye,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ce.call(r.specifier)?Ce.call(n):We.call(n)}function Ke(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Qe(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Ke(t):Ke(t)+r}var rn=String.fromCharCode,en=isNaN,nn=Array.isArray;function tn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function on(r){var e,n,t,i,o,a,u,c,f;if(!nn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(He(t=r[c]))a+=t;else{if(e=void 0!==t.precision,!(t=tn(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,en(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,en(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Ge(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!en(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=en(o)?String(t.arg):rn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Je(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Pe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Qe(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var an=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function un(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function cn(r){var e,n,t,i;for(n=[],i=0,t=an.exec(r);t;)(e=r.slice(i,an.lastIndex-t[0].length)).length&&n.push(e),n.push(un(t)),i=an.lastIndex,t=an.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function fn(r){return"string"==typeof r}function sn(r){var e,n,t;if(!fn(r))throw new TypeError(sn("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=cn(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return on.apply(null,n)}function ln(){var r,e;if(!(this instanceof ln))return 0===arguments.length?new ln:new ln(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!Lr(r=arguments[0])||Xr(r))throw new TypeError(sn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Wr(e))throw new TypeError(sn("invalid argument. Scale parameter must be a positive number. Value: `%s`.",e))}else r=0,e=1;return f(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!Lr(e)||Xr(e))throw new TypeError(sn("invalid assignment. Must be a number. Value: `%s`.",e));r=e}}),f(this,"c",{configurable:!1,enumerable:!0,get:function(){return e},set:function(r){if(!Wr(r))throw new TypeError(sn("invalid assignment. Must be a positive number. Value: `%s`.",r));e=r}}),this}Pr(ln.prototype,"entropy",(function(){return ee(this.mu,this.c)})),Pr(ln.prototype,"mean",(function(){return ne(this.mu,this.c)})),Pr(ln.prototype,"median",(function(){return _e(this.mu,this.c)})),Pr(ln.prototype,"mode",(function(){return Ee(this.mu,this.c)})),Pr(ln.prototype,"stdev",(function(){return je(this.mu,this.c)})),Pr(ln.prototype,"variance",(function(){return Se(this.mu,this.c)})),l(ln.prototype,"cdf",(function(r){return Fr(r,this.mu,this.c)})),l(ln.prototype,"logcdf",(function(r){return Ue(r,this.mu,this.c)})),l(ln.prototype,"logpdf",(function(r){return Ie(r,this.mu,this.c)})),l(ln.prototype,"pdf",(function(r){return Oe(r,this.mu,this.c)})),l(ln.prototype,"quantile",(function(r){return ke(r,this.mu,this.c)}));var pn={};s(pn,"cdf",Fr),s(pn,"Levy",ln),s(pn,"entropy",ee),s(pn,"logcdf",Ue),s(pn,"logpdf",Ie),s(pn,"mean",ne),s(pn,"median",_e),s(pn,"mode",Ee),s(pn,"pdf",Oe),s(pn,"quantile",ke),s(pn,"stdev",je),s(pn,"variance",Se),r.Levy=ln,r.cdf=Fr,r.default=pn,r.entropy=ee,r.logcdf=Ue,r.logpdf=Ie,r.mean=ne,r.median=_e,r.mode=Ee,r.pdf=Oe,r.quantile=ke,r.stdev=je,r.variance=Se,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).levy={});
//# sourceMappingURL=index.js.map
