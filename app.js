(()=>{var o1=0,Vm=1,a1=2;var n0=1,l1=2,ns=3,Li=0,_n=1,Rn=2,Ii=0,Zr=1,zl=2,zm=3,Gm=4,c1=5,ur=100,h1=101,u1=102,d1=103,f1=104,p1=200,m1=201,g1=202,_1=203,wu=204,bu=205,v1=206,x1=207,y1=208,M1=209,E1=210,S1=211,T1=212,w1=213,b1=214,Au=0,Ru=1,Cu=2,eo=3,Pu=4,Iu=5,Lu=6,Uu=7,i0=0,A1=1,R1=2,Cs=0,Od=1,Fd=2,Bd=3,kd=4,C1=5,Hd=6,Vd=7,Wm="attached",P1="detached",s0=300,to=301,no=302,Nu=303,Du=304,Mc=306,pr=1e3,ss=1001,la=1002,gn=1003,zd=1004;var jr=1005;var Cn=1006,sa=1007;var Pi=1008;var os=1009,r0=1010,o0=1011,ca=1012,Gd=1013,mr=1014,Ei=1015,In=1016,Wd=1017,Xd=1018,io=1020,a0=35902,l0=1021,c0=1022,ni=1023,h0=1024,u0=1025,$r=1026,so=1027,qd=1028,Yd=1029,d0=1030,jd=1031;var Kd=1033,Ol=33776,Fl=33777,Bl=33778,kl=33779,Ou=35840,Fu=35841,Bu=35842,ku=35843,Hu=36196,Vu=37492,zu=37496,Gu=37808,Wu=37809,Xu=37810,qu=37811,Yu=37812,ju=37813,Ku=37814,Zu=37815,$u=37816,Ju=37817,Qu=37818,ed=37819,td=37820,nd=37821,Hl=36492,id=36494,sd=36495,f0=36283,rd=36284,od=36285,ad=36286;var ro=2300,oo=2301,qh=2302,Xm=2400,qm=2401,Ym=2402,I1=2500;var p0=0,Ec=1,xa=2,L1=3200,U1=3201;var Sc=0,N1=1,As="",nn="srgb",rn="srgb-linear",Zd="display-p3",Tc="display-p3-linear",Gl="linear",yt="srgb",Wl="rec709",Xl="p3";var Ur=7680;var jm=519,D1=512,O1=513,F1=514,m0=515,B1=516,k1=517,H1=518,V1=519,ld=35044,g0=35048;var Km="300 es",rs=2e3,ql=2001,Ps=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zm=1234567,ra=Math.PI/180,ao=180/Math.PI;function Si(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[t&255]+fn[t>>8&255]+fn[t>>16&255]+fn[t>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function $d(t,e){return(t%e+e)%e}function z1(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function G1(t,e,n){return t!==e?(n-t)/(e-t):0}function oa(t,e,n){return(1-n)*t+n*e}function W1(t,e,n,i){return oa(t,e,1-Math.exp(-n*i))}function X1(t,e=1){return e-Math.abs($d(t,e*2)-e)}function q1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Y1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function j1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function K1(t,e){return t+Math.random()*(e-t)}function Z1(t){return t*(.5-Math.random())}function $1(t){t!==void 0&&(Zm=t);let e=Zm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J1(t){return t*ra}function Q1(t){return t*ao}function eM(t){return(t&t-1)===0&&t!==0}function tM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function nM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function iM(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*g,l*f,a*c);break;case"YXY":t.set(l*f,a*h,l*g,a*c);break;case"ZYZ":t.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var nt={DEG2RAD:ra,RAD2DEG:ao,generateUUID:Si,clamp:mn,euclideanModulo:$d,mapLinear:z1,inverseLerp:G1,lerp:oa,damp:W1,pingpong:X1,smoothstep:q1,smootherstep:Y1,randInt:j1,randFloat:K1,randFloatSpread:Z1,seededRandom:$1,degToRad:J1,radToDeg:Q1,isPowerOfTwo:eM,ceilPowerOfTwo:tM,floorPowerOfTwo:nM,setQuaternionFromProperEuler:iM,normalize:pt,denormalize:Mi},Me=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ce=class t{constructor(e,n,i,s,r,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],p=s[3],m=s[6],T=s[1],y=s[4],E=s[7],C=s[2],R=s[5],A=s[8];return r[0]=o*_+a*T+l*C,r[3]=o*p+a*y+l*R,r[6]=o*m+a*E+l*A,r[1]=c*_+h*T+u*C,r[4]=c*p+h*y+u*R,r[7]=c*m+h*E+u*A,r[2]=d*_+f*T+g*C,r[5]=d*p+f*y+g*R,r[8]=d*m+f*E+g*A,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=n*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yh.makeScale(e,n)),this}rotate(e){return this.premultiply(Yh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yh=new Ce;function _0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ha(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sM(){let t=ha("canvas");return t.style.display="block",t}var $m={};function Vl(t){t in $m||($m[t]=!0,console.warn(t))}function rM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function oM(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aM(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Jm=new Ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qm=new Ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[rn]:{transfer:Gl,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[nn]:{transfer:yt,primaries:Wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Tc]:{transfer:Gl,primaries:Xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Qm),fromReference:t=>t.applyMatrix3(Jm)},[Zd]:{transfer:yt,primaries:Xl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qm),fromReference:t=>t.applyMatrix3(Jm).convertLinearToSRGB()}},lM=new Set([rn,Tc]),$e={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!lM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=jo[e].toReference,s=jo[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return jo[t].primaries},getTransfer:function(t){return t===As?Gl:jo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(jo[e].luminanceCoefficients)}};function Jr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Nr,cd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=ha("canvas")),Nr.width=e.width,Nr.height=e.height;let i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=ha("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jr(n[i]/255)*255):n[i]=Jr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cM=0,Yl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kh(s[o].image)):r.push(Kh(s[o]))}else r=Kh(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Kh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hM=0,cn=class t extends Ps{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ss,s=ss,r=Cn,o=Pi,a=ni,l=os,c=t.DEFAULT_ANISOTROPY,h=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Si(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=s0;cn.DEFAULT_ANISOTROPY=1;var lt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,E=(f+1)/2,C=(m+1)/2,R=(h+d)/4,A=(u+_)/4,U=(g+p)/4;return y>E&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=A/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=U/r),this.set(i,s,r,n),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hd=class extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);let s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Yl(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends hd{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},jl=class extends cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ud=class extends cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ve=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(a===1){e[n+0]=d,e[n+1]=f,e[n+2]=g,e[n+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*_,T=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let C=Math.sqrt(y),R=Math.atan2(C,m*T);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}let E=a*T;if(l=l*p+d*E,c=c*p+f*E,h=h*p+g*E,u=u*p+_*E,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[n]=a*g+h*u+l*f-c*d,e[n+1]=l*g+h*d+c*u-a*f,e[n+2]=c*g+h*f+a*d-l*u,e[n+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],u=n[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*s+n*this._y,this._z=f*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(eg.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*n-r*s),u=2*(r*i-o*n);return this.x=n+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zh.copy(this).projectOnVector(e),this.sub(Zh)}reflect(e){return this.sub(Zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zh=new w,eg=new ve,ii=class{constructor(e=new w(1/0,1/0,1/0),n=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),hl.subVectors(this.max,Ko),Dr.subVectors(e.a,Ko),Or.subVectors(e.b,Ko),Fr.subVectors(e.c,Ko),Ms.subVectors(Or,Dr),Es.subVectors(Fr,Or),sr.subVectors(Dr,Fr);let n=[0,-Ms.z,Ms.y,0,-Es.z,Es.y,0,-sr.z,sr.y,Ms.z,0,-Ms.x,Es.z,0,-Es.x,sr.z,0,-sr.x,-Ms.y,Ms.x,0,-Es.y,Es.x,0,-sr.y,sr.x,0];return!$h(n,Dr,Or,Fr,hl)||(n=[1,0,0,0,1,0,0,0,1],!$h(n,Dr,Or,Fr,hl))?!1:(ul.crossVectors(Ms,Es),n=[ul.x,ul.y,ul.z],$h(n,Dr,Or,Fr,hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zi=[new w,new w,new w,new w,new w,new w,new w,new w],vi=new w,cl=new ii,Dr=new w,Or=new w,Fr=new w,Ms=new w,Es=new w,sr=new w,Ko=new w,hl=new w,ul=new w,rr=new w;function $h(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){rr.fromArray(t,r);let a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),c=n.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var uM=new ii,Zo=new w,Jh=new w,zn=class{constructor(e=new w,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);let n=Zo.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Zo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Jh)),this.expandByPoint(Zo.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new w,Qh=new w,dl=new w,Ss=new w,eu=new w,fl=new w,tu=new w,lo=class{constructor(e=new w,n=new w(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Qh.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Ss.copy(this.origin).sub(Qh);let r=e.distanceTo(n)*.5,o=-this.direction.dot(dl),a=Ss.dot(this.direction),l=-Ss.dot(dl),c=Ss.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qh).addScaledVector(dl,d),f}intersectSphere(e,n){$i.subVectors(e.center,this.origin);let i=$i.dot(this.direction),s=$i.dot($i)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,i,s,r){eu.subVectors(n,e),fl.subVectors(i,e),tu.crossVectors(eu,fl);let o=this.direction.dot(tu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ss.subVectors(this.origin,e);let l=a*this.direction.dot(fl.crossVectors(Ss,fl));if(l<0)return null;let c=a*this.direction.dot(eu.cross(Ss));if(c<0||l+c>o)return null;let h=-a*Ss.dot(tu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class t{constructor(e,n,i,s,r,o,a,l,c,h,u,d,f,g,_,p){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,h,u,d,f,g,_,p)}set(e,n,i,s,r,o,a,l,c,h,u,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=f+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+f*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;n[0]=d+_*a,n[4]=g*a-f,n[8]=o*c,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=f*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;n[0]=d-_*a,n[4]=-o*u,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*h,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;n[0]=l*h,n[4]=g*c-f,n[8]=d*c+_,n[1]=l*u,n[5]=_*c+d,n[9]=f*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=_-d*u,n[8]=g*u+f,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=f*u+g,n[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=d*u+_,n[5]=o*h,n[9]=f*u-g,n[2]=g*u-f,n[6]=a*h,n[10]=_*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,fM)}lookAt(e,n,i){let s=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ts.crossVectors(i,Hn),Ts.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ts.crossVectors(i,Hn)),Ts.normalize(),pl.crossVectors(Hn,Ts),s[0]=Ts.x,s[4]=pl.x,s[8]=Hn.x,s[1]=Ts.y,s[5]=pl.y,s[9]=Hn.y,s[2]=Ts.z,s[6]=pl.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],T=i[3],y=i[7],E=i[11],C=i[15],R=s[0],A=s[4],U=s[8],q=s[12],v=s[1],S=s[5],H=s[9],k=s[13],G=s[2],K=s[6],B=s[10],$=s[14],V=s[3],le=s[7],ne=s[11],ge=s[15];return r[0]=o*R+a*v+l*G+c*V,r[4]=o*A+a*S+l*K+c*le,r[8]=o*U+a*H+l*B+c*ne,r[12]=o*q+a*k+l*$+c*ge,r[1]=h*R+u*v+d*G+f*V,r[5]=h*A+u*S+d*K+f*le,r[9]=h*U+u*H+d*B+f*ne,r[13]=h*q+u*k+d*$+f*ge,r[2]=g*R+_*v+p*G+m*V,r[6]=g*A+_*S+p*K+m*le,r[10]=g*U+_*H+p*B+m*ne,r[14]=g*q+_*k+p*$+m*ge,r[3]=T*R+y*v+E*G+C*V,r[7]=T*A+y*S+E*K+C*le,r[11]=T*U+y*H+E*B+C*ne,r[15]=T*q+y*k+E*$+C*ge,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+n*l*f-n*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+n*c*u-n*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-n*l*u+n*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],T=u*p*c-_*d*c+_*l*f-a*p*f-u*l*m+a*d*m,y=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,E=h*_*c-g*u*c+g*a*f-o*_*f-h*a*m+o*u*m,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,R=n*T+i*y+s*E+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=T*A,e[1]=(_*d*r-u*p*r-_*s*f+i*p*f+u*s*m-i*d*m)*A,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*A,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,e[4]=y*A,e[5]=(h*p*r-g*d*r+g*s*f-n*p*f-h*s*m+n*d*m)*A,e[6]=(g*l*r-o*p*r-g*s*c+n*p*c+o*s*m-n*l*m)*A,e[7]=(o*d*r-h*l*r+h*s*c-n*d*c-o*s*f+n*l*f)*A,e[8]=E*A,e[9]=(g*u*r-h*_*r-g*i*f+n*_*f+h*i*m-n*u*m)*A,e[10]=(o*_*r-g*a*r+g*i*c-n*_*c-o*i*m+n*a*m)*A,e[11]=(h*a*r-o*u*r-h*i*c+n*u*c+o*i*f-n*a*f)*A,e[12]=C*A,e[13]=(h*_*s-g*u*s+g*i*d-n*_*d-h*i*p+n*u*p)*A,e[14]=(g*a*s-o*_*s-g*i*l+n*_*l+o*i*p-n*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*l-n*u*l-o*i*d+n*a*d)*A,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,T=l*c,y=l*h,E=l*u,C=i.x,R=i.y,A=i.z;return s[0]=(1-(_+m))*C,s[1]=(f+E)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-E)*R,s[5]=(1-(d+m))*R,s[6]=(p+T)*R,s[7]=0,s[8]=(g+y)*A,s[9]=(p-T)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=Br.set(s[0],s[1],s[2]).length(),o=Br.set(s[4],s[5],s[6]).length(),a=Br.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xi.copy(this);let c=1/r,h=1/o,u=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,n.setFromRotationMatrix(xi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=rs){let l=this.elements,c=2*r/(n-e),h=2*r/(i-s),u=(n+e)/(n-e),d=(i+s)/(i-s),f,g;if(a===rs)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ql)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=rs){let l=this.elements,c=1/(n-e),h=1/(i-s),u=1/(o-r),d=(n+e)*c,f=(i+s)*h,g,_;if(a===rs)g=(o+r)*u,_=-2*u;else if(a===ql)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Br=new w,xi=new Ee,dM=new w(0,0,0),fM=new w(1,1,1),Ts=new w,pl=new w,Hn=new w,tg=new Ee,ng=new ve,Zt=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ng.setFromEuler(this),this.setFromQuaternion(ng,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Kl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pM=0,ig=new w,kr=new ve,Ji=new Ee,ml=new w,$o=new w,mM=new w,gM=new ve,sg=new w(1,0,0),rg=new w(0,1,0),og=new w(0,0,1),ag={type:"added"},_M={type:"removed"},Hr={type:"childadded",child:null},nu={type:"childremoved",child:null},mt=class t extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new w,n=new Zt,i=new ve,s=new w(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Ce}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,n){return ig.copy(e).applyQuaternion(this.quaternion),this.position.add(ig.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt($o,ml,this.up):Ji.lookAt(ml,$o,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),kr.setFromRotationMatrix(Ji),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ag),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_M),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ag),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,mM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,gM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};mt.DEFAULT_UP=new w(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new w,Qi=new w,iu=new w,es=new w,Vr=new w,zr=new w,lg=new w,su=new w,ru=new w,ou=new w,au=new lt,lu=new lt,cu=new lt,dr=class t{constructor(e=new w,n=new w,i=new w){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),yi.subVectors(e,n),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){yi.subVectors(s,n),Qi.subVectors(i,n),iu.subVectors(e,n);let o=yi.dot(yi),a=yi.dot(Qi),l=yi.dot(iu),c=Qi.dot(Qi),h=Qi.dot(iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,es)===null?!1:es.x>=0&&es.y>=0&&es.x+es.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,es.x),l.addScaledVector(o,es.y),l.addScaledVector(a,es.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),cu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(au,r.x),o.addScaledVector(lu,r.y),o.addScaledVector(cu,r.z),o}static isFrontFacing(e,n,i,s){return yi.subVectors(i,n),Qi.subVectors(e,n),yi.cross(Qi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),yi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,i),zr.subVectors(r,i),su.subVectors(e,i);let l=Vr.dot(su),c=zr.dot(su);if(l<=0&&c<=0)return n.copy(i);ru.subVectors(e,s);let h=Vr.dot(ru),u=zr.dot(ru);if(h>=0&&u<=h)return n.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Vr,o);ou.subVectors(e,r);let f=Vr.dot(ou),g=zr.dot(ou);if(g>=0&&f<=g)return n.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(zr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return lg.subVectors(r,s),a=(u-h)/(u-h+(f-g)),n.copy(s).addScaledVector(lg,a);let m=1/(p+_+d);return o=_*m,a=d*m,n.copy(i).addScaledVector(Vr,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},gl={h:0,s:0,l:0};function hu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var se=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=$e.workingColorSpace){if(e=$d(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=hu(o,r,e+1/3),this.g=hu(o,r,e),this.b=hu(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,n=nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=nn){let i=v0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=jh(e.r),this.g=jh(e.g),this.b=jh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return $e.fromWorkingColorSpace(pn.copy(this),e),Math.round(mn(pn.r*255,0,255))*65536+Math.round(mn(pn.g*255,0,255))*256+Math.round(mn(pn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(pn.copy(this),n);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=nn){$e.fromWorkingColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,s=pn.b;return e!==nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+n,ws.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ws),e.getHSL(gl);let i=oa(ws.h,gl.h,n),s=oa(ws.s,gl.s,n),r=oa(ws.l,gl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new se;se.NAMES=v0;var vM=0,Sn=class extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Zr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=bu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==bu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tn=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new w,_l=new Me,ke=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ld,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mi(n,this.array)),n}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mi(n,this.array)),n}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mi(n,this.array)),n}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}};var Zl=class extends ke{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var $l=class extends ke{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var ln=class extends ke{constructor(e,n,i){super(new Float32Array(e),n,i)}},xM=0,ti=new Ee,uu=new mt,Gr=new w,Vn=new ii,Jo=new ii,tn=new w,tt=class t extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?$l:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ce().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Vn.min,Jo.min),Vn.expandByPoint(tn),tn.addVectors(Vn.max,Jo.max),Vn.expandByPoint(tn)):(Vn.expandByPoint(Jo.min),Vn.expandByPoint(Jo.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),tn.add(Gr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new w,l[U]=new w;let c=new w,h=new w,u=new w,d=new Me,f=new Me,g=new Me,_=new w,p=new w;function m(U,q,v){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,q),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[U].add(_),a[q].add(_),a[v].add(_),l[U].add(p),l[q].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,q=T.length;U<q;++U){let v=T[U],S=v.start,H=v.count;for(let k=S,G=S+H;k<G;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new w,E=new w,C=new w,R=new w;function A(U){C.fromBufferAttribute(s,U),R.copy(C);let q=a[U];y.copy(q),y.sub(C.multiplyScalar(C.dot(q))).normalize(),E.crossVectors(R,q);let S=E.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,S)}for(let U=0,q=T.length;U<q;++U){let v=T[U],S=v.start,H=v.count;for(let k=S,G=S+H;k<G;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=n.count;d<f;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cg=new Ee,or=new lo,vl=new zn,hg=new w,xl=new w,yl=new w,Ml=new w,du=new w,El=new w,ug=new w,Sl=new w,zt=class extends mt{constructor(e=new tt,n=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){El.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(du.fromBufferAttribute(u,e),o?El.addScaledVector(du,h):El.addScaledVector(du.sub(n),h))}n.add(El)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(vl.containsPoint(or.origin)===!1&&(or.intersectSphere(vl,hg)===null||or.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(cg.copy(r).invert(),or.copy(e.ray).applyMatrix4(cg),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=T,C=y;E<C;E+=3){let R=a.getX(E),A=a.getX(E+1),U=a.getX(E+2);s=Tl(this,m,e,i,c,h,u,R,A,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let T=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);s=Tl(this,o,e,i,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],T=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=T,C=y;E<C;E+=3){let R=E,A=E+1,U=E+2;s=Tl(this,m,e,i,c,h,u,R,A,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let T=p,y=p+1,E=p+2;s=Tl(this,o,e,i,c,h,u,T,y,E),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}};function yM(t,e,n,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Tl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,xl),t.getVertexPosition(l,yl),t.getVertexPosition(c,Ml);let h=yM(t,e,n,i,xl,yl,Ml,ug);if(h){let u=new w;dr.getBarycoord(ug,xl,yl,Ml,u),s&&(h.uv=dr.getInterpolatedAttribute(s,a,l,c,u,new Me)),r&&(h.uv1=dr.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=dr.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new w,materialIndex:0};dr.getNormal(xl,yl,Ml,d.normal),h.face=d,h.barycoord=u}return h}var ua=class t extends tt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(u,2));function g(_,p,m,T,y,E,C,R,A,U,q){let v=E/A,S=C/U,H=E/2,k=C/2,G=R/2,K=A+1,B=U+1,$=0,V=0,le=new w;for(let ne=0;ne<B;ne++){let ge=ne*S-k;for(let Qe=0;Qe<K;Qe++){let st=Qe*v-H;le[_]=st*T,le[p]=ge*y,le[m]=G,c.push(le.x,le.y,le.z),le[_]=0,le[p]=0,le[m]=R>0?1:-1,h.push(le.x,le.y,le.z),u.push(Qe/A),u.push(1-ne/U),$+=1}}for(let ne=0;ne<U;ne++)for(let ge=0;ge<A;ge++){let Qe=d+ge+K*ne,st=d+ge+K*(ne+1),W=d+(ge+1)+K*(ne+1),Q=d+(ge+1)+K*ne;l.push(Qe,st,Q),l.push(st,W,Q),V+=6}a.addGroup(f,V,q),f+=V,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function co(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function En(t){let e={};for(let n=0;n<t.length;n++){let i=co(t[n]);for(let s in i)e[s]=i[s]}return e}function MM(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function x0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Ni={clone:co,merge:En},EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Jl=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=rs}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bs=new w,dg=new Me,fg=new Me,Kt=class extends Jl{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,n){return this.getViewBounds(e,dg,fg),n.subVectors(fg,dg)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Wr=-90,Xr=1,dd=class extends mt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Wr,Xr,e,n);s.layers=this.layers,this.add(s);let r=new Kt(Wr,Xr,e,n);r.layers=this.layers,this.add(r);let o=new Kt(Wr,Xr,e,n);o.layers=this.layers,this.add(o);let a=new Kt(Wr,Xr,e,n);a.layers=this.layers,this.add(a);let l=new Kt(Wr,Xr,e,n);l.layers=this.layers,this.add(l);let c=new Kt(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===rs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ql=class extends cn{constructor(e,n,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fd=class extends sn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ql(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ua(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ii});r.uniforms.tEquirect.value=n;let o=new zt(s,r),a=n.minFilter;return n.minFilter===Pi&&(n.minFilter=Cn),new dd(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},fu=new w,TM=new w,wM=new Ce,is=class{constructor(e=new w(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=fu.subVectors(i,n).cross(TM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(fu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||wM.getNormalMatrix(e),s=this.coplanarPoint(fu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ar=new zn,wl=new w,da=class{constructor(e=new is,n=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=rs){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],T=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,p-f,E-m).normalize(),i[1].setComponents(l+r,d+c,p+f,E+m).normalize(),i[2].setComponents(l+o,d+h,p+g,E+T).normalize(),i[3].setComponents(l-o,d-h,p-g,E-T).normalize(),i[4].setComponents(l-a,d-u,p-_,E-y).normalize(),n===rs)i[5].setComponents(l+a,d+u,p+_,E+y).normalize();else if(n===ql)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(wl.x=s.normal.x>0?e.max.x:e.min.x,wl.y=s.normal.y>0?e.max.y:e.min.y,wl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function y0(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function bM(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ec=class t extends tt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=n/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let T=m*d-o;for(let y=0;y<c;y++){let E=y*u-r;g.push(E,-T,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let y=T+c*m,E=T+c*(m+1),C=T+1+c*(m+1),R=T+1+c*m;f.push(y,E,R),f.push(E,C,R)}this.setIndex(f),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,c2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:AM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:PM,alphatest_fragment:IM,alphatest_pars_fragment:LM,aomap_fragment:UM,aomap_pars_fragment:NM,batching_pars_vertex:DM,batching_vertex:OM,begin_vertex:FM,beginnormal_vertex:BM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:XM,color_fragment:qM,color_pars_fragment:YM,color_pars_vertex:jM,color_vertex:KM,common:ZM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:JM,displacementmap_pars_vertex:QM,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:sE,envmap_fragment:rE,envmap_common_pars_fragment:oE,envmap_pars_fragment:aE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:hE,fog_pars_vertex:uE,fog_fragment:dE,fog_pars_fragment:fE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:yE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:SE,lights_physical_fragment:TE,lights_physical_pars_fragment:wE,lights_fragment_begin:bE,lights_fragment_maps:AE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:PE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:LE,map_fragment:UE,map_pars_fragment:NE,map_particle_fragment:DE,map_particle_pars_fragment:OE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:BE,morphinstance_vertex:kE,morphcolor_vertex:HE,morphnormal_vertex:VE,morphtarget_pars_vertex:zE,morphtarget_vertex:GE,normal_fragment_begin:WE,normal_fragment_maps:XE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:JE,iridescence_pars_fragment:QE,opaque_fragment:e2,packing:t2,premultiplied_alpha_fragment:n2,project_vertex:i2,dithering_fragment:s2,dithering_pars_fragment:r2,roughnessmap_fragment:o2,roughnessmap_pars_fragment:a2,shadowmap_pars_fragment:l2,shadowmap_pars_vertex:c2,shadowmap_vertex:h2,shadowmask_pars_fragment:u2,skinbase_vertex:d2,skinning_pars_vertex:f2,skinning_vertex:p2,skinnormal_vertex:m2,specularmap_fragment:g2,specularmap_pars_fragment:_2,tonemapping_fragment:v2,tonemapping_pars_fragment:x2,transmission_fragment:y2,transmission_pars_fragment:M2,uv_pars_fragment:E2,uv_pars_vertex:S2,uv_vertex:T2,worldpos_vertex:w2,background_vert:b2,background_frag:A2,backgroundCube_vert:R2,backgroundCube_frag:C2,cube_vert:P2,cube_frag:I2,depth_vert:L2,depth_frag:U2,distanceRGBA_vert:N2,distanceRGBA_frag:D2,equirect_vert:O2,equirect_frag:F2,linedashed_vert:B2,linedashed_frag:k2,meshbasic_vert:H2,meshbasic_frag:V2,meshlambert_vert:z2,meshlambert_frag:G2,meshmatcap_vert:W2,meshmatcap_frag:X2,meshnormal_vert:q2,meshnormal_frag:Y2,meshphong_vert:j2,meshphong_frag:K2,meshphysical_vert:Z2,meshphysical_frag:$2,meshtoon_vert:J2,meshtoon_frag:Q2,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:sS,sprite_frag:rS},te={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ci={basic:{uniforms:En([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:En([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new se(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:En([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:En([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:En([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new se(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:En([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:En([te.points,te.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:En([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:En([te.common,te.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:En([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:En([te.sprite,te.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:En([te.common,te.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:En([te.lights,te.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ci.physical={uniforms:En([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var bl={r:0,b:0,g:0},lr=new Zt,oS=new Ee;function aS(t,e,n,i,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?n:e).get(y)),y}function _(T){let y=!1,E=g(T);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(T,y){let E=g(y);E&&(E.isCubeTexture||E.mapping===Mc)?(h===void 0&&(h=new zt(new ua(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:co(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),lr.copy(y.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(lr)),h.material.toneMapped=$e.getTransfer(E.colorSpace)!==yt,(u!==E||d!==E.version||f!==t.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=t.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new zt(new ec(2,2),new Nt({name:"BackgroundMaterial",uniforms:co(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(E.colorSpace)!==yt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(bl,x0(t)),i.buffers.color.setClear(bl.r,bl.g,bl.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(a,l)},render:_,addToRenderList:p}}function lS(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,S,H,k,G){let K=!1,B=u(k,H,S);r!==B&&(r=B,c(r.object)),K=f(v,k,H,G),K&&g(v,k,H,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(v,S,H,k),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function h(v){return t.deleteVertexArray(v)}function u(v,S,H){let k=H.wireframe===!0,G=i[v.id];G===void 0&&(G={},i[v.id]=G);let K=G[S.id];K===void 0&&(K={},G[S.id]=K);let B=K[k];return B===void 0&&(B=d(l()),K[k]=B),B}function d(v){let S=[],H=[],k=[];for(let G=0;G<n;G++)S[G]=0,H[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:H,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,S,H,k){let G=r.attributes,K=S.attributes,B=0,$=H.getAttributes();for(let V in $)if($[V].location>=0){let ne=G[V],ge=K[V];if(ge===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function g(v,S,H,k){let G={},K=S.attributes,B=0,$=H.getAttributes();for(let V in $)if($[V].location>=0){let ne=K[V];ne===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));let ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),G[V]=ge,B++}r.attributes=G,r.attributesNum=B,r.index=k}function _(){let v=r.newAttributes;for(let S=0,H=v.length;S<H;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let H=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;H[v]=1,k[v]===0&&(t.enableVertexAttribArray(v),k[v]=1),G[v]!==S&&(t.vertexAttribDivisor(v,S),G[v]=S)}function T(){let v=r.newAttributes,S=r.enabledAttributes;for(let H=0,k=S.length;H<k;H++)S[H]!==v[H]&&(t.disableVertexAttribArray(H),S[H]=0)}function y(v,S,H,k,G,K,B){B===!0?t.vertexAttribIPointer(v,S,H,G,K):t.vertexAttribPointer(v,S,H,k,G,K)}function E(v,S,H,k){_();let G=k.attributes,K=H.getAttributes(),B=S.defaultAttributeValues;for(let $ in K){let V=K[$];if(V.location>=0){let le=G[$];if(le===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let ne=le.normalized,ge=le.itemSize,Qe=e.get(le);if(Qe===void 0)continue;let st=Qe.buffer,W=Qe.type,Q=Qe.bytesPerElement,me=W===t.INT||W===t.UNSIGNED_INT||le.gpuType===Gd;if(le.isInterleavedBufferAttribute){let he=le.data,Be=he.stride,Pe=le.offset;if(he.isInstancedInterleavedBuffer){for(let qe=0;qe<V.locationSize;qe++)m(V.location+qe,he.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let qe=0;qe<V.locationSize;qe++)p(V.location+qe);t.bindBuffer(t.ARRAY_BUFFER,st);for(let qe=0;qe<V.locationSize;qe++)y(V.location+qe,ge/V.locationSize,W,ne,Be*Q,(Pe+ge/V.locationSize*qe)*Q,me)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)m(V.location+he,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<V.locationSize;he++)p(V.location+he);t.bindBuffer(t.ARRAY_BUFFER,st);for(let he=0;he<V.locationSize;he++)y(V.location+he,ge/V.locationSize,W,ne,ge*Q,ge/V.locationSize*he*Q,me)}}else if(B!==void 0){let ne=B[$];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(V.location,ne);break;case 3:t.vertexAttrib3fv(V.location,ne);break;case 4:t.vertexAttrib4fv(V.location,ne);break;default:t.vertexAttrib1fv(V.location,ne)}}}}T()}function C(){U();for(let v in i){let S=i[v];for(let H in S){let k=S[H];for(let G in k)h(k[G].object),delete k[G];delete S[H]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;let S=i[v.id];for(let H in S){let k=S[H];for(let G in k)h(k[G].object),delete k[G];delete S[H]}delete i[v.id]}function A(v){for(let S in i){let H=i[S];if(H[v.id]===void 0)continue;let k=H[v.id];for(let G in k)h(k[G].object),delete k[G];delete H[v.id]}}function U(){q(),o=!0,r!==s&&(r=s,c(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function cS(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];n.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)n.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hS(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==ni&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let U=A===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==os&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ei&&!U)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function uS(t){let e=this,n=null,i=0,s=!1,r=!1,o=new is,a=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=t.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,y=T*4,E=m.clippingState||null;l.value=E,E=h(g,d,y,f);for(let C=0;C!==y;++C)E[C]=n[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,E=f;y!==_;++y,E+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function dS(t){let e=new WeakMap;function n(o,a){return a===Nu?o.mapping=to:a===Du&&(o.mapping=no),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nu||a===Du)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fd(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Is=class extends Jl{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Kr=4,pg=[.125,.215,.35,.446,.526,.582],fr=20,pu=new Is,mg=new se,mu=null,gu=0,_u=0,vu=!1,hr=(1+Math.sqrt(5))/2,qr=1/hr,gg=[new w(-hr,qr,0),new w(hr,qr,0),new w(-qr,0,hr),new w(qr,0,hr),new w(0,hr,-qr),new w(0,hr,qr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=vu,e.scissorTest=!1,Al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:In,format:ni,colorSpace:rn,depthBuffer:!1},s=_g(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fS(r)),this._blurMaterial=pS(r,e,n)}return s}_compileMaterial(e){let n=new zt(this._lodPlanes[0],e);this._renderer.compile(n,pu)}_sceneToCubeUV(e,n,i,s){let a=new Kt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mg),h.toneMapping=Cs,h.autoClear=!1;let f=new Tn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new zt(new ua,f),_=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(mg),_=!0);for(let m=0;m<6;m++){let T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Al(s,T*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===to||e.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pu)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gg[(s-r-1)%gg.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fr-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):fr;p>fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);let m=[],T=0;for(let A=0;A<fr;++A){let U=A/_,q=Math.exp(-U*U/2);m.push(q),A===0?T+=q:A<p&&(T+=2*q)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let E=this._sizeLods[s],C=3*E*(s>y-Kr?s-y+Kr:0),R=4*(this._cubeSize-E);Al(n,C,R,3*E,2*E),l.setRenderTarget(n),l.render(u,pu)}};function fS(t){let e=[],n=[],i=[],s=t,r=t-Kr+1+pg.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Kr?l=pg[o-t+Kr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,T=new Float32Array(_*g*f),y=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let R=0;R<f;R++){let A=R%3*2/3-1,U=R>2?0:-1,q=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];T.set(q,_*g*R),y.set(d,p*g*R);let v=[R,R,R,R,R,R];E.set(v,m*g*R)}let C=new tt;C.setAttribute("position",new ke(T,_)),C.setAttribute("uv",new ke(y,p)),C.setAttribute("faceIndex",new ke(E,m)),e.push(C),s>Kr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _g(t,e,n){let i=new sn(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Al(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function pS(t,e,n){let i=new Float32Array(fr),s=new w(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function vg(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function xg(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Nu||l===Du,h=l===to||l===no;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new tc(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(n===null&&(n=new tc(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function gS(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Vl("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _S(t,e,n,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let y=0,E=T.length;y<E;y+=3){let C=T[y+0],R=T[y+1],A=T[y+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){let T=g.array;_=g.version;for(let y=0,E=T.length/3-1;y<E;y+=3){let C=y+0,R=y+1,A=y+2;d.push(C,R,R,A,A,C)}}else return;let p=new(_0(d)?$l:Zl)(d,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function vS(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,r,d*o),n.update(f,i,1)}function c(d,f,g){g!==0&&(t.drawElementsInstanced(i,f,r,d*o,g),n.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];n.update(p,i,1)}function u(d,f,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let m=0;for(let T=0;T<g;T++)m+=f[T];for(let T=0;T<_.length;T++)n.update(m,i,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xS(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function yS(t,e,n){let i=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let q=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",q)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let E=a.attributes.position.count*y,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let R=new Float32Array(E*C*4*u),A=new jl(R,E,C,u);A.type=Ei,A.needsUpdate=!0;let U=y*4;for(let v=0;v<u;v++){let S=p[v],H=m[v],k=T[v],G=E*C*4*v;for(let K=0;K<S.count;K++){let B=K*U;f===!0&&(s.fromBufferAttribute(S,K),R[G+B+0]=s.x,R[G+B+1]=s.y,R[G+B+2]=s.z,R[G+B+3]=0),g===!0&&(s.fromBufferAttribute(H,K),R[G+B+4]=s.x,R[G+B+5]=s.y,R[G+B+6]=s.z,R[G+B+7]=0),_===!0&&(s.fromBufferAttribute(k,K),R[G+B+8]=s.x,R[G+B+9]=s.y,R[G+B+10]=s.z,R[G+B+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Me(E,C)},i.set(a,d),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function MS(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}var nc=class extends cn{constructor(e,n,i,s,r,o,a,l,c,h=$r){if(h!==$r&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$r&&(i=mr),i===void 0&&h===so&&(i=io),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},M0=new cn,yg=new nc(1,1),E0=new jl,S0=new ud,T0=new Ql,Mg=[],Eg=[],Sg=new Float32Array(16),Tg=new Float32Array(9),wg=new Float32Array(4);function mo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Mg[s];if(r===void 0&&(r=new Float32Array(s),Mg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=Eg[e];n===void 0&&(n=new Int32Array(e),Eg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ES(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function TS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function wS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function bS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if($t(n,i))return;wg.set(i),t.uniformMatrix2fv(this.addr,!1,wg),Jt(n,i)}}function AS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if($t(n,i))return;Tg.set(i),t.uniformMatrix3fv(this.addr,!1,Tg),Jt(n,i)}}function RS(t,e){let n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if($t(n,i))return;Sg.set(i),t.uniformMatrix4fv(this.addr,!1,Sg),Jt(n,i)}}function CS(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function IS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function LS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function US(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function DS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function OS(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function FS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(yg.compareFunction=m0,r=yg):r=M0,n.setTexture2D(e||r,s)}function BS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||S0,s)}function kS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||T0,s)}function HS(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||E0,s)}function VS(t){switch(t){case 5126:return ES;case 35664:return SS;case 35665:return TS;case 35666:return wS;case 35674:return bS;case 35675:return AS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return PS;case 35668:case 35672:return IS;case 35669:case 35673:return LS;case 5125:return US;case 36294:return NS;case 36295:return DS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return HS}}function zS(t,e){t.uniform1fv(this.addr,e)}function GS(t,e){let n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function WS(t,e){let n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function XS(t,e){let n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function qS(t,e){let n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YS(t,e){let n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jS(t,e){let n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KS(t,e){t.uniform1iv(this.addr,e)}function ZS(t,e){t.uniform2iv(this.addr,e)}function $S(t,e){t.uniform3iv(this.addr,e)}function JS(t,e){t.uniform4iv(this.addr,e)}function QS(t,e){t.uniform1uiv(this.addr,e)}function eT(t,e){t.uniform2uiv(this.addr,e)}function tT(t,e){t.uniform3uiv(this.addr,e)}function nT(t,e){t.uniform4uiv(this.addr,e)}function iT(t,e,n){let i=this.cache,s=e.length,r=wc(n,s);$t(i,r)||(t.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||M0,r[o])}function sT(t,e,n){let i=this.cache,s=e.length,r=wc(n,s);$t(i,r)||(t.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||S0,r[o])}function rT(t,e,n){let i=this.cache,s=e.length,r=wc(n,s);$t(i,r)||(t.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||T0,r[o])}function oT(t,e,n){let i=this.cache,s=e.length,r=wc(n,s);$t(i,r)||(t.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||E0,r[o])}function aT(t){switch(t){case 5126:return zS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return qS;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return KS;case 35667:case 35671:return ZS;case 35668:case 35672:return $S;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return rT;case 36289:case 36303:case 36311:case 36292:return oT}}var pd=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VS(n.type)}},md=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aT(n.type)}},gd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},xu=/(\w+)(\])?(\[|\.)?/g;function bg(t,e){t.seq.push(e),t.map[e.id]=e}function lT(t,e,n){let i=t.name,s=i.length;for(xu.lastIndex=0;;){let r=xu.exec(i),o=xu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bg(n,c===void 0?new pd(a,t,e):new md(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new gd(a),bg(n,u)),n=u}}}var Qr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);lT(r,o,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function Ag(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var cT=37297,hT=0;function uT(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function dT(t){let e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t),i;switch(e===n?i="":e===Xl&&n===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&n===Xl&&(i="LinearSRGBToLinearDisplayP3"),t){case rn:case Tc:return[i,"LinearTransferOETF"];case nn:case Zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Rg(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+uT(t.getShaderSource(e),o)}else return s}function fT(t,e){let n=dT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pT(t,e){let n;switch(e){case Od:n="Linear";break;case Fd:n="Reinhard";break;case Bd:n="Cineon";break;case kd:n="ACESFilmic";break;case Hd:n="AgX";break;case Vd:n="Neutral";break;case C1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Rl=new w;function mT(){$e.getLuminanceCoefficients(Rl);let t=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function _T(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vT(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function Cg(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(t){return t.replace(xT,MT)}var yT=new Map;function MT(t,e){let n=Ve[e];if(n===void 0){let i=yT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(n)}var ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(t){return t.replace(ET,ST)}function ST(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===l1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ns&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bT(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===no&&(e="ENVMAP_MODE_REFRACTION"),e}function AT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case i0:e="ENVMAP_BLENDING_MULTIPLY";break;case A1:e="ENVMAP_BLENDING_MIX";break;case R1:e="ENVMAP_BLENDING_ADD";break}return e}function RT(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function CT(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=TT(n),c=wT(n),h=bT(n),u=AT(n),d=RT(n),f=gT(n),g=_T(r),_=s.createProgram(),p,m,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(p=[Lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[Lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cs?"#define TONE_MAPPING":"",n.toneMapping!==Cs?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Cs?pT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,fT("linearToOutputTexel",n.outputColorSpace),mT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=_d(o),o=Cg(o,n),o=Pg(o,n),a=_d(a),a=Cg(a,n),a=Pg(a,n),o=Ig(o),a=Ig(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=T+p+o,E=T+m+a,C=Ag(s,s.VERTEX_SHADER,y),R=Ag(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,R),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(S){if(t.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(R).trim(),K=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,C,R);else{let $=Rg(s,C,"vertex"),V=Rg(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+H+`
`+$+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||G==="")&&(B=!1);B&&(S.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(C),s.deleteShader(R),U=new Qr(s,_),q=vT(s,_)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let q;this.getAttributes=function(){return q===void 0&&A(this),q};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,cT)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}var PT=0,vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new xd(e),n.set(e,i)),i}},xd=class{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}};function IT(t,e,n,i,s,r,o){let a=new Kl,l=new vd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,H,k,G){let K=k.fog,B=G.geometry,$=v.isMeshStandardMaterial?k.environment:null,V=(v.isMeshStandardMaterial?n:e).get(v.envMap||$),le=V&&V.mapping===Mc?V.image.height:null,ne=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=ge!==void 0?ge.length:0,st=0;B.morphAttributes.position!==void 0&&(st=1),B.morphAttributes.normal!==void 0&&(st=2),B.morphAttributes.color!==void 0&&(st=3);let W,Q,me,he;if(ne){let dn=Ci[ne];W=dn.vertexShader,Q=dn.fragmentShader}else W=v.vertexShader,Q=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),he=l.getFragmentShaderID(v);let Be=t.getRenderTarget(),Pe=G.isInstancedMesh===!0,qe=G.isBatchedMesh===!0,at=!!v.map,Ye=!!v.matcap,P=!!V,hn=!!v.aoMap,Ge=!!v.lightMap,Ke=!!v.bumpMap,Ie=!!v.normalMap,_t=!!v.displacementMap,Ne=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,O=v.anisotropy>0,Y=v.clearcoat>0,Z=v.dispersion>0,X=v.iridescence>0,Te=v.sheen>0,ie=v.transmission>0,de=O&&!!v.anisotropyMap,et=Y&&!!v.clearcoatMap,J=Y&&!!v.clearcoatNormalMap,fe=Y&&!!v.clearcoatRoughnessMap,Le=X&&!!v.iridescenceMap,De=X&&!!v.iridescenceThicknessMap,pe=Te&&!!v.sheenColorMap,We=Te&&!!v.sheenRoughnessMap,He=!!v.specularMap,vt=!!v.specularColorMap,I=!!v.specularIntensityMap,ce=ie&&!!v.transmissionMap,z=ie&&!!v.thicknessMap,j=!!v.gradientMap,oe=!!v.alphaMap,re=v.alphaTest>0,ze=!!v.alphaHash,Ut=!!v.extensions,un=Cs;v.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(un=t.toneMapping);let Ze={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Q,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:qe,batchingColor:qe&&G._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,instancingMorph:Pe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Be===null?t.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:rn,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:Ye,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:le,aoMap:hn,lightMap:Ge,bumpMap:Ke,normalMap:Ie,displacementMap:f&&_t,emissiveMap:Ne,normalMapObjectSpace:Ie&&v.normalMapType===N1,normalMapTangentSpace:Ie&&v.normalMapType===Sc,metalnessMap:b,roughnessMap:x,anisotropy:O,anisotropyMap:de,clearcoat:Y,clearcoatMap:et,clearcoatNormalMap:J,clearcoatRoughnessMap:fe,dispersion:Z,iridescence:X,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:Te,sheenColorMap:pe,sheenRoughnessMap:We,specularMap:He,specularColorMap:vt,specularIntensityMap:I,transmission:ie,transmissionMap:ce,thicknessMap:z,gradientMap:j,opaque:v.transparent===!1&&v.blending===Zr&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:re,alphaHash:ze,combine:v.combine,mapUv:at&&p(v.map.channel),aoMapUv:hn&&p(v.aoMap.channel),lightMapUv:Ge&&p(v.lightMap.channel),bumpMapUv:Ke&&p(v.bumpMap.channel),normalMapUv:Ie&&p(v.normalMap.channel),displacementMapUv:_t&&p(v.displacementMap.channel),emissiveMapUv:Ne&&p(v.emissiveMap.channel),metalnessMapUv:b&&p(v.metalnessMap.channel),roughnessMapUv:x&&p(v.roughnessMap.channel),anisotropyMapUv:de&&p(v.anisotropyMap.channel),clearcoatMapUv:et&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(v.sheenRoughnessMap.channel),specularMapUv:He&&p(v.specularMap.channel),specularColorMapUv:vt&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:ce&&p(v.transmissionMap.channel),thicknessMapUv:z&&p(v.thicknessMap.channel),alphaMapUv:oe&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ie||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!B.attributes.uv&&(at||oe),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:st,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:un,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===yt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ut&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&v.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function T(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let H in v.defines)S.push(H),S.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(y(S,v),E(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let S=_[v.type],H;if(S){let k=Ci[S];H=Ni.clone(k.uniforms)}else H=v.uniforms;return H}function R(v,S){let H;for(let k=0,G=h.length;k<G;k++){let K=h[k];if(K.cacheKey===S){H=K,++H.usedTimes;break}}return H===void 0&&(H=new CT(t,S,v,r),h.push(H)),H}function A(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function q(){l.dispose()}return{getParameters:m,getProgramCacheKey:T,getUniforms:C,acquireProgram:R,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:q}}function LT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function UT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ug(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ng(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,p){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},t[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):n.push(m)}function l(u,d,f,g,_,p){let m=o(u,d,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):n.unshift(m)}function c(u,d){n.length>1&&n.sort(u||UT),i.length>1&&i.sort(d||Ug),s.length>1&&s.sort(d||Ug)}function h(){for(let u=e,d=t.length;u<d;u++){let f=t[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function NT(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Ng,t.set(i,[o])):s>=r.length?(o=new Ng,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new w,color:new se};break;case"SpotLight":n={position:new w,direction:new w,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new w,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new w,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new w,halfWidth:new w,halfHeight:new w};break}return t[e.id]=n,n}}}function OT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var FT=0;function BT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kT(t){let e=new DT,n=OT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);let s=new w,r=new Ee,o=new Ee;function a(c){let h=0,u=0,d=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,T=0,y=0,E=0,C=0,R=0,A=0;c.sort(BT);for(let q=0,v=c.length;q<v;q++){let S=c[q],H=S.color,k=S.intensity,G=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(S.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(S.sh.coefficients[B],k);A++}else if(S.isDirectionalLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let $=S.shadow,V=n.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=S.shadow.matrix,T++}i.directional[f]=B,f++}else if(S.isSpotLight){let B=e.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(H).multiplyScalar(k),B.distance=G,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,i.spot[_]=B;let $=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,$.updateMatrices(S),S.castShadow&&R++),i.spotLightMatrix[_]=$.matrix,S.castShadow){let V=n.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=K,E++}_++}else if(S.isRectAreaLight){let B=e.get(S);B.color.copy(H).multiplyScalar(k),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=B,p++}else if(S.isPointLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){let $=S.shadow,V=n.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=S.shadow.matrix,y++}i.point[g]=B,g++}else if(S.isHemisphereLight){let B=e.get(S);B.skyColor.copy(S.color).multiplyScalar(k),B.groundColor.copy(S.groundColor).multiplyScalar(k),i.hemi[m]=B,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==T||U.numPointShadows!==y||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=T,U.numPointShadows=y,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=A,i.version=FT++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let y=c[m];if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Dg(t){let e=new kT(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function HT(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Dg(t),e.set(s,[a])):r>=o.length?(a=new Dg(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var yd=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Md=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GT(t,e,n){let i=new da,s=new Me,r=new Me,o=new lt,a=new yd({depthPacking:U1}),l=new Md,c={},h=n.maxTextureSize,u={[Li]:_n,[_n]:Li,[Rn]:Rn},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:VT,fragmentShader:zT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new tt;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new zt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let m=this.type;this.render=function(R,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let q=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ii),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=m!==ns&&this.type===ns,G=m===ns&&this.type!==ns;for(let K=0,B=R.length;K<B;K++){let $=R[K],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let le=V.getFrameExtents();if(s.multiply(le),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||k===!0||G===!0){let ge=this.type!==ns?{minFilter:gn,magFilter:gn}:{};V.map!==null&&V.map.dispose(),V.map=new sn(s.x,s.y,ge),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let ne=V.getViewportCount();for(let ge=0;ge<ne;ge++){let Qe=V.getViewport(ge);o.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),H.viewport(o),V.updateMatrices($,ge),i=V.getFrustum(),E(A,U,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===ns&&T(V,U),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(q,v,S)};function T(R,A){let U=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new sn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,U,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,U,f,_,null)}function y(R,A,U,q){let v=null,S=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)v=S;else if(v=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=v.uuid,k=A.uuid,G=c[H];G===void 0&&(G={},c[H]=G);let K=G[k];K===void 0&&(K=v.clone(),G[k]=K,A.addEventListener("dispose",C)),v=K}if(v.visible=A.visible,v.wireframe=A.wireframe,q===ns?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=t.properties.get(v);H.light=U}return v}function E(R,A,U,q,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ns)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let k=e.update(R),G=R.material;if(Array.isArray(G)){let K=k.groups;for(let B=0,$=K.length;B<$;B++){let V=K[B],le=G[V.materialIndex];if(le&&le.visible){let ne=y(R,le,q,v);R.onBeforeShadow(t,R,A,U,k,ne,V),t.renderBufferDirect(U,null,k,ne,R,V),R.onAfterShadow(t,R,A,U,k,ne,V)}}}else if(G.visible){let K=y(R,G,q,v);R.onBeforeShadow(t,R,A,U,k,K,null),t.renderBufferDirect(U,null,k,K,R,null),R.onAfterShadow(t,R,A,U,k,K,null)}}let H=R.children;for(let k=0,G=H.length;k<G;k++)E(H[k],A,U,q,v)}function C(R){R.target.removeEventListener("dispose",C);for(let U in c){let q=c[U],v=R.target.uuid;v in q&&(q[v].dispose(),delete q[v])}}}var WT={[Au]:Ru,[Cu]:Lu,[Pu]:Uu,[eo]:Iu,[Ru]:Au,[Lu]:Cu,[Uu]:Pu,[Iu]:eo};function XT(t){function e(){let I=!1,ce=new lt,z=null,j=new lt(0,0,0,0);return{setMask:function(oe){z!==oe&&!I&&(t.colorMask(oe,oe,oe,oe),z=oe)},setLocked:function(oe){I=oe},setClear:function(oe,re,ze,Ut,un){un===!0&&(oe*=Ut,re*=Ut,ze*=Ut),ce.set(oe,re,ze,Ut),j.equals(ce)===!1&&(t.clearColor(oe,re,ze,Ut),j.copy(ce))},reset:function(){I=!1,z=null,j.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,z=null,j=null,oe=null;return{setReversed:function(re){ce=re},setTest:function(re){re?me(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(re){z!==re&&!I&&(t.depthMask(re),z=re)},setFunc:function(re){if(ce&&(re=WT[re]),j!==re){switch(re){case Au:t.depthFunc(t.NEVER);break;case Ru:t.depthFunc(t.ALWAYS);break;case Cu:t.depthFunc(t.LESS);break;case eo:t.depthFunc(t.LEQUAL);break;case Pu:t.depthFunc(t.EQUAL);break;case Iu:t.depthFunc(t.GEQUAL);break;case Lu:t.depthFunc(t.GREATER);break;case Uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}j=re}},setLocked:function(re){I=re},setClear:function(re){oe!==re&&(t.clearDepth(re),oe=re)},reset:function(){I=!1,z=null,j=null,oe=null}}}function i(){let I=!1,ce=null,z=null,j=null,oe=null,re=null,ze=null,Ut=null,un=null;return{setTest:function(Ze){I||(Ze?me(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!I&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,dn,gi){(z!==Ze||j!==dn||oe!==gi)&&(t.stencilFunc(Ze,dn,gi),z=Ze,j=dn,oe=gi)},setOp:function(Ze,dn,gi){(re!==Ze||ze!==dn||Ut!==gi)&&(t.stencilOp(Ze,dn,gi),re=Ze,ze=dn,Ut=gi)},setLocked:function(Ze){I=Ze},setClear:function(Ze){un!==Ze&&(t.clearStencil(Ze),un=Ze)},reset:function(){I=!1,ce=null,z=null,j=null,oe=null,re=null,ze=null,Ut=null,un=null}}}let s=new e,r=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,T=null,y=null,E=null,C=null,R=new se(0,0,0),A=0,U=!1,q=null,v=null,S=null,H=null,k=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,B=0,$=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),K=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=B>=2);let V=null,le={},ne=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Qe=new lt().fromArray(ne),st=new lt().fromArray(ge);function W(I,ce,z,j){let oe=new Uint8Array(4),re=t.createTexture();t.bindTexture(I,re),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<z;ze++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,j,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ce+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return re}let Q={};Q[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(t.DEPTH_TEST),r.setFunc(eo),Ge(!1),Ke(Vm),me(t.CULL_FACE),P(Ii);function me(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function he(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Be(I,ce){return h[I]!==ce?(t.bindFramebuffer(I,ce),h[I]=ce,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ce),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(I,ce){let z=d,j=!1;if(I){z=u.get(ce),z===void 0&&(z=[],u.set(ce,z));let oe=I.textures;if(z.length!==oe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let re=0,ze=oe.length;re<ze;re++)z[re]=t.COLOR_ATTACHMENT0+re;z.length=oe.length,j=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,j=!0);j&&t.drawBuffers(z)}function qe(I){return f!==I?(t.useProgram(I),f=I,!0):!1}let at={[ur]:t.FUNC_ADD,[h1]:t.FUNC_SUBTRACT,[u1]:t.FUNC_REVERSE_SUBTRACT};at[d1]=t.MIN,at[f1]=t.MAX;let Ye={[p1]:t.ZERO,[m1]:t.ONE,[g1]:t.SRC_COLOR,[wu]:t.SRC_ALPHA,[E1]:t.SRC_ALPHA_SATURATE,[y1]:t.DST_COLOR,[v1]:t.DST_ALPHA,[_1]:t.ONE_MINUS_SRC_COLOR,[bu]:t.ONE_MINUS_SRC_ALPHA,[M1]:t.ONE_MINUS_DST_COLOR,[x1]:t.ONE_MINUS_DST_ALPHA,[S1]:t.CONSTANT_COLOR,[T1]:t.ONE_MINUS_CONSTANT_COLOR,[w1]:t.CONSTANT_ALPHA,[b1]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,ce,z,j,oe,re,ze,Ut,un,Ze){if(I===Ii){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),I!==c1){if(I!==_||Ze!==U){if((p!==ur||y!==ur)&&(t.blendEquation(t.FUNC_ADD),p=ur,y=ur),Ze)switch(I){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zl:t.blendFunc(t.ONE,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zl:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,T=null,E=null,C=null,R.set(0,0,0),A=0,_=I,U=Ze}return}oe=oe||ce,re=re||z,ze=ze||j,(ce!==p||oe!==y)&&(t.blendEquationSeparate(at[ce],at[oe]),p=ce,y=oe),(z!==m||j!==T||re!==E||ze!==C)&&(t.blendFuncSeparate(Ye[z],Ye[j],Ye[re],Ye[ze]),m=z,T=j,E=re,C=ze),(Ut.equals(R)===!1||un!==A)&&(t.blendColor(Ut.r,Ut.g,Ut.b,un),R.copy(Ut),A=un),_=I,U=!1}function hn(I,ce){I.side===Rn?he(t.CULL_FACE):me(t.CULL_FACE);let z=I.side===_n;ce&&(z=!z),Ge(z),I.blending===Zr&&I.transparent===!1?P(Ii):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){q!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),q=I)}function Ke(I){I!==o1?(me(t.CULL_FACE),I!==v&&(I===Vm?t.cullFace(t.BACK):I===a1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),v=I}function Ie(I){I!==S&&(K&&t.lineWidth(I),S=I)}function _t(I,ce,z){I?(me(t.POLYGON_OFFSET_FILL),(H!==ce||k!==z)&&(t.polygonOffset(ce,z),H=ce,k=z)):he(t.POLYGON_OFFSET_FILL)}function Ne(I){I?me(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function b(I){I===void 0&&(I=t.TEXTURE0+G-1),V!==I&&(t.activeTexture(I),V=I)}function x(I,ce,z){z===void 0&&(V===null?z=t.TEXTURE0+G-1:z=V);let j=le[z];j===void 0&&(j={type:void 0,texture:void 0},le[z]=j),(j.type!==I||j.texture!==ce)&&(V!==z&&(t.activeTexture(z),V=z),t.bindTexture(I,ce||Q[I]),j.type=I,j.texture=ce)}function O(){let I=le[V];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Qe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function pe(I){st.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function We(I,ce){let z=l.get(ce);z===void 0&&(z=new WeakMap,l.set(ce,z));let j=z.get(I);j===void 0&&(j=t.getUniformBlockIndex(ce,I.name),z.set(I,j))}function He(I,ce){let j=l.get(ce).get(I);a.get(ce)!==j&&(t.uniformBlockBinding(ce,j,I.__bindingPointIndex),a.set(ce,j))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},V=null,le={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,T=null,y=null,E=null,C=null,R=new se(0,0,0),A=0,U=!1,q=null,v=null,S=null,H=null,k=null,Qe.set(0,0,t.canvas.width,t.canvas.height),st.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:he,bindFramebuffer:Be,drawBuffers:Pe,useProgram:qe,setBlending:P,setMaterial:hn,setFlipSided:Ge,setCullFace:Ke,setLineWidth:Ie,setPolygonOffset:_t,setScissorTest:Ne,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Le,updateUBOMapping:We,uniformBlockBinding:He,texStorage2D:et,texStorage3D:J,texSubImage2D:X,texSubImage3D:Te,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:De,viewport:pe,reset:vt}}function Og(t,e,n,i){let s=qT(i);switch(n){case l0:return t*e;case h0:return t*e;case u0:return t*e*2;case qd:return t*e/s.components*s.byteLength;case Yd:return t*e/s.components*s.byteLength;case d0:return t*e*2/s.components*s.byteLength;case jd:return t*e*2/s.components*s.byteLength;case c0:return t*e*3/s.components*s.byteLength;case ni:return t*e*4/s.components*s.byteLength;case Kd:return t*e*4/s.components*s.byteLength;case Ol:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fu:case ku:return Math.max(t,16)*Math.max(e,8)/4;case Ou:case Bu:return Math.max(t,8)*Math.max(e,8)/2;case Hu:case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ju:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hl:case id:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case f0:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case od:case ad:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qT(t){switch(t){case os:case r0:return{byteLength:1,components:1};case ca:case o0:case In:return{byteLength:2,components:1};case Wd:case Xd:return{byteLength:2,components:4};case mr:case Gd:case Ei:return{byteLength:4,components:1};case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function YT(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return f?new OffscreenCanvas(b,x):ha("canvas")}function _(b,x,O){let Y=1,Z=Ne(b);if((Z.width>O||Z.height>O)&&(Y=O/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);u===void 0&&(u=g(X,Te));let ie=x?g(X,Te):u;return ie.width=X,ie.height=Te,ie.getContext("2d").drawImage(b,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Te+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==gn&&b.minFilter!==Cn}function m(b){t.generateMipmap(b)}function T(b,x,O,Y,Z=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===t.RED&&(O===t.FLOAT&&(X=t.R32F),O===t.HALF_FLOAT&&(X=t.R16F),O===t.UNSIGNED_BYTE&&(X=t.R8)),x===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.R8UI),O===t.UNSIGNED_SHORT&&(X=t.R16UI),O===t.UNSIGNED_INT&&(X=t.R32UI),O===t.BYTE&&(X=t.R8I),O===t.SHORT&&(X=t.R16I),O===t.INT&&(X=t.R32I)),x===t.RG&&(O===t.FLOAT&&(X=t.RG32F),O===t.HALF_FLOAT&&(X=t.RG16F),O===t.UNSIGNED_BYTE&&(X=t.RG8)),x===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RG8UI),O===t.UNSIGNED_SHORT&&(X=t.RG16UI),O===t.UNSIGNED_INT&&(X=t.RG32UI),O===t.BYTE&&(X=t.RG8I),O===t.SHORT&&(X=t.RG16I),O===t.INT&&(X=t.RG32I)),x===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RGB8UI),O===t.UNSIGNED_SHORT&&(X=t.RGB16UI),O===t.UNSIGNED_INT&&(X=t.RGB32UI),O===t.BYTE&&(X=t.RGB8I),O===t.SHORT&&(X=t.RGB16I),O===t.INT&&(X=t.RGB32I)),x===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),O===t.UNSIGNED_INT&&(X=t.RGBA32UI),O===t.BYTE&&(X=t.RGBA8I),O===t.SHORT&&(X=t.RGBA16I),O===t.INT&&(X=t.RGBA32I)),x===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),x===t.RGBA){let Te=Z?Gl:$e.getTransfer(Y);O===t.FLOAT&&(X=t.RGBA32F),O===t.HALF_FLOAT&&(X=t.RGBA16F),O===t.UNSIGNED_BYTE&&(X=Te===yt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(b,x){let O;return b?x===null||x===mr||x===io?O=t.DEPTH24_STENCIL8:x===Ei?O=t.DEPTH32F_STENCIL8:x===ca&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mr||x===io?O=t.DEPTH_COMPONENT24:x===Ei?O=t.DEPTH_COMPONENT32F:x===ca&&(O=t.DEPTH_COMPONENT16),O}function E(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function C(b){let x=b.target;x.removeEventListener("dispose",C),A(x),x.isVideoTexture&&h.delete(x)}function R(b){let x=b.target;x.removeEventListener("dispose",R),q(x)}function A(b){let x=i.get(b);if(x.__webglInit===void 0)return;let O=b.source,Y=d.get(O);if(Y){let Z=Y[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&U(b),Object.keys(Y).length===0&&d.delete(O)}i.remove(b)}function U(b){let x=i.get(b);t.deleteTexture(x.__webglTexture);let O=b.source,Y=d.get(O);delete Y[x.__cacheKey],o.memory.textures--}function q(b){let x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Z=0;Z<x.__webglFramebuffer[Y].length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[Y][Z]);else t.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=b.textures;for(let Y=0,Z=O.length;Y<Z;Y++){let X=i.get(O[Y]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(b)}let v=0;function S(){v=0}function H(){let b=v;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),v+=1,b}function k(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function G(b,x){let O=i.get(b);if(b.isVideoTexture&&Ie(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(O,b,x);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+x)}function K(b,x){let O=i.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+x)}function B(b,x){let O=i.get(b);if(b.version>0&&O.__version!==b.version){st(O,b,x);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+x)}function $(b,x){let O=i.get(b);if(b.version>0&&O.__version!==b.version){W(O,b,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+x)}let V={[pr]:t.REPEAT,[ss]:t.CLAMP_TO_EDGE,[la]:t.MIRRORED_REPEAT},le={[gn]:t.NEAREST,[zd]:t.NEAREST_MIPMAP_NEAREST,[jr]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[sa]:t.LINEAR_MIPMAP_NEAREST,[Pi]:t.LINEAR_MIPMAP_LINEAR},ne={[D1]:t.NEVER,[V1]:t.ALWAYS,[O1]:t.LESS,[m0]:t.LEQUAL,[F1]:t.EQUAL,[H1]:t.GEQUAL,[B1]:t.GREATER,[k1]:t.NOTEQUAL};function ge(b,x){if(x.type===Ei&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===sa||x.magFilter===jr||x.magFilter===Pi||x.minFilter===Cn||x.minFilter===sa||x.minFilter===jr||x.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,V[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,V[x.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,V[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,le[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,le[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==jr&&x.minFilter!==Pi||x.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",C));let Y=x.source,Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));let X=k(x);if(X!==b.__cacheKey){Z[X]===void 0&&(Z[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[X].usedTimes++;let Te=Z[b.__cacheKey];Te!==void 0&&(Z[b.__cacheKey].usedTimes--,Te.usedTimes===0&&U(x)),b.__cacheKey=X,b.__webglTexture=Z[X].texture}return O}function st(b,x,O){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);let Z=Qe(b,x),X=x.source;n.bindTexture(Y,b.__webglTexture,t.TEXTURE0+O);let Te=i.get(X);if(X.version!==Te.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);let ie=$e.getPrimaries($e.workingColorSpace),de=x.colorSpace===As?null:$e.getPrimaries(x.colorSpace),et=x.colorSpace===As||ie===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let J=_(x.image,!1,s.maxTextureSize);J=_t(x,J);let fe=r.convert(x.format,x.colorSpace),Le=r.convert(x.type),De=T(x.internalFormat,fe,Le,x.colorSpace,x.isVideoTexture);ge(Y,x);let pe,We=x.mipmaps,He=x.isVideoTexture!==!0,vt=Te.__version===void 0||Z===!0,I=X.dataReady,ce=E(x,J);if(x.isDepthTexture)De=y(x.format===so,x.type),vt&&(He?n.texStorage2D(t.TEXTURE_2D,1,De,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,De,J.width,J.height,0,fe,Le,null));else if(x.isDataTexture)if(We.length>0){He&&vt&&n.texStorage2D(t.TEXTURE_2D,ce,De,We[0].width,We[0].height);for(let z=0,j=We.length;z<j;z++)pe=We[z],He?I&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,Le,pe.data):n.texImage2D(t.TEXTURE_2D,z,De,pe.width,pe.height,0,fe,Le,pe.data);x.generateMipmaps=!1}else He?(vt&&n.texStorage2D(t.TEXTURE_2D,ce,De,J.width,J.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,fe,Le,J.data)):n.texImage2D(t.TEXTURE_2D,0,De,J.width,J.height,0,fe,Le,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,We[0].width,We[0].height,J.depth);for(let z=0,j=We.length;z<j;z++)if(pe=We[z],x.format!==ni)if(fe!==null)if(He){if(I)if(x.layerUpdates.size>0){let oe=Og(pe.width,pe.height,x.format,x.type);for(let re of x.layerUpdates){let ze=pe.data.subarray(re*oe/pe.data.BYTES_PER_ELEMENT,(re+1)*oe/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,re,pe.width,pe.height,1,fe,ze,0,0)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,J.depth,fe,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,De,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,J.depth,fe,Le,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,De,pe.width,pe.height,J.depth,0,fe,Le,pe.data)}else{He&&vt&&n.texStorage2D(t.TEXTURE_2D,ce,De,We[0].width,We[0].height);for(let z=0,j=We.length;z<j;z++)pe=We[z],x.format!==ni?fe!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,z,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?I&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,fe,Le,pe.data):n.texImage2D(t.TEXTURE_2D,z,De,pe.width,pe.height,0,fe,Le,pe.data)}else if(x.isDataArrayTexture)if(He){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,J.width,J.height,J.depth),I)if(x.layerUpdates.size>0){let z=Og(J.width,J.height,x.format,x.type);for(let j of x.layerUpdates){let oe=J.data.subarray(j*z/J.data.BYTES_PER_ELEMENT,(j+1)*z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,J.width,J.height,1,fe,Le,oe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Le,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,J.width,J.height,J.depth,0,fe,Le,J.data);else if(x.isData3DTexture)He?(vt&&n.texStorage3D(t.TEXTURE_3D,ce,De,J.width,J.height,J.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Le,J.data)):n.texImage3D(t.TEXTURE_3D,0,De,J.width,J.height,J.depth,0,fe,Le,J.data);else if(x.isFramebufferTexture){if(vt)if(He)n.texStorage2D(t.TEXTURE_2D,ce,De,J.width,J.height);else{let z=J.width,j=J.height;for(let oe=0;oe<ce;oe++)n.texImage2D(t.TEXTURE_2D,oe,De,z,j,0,fe,Le,null),z>>=1,j>>=1}}else if(We.length>0){if(He&&vt){let z=Ne(We[0]);n.texStorage2D(t.TEXTURE_2D,ce,De,z.width,z.height)}for(let z=0,j=We.length;z<j;z++)pe=We[z],He?I&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,fe,Le,pe):n.texImage2D(t.TEXTURE_2D,z,De,fe,Le,pe);x.generateMipmaps=!1}else if(He){if(vt){let z=Ne(J);n.texStorage2D(t.TEXTURE_2D,ce,De,z.width,z.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Le,J)}else n.texImage2D(t.TEXTURE_2D,0,De,fe,Le,J);p(x)&&m(Y),Te.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function W(b,x,O){if(x.image.length!==6)return;let Y=Qe(b,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);let X=i.get(Z);if(Z.version!==X.__version||Y===!0){n.activeTexture(t.TEXTURE0+O);let Te=$e.getPrimaries($e.workingColorSpace),ie=x.colorSpace===As?null:$e.getPrimaries(x.colorSpace),de=x.colorSpace===As||Te===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let et=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!et&&!J?fe[j]=_(x.image[j],!0,s.maxCubemapSize):fe[j]=J?x.image[j].image:x.image[j],fe[j]=_t(x,fe[j]);let Le=fe[0],De=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),We=T(x.internalFormat,De,pe,x.colorSpace),He=x.isVideoTexture!==!0,vt=X.__version===void 0||Y===!0,I=Z.dataReady,ce=E(x,Le);ge(t.TEXTURE_CUBE_MAP,x);let z;if(et){He&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,Le.width,Le.height);for(let j=0;j<6;j++){z=fe[j].mipmaps;for(let oe=0;oe<z.length;oe++){let re=z[oe];x.format!==ni?De!==null?He?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,re.width,re.height,De,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,We,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,re.width,re.height,De,pe,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,We,re.width,re.height,0,De,pe,re.data)}}}else{if(z=x.mipmaps,He&&vt){z.length>0&&ce++;let j=Ne(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,We,j.width,j.height)}for(let j=0;j<6;j++)if(J){He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,De,pe,fe[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,fe[j].width,fe[j].height,0,De,pe,fe[j].data);for(let oe=0;oe<z.length;oe++){let ze=z[oe].image[j].image;He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,ze.width,ze.height,De,pe,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,We,ze.width,ze.height,0,De,pe,ze.data)}}else{He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,pe,fe[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,De,pe,fe[j]);for(let oe=0;oe<z.length;oe++){let re=z[oe];He?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,De,pe,re.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,We,De,pe,re.image[j])}}}p(x)&&m(t.TEXTURE_CUBE_MAP),X.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Q(b,x,O,Y,Z,X){let Te=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),de=T(O.internalFormat,Te,ie,O.colorSpace);if(!i.get(x).__hasExternalTextures){let J=Math.max(1,x.width>>X),fe=Math.max(1,x.height>>X);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,X,de,J,fe,x.depth,0,Te,ie,null):n.texImage2D(Z,X,de,J,fe,0,Te,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,Z,i.get(O).__webglTexture,0,Ge(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,Z,i.get(O).__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(b,x,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){let Y=x.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=y(x.stencilBuffer,Z),Te=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=Ge(x);Ke(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,X,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,X,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,X,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,b)}else{let Y=x.textures;for(let Z=0;Z<Y.length;Z++){let X=Y[Z],Te=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),de=T(X.internalFormat,Te,ie,X.colorSpace),et=Ge(x);O&&Ke(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,de,x.width,x.height):Ke(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,de,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,de,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);let Y=i.get(x.depthTexture).__webglTexture,Z=Ge(x);if(x.depthTexture.format===$r)Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(x.depthTexture.format===so)Ke(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(b){let x=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let Y=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=Y}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");he(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=t.createRenderbuffer(),me(x.__webglDepthbuffer[Y],b,!1);else{let Z=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),me(x.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,Z)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(b,x,O){let Y=i.get(b);x!==void 0&&Q(Y.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Be(b)}function qe(b){let x=b.texture,O=i.get(b),Y=i.get(x);b.addEventListener("dispose",R);let Z=b.textures,X=b.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[ie][de]=t.createFramebuffer()}else O.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)O.__webglFramebuffer[ie]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ie=0,de=Z.length;ie<de;ie++){let et=i.get(Z[ie]);et.__webglTexture===void 0&&(et.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ke(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){let de=Z[ie];O.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);let et=r.convert(de.format,de.colorSpace),J=r.convert(de.type),fe=T(de.internalFormat,et,J,de.colorSpace,b.isXRRenderTarget===!0),Le=Ge(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,fe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),me(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(t.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Q(O.__webglFramebuffer[ie][de],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de);else Q(O.__webglFramebuffer[ie],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ie=0,de=Z.length;ie<de;ie++){let et=Z[ie],J=i.get(et);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),ge(t.TEXTURE_2D,et),Q(O.__webglFramebuffer,b,et,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),p(et)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,Y.__webglTexture),ge(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Q(O.__webglFramebuffer[de],b,x,t.COLOR_ATTACHMENT0,ie,de);else Q(O.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,ie,0);p(x)&&m(ie),n.unbindTexture()}b.depthBuffer&&Be(b)}function at(b){let x=b.textures;for(let O=0,Y=x.length;O<Y;O++){let Z=x[O];if(p(Z)){let X=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(Z).__webglTexture;n.bindTexture(X,Te),m(X),n.unbindTexture()}}}let Ye=[],P=[];function hn(b){if(b.samples>0){if(Ke(b)===!1){let x=b.textures,O=b.width,Y=b.height,Z=t.COLOR_BUFFER_BIT,X=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(b),ie=x.length>1;if(ie)for(let de=0;de<x.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let de=0;de<x.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]);let et=i.get(x[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,O,Y,0,0,O,Y,Z,t.NEAREST),l===!0&&(Ye.length=0,P.length=0,Ye.push(t.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ye.push(X),P.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let de=0;de<x.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Te.__webglColorRenderbuffer[de]);let et=i.get(x[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Ge(b){return Math.min(s.maxSamples,b.samples)}function Ke(b){let x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ie(b){let x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function _t(b,x){let O=b.colorSpace,Y=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==rn&&O!==As&&($e.getTransfer(O)===yt?(Y!==ni||Z!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=Pe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ke}function jT(t,e){function n(i,s=As){let r,o=$e.getTransfer(s);if(i===os)return t.UNSIGNED_BYTE;if(i===Wd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===a0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===r0)return t.BYTE;if(i===o0)return t.SHORT;if(i===ca)return t.UNSIGNED_SHORT;if(i===Gd)return t.INT;if(i===mr)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===In)return t.HALF_FLOAT;if(i===l0)return t.ALPHA;if(i===c0)return t.RGB;if(i===ni)return t.RGBA;if(i===h0)return t.LUMINANCE;if(i===u0)return t.LUMINANCE_ALPHA;if(i===$r)return t.DEPTH_COMPONENT;if(i===so)return t.DEPTH_STENCIL;if(i===qd)return t.RED;if(i===Yd)return t.RED_INTEGER;if(i===d0)return t.RG;if(i===jd)return t.RG_INTEGER;if(i===Kd)return t.RGBA_INTEGER;if(i===Ol||i===Fl||i===Bl||i===kl)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Fu||i===Bu||i===ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hu||i===Vu||i===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hu||i===Vu)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gu||i===Wu||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===Zu||i===$u||i===Ju||i===Qu||i===ed||i===td||i===nd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ju)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ku)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ju)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hl||i===id||i===sd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Hl)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===id)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===f0||i===rd||i===od||i===ad)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===od)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ad)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Ed=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},KT={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=n.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let s=new cn,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Nt({vertexShader:ZT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Td=class extends Ps{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=new Sd,p=n.getContextAttributes(),m=null,T=null,y=[],E=[],C=new Me,R=null,A=new Kt;A.layers.enable(1),A.viewport=new lt;let U=new Kt;U.layers.enable(2),U.viewport=new lt;let q=[A,U],v=new Ed;v.layers.enable(1),v.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=y[W];return Q===void 0&&(Q=new aa,y[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=y[W];return Q===void 0&&(Q=new aa,y[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=y[W];return Q===void 0&&(Q=new aa,y[W]=Q),Q.getHandSpace()};function k(W){let Q=E.indexOf(W.inputSource);if(Q===-1)return;let me=y[Q];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let W=0;W<y.length;W++){let Q=E[W];Q!==null&&(E[W]=null,y[W].disconnect(Q))}S=null,H=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,s=null,T=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new sn(f.framebufferWidth,f.framebufferHeight,{format:ni,type:os,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,me=null,he=null;p.depth&&(he=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=p.stencil?so:$r,me=p.stencil?io:mr);let Be={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new sn(d.textureWidth,d.textureHeight,{format:ni,type:os,depthTexture:new nc(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(W){for(let Q=0;Q<W.removed.length;Q++){let me=W.removed[Q],he=E.indexOf(me);he>=0&&(E[he]=null,y[he].disconnect(me))}for(let Q=0;Q<W.added.length;Q++){let me=W.added[Q],he=E.indexOf(me);if(he===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=E.length){E.push(me),he=Pe;break}else if(E[Pe]===null){E[Pe]=me,he=Pe;break}if(he===-1)break}let Be=y[he];Be&&Be.connect(me)}}let B=new w,$=new w;function V(W,Q,me){B.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);let he=B.distanceTo($),Be=Q.projectionMatrix.elements,Pe=me.projectionMatrix.elements,qe=Be[14]/(Be[10]-1),at=Be[14]/(Be[10]+1),Ye=(Be[9]+1)/Be[5],P=(Be[9]-1)/Be[5],hn=(Be[8]-1)/Be[0],Ge=(Pe[8]+1)/Pe[0],Ke=qe*hn,Ie=qe*Ge,_t=he/(-hn+Ge),Ne=_t*-hn;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ(_t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Be[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let b=qe+_t,x=at+_t,O=Ke-Ne,Y=Ie+(he-Ne),Z=Ye*at/x*b,X=P*at/x*b;W.projectionMatrix.makePerspective(O,Y,Z,X,b,x),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function le(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,me=W.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(me=_.depthFar)),v.near=U.near=A.near=Q,v.far=U.far=A.far=me,(S!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,H=v.far);let he=W.parent,Be=v.cameras;le(v,he);for(let Pe=0;Pe<Be.length;Pe++)le(Be[Pe],he);Be.length===2?V(v,A,U):v.projectionMatrix.copy(A.projectionMatrix),ne(W,v,he)};function ne(W,Q,me){me===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ao*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ge=null;function Qe(W,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let he=!1;me.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let Pe=0;Pe<me.length;Pe++){let qe=me[Pe],at=null;if(f!==null)at=f.getViewport(qe);else{let P=u.getViewSubImage(d,qe);at=P.viewport,Pe===0&&(e.setRenderTargetTextures(T,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(T))}let Ye=q[Pe];Ye===void 0&&(Ye=new Kt,Ye.layers.enable(Pe),Ye.viewport=new lt,q[Pe]=Ye),Ye.matrix.fromArray(qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(at.x,at.y,at.width,at.height),Pe===0&&(v.matrix.copy(Ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),he===!0&&v.cameras.push(Ye)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Pe=u.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,s.renderState)}}for(let me=0;me<y.length;me++){let he=E[me],Be=y[me];he!==null&&Be!==void 0&&Be.update(he,Q,c||o)}ge&&ge(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let st=new y0;st.setAnimationLoop(Qe),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}},cr=new Zt,JT=new Ee;function QT(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,x0(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),y=T.envMap,E=T.envMapRotation;y&&(p.envMap.value=y,cr.copy(E),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),p.envMapRotation.value.setFromMatrix4(JT.makeRotationFromEuler(cr)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=y*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ew(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){let E=y.program;i.uniformBlockBinding(T,E)}function c(T,y){let E=s[T.id];E===void 0&&(g(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",p));let C=y.program;i.updateUBOMapping(T,C);let R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){let y=u();T.__bindingPointIndex=y;let E=t.createBuffer(),C=T.__size,R=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let y=s[T.id],E=T.uniforms,C=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let R=0,A=E.length;R<A;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let q=0,v=U.length;q<v;q++){let S=U[q];if(f(S,R,q,C)===!0){let H=S.__offset,k=Array.isArray(S.value)?S.value:[S.value],G=0;for(let K=0;K<k.length;K++){let B=k[K],$=_(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,H+G,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,S.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(T,y,E,C){let R=T.value,A=y+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{let U=C[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(T){let y=T.uniforms,E=0,C=16;for(let A=0,U=y.length;A<U;A++){let q=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,S=q.length;v<S;v++){let H=q[v],k=Array.isArray(H.value)?H.value:[H.value];for(let G=0,K=k.length;G<K;G++){let B=k[G],$=_(B),V=E%C,le=V%$.boundary,ne=V+le;E+=le,ne!==0&&C-ne<$.storage&&(E+=C-ne),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=$.storage}}}let R=E%C;return R>0&&(E+=C-R),T.__size=E,T.__cache={},this}function _(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){let y=T.target;y.removeEventListener("dispose",p);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let T in s)t.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var ic=class{constructor(e={}){let{canvas:n=sM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Cs,this.toneMappingExposure=1;let y=this,E=!1,C=0,R=0,A=null,U=-1,q=null,v=new lt,S=new lt,H=null,k=new se(0),G=0,K=n.width,B=n.height,$=1,V=null,le=null,ne=new lt(0,0,K,B),ge=new lt(0,0,K,B),Qe=!1,st=new da,W=!1,Q=!1,me=new Ee,he=new Ee,Be=new w,Pe=new lt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function Ye(){return A===null?$:1}let P=i;function hn(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r169"),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",re,!1),P===null){let L="webgl2";if(P=hn(L,M),P===null)throw hn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ge,Ke,Ie,_t,Ne,b,x,O,Y,Z,X,Te,ie,de,et,J,fe,Le,De,pe,We,He,vt,I;function ce(){Ge=new gS(P),Ge.init(),He=new jT(P,Ge),Ke=new hS(P,Ge,e,He),Ie=new XT(P),Ke.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),_t=new xS(P),Ne=new LT,b=new YT(P,Ge,Ie,Ne,Ke,He,_t),x=new dS(y),O=new mS(y),Y=new bM(P),vt=new lS(P,Y),Z=new _S(P,Y,_t,vt),X=new MS(P,Z,Y,_t),De=new yS(P,Ke,b),J=new uS(Ne),Te=new IT(y,x,O,Ge,Ke,vt,J),ie=new QT(y,Ne),de=new NT,et=new HT(Ge),Le=new aS(y,x,O,Ie,X,d,l),fe=new GT(y,X,Ke),I=new ew(P,_t,Ke,Ie),pe=new cS(P,Ge,_t),We=new vS(P,Ge,_t),_t.programs=Te.programs,y.capabilities=Ke,y.extensions=Ge,y.properties=Ne,y.renderLists=de,y.shadowMap=fe,y.state=Ie,y.info=_t}ce();let z=new Td(y,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(K,B,!1))},this.getSize=function(M){return M.set(K,B)},this.setSize=function(M,L,D=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,B=L,n.width=Math.floor(M*$),n.height=Math.floor(L*$),D===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(K*$,B*$).floor()},this.setDrawingBufferSize=function(M,L,D){K=M,B=L,$=D,n.width=Math.floor(M*D),n.height=Math.floor(L*D),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,L,D,F){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,L,D,F),Ie.viewport(v.copy(ne).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,L,D,F){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,L,D,F),Ie.scissor(S.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){Ie.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(M=!0,L=!0,D=!0){let F=0;if(M){let N=!1;if(A!==null){let ee=A.texture.format;N=ee===Kd||ee===jd||ee===Yd}if(N){let ee=A.texture.type,ae=ee===os||ee===mr||ee===ca||ee===io||ee===Wd||ee===Xd,_e=Le.getClearColor(),ye=Le.getClearAlpha(),Oe=_e.r,Fe=_e.g,be=_e.b;ae?(f[0]=Oe,f[1]=Fe,f[2]=be,f[3]=ye,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Oe,g[1]=Fe,g[2]=be,g[3]=ye,P.clearBufferiv(P.COLOR,0,g))}else F|=P.COLOR_BUFFER_BIT}L&&(F|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),et.dispose(),Ne.dispose(),x.dispose(),O.dispose(),X.dispose(),vt.dispose(),I.dispose(),Te.dispose(),z.dispose(),z.removeEventListener("sessionstart",il),z.removeEventListener("sessionend",qo),Ki.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=_t.autoReset,L=fe.enabled,D=fe.autoUpdate,F=fe.needsUpdate,N=fe.type;ce(),_t.autoReset=M,fe.enabled=L,fe.autoUpdate=D,fe.needsUpdate=F,fe.type=N}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ze(M){let L=M.target;L.removeEventListener("dispose",ze),Ut(L)}function Ut(M){un(M),Ne.remove(M)}function un(M){let L=Ne.get(M).programs;L!==void 0&&(L.forEach(function(D){Te.releaseProgram(D)}),M.isShaderMaterial&&Te.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,D,F,N,ee){L===null&&(L=qe);let ae=N.isMesh&&N.matrixWorld.determinant()<0,_e=km(M,L,D,F,N);Ie.setMaterial(F,ae);let ye=D.index,Oe=1;if(F.wireframe===!0){if(ye=Z.getWireframeAttribute(D),ye===void 0)return;Oe=2}let Fe=D.drawRange,be=D.attributes.position,ft=Fe.start*Oe,wt=(Fe.start+Fe.count)*Oe;ee!==null&&(ft=Math.max(ft,ee.start*Oe),wt=Math.min(wt,(ee.start+ee.count)*Oe)),ye!==null?(ft=Math.max(ft,0),wt=Math.min(wt,ye.count)):be!=null&&(ft=Math.max(ft,0),wt=Math.min(wt,be.count));let Dt=wt-ft;if(Dt<0||Dt===1/0)return;vt.setup(N,F,_e,D,ye);let Bn,ct=pe;if(ye!==null&&(Bn=Y.get(ye),ct=We,ct.setIndex(Bn)),N.isMesh)F.wireframe===!0?(Ie.setLineWidth(F.wireframeLinewidth*Ye()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(N.isLine){let Ae=F.linewidth;Ae===void 0&&(Ae=1),Ie.setLineWidth(Ae*Ye()),N.isLineSegments?ct.setMode(P.LINES):N.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else N.isPoints?ct.setMode(P.POINTS):N.isSprite&&ct.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ct.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ct.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ae=N._multiDrawStarts,an=N._multiDrawCounts,ht=N._multiDrawCount,_i=ye?Y.get(ye).bytesPerElement:1,Lr=Ne.get(F).currentProgram.getUniforms();for(let kn=0;kn<ht;kn++)Lr.setValue(P,"_gl_DrawID",kn),ct.render(Ae[kn]/_i,an[kn])}else if(N.isInstancedMesh)ct.renderInstances(ft,Dt,N.count);else if(D.isInstancedBufferGeometry){let Ae=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,an=Math.min(D.instanceCount,Ae);ct.renderInstances(ft,Dt,an)}else ct.render(ft,Dt)};function Ze(M,L,D){M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,ir(M,L,D),M.side=Li,M.needsUpdate=!0,ir(M,L,D),M.side=Rn):ir(M,L,D)}this.compile=function(M,L,D=null){D===null&&(D=M),p=et.get(D),p.init(L),T.push(p),D.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==D&&M.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let F=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ee=N.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){let _e=ee[ae];Ze(_e,D,N),F.add(_e)}else Ze(ee,D,N),F.add(ee)}),T.pop(),p=null,F},this.compileAsync=function(M,L,D=null){let F=this.compile(M,L,D);return new Promise(N=>{function ee(){if(F.forEach(function(ae){Ne.get(ae).currentProgram.isReady()&&F.delete(ae)}),F.size===0){N(M);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let dn=null;function gi(M){dn&&dn(M)}function il(){Ki.stop()}function qo(){Ki.start()}let Ki=new y0;Ki.setAnimationLoop(gi),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(M){dn=M,z.setAnimationLoop(M),M===null?Ki.stop():Ki.start()},z.addEventListener("sessionstart",il),z.addEventListener("sessionend",qo),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,A),p=et.get(M,T.length),p.init(L),T.push(p),he.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),st.setFromProjectionMatrix(he),Q=this.localClippingEnabled,W=J.init(this.clippingPlanes,Q),_=de.get(M,m.length),_.init(),m.push(_),z.enabled===!0&&z.isPresenting===!0){let ee=y.xr.getDepthSensingMesh();ee!==null&&Yo(ee,L,-1/0,y.sortObjects)}Yo(M,L,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(V,le),at=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,at&&Le.addToRenderList(_,M),this.info.render.frame++,W===!0&&J.beginShadows();let D=p.state.shadowsArray;fe.render(D,M,L),W===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=_.opaque,N=_.transmissive;if(p.setupLights(),L.isArrayCamera){let ee=L.cameras;if(N.length>0)for(let ae=0,_e=ee.length;ae<_e;ae++){let ye=ee[ae];rl(F,N,M,ye)}at&&Le.render(M);for(let ae=0,_e=ee.length;ae<_e;ae++){let ye=ee[ae];sl(_,M,ye,ye.viewport)}}else N.length>0&&rl(F,N,M,L),at&&Le.render(M),sl(_,M,L);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,L),vt.resetDefaultState(),U=-1,q=null,T.pop(),T.length>0?(p=T[T.length-1],W===!0&&J.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Yo(M,L,D,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)D=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||st.intersectsSprite(M)){F&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);let ae=X.update(M),_e=M.material;_e.visible&&_.push(M,ae,_e,D,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||st.intersectsObject(M))){let ae=X.update(M),_e=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Pe.copy(ae.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(_e)){let ye=ae.groups;for(let Oe=0,Fe=ye.length;Oe<Fe;Oe++){let be=ye[Oe],ft=_e[be.materialIndex];ft&&ft.visible&&_.push(M,ae,ft,D,Pe.z,be)}}else _e.visible&&_.push(M,ae,_e,D,Pe.z,null)}}let ee=M.children;for(let ae=0,_e=ee.length;ae<_e;ae++)Yo(ee[ae],L,D,F)}function sl(M,L,D,F){let N=M.opaque,ee=M.transmissive,ae=M.transparent;p.setupLightsView(D),W===!0&&J.setGlobalState(y.clippingPlanes,D),F&&Ie.viewport(v.copy(F)),N.length>0&&Pr(N,L,D),ee.length>0&&Pr(ee,L,D),ae.length>0&&Pr(ae,L,D),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function rl(M,L,D,F){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new sn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?In:os,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ee=p.state.transmissionRenderTarget[F.id],ae=F.viewport||v;ee.setSize(ae.z,ae.w);let _e=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(k),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),at&&Le.render(D);let ye=y.toneMapping;y.toneMapping=Cs;let Oe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),W===!0&&J.setGlobalState(y.clippingPlanes,F),Pr(M,D,F),b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let be=0,ft=L.length;be<ft;be++){let wt=L[be],Dt=wt.object,Bn=wt.geometry,ct=wt.material,Ae=wt.group;if(ct.side===Rn&&Dt.layers.test(F.layers)){let an=ct.side;ct.side=_n,ct.needsUpdate=!0,Ir(Dt,D,F,Bn,ct,Ae),ct.side=an,ct.needsUpdate=!0,Fe=!0}}Fe===!0&&(b.updateMultisampleRenderTarget(ee),b.updateRenderTargetMipmap(ee))}y.setRenderTarget(_e),y.setClearColor(k,G),Oe!==void 0&&(F.viewport=Oe),y.toneMapping=ye}function Pr(M,L,D){let F=L.isScene===!0?L.overrideMaterial:null;for(let N=0,ee=M.length;N<ee;N++){let ae=M[N],_e=ae.object,ye=ae.geometry,Oe=F===null?ae.material:F,Fe=ae.group;_e.layers.test(D.layers)&&Ir(_e,L,D,ye,Oe,Fe)}}function Ir(M,L,D,F,N,ee){M.onBeforeRender(y,L,D,F,N,ee),M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,L,D,F,M,ee),N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=_n,N.needsUpdate=!0,y.renderBufferDirect(D,L,F,N,M,ee),N.side=Li,N.needsUpdate=!0,y.renderBufferDirect(D,L,F,N,M,ee),N.side=Rn):y.renderBufferDirect(D,L,F,N,M,ee),M.onAfterRender(y,L,D,F,N,ee)}function ir(M,L,D){L.isScene!==!0&&(L=qe);let F=Ne.get(M),N=p.state.lights,ee=p.state.shadowsArray,ae=N.state.version,_e=Te.getParameters(M,N.state,ee,L,D),ye=Te.getProgramCacheKey(_e),Oe=F.programs;F.environment=M.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(M.isMeshStandardMaterial?O:x).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",ze),Oe=new Map,F.programs=Oe);let Fe=Oe.get(ye);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===ae)return al(M,_e),Fe}else _e.uniforms=Te.getUniforms(M),M.onBeforeCompile(_e,y),Fe=Te.acquireProgram(_e,ye),Oe.set(ye,Fe),F.uniforms=_e.uniforms;let be=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=J.uniform),al(M,_e),F.needsLights=ll(M),F.lightsStateVersion=ae,F.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=Fe,F.uniformsList=null,Fe}function ol(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function al(M,L){let D=Ne.get(M);D.outputColorSpace=L.outputColorSpace,D.batching=L.batching,D.batchingColor=L.batchingColor,D.instancing=L.instancing,D.instancingColor=L.instancingColor,D.instancingMorph=L.instancingMorph,D.skinning=L.skinning,D.morphTargets=L.morphTargets,D.morphNormals=L.morphNormals,D.morphColors=L.morphColors,D.morphTargetsCount=L.morphTargetsCount,D.numClippingPlanes=L.numClippingPlanes,D.numIntersection=L.numClipIntersection,D.vertexAlphas=L.vertexAlphas,D.vertexTangents=L.vertexTangents,D.toneMapping=L.toneMapping}function km(M,L,D,F,N){L.isScene!==!0&&(L=qe),b.resetTextureUnits();let ee=L.fog,ae=F.isMeshStandardMaterial?L.environment:null,_e=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rn,ye=(F.isMeshStandardMaterial?O:x).get(F.envMap||ae),Oe=F.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Fe=!!D.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),be=!!D.morphAttributes.position,ft=!!D.morphAttributes.normal,wt=!!D.morphAttributes.color,Dt=Cs;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=y.toneMapping);let Bn=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ct=Bn!==void 0?Bn.length:0,Ae=Ne.get(F),an=p.state.lights;if(W===!0&&(Q===!0||M!==q)){let ei=M===q&&F.id===U;J.setState(F,M,ei)}let ht=!1;F.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==an.state.version||Ae.outputColorSpace!==_e||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==ye||F.fog===!0&&Ae.fog!==ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==Fe||Ae.morphTargets!==be||Ae.morphNormals!==ft||Ae.morphColors!==wt||Ae.toneMapping!==Dt||Ae.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,Ae.__version=F.version);let _i=Ae.currentProgram;ht===!0&&(_i=ir(F,L,N));let Lr=!1,kn=!1,Gh=!1,Vt=_i.getUniforms(),ys=Ae.uniforms;if(Ie.useProgram(_i.program)&&(Lr=!0,kn=!0,Gh=!0),F.id!==U&&(U=F.id,kn=!0),Lr||q!==M){Ke.reverseDepthBuffer?(me.copy(M.projectionMatrix),oM(me),aM(me),Vt.setValue(P,"projectionMatrix",me)):Vt.setValue(P,"projectionMatrix",M.projectionMatrix),Vt.setValue(P,"viewMatrix",M.matrixWorldInverse);let ei=Vt.map.cameraPosition;ei!==void 0&&ei.setValue(P,Be.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&Vt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Vt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,kn=!0,Gh=!0)}if(N.isSkinnedMesh){Vt.setOptional(P,N,"bindMatrix"),Vt.setOptional(P,N,"bindMatrixInverse");let ei=N.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),Vt.setValue(P,"boneTexture",ei.boneTexture,b))}N.isBatchedMesh&&(Vt.setOptional(P,N,"batchingTexture"),Vt.setValue(P,"batchingTexture",N._matricesTexture,b),Vt.setOptional(P,N,"batchingIdTexture"),Vt.setValue(P,"batchingIdTexture",N._indirectTexture,b),Vt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Vt.setValue(P,"batchingColorTexture",N._colorsTexture,b));let Wh=D.morphAttributes;if((Wh.position!==void 0||Wh.normal!==void 0||Wh.color!==void 0)&&De.update(N,D,_i),(kn||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,Vt.setValue(P,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ys.envMap.value=ye,ys.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(ys.envMapIntensity.value=L.environmentIntensity),kn&&(Vt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&zh(ys,Gh),ee&&F.fog===!0&&ie.refreshFogUniforms(ys,ee),ie.refreshMaterialUniforms(ys,F,$,B,p.state.transmissionRenderTarget[M.id]),Qr.upload(P,ol(Ae),ys,b)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Qr.upload(P,ol(Ae),ys,b),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Vt.setValue(P,"center",N.center),Vt.setValue(P,"modelViewMatrix",N.modelViewMatrix),Vt.setValue(P,"normalMatrix",N.normalMatrix),Vt.setValue(P,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let ei=F.uniformsGroups;for(let Xh=0,r1=ei.length;Xh<r1;Xh++){let Hm=ei[Xh];I.update(Hm,_i),I.bind(Hm,_i)}}return _i}function zh(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function ll(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,L,D){Ne.get(M.texture).__webglTexture=L,Ne.get(M.depthTexture).__webglTexture=D;let F=Ne.get(M);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=D===void 0,F.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){let D=Ne.get(M);D.__webglFramebuffer=L,D.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,D=0){A=M,C=L,R=D;let F=!0,N=null,ee=!1,ae=!1;if(M){let ye=Ne.get(M);if(ye.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(P.FRAMEBUFFER,null),F=!1;else if(ye.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(ye.__hasExternalTextures)b.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let be=M.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&Ne.has(be)&&(M.width!==be.image.width||M.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}let Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ae=!0);let Fe=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[L])?N=Fe[L][D]:N=Fe[L],ee=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?N=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[D]:N=Fe,v.copy(M.viewport),S.copy(M.scissor),H=M.scissorTest}else v.copy(ne).multiplyScalar($).floor(),S.copy(ge).multiplyScalar($).floor(),H=Qe;if(Ie.bindFramebuffer(P.FRAMEBUFFER,N)&&F&&Ie.drawBuffers(M,N),Ie.viewport(v),Ie.scissor(S),Ie.setScissorTest(H),ee){let ye=Ne.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,D)}else if(ae){let ye=Ne.get(M.texture),Oe=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.__webglTexture,D||0,Oe)}U=-1},this.readRenderTargetPixels=function(M,L,D,F,N,ee,ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(_e=_e[ae]),_e){Ie.bindFramebuffer(P.FRAMEBUFFER,_e);try{let ye=M.texture,Oe=ye.format,Fe=ye.type;if(!Ke.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&D>=0&&D<=M.height-N&&P.readPixels(L,D,F,N,He.convert(Oe),He.convert(Fe),ee)}finally{let ye=A!==null?Ne.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(M,L,D,F,N,ee,ae){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(_e=_e[ae]),_e){let ye=M.texture,Oe=ye.format,Fe=ye.type;if(!Ke.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=M.width-F&&D>=0&&D<=M.height-N){Ie.bindFramebuffer(P.FRAMEBUFFER,_e);let be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),P.readPixels(L,D,F,N,He.convert(Oe),He.convert(Fe),0);let ft=A!==null?Ne.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,ft);let wt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rM(P,wt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(be),P.deleteSync(wt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,L=null,D=0){M.isTexture!==!0&&(Vl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,M=arguments[1]);let F=Math.pow(2,-D),N=Math.floor(M.image.width*F),ee=Math.floor(M.image.height*F),ae=L!==null?L.x:0,_e=L!==null?L.y:0;b.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,D,0,0,ae,_e,N,ee),Ie.unbindTexture()},this.copyTextureToTexture=function(M,L,D=null,F=null,N=0){M.isTexture!==!0&&(Vl("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1],L=arguments[2],N=arguments[3]||0,D=null);let ee,ae,_e,ye,Oe,Fe;D!==null?(ee=D.max.x-D.min.x,ae=D.max.y-D.min.y,_e=D.min.x,ye=D.min.y):(ee=M.image.width,ae=M.image.height,_e=0,ye=0),F!==null?(Oe=F.x,Fe=F.y):(Oe=0,Fe=0);let be=He.convert(L.format),ft=He.convert(L.type);b.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let wt=P.getParameter(P.UNPACK_ROW_LENGTH),Dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Bn=P.getParameter(P.UNPACK_SKIP_PIXELS),ct=P.getParameter(P.UNPACK_SKIP_ROWS),Ae=P.getParameter(P.UNPACK_SKIP_IMAGES),an=M.isCompressedTexture?M.mipmaps[N]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,an.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,an.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,ye),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Oe,Fe,ee,ae,be,ft,an.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Oe,Fe,an.width,an.height,be,an.data):P.texSubImage2D(P.TEXTURE_2D,N,Oe,Fe,ee,ae,be,ft,an),P.pixelStorei(P.UNPACK_ROW_LENGTH,wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Bn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),N===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(M,L,D=null,F=null,N=0){M.isTexture!==!0&&(Vl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,F=arguments[1]||null,M=arguments[2],L=arguments[3],N=arguments[4]||0);let ee,ae,_e,ye,Oe,Fe,be,ft,wt,Dt=M.isCompressedTexture?M.mipmaps[N]:M.image;D!==null?(ee=D.max.x-D.min.x,ae=D.max.y-D.min.y,_e=D.max.z-D.min.z,ye=D.min.x,Oe=D.min.y,Fe=D.min.z):(ee=Dt.width,ae=Dt.height,_e=Dt.depth,ye=0,Oe=0,Fe=0),F!==null?(be=F.x,ft=F.y,wt=F.z):(be=0,ft=0,wt=0);let Bn=He.convert(L.format),ct=He.convert(L.type),Ae;if(L.isData3DTexture)b.setTexture3D(L,0),Ae=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)b.setTexture2DArray(L,0),Ae=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let an=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_i=P.getParameter(P.UNPACK_SKIP_PIXELS),Lr=P.getParameter(P.UNPACK_SKIP_ROWS),kn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fe),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ae,N,be,ft,wt,ee,ae,_e,Bn,ct,Dt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Ae,N,be,ft,wt,ee,ae,_e,Bn,Dt.data):P.texSubImage3D(Ae,N,be,ft,wt,ee,ae,_e,Bn,ct,Dt),P.pixelStorei(P.UNPACK_ROW_LENGTH,an),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_i),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kn),N===0&&L.generateMipmaps&&P.generateMipmap(Ae),Ie.unbindTexture()},this.initRenderTarget=function(M){Ne.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),Ie.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Ie.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===Zd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Tc?"display-p3":"srgb"}};var sc=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ls=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ld,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new w,Us=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Mi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Mi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Mi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Mi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new ke(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Fg=new w,Bg=new lt,kg=new lt,tw=new w,Hg=new Ee,Cl=new w,yu=new zn,Vg=new Ee,Mu=new lo,ho=class extends zt{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wm,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yu.copy(this.boundingSphere),yu.applyMatrix4(s),e.ray.intersectsSphere(yu)!==!1&&(Vg.copy(s).invert(),Mu.copy(e.ray).applyMatrix4(Vg),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Mu)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){e.fromBufferAttribute(n,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P1?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,s=this.geometry;Bg.fromBufferAttribute(s.attributes.skinIndex,e),kg.fromBufferAttribute(s.attributes.skinWeight,e),Fg.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let r=0;r<4;r++){let o=kg.getComponent(r);if(o!==0){let a=Bg.getComponent(r);Hg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(tw.copy(Fg).applyMatrix4(Hg),o)}}return n.applyMatrix4(this.bindMatrixInverse)}},fa=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},rc=class extends cn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=gn,h=gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zg=new Ee,nw=new Ee,Ui=class t{constructor(e=[],n=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new Ee;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:nw;zg.multiplyMatrices(a,n[r]),zg.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new rc(n,e,e,ni,Ei);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=n[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new fa),this.bones.push(o),this.boneInverses.push(new Ee().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,r=n.length;s<r;s++){let o=n[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},gr=class extends ke{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Ee,Gg=new Ee,Pl=[],Wg=new ii,iw=new Ee,Qo=new zt,ea=new zn,oc=class extends zt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,iw)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Yr),Wg.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Wg)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Yr),ea.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(ea)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(i),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),Gg.multiplyMatrices(i,Yr),Qo.matrixWorld=Gg,Qo.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){let l=Pl[o];l.instanceId=r,l.object=this,n.push(l)}Pl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rc(new Float32Array(s*this.count),s,this.count,qd,Ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pn=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new w,lc=new w,Xg=new Ee,ta=new lo,Il=new zn,Eu=new w,qg=new w,Ns=class extends mt{constructor(e=new tt,n=new Pn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ac.fromBufferAttribute(n,s-1),lc.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,e.ray.intersectsSphere(Il)===!1)return;Xg.copy(s).invert(),ta.copy(e.ray).applyMatrix4(Xg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),T=h.getX(_+1),y=Ll(this,e,ta,l,m,T);y&&n.push(y)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=Ll(this,e,ta,l,_,p);m&&n.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=Ll(this,e,ta,l,_,_+1);m&&n.push(m)}if(this.isLineLoop){let _=Ll(this,e,ta,l,g-1,f);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ll(t,e,n,i,s,r){let o=t.geometry.attributes.position;if(ac.fromBufferAttribute(o,s),lc.fromBufferAttribute(o,r),n.distanceSqToSegment(ac,lc,Eu,qg)>i)return;Eu.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:qg.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}var Yg=new w,jg=new w,Ti=class extends Ns{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Yg.fromBufferAttribute(n,s),jg.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yg.distanceTo(jg);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},cc=class extends Ns{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},pa=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kg=new Ee,wd=new lo,Ul=new zn,Nl=new w,hc=class extends mt{constructor(e=new tt,n=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),Ul.radius+=r,e.ray.intersectsSphere(Ul)===!1)return;Kg.copy(s).invert(),wd.copy(e.ray).applyMatrix4(Kg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=c.getX(g);Nl.fromBufferAttribute(u,p),Zg(Nl,p,l,s,e,n,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Nl.fromBufferAttribute(u,g),Zg(Nl,g,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zg(t,e,n,i,s,r,o){let a=wd.distanceSqToPoint(t);if(a<n){let l=new w;wd.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var uc=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},uo=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Dl(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function sw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function rw(t){function e(s,r){return t[s]-t[r]}let n=t.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function $g(t,e,n){let i=t.length,s=new t.constructor(i);for(let r=0,o=0;o!==i;++r){let a=n[r]*e;for(let l=0;l!==e;++l)s[o++]=t[a+l]}return s}function w0(t,e,n,i){let s=1,r=t[0];for(;r!==void 0&&r[i]===void 0;)r=t[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),n.push.apply(n,o)),r=t[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(n,n.length)),r=t[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),n.push(o)),r=t[s++];while(r!==void 0)}var Ds=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break t}o=n.length;break n}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bd=class extends Ds{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xm,endingEnd:Xm}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qm:r=e,a=2*n-i;break;case Ym:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qm:o=e,l=2*i-n;break;case Ym:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,T=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,E=f*p-f*_;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+T*o[c+C]+y*o[l+C]+E*o[u+C];return r}},Ad=class extends Ds{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(s-n),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Rd=class extends Ds{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(n,this.TimeBufferType),this.values=Dl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case ro:n=this.InterpolantFactoryMethodDiscrete;break;case oo:n=this.InterpolantFactoryMethodLinear;break;case qh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sw(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=n[u+g];if(_!==n[d+g]||_!==n[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)n[d+f]=n[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=oo;var Os=class extends si{constructor(e,n,i){super(e,n,i)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=ro;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends si{};dc.prototype.ValueTypeName="color";var as=class extends si{};as.prototype.ValueTypeName="number";var Cd=class extends Ds{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let h=c+a;c!==h;c+=4)ve.slerpFlat(r,0,o,c-a,o,c,l);return r}},ls=class extends si{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends si{constructor(e,n,i){super(e,n,i)}};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ro;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends si{};cs.prototype.ValueTypeName="vector";var fc=class{constructor(e="",n=-1,i=[],s=I1){this.name=e,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(aw(i[o]).scale(s));let r=new this(e.name,e.duration,n,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let n=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)n.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,n,i,s){let r=n.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=rw(l);l=$g(l,1,h),c=$g(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new as(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],n,i));return o}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,_){if(f.length!==0){let p=[],m=[];w0(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let p=[],m=[];for(let T=0;T!==d[g].morphTargets.length;++T){let y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new as(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{let f=".bones["+n[u].name+"]";i(cs,f+".position",d,"pos",s),i(ls,f+".quaternion",d,"rot",s),i(cs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,n=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];n=Math.max(n,r.times[r.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ow(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return dc;case"quaternion":return ls;case"bool":case"boolean":return Os;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function aw(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ow(t.type);if(t.times===void 0){let n=[],i=[];w0(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var Rs={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},Pd=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},lw=new Pd,hs=class{constructor(e){this.manager=e!==void 0?e:lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts={},Id=class extends Error{constructor(e,n){super(e),this.response=n}},ma=class extends hs{constructor(e){super(e)}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Rs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(ts[e]!==void 0){ts[e].push({onLoad:n,onProgress:i,onError:s});return}ts[e]=[],ts[e].push({onLoad:n,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ts[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){T();function T(){u.read().then(({done:y,value:E})=>{if(y)m.close();else{_+=E.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=h.length;R<A;R++){let U=h[R];U.onProgress&&U.onProgress(C)}m.enqueue(E),T()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Id(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Rs.add(e,c);let h=ts[e];delete ts[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ts[e];if(h===void 0)throw this.manager.itemError(e),c;delete ts[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ga=class extends hs{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Rs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;let a=ha("img");function l(){h(),Rs.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var pc=class extends hs{constructor(e){super(e)}load(e,n,i,s){let r=new cn,o=new ga(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}},fo=class extends mt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}};var Su=new Ee,Jg=new w,Qg=new w,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Jg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jg),Qg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Qg),n.updateMatrixWorld(),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ld=class extends _a{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let n=this.camera,i=ao*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},mc=class extends fo{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ld}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},e0=new Ee,na=new w,Tu=new w,Ud=class extends _a{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,n=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),Tu.copy(i.position),Tu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tu),i.updateMatrixWorld(),s.makeTranslation(-na.x,-na.y,-na.z),e0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(e0)}},gc=class extends fo{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ud}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nd=class extends _a{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends fo{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_c=class extends fo{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,s=e.length;i<s;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}};var vc=class extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Rs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{n&&n(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Rs.add(e,c),n&&n(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Rs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Rs.add(e,l),r.manager.itemStart(e)}};var xc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=t0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=t0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function t0(){return performance.now()}var Qd="\\[\\]\\.:\\/",cw=new RegExp("["+Qd+"]","g"),ef="[^"+Qd+"]",hw="[^"+Qd.replace("\\.","")+"]",uw=/((?:WC+[\/:])*)/.source.replace("WC",ef),dw=/(WCOD+)?/.source.replace("WCOD",hw),fw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ef),pw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ef),mw=new RegExp("^"+uw+dw+fw+pw+"$"),gw=["material","materials","bones","map"],Dd=class{constructor(e,n,i){let s=i||Et.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Et=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cw,"")}static parseTrackName(e){let n=mw.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);gw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Dd;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JR=new Float32Array(1);var va=class{constructor(e,n,i,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=n,this.itemSize=i,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,n){return this.type=e,this.elementSize=n,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};var yc=class extends Ti{constructor(e=1){let n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new tt;s.setAttribute("position",new ln(n,3)),s.setAttribute("color",new ln(i,3));let r=new Pn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,n,i){let s=new se,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(n),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var bc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_w=new Is(-1,1,1,-1,0,1),tf=class extends tt{constructor(){super(),this.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ln([0,2,0,0,2,0],2))}},vw=new tf,ks=class{constructor(e){this._mesh=new zt(vw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_w)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var go=class extends Wn{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ks(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ya=class extends Wn{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ac=class extends Wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let i=e.getSize(new Me);this._width=i.width,this._height=i.height,n=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(bc),this.copyPass.material.blending=Ii,this.clock=new xc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ya!==void 0&&(o instanceof ya?i=!0:o instanceof Ac&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){let n=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ea=class extends Wn{constructor(e,n,i=null,s=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,n,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var b0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var _o=class t extends Wn{constructor(e,n,i,s){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:In}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new sn(r,o,{type:In});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new sn(r,o,{type:In});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=b0;this.highPassUniforms=Ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=bc;this.copyUniforms=Ni.clone(h.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zl,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,n,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};_o.BlurDirectionX=new Me(1,0);_o.BlurDirectionY=new Me(0,1);var A0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Rc=class extends Wn{constructor(){super();let e=A0;this.uniforms=Ni.clone(e.uniforms),this.material=new uc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xw={green:"#00ff00",blue:"#0047bb",dark:"#14101f",transparent:null},R0={head:[-.02,.8],chest:[-.2,1.4],half:[-.38,2.1],full:[-.65,3.4]},C0=/FoxTail|EyeIris/i,yw=["color","shadeColorFactor","parametricRimColorFactor","matcapFactor"],Cc=class{constructor(e,n){this.S=n;let i=this.renderer=new ic({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.outputColorSpace=nn,this.scene=new sc,this.camera=new Kt(28,1,.05,50);let s=new po(16777215,Math.PI);s.position.set(.6,1.2,1.8),this.scene.add(s,new _c(16777215,.35)),this.headY=1.4,this.glowState=[],this._buildComposer()}_buildComposer(){let e=this.renderer,n=this.S;this.bloomComposer=new Ma(e,new sn(1,1,{type:In})),this.bloomComposer.renderToScreen=!1,this.bloomComposer.addPass(new Ea(this.scene,this.camera,null,new se(0),1)),this.bloomPass=new _o(new Me(256,256),n.bloomStrength,0,n.bloomThreshold),this.bloomPass.compositeMaterial.uniforms.bloomFactors.value=[1,.75,.35,.08,0],this.bloomComposer.addPass(this.bloomPass),this.composer=new Ma(e,new sn(1,1,{type:In,samples:2})),this.composer.addPass(new Ea(this.scene,this.camera));let i=new go(new Nt({uniforms:{baseTexture:{value:null},bloomTexture:{value:this.bloomComposer.renderTarget2.texture}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv; void main(){ vec4 b = texture2D(baseTexture, vUv); gl_FragColor = vec4(b.rgb + texture2D(bloomTexture, vUv).rgb, b.a); }"}),"baseTexture");this.composer.addPass(i),this.composer.addPass(new Rc)}setModel(e,n,i){this.model&&this.scene.remove(this.model),this.model=e,this.headY=i,this.scene.add(e),this.glowState=n.map(s=>{let r=C0.test(s.name||"")&&!s.isOutline;return{m:s,glow:r,outline:!!s.isOutline,saved:r?yw.filter(o=>s[o]?.isColor).map(o=>[o,s[o].clone()]):null}}),this.glowMeshes=[],e.traverse(s=>{s.isMesh&&[].concat(s.material).some(r=>C0.test(r.name||"")&&!r.isOutline)&&this.glowMeshes.push(s)}),this.frame()}applyBackground(){let e=xw[this.S.bg];this.bgFx=e?new se(e).convertSRGBToLinear():null,e?(this.renderer.setClearColor(e,1),document.body.style.background=e):(this.renderer.setClearColor(0,0),document.body.style.background="transparent")}applyBloomSettings(){this.bloomPass.strength=this.S.bloomStrength,this.bloomPass.threshold=this.S.bloomThreshold}resize(){let e=window.innerWidth,n=window.innerHeight,i=Math.min(window.devicePixelRatio||1,this.S.quality);this.renderer.setPixelRatio(i),this.renderer.setSize(e,n,!1),this.composer.setPixelRatio(i),this.composer.setSize(e,n),this.bloomComposer.setPixelRatio(i*.4),this.bloomComposer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.frame()}frame(){let e=this.S,[n,i]=R0[e.framing]||R0.chest,s=i*(this.camera.aspect<1?1.35:1)*Math.pow(1.6,-e.camZoom),r=this.headY+n+e.camHeight;this.camera.position.set(0,r+.02,s),this.camera.lookAt(0,r,0)}render(e){if(!(this.S.bloom&&this.S.bg!=="transparent"&&this.model)){this.renderer.render(this.scene,this.camera);return}if(this._odd=!this._odd,this._odd&&this._bloomReady){this._composite(e);return}this._bloomReady=!0;for(let r of this.glowMeshes)r.renderOrder+=1e3;for(let r of this.glowState)if(r.glow)for(let[o,a]of r.saved)a.copy(r.m[o]),r.m[o].setRGB(0,0,0);else r.outline?r.m.visible=!1:r.m.colorWrite=!1;let i=this.renderer.getClearColor(this._cc||(this._cc=new se)),s=this.renderer.getClearAlpha();this.bloomComposer.render(e),this.renderer.setClearColor(i,s);for(let r of this.glowMeshes)r.renderOrder-=1e3;for(let r of this.glowState)if(r.glow)for(let[o,a]of r.saved)r.m[o].copy(a);else r.outline?r.m.visible=!0:r.m.colorWrite=!0;this._composite(e)}_composite(e){let n=this.renderer.getClearColor(this._cc||(this._cc=new se)),i=this.renderer.getClearAlpha();this.bgFx&&this.renderer.setClearColor(this.bgFx,1),this.composer.render(e),this.renderer.setClearColor(n,i)}};function nf(t,e){if(e===p0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===xa||e===Ec){let n=t.getIndex();if(n===null){let o=[],a=t.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);t.setIndex(o),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===xa)for(let o=1;o<=i;o++)s.push(n.getX(0)),s.push(n.getX(o)),s.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(n.getX(o)),s.push(n.getX(o+1)),s.push(n.getX(o+2))):(s.push(n.getX(o+2)),s.push(n.getX(o+1)),s.push(n.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=t.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}var Pc=class extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new hf(n)}),this.register(function(n){return new uf(n)}),this.register(function(n){return new yf(n)}),this.register(function(n){return new Mf(n)}),this.register(function(n){return new Ef(n)}),this.register(function(n){return new ff(n)}),this.register(function(n){return new pf(n)}),this.register(function(n){return new mf(n)}),this.register(function(n){return new gf(n)}),this.register(function(n){return new cf(n)}),this.register(function(n){return new _f(n)}),this.register(function(n){return new df(n)}),this.register(function(n){return new xf(n)}),this.register(function(n){return new vf(n)}),this.register(function(n){return new af(n)}),this.register(function(n){return new Sf(n)}),this.register(function(n){return new Tf(n)})}load(e,n,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Bs.extractUrlBase(e);o=Bs.resolveURL(c,this.path)}else o=Bs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ma(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){n(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===N0){try{o[Xe.KHR_BINARY_GLTF]=new wf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lf(r,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:o[u]=new lf;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[u]=new bf(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[u]=new Af;break;case Xe.KHR_MESH_QUANTIZATION:o[u]=new Rf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,n){let i=this;return new Promise(function(s,r){i.parse(e,n,s,r)})}};function Mw(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},af=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){let r=n[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,s=n.cache.get(i);if(s)return s;let r=n.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new po(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gc(h),c.distance=u;break;case"spot":c=new mc(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,us(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),n.cache.add(i,s),s}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(n.cache,a,l)})}},lf=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(e,n,i){let s=[];e.color=new se(1,1,1),e.opacity=1;let r=n.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,nn))}return Promise.all(s)}},cf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(n.emissiveIntensity=r),Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return n.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},df=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];n.sheenColor=new se(0,0,0),n.sheenRoughness=0,n.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,nn)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return n.attenuationColor=new se().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}},gf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return n.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_f=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return n.specularColor=new se().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,nn)),Promise.all(r)}},vf=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(r)}},xf=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Gn}extendMaterialParams(e,n){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},yf=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,r.source,o)}},Mf=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let o=r.extensions[n],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}},Ef=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let o=r.extensions[n],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}},Sf=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Tf=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=n.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==ri.TRIANGLES&&c.mode!==ri.TRIANGLE_STRIP&&c.mode!==ri.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new Ee,p=new w,m=new ve,T=new w(1,1,1),y=new oc(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&T.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,_.compose(p,m,T));for(let E in l)if(E==="_COLOR_0"){let C=l[E];y.instanceColor=new gr(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},N0="glTF",Sa=12,P0={JSON:1313821514,BIN:5130562},wf=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,Sa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==N0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Sa,r=new DataView(e,Sa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===P0.JSON){let c=new Uint8Array(e,Sa+o,a);this.content=i.decode(c)}else if(l===P0.BIN){let c=Sa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bf=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Pf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Pf[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=vo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return n.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(f)},a,c,rn,d)})})}},Af=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}},Rf=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},Ic=class extends Ds{constructor(e,n,i,s){super(e,n,i,s)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)n[o]=i[r+o];return n}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-n,u=(i-n)/h,d=u*u,f=d*u,g=e*c,_=g-c,p=-2*f+3*d,m=f-d,T=1-p,y=m-d+u;for(let E=0;E!==a;E++){let C=o[_+E+a],R=o[_+E+l]*h,A=o[g+E+a],U=o[g+E]*h;r[E]=T*C+y*R+p*A+m*U}return r}},Ew=new ve,Cf=class extends Ic{interpolate_(e,n,i,s){let r=super.interpolate_(e,n,i,s);return Ew.fromArray(r).normalize().toArray(r),r}},ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I0={9728:gn,9729:Cn,9984:zd,9985:sa,9986:jr,9987:Pi},L0={33071:ss,33648:la,10497:pr},sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sw={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tw(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Li})),t.DefaultMaterial}function _r(t,e,n){for(let i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function us(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ww(t,e,n){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(t);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?n.getDependency("accessor",u.POSITION):t.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?n.getDependency("accessor",u.NORMAL):t.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?n.getDependency("accessor",u.COLOR_0):t.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(t.morphAttributes.position=h),s&&(t.morphAttributes.normal=u),r&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function bw(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Aw(t){let e,n=t.extensions&&t.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+of(n.attributes):e=t.indices+":"+of(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,s=t.targets.length;i<s;i++)e+=":"+of(t.targets[i]);return e}function of(t){let e="",n=Object.keys(t).sort();for(let i=0,s=n.length;i<s;i++)e+=n[i]+":"+t[n[i]]+";";return e}function If(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Rw(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Cw=new Ee,Lf=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new Mw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new pc(this.options.manager):this.textureLoader=new vc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ma(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return _r(r,a,s),us(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=n.length;s<r;s++){let o=n[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[n]++,s}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let s=e(n[i]);if(s)return s}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let s=0;s<n.length;s++){let r=e(n[s]);r&&i.push(r)}return i}getDependency(e,n){let i=e+":"+n,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(n)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,n)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Bs.resolveURL(n.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let s=n.byteLength||0,r=n.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let n=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=sf[s.type],a=vo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ke(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=sf[s.type],c=vo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(f&&f!==u){let m=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,y=n.cache.get(T);y||(_=new c(a,m*f,s.count*f/h),y=new Ls(_,f/h),n.cache.add(T,y)),p=new Us(y,l,d%f/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new ke(_,l,g);if(s.sparse!==void 0){let m=sf.SCALAR,T=vo[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,C=new T(o[1],y,s.sparse.count*m),R=new c(o[2],E,s.sparse.count*l);a!==null&&(p=new ke(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,U=C.length;A<U;A++){let q=C[A];if(p.setX(q,R[A*l]),l>=2&&p.setY(q,R[A*l+1]),l>=3&&p.setZ(q,R[A*l+2]),l>=4&&p.setW(q,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let n=this.json,i=this.options,r=n.textures[e].source,o=n.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,n,i){let s=this,r=this.json,o=r.textures[e],a=r.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=I0[d.magFilter]||Cn,h.minFilter=I0[d.minFilter]||Pi,h.wrapS=L0[d.wrapS]||pr,h.wrapT=L0[d.wrapT]||pr,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;n.isImageBitmapLoader===!0&&(g=function(_){let p=new cn(_);p.needsUpdate=!0,d(p)}),n.load(Bs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),us(u,o),u.userData.mimeType=o.mimeType||Rw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,n,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[n]=o,o})}assignFinalMaterial(e){let n=e.geometry,i=e.material,s=n.attributes.tangent===void 0,r=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new pa,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Pn,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return uo}loadMaterial(e){let n=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let u=s[Xe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,n))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],rn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",u.baseColorTexture,nn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rn);let h=r.alphaMode||rf.OPAQUE;if(h===rf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tn&&(c.push(n.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Tn&&(c.push(n.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tn){let u=r.emissiveFactor;a.emissive=new se().setRGB(u[0],u[1],u[2],rn)}return r.emissiveTexture!==void 0&&o!==Tn&&c.push(n.assignTexture(a,"emissiveMap",r.emissiveTexture,nn)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),us(u,r),n.associations.set(u,{materials:e}),r.extensions&&_r(s,u,r),u})}createUniqueName(e){let n=Et.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return U0(l,a,n)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Aw(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=U0(new tt,c,n),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let n=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Tw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],p=o[f],m,T=c[f];if(p.mode===ri.TRIANGLES||p.mode===ri.TRIANGLE_STRIP||p.mode===ri.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ho(_,T):new zt(_,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ri.TRIANGLE_STRIP?m.geometry=nf(m.geometry,Ec):p.mode===ri.TRIANGLE_FAN&&(m.geometry=nf(m.geometry,xa));else if(p.mode===ri.LINES)m=new Ti(_,T);else if(p.mode===ri.LINE_STRIP)m=new Ns(_,T);else if(p.mode===ri.LINE_LOOP)m=new cc(_,T);else if(p.mode===ri.POINTS)m=new hc(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&bw(m,r),m.name=n.createUniqueName(r.name||"mesh_"+e),us(m,r),p.extensions&&_r(s,m,p),n.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)n.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&_r(s,u[0],r),u[0];let d=new Ot;r.extensions&&_r(s,d,r),n.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let n,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Kt(nt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new Is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),us(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let s=0,r=n.joints.length;s<r;s++)i.push(this._loadNodeShallow(n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ee;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Ui(a,l)})}loadAnimation(e){let n=this.json,i=this,s=n.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let T=0,y=d.length;T<y;T++){let E=d[T],C=f[T],R=g[T],A=_[T],U=p[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let q=i._createAnimationTracks(E,C,R,A,U);if(q)for(let v=0;v<q.length;v++)m.push(q[v])}return new fc(r,void 0,m)})}createNodeMesh(e){let n=this.json,i=this,s=n.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let n=this.json,i=this,s=n.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Cw)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=n.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new fa:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),us(h,r),r.extensions&&_r(i,h,r),r.matrix!==void 0){let u=new Ee;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],s=this,r=new Ot;i.name&&(r.name=s.createUniqueName(i.name)),us(r,i),i.extensions&&_r(n,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Sn||d instanceof cn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,n,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Hs[r.path]===Hs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Hs[r.path]){case Hs.weights:c=as;break;case Hs.rotation:c=ls;break;case Hs.position:case Hs.scale:c=cs;break;default:i.itemSize===1?c=as:c=cs;break}let h=s.interpolation!==void 0?Sw[s.interpolation]:oo,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Hs[r.path],n.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=If(n.constructor),s=new Float32Array(n.length);for(let r=0,o=n.length;r<o;r++)s[r]=n[r]*i;n=s}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof ls?Cf:Ic;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Pw(t,e,n){let i=e.attributes,s=new ii;if(i.POSITION!==void 0){let a=n.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){let h=If(vo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=n.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=If(vo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}t.boundingBox=s;let o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,t.boundingSphere=o}function U0(t,e,n){let i=e.attributes,s=[];function r(o,a){return n.getDependency("accessor",o).then(function(l){t.setAttribute(a,l)})}for(let o in i){let a=Pf[o]||o.toLowerCase();a in t.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!t.index){let o=n.getDependency("accessor",e.indices).then(function(a){t.setIndex(a)});s.push(o)}return $e.workingColorSpace!==rn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),us(t,e),Pw(t,e,n),Promise.all(s).then(function(){return e.targets!==void 0?ww(t,e.targets,n):t})}var Lc=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),rt=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),D0=class extends mt{constructor(t){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${t}`,this.expressionName=t,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(t){this._binds.push(t)}deleteBind(t){let e=this._binds.indexOf(t);e>=0&&this._binds.splice(e,1)}applyWeight(t){var e;let n=this.outputWeight;n*=(e=t?.multiplier)!=null?e:1,this.isBinary&&n<1&&(n=0),this._binds.forEach(i=>i.applyWeight(n))}clearAppliedWeight(){this._binds.forEach(t=>t.clearAppliedWeight())}};function __(t,e,n){var i,s;let r=t.parser.json,o=(i=r.nodes)==null?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(s=r.meshes)==null?void 0:s[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,h=[];return n.traverse(u=>{h.length<c&&u.isMesh&&h.push(u)}),h}function O0(t,e){return rt(this,null,function*(){let n=yield t.parser.getDependency("node",e);return __(t,e,n)})}function F0(t){return rt(this,null,function*(){let e=yield t.parser.getDependencies("node"),n=new Map;return e.forEach((i,s)=>{let r=__(t,s,i);r!=null&&n.set(s,r)}),n})}var Xf={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function v_(t){return Math.max(Math.min(t,1),0)}var B0=class x_{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},n=new Set(Object.values(Xf));return Object.entries(this._expressionMap).forEach(([i,s])=>{n.has(i)&&(e[i]=s)}),e}get customExpressionMap(){let e={},n=new Set(Object.values(Xf));return Object.entries(this._expressionMap).forEach(([i,s])=>{n.has(i)||(e[i]=s)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new x_().copy(this)}getExpression(e){var n;return(n=this._expressionMap[e])!=null?n:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let n=this._expressions.indexOf(e);n===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(n,1),delete this._expressionMap[e.expressionName]}getValue(e){var n;let i=this.getExpression(e);return(n=i?.weight)!=null?n:null}setValue(e,n){let i=this.getExpression(e);i&&(i.weight=v_(n))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let n=this.getExpression(e);return n?`${n.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(n=>{n.clearAppliedWeight()}),this._expressions.forEach(n=>{let i=1,s=n.expressionName;this.blinkExpressionNames.indexOf(s)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(s)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(s)!==-1&&(i*=e.mouth),n.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,n=1,i=1;return this._expressions.forEach(s=>{e-=s.overrideBlinkAmount,n-=s.overrideLookAtAmount,i-=s.overrideMouthAmount}),e=Math.max(0,e),n=Math.max(0,n),i=Math.max(0,i),{blink:e,lookAt:n,mouth:i}}},Ta={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},Iw={_Color:Ta.Color,_EmissionColor:Ta.EmissionColor,_ShadeColor:Ta.ShadeColor,_RimColor:Ta.RimColor,_OutlineColor:Ta.OutlineColor},Lw=new se,y_=class M_{constructor({material:e,type:n,targetValue:i,targetAlpha:s}){this.material=e,this.type=n,this.targetValue=i,this.targetAlpha=s??1;let r=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:r,alpha:o}}applyWeight(e){let{color:n,alpha:i}=this._state;if(n!=null){let{propertyName:s,deltaValue:r}=n,o=this.material[s];o?.add(Lw.copy(r).multiplyScalar(e))}if(i!=null){let{propertyName:s,deltaValue:r}=i;this.material[s]!=null&&(this.material[s]+=r*e)}}clearAppliedWeight(){let{color:e,alpha:n}=this._state;if(e!=null){let{propertyName:i,initialValue:s}=e,r=this.material[i];r?.copy(s)}if(n!=null){let{propertyName:i,initialValue:s}=n;this.material[i]!=null&&(this.material[i]=s)}}_initColorBindState(){var e,n,i;let{material:s,type:r,targetValue:o}=this,a=this._getPropertyNameMap(),l=(n=(e=a?.[r])==null?void 0:e[0])!=null?n:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=s.name)!=null?i:"(no name)"}, the type ${r} but the material or the type is not supported.`),null;let h=s[l].clone(),u=new se(o.r-h.r,o.g-h.g,o.b-h.b);return{propertyName:l,initialValue:h,deltaValue:u}}_initAlphaBindState(){var e,n,i;let{material:s,type:r,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(n=(e=a?.[r])==null?void 0:e[1])!=null?n:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=s.name)!=null?i:"(no name)"}, the type ${r} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=s[l],h=o-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var e,n;return(n=(e=Object.entries(M_._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?n:null}};y_._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var k0=y_,To=class{constructor({primitives:t,index:e,weight:n}){this.primitives=t,this.index=e,this.weight=n}applyWeight(t){this.primitives.forEach(e=>{var n;((n=e.morphTargetInfluences)==null?void 0:n[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*t)})}clearAppliedWeight(){this.primitives.forEach(t=>{var e;((e=t.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(t.morphTargetInfluences[this.index]=0)})}},H0=new Me,E_=class S_{constructor({material:e,scale:n,offset:i}){var s,r;this.material=e,this.scale=n,this.offset=i;let o=(s=Object.entries(S_._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:s[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(r=e.name)!=null?r:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let h=c.offset.clone(),u=c.repeat.clone(),d=i.clone().sub(h),f=n.clone().sub(u);this._properties.push({name:a,initialOffset:h,deltaOffset:d,initialScale:u,deltaScale:f})}))}applyWeight(e){this._properties.forEach(n=>{let i=this.material[n.name];i!==void 0&&(i.offset.add(H0.copy(n.deltaOffset).multiplyScalar(e)),i.repeat.add(H0.copy(n.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let n=this.material[e.name];n!==void 0&&(n.offset.copy(e.initialOffset),n.repeat.copy(e.initialScale))})}};E_._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var V0=E_,Uw=new Set(["1.0","1.0-beta"]),T_=class w_{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return rt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return rt(this,null,function*(){let n=yield this._v1Import(e);if(n)return n;let i=yield this._v0Import(e);return i||null})}_v1Import(e){return rt(this,null,function*(){var n,i;let s=this.parser.json;if(!(((n=s.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let o=(i=s.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!Uw.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(Xf)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([d,f])=>{if(f!=null){if(!c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${d}" detected. Ignoring the expression`);return}h.set(d,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([d,f])=>{if(c.has(d)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${d}". Ignoring the expression`);return}h.set(d,f)});let u=new B0;return yield Promise.all(Array.from(h.entries()).map(d=>rt(this,[d],function*([f,g]){var _,p,m,T,y,E,C;let R=new D0(f);if(e.scene.add(R),R.isBinary=(_=g.isBinary)!=null?_:!1,R.overrideBlink=(p=g.overrideBlink)!=null?p:"none",R.overrideLookAt=(m=g.overrideLookAt)!=null?m:"none",R.overrideMouth=(T=g.overrideMouth)!=null?T:"none",(y=g.morphTargetBinds)==null||y.forEach(A=>rt(this,null,function*(){var U;if(A.node===void 0||A.index===void 0)return;let q=yield O0(e,A.node),v=A.index;if(!q.every(S=>Array.isArray(S.morphTargetInfluences)&&v<S.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${g.name} attempts to index morph #${v} but not found.`);return}R.addBind(new To({primitives:q,index:v,weight:(U=A.weight)!=null?U:1}))})),g.materialColorBinds||g.textureTransformBinds){let A=[];e.scene.traverse(U=>{let q=U.material;q&&(Array.isArray(q)?A.push(...q):A.push(q))}),(E=g.materialColorBinds)==null||E.forEach(U=>rt(this,null,function*(){A.filter(v=>{var S;let H=(S=this.parser.associations.get(v))==null?void 0:S.materials;return U.material===H}).forEach(v=>{R.addBind(new k0({material:v,type:U.type,targetValue:new se().fromArray(U.targetValue),targetAlpha:U.targetValue[3]}))})})),(C=g.textureTransformBinds)==null||C.forEach(U=>rt(this,null,function*(){A.filter(v=>{var S;let H=(S=this.parser.associations.get(v))==null?void 0:S.materials;return U.material===H}).forEach(v=>{var S,H;R.addBind(new V0({material:v,offset:new Me().fromArray((S=U.offset)!=null?S:[0,0]),scale:new Me().fromArray((H=U.scale)!=null?H:[1,1])}))})}))}u.registerExpression(R)}))),u})}_v0Import(e){return rt(this,null,function*(){var n;let i=this.parser.json,s=(n=i.extensions)==null?void 0:n.VRM;if(!s)return null;let r=s.blendShapeMaster;if(!r)return null;let o=new B0,a=r.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>rt(this,null,function*(){var h;let u=c.presetName,d=u!=null&&w_.v0v1PresetNameMap[u]||null,f=d??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${u} has duplicated entries. Ignoring the expression`);return}l.add(f);let g=new D0(f);e.scene.add(g),g.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(p=>rt(this,null,function*(){var m;if(p.mesh===void 0||p.index===void 0)return;let T=[];if((m=i.nodes)==null||m.forEach((E,C)=>{E.mesh===p.mesh&&T.push(C)}),T.length===0){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to bind a morph target to the mesh #${p.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}let y=p.index;yield Promise.all(T.map(E=>rt(this,null,function*(){var C;let R=yield O0(e,E);if(!R.every(A=>Array.isArray(A.morphTargetInfluences)&&y<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${y}th morph but not found.`);return}g.addBind(new To({primitives:R,index:y,weight:.01*((C=p.weight)!=null?C:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;let m=[];e.scene.traverse(y=>{if(y.material){let E=y.material;Array.isArray(E)?m.push(...E.filter(C=>(C.name===p.materialName||C.name===p.materialName+" (Outline)")&&m.indexOf(C)===-1)):E.name===p.materialName&&m.indexOf(E)===-1&&m.push(E)}});let T=p.propertyName;m.forEach(y=>{if(T==="_MainTex_ST"){let C=new Me(p.targetValue[0],p.targetValue[1]),R=new Me(p.targetValue[2],p.targetValue[3]);R.y=1-R.y-C.y,g.addBind(new V0({material:y,scale:C,offset:R}));return}let E=Iw[T];if(E){g.addBind(new k0({material:y,type:E,targetValue:new se().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(T+" is not supported")})}),o.registerExpression(g)}))),o})}};T_.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var Nw=T_;var $f=class Eo{constructor(e,n){this._firstPersonOnlyLayer=Eo.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=Eo.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=n}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(n=>({meshes:n.meshes.concat(),type:n.type})),this}clone(){return new Eo(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=Eo.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:n=Eo.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=n,this.meshAnnotations.forEach(i=>{i.meshes.forEach(s=>{i.type==="firstPersonOnly"?(s.layers.set(this._firstPersonOnlyLayer),s.traverse(r=>r.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(s.layers.set(this._thirdPersonOnlyLayer),s.traverse(r=>r.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(s)})}),this._initializedLayers=!0)}_excludeTriangles(e,n,i,s){let r=0;if(n!=null&&n.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],h=n[a],u=i[a];if(h[0]>0&&s.includes(u[0])||h[1]>0&&s.includes(u[1])||h[2]>0&&s.includes(u[2])||h[3]>0&&s.includes(u[3]))continue;let d=n[l],f=i[l];if(d[0]>0&&s.includes(f[0])||d[1]>0&&s.includes(f[1])||d[2]>0&&s.includes(f[2])||d[3]>0&&s.includes(f[3]))continue;let g=n[c],_=i[c];g[0]>0&&s.includes(_[0])||g[1]>0&&s.includes(_[1])||g[2]>0&&s.includes(_[2])||g[3]>0&&s.includes(_[3])||(e[r++]=a,e[r++]=l,e[r++]=c)}return r}_createErasedMesh(e,n){let i=new ho(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);let s=i.geometry,r=s.getAttribute("skinIndex"),o=r instanceof va?[]:r.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=s.getAttribute("skinWeight"),c=l instanceof va?[]:l.array,h=[];for(let _=0;_<c.length;_+=4)h.push([c[_],c[_+1],c[_+2],c[_+3]]);let u=s.getIndex();if(!u)throw new Error("The geometry doesn't have an index buffer");let d=Array.from(u.array),f=this._excludeTriangles(d,h,a,n),g=[];for(let _=0;_<f;_++)g[_]=d[_];return s.setIndex(g),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new Ui(e.skeleton.bones,e.skeleton.boneInverses),new Ee),i}_createHeadlessModelForSkinnedMesh(e,n){let i=[];if(n.skeleton.bones.forEach((r,o)=>{this._isEraseTarget(r)&&i.push(o)}),!i.length){n.layers.enable(this._thirdPersonOnlyLayer),n.layers.enable(this._firstPersonOnlyLayer);return}n.layers.set(this._thirdPersonOnlyLayer);let s=this._createErasedMesh(n,i);e.add(s)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(n=>n.layers.set(this._thirdPersonOnlyLayer));else{let n=new Ot;n.name=`_headless_${e.name}`,n.layers.set(this._firstPersonOnlyLayer),e.parent.add(n),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{let s=i;this._createHeadlessModelForSkinnedMesh(n,s)})}else if(e.type==="SkinnedMesh"){let n=e;this._createHeadlessModelForSkinnedMesh(e.parent,n)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(n=>n.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};$f.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;$f.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var z0=$f,Dw=new Set(["1.0","1.0-beta"]),Ow=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(t){this.parser=t}afterRoot(t){return rt(this,null,function*(){let e=t.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");t.userData.vrmFirstPerson=yield this._import(t,e)}})}_import(t,e){return rt(this,null,function*(){if(e==null)return null;let n=yield this._v1Import(t,e);if(n)return n;let i=yield this._v0Import(t,e);return i||null})}_v1Import(t,e){return rt(this,null,function*(){var n,i;let s=this.parser.json;if(!(((n=s.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let o=(i=s.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!Dw.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],h=yield F0(t);return Array.from(h.entries()).forEach(([u,d])=>{var f,g;let _=(f=l?.meshAnnotations)==null?void 0:f.find(p=>p.node===u);c.push({meshes:d,type:(g=_?.type)!=null?g:"auto"})}),new z0(e,c)})}_v0Import(t,e){return rt(this,null,function*(){var n;let i=this.parser.json,s=(n=i.extensions)==null?void 0:n.VRM;if(!s)return null;let r=s.firstPerson;if(!r)return null;let o=[],a=yield F0(t);return Array.from(a.entries()).forEach(([l,c])=>{let h=i.nodes[l],u=r.meshAnnotations?r.meshAnnotations.find(d=>d.mesh===h.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(u?.firstPersonFlag)})}),new z0(e,o)})}_convertV0FlagToV1Type(t){return t==="FirstPersonOnly"?"firstPersonOnly":t==="ThirdPersonOnly"?"thirdPersonOnly":t==="Both"?"both":"auto"}};var G0=new w,W0=new w,Fw=new ve,X0=class extends Ot{constructor(t){super(),this.vrmHumanoid=t,this._boneAxesMap=new Map,Object.values(t.humanBones).forEach(e=>{let n=new yc(1);n.matrixAutoUpdate=!1,n.material.depthTest=!1,n.material.depthWrite=!1,this.add(n),this._boneAxesMap.set(e,n)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(t=>{t.geometry.dispose(),t.material.dispose()})}updateMatrixWorld(t){Array.from(this._boneAxesMap.entries()).forEach(([e,n])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(G0,Fw,W0);let i=G0.set(.1,.1,.1).divide(W0);n.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(t)}},Uf=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var Bw={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function b_(t){return t.invert?t.invert():t.inverse(),t}var vr=new w,xr=new ve,qf=class{constructor(t){this.humanBones=t,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let t={};return Object.keys(this.humanBones).forEach(e=>{let n=e,i=this.getBoneNode(n);i&&(vr.copy(i.position),xr.copy(i.quaternion),t[n]={position:vr.toArray(),rotation:xr.toArray()})}),t}getPose(){let t={};return Object.keys(this.humanBones).forEach(e=>{let n=e,i=this.getBoneNode(n);if(!i)return;vr.set(0,0,0),xr.identity();let s=this.restPose[n];s?.position&&vr.fromArray(s.position).negate(),s?.rotation&&b_(xr.fromArray(s.rotation)),vr.add(i.position),xr.premultiply(i.quaternion),t[n]={position:vr.toArray(),rotation:xr.toArray()}}),t}setPose(t){Object.entries(t).forEach(([e,n])=>{let i=e,s=this.getBoneNode(i);if(!s)return;let r=this.restPose[i];r&&(n?.position&&(s.position.fromArray(n.position),r.position&&s.position.add(vr.fromArray(r.position))),n?.rotation&&(s.quaternion.fromArray(n.rotation),r.rotation&&s.quaternion.multiply(xr.fromArray(r.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([t,e])=>{let n=this.getBoneNode(t);n&&(e?.position&&n.position.fromArray(e.position),e?.rotation&&n.quaternion.fromArray(e.rotation))})}getBone(t){var e;return(e=this.humanBones[t])!=null?e:void 0}getBoneNode(t){var e,n;return(n=(e=this.humanBones[t])==null?void 0:e.node)!=null?n:null}},Nf=new w,kw=new ve,Hw=new w,q0=class A_ extends qf{static _setupTransforms(e){let n=new mt;n.name="VRMHumanoidRig";let i={},s={},r={},o={};Uf.forEach(l=>{var c;let h=e.getBoneNode(l);if(h){let u=new w,d=new ve;h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(u,d,Nf),i[l]=u,s[l]=d,r[l]=h.quaternion.clone();let f=new ve;(c=h.parent)==null||c.matrixWorld.decompose(Nf,f,Nf),o[l]=f}});let a={};return Uf.forEach(l=>{var c;let h=e.getBoneNode(l);if(h){let u=i[l],d=l,f;for(;f==null&&(d=Bw[d],d!=null);)f=i[d];let g=new mt;g.name="Normalized_"+h.name,(d?(c=a[d])==null?void 0:c.node:n).add(g),g.position.copy(u),f&&g.position.sub(f),a[l]={node:g}}}),{rigBones:a,root:n,parentWorldRotations:o,boneRotations:r}}constructor(e){let{rigBones:n,root:i,parentWorldRotations:s,boneRotations:r}=A_._setupTransforms(e);super(n),this.original=e,this.root=i,this._parentWorldRotations=s,this._boneRotations=r}update(){Uf.forEach(e=>{let n=this.original.getBoneNode(e);if(n!=null){let i=this.getBoneNode(e),s=this._parentWorldRotations[e],r=kw.copy(s).invert(),o=this._boneRotations[e];if(n.quaternion.copy(i.quaternion).multiply(s).premultiply(r).multiply(o),e==="hips"){let a=i.getWorldPosition(Hw);n.parent.updateWorldMatrix(!0,!1);let l=n.parent.matrixWorld,c=a.applyMatrix4(l.invert());n.position.copy(c)}}})}},Y0=class R_{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,n){var i;this.autoUpdateHumanBones=(i=n?.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new qf(e),this._normalizedHumanBones=new q0(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new qf(e.humanBones),this._normalizedHumanBones=new q0(this._rawHumanBones),this}clone(){return new R_(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Vw={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},zw=new Set(["1.0","1.0-beta"]),j0={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Gw=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(t,e){this.parser=t,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(t){return rt(this,null,function*(){t.userData.vrmHumanoid=yield this._import(t)})}_import(t){return rt(this,null,function*(){let e=yield this._v1Import(t);if(e)return e;let n=yield this._v0Import(t);return n||null})}_v1Import(t){return rt(this,null,function*(){var e,n;let i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let r=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!r)return null;let o=r.specVersion;if(!zw.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=r.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(u=>rt(this,[u],function*([d,f]){let g=d,_=f.node;if(l){let m=j0[g];m!=null&&(g=m)}let p=yield this.parser.getDependency("node",_);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}c[g]={node:p}}))));let h=new Y0(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(t.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){let u=new X0(h);this.helperRoot.add(u),u.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(t){return rt(this,null,function*(){var e;let i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;let s=i.humanoid;if(!s)return null;let r={};s.humanBones!=null&&(yield Promise.all(s.humanBones.map(a=>rt(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;if(c<0){console.warn(`A glTF node index for the humanoid bone ${l} is negative (${c}), ignoring this bone.`);return}let h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let u=j0[l],d=u??l;if(r[d]!=null){console.warn(`Multiple bone entries for ${d} detected (index = ${c}), ignoring duplicated entries.`);return}r[d]={node:h}}))));let o=new Y0(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(t.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new X0(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(t){let e=Object.values(Vw).filter(n=>t[n]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return t}},K0=class extends tt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new ke(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,t=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,t=!0),t&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let t=0;t<64;t++){let e=t/63*this._currentTheta;this._attrPos.setXYZ(t+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let t=0;t<63;t++)this._attrIndex.setXYZ(t*3,0,t+1,t+2);this._attrIndex.needsUpdate=!0}},Ww=class extends tt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new w,this._currentTail=new w,this._attrPos=new ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,t=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),t=!0),t&&this._buildPosition()}_buildPosition(){for(let t=0;t<32;t++){let e=t/16*Math.PI;this._attrPos.setXYZ(t,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+t,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+t,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let t=0;t<32;t++){let e=(t+1)%32;this._attrIndex.setXY(t*2,t,e),this._attrIndex.setXY(64+t*2,32+t,32+e),this._attrIndex.setXY(128+t*2,64+t,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Uc=new ve,Z0=new ve,wa=new w,$0=new w,J0=Math.sqrt(2)/2,Xw=new ve(0,0,-J0,J0),qw=new w(0,1,0),Yw=class extends Ot{constructor(t){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=t;{let e=new K0;e.radius=.5;let n=new Tn({color:65280,transparent:!0,opacity:.5,side:Rn,depthTest:!1,depthWrite:!1});this._meshPitch=new zt(e,n),this.add(this._meshPitch)}{let e=new K0;e.radius=.5;let n=new Tn({color:16711680,transparent:!0,opacity:.5,side:Rn,depthTest:!1,depthWrite:!1});this._meshYaw=new zt(e,n),this.add(this._meshYaw)}{let e=new Ww;e.radius=.1;let n=new Pn({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Ti(e,n),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(t){let e=nt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let n=nt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=n,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(wa),this.vrmLookAt.getLookAtWorldQuaternion(Uc),Uc.multiply(this.vrmLookAt.getFaceFrontQuaternion(Z0)),this._meshYaw.position.copy(wa),this._meshYaw.quaternion.copy(Uc),this._meshPitch.position.copy(wa),this._meshPitch.quaternion.copy(Uc),this._meshPitch.quaternion.multiply(Z0.setFromAxisAngle(qw,e)),this._meshPitch.quaternion.multiply(Xw);let{target:i,autoUpdate:s}=this.vrmLookAt;i!=null&&s&&(i.getWorldPosition($0).sub(wa),this._lineTarget.geometry.tail.copy($0),this._lineTarget.geometry.update(),this._lineTarget.position.copy(wa)),super.updateMatrixWorld(t)}},jw=new w,Kw=new w;function Yf(t,e){return t.matrixWorld.decompose(jw,e,Kw),e}function Oc(t){return[Math.atan2(-t.z,t.x),Math.atan2(t.y,Math.sqrt(t.x*t.x+t.z*t.z))]}function Q0(t){let e=Math.round(t/2/Math.PI);return t-2*Math.PI*e}var e_=new w(0,0,1),Zw=new w,$w=new w,Jw=new w,Qw=new ve,Df=new ve,t_=new ve,eb=new ve,Of=new Zt,C_=class P_{constructor(e,n){this.offsetFromHeadBone=new w,this.autoUpdate=!0,this.faceFront=new w(0,0,1),this.humanoid=e,this.applier=n,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new ve)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new Zt)}getEuler(e){return e.set(nt.DEG2RAD*this._pitch,nt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new P_(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let n=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(n.matrixWorld)}getLookAtWorldQuaternion(e){let n=this.humanoid.getRawBoneNode("head");return Yf(n,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(e_)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[n,i]=Oc(this.faceFront);return Of.set(0,.5*Math.PI+n,i,"YZX"),e.setFromEuler(Of).premultiply(eb.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Df),this.getFaceFrontQuaternion(t_),e.copy(e_).applyQuaternion(Df).applyQuaternion(t_).applyEuler(this.getEuler(Of))}lookAt(e){let n=Qw.copy(this._restHeadWorldQuaternion).multiply(b_(this.getLookAtWorldQuaternion(Df))),i=this.getLookAtWorldPosition($w),s=Jw.copy(e).sub(i).applyQuaternion(n).normalize(),[r,o]=Oc(this.faceFront),[a,l]=Oc(s),c=Q0(a-r),h=Q0(o-l);this._yaw=nt.RAD2DEG*c,this._pitch=nt.RAD2DEG*h,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(Zw)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};C_.EULER_ORDER="YXZ";var tb=C_,nb=new w(0,0,1),Di=new ve,xo=new ve,oi=new Zt(0,0,0,"YXZ"),Fc=class{constructor(t,e,n,i,s){this.humanoid=t,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=s,this.faceFront=new w(0,0,1),this._restQuatLeftEye=new ve,this._restQuatRightEye=new ve,this._restLeftEyeParentWorldQuat=new ve,this._restRightEyeParentWorldQuat=new ve;let r=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");r&&(this._restQuatLeftEye.copy(r.quaternion),Yf(r.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Yf(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(t,e){let n=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),s=this.humanoid.getNormalizedBoneNode("leftEye"),r=this.humanoid.getNormalizedBoneNode("rightEye");n&&(e<0?oi.x=-nt.DEG2RAD*this.rangeMapVerticalDown.map(-e):oi.x=nt.DEG2RAD*this.rangeMapVerticalUp.map(e),t<0?oi.y=-nt.DEG2RAD*this.rangeMapHorizontalInner.map(-t):oi.y=nt.DEG2RAD*this.rangeMapHorizontalOuter.map(t),Di.setFromEuler(oi),this._getWorldFaceFrontQuat(xo),s.quaternion.copy(xo).multiply(Di).multiply(xo.invert()),Di.copy(this._restLeftEyeParentWorldQuat),n.quaternion.copy(s.quaternion).multiply(Di).premultiply(Di.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?oi.x=-nt.DEG2RAD*this.rangeMapVerticalDown.map(-e):oi.x=nt.DEG2RAD*this.rangeMapVerticalUp.map(e),t<0?oi.y=-nt.DEG2RAD*this.rangeMapHorizontalOuter.map(-t):oi.y=nt.DEG2RAD*this.rangeMapHorizontalInner.map(t),Di.setFromEuler(oi),this._getWorldFaceFrontQuat(xo),r.quaternion.copy(xo).multiply(Di).multiply(xo.invert()),Di.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(r.quaternion).multiply(Di).premultiply(Di.invert()).multiply(this._restQuatRightEye))}lookAt(t){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=nt.RAD2DEG*t.y,n=nt.RAD2DEG*t.x;this.applyYawPitch(e,n)}_getWorldFaceFrontQuat(t){if(this.faceFront.distanceToSquared(nb)<.01)return t.identity();let[e,n]=Oc(this.faceFront);return oi.set(0,.5*Math.PI+e,n,"YZX"),t.setFromEuler(oi)}};Fc.type="bone";var jf=class{constructor(t,e,n,i,s){this.expressions=t,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=s}applyYawPitch(t,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),t<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-t))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(t)))}lookAt(t){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=nt.RAD2DEG*t.y,n=nt.RAD2DEG*t.x;this.applyYawPitch(e,n)}};jf.type="expression";var n_=class{constructor(t,e){this.inputMaxValue=t,this.outputScale=e}map(t){return this.outputScale*v_(t/this.inputMaxValue)}},ib=new Set(["1.0","1.0-beta"]),Nc=.01,sb=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(t,e){this.parser=t,this.helperRoot=e?.helperRoot}afterRoot(t){return rt(this,null,function*(){let e=t.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let n=t.userData.vrmExpressionManager;if(n!==null){if(n===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");t.userData.vrmLookAt=yield this._import(t,e,n)}})}_import(t,e,n){return rt(this,null,function*(){if(e==null||n==null)return null;let i=yield this._v1Import(t,e,n);if(i)return i;let s=yield this._v0Import(t,e,n);return s||null})}_v1Import(t,e,n){return rt(this,null,function*(){var i,s,r;let o=this.parser.json;if(!(((i=o.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;let l=(s=o.extensions)==null?void 0:s.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!ib.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let h=l.lookAt;if(!h)return null;let u=h.type==="expression"?1:10,d=this._v1ImportRangeMap(h.rangeMapHorizontalInner,u),f=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,u),g=this._v1ImportRangeMap(h.rangeMapVerticalDown,u),_=this._v1ImportRangeMap(h.rangeMapVerticalUp,u),p;h.type==="expression"?p=new jf(n,d,f,g,_):p=new Fc(e,d,f,g,_);let m=this._importLookAt(e,p);return m.offsetFromHeadBone.fromArray((r=h.offsetFromHeadBone)!=null?r:[0,.06,0]),m})}_v1ImportRangeMap(t,e){var n,i;let s=(n=t?.inputMaxValue)!=null?n:90,r=(i=t?.outputScale)!=null?i:e;return s<Nc&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),s=Nc),new n_(s,r)}_v0Import(t,e,n){return rt(this,null,function*(){var i,s,r,o;let l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let h=c.lookAtTypeName==="BlendShape"?1:10,u=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),d=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,h),_;c.lookAtTypeName==="BlendShape"?_=new jf(n,u,d,f,g):_=new Fc(e,u,d,f,g);let p=this._importLookAt(e,_);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((s=c.firstPersonBoneOffset.x)!=null?s:0,(r=c.firstPersonBoneOffset.y)!=null?r:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),_ instanceof Fc&&_.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(t,e){var n,i;let s=t?.curve;JSON.stringify(s)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let r=(n=t?.xRange)!=null?n:90,o=(i=t?.yRange)!=null?i:e;return r<Nc&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),r=Nc),new n_(r,o)}_importLookAt(t,e){let n=new tb(t,e);if(this.helperRoot){let i=new Yw(n);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return n}};function rb(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}var ob=new Set(["1.0","1.0-beta"]),ab=class{get name(){return"VRMMetaLoaderPlugin"}constructor(t,e){var n,i,s;this.parser=t,this.needThumbnailImage=(n=e?.needThumbnailImage)!=null?n:!1,this.acceptLicenseUrls=(i=e?.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(s=e?.acceptV0Meta)!=null?s:!0}afterRoot(t){return rt(this,null,function*(){t.userData.vrmMeta=yield this._import(t)})}_import(t){return rt(this,null,function*(){let e=yield this._v1Import(t);if(e!=null)return e;let n=yield this._v0Import(t);return n??null})}_v1Import(t){return rt(this,null,function*(){var e,n,i;let s=this.parser.json;if(!(((e=s.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=s.extensions)==null?void 0:n.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!ob.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let u;return this.needThumbnailImage&&l.thumbnailImage!=null&&(u=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:u,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(t){return rt(this,null,function*(){var e;let i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;let s=i.meta;if(!s)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let r;return this.needThumbnailImage&&s.texture!=null&&s.texture!==-1&&(r=yield this.parser.getDependency("texture",s.texture)),{metaVersion:"0",allowedUserName:s.allowedUserName,author:s.author,commercialUssageName:s.commercialUssageName,contactInformation:s.contactInformation,licenseName:s.licenseName,otherLicenseUrl:s.otherLicenseUrl,otherPermissionUrl:s.otherPermissionUrl,reference:s.reference,sexualUssageName:s.sexualUssageName,texture:r??void 0,title:s.title,version:s.version,violentUssageName:s.violentUssageName}})}_extractGLTFImage(t){return rt(this,null,function*(){var e;let i=(e=this.parser.json.images)==null?void 0:e[t];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${t}] of glTF as a thumbnail but the image doesn't exist`),null;let s=i.uri;if(i.bufferView!=null){let o=yield this.parser.getDependency("bufferView",i.bufferView),a=new Blob([o],{type:i.mimeType});s=URL.createObjectURL(a)}return s==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${t}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new ga().loadAsync(rb(s,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},lb=class{constructor(t){this.scene=t.scene,this.meta=t.meta,this.humanoid=t.humanoid,this.expressionManager=t.expressionManager,this.firstPerson=t.firstPerson,this.lookAt=t.lookAt}update(t){this.humanoid.update(),this.lookAt&&this.lookAt.update(t),this.expressionManager&&this.expressionManager.update()}};var cb=class extends lb{constructor(t){super(t),this.materials=t.materials,this.springBoneManager=t.springBoneManager,this.nodeConstraintManager=t.nodeConstraintManager}update(t){super.update(t),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(t),this.materials&&this.materials.forEach(e=>{e.update&&e.update(t)})}},hb=Object.defineProperty,i_=Object.getOwnPropertySymbols,ub=Object.prototype.hasOwnProperty,db=Object.prototype.propertyIsEnumerable,s_=(t,e,n)=>e in t?hb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r_=(t,e)=>{for(var n in e||(e={}))ub.call(e,n)&&s_(t,n,e[n]);if(i_)for(var n of i_(e))db.call(e,n)&&s_(t,n,e[n]);return t},Mr=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),fb={"":3e3,srgb:3001};function pb(t,e){parseInt("169",10)>=152?t.colorSpace=e:t.encoding=fb[e]}var mb=class{get pending(){return Promise.all(this._pendings)}constructor(t,e){this._parser=t,this._materialParams=e,this._pendings=[]}assignPrimitive(t,e){e!=null&&(this._materialParams[t]=e)}assignColor(t,e,n){if(e!=null){let i=new se().fromArray(e);n&&i.convertSRGBToLinear(),this._materialParams[t]=i}}assignTexture(t,e,n){return Mr(this,null,function*(){let i=Mr(this,null,function*(){if(e!=null){let s=yield this._parser.assignTexture(this._materialParams,t,e);if(s==null){console.warn("GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong");return}n&&pb(s,"srgb")}});return this._pendings.push(i),i})}assignTextureByIndex(t,e,n){return Mr(this,null,function*(){return this.assignTexture(t,e!=null?{index:e}:void 0,n)})}},gb=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,_b=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,vb={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},o_={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},xb={3e3:"",3001:"srgb"};function Ff(t){return parseInt("169",10)>=152?t.colorSpace:xb[t.encoding]}var yb=class extends Nt{constructor(t={}){var e;super({vertexShader:gb,fragmentShader:_b}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=Sc,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=vb.None,this._outlineWidthMode=o_.None,this._isOutline=!1,t.transparentWithZWrite&&(t.depthWrite=!0),delete t.transparentWithZWrite,t.fog=!0,t.lights=!0,t.clipping=!0,this.uniforms=Ni.merge([te.common,te.normalmap,te.emissivemap,te.fog,te.lights,{litFactor:{value:new se(1,1,1)},mapUvTransform:{value:new Ce},colorAlpha:{value:1},normalMapUvTransform:{value:new Ce},shadeColorFactor:{value:new se(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Ce},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Ce},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new se(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Ce},parametricRimColorFactor:{value:new se(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Ce},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new se(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Ce},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Ce},outlineWidthFactor:{value:0},outlineColorFactor:{value:new se(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Ce},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=t.uniforms)!=null?e:{}]),this.setValues(t),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([n,i])=>`${n}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${Ff(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${Ff(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${Ff(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=n=>{let i=parseInt("169",10),s=Object.entries(r_(r_({},this._generateDefines()),this.defines)).filter(([r,o])=>!!o).map(([r,o])=>`#define ${r} ${o}`).join(`
`)+`
`;n.vertexShader=s+n.vertexShader,n.fragmentShader=s+n.fragmentShader,i<154&&(n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(t){this.uniforms.litFactor.value=t}get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}get normalMap(){return this.uniforms.normalMap.value}set normalMap(t){this.uniforms.normalMap.value=t}get normalScale(){return this.uniforms.normalScale.value}set normalScale(t){this.uniforms.normalScale.value=t}get emissive(){return this.uniforms.emissive.value}set emissive(t){this.uniforms.emissive.value=t}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(t){this.uniforms.emissiveIntensity.value=t}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(t){this.uniforms.emissiveMap.value=t}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(t){this.uniforms.shadeColorFactor.value=t}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(t){this.uniforms.shadeMultiplyTexture.value=t}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(t){this.uniforms.shadingShiftFactor.value=t}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(t){this.uniforms.shadingShiftTexture.value=t}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(t){this.uniforms.shadingShiftTextureScale.value=t}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(t){this.uniforms.shadingToonyFactor.value=t}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(t){this.uniforms.giEqualizationFactor.value=t}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(t){this.uniforms.matcapFactor.value=t}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(t){this.uniforms.matcapTexture.value=t}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(t){this.uniforms.parametricRimColorFactor.value=t}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(t){this.uniforms.rimMultiplyTexture.value=t}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(t){this.uniforms.rimLightingMixFactor.value=t}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(t){this.uniforms.parametricRimFresnelPowerFactor.value=t}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(t){this.uniforms.parametricRimLiftFactor.value=t}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(t){this.uniforms.outlineWidthMultiplyTexture.value=t}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(t){this.uniforms.outlineWidthFactor.value=t}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(t){this.uniforms.outlineColorFactor.value=t}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(t){this.uniforms.outlineLightingMixFactor.value=t}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(t){this.uniforms.uvAnimationMaskTexture.value=t}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(t){this.uniforms.uvAnimationScrollXOffset.value=t}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(t){this.uniforms.uvAnimationScrollYOffset.value=t}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(t){this.uniforms.uvAnimationRotationPhase.value=t}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(t){this._ignoreVertexColor=t,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(t){this._v0CompatShade=t,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(t){this._debugMode=t,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(t){this._outlineWidthMode=t,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(t){this._isOutline=t,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(t){this._uploadUniformsWorkaround(),this._updateUVAnimation(t)}copy(t){return super.copy(t),this.map=t.map,this.normalMap=t.normalMap,this.emissiveMap=t.emissiveMap,this.shadeMultiplyTexture=t.shadeMultiplyTexture,this.shadingShiftTexture=t.shadingShiftTexture,this.matcapTexture=t.matcapTexture,this.rimMultiplyTexture=t.rimMultiplyTexture,this.outlineWidthMultiplyTexture=t.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=t.uvAnimationMaskTexture,this.normalMapType=t.normalMapType,this.uvAnimationScrollXSpeedFactor=t.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=t.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=t.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=t.ignoreVertexColor,this.v0CompatShade=t.v0CompatShade,this.debugMode=t.debugMode,this.outlineWidthMode=t.outlineWidthMode,this.isOutline=t.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(t){this.uniforms.uvAnimationScrollXOffset.value+=t*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=t*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=t*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let t=parseInt("169",10),e=this.outlineWidthMultiplyTexture!==null,n=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:t,OUTLINE:this._isOutline,MTOON_USE_UV:e||n,MTOON_UVS_VERTEX_ONLY:e&&!n,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===o_.ScreenCoordinates}}_updateTextureMatrix(t,e){t.value&&(t.value.matrixAutoUpdate&&t.value.updateMatrix(),e.value.copy(t.value.matrix))}},Mb=new Set(["1.0","1.0-beta"]),I_=class Bc{get name(){return Bc.EXTENSION_NAME}constructor(e,n={}){var i,s,r,o;this.parser=e,this.materialType=(i=n.materialType)!=null?i:yb,this.renderOrderOffset=(s=n.renderOrderOffset)!=null?s:0,this.v0CompatShade=(r=n.v0CompatShade)!=null?r:!1,this.debugMode=(o=n.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Mr(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Mr(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,n){let i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,n):null}loadMesh(e){return Mr(this,null,function*(){var n;let i=this.parser,r=(n=i.json.meshes)==null?void 0:n[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=r.primitives,a=yield i.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let h=l.children[c],u=o[c].material;u!=null&&this._setupPrimitive(h,u)}}return a})}_removeUnlitExtensionIfMToonExists(){let i=this.parser.json.materials;i?.map((s,r)=>{var o;this._getMToonExtension(r)&&((o=s.extensions)!=null&&o.KHR_materials_unlit)&&delete s.extensions.KHR_materials_unlit})}_getMToonExtension(e){var n,i;let o=(n=this.parser.json.materials)==null?void 0:n[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(i=o.extensions)==null?void 0:i[Bc.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!Mb.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Bc.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,n){return Mr(this,null,function*(){var i;delete n.metalness,delete n.roughness;let s=new mb(this.parser,n);s.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),s.assignColor("shadeColorFactor",e.shadeColorFactor),s.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),s.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),s.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),s.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),s.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),s.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),s.assignColor("matcapFactor",e.matcapFactor),s.assignTexture("matcapTexture",e.matcapTexture,!0),s.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),s.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),s.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),s.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),s.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),s.assignPrimitive("outlineWidthMode",e.outlineWidthMode),s.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),s.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),s.assignColor("outlineColorFactor",e.outlineColorFactor),s.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),s.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),s.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),s.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),s.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),s.assignPrimitive("v0CompatShade",this.v0CompatShade),s.assignPrimitive("debugMode",this.debugMode),yield s.pending})}_setupPrimitive(e,n){let i=this._getMToonExtension(n);if(i){let s=this._parseRenderOrder(i);e.renderOrder=s+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let n=e.material;if(!(n instanceof Sn)||!this._shouldGenerateOutline(n))return;e.material=[n];let i=n.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=_n,e.material.push(i);let s=e.geometry,r=s.index?s.index.count:s.attributes.position.count/3;s.addGroup(0,r,0),s.addGroup(0,r,1)}_addToMaterialSet(e){let n=e.material,i=new Set;Array.isArray(n)?n.forEach(s=>i.add(s)):i.add(n);for(let s of i)this._mToonMaterialSet.add(s)}_parseRenderOrder(e){var n;return(e.transparentWithZWrite?0:19)+((n=e.renderQueueOffsetNumber)!=null?n:0)}};I_.EXTENSION_NAME="VRMC_materials_mtoon";var Eb=I_,Sb=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),L_=class Kf{get name(){return Kf.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,n){return Sb(this,null,function*(){let i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let s=i.emissiveMultiplier;n.emissiveIntensity=s})}_getHDREmissiveMultiplierExtension(e){var n,i;let o=(n=this.parser.json.materials)==null?void 0:n[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(i=o.extensions)==null?void 0:i[Kf.EXTENSION_NAME];if(a!=null)return a}};L_.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var Tb=L_,wb=Object.defineProperty,bb=Object.defineProperties,Ab=Object.getOwnPropertyDescriptors,a_=Object.getOwnPropertySymbols,Rb=Object.prototype.hasOwnProperty,Cb=Object.prototype.propertyIsEnumerable,l_=(t,e,n)=>e in t?wb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Oi=(t,e)=>{for(var n in e||(e={}))Rb.call(e,n)&&l_(t,n,e[n]);if(a_)for(var n of a_(e))Cb.call(e,n)&&l_(t,n,e[n]);return t},c_=(t,e)=>bb(t,Ab(e)),Pb=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())});function yo(t){return Math.pow(t,2.2)}var Ib=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(t){var e;this.parser=t,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let n=this.parser.json;n.extensionsUsed=(e=n.extensionsUsed)!=null?e:[],n.extensionsUsed.indexOf("KHR_texture_transform")===-1&&n.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return Pb(this,null,function*(){var t;let e=this.parser.json,n=(t=e.extensions)==null?void 0:t.VRM,i=n?.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((s,r)=>{var o,a;let l=(o=e.materials)==null?void 0:o[r];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${r}] of glTF but the material doesn't exist`);return}if(s.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(s,l);e.materials[r]=c}else if((a=s.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(s,l);e.materials[r]=c}else s.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${s.shader}`)}))})}_parseV0MToonProperties(t,e){var n,i,s,r,o,a,l,c,h,u,d,f,g,_,p,m,T,y,E,C,R,A,U,q,v,S,H,k,G,K,B,$,V,le,ne,ge,Qe,st,W,Q,me,he,Be,Pe,qe,at,Ye,P,hn,Ge,Ke,Ie,_t,Ne,b;let x=(i=(n=t.keywordMap)==null?void 0:n._ALPHABLEND_ON)!=null?i:!1,Y=((s=t.floatProperties)==null?void 0:s._ZWrite)===1&&x,Z=this._v0ParseRenderQueue(t),X=(o=(r=t.keywordMap)==null?void 0:r._ALPHATEST_ON)!=null?o:!1,Te=x?"BLEND":X?"MASK":"OPAQUE",ie=X?(l=(a=t.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,et=((h=(c=t.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,J=this._portTextureTransform(t),fe=((d=(u=t.vectorProperties)==null?void 0:u._Color)!=null?d:[1,1,1,1]).map((ee,ae)=>ae===3?ee:yo(ee)),Le=(f=t.textureProperties)==null?void 0:f._MainTex,De=Le!=null?{index:Le,extensions:Oi({},J)}:void 0,pe=(_=(g=t.floatProperties)==null?void 0:g._BumpScale)!=null?_:1,We=(p=t.textureProperties)==null?void 0:p._BumpMap,He=We!=null?{index:We,scale:pe,extensions:Oi({},J)}:void 0,vt=((T=(m=t.vectorProperties)==null?void 0:m._EmissionColor)!=null?T:[0,0,0,1]).map(yo),I=(y=t.textureProperties)==null?void 0:y._EmissionMap,ce=I!=null?{index:I,extensions:Oi({},J)}:void 0,z=((C=(E=t.vectorProperties)==null?void 0:E._ShadeColor)!=null?C:[.97,.81,.86,1]).map(yo),j=(R=t.textureProperties)==null?void 0:R._ShadeTexture,oe=j!=null?{index:j,extensions:Oi({},J)}:void 0,re=(U=(A=t.floatProperties)==null?void 0:A._ShadeShift)!=null?U:0,ze=(v=(q=t.floatProperties)==null?void 0:q._ShadeToony)!=null?v:.9;ze=nt.lerp(ze,1,.5+.5*re),re=-re-(1-ze);let Ut=(H=(S=t.floatProperties)==null?void 0:S._IndirectLightIntensity)!=null?H:.1,un=Ut?1-Ut:void 0,Ze=(k=t.textureProperties)==null?void 0:k._SphereAdd,dn=Ze!=null?[1,1,1]:void 0,gi=Ze!=null?{index:Ze}:void 0,il=(K=(G=t.floatProperties)==null?void 0:G._RimLightingMix)!=null?K:0,qo=(B=t.textureProperties)==null?void 0:B._RimTexture,Ki=qo!=null?{index:qo,extensions:Oi({},J)}:void 0,Yo=((V=($=t.vectorProperties)==null?void 0:$._RimColor)!=null?V:[0,0,0,1]).map(yo),sl=(ne=(le=t.floatProperties)==null?void 0:le._RimFresnelPower)!=null?ne:1,rl=(Qe=(ge=t.floatProperties)==null?void 0:ge._RimLift)!=null?Qe:0,Pr=["none","worldCoordinates","screenCoordinates"][(W=(st=t.floatProperties)==null?void 0:st._OutlineWidthMode)!=null?W:0],Ir=(me=(Q=t.floatProperties)==null?void 0:Q._OutlineWidth)!=null?me:0;Ir=.01*Ir;let ir=(he=t.textureProperties)==null?void 0:he._OutlineWidthTexture,ol=ir!=null?{index:ir,extensions:Oi({},J)}:void 0,al=((Pe=(Be=t.vectorProperties)==null?void 0:Be._OutlineColor)!=null?Pe:[0,0,0]).map(yo),zh=((at=(qe=t.floatProperties)==null?void 0:qe._OutlineColorMode)!=null?at:0)===1?(P=(Ye=t.floatProperties)==null?void 0:Ye._OutlineLightingMix)!=null?P:1:0,ll=(hn=t.textureProperties)==null?void 0:hn._UvAnimMaskTexture,M=ll!=null?{index:ll,extensions:Oi({},J)}:void 0,L=(Ke=(Ge=t.floatProperties)==null?void 0:Ge._UvAnimScrollX)!=null?Ke:0,D=(_t=(Ie=t.floatProperties)==null?void 0:Ie._UvAnimScrollY)!=null?_t:0;D!=null&&(D=-D);let F=(b=(Ne=t.floatProperties)==null?void 0:Ne._UvAnimRotation)!=null?b:0,N={specVersion:"1.0",transparentWithZWrite:Y,renderQueueOffsetNumber:Z,shadeColorFactor:z,shadeMultiplyTexture:oe,shadingShiftFactor:re,shadingToonyFactor:ze,giEqualizationFactor:un,matcapFactor:dn,matcapTexture:gi,rimLightingMixFactor:il,rimMultiplyTexture:Ki,parametricRimColorFactor:Yo,parametricRimFresnelPowerFactor:sl,parametricRimLiftFactor:rl,outlineWidthMode:Pr,outlineWidthFactor:Ir,outlineWidthMultiplyTexture:ol,outlineColorFactor:al,outlineLightingMixFactor:zh,uvAnimationMaskTexture:M,uvAnimationScrollXSpeedFactor:L,uvAnimationScrollYSpeedFactor:D,uvAnimationRotationSpeedFactor:F};return c_(Oi({},e),{pbrMetallicRoughness:{baseColorFactor:fe,baseColorTexture:De},normalTexture:He,emissiveTexture:ce,emissiveFactor:vt,alphaMode:Te,alphaCutoff:ie,doubleSided:et,extensions:{VRMC_materials_mtoon:N}})}_parseV0UnlitProperties(t,e){var n,i,s,r,o;let a=t.shader==="VRM/UnlitTransparentZWrite",l=t.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(t),h=t.shader==="VRM/UnlitCutout",u=l?"BLEND":h?"MASK":"OPAQUE",d=h?(i=(n=t.floatProperties)==null?void 0:n._Cutoff)!=null?i:.5:void 0,f=this._portTextureTransform(t),g=((r=(s=t.vectorProperties)==null?void 0:s._Color)!=null?r:[1,1,1,1]).map(yo),_=(o=t.textureProperties)==null?void 0:o._MainTex,p=_!=null?{index:_,extensions:Oi({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return c_(Oi({},e),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:u,alphaCutoff:d,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(t){var e,n,i,s,r;let o=(e=t.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(n=o?.[0])!=null?n:0,(i=o?.[1])!=null?i:0],l=[(s=o?.[2])!=null?s:1,(r=o?.[3])!=null?r:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(t){var e,n;let i=t.shader==="VRM/UnlitTransparentZWrite",s=((e=t.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||t.shader==="VRM/UnlitTransparent"||i,r=((n=t.floatProperties)==null?void 0:n._ZWrite)===1||i,o=0;if(s){let a=t.renderQueue;a!=null&&(r?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(t){let e=new Set,n=new Set;t.forEach(i=>{var s,r;let o=i.shader==="VRM/UnlitTransparentZWrite",a=((s=i.keywordMap)==null?void 0:s._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||o,l=((r=i.floatProperties)==null?void 0:r._ZWrite)===1||o;if(a){let c=i.renderQueue;c!=null&&(l?n.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),n.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${n.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,s)=>{let r=Math.min(Math.max(s-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,r)}),Array.from(n).sort().forEach((i,s)=>{let r=Math.min(Math.max(s,0),9);this._renderQueueMapTransparentZWrite.set(i,r)})}},h_=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),Vs=new w,Bf=class extends Ot{constructor(t){super(),this._attrPosition=new ke(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(g0);let e=new tt;e.setAttribute("position",this._attrPosition);let n=new Pn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Ns(e,n),this.add(this._line),this.constraint=t}updateMatrixWorld(t){Vs.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Vs.x,Vs.y,Vs.z),this.constraint.source&&Vs.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Vs.x,Vs.y,Vs.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(t)}};function u_(t,e){return e.set(t.elements[12],t.elements[13],t.elements[14])}var Lb=new w,Ub=new w;function Nb(t,e){return t.decompose(Lb,e,Ub),e}function Hc(t){return t.invert?t.invert():t.inverse(),t}var Jf=class{constructor(t,e){this.destination=t,this.source=e,this.weight=1}},Db=new w,Ob=new w,Fb=new w,Bb=new ve,kb=new ve,Hb=new ve,Vb=class extends Jf{get aimAxis(){return this._aimAxis}set aimAxis(t){this._aimAxis=t,this._v3AimAxis.set(t==="PositiveX"?1:t==="NegativeX"?-1:0,t==="PositiveY"?1:t==="NegativeY"?-1:0,t==="PositiveZ"?1:t==="NegativeZ"?-1:0)}get dependencies(){let t=new Set([this.source]);return this.destination.parent&&t.add(this.destination.parent),t}constructor(t,e){super(t,e),this._aimAxis="PositiveX",this._v3AimAxis=new w(1,0,0),this._dstRestQuat=new ve}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let t=Bb.identity(),e=kb.identity();this.destination.parent&&(Nb(this.destination.parent.matrixWorld,t),Hc(e.copy(t)));let n=Db.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(t),i=u_(this.source.matrixWorld,Ob).sub(u_(this.destination.matrixWorld,Fb)).normalize(),s=Hb.setFromUnitVectors(n,i).premultiply(e).multiply(t).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(s,this.weight)}};function zb(t,e){let n=[t],i=t.parent;for(;i!==null;)n.unshift(i),i=i.parent;n.forEach(s=>{e(s)})}var Gb=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(t){this._constraints.add(t);let e=this._objectConstraintsMap.get(t.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(t.destination,e)),e.add(t)}deleteConstraint(t){this._constraints.delete(t),this._objectConstraintsMap.get(t.destination).delete(t)}setInitState(){let t=new Set,e=new Set;for(let n of this._constraints)this._processConstraint(n,t,e,i=>i.setInitState())}update(){let t=new Set,e=new Set;for(let n of this._constraints)this._processConstraint(n,t,e,i=>i.update())}_processConstraint(t,e,n,i){if(n.has(t))return;if(e.has(t))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(t);let s=t.dependencies;for(let r of s)zb(r,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,n,i)});i(t),n.add(t)}},Wb=new ve,Xb=new ve,qb=class extends Jf{get dependencies(){return new Set([this.source])}constructor(t,e){super(t,e),this._dstRestQuat=new ve,this._invSrcRestQuat=new ve}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Hc(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let t=Wb.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=Xb.copy(this._dstRestQuat).multiply(t);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},Yb=new w,jb=new ve,Kb=new ve,Zb=class extends Jf{get rollAxis(){return this._rollAxis}set rollAxis(t){this._rollAxis=t,this._v3RollAxis.set(t==="X"?1:0,t==="Y"?1:0,t==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(t,e){super(t,e),this._rollAxis="X",this._v3RollAxis=new w(1,0,0),this._dstRestQuat=new ve,this._invDstRestQuat=new ve,this._invSrcRestQuatMulDstRestQuat=new ve}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),Hc(this._invDstRestQuat.copy(this._dstRestQuat)),Hc(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let t=jb.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=Yb.copy(this._v3RollAxis).applyQuaternion(t),i=Kb.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(t);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},$b=new Set(["1.0","1.0-beta"]),U_=class Ca{get name(){return Ca.EXTENSION_NAME}constructor(e,n){this.parser=e,this.helperRoot=n?.helperRoot}afterRoot(e){return h_(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return h_(this,null,function*(){var n;let i=this.parser.json;if(!(((n=i.extensionsUsed)==null?void 0:n.indexOf(Ca.EXTENSION_NAME))!==-1))return null;let r=new Gb,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let h=i.nodes[l],u=(c=h?.extensions)==null?void 0:c[Ca.EXTENSION_NAME];if(u==null)return;let d=u.specVersion;if(!$b.has(d)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Ca.EXTENSION_NAME} specVersion "${d}"`);return}let f=u.constraint;if(f.roll!=null){let g=this._importRollConstraint(a,o,f.roll);r.addConstraint(g)}else if(f.aim!=null){let g=this._importAimConstraint(a,o,f.aim);r.addConstraint(g)}else if(f.rotation!=null){let g=this._importRotationConstraint(a,o,f.rotation);r.addConstraint(g)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,n,i){let{source:s,rollAxis:r,weight:o}=i,a=n[s],l=new Zb(e,a);if(r!=null&&(l.rollAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new Bf(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,n,i){let{source:s,aimAxis:r,weight:o}=i,a=n[s],l=new Vb(e,a);if(r!=null&&(l.aimAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new Bf(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,n,i){let{source:s,weight:r}=i,o=n[s],a=new qb(e,o);if(r!=null&&(a.weight=r),this.helperRoot){let l=new Bf(a);this.helperRoot.add(l)}return a}};U_.EXTENSION_NAME="VRMC_node_constraint";var Jb=U_,Dc=(t,e,n)=>new Promise((i,s)=>{var r=l=>{try{a(n.next(l))}catch(c){s(c)}},o=l=>{try{a(n.throw(l))}catch(c){s(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(r,o);a((n=n.apply(t,e)).next())}),Qf=class{},kf=new w,yr=new w,N_=class extends Qf{get type(){return"capsule"}constructor(t){var e,n,i,s;super(),this.offset=(e=t?.offset)!=null?e:new w(0,0,0),this.tail=(n=t?.tail)!=null?n:new w(0,0,0),this.radius=(i=t?.radius)!=null?i:0,this.inside=(s=t?.inside)!=null?s:!1}calculateCollision(t,e,n,i){kf.setFromMatrixPosition(t),yr.subVectors(this.tail,this.offset).applyMatrix4(t),yr.sub(kf);let s=yr.lengthSq();i.copy(e).sub(kf);let r=yr.dot(i);r<=0||(s<=r||yr.multiplyScalar(r/s),i.sub(yr));let o=i.length(),a=this.inside?this.radius-n-o:o-n-this.radius;return a<0&&(i.multiplyScalar(1/o),this.inside&&i.negate()),a}},Hf=new w,d_=new Ce,D_=class extends Qf{get type(){return"plane"}constructor(t){var e,n;super(),this.offset=(e=t?.offset)!=null?e:new w(0,0,0),this.normal=(n=t?.normal)!=null?n:new w(0,0,1)}calculateCollision(t,e,n,i){i.setFromMatrixPosition(t),i.negate().add(e),d_.getNormalMatrix(t),Hf.copy(this.normal).applyNormalMatrix(d_).normalize();let s=i.dot(Hf)-n;return i.copy(Hf),s}},Qb=new w,O_=class extends Qf{get type(){return"sphere"}constructor(t){var e,n,i;super(),this.offset=(e=t?.offset)!=null?e:new w(0,0,0),this.radius=(n=t?.radius)!=null?n:0,this.inside=(i=t?.inside)!=null?i:!1}calculateCollision(t,e,n,i){i.subVectors(e,Qb.setFromMatrixPosition(t));let s=i.length(),r=this.inside?this.radius-n-s:s-n-this.radius;return r<0&&(i.multiplyScalar(1/s),this.inside&&i.negate()),r}},Fi=new w,eA=class extends tt{constructor(t){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new w,this._currentTail=new w,this._shape=t,this._attrPos=new ke(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,t=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),t=!0);let n=Fi.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(n)>1e-10&&(this._currentTail.copy(n),t=!0),t&&this._buildPosition()}_buildPosition(){Fi.copy(this._currentTail).sub(this._currentOffset);let t=Fi.length()/this._currentRadius;for(let i=0;i<=16;i++){let s=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(s),-Math.cos(s),0),this._attrPos.setXYZ(17+i,t+Math.sin(s),Math.cos(s),0),this._attrPos.setXYZ(34+i,-Math.sin(s),0,-Math.cos(s)),this._attrPos.setXYZ(51+i,t+Math.sin(s),0,Math.cos(s))}for(let i=0;i<32;i++){let s=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(s),Math.cos(s)),this._attrPos.setXYZ(100+i,t,Math.sin(s),Math.cos(s))}let e=Math.atan2(Fi.y,Math.sqrt(Fi.x*Fi.x+Fi.z*Fi.z)),n=-Math.atan2(Fi.z,Fi.x);this.rotateZ(e),this.rotateY(n),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let t=0;t<34;t++){let e=(t+1)%34;this._attrIndex.setXY(t*2,t,e),this._attrIndex.setXY(68+t*2,34+t,34+e)}for(let t=0;t<32;t++){let e=(t+1)%32;this._attrIndex.setXY(136+t*2,68+t,68+e),this._attrIndex.setXY(200+t*2,100+t,100+e)}this._attrIndex.needsUpdate=!0}},tA=class extends tt{constructor(t){super(),this.worldScale=1,this._currentOffset=new w,this._currentNormal=new w,this._shape=t,this._attrPos=new ke(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),t=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),t=!0),t&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},nA=class extends tt{constructor(t){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new w,this._shape=t,this._attrPos=new ke(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,t=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),t=!0),t&&this._buildPosition()}_buildPosition(){for(let t=0;t<32;t++){let e=t/16*Math.PI;this._attrPos.setXYZ(t,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+t,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+t,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let t=0;t<32;t++){let e=(t+1)%32;this._attrIndex.setXY(t*2,t,e),this._attrIndex.setXY(64+t*2,32+t,32+e),this._attrIndex.setXY(128+t*2,64+t,64+e)}this._attrIndex.needsUpdate=!0}},iA=new w,Vf=class extends Ot{constructor(t){if(super(),this.matrixAutoUpdate=!1,this.collider=t,this.collider.shape instanceof O_)this._geometry=new nA(this.collider.shape);else if(this.collider.shape instanceof N_)this._geometry=new eA(this.collider.shape);else if(this.collider.shape instanceof D_)this._geometry=new tA(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new Pn({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Ti(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(t){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=iA.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(t)}},sA=class extends tt{constructor(t){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new w,this._springBone=t,this._attrPos=new ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let t=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,t=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),t=!0),t&&this._buildPosition()}_buildPosition(){for(let t=0;t<32;t++){let e=t/16*Math.PI;this._attrPos.setXYZ(t,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+t,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+t,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let t=0;t<32;t++){let e=(t+1)%32;this._attrIndex.setXY(t*2,t,e),this._attrIndex.setXY(64+t*2,32+t,32+e),this._attrIndex.setXY(128+t*2,64+t,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},rA=new w,oA=class extends Ot{constructor(t){super(),this.matrixAutoUpdate=!1,this.springBone=t,this._geometry=new sA(this.springBone);let e=new Pn({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Ti(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(t){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=rA.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(t)}},zf=class extends mt{constructor(t){super(),this.colliderMatrix=new Ee,this.shape=t}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),aA(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function aA(t,e,n){let i=e.elements;t.copy(e),n&&(t.elements[12]=i[0]*n.x+i[4]*n.y+i[8]*n.z+i[12],t.elements[13]=i[1]*n.x+i[5]*n.y+i[9]*n.z+i[13],t.elements[14]=i[2]*n.x+i[6]*n.y+i[10]*n.z+i[14])}var lA=new Ee;function cA(t){return t.invert?t.invert():t.getInverse(lA.copy(t)),t}var hA=class{constructor(t){this._inverseCache=new Ee,this._shouldUpdateInverse=!0,this.matrix=t;let e={set:(n,i,s)=>(this._shouldUpdateInverse=!0,n[i]=s,!0)};this._originalElements=t.elements,t.elements=new Proxy(t.elements,e)}get inverse(){return this._shouldUpdateInverse&&(cA(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Gf=new Ee,Mo=new w,ba=new w,Aa=new w,Ra=new w,uA=new Ee,dA=class{constructor(t,e,n={},i=[]){this._currentTail=new w,this._prevTail=new w,this._boneAxis=new w,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Ee,this._initialLocalRotation=new ve,this._initialLocalChildPosition=new w;var s,r,o,a,l,c;this.bone=t,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(s=n.hitRadius)!=null?s:0,stiffness:(r=n.stiffness)!=null?r:1,gravityPower:(o=n.gravityPower)!=null?o:0,gravityDir:(l=(a=n.gravityDir)==null?void 0:a.clone())!=null?l:new w(0,-1,0),dragForce:(c=n.dragForce)!=null?c:.4},this.colliderGroups=i}get dependencies(){let t=new Set,e=this.bone.parent;e&&t.add(e);for(let n=0;n<this.colliderGroups.length;n++)for(let i=0;i<this.colliderGroups[n].colliders.length;i++)t.add(this.colliderGroups[n].colliders[i]);return t}get center(){return this._center}set center(t){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=t,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new hA(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Gf}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let t=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(t),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let t=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(t),this._prevTail.copy(this._currentTail)}update(t){if(t<=0)return;this._calcWorldSpaceBoneLength();let e=ba.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);Ra.copy(this._currentTail).add(Mo.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*t).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*t),Aa.setFromMatrixPosition(this.bone.matrixWorld),Ra.sub(Aa).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Aa),this._collision(Ra),this._prevTail.copy(this._currentTail),this._currentTail.copy(Ra).applyMatrix4(this._getMatrixWorldToCenter());let n=uA.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,Mo.copy(Ra).applyMatrix4(n).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(t){for(let e=0;e<this.colliderGroups.length;e++)for(let n=0;n<this.colliderGroups[e].colliders.length;n++){let i=this.colliderGroups[e].colliders[n],s=i.shape.calculateCollision(i.colliderMatrix,t,this.settings.hitRadius,Mo);if(s<0){t.addScaledVector(Mo,-s),t.sub(Aa);let r=t.length();t.multiplyScalar(this._worldSpaceBoneLength/r).add(Aa)}}}_calcWorldSpaceBoneLength(){Mo.setFromMatrixPosition(this.bone.matrixWorld),this.child?ba.setFromMatrixPosition(this.child.matrixWorld):(ba.copy(this._initialLocalChildPosition),ba.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=Mo.sub(ba).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Gf}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Gf}};function fA(t,e){let n=[],i=t;for(;i!==null;)n.unshift(i),i=i.parent;n.forEach(s=>{e(s)})}function Zf(t,e){t.children.forEach(n=>{e(n)||Zf(n,e)})}function pA(t){var e;let n=new Map;for(let i of t){let s=i;do{let r=((e=n.get(s))!=null?e:0)+1;if(r===t.size)return s;n.set(s,r),s=s.parent}while(s!==null)}return null}var f_=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let t=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(n=>{t.add(n)})}),Array.from(t)}get colliders(){let t=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(n=>{t.add(n)})}),Array.from(t)}addJoint(t){this._joints.add(t);let e=this._objectSpringBonesMap.get(t.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(t.bone,e)),e.add(t),this._isSortedJointsDirty=!0}addSpringBone(t){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(t)}deleteJoint(t){this._joints.delete(t),this._objectSpringBonesMap.get(t.bone).delete(t),this._isSortedJointsDirty=!0}deleteSpringBone(t){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(t)}setInitState(){this._sortJoints();for(let t=0;t<this._sortedJoints.length;t++){let e=this._sortedJoints[t];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let t=0;t<this._sortedJoints.length;t++){let e=this._sortedJoints[t];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(t){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let n=this._sortedJoints[e];n.bone.updateMatrix(),n.bone.updateWorldMatrix(!1,!1),n.update(t),Zf(n.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let t=[],e=new Set,n=new Set,i=new Set;for(let r of this._joints)this._insertJointSort(r,e,n,t,i);this._sortedJoints=t;let s=pA(i);this._ancestors=[],s&&(this._ancestors.push(s),Zf(s,r=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(r))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(r),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(t,e,n,i,s){if(n.has(t))return;if(e.has(t)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(t);let r=t.dependencies;for(let o of r){let a=!1,l=null;fA(o,c=>{let h=this._objectSpringBonesMap.get(c);if(h)for(let u of h)a=!0,this._insertJointSort(u,e,n,i,s);else a||(l=c)}),l&&s.add(l)}i.push(t),n.add(t)}_relevantChildrenUpdated(t){var e,n;return((n=(e=this._objectSpringBonesMap.get(t))==null?void 0:e.size)!=null?n:0)>0?!0:(t.updateWorldMatrix(!1,!1),!1)}},p_="VRMC_springBone_extended_collider",mA=new Set(["1.0","1.0-beta"]),gA=new Set(["1.0"]),F_=class So{get name(){return So.EXTENSION_NAME}constructor(e,n){var i;this.parser=e,this.jointHelperRoot=n?.jointHelperRoot,this.colliderHelperRoot=n?.colliderHelperRoot,this.useExtendedColliders=(i=n?.useExtendedColliders)!=null?i:!0}afterRoot(e){return Dc(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Dc(this,null,function*(){let n=yield this._v1Import(e);if(n!=null)return n;let i=yield this._v0Import(e);return i??null})}_v1Import(e){return Dc(this,null,function*(){var n,i,s,r,o;let a=e.parser.json;if(!(((n=a.extensionsUsed)==null?void 0:n.indexOf(So.EXTENSION_NAME))!==-1))return null;let c=new f_,h=yield e.parser.getDependencies("node"),u=(i=a.extensions)==null?void 0:i[So.EXTENSION_NAME];if(!u)return null;let d=u.specVersion;if(!mA.has(d))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${So.EXTENSION_NAME} specVersion "${d}"`),null;let f=(s=u.colliders)==null?void 0:s.map((_,p)=>{var m,T,y,E,C,R,A,U,q,v,S,H,k,G,K;let B=h[_.node];if(B==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} attempted to reference a node #${_.node} but not found. Skipping the collider`),null;let $=_.shape,V=(m=_.extensions)==null?void 0:m[p_];if(this.useExtendedColliders&&V!=null){let le=V.specVersion;if(!gA.has(le))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${p_} specVersion "${le}". Fallbacking to the ${So.EXTENSION_NAME} definition`);else{let ne=V.shape;if(ne.sphere)return this._importSphereCollider(B,{offset:new w().fromArray((T=ne.sphere.offset)!=null?T:[0,0,0]),radius:(y=ne.sphere.radius)!=null?y:0,inside:(E=ne.sphere.inside)!=null?E:!1});if(ne.capsule)return this._importCapsuleCollider(B,{offset:new w().fromArray((C=ne.capsule.offset)!=null?C:[0,0,0]),radius:(R=ne.capsule.radius)!=null?R:0,tail:new w().fromArray((A=ne.capsule.tail)!=null?A:[0,0,0]),inside:(U=ne.capsule.inside)!=null?U:!1});if(ne.plane)return this._importPlaneCollider(B,{offset:new w().fromArray((q=ne.plane.offset)!=null?q:[0,0,0]),normal:new w().fromArray((v=ne.plane.normal)!=null?v:[0,0,1])})}}if($.sphere)return this._importSphereCollider(B,{offset:new w().fromArray((S=$.sphere.offset)!=null?S:[0,0,0]),radius:(H=$.sphere.radius)!=null?H:0,inside:!1});if($.capsule)return this._importCapsuleCollider(B,{offset:new w().fromArray((k=$.capsule.offset)!=null?k:[0,0,0]),radius:(G=$.capsule.radius)!=null?G:0,tail:new w().fromArray((K=$.capsule.tail)!=null?K:[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape. Skipping the collider`)}),g=(r=u.colliderGroups)==null?void 0:r.map((_,p)=>{var m;return{colliders:((m=_.colliders)!=null?m:[]).map(y=>{let E=f?.[y];return E??(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${p} attempted to reference a collider #${y} but not found. Skipping the collider`),null)}).filter(y=>y!=null),name:_.name}});return(o=u.springs)==null||o.forEach((_,p)=>{var m;let T=_.joints,y=(m=_.colliderGroups)==null?void 0:m.map(R=>{let A=g?.[R];return A??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to reference a collider group #${R} but not found. Skipping the collider group`),null)}).filter(R=>R!=null),E=_.center!=null?h[_.center]:void 0,C;T.forEach(R=>{if(C){let A=C.node,U=h[A],q=R.node,v=h[q],S={hitRadius:C.hitRadius,dragForce:C.dragForce,gravityPower:C.gravityPower,stiffness:C.stiffness,gravityDir:C.gravityDir!=null?new w().fromArray(C.gravityDir):void 0},H=this._importJoint(U,v,S,y);E&&(H.center=E),c.addJoint(H)}C=R})}),c.setInitState(),c})}_v0Import(e){return Dc(this,null,function*(){var n,i,s;let r=e.parser.json;if(!(((n=r.extensionsUsed)==null?void 0:n.indexOf("VRM"))!==-1))return null;let a=(i=r.extensions)==null?void 0:i.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let h=new f_,u=yield e.parser.getDependencies("node"),d=(s=l.colliderGroups)==null?void 0:s.map((f,g)=>{var _;let p=u[f.node];return p==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${g} attempted to reference a node #${f.node} but not found. Skipping the collider group`),null):{colliders:((_=f.colliders)!=null?_:[]).map((T,y)=>{var E,C,R;let A=new w(0,0,0);return T.offset&&A.set((E=T.offset.x)!=null?E:0,(C=T.offset.y)!=null?C:0,T.offset.z?-T.offset.z:0),this._importSphereCollider(p,{offset:A,radius:(R=T.radius)!=null?R:0,inside:!1})})}});return c?.forEach((f,g)=>{let _=f.bones;_&&_.forEach(p=>{var m,T,y,E;let C=u[p];if(C==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${g} attempted to reference a node #${p} but not found. Skipping the node`);return}let R=new w;f.gravityDir?R.set((m=f.gravityDir.x)!=null?m:0,(T=f.gravityDir.y)!=null?T:0,(y=f.gravityDir.z)!=null?y:0):R.set(0,-1,0);let A=f.center!=null?u[f.center]:void 0,U={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:R},q=(E=f.colliderGroups)==null?void 0:E.map(v=>{let S=d?.[v];return S??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to reference a collider group #${v} but not found. Skipping the collider group`),null)}).filter(v=>v!=null);C.traverse(v=>{var S;let H=(S=v.children[0])!=null?S:null,k=this._importJoint(v,H,U,q);A&&(k.center=A),h.addJoint(k)})})}),e.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(e,n,i,s){let r=new dA(e,n,i,s);if(this.jointHelperRoot){let o=new oA(r);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return r}_importSphereCollider(e,n){let i=new O_(n),s=new zf(i);if(e.add(s),this.colliderHelperRoot){let r=new Vf(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,n){let i=new N_(n),s=new zf(i);if(e.add(s),this.colliderHelperRoot){let r=new Vf(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importPlaneCollider(e,n){let i=new D_(n),s=new zf(i);if(e.add(s),this.colliderHelperRoot){let r=new Vf(s);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return s}};F_.EXTENSION_NAME="VRMC_springBone";var _A=F_,B_=class{get name(){return"VRMLoaderPlugin"}constructor(t,e){var n,i,s,r,o,a,l,c,h,u;this.parser=t;let d=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(n=e?.expressionPlugin)!=null?n:new Nw(t),this.firstPersonPlugin=(i=e?.firstPersonPlugin)!=null?i:new Ow(t),this.humanoidPlugin=(s=e?.humanoidPlugin)!=null?s:new Gw(t,{helperRoot:d,autoUpdateHumanBones:f}),this.lookAtPlugin=(r=e?.lookAtPlugin)!=null?r:new sb(t,{helperRoot:d}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new ab(t),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new Eb(t),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new Tb(t),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new Ib(t),this.springBonePlugin=(h=e?.springBonePlugin)!=null?h:new _A(t,{colliderHelperRoot:d,jointHelperRoot:d}),this.nodeConstraintPlugin=(u=e?.nodeConstraintPlugin)!=null?u:new Jb(t,{helperRoot:d})}beforeRoot(){return Lc(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(t){return Lc(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(t)})}getMaterialType(t){let e=this.mtoonMaterialPlugin.getMaterialType(t);return e??null}extendMaterialParams(t,e){return Lc(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(t,e),yield this.mtoonMaterialPlugin.extendMaterialParams(t,e)})}afterRoot(t){return Lc(this,null,function*(){yield this.metaPlugin.afterRoot(t),yield this.humanoidPlugin.afterRoot(t),yield this.expressionPlugin.afterRoot(t),yield this.lookAtPlugin.afterRoot(t),yield this.firstPersonPlugin.afterRoot(t),yield this.springBonePlugin.afterRoot(t),yield this.nodeConstraintPlugin.afterRoot(t),yield this.mtoonMaterialPlugin.afterRoot(t);let e=t.userData.vrmMeta,n=t.userData.vrmHumanoid;if(e&&n){let i=new cb({scene:t.scene,expressionManager:t.userData.vrmExpressionManager,firstPerson:t.userData.vrmFirstPerson,humanoid:n,lookAt:t.userData.vrmLookAt,meta:e,materials:t.userData.vrmMToonMaterials,springBoneManager:t.userData.vrmSpringBoneManager,nodeConstraintManager:t.userData.vrmNodeConstraintManager});t.userData.vrm=i}})}};function vA(t){let e=new Set;return t.traverse(n=>{if(!n.isMesh)return;let i=n;e.add(i)}),e}function m_(t,e,n){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return t[o.index]}let i=new Float32Array(t[0].count*3),s=0;if(n)s=1;else for(let o of e)s+=o.weight;for(let o of e){let a=t[o.index],l=o.weight/s;for(let c=0;c<a.count;c++)i[c*3+0]+=a.getX(c)*l,i[c*3+1]+=a.getY(c)*l,i[c*3+2]+=a.getZ(c)*l}return new ke(i,3)}function xA(t){var e;let n=vA(t.scene),i=new Map,s=(e=t.expressionManager)==null?void 0:e.expressionMap;if(s!=null)for(let[r,o]of Object.entries(s)){let a=new Set;for(let l of o.binds)if(l instanceof To){if(l.weight!==0)for(let c of l.primitives){let h=i.get(c);h==null&&(h=new Map,i.set(c,h));let u=h.get(r);u==null&&(u=new Set,h.set(r,u)),u.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let r of n){let o=i.get(r);if(o==null)continue;let a=r.geometry.morphAttributes;r.geometry.morphAttributes={};let l=r.geometry.clone();r.geometry=l;let c=l.morphTargetsRelative,h=a.position!=null,u=a.normal!=null,d={},f={},g=[];if(h||u){h&&(d.position=[]),u&&(d.normal=[]);let _=0;for(let[p,m]of o)h&&(d.position[_]=m_(a.position,m,c)),u&&(d.normal[_]=m_(a.normal,m,c)),s?.[p].addBind(new To({index:_,weight:1,primitives:[r]})),f[p]=_,g.push(0),_++}l.morphAttributes=d,r.morphTargetDictionary=f,r.morphTargetInfluences=g}}function Vc(t,e,n){if(t.getComponent)return t.getComponent(e,n);{let i=t.array[e*t.itemSize+n];return t.normalized&&(i=nt.denormalize(i,t.array)),i}}function k_(t,e,n,i){t.setComponent?t.setComponent(e,n,i):(t.normalized&&(i=nt.normalize(i,t.array)),t.array[e*t.itemSize+n]=i)}function yA(t){var e;let n=MA(t),i=new Set;for(let u of n)i.has(u.geometry)&&(u.geometry=AA(u.geometry)),i.add(u.geometry);let s=new Map;for(let u of i){let d=u.getAttribute("skinIndex"),f=(e=s.get(d))!=null?e:new Map;s.set(d,f);let g=u.getAttribute("skinWeight"),_=EA(d,g);f.set(g,_)}let r=new Map;for(let u of n){let d=SA(u,s);r.set(u,d)}let o=[];for(let[u,d]of r){let f=!1;for(let g of o)if(TA(d,g.boneInverseMap)){f=!0,g.meshes.add(u);for(let[p,m]of d)g.boneInverseMap.set(p,m);break}f||o.push({boneInverseMap:d,meshes:new Set([u])})}let a=new Map,l=new Wf,c=new Wf,h=new Wf;for(let u of o){let{boneInverseMap:d,meshes:f}=u,g=Array.from(d.keys()),_=Array.from(d.values()),p=new Ui(g,_),m=c.getOrCreate(p);for(let T of f){let y=T.geometry.getAttribute("skinIndex"),E=l.getOrCreate(y),C=T.skeleton.bones,R=C.map(q=>h.getOrCreate(q)).join(","),A=`${E};${m};${R}`,U=a.get(A);U==null&&(U=y.clone(),wA(U,C,g),a.set(A,U)),T.geometry.setAttribute("skinIndex",U)}for(let T of f)T.bind(p,new Ee)}}function MA(t){let e=new Set;return t.traverse(n=>{if(!n.isSkinnedMesh)return;let i=n;e.add(i)}),e}function EA(t,e){let n=new Set;for(let i=0;i<t.count;i++)for(let s=0;s<t.itemSize;s++){let r=Vc(t,i,s);Vc(e,i,s)!==0&&n.add(r)}return n}function SA(t,e){let n=new Map,i=t.skeleton,s=t.geometry,r=s.getAttribute("skinIndex"),o=s.getAttribute("skinWeight"),a=e.get(r),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)n.set(i.bones[c],i.boneInverses[c]);return n}function TA(t,e){for(let[n,i]of t.entries()){let s=e.get(n);if(s!=null&&!bA(i,s))return!1}return!0}function wA(t,e,n){let i=new Map;for(let r of e)i.set(r,i.size);let s=new Map;for(let[r,o]of n.entries()){let a=i.get(o);s.set(a,r)}for(let r=0;r<t.count;r++)for(let o=0;o<t.itemSize;o++){let a=Vc(t,r,o),l=s.get(a);k_(t,r,o,l)}t.needsUpdate=!0}function bA(t,e,n){if(n=n||1e-4,t.elements.length!=e.elements.length)return!1;for(let i=0,s=t.elements.length;i<s;i++)if(Math.abs(t.elements[i]-e.elements[i])>n)return!1;return!0}var Wf=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(t){return this._objectIndexMap.get(t)}getOrCreate(t){let e=this._objectIndexMap.get(t);return e==null&&(e=this._index,this._objectIndexMap.set(t,e),this._index++),e}};function AA(t){var e,n,i,s;let r=new tt;r.name=t.name,r.setIndex(t.index);for(let[o,a]of Object.entries(t.attributes))r.setAttribute(o,a);for(let[o,a]of Object.entries(t.morphAttributes)){let l=o;r.morphAttributes[l]=a.concat()}r.morphTargetsRelative=t.morphTargetsRelative,r.groups=[];for(let o of t.groups)r.addGroup(o.start,o.count,o.materialIndex);return r.boundingSphere=(n=(e=t.boundingSphere)==null?void 0:e.clone())!=null?n:null,r.boundingBox=(s=(i=t.boundingBox)==null?void 0:i.clone())!=null?s:null,r.drawRange.start=t.drawRange.start,r.drawRange.count=t.drawRange.count,r.userData=t.userData,r}function g_(t){if(Object.values(t).forEach(e=>{e?.isTexture&&e.dispose()}),t.isShaderMaterial){let e=t.uniforms;e&&Object.values(e).forEach(n=>{let i=n.value;i?.isTexture&&i.dispose()})}t.dispose()}function RA(t){let e=t.geometry;e&&e.dispose();let n=t.skeleton;n&&n.dispose();let i=t.material;i&&(Array.isArray(i)?i.forEach(s=>g_(s)):i&&g_(i))}function CA(t){t.traverse(RA)}function PA(t,e){var n,i;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let s=(n=e?.experimentalSameBoneCounts)!=null?n:!1,r=[];t.traverse(l=>{l.type==="SkinnedMesh"&&r.push(l)});let o=new Map,a=0;for(let l of r){let h=l.geometry.getAttribute("skinIndex");if(o.has(h))continue;let u=new Map,d=new Map;for(let f=0;f<h.count;f++)for(let g=0;g<h.itemSize;g++){let _=Vc(h,f,g),p=u.get(_);p==null&&(p=u.size,u.set(_,p),d.set(p,_)),k_(h,f,g,p)}h.needsUpdate=!0,o.set(h,d),a=Math.max(a,u.size)}for(let l of r){let h=l.geometry.getAttribute("skinIndex"),u=o.get(h),d=[],f=[],g=s?a:u.size;for(let p=0;p<g;p++){let m=(i=u.get(p))!=null?i:0;d.push(l.skeleton.bones[m]),f.push(l.skeleton.boneInverses[m])}let _=new Ui(d,f);l.bind(_,new Ee)}}function IA(t,e){let n=t.position.count,i=new Array(n),s=0,r=e.array;for(let o=0;o<r.length;o++){let a=r[o];i[a]||(i[a]=!0,s++)}return{isVertexUsed:i,vertexCount:n,verticesUsed:s}}function LA(t){let e=[],n=[],i=0;for(let s=0;s<t.length;s++)if(t[s]){let r=i++;e[s]=r,n[r]=s}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:n}}function UA(t,e){var n,i,s,r;e.name=t.name,e.morphTargetsRelative=t.morphTargetsRelative,t.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(i=(n=t.boundingBox)==null?void 0:n.clone())!=null?i:null,e.boundingSphere=(r=(s=t.boundingSphere)==null?void 0:s.clone())!=null?r:null,e.setDrawRange(t.drawRange.start,t.drawRange.count),e.userData=t.userData}function NA(t,e,n){let i=e.array,s=new i.constructor(i.length);for(let r=0;r<i.length;r++){let o=i[r];s[r]=n[o]}t.setIndex(new ke(s,e.itemSize,e.normalized))}function zc(t,e,n){let i=t.constructor,s=new i(e.length*n),r=!0;for(let o=0;o<e.length;o++){let l=e[o]*n,c=o*n;for(let h=0;h<n;h++){let u=t[l+h];s[c+h]=u,r=r&&u===0}}return[s,r]}function DA(t){var e;let n=new Map,i=[];for(let[s,r]of Object.entries(t))if(r.isInterleavedBufferAttribute){let o=r,a=o.data,l=(e=n.get(a))!=null?e:[];n.set(a,l),l.push([s,o])}else{let o=r;i.push([s,o])}return[n,i]}function OA(t,e,n){let[i,s]=DA(e);for(let[r,o]of i){let a=r.array,{stride:l}=r,[c,h]=zc(a,n,l),u=new Ls(c,l);u.setUsage(r.usage);for(let[d,f]of o){let{itemSize:g,offset:_,normalized:p}=f,m=new Us(u,g,_,p);t.setAttribute(d,m)}}for(let[r,o]of s){let a=o.array,{itemSize:l,normalized:c}=o,[h,u]=zc(a,n,l);t.setAttribute(r,new ke(h,l,c))}}function FA(t){var e;let n=new Map,i=[];for(let[s,r]of Object.entries(t)){let o=s;for(let a=0;a<r.length;a++){let l=r[a];if(l.isInterleavedBufferAttribute){let c=l,h=c.data,u=(e=n.get(h))!=null?e:[];n.set(h,u),u.push([o,a,c])}else{let c=l;i.push([o,a,c])}}}return[n,i]}function BA(t,e,n){var i,s;let r=!0,[o,a]=FA(e),l={};for(let[c,h]of o){let u=c.array,{stride:d}=c,[f,g]=zc(u,n,d);r=r&&g;let _=new Ls(f,d);_.setUsage(c.usage);for(let[p,m,T]of h){let{itemSize:y,offset:E,normalized:C}=T,R=new Us(_,y,E,C);(i=l[p])!=null||(l[p]=[]),l[p][m]=R}}for(let[c,h,u]of a){let d=u,f=d.array,{itemSize:g,normalized:_}=d,[p,m]=zc(f,n,g);r=r&&m,(s=l[c])!=null||(l[c]=[]),l[c][h]=new ke(p,g,_)}t.morphAttributes=r?{}:l}function kA(t){let e=new Map;t.traverse(n=>{if(!n.isMesh)return;let i=n,s=i.geometry,r=s.index;if(r==null)return;let o=e.get(s);if(o!=null){i.geometry=o;return}let{isVertexUsed:a,vertexCount:l,verticesUsed:c}=IA(s.attributes,r);if(c===l)return;let{originalIndexNewIndexMap:h,newIndexOriginalIndexMap:u}=LA(a),d=new tt;UA(s,d),e.set(s,d),NA(d,r,h),OA(d,s.attributes,u),BA(d,s.morphAttributes,u),i.geometry=d}),Array.from(e.keys()).forEach(n=>{n.dispose()})}function HA(t){var e;((e=t.meta)==null?void 0:e.metaVersion)==="0"&&(t.scene.rotation.y=Math.PI)}var Ln=class{constructor(){}};Ln.combineMorphs=xA;Ln.combineSkeletons=yA;Ln.deepDispose=CA;Ln.removeUnnecessaryJoints=PA;Ln.removeUnnecessaryVertices=kA;Ln.rotateVRM0=HA;var ds=["browDownLeft","browDownRight","browInnerUp","browOuterUpLeft","browOuterUpRight","cheekPuff","cheekSquintLeft","cheekSquintRight","eyeBlinkLeft","eyeBlinkRight","eyeLookDownLeft","eyeLookDownRight","eyeLookInLeft","eyeLookInRight","eyeLookOutLeft","eyeLookOutRight","eyeLookUpLeft","eyeLookUpRight","eyeSquintLeft","eyeSquintRight","eyeWideLeft","eyeWideRight","jawForward","jawLeft","jawOpen","jawRight","mouthClose","mouthDimpleLeft","mouthDimpleRight","mouthFrownLeft","mouthFrownRight","mouthFunnel","mouthLeft","mouthLowerDownLeft","mouthLowerDownRight","mouthPressLeft","mouthPressRight","mouthPucker","mouthRight","mouthRollLower","mouthRollUpper","mouthShrugLower","mouthShrugUpper","mouthSmileLeft","mouthSmileRight","mouthStretchLeft","mouthStretchRight","mouthUpperUpLeft","mouthUpperUpRight","noseSneerLeft","noseSneerRight","tongueOut"],Pa=Object.fromEntries(ds.map((t,e)=>[t,e])),H_=["happy","angry","sad","surprised"];var VA=t=>t<0?0:t>1?1:t,zA=(t,e)=>1-Math.exp(-t*e),GA=["hips","spine","chest","upperChest","neck","head","leftShoulder","rightShoulder","leftUpperArm","rightUpperArm","leftLowerArm","rightLowerArm","leftHand","rightHand"],V_=["Index","Middle","Ring","Little"],z_=["Proximal","Intermediate","Distal"],WA={happy:"happy",angry:"angry",sad:"sad",surprised:"Surprised"},W_=new Pc;W_.register(t=>new B_(t));var Gc=class{constructor(e){this.S=e,this.vrm=null,this.isV0=!1,this.bones={},this.headY=1.4,this.tailJoints=[],this.hairJoints=[],this.moodExpr={},this.faceMap=[],this._q=new ve,this._e=new Zt,this._w=new w,this._blink=0,this._nextBlink=2,this._blinkT=-1,this._gaze=new Me,this._gazeTarget=new Me,this._nextGaze=1,this._hips0=0}async load(e){let n=await W_.parseAsync(e,""),i=n.userData.vrm;if(!i)throw new Error("Keine VRM-Datei");return Ln.removeUnnecessaryVertices(n.scene),Ln.combineSkeletons&&Ln.combineSkeletons(n.scene),this.isV0=i.meta?.metaVersion==="0",this.isV0&&Ln.rotateVRM0(i),i.scene.traverse(s=>{s.frustumCulled=!1}),this.vrm=i,this._setupRig(),i}dispose(){this.vrm&&Ln.deepDispose(this.vrm.scene),this.vrm=null}_setupRig(){let e=this.vrm,n=e.humanoid;this.bones={};for(let o of GA){let a=n.getNormalizedBoneNode(o);a&&(this.bones[o]=a)}for(let o of["left","right"])for(let a of[...V_,"Thumb"])for(let l of z_){let c=o+a+l,h=n.getNormalizedBoneNode(c);h&&(this.bones[c]=h)}e.scene.updateMatrixWorld(!0);let i=n.getRawBoneNode("head");this.headY=i?i.getWorldPosition(new w).y:1.4,this._hips0=this.bones.hips?this.bones.hips.position.y:0,this.tailJoints=[],this.hairJoints=[];for(let o of e.springBoneManager?.joints??[]){o.settings={...o.settings,gravityDir:o.settings.gravityDir.clone()},o._g0=o.settings.gravityPower,o._d0=o.settings.gravityDir.clone();let a=o.bone.name||"";if(/tail/i.test(a)){let l=a.match(/(\d+)\s*$/);o._phase=l?+l[1]*1.37:Math.random()*6,this.tailJoints.push(o)}else/hair|ear/i.test(a)&&this.hairJoints.push(o)}let s=e.expressionManager,r=new Set(s.expressions.map(o=>o.expressionName));this.faceMap=ds.filter(o=>!o.startsWith("eyeLook")&&o!=="tongueOut").map(o=>[o,o[0].toUpperCase()+o.slice(1)]).filter(([,o])=>r.has(o)),this.moodExpr={};for(let[o,a]of Object.entries(WA)){let l=s.getExpression(a);if(!l)continue;let c=l.binds.filter(h=>!(h instanceof To)||h.primitives.every(u=>!XA(u)));l.binds.length=0,l.binds.push(...c),this.moodExpr[o]=l}}materials(){let e=new Set;return this.vrm.scene.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(i=>e.add(i))}),[...e]}_set(e,n,i,s){let r=this.bones[e];r&&(this._e.set(this.isV0?-n:n,i,this.isV0?-s:s,"YXZ"),r.quaternion.setFromEuler(this._e))}update(e,n,i){if(!this.vrm)return;let s=this.S,r=e.presence,o=1-r,a=this.vrm.expressionManager;this._idle(i);let l=e.blendshapes;for(let[T,y]of this.faceMap)a.setValue(y,l[T]);o>.01&&(a.setValue("EyeBlinkLeft",l.eyeBlinkLeft*r+this._blink*o),a.setValue("EyeBlinkRight",l.eyeBlinkRight*r+this._blink*o)),this.vrm.lookAt&&(this.vrm.lookAt.autoUpdate=!1,this.vrm.lookAt.yaw=(e.gaze.yaw*r+this._gaze.x*o)*22,this.vrm.lookAt.pitch=(e.gaze.pitch*r+this._gaze.y*o)*16);for(let T in this.moodExpr)this.moodExpr[T].weight=VA(e.emotion[T]);let c=Math.sin(n*Math.PI*2*.23)*s.breathing,h=.3+.7*o,u=e.head.pitch+Math.sin(n*.47+1)*.02*h,d=e.head.yaw+Math.sin(n*.31)*.03*h,f=e.head.roll+Math.sin(n*.23+2)*.02*h,g=s.bodyFollow,_=nt.clamp(e.headOffset.x*3,-.4,.4),p=nt.clamp(e.headOffset.y*3,-.3,.3);this._set("neck",u*.35,d*.35,f*.35),this._set("head",u*.55+c*.008,d*.55,f*.5),this._set("upperChest",c*.025,d*.08*g,f*.1*g),this._set("chest",c*.02+u*.08*g,d*.1*g,f*.08*g-_*.12*g),this._set("spine",-p*.1*g,d*.06*g+Math.sin(n*.4)*.01,-_*.15*g+Math.sin(n*.33)*.012),this.bones.hips&&(this.bones.hips.position.y=this._hips0+c*.002,this._set("hips",0,Math.sin(n*.27)*.015,Math.sin(n*.35+1)*.01));let m=Math.sin(n*.5)*.02;this._set("leftShoulder",0,0,-.02-c*.015),this._set("rightShoulder",0,0,.02+c*.015),this._set("leftUpperArm",.05,.12,-1.18+m+c*.02),this._set("rightUpperArm",.05,-.12,1.18-m-c*.02),this._set("leftLowerArm",0,-.35,0),this._set("rightLowerArm",0,.35,0),this._set("leftHand",0,0,.1),this._set("rightHand",0,0,-.1);for(let T of["left","right"]){let y=T==="left"?1:-1;for(let E of V_)for(let C of z_)this._set(T+E+C,0,0,y*.25);this._set(T+"ThumbProximal",0,y*.3,0)}this._wind(n,e.emotion),this.vrm.update(i)}_idle(e){if(this._nextBlink-=e,this._nextBlink<=0&&this._blinkT<0&&(this._blinkT=0,this._nextBlink=2.5+Math.random()*3.5),this._blinkT>=0){this._blinkT+=e;let n=this._blinkT/.16;this._blink=n<1?Math.sin(n*Math.PI):0,n>=1&&(this._blinkT=-1)}this._nextGaze-=e,this._nextGaze<=0&&(this._gazeTarget.set((Math.random()-.5)*.6,(Math.random()-.5)*.3),this._nextGaze=1.5+Math.random()*3),this._gaze.lerp(this._gazeTarget,zA(8,e))}_wind(e,n){let i=this.S.wind,s=this._w,r=1+n.happy*.8+n.angry*1.2-n.sad*.6;for(let o of this.tailJoints){let a=o._phase;s.set(Math.sin(e*1.1+a)+Math.sin(e*.37+a*2)*.5,Math.sin(e*.8+a)*.35,Math.sin(e*.9+a*1.7)*.4),G_(o,s,.35*i*r)}for(let o of this.hairJoints)s.set(Math.sin(e*.9+3)*.6,0,Math.sin(e*.6)*.3),G_(o,s,.06*i)}};function G_(t,e,n){let i=t.settings.gravityDir.copy(t._d0).multiplyScalar(t._g0).addScaledVector(e,n),s=i.length();t.settings.gravityPower=s,s>1e-5?i.divideScalar(s):i.set(0,-1,0)}function XA(t){for(let e=t,n=0;e&&n<3;e=e.parent,n++)if(/face/i.test(e.name||""))return!0;return!1}var qa=typeof self<"u"?self:{};function Yv(t){e:{for(var e=["CLOSURE_FLAGS"],n=qa,i=0;i<e.length;i++)if((n=n[e[i]])==null){e=null;break e}e=n}return(t=e&&e[t])!=null&&t}function Er(){throw Error("Invalid UTF8")}function X_(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}var Wc,ep,qA=typeof TextDecoder<"u",YA,jA=typeof TextEncoder<"u";function jv(t){if(jA)t=(YA||=new TextEncoder).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&s<t.length){let r=t.charCodeAt(++s);if(56320<=r&&57343>=r){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var za,Kv=Yv(610401301),KA=Yv(188588736),q_=qa.navigator;function hp(t){return!!Kv&&!!za&&za.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function hi(t){var e;return(e=qa.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Gs(){return!!Kv&&!!za&&0<za.brands.length}function tp(){return Gs()?hp("Chromium"):(hi("Chrome")||hi("CriOS"))&&!(!Gs()&&hi("Edge"))||hi("Silk")}function Up(t){return Up[" "](t),t}za=q_&&q_.userAgentData||null,Up[" "]=function(){};var ZA=!Gs()&&(hi("Trident")||hi("MSIE"));!hi("Android")||tp(),tp(),hi("Safari")&&(tp()||!Gs()&&hi("Coast")||!Gs()&&hi("Opera")||!Gs()&&hi("Edge")||(Gs()?hp("Microsoft Edge"):hi("Edg/"))||Gs()&&hp("Opera"));var Zv={},Ua=null;function $A(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,o){function a(f){for(;l<r.length;){var g=r.charAt(l++),_=Ua[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return f}$v();for(var l=0;;){var c=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&c===-1)break;o(c<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}})(t,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function $v(){if(!Ua){Ua={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));Zv[n]=i;for(var s=0;s<i.length;s++){var r=i[s];Ua[r]===void 0&&(Ua[r]=s)}}}}var Jv=typeof Uint8Array<"u",Qv=!ZA&&typeof btoa=="function";function Y_(t){if(!Qv){var e;e===void 0&&(e=0),$v(),e=Zv[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var s=t[l],r=t[l+1],o=t[l+2],a=e[s>>2];s=e[(3&s)<<4|r>>4],r=e[(15&r)<<2|o>>6],o=e[63&o],n[c++]=a+s+r+o}switch(a=0,o=i,t.length-l){case 2:o=e[(15&(a=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}var j_=/[-_.]/g,JA={"-":"+",_:"/",".":"="};function QA(t){return JA[t]||""}function ex(t){if(!Qv)return $A(t);j_.test(t)&&(t=t.replace(j_,QA)),t=atob(t);let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Ya(t){return Jv&&t!=null&&t instanceof Uint8Array}var e3;function ph(){return e3||=new Uint8Array(0)}var Co={},t3;function tx(t){if(t!==Co)throw Error("illegal external caller")}function Ar(){return t3||=new ms(null,Co)}function Np(t){tx(Co);var e=t.g;return(e=e==null||Ya(e)?e:typeof e=="string"?ex(e):null)==null?e:t.g=e}var ms=class{constructor(t,e){if(tx(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){let t=Np(this);return t?new Uint8Array(t):ph()}};function nx(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Dp(){return Error("Failed to read varint, encoding is invalid.")}function ix(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Op(t){if(typeof t=="string")return{buffer:ex(t),P:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Uint8Array)return{buffer:t,P:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),P:!1};if(t.constructor===ms)return{buffer:Np(t)||ph(),P:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Fp(){return typeof BigInt=="function"}var n3=typeof Uint8Array.prototype.slice=="function",sx,bt=0,Yt=0;function Sr(t){let e=0>t,n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){let[i,s]=Hp(n,t);t=s,n=i}bt=n>>>0,Yt=t>>>0}function Bp(t){let e=sx||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Yt=0,bt=e.getUint32(0,!0)}function up(t,e){return 4294967296*e+(t>>>0)}function kp(t,e){let n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=up(t,e),n?-t:t}function ih(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else Fp()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+K_(n)+K_(t));return n}function K_(t){return t=String(t),"0000000".slice(t.length)+t}function rx(){var t=bt,e=Yt;if(2147483648&e)if(Fp())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=Hp(t,e);t="-"+ih(n,i)}else t=ih(t,e);return t}function mh(t){if(16>t.length)Sr(Number(t));else if(Fp())t=BigInt(t),bt=Number(t&BigInt(4294967295))>>>0,Yt=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");Yt=bt=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));Yt*=1e6,bt=1e6*bt+r,4294967296<=bt&&(Yt+=Math.trunc(bt/4294967296),Yt>>>=0,bt>>>=0)}if(e){let[i,s]=Hp(bt,Yt);bt=i,Yt=s}}}function Hp(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Vp(t,e){let n,i=0,s=0,r=0,o=t.h,a=t.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(32>r&&128&n);for(32<r&&(s|=(127&n)>>4),r=3;32>r&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Tr(t,a),128>n)return e(i>>>0,s>>>0);throw Dp()}function zp(t){let e=0,n=t.g,i=n+10,s=t.h;for(;n<i;){let r=s[n++];if(e|=r,(128&r)==0)return Tr(t,n),!!(127&e)}throw Dp()}function Xs(t){let e=t.h,n=t.g,i=e[n++],s=127&i;if(128&i&&(i=e[n++],s|=(127&i)<<7,128&i&&(i=e[n++],s|=(127&i)<<14,128&i&&(i=e[n++],s|=(127&i)<<21,128&i&&(i=e[n++],s|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Dp();return Tr(t,n),s}function qs(t){return Xs(t)>>>0}function dp(t){var e=t.h;let n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],Tr(t,t.g+4),(i<<0|s<<8|r<<16|e<<24)>>>0}function fp(t){var e=dp(t);t=2*(e>>31)+1;let n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function i3(t){return Xs(t)}function np(t,e,{ca:n=!1}={}){t.ca=n,e&&(e=Op(e),t.h=e.buffer,t.m=e.P,t.j=0,t.l=t.h.length,t.g=t.j)}function Tr(t,e){if(t.g=e,e>t.l)throw ix(t.l,e)}function ox(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);let n=t.g,i=n+e;if(i>t.l)throw ix(e,t.l-n);return t.g=i,n}function ax(t,e){if(e==0)return Ar();var n=ox(t,e);return t.ca&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?ph():n3?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ar():new ms(n,Co)}var Z_=[];function lx(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=qs(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw nx(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Kc(t){switch(t.h){case 0:t.h!=0?Kc(t):zp(t.g);break;case 1:Tr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Kc(t);else{var e=qs(t.g);Tr(t=t.g,t.g+e)}break;case 5:Tr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!lx(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Kc(t)}break;default:throw nx(t.h,t.l)}}function ja(t,e,n){let i=t.g.l,s=qs(t.g),r=t.g.g+s,o=r-i;if(0>=o&&(t.g.l=r,n(e,t,void 0,void 0,void 0),o=r-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=r,t.g.l=i,e}function Gp(t){var e=qs(t.g),n=ox(t=t.g,e);if(t=t.h,qA){var i,s=t;(i=ep)||(i=ep=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(a){if(Wc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Wc=!0}catch{Wc=!1}}throw!Wc&&(ep=void 0),a}}else{e=(r=n)+e,n=[];let a,l=null;for(;r<e;){var o=t[r++];128>o?n.push(o):224>o?r>=e?Er():(a=t[r++],194>o||(192&a)!=128?(r--,Er()):n.push((31&o)<<6|63&a)):240>o?r>=e-1?Er():(a=t[r++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=t[r++]))!=128?(r--,Er()):n.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?r>=e-2?Er():(a=t[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,Er()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Er(),8192<=n.length&&(l=X_(l,n),n.length=0)}r=X_(l,n)}return r}function cx(t){let e=qs(t.g);return ax(t.g,e)}function gh(t,e,n){var i=qs(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Xc=[];function $_(t){return t?/^\d+$/.test(t)?(mh(t),new J_(bt,Yt)):null:s3||=new J_(0,0)}var J_=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}},s3;function Q_(t){return t?/^-?\d+$/.test(t)?(mh(t),new ev(bt,Yt)):null:r3||=new ev(0,0)}var ev=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}},r3;function sh(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ka(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function _h(t,e){if(0<=e)Ka(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Ga(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Po(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function fi(t,e,n){Ka(t.g,8*e+n)}function Wp(t,e){return fi(t,e,2),e=t.g.end(),Po(t,e),e.push(t.h),e}function Xp(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function vh(t,e,n){fi(t,e,2),Ka(t.g,n.length),Po(t,t.g.end()),Po(t,n)}function pp(t,e,n,i){n!=null&&(e=Wp(t,e),i(n,t),Xp(t,e))}var Ys=class{constructor(e,n,i,s){this.g=e,this.h=n,this.l=i,this.pa=s}};function Kn(t){return Array.prototype.slice.call(t)}function xh(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var zi=xh(),tv=xh("0di"),ip=xh("2ex"),nv=xh("0dg"),qp=zi?(t,e)=>{t[zi]|=e}:(t,e)=>{t.g!==void 0?t.g|=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},rh=zi?(t,e)=>{t[zi]&=~e}:(t,e)=>{t.g!==void 0&&(t.g&=~e)};function vn(t,e,n){return n?t|e:t&~e}var Bt=zi?t=>0|t[zi]:t=>0|t.g,ut=zi?t=>t[zi]:t=>t.g,Ft=zi?(t,e)=>(t[zi]=e,t):(t,e)=>(t.g!==void 0?t.g=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function Bo(t){return qp(t,34),t}function o3(t,e){Ft(e,-14591&(0|t))}function mp(t,e){Ft(e,-14557&(34|t))}function hx(t){return(t=t>>14&1023)===0?536870912:t}var Yp,Za={},ux={};function iv(t){return!(!t||typeof t!="object"||t.Ja!==ux)}function jp(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function Kp(t,e,n){if(t!=null){if(typeof t=="string")t=t?new ms(t,Co):Ar();else if(t.constructor!==ms)if(Ya(t))t=t.length?new ms(n?t:new Uint8Array(t),Co):Ar();else{if(!e)throw Error();t=void 0}}return t}function oh(t,e,n){if(!Array.isArray(t)||t.length)return!1;let i=Bt(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(Ft(t,1|i),!0)}var sv=[];function qi(t){if(2&t)throw Error()}Ft(sv,55),Yp=Object.freeze(sv);var ah=class t{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){let e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new t(this.g,this.h,this.m)}},Ws,a3,l3;function dx(t,e){(e=Ws?e[Ws]:void 0)&&(t[Ws]=Kn(e))}function fx(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function px(){let t=Error();fx(t,"incident"),(function(e){qa.setTimeout((()=>{throw e}),0)})(t)}function gp(t){return fx(t=Error(t),"warning"),t}function Js(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function mx(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});var c3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function yh(t){let e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&c3.test(t)}function ko(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function h3(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function rv(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function gx(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function Zp(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(Sr(t),t=kp(bt,Yt)),t}function $p(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),gx(t)||(mh(t),t=rx()),t)}function lh(t){return t==null?t:yh(t)?typeof t=="number"?Zp(t):$p(t):void 0}function $a(t){if(typeof t!="string")throw Error();return t}function Ho(t){if(t!=null&&typeof t!="string")throw Error();return t}function wr(t){return t==null||typeof t=="string"?t:void 0}function Jp(t,e,n,i){if(t!=null&&typeof t=="object"&&t.X===Za)return t;if(!Array.isArray(t))return n?2&i?(t=e[tv])?e=t:(Bo((t=new e).s),e=e[tv]=t):e=new e:e=void 0,e;let s=n=Bt(t);return s===0&&(s|=32&i),s|=2&i,s!==n&&Ft(t,s),new e(t)}function u3(t,e,n){if(e){var i=!!i;if(!yh(e=t))throw gp("int64");typeof e=="string"?i=$p(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):gx(e=String(i))?i=e:(Sr(i),i=rx())):i=Zp(e)}else i=lh(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}var ch,Qp,d3;function hh(t){switch(typeof t){case"boolean":return Qp||=[0,void 0,!0];case"number":return 0<t?void 0:t===0?d3||=[0,void 0]:[-t,void 0];case"string":return[0,t];case"object":return t}}function br(t,e){return _x(t,e[0],e[1])}function _x(t,e,n){if(t==null&&(t=ch),ch=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(i=Bt(t)))throw Error("farr");if(64&i)return t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error("mid");e:{let s=(n=t).length;if(s){let r=s-1;if(jp(n[r])){if(1024<=(e=r-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,s-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return Ft(t,i),t}var f3={},p3=(function(){try{return Up(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Da=class{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}},m3=p3?(Object.setPrototypeOf(Da.prototype,Map.prototype),Object.defineProperties(Da.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Da):class extends Map{constructor(){super()}};function ov(t){return t}function sp(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var di=class extends m3{constructor(t,e,n=ov,i=ov){super();let s=Bt(t);s|=64,Ft(t,s),this.N=s,this.U=e,this.S=n,this.Z=this.U?g3:i;for(let r=0;r<t.length;r++){let o=t[r],a=n(o[0],!1,!0),l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,s),super.set(a,l)}}oa(t=av){if(this.size!==0)return this.Y(t)}Y(t=av){let e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){sp(this),super.clear()}delete(t){return sp(this),super.delete(this.S(t,!0,!1))}entries(){var t=this.na();return new ah(t,_3,this)}keys(){return this.Ia()}values(){var t=this.na();return new ah(t,di.prototype.get,this)}forEach(t,e){super.forEach(((n,i)=>{t.call(e,this.get(i),i,this)}))}set(t,e){return sp(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(t){let e=this.S(t[0],!1,!0);t=t[1],t=this.U?t===void 0?null:t:this.Z(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);let e=super.get(t);if(e!==void 0){var n=this.U;return n?((n=this.Z(e,!1,!0,n,this.ta,this.N))!==e&&super.set(t,n),n):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function g3(t,e,n,i,s,r){return t=Jp(t,i,n,r),s&&(t=Eh(t)),t}function av(t){return t}function _3(t){return[t,this.get(t)]}var v3;function lv(){return v3||=new di(Bo([]),void 0,void 0,void 0,f3)}function em(t,e,n,i,s){if(t!=null){if(Array.isArray(t))t=oh(t,void 0,0)?void 0:s&&2&Bt(t)?t:Mh(t,e,n,i!==void 0,s);else if(jp(t)){let r={};for(let o in t)r[o]=em(t[o],e,n,i,s);t=r}else t=e(t,i);return t}}function Mh(t,e,n,i,s){let r=i||n?Bt(t):0;i=i?!!(32&r):void 0;let o=Kn(t);for(let a=0;a<o.length;a++)o[a]=em(o[a],e,n,i,s);return n&&(dx(o,t),n(r,o)),o}function x3(t){return em(t,tm,void 0,void 0,!1)}function tm(t){return t.X===Za?t.toJSON():t instanceof di?t.oa(x3):(function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(oh(e,void 0,0))return}else{if(Ya(e))return Y_(e);if(e instanceof ms){let n=e.g;return n==null?"":typeof n=="string"?n:e.g=Y_(n)}if(e instanceof di)return e.oa()}}return e})(t)}function _p(t,e,n=mp){if(t!=null){if(Jv&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=Bt(t);return 2&i||(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t=e?Ft(t,-12293&(34|i)):Mh(t,_p,4&i?mp:n,!0,!0)),t}return t.X===Za?(n=t.s,t=2&(i=ut(n))?t:nm(t,n,i,!0)):t instanceof di&&!(2&t.N)&&(n=Bo(t.Y(_p)),t=new di(n,t.U,t.S,t.Z)),t}}function nm(t,e,n,i){return t=t.constructor,ch=e=vx(e,n,i),e=new t(e),ch=void 0,e}function vx(t,e,n){let i=n||2&e?mp:o3,s=!!(32&e);return t=(function(r,o,a){let l=Kn(r);var c=l.length;let h=256&o?l[c-1]:void 0;for(c+=h?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(h){o=l[o]={};for(let u in h)o[u]=a(h[u])}return dx(l,r),l})(t,e,(r=>_p(r,s,i))),qp(t,32|(n?2:0)),t}function Eh(t){let e=t.s,n=ut(e);return 2&n?nm(t,e,n,!1):t}function xx(t,e,n,i){return!(4&e)||n!=null&&(!i&&n===0&&(4096&e||8192&e)&&5>(t.constructor[nv]=1+(0|t.constructor[nv]))&&px(),n!==0&&!(n&e))}function js(t,e){return Yi(t=t.s,ut(t),e)}function cv(t,e,n,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=t.length||e>=n))return t[e]}function Yi(t,e,n,i){if(n===-1)return null;let s=hx(e);if(!(n>=s)){var r=t.length;return i&&256&e&&(i=t[r-1][n])!=null?(cv(t,e,s,n)&&ip!=null&&(4<=(e=(t=l3??={})[ip]||0)||(t[ip]=e+1,px())),i):cv(t,e,s,n)}return 256&e?t[t.length-1][n]:void 0}function St(t,e,n,i){let s=t.s,r=ut(s);return qi(r),At(s,r,e,n,i),t}function At(t,e,n,i,s){let r=hx(e);if(n>=r||s){let o=e;if(256&e)s=t[t.length-1];else{if(i==null)return o;s=t[r+(+!!(512&e)-1)]={},o|=256}return s[n]=i,n<r&&(t[n+(+!!(512&e)-1)]=void 0),o!==e&&Ft(t,o),o}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function Vo(t,e,n,i,s){var r=2&e;let o=Yi(t,e,n,s);Array.isArray(o)||(o=Yp);let a=!(2&i);i=!(1&i);let l=!!(32&e),c=Bt(o);return c!==0||!l||r||a?1&c||(c|=1,Ft(o,c)):(c|=33,Ft(o,c)),r?(t=!1,2&c||(Bo(o),t=!!(4&c)),(i||t)&&Object.freeze(o)):(r=!!(2&c)||!!(2048&c),i&&r?(o=Kn(o),i=1,l&&!a&&(i|=32),Ft(o,i),At(t,e,n,o,s)):a&&32&c&&!r&&rh(o,32)),o}function Zc(t,e){t=t.s;let n=ut(t),i=Yi(t,n,e),s=Js(i);return s!=null&&s!==i&&At(t,n,e,s),s}function yx(t){t=t.s;let e=ut(t),n=Yi(t,e,1),i=Kp(n,!0,!!(34&e));return i!=null&&i!==n&&At(t,e,1,i),i}function Ao(t,e,n){let i=t.s,s=ut(i),r=2&s?1:2,o=Mx(i,s,e);var a=Bt(o);if(xx(t,a,void 0,!1)){(4&a||Object.isFrozen(o))&&(o=Kn(o),a=Rr(a,s),s=At(i,s,e,o));let l=t=0;for(;t<o.length;t++){let c=n(o[t]);c!=null&&(o[l++]=c)}l<t&&(o.length=l),a=vn(a=Ex(a,s),20,!0),a=vn(a,4096,!1),a=vn(a,8192,!1),Ft(o,a),2&a&&Object.freeze(o)}return Oa(a)||(n=a,(a=(t=r===1||r===4&&!!(32&a))?vn(a,2,!0):Io(a,s,!1))!==n&&Ft(o,a),t&&Object.freeze(o)),r===2&&Oa(a)&&(o=Kn(o),a=Io(a=Rr(a,s),s,!1),Ft(o,a),At(i,s,e,o)),o}function Mx(t,e,n){return t=Yi(t,e,n),Array.isArray(t)?t:Yp}function Ex(t,e){return t===0&&(t=Rr(t,e)),vn(t,1,!0)}function Oa(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function Sx(t){t=Kn(t);for(let e=0;e<t.length;e++){let n=t[e]=Kn(t[e]);Array.isArray(n[1])&&(n[1]=Bo(n[1]))}return t}function uh(t,e,n){{let a=t.s,l=ut(a);if(qi(l),n==null)At(a,l,e);else{var i,s=Bt(n),r=s,o=!!(2&s)||Object.isFrozen(n);if((i=!o)&&(i=!1),xx(t,s))for(s=21,o&&(n=Kn(n),r=0,s=Io(s=Rr(s,l),l,!0)),t=0;t<n.length;t++)n[t]=$a(n[t]);i&&(n=Kn(n),r=0,s=Io(s=Rr(s,l),l,!0)),s!==r&&Ft(n,s),At(a,l,e,n)}}}function vp(t,e,n,i){t=t.s;let s=ut(t);qi(s),At(t,s,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ja(t,e,n,i){let s=ut(t);qi(s),t=Vo(t,s,e,2),i=n(i,!!(4&(e=Bt(t)))&&!!(4096&e)),t.push(i)}function y3(t){return t}function rp(t,e){return im(t=t.s,ut(t),ay)===e?e:-1}function im(t,e,n){let i=0;for(let s=0;s<n.length;s++){let r=n[s];Yi(t,e,r)!=null&&(i!==0&&(e=At(t,e,i)),i=r)}return i}function sm(t,e,n,i){let s=ut(t);qi(s);let r=Yi(t,s,n,i),o;if(r!=null&&r.X===Za)return(e=Eh(r))!==r&&At(t,s,n,e,i),e.s;if(Array.isArray(r)){let a=Bt(r);o=2&a?vx(r,a,!1):r,o=br(o,e)}else o=br(void 0,e);return o!==r&&At(t,s,n,o,i),o}function Tx(t,e,n,i){t=t.s;let s=ut(t),r=Yi(t,s,n,i);return(e=Jp(r,e,!1,s))!==r&&e!=null&&At(t,s,n,e,i),e}function it(t,e,n,i=!1){if((e=Tx(t,e,n,i))==null)return e;t=t.s;let s=ut(t);if(!(2&s)){let r=Eh(e);r!==e&&At(t,s,n,e=r,i)}return e}function wx(t,e,n,i,s,r){var o=2,a=!!(2&e);o=a?1:o,s=!!s,r&&=!a,a=Mx(t,e,i);var l=Bt(a);let c=!!(4&l);if(!c){var h=a,u=e;let d=!!(2&(l=Ex(l,e)));d&&(u=vn(u,2,!0));let f=!d,g=!0,_=0,p=0;for(;_<h.length;_++){let m=Jp(h[_],n,!1,u);if(m instanceof n){if(!d){let T=!!(2&Bt(m.s));f&&=!T,g&&=T}h[p++]=m}}p<_&&(h.length=p),l=vn(l,4,!0),l=vn(l,16,g),l=vn(l,8,f),Ft(h,l),d&&Object.freeze(h)}if(r&&!(8&l||!a.length&&(o===1||o===4&&32&l))){for(Oa(l)&&(a=Kn(a),l=Rr(l,e),e=At(t,e,i,a)),n=a,r=l,h=0;h<n.length;h++)(l=n[h])!==(u=Eh(l))&&(n[h]=u);r=vn(r,8,!0),r=vn(r,16,!n.length),Ft(n,r),l=r}return Oa(l)||(n=l,(l=(r=o===1||o===4&&!!(32&l))?vn(l,!a.length||16&l&&(!c||32&l)?2:2048,!0):Io(l,e,s))!==n&&Ft(a,l),r&&Object.freeze(a)),o===2&&Oa(l)&&(a=Kn(a),l=Io(l=Rr(l,e),e,s),Ft(a,l),At(t,e,i,a)),a}function _s(t,e,n){t=t.s;let i=ut(t);return wx(t,i,e,n,!1,!(2&i))}function Re(t,e,n,i,s){return i==null&&(i=void 0),St(t,n,i,s)}function Fa(t,e,n,i){i==null&&(i=void 0),t=t.s;let s=ut(t);qi(s),(n=im(t,s,n))&&n!==e&&i!=null&&(s=At(t,s,n)),At(t,s,e,i)}function Rr(t,e){return t=vn(t,2,!!(2&e)),t=vn(t,32,!0),vn(t,2048,!1)}function Io(t,e,n){return 32&e&&n||(t=vn(t,32,!1)),t}function dh(t,e,n,i){t=t.s;let s=ut(t);qi(s),e=wx(t,s,n,e,!0),n=i??new n,e.push(n),2&Bt(n.s)?rh(e,8):rh(e,16)}function ui(t,e){return ko(js(t,e))}function wi(t,e){return t??e}function Gt(t,e){return wi(Zc(t,e),0)}function Gi(t,e){return wi(wr(js(t,e)),"")}function Wa(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);St(t,e,n)}function Wi(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw gp("int32");n|=0}St(t,e,n)}function Se(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);St(t,e,n)}function bi(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}di.prototype.toJSON=void 0,di.prototype.Ja=ux;var xe=class{constructor(t,e){this.s=_x(t,e)}toJSON(){return bx(this,Mh(this.s,tm,void 0,void 0,!1),!0)}l(){var t=wR;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){let t=this.s;return nm(this,t,ut(t),!1)}P(){return!!(2&Bt(this.s))}};function bx(t,e,n){var i=KA?void 0:t.constructor.B;let s=ut(n?t.s:e);if(!(t=e.length))return e;let r,o;if(jp(n=e[t-1])){e:{var a=n;let h={},u=!1;for(var l in a){let d=a[l];if(Array.isArray(d)){let f=d;(oh(d,i,+l)||iv(d)&&d.size===0)&&(d=null),d!=f&&(u=!0)}d!=null?h[l]=d:u=!0}if(u){for(var c in h){a=h;break e}a=null}}a!=n&&(r=!0),t--}for(l=+!!(512&s)-1;0<t&&(n=e[c=t-1],c-=l,n==null||oh(n,i,c)||iv(n)&&n.size===0);t--)o=!0;return(r||o)&&(e=Array.prototype.slice.call(e,0,t),a&&e.push(a)),e}function Ax(t){return Array.isArray(t)?t[0]instanceof Ys?t:[I3,t]:[t,void 0]}function zo(t,e){if(Array.isArray(e)){var n=Bt(e);if(4&n)return e;for(var i=0,s=0;i<e.length;i++){let r=t(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),Ft(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}xe.prototype.X=Za,xe.prototype.toString=function(){return bx(this,this.s,!1).toString()};var hv=Symbol();function rm(t){let e=t[hv];if(!e){let n=Cx(t),i=am(t),s=i.l;e=s?(r,o)=>s(r,o,i):(r,o)=>{for(;lx(o)&&o.h!=4;){var a=o.m,l=i[a];if(!l){var c=i.ea;c&&(c=c[a])&&(l=i[a]=M3(c))}l&&l(o,r,a)||(a=(l=o).l,Kc(l),l.ia?l=void 0:(c=l.g.g-a,l.g.g=a,l=ax(l.g,c)),a=r,l&&(Ws||=Symbol(),(c=a[Ws])?c.push(l):a[Ws]=[l]))}n===Rx||n===$c||n.j||(r[a3||=Symbol()]=n)},t[hv]=e}return e}function M3(t){let e=(t=Ax(t))[0].g;if(t=t[1]){let n=rm(t),i=am(t).T;return(s,r,o)=>e(s,r,o,i,n)}return e}var Ba=class{},Rx,$c,ka=Symbol();function E3(t,e,n){let i=n[1],s;if(i){let r=i[ka];s=r?r.T:hh(i[0]),t[e]=r??i}s&&s===Qp?(t.g||(t.g=new Set)).add(e):n[0]&&(t.h||(t.h=new Set)).add(e)}function uv(t,e){return[t.l,!e||0<e[0]?void 0:e]}function Cx(t){var e=t[ka];if(e)return e;if(!(e=om(t,t[ka]=new Ba,uv,uv,E3)).ea&&!e.h&&!e.g){let n=!0;for(let i in e)isNaN(i)||(n=!1);n?(hh(t[0])===Qp?$c?e=$c:((e=new Ba).T=hh(!0),e=$c=e):e=Rx||=new Ba,e=t[ka]=e):e.j=!0}return e}function S3(t,e,n){t[e]=n}function om(t,e,n,i,s=S3){e.T=hh(t[0]);let r=0;var o=t[++r];o&&o.constructor===Object&&(e.ea=o,typeof(o=t[++r])=="function"&&(e.l=o,e.m=t[++r],o=t[++r]));let a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var l=0;l<o.length;l++)a[o[l]]=o;o=t[++r]}for(l=1;o!==void 0;){let u;typeof o=="number"&&(l+=o,o=t[++r]);var c=void 0;if(o instanceof Ys?u=o:(u=L3,r--),u.pa){o=t[++r],c=t;var h=r;typeof o=="function"&&(o=o(),c[h]=o),c=o}for(h=l+1,typeof(o=t[++r])=="number"&&0>o&&(h-=o,o=t[++r]);l<h;l++){let d=a[l];s(e,l,c?i(u,c,d):n(u,d))}}return e}var dv=Symbol();function Px(t){let e=t[dv];if(!e){let n=Sh(t);e=(i,s)=>Lx(i,s,n),t[dv]=e}return e}var xp=Symbol();function T3(t){return t.h}function w3(t,e){let n,i,s=t.h;return(r,o,a)=>s(r,o,a,i||=Sh(e).T,n||=Px(e))}function Sh(t){let e=t[xp];return e||(e=om(t,t[xp]={},T3,w3),Ix(t),e)}var yp=Symbol();function b3(t,e){let n=t.g;return e?(i,s,r)=>n(i,s,r,e):n}function A3(t,e,n){let i=t.g,s,r;return(o,a,l)=>i(o,a,l,r||=am(e).T,s||=rm(e),n)}function am(t){let e=t[yp];return e||(Cx(t),e=om(t,t[yp]={},b3,A3),Ix(t),e)}function Ix(t){yp in t&&ka in t&&xp in t&&(t.length=0)}function fv(t,e){var n=t[e];if(n)return n;if((n=t.ea)&&(n=n[e])){var i=(n=Ax(n))[0].h;if(n=n[1]){let s=Px(n),r=Sh(n).T;n=(n=t.m)?n(r,s):(o,a,l)=>i(o,a,l,r,s)}else n=i;return t[e]=n}}function Lx(t,e,n){for(var i=ut(t),s=+!!(512&i)-1,r=t.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){let l=t[o];if(l==null)continue;let c=o-s,h=fv(n,c);h&&h(e,l,c)}if(256&i){i=t[r-1];for(let l in i)s=+l,Number.isNaN(s)||(r=i[l])!=null&&(a=fv(n,s))&&a(e,r,s)}if(t=Ws?t[Ws]:void 0)for(Po(e,e.g.end()),n=0;n<t.length;n++)Po(e,Np(t[n])||ph())}function On(t,e){return new Ys(t,e,!1,!1)}function Go(t,e){return new Ys(t,e,!0,!1)}function Th(t,e){return new Ys(t,e,!1,!0)}function Fn(t,e,n){At(t,ut(t),e,n)}var R3=Th((function(t,e,n,i,s){return t.h===2&&(t=ja(t,br([void 0,void 0],i),s),qi(i=ut(e)),(s=Yi(e,i,n))instanceof di?(2&s.N)!=0?((s=s.Y()).push(t),At(e,i,n,s)):s.Oa(t):Array.isArray(s)?(2&Bt(s)&&At(e,i,n,s=Sx(s)),s.push(t)):At(e,i,n,[t]),!0)}),(function(t,e,n,i,s){if(e instanceof di)e.forEach(((r,o)=>{pp(t,n,br([o,r],i),s)}));else if(Array.isArray(e))for(let r=0;r<e.length;r++){let o=e[r];Array.isArray(o)&&pp(t,n,br(o,i),s)}}));function Ux(t,e,n){e:if(e!=null){if(yh(e)){if(typeof e=="string"){e=$p(e);break e}if(typeof e=="number"){e=Zp(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Q_(e),e!=null&&(fi(t,n,0),typeof e=="number"?(t=t.g,Sr(e),sh(t,bt,Yt)):(n=Q_(e),sh(t.g,n.h,n.g))))}function Nx(t,e,n){(e=ko(e))!=null&&e!=null&&(fi(t,n,0),_h(t.g,e))}function Dx(t,e,n){(e=mx(e))!=null&&(fi(t,n,0),t.g.g.push(e?1:0))}function Ox(t,e,n){(e=wr(e))!=null&&vh(t,n,jv(e))}function wh(t,e,n,i,s){pp(t,n,e instanceof xe?e.s:Array.isArray(e)?br(e,i):void 0,s)}function Fx(t,e,n){(e=e==null||typeof e=="string"||Ya(e)||e instanceof ms?e:void 0)!=null&&vh(t,n,Op(e).buffer)}function Bx(t,e,n){return(t.h===5||t.h===2)&&(e=Vo(e,ut(e),n,2,!1),t.h==2?gh(t,fp,e):e.push(fp(t.g)),!0)}var jt,gs=On((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=dp(i);let s=dp(i);i=2*(s>>31)+1;let r=s>>>20&2047;return t=4294967296*(1048575&s)+t,Fn(e,n,r==2047?t?NaN:1/0*i:r==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=Js(e))!=null&&(fi(t,n,1),t=t.g,(n=sx||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),bt=n.getUint32(0,!0),Yt=n.getUint32(4,!0),Ga(t,bt),Ga(t,Yt))})),en=On((function(t,e,n){return t.h===5&&(Fn(e,n,fp(t.g)),!0)}),(function(t,e,n){(e=Js(e))!=null&&(fi(t,n,5),t=t.g,Bp(e),Ga(t,bt))})),C3=Go(Bx,(function(t,e,n){if((e=zo(Js,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(fi(i,s,5),i=i.g,Bp(r),Ga(i,bt))}})),lm=Go(Bx,(function(t,e,n){if((e=zo(Js,e))!=null&&e.length){fi(t,n,2),Ka(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Bp(e[i]),Ga(n,bt)}})),Ks=On((function(t,e,n){return t.h===0&&(Fn(e,n,Vp(t.g,kp)),!0)}),Ux),op=On((function(t,e,n){return t.h===0&&(Fn(e,n,(t=Vp(t.g,kp))===0?void 0:t),!0)}),Ux),P3=On((function(t,e,n){return t.h===0&&(Fn(e,n,Vp(t.g,up)),!0)}),(function(t,e,n){e:if(e!=null){if(yh(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),rv(e)||(mh(e),e=ih(bt,Yt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:(function(s){if(0>s){Sr(s);let r=ih(bt,Yt);return s=Number(r),Number.isSafeInteger(s)?s:r}return rv(String(s))?s:(Sr(s),up(bt,Yt))})(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&$_(e),e!=null&&(fi(t,n,0),typeof e=="number"?(t=t.g,Sr(e),sh(t,bt,Yt)):(n=$_(e),sh(t.g,n.h,n.g))))})),kt=On((function(t,e,n){return t.h===0&&(Fn(e,n,Xs(t.g)),!0)}),Nx),bh=Go((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,ut(e),n,2,!1),t.h==2?gh(t,Xs,e):e.push(Xs(t.g)),!0)}),(function(t,e,n){if((e=zo(ko,e))!=null&&e.length){n=Wp(t,n);for(let i=0;i<e.length;i++)_h(t.g,e[i]);Xp(t,n)}})),Lo=On((function(t,e,n){return t.h===0&&(Fn(e,n,(t=Xs(t.g))===0?void 0:t),!0)}),Nx),Wt=On((function(t,e,n){return t.h===0&&(Fn(e,n,zp(t.g)),!0)}),Dx),Ha=On((function(t,e,n){return t.h===0&&(Fn(e,n,(t=zp(t.g))===!1?void 0:t),!0)}),Dx),xn=Go((function(t,e,n){return t.h===2&&(Ja(e,n,y3,t=Gp(t)),!0)}),(function(t,e,n){if((e=zo(wr,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&vh(i,s,jv(r))}})),Zs=On((function(t,e,n){return t.h===2&&(Fn(e,n,(t=Gp(t))===""?void 0:t),!0)}),Ox),xt=On((function(t,e,n){return t.h===2&&(Fn(e,n,Gp(t)),!0)}),Ox),I3=Th((function(t,e,n,i,s){return t.h===2&&(ja(t,sm(e,i,n,!0),s),!0)}),wh),L3=Th((function(t,e,n,i,s){return t.h===2&&(ja(t,sm(e,i,n),s),!0)}),wh);jt=new Ys((function(t,e,n,i,s){if(t.h!==2)return!1;i=br(void 0,i);let r=ut(e);qi(r);let o=Vo(e,r,n,3);return r=ut(e),4&Bt(o)&&(o=Kn(o),Ft(o,-2079&(1|Bt(o))),At(e,r,n,o)),o.push(i),ja(t,i,s),!0}),(function(t,e,n,i,s){if(Array.isArray(e))for(let r=0;r<e.length;r++)wh(t,e[r],n,i,s)}),!0,!0);var Mt=Th((function(t,e,n,i,s,r){if(t.h!==2)return!1;let o=ut(e);return qi(o),(r=im(e,o,r))&&n!==r&&At(e,o,r),ja(t,e=sm(e,i,n),s),!0}),wh),kx=On((function(t,e,n){return t.h===2&&(Fn(e,n,cx(t)),!0)}),Fx),U3=Go((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,ut(e),n,2,!1),t.h==2?gh(t,qs,e):e.push(qs(t.g)),!0)}),(function(t,e,n){if((e=zo(h3,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(fi(i,s,0),Ka(i.g,r))}})),Xi=On((function(t,e,n){return t.h===0&&(Fn(e,n,Xs(t.g)),!0)}),(function(t,e,n){(e=ko(e))!=null&&(e=parseInt(e,10),fi(t,n,0),_h(t.g,e))})),N3=Go((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,ut(e),n,2,!1),t.h==2?gh(t,i3,e):e.push(Xs(t.g)),!0)}),(function(t,e,n){if((e=zo(ko,e))!=null&&e.length){n=Wp(t,n);for(let i=0;i<e.length;i++)_h(t.g,e[i]);Xp(t,n)}})),Mp=class{constructor(e,n){this.h=e,this.g=n,this.l=it,this.m=Re,this.defaultValue=void 0}};function Ai(t,e){return new Mp(t,e)}function Qs(t,e){return(n,i)=>{if(Xc.length){let r=Xc.pop();r.o(i),np(r.g,n,i),n=r}else n=new class{constructor(r,o){if(Z_.length){let a=Z_.pop();np(a,r,o),r=a}else r=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,np(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:r=!1}={}){this.ia=r}}(n,i);try{let r=new t,o=r.s;rm(e)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,100>Xc.length&&Xc.push(n)}return s}}function Ah(t){return function(){let e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){let o=this.g;return this.g=[],o}}}};Lx(this.s,e,Sh(t)),Po(e,e.g.end());let n=new Uint8Array(e.h),i=e.l,s=i.length,r=0;for(let o=0;o<s;o++){let a=i[o];n.set(a,r),r+=a.length}return e.l=[n],n}}var pv=class extends xe{constructor(t){super(t)}},Hx=[0,Zs,On((function(t,e,n){return t.h===2&&(Fn(e,n,(t=cx(t))===Ar()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof xe){let i=e.Qa;return void(i&&(e=i(e),e!=null&&vh(t,n,Op(e).buffer)))}if(Array.isArray(e))return}Fx(t,e,n)}))],D3=[0,xt],Vx=[0,kt,Xi,Wt,-1,bh,Xi,-1],O3=[0,Wt,-1],zx=class extends xe{constructor(){super()}};zx.B=[6];var Gx=[0,Wt,xt,Wt,Xi,-1,N3,xt,-1,O3,Xi],Wx=[0,xt,-2],mv=class extends xe{constructor(){super()}},Xx=[0],qx=[0,kt,Wt,-4],Zn=class extends xe{constructor(t){super(t,2)}},It={},F3=[-2,It,Wt];It[336783863]=[0,xt,Wt,-1,kt,[0,[1,2,3,4,5,6],Mt,Xx,Mt,Gx,Mt,Wx,Mt,qx,Mt,Vx,Mt,[0,xt]],D3,Wt,[0,[1,3],[2,4],Mt,[0,bh],-1,Mt,[0,xn],-1,jt,[0,xt,-1]],xt];var B3=[0,Zs,Ha],Yx=[0,op,-1,Ha,-3,op,bh,Zs,Lo,op,-1,Ha,Lo,Ha,-2,Zs],Qa=[-1,{}],jx=[0,xt,1,Qa],Kx=[0,xt,xn,Qa];function $n(t,e){vp(t,2,Ho(e),"")}function Tt(t,e){Ja(t.s,3,$a,e)}function Je(t,e){Ja(t.s,4,$a,e)}var yn=class extends xe{constructor(t){super(t,500)}o(t){return Re(this,0,7,t)}};yn.B=[3,4,5,6,8,13,17,1005];var k3=[-500,Zs,-1,xn,-3,F3,jt,Hx,Lo,-1,jx,Kx,jt,B3,Zs,Yx,Lo,xn,987,xn],H3=[0,Zs,-1,Qa],V3=[-500,xt,-1,[-1,{}],998,xt],z3=[-500,xt,xn,-1,[-2,{},Wt],997,xn,-1],G3=[-500,xt,xn,Qa,998,xn];function Jn(t,e){dh(t,1,yn,e)}function Rt(t,e){Ja(t.s,10,$a,e)}function ot(t,e){Ja(t.s,15,$a,e)}var bn=class extends xe{constructor(t){super(t,500)}o(t){return Re(this,0,1001,t)}};bn.B=[1,6,7,9,10,15,16,17,14,1002];var Zx=[-500,jt,k3,4,jt,V3,jt,z3,Lo,jt,G3,xn,Lo,jx,Kx,jt,H3,xn,-2,Yx,Zs,-1,Ha,979,Qa,jt,Hx],W3=Qs(bn,Zx);bn.prototype.g=Ah(Zx);var X3=[0,jt,[0,kt,-2]],q3=class extends xe{constructor(t){super(t)}},Y3=[0,kt,en,xt,-1],cm=class extends xe{constructor(t){super(t)}g(){return _s(this,q3,1)}};cm.B=[1];var $x=[0,jt,Y3],Rh=Qs(cm,$x),j3=[0,kt,en],K3=[0,kt,-1,X3],Z3=class extends xe{constructor(t){super(t)}},$3=[0,kt,-3],J3=[0,en,-3],Q3=class extends xe{constructor(t){super(t)}},eR=[0,en,-1,xt,en],Jc=class extends xe{constructor(t){super(t)}h(){return it(this,Z3,2)}g(){return _s(this,Q3,5)}};Jc.B=[5];var tR=[0,Xi,$3,J3,K3,jt,eR],Jx=class extends xe{constructor(t){super(t)}};Jx.B=[1,2,3,8,9];var Qx=Qs(Jx,[0,xn,bh,lm,tR,xt,-1,Ks,jt,j3,xn,Ks]),ey=class extends xe{constructor(t){super(t)}},nR=[0,en,-4],ty=class extends xe{constructor(t){super(t)}};ty.B=[1];var Ro=Qs(ty,[0,jt,nR]),ny=class extends xe{constructor(t){super(t)}},iR=[0,en,-4],iy=class extends xe{constructor(t){super(t)}};iy.B=[1];var el=Qs(iy,[0,jt,iR]),sy=class extends xe{constructor(t){super(t)}};sy.B=[3];var sR=[0,kt,-1,lm,Xi],ry=class extends xe{constructor(){super()}};ry.prototype.g=Ah([0,en,-4,Ks]);var rR=class extends xe{constructor(t){super(t)}},oR=[0,1,kt,xt,$x],oy=class extends xe{constructor(t){super(t)}};oy.B=[1];var aR=Qs(oy,[0,jt,oR,Ks]),Ep=class extends xe{constructor(t){super(t)}};Ep.B=[1];var lR=class extends xe{constructor(t){super(t)}qa(){let t=yx(this);return t??Ar()}},cR=class extends xe{constructor(t){super(t)}},ay=[1,2],hR=[0,ay,Mt,[0,lm],Mt,[0,kx],kt,xt],ly=class extends xe{constructor(t){super(t)}};ly.B=[1];var uR=Qs(ly,[0,jt,hR,Ks]),Ch=class extends xe{constructor(t){super(t)}};Ch.B=[4,5];var cy=[0,xt,kt,en,xn,-1],gv=class extends xe{constructor(t){super(t)}},dR=[0,Wt,-1],_v=class extends xe{constructor(t){super(t)}},Qc=[1,2,3,4,5],fh=class extends xe{constructor(t){super(t)}g(){return yx(this)!=null}h(){return wr(js(this,2))!=null}},hy=[0,kx,xt,[0,kt,Ks,-1],[0,P3,Ks]],Lt=class extends xe{constructor(t){super(t)}g(){return mx(js(this,2))??!1}},Xt=[0,hy,Wt,[0,Qc,Mt,qx,Mt,Gx,Mt,Vx,Mt,Xx,Mt,Wx],Xi],Ph=class extends xe{constructor(t){super(t)}},hm=[0,Xt,en,-1,kt],fR=Ai(502141897,Ph);It[502141897]=hm;var uy=[0,hy];It[512499200]=uy;var dy=[0,uy];It[515723506]=dy;var pR=Qs(class extends xe{constructor(t){super(t)}},[0,[0,Xi,-1,C3,U3],sR]),fy=[0,Xt];It[508981768]=fy;var py=class extends xe{constructor(t){super(t)}},um=[0,Xt,en,fy,Wt],my=class extends xe{constructor(t){super(t)}},gy=[0,Xt,hm,um,en,dy];It[508968149]=um;var mR=Ai(508968150,my);It[508968150]=gy;var _y=class extends xe{constructor(t){super(t)}},gR=Ai(513916220,_y);It[513916220]=[0,Xt,gy,kt];var wo=class extends xe{constructor(t){super(t)}h(){return it(this,Ch,2)}g(){St(this,2)}},vy=[0,Xt,cy];It[478825465]=vy;var xy=[0,Xt];It[478825422]=xy;var _R=class extends xe{constructor(t){super(t)}},yy=[0,Xt,xy,vy,-1],My=class extends xe{constructor(t){super(t)}},Ey=[0,Xt,en,kt],dm=class extends xe{constructor(t){super(t)}},fm=[0,Xt,en],pm=class extends xe{constructor(t){super(t)}},Sy=[0,Xt,Ey,fm,en],Ty=class extends xe{constructor(t){super(t)}},vR=[0,Xt,Sy,yy];It[463370452]=yy,It[464864288]=Ey,It[474472470]=fm;var xR=Ai(462713202,pm);It[462713202]=Sy;var yR=Ai(479097054,Ty);It[479097054]=vR;var MR=class extends xe{constructor(t){super(t)}},ER=[0,Xt],wy=class extends xe{constructor(t){super(t)}},mm=[0,Xt,en,-1,kt];It[514774813]=mm;var by=class extends xe{constructor(t){super(t)}},gm=[0,Xt,en,Wt];It[518928384]=gm;var Ay=class extends xe{constructor(){super()}};Ay.prototype.g=Ah([0,Xt,fm,ER,hm,um,mm,gm]);var Ry=class extends xe{constructor(t){super(t)}},SR=Ai(456383383,Ry);It[456383383]=[0,Xt,cy];var Cy=class extends xe{constructor(t){super(t)}},TR=Ai(476348187,Cy);It[476348187]=[0,Xt,dR];var Py=class extends xe{constructor(t){super(t)}},Iy=[0,Xi,-1],Sp=class extends xe{constructor(t){super(t)}};Sp.B=[3];var wR=Ai(458105876,class extends xe{constructor(t){super(t)}g(){var t=this.s;let e=ut(t);var n=2&e;return t=(function(i,s,r){var o=Sp;let a=2&s,l=!1;if(r==null){if(a)return lv();r=[]}else if(r.constructor===di){if((2&r.N)==0||a)return r;r=r.Y()}else Array.isArray(r)?l=!!(2&Bt(r)):r=[];if(a){if(!r.length)return lv();l||(l=!0,Bo(r))}else l&&(l=!1,r=Sx(r));return l||(64&Bt(r)?rh(r,32):32&s&&qp(r,32)),At(i,s,2,o=new di(r,o,u3,void 0),!1),o})(t,e,Yi(t,e,2)),t==null||!n&&Sp&&(t.ta=!0),n=t}});It[458105876]=[0,Iy,R3,[!0,Ks,[0,xt,-1,xn]]];var _m=class extends xe{constructor(t){super(t)}},Ly=Ai(458105758,_m);It[458105758]=[0,Xt,xt,Iy];var vm=class extends xe{constructor(t){super(t)}};vm.B=[5,6];var bR=Ai(443442058,vm);It[443442058]=[0,Xt,xt,kt,en,xn,-1];var Uy=class extends xe{constructor(t){super(t)}},AR=Ai(516587230,Uy);function Tp(t,e){return e=e?e.clone():new Ch,t.displayNamesLocale!==void 0?St(e,1,Ho(t.displayNamesLocale)):t.displayNamesLocale===void 0&&St(e,1),t.maxResults!==void 0?Wi(e,2,t.maxResults):"maxResults"in t&&St(e,2),t.scoreThreshold!==void 0?Se(e,3,t.scoreThreshold):"scoreThreshold"in t&&St(e,3),t.categoryAllowlist!==void 0?uh(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&St(e,4),t.categoryDenylist!==void 0?uh(e,5,t.categoryDenylist):"categoryDenylist"in t&&St(e,5),e}function xm(t,e=-1,n=""){return{categories:t.map((i=>({index:wi(ui(i,1),0)??-1,score:Gt(i,2)??0,categoryName:Gi(i,3)??"",displayName:Gi(i,4)??""}))),headIndex:e,headName:n}}function Ny(t){var e=Ao(t,3,Js),n=Ao(t,2,ko),i=Ao(t,1,wr),s=Ao(t,9,wr);let r={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)r.categories.push({score:e[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((e=it(t,Jc,4)?.h())&&(r.boundingBox={originX:ui(e,1)??0,originY:ui(e,2)??0,width:ui(e,3)??0,height:ui(e,4)??0,angle:0}),it(t,Jc,4)?.g().length)for(let o of it(t,Jc,4).g())r.keypoints.push({x:Zc(o,1)??0,y:Zc(o,2)??0,score:Zc(o,4)??0,label:wr(js(o,3))??""});return r}function Ih(t){let e=[];for(let n of _s(t,ny,1))e.push({x:Gt(n,1)??0,y:Gt(n,2)??0,z:Gt(n,3)??0,visibility:Gt(n,4)??0});return e}function Va(t){let e=[];for(let n of _s(t,ey,1))e.push({x:Gt(n,1)??0,y:Gt(n,2)??0,z:Gt(n,3)??0,visibility:Gt(n,4)??0});return e}function vv(t){return Array.from(t,(e=>127<e?e-256:e))}function xv(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(0>=i||0>=s)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}var qc;It[516587230]=[0,Xt,mm,gm,en];var RR=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Dy(){if(qc===void 0)try{await WebAssembly.instantiate(RR),qc=!0}catch{qc=!1}return qc}async function Ia(t,e=""){let n=await Dy()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var bo=class{};function Oy(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=t.length&&17<=Number(t[1])))}async function yv(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function Fy(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function we(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Mv(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);let[i,s]=Fy(e);return!t.l||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function Ev(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");let i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.i._free(s);t.i._free(e)}function Bi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function zs(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}bo.forVisionTasks=function(t){return Ia("vision",t)},bo.forTextTasks=function(t){return Ia("text",t)},bo.forGenAiExperimentalTasks=function(t){return Ia("genai_experimental",t)},bo.forGenAiTasks=function(t){return Ia("genai",t)},bo.forAudioTasks=function(t){return Ia("audio",t)},bo.isSimdSupported=function(){return Dy()};async function CR(t,e,n,i){return t=await(async(s,r,o,a,l)=>{if(r&&await yv(r),!self.ModuleFactory||o&&(await yv(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await t.o(i),t}function ap(t,e){let n=it(t.baseOptions,fh,1)||new fh;typeof e=="string"?(St(n,2,Ho(e)),St(n,1)):e instanceof Uint8Array&&(St(n,1,Kp(e,!1,!1)),St(n,2)),Re(t.baseOptions,0,1,n)}function Sv(t){try{let e=t.K.length;if(e===1)throw Error(t.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.K.map((n=>n.message)).join(", "))}finally{t.K=[]}}function ue(t,e){t.J=Math.max(t.J,e)}function Lh(t,e){t.C=new yn,$n(t.C,"PassThroughCalculator"),Tt(t.C,"free_memory"),Je(t.C,"free_memory_unused_out"),Rt(e,"free_memory"),Jn(e,t.C)}function Uo(t,e){Tt(t.C,e),Je(t.C,e+"_unused_out")}function Uh(t){t.g.addBoolToStream(!0,"free_memory",t.J)}var eh=class{constructor(t){this.g=t,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){let n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(it(this.baseOptions,fh,1)?.g()||it(this.baseOptions,fh,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=it(i.baseOptions,_v,3);if(!r){var o=r=new _v,a=new mv;Fa(o,4,Qc,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new zx,Fa(s,2,Qc,o)):(s=r,o=new mv,Fa(s,4,Qc,o))),Re(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),ap(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)ap(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){let s=[];for(var r=0;;){let{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(let o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{ap(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let t;if(this.g.fa((e=>{t=W3(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.K.push(Error(i))})),this.g.Ma(),this.g.setGraph(t,e),this.C=void 0,Sv(this)}finishProcessing(){this.g.finishProcessing(),Sv(this)}close(){this.C=void 0,this.g.closeGraph()}};function wn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}eh.prototype.close=eh.prototype.close,(function(t,e){t=t.split(".");var n,i=qa;for((t[0]in i)||i.execScript===void 0||i.execScript("var "+t[0]);t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e})("TaskRunner",eh);var wp=class{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}};function Tv(t,e,n){let i=t.g;if(n=wn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function wv(t,e){let n=t.g,i=wn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);let s=wn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);let r=wn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new wp(n,i,s,r)}function ym(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function tl(t,e,n,i){return ym(t,e),t.h||(t.m(),t.D()),n?(t.v||(t.v=wv(t,!0)),n=t.v):(t.A||(t.A=wv(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function $s(t,e,n){return ym(t,e),t=wn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Nh(t,e,n){ym(t,e),t.u||(t.u=wn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Mm(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Wo=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){let t=this.g;if(this.h=wn(t.createProgram(),"Failed to create WebGL program"),this.ba=Tv(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=Tv(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.K=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){let t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ba),t.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}},PR=class extends Wo{H(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}D(){let t=this.g;t.activeTexture(t.TEXTURE1),this.C=$s(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.j=$s(this,t,t.NEAREST)}m(){super.m();let t=this.g;this.M=wn(t.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.V=wn(t.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.L=wn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let t=this.g;t.uniform1i(this.L,0),t.uniform1i(this.M,1),t.uniform1i(this.V,2)}close(){this.C&&this.g.deleteTexture(this.C),this.j&&this.g.deleteTexture(this.j),super.close()}},IR=class extends Wo{H(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}D(){let t=this.g;t.activeTexture(t.TEXTURE1),this.j=$s(this,t),t.activeTexture(t.TEXTURE2),this.C=$s(this,t)}m(){super.m();let t=this.g;this.L=wn(t.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.M=wn(t.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.I=wn(t.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();let t=this.g;t.uniform1i(this.I,0),t.uniform1i(this.L,1),t.uniform1i(this.M,2)}close(){this.j&&this.g.deleteTexture(this.j),this.C&&this.g.deleteTexture(this.C),super.close()}};function ps(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function bp(t){var e=ps(t,1);if(!e){if(e=ps(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);let i=No(t);var n=Em(t);if(Nh(n,i,By(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function By(t){let e=ps(t,2);if(!e){let n=No(t);e=Hy(t);let i=bp(t),s=ky(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),Ap(t)}return e}function No(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=wn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function ky(t){if(t=No(t),!Yc)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Yc=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Yc=t.R16F}return Yc}function Em(t){return t.l||(t.l=new Wo),t.l}function Hy(t){let e=No(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ps(t,2);return n||(n=$s(Em(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Ap(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Yc,Qt=class{constructor(t,e,n,i,s,r,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--bv===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!ps(this,0)}la(){return!!ps(this,1)}R(){return!!ps(this,2)}ka(){return(e=ps(t=this,0))||(e=bp(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ja(){return bp(this)}O(){return By(this)}clone(){let t=[];for(let e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=No(this),s=Em(this);i.activeTexture(i.TEXTURE1),n=$s(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=ky(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Nh(s,i,n),tl(s,i,!1,(()=>{Hy(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ap(this)})),Mm(s),Ap(this)}}t.push(n)}return new Qt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&No(this).deleteTexture(ps(this,2)),bv=-1}};Qt.prototype.close=Qt.prototype.close,Qt.prototype.clone=Qt.prototype.clone,Qt.prototype.getAsWebGLTexture=Qt.prototype.O,Qt.prototype.getAsFloat32Array=Qt.prototype.ja,Qt.prototype.getAsUint8Array=Qt.prototype.ka,Qt.prototype.hasWebGLTexture=Qt.prototype.R,Qt.prototype.hasFloat32Array=Qt.prototype.la,Qt.prototype.hasUint8Array=Qt.prototype.Ha;var bv=250,LR={color:"white",lineWidth:4,radius:6};function lp(t){return{...LR,fillColor:(t=t||{}).color,...t}}function fs(t,e){return t instanceof Function?t(e):t}function Av(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function La(t){if(!t.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.l}function Xa(t){if(!t.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.j}function Rv(t,e,n){if(e.R())n(e.O());else{let i=e.la()?e.ja():e.ka();t.m=t.m??new Wo;let s=Xa(t);n((t=new Qt([i],e.m,!1,s.canvas,t.m,e.width,e.height)).O()),t.close()}}function Cv(t,e,n,i){let s=(function(a){return a.g||(a.g=new PR),a.g})(t),r=Xa(t),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;tl(s,r,!0,(()=>{(function(l,c,h,u){let d=l.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,c),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,l.C),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),l.I&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[p,m]of f){f=p;let T=m;var _=g.next();if(_.done)return!1;let[y,E]=_.value;if(_=E,f!==y||T[0]!==_[0]||T[1]!==_[1]||T[2]!==_[2]||T[3]!==_[3])return!1}return!!g.next().done})(l.I,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.j);else{l.I=u;let f=Array(1024).fill(0);u.forEach(((g,_)=>{if(g.length!==4)throw Error(`Color at index ${_} is not a four-channel value.`);f[4*_]=g[0],f[4*_+1]=g[1],f[4*_+2]=g[2],f[4*_+3]=g[3]})),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.j),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,o,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);let a=s.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)}))}function Pv(t,e,n,i){let s=Xa(t),r=(function(l){return l.h||(l.h=new IR),l.h})(t),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;tl(r,s,!0,(()=>{var l=r.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,e),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.j),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.C),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)}))}var Un=class{constructor(t,e){t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.l=t,this.j=e):this.j=t}Aa(t,e){if(t){var n=La(this);e=lp(e),n.save();var i=n.canvas,s=0;for(let r of t)n.fillStyle=fs(e.fillColor,{index:s,from:r}),n.strokeStyle=fs(e.color,{index:s,from:r}),n.lineWidth=fs(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*i.width,r.y*i.height,fs(e.radius,{index:s,from:r}),0,2*Math.PI),n.fill(t),n.stroke(t),++s;n.restore()}}za(t,e,n){if(t&&e){var i=La(this);n=lp(n),i.save();var s=i.canvas,r=0;for(let o of e){i.beginPath(),e=t[o.start];let a=t[o.end];e&&a&&(i.strokeStyle=fs(n.color,{index:r,from:e,to:a}),i.lineWidth=fs(n.lineWidth,{index:r,from:e,to:a}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(a.x*s.width,a.y*s.height)),++r,i.stroke()}i.restore()}}wa(t,e){let n=La(this);e=lp(e),n.save(),n.beginPath(),n.lineWidth=fs(e.lineWidth,{}),n.strokeStyle=fs(e.color,{}),n.fillStyle=fs(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}xa(t,e,n=[0,0,0,255]){this.l?(function(i,s,r,o){let a=Xa(i);Rv(i,s,(l=>{Cv(i,l,r,o),(l=La(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,t,n,e):Cv(this,t.O(),n,e)}ya(t,e,n){this.l?(function(i,s,r,o){let a=Xa(i);Rv(i,s,(l=>{Pv(i,l,r,o),(l=La(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)}))})(this,t,e,n):Pv(this,t.O(),e,n)}close(){this.g?.close(),this.g=void 0,this.h?.close(),this.h=void 0,this.m?.close(),this.m=void 0}};function Vi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Vy(t){var e=Vi(t,0);if(!e){e=Do(t);let n=Dh(t),i=new Uint8Array(t.width*t.height*4);Nh(n,e,th(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Mm(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function th(t){let e=Vi(t,2);if(!e){let n=Do(t);e=nh(t);let i=Vi(t,1)||Vy(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Na(t)}return e}function Do(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=wn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Dh(t){return t.l||(t.l=new Wo),t.l}function nh(t){let e=Do(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Vi(t,2);return n||(n=$s(Dh(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Na(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Iv(t){let e=Do(t);return tl(Dh(t),e,!0,(()=>(function(n,i){let s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();let r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}Un.prototype.close=Un.prototype.close,Un.prototype.drawConfidenceMask=Un.prototype.ya,Un.prototype.drawCategoryMask=Un.prototype.xa,Un.prototype.drawBoundingBox=Un.prototype.wa,Un.prototype.drawConnectors=Un.prototype.za,Un.prototype.drawLandmarks=Un.prototype.Aa,Un.lerp=function(t,e,n,i,s){return Av(i*(1-(t-e)/(n-e))+s*(1-(n-t)/(n-e)),i,s)},Un.clamp=Av;var on=class{constructor(t,e,n,i,s,r,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Lv===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!Vi(this,0)}ma(){return!!Vi(this,1)}R(){return!!Vi(this,2)}Ea(){return Vy(this)}Da(){var t=Vi(this,1);return t||(th(this),nh(this),t=Iv(this),Na(this),this.g.push(t),this.j=!0),t}O(){return th(this)}clone(){let t=[];for(let e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=Do(this),s=Dh(this);i.activeTexture(i.TEXTURE1),n=$s(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Nh(s,i,n),tl(s,i,!1,(()=>{nh(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Na(this)})),Mm(s),Na(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);th(this),nh(this),n=Iv(this),Na(this)}t.push(n)}return new on(t,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Vi(this,1).close(),this.m&&Do(this).deleteTexture(Vi(this,2)),Lv=-1}};on.prototype.close=on.prototype.close,on.prototype.clone=on.prototype.clone,on.prototype.getAsWebGLTexture=on.prototype.O,on.prototype.getAsImageBitmap=on.prototype.Da,on.prototype.getAsImageData=on.prototype.Ea,on.prototype.hasWebGLTexture=on.prototype.R,on.prototype.hasImageBitmap=on.prototype.ma,on.prototype.hasImageData=on.prototype.Ga;var Lv=250;function Ri(...t){return t.map((([e,n])=>({start:e,end:n})))}var UR=(function(t){return class extends t{Ma(){this.i._registerModelResourcesGraphService()}}})((Uv=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Oy()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){let e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){let n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),we(this,i||"input_audio",(r=>{we(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,t,e,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}fa(t){Bi(this,"__graph_config__",(e=>{t(e)})),we(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){let r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),we(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,s)}))}addGpuBufferToStream(t,e,n){we(this,e,(i=>{let[s,r]=Mv(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(t,e,n){we(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){we(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){we(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){we(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){we(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){we(this,e,(i=>{we(this,t,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(t,e,n){we(this,e,(i=>{Ev(this,Object.keys(t),(s=>{Ev(this,Object.values(t),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){we(this,n,(s=>{we(this,e,(r=>{let o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){we(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(t,e,n){we(this,e,(i=>{let s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)we(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(t,e){we(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){we(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){we(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){we(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){we(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){we(this,e,(n=>{we(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){we(this,n,(i=>{we(this,e,(s=>{let r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){we(this,e,(n=>{let i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)we(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Bi(this,t,e),we(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){zs(this,t,e),we(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Bi(this,t,e),we(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){zs(this,t,e),we(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Bi(this,t,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)})),we(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Uv{get ha(){return this.i}sa(t,e,n){we(this,e,(i=>{let[s,r]=Mv(this,t,i);this.ha._addBoundTextureAsImageToStream(i,s,r,n)}))}W(t,e){Bi(this,t,e),we(this,t,(n=>{this.ha._attachImageListener(n)}))}da(t,e){zs(this,t,e),we(this,t,(n=>{this.ha._attachImageVectorListener(n)}))}})),Uv,pi=class extends UR{};async function je(t,e,n){return(async function(i,s,r,o){return CR(i,s,r,o)})(t,n.canvas??(Oy()?void 0:document.createElement("canvas")),e,n)}function zy(t,e,n,i){if(t.V){let r=new ry;if(n?.regionOfInterest){if(!t.ra)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>s.left||0>s.top||1<s.right||1<s.bottom)throw Error("Expected RectF values to be in [0,1].");Se(r,1,(s.left+s.right)/2),Se(r,2,(s.top+s.bottom)/2),Se(r,4,s.right-s.left),Se(r,3,s.bottom-s.top)}else Se(r,1,.5),Se(r,2,.5),Se(r,4,1),Se(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Se(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[o,a]=Fy(e);n=Gt(r,3)*a/o,s=Gt(r,4)*o/a,Se(r,4,n),Se(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.V,i)}t.g.sa(e,t.ba,i??performance.now()),t.finishProcessing()}function mi(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");zy(t,e,n,t.J+1)}function ji(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");zy(t,e,n,i)}function Oo(t,e,n,i){var s=e.data;let r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return t=new Qt([s],n,!1,t.g.i.canvas,t.M,r,e),i?t.clone():t}var Dn=class extends eh{constructor(t,e,n,i){super(t),this.g=t,this.ba=e,this.V=n,this.ra=i,this.M=new Wo}l(t,e=!0){if("runningMode"in t&&Wa(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.M.close(),super.close()}};Dn.prototype.close=Dn.prototype.close;var ai=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Re(t=this.h=new Ph,0,1,e=new Lt),Se(this.h,2,.5),Se(this.h,3,.3)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Se(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Se(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},mi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ji(this,t,n,e),this.j}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect_in"),ot(t,"detections");let e=new Zn;bi(e,fR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect_in"),Je(n,"DETECTIONS:detections"),n.o(e),Jn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=Qx(r),this.j.detections.push(Ny(i));ue(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ai.prototype.detectForVideo=ai.prototype.G,ai.prototype.detect=ai.prototype.F,ai.prototype.setOptions=ai.prototype.o,ai.createFromModelPath=async function(t,e){return je(ai,t,{baseOptions:{modelAssetPath:e}})},ai.createFromModelBuffer=function(t,e){return je(ai,t,{baseOptions:{modelAssetBuffer:e}})},ai.createFromOptions=function(t,e){return je(ai,t,e)};var Sm=Ri([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Tm=Ri([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),wm=Ri([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Gy=Ri([474,475],[475,476],[476,477],[477,474]),bm=Ri([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Am=Ri([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Wy=Ri([469,470],[470,471],[471,472],[472,469]),Rm=Ri([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Xy=[...Sm,...Tm,...wm,...bm,...Am,...Rm],qy=Ri([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Nv(t){t.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Pt=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Re(t=this.h=new my,0,1,e=new Lt),this.H=new py,Re(this.h,0,3,this.H),this.j=new Ph,Re(this.h,0,2,this.j),Wi(this.j,4,1),Se(this.j,2,.5),Se(this.H,2,.5),Se(this.h,4,.5)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numFaces"in t&&Wi(this.j,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Se(this.j,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Se(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Se(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Nv(this),mi(this,t,e),this.u}G(t,e,n){return Nv(this),ji(this,t,n,e),this.u}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"face_landmarks");let e=new Zn;bi(e,mR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Jn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(let r of i)i=el(r),this.u.faceLandmarks.push(Ih(i));ue(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ue(this,i)})),this.outputFaceBlendshapes&&(ot(t,"blendshapes"),Je(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Rh(r),this.u.faceBlendshapes.push(xm(i.g()??[]));ue(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ue(this,i)}))),this.outputFacialTransformationMatrixes&&(ot(t,"face_geometry"),Je(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=it(pR(r),sy,2))&&this.u.facialTransformationMatrixes.push({rows:wi(ui(i,1),0)??0,columns:wi(ui(i,2),0)??0,data:Ao(i,3,Js).slice()??[]});ue(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ue(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pt.prototype.detectForVideo=Pt.prototype.G,Pt.prototype.detect=Pt.prototype.F,Pt.prototype.setOptions=Pt.prototype.o,Pt.createFromModelPath=function(t,e){return je(Pt,t,{baseOptions:{modelAssetPath:e}})},Pt.createFromModelBuffer=function(t,e){return je(Pt,t,{baseOptions:{modelAssetBuffer:e}})},Pt.createFromOptions=function(t,e){return je(Pt,t,e)},Pt.FACE_LANDMARKS_LIPS=Sm,Pt.FACE_LANDMARKS_LEFT_EYE=Tm,Pt.FACE_LANDMARKS_LEFT_EYEBROW=wm,Pt.FACE_LANDMARKS_LEFT_IRIS=Gy,Pt.FACE_LANDMARKS_RIGHT_EYE=bm,Pt.FACE_LANDMARKS_RIGHT_EYEBROW=Am,Pt.FACE_LANDMARKS_RIGHT_IRIS=Wy,Pt.FACE_LANDMARKS_FACE_OVAL=Rm,Pt.FACE_LANDMARKS_CONTOURS=Xy,Pt.FACE_LANDMARKS_TESSELATION=qy;var ki=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!0),Re(t=this.j=new _y,0,1,e=new Lt)}get baseOptions(){return it(this.j,Lt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return super.l(t)}Pa(t,e,n){let i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,mi(this,t,i??{}),!this.h)return this.u}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"stylized_image");let e=new Zn;bi(e,gR,this.j);let n=new yn;$n(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Jn(t,n),this.g.W("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;let l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){let c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=o[3*h],c[4*h+1]=o[3*h+1],c[4*h+2]=o[3*h+2],c[4*h+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new on([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=r=r?a.clone():a,this.h&&this.h(r),ue(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.u=null,this.h&&this.h(null),ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ki.prototype.stylize=ki.prototype.Pa,ki.prototype.setOptions=ki.prototype.o,ki.createFromModelPath=function(t,e){return je(ki,t,{baseOptions:{modelAssetPath:e}})},ki.createFromModelBuffer=function(t,e){return je(ki,t,{baseOptions:{modelAssetBuffer:e}})},ki.createFromOptions=function(t,e){return je(ki,t,e)};var Cm=Ri([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Dv(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Ov(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Fv(t,e=!0){let n=[];for(let s of t){var i=Rh(s);t=[];for(let r of i.g())i=e&&ui(r,1)!=null?wi(ui(r,1),0):-1,t.push({score:Gt(r,2)??0,index:i,categoryName:Gi(r,3)??"",displayName:Gi(r,4)??""});n.push(t)}return n}var Xn=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.v=new Ty,0,1,e=new Lt),this.A=new pm,Re(this.v,0,2,this.A),this.u=new dm,Re(this.A,0,3,this.u),this.h=new My,Re(this.A,0,2,this.h),this.j=new _R,Re(this.v,0,3,this.j),Se(this.h,2,.5),Se(this.A,4,.5),Se(this.u,2,.5)}get baseOptions(){return it(this.v,Lt,1)}set baseOptions(t){Re(this.v,0,1,t)}o(t){if(Wi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Se(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Se(this.A,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Se(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new wo,n=e,i=Tp(t.cannedGesturesClassifierOptions,it(this.j,wo,3)?.h());Re(n,0,2,i),Re(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&it(this.j,wo,3)?.g();return t.customGesturesClassifierOptions?(Re(n=e=new wo,0,2,i=Tp(t.customGesturesClassifierOptions,it(this.j,wo,4)?.h())),Re(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&it(this.j,wo,4)?.g(),this.l(t)}Ka(t,e){return Dv(this),mi(this,t,e),Ov(this)}La(t,e,n){return Dv(this),ji(this,t,n,e),Ov(this)}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"hand_gestures"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");let e=new Zn;bi(e,yR,this.v);let n=new yn;$n(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"HAND_GESTURES:hand_gestures"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),Jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i){i=el(r);let o=[];for(let a of _s(i,ny,1))o.push({x:Gt(a,1)??0,y:Gt(a,2)??0,z:Gt(a,3)??0,visibility:Gt(a,4)??0});this.landmarks.push(o)}ue(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ue(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i){i=Ro(r);let o=[];for(let a of _s(i,ey,1))o.push({x:Gt(a,1)??0,y:Gt(a,2)??0,z:Gt(a,3)??0,visibility:Gt(a,4)??0});this.worldLandmarks.push(o)}ue(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ue(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Fv(i,!1)),ue(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ue(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Fv(i)),ue(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Bv(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Xn.prototype.recognizeForVideo=Xn.prototype.La,Xn.prototype.recognize=Xn.prototype.Ka,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=function(t,e){return je(Xn,t,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(t,e){return je(Xn,t,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(t,e){return je(Xn,t,e)},Xn.HAND_CONNECTIONS=Cm;var qn=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Re(t=this.j=new pm,0,1,e=new Lt),this.u=new dm,Re(this.j,0,3,this.u),this.h=new My,Re(this.j,0,2,this.h),Wi(this.h,3,1),Se(this.h,2,.5),Se(this.u,2,.5),Se(this.j,4,.5)}get baseOptions(){return it(this.j,Lt,1)}set baseOptions(t){Re(this.j,0,1,t)}o(t){return"numHands"in t&&Wi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Se(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Se(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Se(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],mi(this,t,e),Bv(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ji(this,t,n,e),Bv(this)}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"hand_landmarks"),ot(t,"world_hand_landmarks"),ot(t,"handedness");let e=new Zn;bi(e,xR,this.j);let n=new yn;$n(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),Jn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(let r of i)i=el(r),this.landmarks.push(Ih(i));ue(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ue(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(let r of i)i=Ro(r),this.worldLandmarks.push(Va(i));ue(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ue(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;let a=[];for(let l of i){i=Rh(l);let c=[];for(let h of i.g())c.push({score:Gt(h,2)??0,index:wi(ui(h,1),0)??-1,categoryName:Gi(h,3)??"",displayName:Gi(h,4)??""});a.push(c)}o.call(r,...a),ue(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qn.prototype.detectForVideo=qn.prototype.G,qn.prototype.detect=qn.prototype.F,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=function(t,e){return je(qn,t,{baseOptions:{modelAssetPath:e}})},qn.createFromModelBuffer=function(t,e){return je(qn,t,{baseOptions:{modelAssetBuffer:e}})},qn.createFromOptions=function(t,e){return je(qn,t,e)},qn.HAND_CONNECTIONS=Cm;var Yy=Ri([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function kv(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Hv(t){try{if(!t.I)return t.h;t.I(t.h)}finally{Uh(t)}}function jc(t,e){t=el(t),e.push(Ih(t))}var Ct=class extends Dn{constructor(t,e){super(new pi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Re(t=this.A=new Ay,0,1,e=new Lt),this.u=new dm,Re(this.A,0,2,this.u),this.aa=new MR,Re(this.A,0,3,this.aa),this.j=new Ph,Re(this.A,0,4,this.j),this.H=new py,Re(this.A,0,5,this.H),this.v=new wy,Re(this.A,0,6,this.v),this.D=new by,Re(this.A,0,7,this.D),Se(this.j,2,.5),Se(this.j,3,.3),Se(this.H,2,.5),Se(this.v,2,.5),Se(this.v,3,.3),Se(this.D,2,.5),Se(this.u,2,.5)}get baseOptions(){return it(this.A,Lt,1)}set baseOptions(t){Re(this.A,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Se(this.j,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Se(this.j,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Se(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Se(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Se(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Se(this.D,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Se(this.u,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){let i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:n,kv(this),mi(this,t,i),Hv(this)}G(t,e,n,i){let s=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,kv(this),ji(this,t,s,e),Hv(this)}m(){var t=new bn;Rt(t,"input_frames_image"),ot(t,"pose_landmarks"),ot(t,"pose_world_landmarks"),ot(t,"face_landmarks"),ot(t,"left_hand_landmarks"),ot(t,"left_hand_world_landmarks"),ot(t,"right_hand_landmarks"),ot(t,"right_hand_world_landmarks");let e=new Zn,n=new pv;vp(n,1,Ho("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))St(s,2,Mh(r,tm,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof ms||Ya(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");vp(s,2,Kp(r,!1,!1),Ar())}})(n,this.A.g());let i=new yn;$n(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),dh(i,8,pv,n),Tt(i,"IMAGE:input_frames_image"),Je(i,"POSE_LANDMARKS:pose_landmarks"),Je(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Je(i,"FACE_LANDMARKS:face_landmarks"),Je(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Je(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Je(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Je(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Jn(t,i),Lh(this,t),this.g.attachProtoListener("pose_landmarks",((s,r)=>{jc(s,this.h.poseLandmarks),ue(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{ue(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=Ro(s),o.push(Va(s)),ue(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{ue(this,s)})),this.outputPoseSegmentationMasks&&(Je(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Uo(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Oo(this,s,!0,!this.I)],ue(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],ue(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{jc(s,this.h.faceLandmarks),ue(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{ue(this,s)})),this.outputFaceBlendshapes&&(ot(t,"extra_blendshapes"),Je(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Rh(s),o.push(xm(s.g()??[]))),ue(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{ue(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{jc(s,this.h.leftHandLandmarks),ue(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{ue(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=Ro(s),o.push(Va(s)),ue(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{ue(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{jc(s,this.h.rightHandLandmarks),ue(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{ue(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=Ro(s),o.push(Va(s)),ue(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{ue(this,s)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ct.prototype.detectForVideo=Ct.prototype.G,Ct.prototype.detect=Ct.prototype.F,Ct.prototype.setOptions=Ct.prototype.o,Ct.createFromModelPath=function(t,e){return je(Ct,t,{baseOptions:{modelAssetPath:e}})},Ct.createFromModelBuffer=function(t,e){return je(Ct,t,{baseOptions:{modelAssetBuffer:e}})},Ct.createFromOptions=function(t,e){return je(Ct,t,e)},Ct.HAND_CONNECTIONS=Cm,Ct.POSE_CONNECTIONS=Yy,Ct.FACE_LANDMARKS_LIPS=Sm,Ct.FACE_LANDMARKS_LEFT_EYE=Tm,Ct.FACE_LANDMARKS_LEFT_EYEBROW=wm,Ct.FACE_LANDMARKS_LEFT_IRIS=Gy,Ct.FACE_LANDMARKS_RIGHT_EYE=bm,Ct.FACE_LANDMARKS_RIGHT_EYEBROW=Am,Ct.FACE_LANDMARKS_RIGHT_IRIS=Wy,Ct.FACE_LANDMARKS_FACE_OVAL=Rm,Ct.FACE_LANDMARKS_CONTOURS=Xy,Ct.FACE_LANDMARKS_TESSELATION=qy;var li=class extends Dn{constructor(t,e){super(new pi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Re(t=this.h=new Ry,0,1,e=new Lt)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return Re(this.h,0,2,Tp(t,it(this.h,Ch,2))),this.l(t)}ua(t,e){return this.j={classifications:[]},mi(this,t,e),this.j}va(t,e,n){return this.j={classifications:[]},ji(this,t,n,e),this.j}m(){var t=new bn;Rt(t,"input_image"),Rt(t,"norm_rect"),ot(t,"classifications");let e=new Zn;bi(e,SR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Tt(n,"IMAGE:input_image"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"CLASSIFICATIONS:classifications"),n.o(e),Jn(t,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){let o={classifications:_s(r,rR,1).map((a=>xm(it(a,cm,4)?.g()??[],wi(ui(a,2),0),Gi(a,3))))};return lh(js(r,2))!=null&&(o.timestampMs=wi(lh(js(r,2)),0)),o})(aR(i)),ue(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};li.prototype.classifyForVideo=li.prototype.va,li.prototype.classify=li.prototype.ua,li.prototype.setOptions=li.prototype.o,li.createFromModelPath=function(t,e){return je(li,t,{baseOptions:{modelAssetPath:e}})},li.createFromModelBuffer=function(t,e){return je(li,t,{baseOptions:{modelAssetBuffer:e}})},li.createFromOptions=function(t,e){return je(li,t,e)};var Yn=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!0),this.h=new Cy,this.embeddings={embeddings:[]},Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){var e=this.h,n=it(this.h,gv,2);return n=n?n.clone():new gv,t.l2Normalize!==void 0?Wa(n,1,t.l2Normalize):"l2Normalize"in t&&St(n,1),t.quantize!==void 0?Wa(n,2,t.quantize):"quantize"in t&&St(n,2),Re(e,0,2,n),this.l(t)}Ba(t,e){return mi(this,t,e),this.embeddings}Ca(t,e,n){return ji(this,t,n,e),this.embeddings}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"embeddings_out");let e=new Zn;bi(e,TR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"EMBEDDINGS:embeddings_out"),n.o(e),Jn(t,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=uR(i),this.embeddings=(function(r){return{embeddings:_s(r,cR,1).map((o=>{let a={headIndex:wi(ui(o,3),0)??-1,headName:Gi(o,4)??""};if(Tx(o,Ep,rp(o,1))!==void 0)o=Ao(o=it(o,Ep,rp(o,1)),1,Js),a.floatEmbedding=o.slice();else{let l=new Uint8Array(0);a.quantizedEmbedding=it(o,lR,rp(o,2))?.qa()?.h()??l}return a})),timestampMs:wi(lh(js(r,2)),0)}})(i),ue(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Yn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=xv(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=xv(vv(t.quantizedEmbedding),vv(e.quantizedEmbedding))}return t},Yn.prototype.embedForVideo=Yn.prototype.Ca,Yn.prototype.embed=Yn.prototype.Ba,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=function(t,e){return je(Yn,t,{baseOptions:{modelAssetPath:e}})},Yn.createFromModelBuffer=function(t,e){return je(Yn,t,{baseOptions:{modelAssetBuffer:e}})},Yn.createFromOptions=function(t,e){return je(Yn,t,e)};var Rp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Vv(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function zv(t){try{let e=new Rp(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Uh(t)}}Rp.prototype.close=Rp.prototype.close;var Nn=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new _m,this.v=new Py,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?St(this.h,2,Ho(t.displayNamesLocale)):"displayNamesLocale"in t&&St(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){(function(t){let e=_s(t.fa(),yn,1).filter((n=>Gi(n,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(it(e[0],Zn,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=Gi(n,1)}))})(this)}ga(t,e,n){let i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Vv(this),mi(this,t,i),zv(this)}Na(t,e,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Vv(this),ji(this,t,s,e),zv(this)}Fa(){return this.u}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect");let e=new Zn;bi(e,Ly,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),n.o(e),Jn(t,n),Lh(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Uo(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Oo(this,r,!0,!this.j))),ue(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ue(this,i)}))),this.outputCategoryMask&&(ot(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Uo(this,"category_mask"),this.g.W("category_mask",((i,s)=>{this.categoryMask=Oo(this,i,!1,!this.j),ue(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ue(this,i)}))),ot(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ue(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.getLabels=Nn.prototype.Fa,Nn.prototype.segmentForVideo=Nn.prototype.Na,Nn.prototype.segment=Nn.prototype.ga,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=function(t,e){return je(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return je(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return je(Nn,t,e)};var Cp=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Cp.prototype.close=Cp.prototype.close;var NR=class extends xe{constructor(t){super(t)}},Fo=[0,kt,-2],DR=[0,gs,-3,Wt],Oh=[0,gs,-3,Wt,gs,-1],jy=[0,Oh],OR=[0,jy,Fo],FR=[0,Oh,Fo],Ky=[0,Oh,kt,-1],BR=[0,Ky,Fo],kR=[0,gs,-3,Wt,Fo,-1],HR=[0,gs,-3,Wt,Xi],cp=class extends xe{constructor(t){super(t)}},Gv=[0,gs,-1,Wt],Zy=class extends xe{constructor(){super()}};Zy.B=[1];var Wv=class extends xe{constructor(t){super(t)}},Pp=[1,2,3,4,5,6,7,8,9,10,14,15],VR=[0,Pp,Mt,Oh,Mt,FR,Mt,jy,Mt,OR,Mt,Gv,Mt,HR,Mt,DR,Mt,[0,xt,gs,-2,Wt,kt,Wt,-1,2,gs,Fo],Mt,Ky,Mt,BR,gs,Fo,xt,Mt,kR,Mt,[0,jt,Gv]],zR=[0,xt,kt,-1,Wt],Ip=class extends xe{constructor(){super()}};Ip.B=[1],Ip.prototype.g=Ah([0,jt,VR,xt,zR]);var Hi=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new _m,this.v=new Py,Re(this.h,0,3,this.v),Re(t=this.h,0,1,e=new Lt)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ga(t,e,n,i){let s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Ip;let r=new Wv;var o=new NR;if(Wi(o,1,255),Re(r,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new cp;Wa(a,3,!0),Se(a,1,e.keypoint.x),Se(a,2,e.keypoint.y),Fa(r,5,Pp,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new Zy,e.scribble))Wa(e=new cp,3,!0),Se(e,1,a.x),Se(e,2,a.y),dh(o,1,cp,e);Fa(r,15,Pp,o)}dh(i,1,Wv,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),mi(this,t,s);e:{try{let c=new Cp(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{Uh(this)}l=void 0}return l}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"roi_in"),Rt(t,"norm_rect_in");let e=new Zn;bi(e,Ly,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"ROI:roi_in"),Tt(n,"NORM_RECT:norm_rect_in"),n.o(e),Jn(t,n),Lh(this,t),this.outputConfidenceMasks&&(ot(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Uo(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Oo(this,r,!0,!this.j))),ue(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ue(this,i)}))),this.outputCategoryMask&&(ot(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Uo(this,"category_mask"),this.g.W("category_mask",((i,s)=>{this.categoryMask=Oo(this,i,!1,!this.j),ue(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ue(this,i)}))),ot(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ue(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Hi.prototype.segment=Hi.prototype.ga,Hi.prototype.setOptions=Hi.prototype.o,Hi.createFromModelPath=function(t,e){return je(Hi,t,{baseOptions:{modelAssetPath:e}})},Hi.createFromModelBuffer=function(t,e){return je(Hi,t,{baseOptions:{modelAssetBuffer:e}})},Hi.createFromOptions=function(t,e){return je(Hi,t,e)};var ci=class extends Dn{constructor(t,e){super(new pi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Re(t=this.h=new vm,0,1,e=new Lt)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?St(this.h,2,Ho(t.displayNamesLocale)):"displayNamesLocale"in t&&St(this.h,2),t.maxResults!==void 0?Wi(this.h,3,t.maxResults):"maxResults"in t&&St(this.h,3),t.scoreThreshold!==void 0?Se(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&St(this.h,4),t.categoryAllowlist!==void 0?uh(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&St(this.h,5),t.categoryDenylist!==void 0?uh(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&St(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},mi(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},ji(this,t,n,e),this.j}m(){var t=new bn;Rt(t,"input_frame_gpu"),Rt(t,"norm_rect"),ot(t,"detections");let e=new Zn;bi(e,bR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Tt(n,"IMAGE:input_frame_gpu"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"DETECTIONS:detections"),n.o(e),Jn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(let r of i)i=Qx(r),this.j.detections.push(Ny(i));ue(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ue(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ci.prototype.detectForVideo=ci.prototype.G,ci.prototype.detect=ci.prototype.F,ci.prototype.setOptions=ci.prototype.o,ci.createFromModelPath=async function(t,e){return je(ci,t,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(t,e){return je(ci,t,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(t,e){return je(ci,t,e)};var Lp=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Xv(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function qv(t){try{let e=new Lp(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.j)return e;t.j(e)}finally{Uh(t)}}Lp.prototype.close=Lp.prototype.close;var jn=class extends Dn{constructor(t,e){super(new pi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Re(t=this.h=new Uy,0,1,e=new Lt),this.D=new by,Re(this.h,0,3,this.D),this.v=new wy,Re(this.h,0,2,this.v),Wi(this.v,4,1),Se(this.v,2,.5),Se(this.D,2,.5),Se(this.h,4,.5)}get baseOptions(){return it(this.h,Lt,1)}set baseOptions(t){Re(this.h,0,1,t)}o(t){return"numPoses"in t&&Wi(this.v,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Se(this.v,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Se(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Se(this.D,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){let i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Xv(this),mi(this,t,i),qv(this)}G(t,e,n,i){let s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Xv(this),ji(this,t,s,e),qv(this)}m(){var t=new bn;Rt(t,"image_in"),Rt(t,"norm_rect"),ot(t,"normalized_landmarks"),ot(t,"world_landmarks"),ot(t,"segmentation_masks");let e=new Zn;bi(e,AR,this.h);let n=new yn;$n(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Tt(n,"IMAGE:image_in"),Tt(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:normalized_landmarks"),Je(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Jn(t,n),Lh(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(let r of i)i=el(r),this.landmarks.push(Ih(i));ue(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ue(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(let r of i)i=Ro(r),this.worldLandmarks.push(Va(i));ue(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ue(this,i)})),this.outputSegmentationMasks&&(Je(n,"SEGMENTATION_MASK:segmentation_masks"),Uo(this,"segmentation_masks"),this.g.da("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Oo(this,r,!0,!this.j))),ue(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ue(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};jn.prototype.detectForVideo=jn.prototype.G,jn.prototype.detect=jn.prototype.F,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(t,e){return je(jn,t,{baseOptions:{modelAssetPath:e}})},jn.createFromModelBuffer=function(t,e){return je(jn,t,{baseOptions:{modelAssetBuffer:e}})},jn.createFromOptions=function(t,e){return je(jn,t,e)},jn.POSE_CONNECTIONS=Yy;var Pm="?v=5";async function Im(t,e){let n={wasmLoaderPath:t+"vision_wasm_internal.js"+Pm,wasmBinaryPath:t+"vision_wasm_internal.wasm"+Pm};return Pt.createFromOptions(n,{baseOptions:{modelAssetPath:t+"face_landmarker.task"+Pm,delegate:e},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!0,outputFacialTransformationMatrixes:!0,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5})}function $y(t){if(!t.faceBlendshapes||!t.faceBlendshapes.length)return null;let e=new Float32Array(52);for(let i of t.faceBlendshapes[0].categories){let s=Pa[i.categoryName];s!==void 0&&(e[s]=i.score)}let n=t.facialTransformationMatrixes&&t.facialTransformationMatrixes.length?Float32Array.from(t.facialTransformationMatrixes[0].data):null;return{blendshapes:e,matrix:n}}var Fh=class{constructor(e,n){this.S=n,this.video=e,this.worker=null,this.running=!1,this.busy=!1,this.onSample=null,this.onStatus=null,this.delegate="",this.detectMs=0,this.rate=0,this._count=0,this._t0=performance.now()}async start(){let e=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30}}});this.video.srcObject=e,await this.video.play(),this.S.trackDelegate==="GPU_MAIN"?this.main||await this._startMain():this.worker||await this._startWorker(),this.running=!0,this._schedule()}resetWorker(){if(this.worker&&(this.worker.terminate(),this.worker=null),this.main){try{this.main.close()}catch{}this.main=null}this.busy=!1}async _startMain(){this.onStatus?.("Tracking-Modell l\xE4dt \u2026");let e=new URL("./",location.href).href;try{this.main=await Im(e,"GPU"),this.delegate="GPU direkt"}catch{this.main=await Im(e,"CPU"),this.delegate="CPU direkt"}}stop(){this.running=!1;let e=this.video.srcObject;e&&(e.getTracks().forEach(n=>n.stop()),this.video.srcObject=null)}_startWorker(){return new Promise((e,n)=>{this.onStatus?.("Tracking-Modell l\xE4dt \u2026"),this.worker=new Worker("tracker.js?v=5");let i=new URL("./",location.href).href;this.worker.onmessage=s=>{let r=s.data;r.type==="ready"?(this.delegate=r.delegate,e()):r.type==="error"?n(new Error(r.message)):r.type==="result"&&this._onResult(r)},this.worker.onerror=s=>n(new Error(s.message||"Worker-Fehler")),this.worker.postMessage({type:"init",base:i,delegate:this.S.trackDelegate})})}_schedule(){if(!this.running)return;let e=this.video;e.requestVideoFrameCallback?e.requestVideoFrameCallback(()=>this._grab()):setTimeout(()=>this._grab(),33)}async _grab(){if(this.running){if(this.busy||this.video.readyState<2){this._schedule();return}if(this.busy=!0,this.main){let e=performance.now(),n=null;try{n=$y(this.main.detectForVideo(this.video,e))}catch{}this._onResult({time:e,ms:performance.now()-e,face:n}),this._schedule();return}try{let e=this.video,n=480,i=Math.round(n*e.videoHeight/Math.max(1,e.videoWidth))||360,s=await createImageBitmap(e,{resizeWidth:n,resizeHeight:i,resizeQuality:"low"});this.worker.postMessage({type:"frame",bitmap:s,time:performance.now()},[s])}catch{this.busy=!1}this._schedule()}}_onResult(e){this.busy=!1,this.detectMs=this.detectMs*.9+e.ms*.1,this._count++;let n=performance.now();n-this._t0>1e3&&(this.rate=this._count*1e3/(n-this._t0),this._count=0,this._t0=n),this.onSample?.(e.face?{time:e.time,blendshapes:e.face.blendshapes,matrix:e.face.matrix}:null)}};var er=t=>t<0?0:t>1?1:t,tr=(t,e,n)=>t+(e-t)*n,nl=(t,e)=>1-Math.exp(-t*e),vs=ds.length,GR=ds.map(t=>{let e=t.includes("Left")?t.replace("Left","Right"):t.includes("Right")?t.replace("Right","Left"):t;return Pa[e]}),nr=Pa,Jy=ds.map(t=>t.startsWith("eyeBlink")?"blink":t.startsWith("eyeLook")?"look":t.startsWith("eye")?"eye":t.startsWith("brow")?"brow":"mouth"),Bh=class{constructor(e){this.S=e,this.raw=new Float32Array(vs),this.rawQ=new ve,this.rawPos=new w,this.prev=new Float32Array(vs),this.prevQ=new ve,this.prevPos=new w,this.rawT=0,this.prevT=0,this.nSamples=0,this._pred=new Float32Array(vs),this._pq=new ve,this._pp=new w,this.hasPose=!1,this.neutral=null,this.restPos=null,this.lastSeen=-1e9,this._sm=new Float32Array(vs),this._q=new ve,this._mood="neutral",this._moodHold=0,this.frame={presence:0,blendshapes:Object.fromEntries(ds.map(n=>[n,0])),head:{pitch:0,yaw:0,roll:0},headOffset:new w,gaze:{yaw:0,pitch:0},emotion:Object.fromEntries(H_.map(n=>[n,0]))},this._m=new Ee,this._p=new w,this._s=new w,this._e=new Zt}push(e){if(!e)return;let n=e.time||performance.now();n-this.rawT>600&&(this.nSamples=0),this.prev.set(this.raw),this.prevQ.copy(this.rawQ),this.prevPos.copy(this.rawPos),this.prevT=this.rawT,this.rawT=n,this.nSamples++,this.raw.set(e.blendshapes),e.matrix&&(this._m.fromArray(e.matrix),this._m.decompose(this._p,this.rawQ,this._s),this.rawPos.copy(this._p),this.restPos||(this.restPos=this.rawPos.clone()),this.hasPose=!0),this.lastSeen=performance.now()}_predict(e){let n=this.raw,i=this._pred,s=this.S.prediction??.7,r=this.rawT-this.prevT;if(this.nSamples<2||s<=0||r<=0){i.set(n),this._pq.copy(this.rawQ),this._pp.copy(this.rawPos);return}let o=Math.min(Math.max(0,e-this.rawT)/r,1.3)*s,a=this.prev;for(let l=0;l<vs;l++){let c=n[l]-a[l];i[l]=Math.abs(c)<.03?n[l]:er(n[l]+c*o)}this.rawQ.angleTo(this.prevQ)>.01?this._pq.copy(this.prevQ).slerp(this.rawQ,1+o):this._pq.copy(this.rawQ),this._pp.copy(this.rawPos).sub(this.prevPos).multiplyScalar(o).add(this.rawPos)}calibrate(){this.neutral=Float32Array.from(this.raw),this.hasPose&&(this.restPos=this.rawPos.clone())}_blink(e){let n=this.S.eyeGain,i=.12+.1*(1-n),s=.62-.2*(n-1),r=er((e-i)/Math.max(.05,s-i));return r*r*(3-2*r)}update(e,n){let i=this.S,s=this.frame,r=n&&performance.now()-this.lastSeen<500;s.presence=tr(s.presence,r?1:0,nl(r?8:3,e));let o=this._tgt||(this._tgt=new Float32Array(vs));this._predict(performance.now());let a=this._pred,l=this.neutral;for(let E=0;E<vs;E++){let C=a[E],R=Jy[E];if(l&&R!=="blink"&&R!=="look"){let A=l[E];C=(C-A)/Math.max(.2,1-A)}C*=R==="brow"?i.browGain:R==="mouth"?i.mouthGain:1,o[E]=r?er(C):0}let c=this._blink(a[nr.eyeBlinkLeft]),h=this._blink(a[nr.eyeBlinkRight]);if(i.winkSharpen){let E=c-h;E>.35?h*=.25:E<-.35&&(c*=.25)}o[nr.eyeBlinkLeft]=r?c:0,o[nr.eyeBlinkRight]=r?h:0,o[nr.eyeWideLeft]*=1-c,o[nr.eyeWideRight]*=1-h,o[nr.tongueOut]=0;let u=tr(40,7,i.smoothing),d=nl(u*1.8,e),f=nl(u,e),g=this._sm,_=s.blendshapes;for(let E=0;E<vs;E++){let C=i.mirror?GR[E]:E,R=Jy[E]==="blink"||E===nr.jawOpen?d:f;g[C]=tr(g[C],o[E],R)}for(let E=0;E<vs;E++)_[ds[E]]=g[E];s.gaze.yaw=(_.eyeLookOutLeft+_.eyeLookInRight-(_.eyeLookInLeft+_.eyeLookOutRight))*.5,s.gaze.pitch=(_.eyeLookUpLeft+_.eyeLookUpRight-(_.eyeLookDownLeft+_.eyeLookDownRight))*.5;let p=nl(tr(30,6,i.smoothing),e),m=this._q.copy(this._pq);i.mirror&&(m.y=-m.y,m.z=-m.z),this._e.setFromQuaternion(m,"YXZ");let T=i.headGain,y=s.presence;return s.head.pitch=tr(s.head.pitch,this._e.x*T*y,p),s.head.yaw=tr(s.head.yaw,this._e.y*T*y,p),s.head.roll=tr(s.head.roll,this._e.z*T*y,p),this.restPos&&this.hasPose&&(this._p.copy(this._pp).sub(this.restPos).multiplyScalar(.01*y),i.mirror&&(this._p.x=-this._p.x),s.headOffset.lerp(this._p,p)),this._updateEmotion(e,r),s}_updateEmotion(e,n){let i=this.S,s=this.frame.blendshapes,r=this.frame.emotion,o={happy:0,angry:0,sad:0,surprised:0};if(i.emotionMode==="manual")o[i.emotionManual]!==void 0&&(o[i.emotionManual]=1);else if(i.emotionMode==="auto"&&n){let l=(s.mouthSmileLeft+s.mouthSmileRight)/2,c=(s.mouthFrownLeft+s.mouthFrownRight)/2,h=(s.browDownLeft+s.browDownRight)/2,u={happy:er((l-.25)*2.2),angry:er((h-.3)*2.2+(s.noseSneerLeft+s.noseSneerRight)*.4),sad:er((c-.15)*2+(s.browInnerUp-.3)*1.2-l),surprised:er((s.browInnerUp-.4)*1.6+(s.eyeWideLeft+s.eyeWideRight)*.5+(s.jawOpen-.35))},d="neutral",f=.35;for(let g in u)u[g]>f&&(d=g,f=u[g]);d!==this._mood?(this._moodHold+=e,this._moodHold>.35&&(this._mood=d,this._moodHold=0)):this._moodHold=0,this._mood!=="neutral"&&(o[this._mood]=er(.55+(u[this._mood]||0)*.6))}let a=nl(3.5,e);for(let l in r)r[l]=tr(r[l],o[l]*i.emotionGain,a)}};var gt=t=>document.getElementById(t),e1={mirror:!0,bg:"green",framing:"chest",camZoom:0,camHeight:0,bloom:!0,bloomStrength:.8,bloomThreshold:.05,quality:1.25,fpsCap:30,trackDelegate:"CPU",prediction:.7,eyeGain:1,mouthGain:1.15,browGain:1.2,smoothing:.5,winkSharpen:!0,headGain:1,bodyFollow:.6,emotionMode:"auto",emotionManual:"neutral",emotionGain:1,wind:.5,breathing:.6,showPreview:!1,showFps:!0},dt={...e1};try{let t=JSON.parse(localStorage.getItem("fuchs-vtuber")||"{}");(t.v||1)<2&&delete t.quality,Object.assign(dt,t)}catch{}dt.v=2;var kh=()=>{try{localStorage.setItem("fuchs-vtuber",JSON.stringify(dt))}catch{}},Qn=new Cc(gt("stage"),dt),Xo=new Gc(dt),Vh=new Bh(dt),xs=new Fh(gt("cam"),dt);xs.onSample=t=>Vh.push(t);xs.onStatus=t=>An(t);var Cr=!1,Hh=performance.now(),Qy=0,Lm=0,Um=Hh;function t1(t){if(requestAnimationFrame(t1),t-Hh<1e3/dt.fpsCap-2)return;let e=Math.min((t-Hh)/1e3,.1);Hh=t,Qy+=e;let n=Vh.update(e,Cr);if(Xo.update(n,Qy,e),Qn.render(e),Lm++,t-Um>1e3){let i=Lm*1e3/(t-Um);Lm=0,Um=t,gt("fps").textContent=`${i.toFixed(0)} fps \xB7 v5 \xB7 Tracking ${Cr?`${xs.rate.toFixed(0)}/s \xB7 ${xs.detectMs.toFixed(0)} ms \xB7 ${xs.delegate}`:"aus"}`,gt("emoLabel").textContent=XR(n.emotion)}}var WR={neutral:"Neutral",happy:"Freude",angry:"Wut",sad:"Traurig",surprised:"\xDCberrascht"};function XR(t){let e="neutral",n=.2;for(let i in t)t[i]>n&&(e=i,n=t[i]);return WR[e]}async function n1(){An("Kamera startet \u2026");try{await xs.start()}catch(t){An("Kamera oder Tracking nicht verf\xFCgbar: "+t.message,!0);return}Cr=!0,gt("btnCam").classList.add("on"),gt("btnCam").textContent="Stopp",An("Tracking l\xE4uft. Neutral schauen und \u201ENeutral\u201C tippen."),setTimeout(()=>An(""),2500)}function i1(){xs.stop(),Cr=!1,gt("btnCam").classList.remove("on"),gt("btnCam").textContent="Tracking starten"}async function qR(){let t=await fetch("model/manifest.json");if(!t.ok)throw new Error("no bundled model");let e=await t.json(),n=[],i=0;for(let s of e.parts){let r=(await fetch("model/"+s)).body.getReader(),o=[];for(;;){let{done:a,value:l}=await r.read();if(a)break;o.push(l),i+=l.length,An(`Fuchs l\xE4dt \u2026 ${Math.round(i/e.size*100)} %`)}n.push(new Blob(o))}return new Blob(n).arrayBuffer()}async function Fm(t,e){An("Modell wird aufbereitet \u2026"),gt("pickVrm").style.display="none";let n=Xo.vrm,i=await Xo.load(t);n&&(Qn.scene.remove(n.scene),Ln.deepDispose(n.scene)),Qn.setModel(i.scene,Xo.materials(),Xo.headY),An(`${e} geladen`),setTimeout(()=>An(""),1500)}async function Dm(){try{await Fm(await qR(),"Fuchs")}catch{An(""),gt("pickVrm").style.display="flex"}}var Bm=()=>new Promise((t,e)=>{let n=indexedDB.open("fuchs-vtuber",1);n.onupgradeneeded=()=>n.result.createObjectStore("m"),n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)});async function YR(t){try{let e=new Blob([await t.arrayBuffer()]),n=(await Bm()).transaction("m","readwrite");n.objectStore("m").put({name:t.name,blob:e},"vrm"),await new Promise(i=>{n.oncomplete=i,n.onerror=()=>{console.warn("cache failed",n.error),i()},n.onabort=()=>{console.warn("cache aborted",n.error),i()}})}catch(e){console.warn("cache failed",e)}}async function jR(){try{let t=await Bm();return await new Promise(e=>{let n=t.transaction("m").objectStore("m").get("vrm");n.onsuccess=()=>e(n.result),n.onerror=()=>e(null)})}catch{return null}}async function KR(){try{(await Bm()).transaction("m","readwrite").objectStore("m").delete("vrm")}catch{}}function An(t,e){let n=gt("status");n.textContent=t,n.style.display=t?"block":"none",n.classList.toggle("err",!!e)}function Om(t){if(t==="bg"&&Qn.applyBackground(),(t==="bloomStrength"||t==="bloomThreshold")&&Qn.applyBloomSettings(),t==="quality"&&Qn.resize(),t==="trackDelegate"){let e=Cr;e&&i1(),xs.resetWorker(),e&&n1()}if(t==="framing"&&(dt.camZoom=0,dt.camHeight=0,Qn.frame()),t==="showPreview"&&gt("cam").classList.toggle("show",dt.showPreview),t==="showFps")for(let e of["fps","emoLabel"])gt(e).style.display=dt.showFps?"block":"none"}function Ht(t,e,n){let i=gt(t);if(!i)return;let s=i.type==="checkbox"?"check":i.type==="range"?"num":"select";s==="check"?i.checked=!!dt[e]:i.value=String(dt[e]);let r=i.parentElement.querySelector("output"),o=()=>{r&&n&&(r.textContent=n(+i.value))};o(),i.addEventListener(s==="num"?"input":"change",()=>{dt[e]=s==="check"?i.checked:s==="num"||typeof e1[e]=="number"?+i.value:i.value,o(),Om(e),kh()})}function Nm(){document.querySelectorAll("[data-emo]").forEach(t=>t.classList.toggle("on",dt.emotionMode==="manual"&&dt.emotionManual===t.dataset.emo)),gt("btnEmoAuto").classList.toggle("on",dt.emotionMode==="auto")}function ZR(){let t=c=>Math.round(c*100)+" %";Ht("rBloom","bloomStrength",c=>c.toFixed(2)),Ht("rThresh","bloomThreshold",c=>c.toFixed(2)),Ht("rQuality","quality",c=>c.toFixed(2)+"\xD7"),Ht("sFps","fpsCap"),Ht("sDelegate","trackDelegate"),Ht("rEye","eyeGain",t),Ht("rMouth","mouthGain",t),Ht("rBrow","browGain",t),Ht("rSmooth","smoothing",t),Ht("rPredict","prediction",t),Ht("rHead","headGain",t),Ht("rBody","bodyFollow",t),Ht("rEmo","emotionGain",t),Ht("rWind","wind",t),Ht("rBreath","breathing",t),Ht("cMirror","mirror"),Ht("cBloom","bloom"),Ht("cWink","winkSharpen"),Ht("cPreview","showPreview"),Ht("cFps","showFps"),Ht("sBg","bg"),Ht("sFrame","framing"),Om("showPreview"),Om("showFps"),gt("ver").textContent="App-Version 5",gt("btnCam").onclick=()=>Cr?i1():n1(),gt("btnCal").onclick=()=>{Vh.calibrate(),An("Neutral gespeichert"),setTimeout(()=>An(""),1200)},gt("btnSettings").onclick=()=>gt("panel").classList.toggle("open"),gt("btnClose").onclick=()=>gt("panel").classList.remove("open"),gt("btnFull").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen({navigationUI:"hide"})}catch{}},gt("btnHide").onclick=()=>{document.body.classList.add("clean"),An("Doppeltippen zeigt die Kn\xF6pfe wieder"),setTimeout(()=>An(""),2e3)},document.querySelectorAll("[data-emo]").forEach(c=>c.onclick=()=>{dt.emotionMode==="manual"&&dt.emotionManual===c.dataset.emo?dt.emotionMode="auto":(dt.emotionMode="manual",dt.emotionManual=c.dataset.emo),kh(),Nm()}),gt("btnEmoAuto").onclick=()=>{dt.emotionMode=dt.emotionMode==="auto"?"off":"auto",kh(),Nm()},Nm(),gt("fileVrm").onchange=async c=>{let h=c.target.files[0];if(h)try{let u=YR(h);await Fm(await h.arrayBuffer(),h.name),await u}catch(u){An("Konnte VRM nicht laden: "+u.message,!0)}},gt("btnDefault").onclick=async()=>{await KR(),Dm()},gt("btnReset").onclick=()=>{try{localStorage.removeItem("fuchs-vtuber")}catch{}location.reload()};let e=gt("stage"),n=new Map,i=0,s=0,r=null,o=0,a=0;e.addEventListener("pointerdown",c=>{if(n.set(c.pointerId,c),n.size===2){let[h,u]=[...n.values()];i=Math.hypot(h.clientX-u.clientX,h.clientY-u.clientY),s=dt.camZoom,r=null}else r=c.clientY,o=dt.camHeight}),e.addEventListener("pointermove",c=>{if(n.has(c.pointerId))if(n.set(c.pointerId,c),n.size===2){let[h,u]=[...n.values()];dt.camZoom=s+Math.log(Math.hypot(h.clientX-u.clientX,h.clientY-u.clientY)/i)/Math.log(1.6),Qn.frame()}else r!==null&&(dt.camHeight=o+(c.clientY-r)/window.innerHeight*.8,Qn.frame())});let l=c=>{if(n.delete(c.pointerId),n.size===0){r=null,kh();let h=performance.now();h-a<320&&document.body.classList.remove("clean"),a=h}};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),window.addEventListener("resize",()=>Qn.resize())}async function s1(){try{await navigator.wakeLock?.request("screen")}catch{}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s1()});async function $R(){Qn.applyBackground(),ZR(),Qn.resize(),requestAnimationFrame(t1),s1();let t=await jR();if(t?.blob)try{await Fm(await t.blob.arrayBuffer(),t.name)}catch{await Dm()}else await Dm()}$R();if("serviceWorker"in navigator&&location.protocol==="https:"){let t=!!navigator.serviceWorker.controller,e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!e&&(e=!0,location.reload())}),navigator.serviceWorker.register("sw.js",{updateViaCache:"none"}).then(n=>n.update()).catch(()=>{})}window.__vt={S:dt,stage:Qn,avatar:Xo,processor:Vh,source:xs,setTracking:t=>{Cr=t}};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm v3.5.5
   * VRM file loader for three.js.
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm-core v3.5.5
   * The implementation of core features of VRM, for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-core is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-mtoon v3.5.5
   * MToon (toon material) module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.5.5
   * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-v0compat v3.5.5
   * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-node-constraint v3.5.5
   * Node constraint module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-node-constraint is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-springbone v3.5.5
   * Spring bone module for @pixiv/three-vrm
   *
   * Copyright (c) 2019-2026 pixiv Inc.
   * @pixiv/three-vrm-springbone is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
*/
