(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{50108:function(a,b,c){!function(a){"use strict";var b=function(b){var a,c=new Float64Array(16);if(b)for(a=0;a<b.length;a++)c[a]=b[a];return c},O=function(){throw new Error("no PRNG")},P=new Uint8Array(16),g=new Uint8Array(32);g[0]=9;var Q=b(),R=b([1]),S=b([56129,1]),h=b([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),T=b([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),U=b([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),V=b([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),W=b([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function X(a,b,c,d){a[b]=c>>24&255,a[b+1]=c>>16&255,a[b+2]=c>>8&255,a[b+3]=255&c,a[b+4]=d>>24&255,a[b+5]=d>>16&255,a[b+6]=d>>8&255,a[b+7]=255&d}function Y(c,d,e,f,g){var a,b=0;for(a=0;a<g;a++)b|=c[d+a]^e[f+a];return(1&b-1>>>8)-1}function i(a,b,c,d){return Y(a,b,c,d,16)}function j(a,b,c,d){return Y(a,b,c,d,32)}function Z(a,b,c,d){!function(a,d,c,e){for(var b,v=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,w=255&c[0]|(255&c[1])<<8|(255&c[2])<<16|(255&c[3])<<24,x=255&c[4]|(255&c[5])<<8|(255&c[6])<<16|(255&c[7])<<24,y=255&c[8]|(255&c[9])<<8|(255&c[10])<<16|(255&c[11])<<24,z=255&c[12]|(255&c[13])<<8|(255&c[14])<<16|(255&c[15])<<24,A=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,B=255&d[0]|(255&d[1])<<8|(255&d[2])<<16|(255&d[3])<<24,C=255&d[4]|(255&d[5])<<8|(255&d[6])<<16|(255&d[7])<<24,D=255&d[8]|(255&d[9])<<8|(255&d[10])<<16|(255&d[11])<<24,E=255&d[12]|(255&d[13])<<8|(255&d[14])<<16|(255&d[15])<<24,F=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,G=255&c[16]|(255&c[17])<<8|(255&c[18])<<16|(255&c[19])<<24,H=255&c[20]|(255&c[21])<<8|(255&c[22])<<16|(255&c[23])<<24,I=255&c[24]|(255&c[25])<<8|(255&c[26])<<16|(255&c[27])<<24,J=255&c[28]|(255&c[29])<<8|(255&c[30])<<16|(255&c[31])<<24,K=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,f=v,g=w,h=x,i=y,j=z,k=A,l=B,m=C,n=D,o=E,p=F,q=G,r=H,s=I,t=J,u=K,L=0;L<20;L+=2)j^=(b=f+r|0)<<7|b>>>25,n^=(b=j+f|0)<<9|b>>>23,r^=(b=n+j|0)<<13|b>>>19,f^=(b=r+n|0)<<18|b>>>14,o^=(b=k+g|0)<<7|b>>>25,s^=(b=o+k|0)<<9|b>>>23,g^=(b=s+o|0)<<13|b>>>19,k^=(b=g+s|0)<<18|b>>>14,t^=(b=p+l|0)<<7|b>>>25,h^=(b=t+p|0)<<9|b>>>23,l^=(b=h+t|0)<<13|b>>>19,p^=(b=l+h|0)<<18|b>>>14,i^=(b=u+q|0)<<7|b>>>25,m^=(b=i+u|0)<<9|b>>>23,q^=(b=m+i|0)<<13|b>>>19,u^=(b=q+m|0)<<18|b>>>14,g^=(b=f+i|0)<<7|b>>>25,h^=(b=g+f|0)<<9|b>>>23,i^=(b=h+g|0)<<13|b>>>19,f^=(b=i+h|0)<<18|b>>>14,l^=(b=k+j|0)<<7|b>>>25,m^=(b=l+k|0)<<9|b>>>23,j^=(b=m+l|0)<<13|b>>>19,k^=(b=j+m|0)<<18|b>>>14,q^=(b=p+o|0)<<7|b>>>25,n^=(b=q+p|0)<<9|b>>>23,o^=(b=n+q|0)<<13|b>>>19,p^=(b=o+n|0)<<18|b>>>14,r^=(b=u+t|0)<<7|b>>>25,s^=(b=r+u|0)<<9|b>>>23,t^=(b=s+r|0)<<13|b>>>19,u^=(b=t+s|0)<<18|b>>>14;f=f+v|0,g=g+w|0,h=h+x|0,i=i+y|0,j=j+z|0,k=k+A|0,l=l+B|0,m=m+C|0,n=n+D|0,o=o+E|0,p=p+F|0,q=q+G|0,r=r+H|0,s=s+I|0,t=t+J|0,u=u+K|0,a[0]=f>>>0&255,a[1]=f>>>8&255,a[2]=f>>>16&255,a[3]=f>>>24&255,a[4]=g>>>0&255,a[5]=g>>>8&255,a[6]=g>>>16&255,a[7]=g>>>24&255,a[8]=h>>>0&255,a[9]=h>>>8&255,a[10]=h>>>16&255,a[11]=h>>>24&255,a[12]=i>>>0&255,a[13]=i>>>8&255,a[14]=i>>>16&255,a[15]=i>>>24&255,a[16]=j>>>0&255,a[17]=j>>>8&255,a[18]=j>>>16&255,a[19]=j>>>24&255,a[20]=k>>>0&255,a[21]=k>>>8&255,a[22]=k>>>16&255,a[23]=k>>>24&255,a[24]=l>>>0&255,a[25]=l>>>8&255,a[26]=l>>>16&255,a[27]=l>>>24&255,a[28]=m>>>0&255,a[29]=m>>>8&255,a[30]=m>>>16&255,a[31]=m>>>24&255,a[32]=n>>>0&255,a[33]=n>>>8&255,a[34]=n>>>16&255,a[35]=n>>>24&255,a[36]=o>>>0&255,a[37]=o>>>8&255,a[38]=o>>>16&255,a[39]=o>>>24&255,a[40]=p>>>0&255,a[41]=p>>>8&255,a[42]=p>>>16&255,a[43]=p>>>24&255,a[44]=q>>>0&255,a[45]=q>>>8&255,a[46]=q>>>16&255,a[47]=q>>>24&255,a[48]=r>>>0&255,a[49]=r>>>8&255,a[50]=r>>>16&255,a[51]=r>>>24&255,a[52]=s>>>0&255,a[53]=s>>>8&255,a[54]=s>>>16&255,a[55]=s>>>24&255,a[56]=t>>>0&255,a[57]=t>>>8&255,a[58]=t>>>16&255,a[59]=t>>>24&255,a[60]=u>>>0&255,a[61]=u>>>8&255,a[62]=u>>>16&255,a[63]=u>>>24&255}(a,b,c,d)}function k(a,b,c,d){!function(b,d,c,e){for(var a,w=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,x=255&c[0]|(255&c[1])<<8|(255&c[2])<<16|(255&c[3])<<24,y=255&c[4]|(255&c[5])<<8|(255&c[6])<<16|(255&c[7])<<24,z=255&c[8]|(255&c[9])<<8|(255&c[10])<<16|(255&c[11])<<24,A=255&c[12]|(255&c[13])<<8|(255&c[14])<<16|(255&c[15])<<24,B=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,C=255&d[0]|(255&d[1])<<8|(255&d[2])<<16|(255&d[3])<<24,D=255&d[4]|(255&d[5])<<8|(255&d[6])<<16|(255&d[7])<<24,E=255&d[8]|(255&d[9])<<8|(255&d[10])<<16|(255&d[11])<<24,F=255&d[12]|(255&d[13])<<8|(255&d[14])<<16|(255&d[15])<<24,G=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,H=255&c[16]|(255&c[17])<<8|(255&c[18])<<16|(255&c[19])<<24,I=255&c[20]|(255&c[21])<<8|(255&c[22])<<16|(255&c[23])<<24,J=255&c[24]|(255&c[25])<<8|(255&c[26])<<16|(255&c[27])<<24,K=255&c[28]|(255&c[29])<<8|(255&c[30])<<16|(255&c[31])<<24,L=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,f=w,n=x,o=y,p=z,q=A,g=B,h=C,i=D,j=E,k=F,l=G,r=H,s=I,t=J,u=K,m=L,v=0;v<20;v+=2)q^=(a=f+s|0)<<7|a>>>25,j^=(a=q+f|0)<<9|a>>>23,s^=(a=j+q|0)<<13|a>>>19,f^=(a=s+j|0)<<18|a>>>14,k^=(a=g+n|0)<<7|a>>>25,t^=(a=k+g|0)<<9|a>>>23,n^=(a=t+k|0)<<13|a>>>19,g^=(a=n+t|0)<<18|a>>>14,u^=(a=l+h|0)<<7|a>>>25,o^=(a=u+l|0)<<9|a>>>23,h^=(a=o+u|0)<<13|a>>>19,l^=(a=h+o|0)<<18|a>>>14,p^=(a=m+r|0)<<7|a>>>25,i^=(a=p+m|0)<<9|a>>>23,r^=(a=i+p|0)<<13|a>>>19,m^=(a=r+i|0)<<18|a>>>14,n^=(a=f+p|0)<<7|a>>>25,o^=(a=n+f|0)<<9|a>>>23,p^=(a=o+n|0)<<13|a>>>19,f^=(a=p+o|0)<<18|a>>>14,h^=(a=g+q|0)<<7|a>>>25,i^=(a=h+g|0)<<9|a>>>23,q^=(a=i+h|0)<<13|a>>>19,g^=(a=q+i|0)<<18|a>>>14,r^=(a=l+k|0)<<7|a>>>25,j^=(a=r+l|0)<<9|a>>>23,k^=(a=j+r|0)<<13|a>>>19,l^=(a=k+j|0)<<18|a>>>14,s^=(a=m+u|0)<<7|a>>>25,t^=(a=s+m|0)<<9|a>>>23,u^=(a=t+s|0)<<13|a>>>19,m^=(a=u+t|0)<<18|a>>>14;b[0]=f>>>0&255,b[1]=f>>>8&255,b[2]=f>>>16&255,b[3]=f>>>24&255,b[4]=g>>>0&255,b[5]=g>>>8&255,b[6]=g>>>16&255,b[7]=g>>>24&255,b[8]=l>>>0&255,b[9]=l>>>8&255,b[10]=l>>>16&255,b[11]=l>>>24&255,b[12]=m>>>0&255,b[13]=m>>>8&255,b[14]=m>>>16&255,b[15]=m>>>24&255,b[16]=h>>>0&255,b[17]=h>>>8&255,b[18]=h>>>16&255,b[19]=h>>>24&255,b[20]=i>>>0&255,b[21]=i>>>8&255,b[22]=i>>>16&255,b[23]=i>>>24&255,b[24]=j>>>0&255,b[25]=j>>>8&255,b[26]=j>>>16&255,b[27]=j>>>24&255,b[28]=k>>>0&255,b[29]=k>>>8&255,b[30]=k>>>16&255,b[31]=k>>>24&255}(a,b,c,d)}var $=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function l(h,f,i,g,d,k,j){var c,a,b=new Uint8Array(16),e=new Uint8Array(64);for(a=0;a<16;a++)b[a]=0;for(a=0;a<8;a++)b[a]=k[a];for(;d>=64;){for(Z(e,b,j,$),a=0;a<64;a++)h[f+a]=i[g+a]^e[a];for(a=8,c=1;a<16;a++)c=c+(255&b[a])|0,b[a]=255&c,c>>>=8;d-=64,f+=64,g+=64}if(d>0)for(Z(e,b,j,$),a=0;a<d;a++)h[f+a]=i[g+a]^e[a];return 0}function m(g,f,d,i,h){var c,a,b=new Uint8Array(16),e=new Uint8Array(64);for(a=0;a<16;a++)b[a]=0;for(a=0;a<8;a++)b[a]=i[a];for(;d>=64;){for(Z(e,b,h,$),a=0;a<64;a++)g[f+a]=e[a];for(a=8,c=1;a<16;a++)c=c+(255&b[a])|0,b[a]=255&c,c>>>=8;d-=64,f+=64}if(d>0)for(Z(e,b,h,$),a=0;a<d;a++)g[f+a]=e[a];return 0}function n(e,f,g,b,h){var c=new Uint8Array(32);k(c,b,h,$);for(var d=new Uint8Array(8),a=0;a<8;a++)d[a]=b[a+16];return m(e,f,g,d,c)}function o(e,f,g,h,i,b,j){var c=new Uint8Array(32);k(c,b,j,$);for(var d=new Uint8Array(8),a=0;a<8;a++)d[a]=b[a+16];return l(e,f,g,h,i,d,c)}var d=function(a){var c,d,e,f,b,g,h,i;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,c=255&a[0]|(255&a[1])<<8,this.r[0]=8191&c,d=255&a[2]|(255&a[3])<<8,this.r[1]=(c>>>13|d<<3)&8191,e=255&a[4]|(255&a[5])<<8,this.r[2]=(d>>>10|e<<6)&7939,f=255&a[6]|(255&a[7])<<8,this.r[3]=(e>>>7|f<<9)&8191,b=255&a[8]|(255&a[9])<<8,this.r[4]=(f>>>4|b<<12)&255,this.r[5]=b>>>1&8190,g=255&a[10]|(255&a[11])<<8,this.r[6]=(b>>>14|g<<2)&8191,h=255&a[12]|(255&a[13])<<8,this.r[7]=(g>>>11|h<<5)&8065,i=255&a[14]|(255&a[15])<<8,this.r[8]=(h>>>8|i<<8)&8191,this.r[9]=i>>>5&127,this.pad[0]=255&a[16]|(255&a[17])<<8,this.pad[1]=255&a[18]|(255&a[19])<<8,this.pad[2]=255&a[20]|(255&a[21])<<8,this.pad[3]=255&a[22]|(255&a[23])<<8,this.pad[4]=255&a[24]|(255&a[25])<<8,this.pad[5]=255&a[26]|(255&a[27])<<8,this.pad[6]=255&a[28]|(255&a[29])<<8,this.pad[7]=255&a[30]|(255&a[31])<<8};function p(b,c,e,f,g,h){var a=new d(h);return a.update(e,f,g),a.finish(b,c),0}function q(b,c,d,e,f,g){var a=new Uint8Array(16);return p(a,0,d,e,f,g),i(b,c,a,0)}function e(a,d,c,e,f){var b;if(c<32)return -1;for(o(a,0,d,0,c,e,f),p(a,16,a,32,c-32,a),b=0;b<16;b++)a[b]=0;return 0}function f(d,b,c,e,f){var a,g=new Uint8Array(32);if(c<32)return -1;if(n(g,0,32,e,f),0!==q(b,16,b,32,c-32,g))return -1;for(o(d,0,b,0,c,e,f),a=0;a<32;a++)d[a]=0;return 0}function r(b,c){var a;for(a=0;a<16;a++)b[a]=0|c[a]}function _(c){var a,d,b=1;for(a=0;a<16;a++)b=Math.floor((d=c[a]+b+65535)/65536),c[a]=d-65536*b;c[0]+=b-1+37*(b-1)}function aa(c,d,e){for(var b,f=~(e-1),a=0;a<16;a++)b=f&(c[a]^d[a]),c[a]^=b,d[a]^=b}function s(f,h){var a,e,g,d=b(),c=b();for(a=0;a<16;a++)c[a]=h[a];for(_(c),_(c),_(c),e=0;e<2;e++){for(a=1,d[0]=c[0]-65517;a<15;a++)d[a]=c[a]-65535-(d[a-1]>>16&1),d[a-1]&=65535;d[15]=c[15]-32767-(d[14]>>16&1),g=d[15]>>16&1,d[14]&=65535,aa(c,d,1-g)}for(a=0;a<16;a++)f[2*a]=255&c[a],f[2*a+1]=c[a]>>8}function ab(c,d){var a=new Uint8Array(32),b=new Uint8Array(32);return s(a,c),s(b,d),j(a,0,b,0)}function ac(b){var a=new Uint8Array(32);return s(a,b),1&a[0]}function t(b,c){var a;for(a=0;a<16;a++)b[a]=c[2*a]+(c[2*a+1]<<8);b[15]&=32767}function u(b,c,d){for(var a=0;a<16;a++)b[a]=c[a]+d[a]}function v(b,c,d){for(var a=0;a<16;a++)b[a]=c[a]-d[a]}function w(i,j,k){var a,b,P=0,S=0,Q=0,N=0,L=0,J=0,H=0,F=0,D=0,l=0,h=0,g=0,f=0,e=0,c=0,d=0,m=0,E=0,G=0,I=0,K=0,M=0,O=0,R=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,n=k[0],o=k[1],p=k[2],q=k[3],r=k[4],s=k[5],t=k[6],u=k[7],v=k[8],w=k[9],x=k[10],y=k[11],z=k[12],A=k[13],B=k[14],C=k[15];P+=(a=j[0])*n,S+=a*o,Q+=a*p,N+=a*q,L+=a*r,J+=a*s,H+=a*t,F+=a*u,D+=a*v,l+=a*w,h+=a*x,g+=a*y,f+=a*z,e+=a*A,c+=a*B,d+=a*C,a=j[1],S+=a*n,Q+=a*o,N+=a*p,L+=a*q,J+=a*r,H+=a*s,F+=a*t,D+=a*u,l+=a*v,h+=a*w,g+=a*x,f+=a*y,e+=a*z,c+=a*A,d+=a*B,m+=a*C,a=j[2],Q+=a*n,N+=a*o,L+=a*p,J+=a*q,H+=a*r,F+=a*s,D+=a*t,l+=a*u,h+=a*v,g+=a*w,f+=a*x,e+=a*y,c+=a*z,d+=a*A,m+=a*B,E+=a*C,a=j[3],N+=a*n,L+=a*o,J+=a*p,H+=a*q,F+=a*r,D+=a*s,l+=a*t,h+=a*u,g+=a*v,f+=a*w,e+=a*x,c+=a*y,d+=a*z,m+=a*A,E+=a*B,G+=a*C,a=j[4],L+=a*n,J+=a*o,H+=a*p,F+=a*q,D+=a*r,l+=a*s,h+=a*t,g+=a*u,f+=a*v,e+=a*w,c+=a*x,d+=a*y,m+=a*z,E+=a*A,G+=a*B,I+=a*C,a=j[5],J+=a*n,H+=a*o,F+=a*p,D+=a*q,l+=a*r,h+=a*s,g+=a*t,f+=a*u,e+=a*v,c+=a*w,d+=a*x,m+=a*y,E+=a*z,G+=a*A,I+=a*B,K+=a*C,a=j[6],H+=a*n,F+=a*o,D+=a*p,l+=a*q,h+=a*r,g+=a*s,f+=a*t,e+=a*u,c+=a*v,d+=a*w,m+=a*x,E+=a*y,G+=a*z,I+=a*A,K+=a*B,M+=a*C,a=j[7],F+=a*n,D+=a*o,l+=a*p,h+=a*q,g+=a*r,f+=a*s,e+=a*t,c+=a*u,d+=a*v,m+=a*w,E+=a*x,G+=a*y,I+=a*z,K+=a*A,M+=a*B,O+=a*C,a=j[8],D+=a*n,l+=a*o,h+=a*p,g+=a*q,f+=a*r,e+=a*s,c+=a*t,d+=a*u,m+=a*v,E+=a*w,G+=a*x,I+=a*y,K+=a*z,M+=a*A,O+=a*B,R+=a*C,a=j[9],l+=a*n,h+=a*o,g+=a*p,f+=a*q,e+=a*r,c+=a*s,d+=a*t,m+=a*u,E+=a*v,G+=a*w,I+=a*x,K+=a*y,M+=a*z,O+=a*A,R+=a*B,T+=a*C,a=j[10],h+=a*n,g+=a*o,f+=a*p,e+=a*q,c+=a*r,d+=a*s,m+=a*t,E+=a*u,G+=a*v,I+=a*w,K+=a*x,M+=a*y,O+=a*z,R+=a*A,T+=a*B,U+=a*C,a=j[11],g+=a*n,f+=a*o,e+=a*p,c+=a*q,d+=a*r,m+=a*s,E+=a*t,G+=a*u,I+=a*v,K+=a*w,M+=a*x,O+=a*y,R+=a*z,T+=a*A,U+=a*B,V+=a*C,a=j[12],f+=a*n,e+=a*o,c+=a*p,d+=a*q,m+=a*r,E+=a*s,G+=a*t,I+=a*u,K+=a*v,M+=a*w,O+=a*x,R+=a*y,T+=a*z,U+=a*A,V+=a*B,W+=a*C,a=j[13],e+=a*n,c+=a*o,d+=a*p,m+=a*q,E+=a*r,G+=a*s,I+=a*t,K+=a*u,M+=a*v,O+=a*w,R+=a*x,T+=a*y,U+=a*z,V+=a*A,W+=a*B,X+=a*C,a=j[14],c+=a*n,d+=a*o,m+=a*p,E+=a*q,G+=a*r,I+=a*s,K+=a*t,M+=a*u,O+=a*v,R+=a*w,T+=a*x,U+=a*y,V+=a*z,W+=a*A,X+=a*B,Y+=a*C,a=j[15],d+=a*n,m+=a*o,E+=a*p,G+=a*q,I+=a*r,K+=a*s,M+=a*t,O+=a*u,R+=a*v,T+=a*w,U+=a*x,V+=a*y,W+=a*z,X+=a*A,Y+=a*B,Z+=a*C,P+=38*m,S+=38*E,Q+=38*G,N+=38*I,L+=38*K,J+=38*M,H+=38*O,F+=38*R,D+=38*T,l+=38*U,h+=38*V,g+=38*W,f+=38*X,e+=38*Y,c+=38*Z,b=1,a=P+b+65535,b=Math.floor(a/65536),P=a-65536*b,a=S+b+65535,b=Math.floor(a/65536),S=a-65536*b,a=Q+b+65535,b=Math.floor(a/65536),Q=a-65536*b,a=N+b+65535,b=Math.floor(a/65536),N=a-65536*b,a=L+b+65535,b=Math.floor(a/65536),L=a-65536*b,a=J+b+65535,b=Math.floor(a/65536),J=a-65536*b,a=H+b+65535,b=Math.floor(a/65536),H=a-65536*b,a=F+b+65535,b=Math.floor(a/65536),F=a-65536*b,a=D+b+65535,b=Math.floor(a/65536),D=a-65536*b,a=l+b+65535,b=Math.floor(a/65536),l=a-65536*b,a=h+b+65535,b=Math.floor(a/65536),h=a-65536*b,a=g+b+65535,b=Math.floor(a/65536),g=a-65536*b,a=f+b+65535,b=Math.floor(a/65536),f=a-65536*b,a=e+b+65535,b=Math.floor(a/65536),e=a-65536*b,a=c+b+65535,b=Math.floor(a/65536),c=a-65536*b,a=d+b+65535,b=Math.floor(a/65536),d=a-65536*b,P+=b-1+37*(b-1),b=1,a=P+b+65535,b=Math.floor(a/65536),P=a-65536*b,a=S+b+65535,b=Math.floor(a/65536),S=a-65536*b,a=Q+b+65535,b=Math.floor(a/65536),Q=a-65536*b,a=N+b+65535,b=Math.floor(a/65536),N=a-65536*b,a=L+b+65535,b=Math.floor(a/65536),L=a-65536*b,a=J+b+65535,b=Math.floor(a/65536),J=a-65536*b,a=H+b+65535,b=Math.floor(a/65536),H=a-65536*b,a=F+b+65535,b=Math.floor(a/65536),F=a-65536*b,a=D+b+65535,b=Math.floor(a/65536),D=a-65536*b,a=l+b+65535,b=Math.floor(a/65536),l=a-65536*b,a=h+b+65535,b=Math.floor(a/65536),h=a-65536*b,a=g+b+65535,b=Math.floor(a/65536),g=a-65536*b,a=f+b+65535,b=Math.floor(a/65536),f=a-65536*b,a=e+b+65535,b=Math.floor(a/65536),e=a-65536*b,a=c+b+65535,b=Math.floor(a/65536),c=a-65536*b,a=d+b+65535,b=Math.floor(a/65536),d=a-65536*b,P+=b-1+37*(b-1),i[0]=P,i[1]=S,i[2]=Q,i[3]=N,i[4]=L,i[5]=J,i[6]=H,i[7]=F,i[8]=D,i[9]=l,i[10]=h,i[11]=g,i[12]=f,i[13]=e,i[14]=c,i[15]=d}function x(b,a){w(b,a,a)}function ad(e,d){var a,c=b();for(a=0;a<16;a++)c[a]=d[a];for(a=253;a>=0;a--)x(c,c),2!==a&&4!==a&&w(c,c,d);for(a=0;a<16;a++)e[a]=c[a]}function y(e,d){var a,c=b();for(a=0;a<16;a++)c[a]=d[a];for(a=250;a>=0;a--)x(c,c),1!==a&&w(c,c,d);for(a=0;a<16;a++)e[a]=c[a]}function z(o,n,p){var i,a,j=new Uint8Array(32),g=new Float64Array(80),c=b(),f=b(),d=b(),e=b(),h=b(),k=b();for(a=0;a<31;a++)j[a]=n[a];for(j[31]=127&n[31]|64,j[0]&=248,t(g,p),a=0;a<16;a++)f[a]=g[a],e[a]=c[a]=d[a]=0;for(a=254,c[0]=e[0]=1;a>=0;--a)aa(c,f,i=j[a>>>3]>>>(7&a)&1),aa(d,e,i),u(h,c,d),v(c,c,d),u(d,f,e),v(f,f,e),x(e,h),x(k,c),w(c,d,c),w(d,f,h),u(h,c,d),v(c,c,d),x(f,c),v(d,e,k),w(c,d,S),u(c,c,e),w(d,d,c),w(c,e,k),w(e,f,g),x(f,h),aa(c,f,i),aa(d,e,i);for(a=0;a<16;a++)g[a+16]=c[a],g[a+32]=d[a],g[a+48]=f[a],g[a+64]=e[a];var l=g.subarray(32),m=g.subarray(16);return ad(l,l),w(m,m,l),s(o,m),0}function A(a,b){return z(a,b,g)}function B(b,a){return O(a,32),A(b,a)}function C(b,c,d){var a=new Uint8Array(32);return z(a,d,c),k(b,P,a,$)}d.prototype.blocks=function(e,c,O){for(var P,I,J,K,H,L,M,N,a,b,d,f,g,h,i,j,k,l,m,Q=this.fin?0:2048,n=this.h[0],o=this.h[1],p=this.h[2],q=this.h[3],r=this.h[4],s=this.h[5],t=this.h[6],u=this.h[7],v=this.h[8],w=this.h[9],x=this.r[0],y=this.r[1],z=this.r[2],A=this.r[3],B=this.r[4],C=this.r[5],D=this.r[6],E=this.r[7],F=this.r[8],G=this.r[9];O>=16;)n+=8191&(P=255&e[c+0]|(255&e[c+1])<<8),I=255&e[c+2]|(255&e[c+3])<<8,o+=(P>>>13|I<<3)&8191,J=255&e[c+4]|(255&e[c+5])<<8,p+=(I>>>10|J<<6)&8191,K=255&e[c+6]|(255&e[c+7])<<8,q+=(J>>>7|K<<9)&8191,H=255&e[c+8]|(255&e[c+9])<<8,r+=(K>>>4|H<<12)&8191,s+=H>>>1&8191,L=255&e[c+10]|(255&e[c+11])<<8,t+=(H>>>14|L<<2)&8191,M=255&e[c+12]|(255&e[c+13])<<8,u+=(L>>>11|M<<5)&8191,N=255&e[c+14]|(255&e[c+15])<<8,v+=(M>>>8|N<<8)&8191,w+=N>>>5|Q,a=0,b=a,b+=n*x,b+=o*(5*G),b+=p*(5*F),b+=q*(5*E),b+=r*(5*D),a=b>>>13,b&=8191,b+=s*(5*C),b+=t*(5*B),b+=u*(5*A),b+=v*(5*z),b+=w*(5*y),a+=b>>>13,b&=8191,d=a,d+=n*y,d+=o*x,d+=p*(5*G),d+=q*(5*F),d+=r*(5*E),a=d>>>13,d&=8191,d+=s*(5*D),d+=t*(5*C),d+=u*(5*B),d+=v*(5*A),d+=w*(5*z),a+=d>>>13,d&=8191,f=a,f+=n*z,f+=o*y,f+=p*x,f+=q*(5*G),f+=r*(5*F),a=f>>>13,f&=8191,f+=s*(5*E),f+=t*(5*D),f+=u*(5*C),f+=v*(5*B),f+=w*(5*A),a+=f>>>13,f&=8191,g=a,g+=n*A,g+=o*z,g+=p*y,g+=q*x,g+=r*(5*G),a=g>>>13,g&=8191,g+=s*(5*F),g+=t*(5*E),g+=u*(5*D),g+=v*(5*C),g+=w*(5*B),a+=g>>>13,g&=8191,h=a,h+=n*B,h+=o*A,h+=p*z,h+=q*y,h+=r*x,a=h>>>13,h&=8191,h+=s*(5*G),h+=t*(5*F),h+=u*(5*E),h+=v*(5*D),h+=w*(5*C),a+=h>>>13,h&=8191,i=a,i+=n*C,i+=o*B,i+=p*A,i+=q*z,i+=r*y,a=i>>>13,i&=8191,i+=s*x,i+=t*(5*G),i+=u*(5*F),i+=v*(5*E),i+=w*(5*D),a+=i>>>13,i&=8191,j=a,j+=n*D,j+=o*C,j+=p*B,j+=q*A,j+=r*z,a=j>>>13,j&=8191,j+=s*y,j+=t*x,j+=u*(5*G),j+=v*(5*F),j+=w*(5*E),a+=j>>>13,j&=8191,k=a,k+=n*E,k+=o*D,k+=p*C,k+=q*B,k+=r*A,a=k>>>13,k&=8191,k+=s*z,k+=t*y,k+=u*x,k+=v*(5*G),k+=w*(5*F),a+=k>>>13,k&=8191,l=a,l+=n*F,l+=o*E,l+=p*D,l+=q*C,l+=r*B,a=l>>>13,l&=8191,l+=s*A,l+=t*z,l+=u*y,l+=v*x,l+=w*(5*G),a+=l>>>13,l&=8191,m=a,m+=n*G,m+=o*F,m+=p*E,m+=q*D,m+=r*C,a=m>>>13,m&=8191,m+=s*B,m+=t*A,m+=u*z,m+=v*y,m+=w*x,a+=m>>>13,m&=8191,a=(a<<2)+a|0,a=a+b|0,b=8191&a,a>>>=13,d+=a,n=b,o=d,p=f,q=g,r=h,s=i,t=j,u=k,v=l,w=m,c+=16,O-=16;this.h[0]=n,this.h[1]=o,this.h[2]=p,this.h[3]=q,this.h[4]=r,this.h[5]=s,this.h[6]=t,this.h[7]=u,this.h[8]=v,this.h[9]=w},d.prototype.finish=function(b,c){var d,f,g,a,e=new Uint16Array(10);if(this.leftover){for(a=this.leftover,this.buffer[a++]=1;a<16;a++)this.buffer[a]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(d=this.h[1]>>>13,this.h[1]&=8191,a=2;a<10;a++)this.h[a]+=d,d=this.h[a]>>>13,this.h[a]&=8191;for(this.h[0]+=5*d,d=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=d,d=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=d,e[0]=this.h[0]+5,d=e[0]>>>13,e[0]&=8191,a=1;a<10;a++)e[a]=this.h[a]+d,d=e[a]>>>13,e[a]&=8191;for(e[9]-=8192,f=(1^d)-1,a=0;a<10;a++)e[a]&=f;for(a=0,f=~f;a<10;a++)this.h[a]=this.h[a]&f|e[a];for(a=1,this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,g=this.h[0]+this.pad[0],this.h[0]=65535&g;a<8;a++)g=(this.h[a]+this.pad[a]|0)+(g>>>16)|0,this.h[a]=65535&g;b[c+0]=this.h[0]>>>0&255,b[c+1]=this.h[0]>>>8&255,b[c+2]=this.h[1]>>>0&255,b[c+3]=this.h[1]>>>8&255,b[c+4]=this.h[2]>>>0&255,b[c+5]=this.h[2]>>>8&255,b[c+6]=this.h[3]>>>0&255,b[c+7]=this.h[3]>>>8&255,b[c+8]=this.h[4]>>>0&255,b[c+9]=this.h[4]>>>8&255,b[c+10]=this.h[5]>>>0&255,b[c+11]=this.h[5]>>>8&255,b[c+12]=this.h[6]>>>0&255,b[c+13]=this.h[6]>>>8&255,b[c+14]=this.h[7]>>>0&255,b[c+15]=this.h[7]>>>8&255},d.prototype.update=function(e,d,a){var b,c;if(this.leftover){for((c=16-this.leftover)>a&&(c=a),b=0;b<c;b++)this.buffer[this.leftover+b]=e[d+b];if(a-=c,d+=c,this.leftover+=c,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(a>=16&&(c=a-a%16,this.blocks(e,d,c),d+=c,a-=c),a){for(b=0;b<a;b++)this.buffer[this.leftover+b]=e[d+b];this.leftover+=a}};var D=e,ae=f,af=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function ag(g,h,q,H){for(var K,L,M,D,N,O,P,I,Q,R,S,E,T,U,V,J,j,k,l,i,a,b,e,c,d,f,r=new Int32Array(16),s=new Int32Array(16),m=g[0],t=g[1],u=g[2],F=g[3],n=g[4],x=g[5],y=g[6],z=g[7],o=h[0],v=h[1],w=h[2],G=h[3],p=h[4],A=h[5],B=h[6],C=h[7],W=0;H>=128;){for(l=0;l<16;l++)i=8*l+W,r[l]=q[i+0]<<24|q[i+1]<<16|q[i+2]<<8|q[i+3],s[l]=q[i+4]<<24|q[i+5]<<16|q[i+6]<<8|q[i+7];for(l=0;l<80;l++)if(K=m,L=t,M=u,D=F,N=n,O=x,P=y,I=z,Q=o,R=v,S=w,E=G,T=p,U=A,V=B,J=C,a=z,e=65535&(b=C),c=b>>>16,d=65535&a,f=a>>>16,a=(n>>>14|p<<18)^(n>>>18|p<<14)^(p>>>9|n<<23),b=(p>>>14|n<<18)^(p>>>18|n<<14)^(n>>>9|p<<23),e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,a=n&x^ ~n&y,b=p&A^ ~p&B,e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,a=af[2*l],b=af[2*l+1],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,a=r[l%16],b=s[l%16],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,j=65535&d|f<<16,k=65535&e|c<<16,a=j,b=k,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=(m>>>28|o<<4)^(o>>>2|m<<30)^(o>>>7|m<<25),b=(o>>>28|m<<4)^(m>>>2|o<<30)^(m>>>7|o<<25),e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,a=m&t^m&u^t&u,b=o&v^o&w^v&w,e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,I=65535&d|f<<16,J=65535&e|c<<16,a=D,b=E,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=j,b=k,e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,D=65535&d|f<<16,E=65535&e|c<<16,t=K,u=L,F=M,n=D,x=N,y=O,z=P,m=I,v=Q,w=R,G=S,p=E,A=T,B=U,C=V,o=J,l%16==15)for(i=0;i<16;i++)a=r[i],b=s[i],e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=r[(i+9)%16],b=s[(i+9)%16],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,j=r[(i+1)%16],k=s[(i+1)%16],a=(j>>>1|k<<31)^(j>>>8|k<<24)^j>>>7,b=(k>>>1|j<<31)^(k>>>8|j<<24)^(k>>>7|j<<25),e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,j=r[(i+14)%16],k=s[(i+14)%16],a=(j>>>19|k<<13)^(k>>>29|j<<3)^j>>>6,b=(k>>>19|j<<13)^(j>>>29|k<<3)^(k>>>6|j<<26),e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,r[i]=65535&d|f<<16,s[i]=65535&e|c<<16;a=m,e=65535&(b=o),c=b>>>16,d=65535&a,f=a>>>16,a=g[0],b=h[0],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[0]=m=65535&d|f<<16,h[0]=o=65535&e|c<<16,a=t,b=v,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[1],b=h[1],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[1]=t=65535&d|f<<16,h[1]=v=65535&e|c<<16,a=u,b=w,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[2],b=h[2],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[2]=u=65535&d|f<<16,h[2]=w=65535&e|c<<16,a=F,b=G,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[3],b=h[3],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[3]=F=65535&d|f<<16,h[3]=G=65535&e|c<<16,a=n,b=p,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[4],b=h[4],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[4]=n=65535&d|f<<16,h[4]=p=65535&e|c<<16,a=x,b=A,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[5],b=h[5],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[5]=x=65535&d|f<<16,h[5]=A=65535&e|c<<16,a=y,b=B,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[6],b=h[6],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[6]=y=65535&d|f<<16,h[6]=B=65535&e|c<<16,a=z,b=C,e=65535&b,c=b>>>16,d=65535&a,f=a>>>16,a=g[7],b=h[7],e+=65535&b,c+=b>>>16,d+=65535&a,f+=a>>>16,c+=e>>>16,d+=c>>>16,f+=d>>>16,g[7]=z=65535&d|f<<16,h[7]=C=65535&e|c<<16,W+=128,H-=128}return H}function E(h,g,d){var a,b=new Int32Array(8),c=new Int32Array(8),e=new Uint8Array(256),f=d;for(b[0]=1779033703,b[1]=3144134277,b[2]=1013904242,b[3]=2773480762,b[4]=1359893119,b[5]=2600822924,b[6]=528734635,b[7]=1541459225,c[0]=4089235720,c[1]=2227873595,c[2]=4271175723,c[3]=1595750129,c[4]=2917565137,c[5]=725511199,c[6]=4215389547,c[7]=327033209,ag(b,c,g,d),d%=128,a=0;a<d;a++)e[a]=g[f-d+a];for(e[d]=128,e[(d=256-128*(d<112?1:0))-9]=0,X(e,d-8,f/536870912|0,f<<3),ag(b,c,e,d),a=0;a<8;a++)X(h,8*a,b[a],c[a]);return 0}function F(a,c){var e=b(),f=b(),g=b(),d=b(),i=b(),j=b(),k=b(),l=b(),h=b();v(e,a[1],a[0]),v(h,c[1],c[0]),w(e,e,h),u(f,a[0],a[1]),u(h,c[0],c[1]),w(f,f,h),w(g,a[3],c[3]),w(g,g,T),w(d,a[2],c[2]),u(d,d,d),v(i,f,e),v(j,d,g),u(k,d,g),u(l,f,e),w(a[0],i,j),w(a[1],l,k),w(a[2],k,j),w(a[3],i,l)}function ah(b,c,d){var a;for(a=0;a<4;a++)aa(b[a],c[a],d)}function G(d,a){var e=b(),f=b(),c=b();ad(c,a[2]),w(e,a[0],c),w(f,a[1],c),s(d,f),d[31]^=ac(e)<<7}function H(a,c,e){var d,b;for(r(a[0],Q),r(a[1],R),r(a[2],R),r(a[3],Q),b=255;b>=0;--b)ah(a,c,d=e[b/8|0]>>(7&b)&1),F(c,a),F(a,a),ah(a,c,d)}function I(c,d){var a=[b(),b(),b(),b()];r(a[0],U),r(a[1],V),r(a[2],R),w(a[3],U,V),H(c,a,d)}function J(e,d,g){var a,c=new Uint8Array(64),f=[b(),b(),b(),b()];for(g||O(d,32),E(c,d,32),c[0]&=248,c[31]&=127,c[31]|=64,I(f,c),G(e,f),a=0;a<32;a++)d[a+32]=e[a];return 0}var K=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function L(f,c){var d,b,a,e;for(b=63;b>=32;--b){for(d=0,a=b-32,e=b-12;a<e;++a)c[a]+=d-16*c[b]*K[a-(b-32)],d=Math.floor((c[a]+128)/256),c[a]-=256*d;c[a]+=d,c[b]=0}for(a=0,d=0;a<32;a++)c[a]+=d-(c[31]>>4)*K[a],d=c[a]>>8,c[a]&=255;for(a=0;a<32;a++)c[a]-=d*K[a];for(b=0;b<32;b++)c[b+1]+=c[b]>>8,f[b]=255&c[b]}function ai(b){var a,c=new Float64Array(64);for(a=0;a<64;a++)c[a]=b[a];for(a=0;a<64;a++)b[a]=0;L(b,c)}function M(c,l,f,j){var a,e,d=new Uint8Array(64),i=new Uint8Array(64),g=new Uint8Array(64),h=new Float64Array(64),k=[b(),b(),b(),b()];for(E(d,j,32),d[0]&=248,d[31]&=127,d[31]|=64,a=0;a<f;a++)c[64+a]=l[a];for(a=0;a<32;a++)c[32+a]=d[32+a];for(E(g,c.subarray(32),f+32),ai(g),I(k,g),G(c,k),a=32;a<64;a++)c[a]=j[a];for(E(i,c,f+64),ai(i),a=0;a<64;a++)h[a]=0;for(a=0;a<32;a++)h[a]=g[a];for(a=0;a<32;a++)for(e=0;e<32;e++)h[a+e]+=i[a]*d[e];return L(c.subarray(32),h),f+64}function N(k,l,i,A){var c,o,d,f,g,e,m,p,q,a,B=new Uint8Array(32),s=new Uint8Array(64),z=[b(),b(),b(),b()],n=[b(),b(),b(),b()];if(i<64)return -1;if(c=n,o=A,d=b(),f=b(),g=b(),e=b(),m=b(),p=b(),q=b(),(r(c[2],R),t(c[1],o),x(g,c[1]),w(e,g,h),v(g,g,c[2]),u(e,c[2],e),x(m,e),x(p,m),w(q,p,m),w(d,q,g),w(d,d,e),y(d,d),w(d,d,g),w(d,d,e),w(d,d,e),w(c[0],d,e),x(f,c[0]),w(f,f,e),ab(f,g)&&w(c[0],c[0],W),x(f,c[0]),w(f,f,e),ab(f,g))?-1:(ac(c[0])===o[31]>>7&&v(c[0],Q,c[0]),w(c[3],c[0],c[1]),0))return -1;for(a=0;a<i;a++)k[a]=l[a];for(a=0;a<32;a++)k[a+32]=A[a];if(E(s,k,i),ai(s),H(z,n,s),I(n,l.subarray(32)),F(z,n),G(B,z),i-=64,j(l,0,B,0)){for(a=0;a<i;a++)k[a]=0;return -1}for(a=0;a<i;a++)k[a]=l[a+64];return i}function aj(a,b){if(32!==a.length)throw new Error("bad key size");if(24!==b.length)throw new Error("bad nonce size")}function ak(){for(var a=0;a<arguments.length;a++)if(!(arguments[a]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function al(b){for(var a=0;a<b.length;a++)b[a]=0}a.lowlevel={crypto_core_hsalsa20:k,crypto_stream_xor:o,crypto_stream:n,crypto_stream_salsa20_xor:l,crypto_stream_salsa20:m,crypto_onetimeauth:p,crypto_onetimeauth_verify:q,crypto_verify_16:i,crypto_verify_32:j,crypto_secretbox:e,crypto_secretbox_open:f,crypto_scalarmult:z,crypto_scalarmult_base:A,crypto_box_beforenm:C,crypto_box_afternm:D,crypto_box:function(b,c,d,e,f,g){var a=new Uint8Array(32);return C(a,f,g),D(b,c,d,e,a)},crypto_box_open:function(b,c,d,e,f,g){var a=new Uint8Array(32);return C(a,f,g),ae(b,c,d,e,a)},crypto_box_keypair:B,crypto_hash:E,crypto_sign:M,crypto_sign_keypair:J,crypto_sign_open:N,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:b,D:h,L:K,pack:G,pack25519:s,unpack25519:t,M:w,A:u,S:x,Z:v,pow2523:y,add:F,set25519:r,modL:L,scalarmult:H,scalarbase:I},a.randomBytes=function(a){var b=new Uint8Array(a);return O(b,a),b},a.secretbox=function(a,d,f){ak(a,d,f),aj(f,d);for(var b=new Uint8Array(32+a.length),g=new Uint8Array(b.length),c=0;c<a.length;c++)b[c+32]=a[c];return e(g,b,b.length,d,f),g.subarray(16)},a.secretbox.open=function(b,d,e){ak(b,d,e),aj(e,d);for(var a=new Uint8Array(16+b.length),g=new Uint8Array(a.length),c=0;c<b.length;c++)a[c+16]=b[c];return a.length<32?null:0!==f(g,a,a.length,d,e)?null:g.subarray(32)},a.secretbox.keyLength=32,a.secretbox.nonceLength=24,a.secretbox.overheadLength=16,a.scalarMult=function(a,b){if(ak(a,b),32!==a.length)throw new Error("bad n size");if(32!==b.length)throw new Error("bad p size");var c=new Uint8Array(32);return z(c,a,b),c},a.scalarMult.base=function(a){if(ak(a),32!==a.length)throw new Error("bad n size");var b=new Uint8Array(32);return A(b,a),b},a.scalarMult.scalarLength=32,a.scalarMult.groupElementLength=32,a.box=function(b,c,d,e){var f=a.box.before(d,e);return a.secretbox(b,c,f)},a.box.before=function(a,b){ak(a,b),function(a,b){if(32!==a.length)throw new Error("bad public key size");if(32!==b.length)throw new Error("bad secret key size")}(a,b);var c=new Uint8Array(32);return C(c,a,b),c},a.box.after=a.secretbox,a.box.open=function(b,c,d,e){var f=a.box.before(d,e);return a.secretbox.open(b,c,f)},a.box.open.after=a.secretbox.open,a.box.keyPair=function(){var a=new Uint8Array(32),b=new Uint8Array(32);return B(a,b),{publicKey:a,secretKey:b}},a.box.keyPair.fromSecretKey=function(a){if(ak(a),32!==a.length)throw new Error("bad secret key size");var b=new Uint8Array(32);return A(b,a),{publicKey:b,secretKey:new Uint8Array(a)}},a.box.publicKeyLength=32,a.box.secretKeyLength=32,a.box.sharedKeyLength=32,a.box.nonceLength=24,a.box.overheadLength=a.secretbox.overheadLength,a.sign=function(a,b){if(ak(a,b),64!==b.length)throw new Error("bad secret key size");var c=new Uint8Array(64+a.length);return M(c,a,a.length,b),c},a.sign.open=function(a,c){if(ak(a,c),32!==c.length)throw new Error("bad public key size");var e=new Uint8Array(a.length),f=N(e,a,a.length,c);if(f<0)return null;for(var d=new Uint8Array(f),b=0;b<d.length;b++)d[b]=e[b];return d},a.sign.detached=function(d,e){for(var f=a.sign(d,e),c=new Uint8Array(64),b=0;b<c.length;b++)c[b]=f[b];return c},a.sign.detached.verify=function(b,d,e){if(ak(b,d,e),64!==d.length)throw new Error("bad signature size");if(32!==e.length)throw new Error("bad public key size");var a,c=new Uint8Array(64+b.length),f=new Uint8Array(64+b.length);for(a=0;a<64;a++)c[a]=d[a];for(a=0;a<b.length;a++)c[a+64]=b[a];return N(f,c,c.length,e)>=0},a.sign.keyPair=function(){var a=new Uint8Array(32),b=new Uint8Array(64);return J(a,b),{publicKey:a,secretKey:b}},a.sign.keyPair.fromSecretKey=function(a){if(ak(a),64!==a.length)throw new Error("bad secret key size");for(var c=new Uint8Array(32),b=0;b<c.length;b++)c[b]=a[32+b];return{publicKey:c,secretKey:new Uint8Array(a)}},a.sign.keyPair.fromSeed=function(b){if(ak(b),32!==b.length)throw new Error("bad seed size");for(var d=new Uint8Array(32),c=new Uint8Array(64),a=0;a<32;a++)c[a]=b[a];return J(d,c,!0),{publicKey:d,secretKey:c}},a.sign.publicKeyLength=32,a.sign.secretKeyLength=64,a.sign.seedLength=32,a.sign.signatureLength=64,a.hash=function(a){ak(a);var b=new Uint8Array(64);return E(b,a,a.length),b},a.hash.hashLength=64,a.verify=function(a,b){return ak(a,b),0!==a.length&&0!==b.length&&a.length===b.length&&0===Y(a,0,b,0,a.length)},a.setPRNG=function(a){O=a},function(){var b="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(b&&b.getRandomValues){var d=65536;a.setPRNG(function(f,c){var a,e=new Uint8Array(c);for(a=0;a<c;a+=d)b.getRandomValues(e.subarray(a,a+Math.min(c-a,d)));for(a=0;a<c;a++)f[a]=e[a];al(e)})}else(b=c(78848))&&b.randomBytes&&a.setPRNG(function(e,c){var a,d=b.randomBytes(c);for(a=0;a<c;a++)e[a]=d[a];al(d)})}()}(a.exports?a.exports:self.nacl=self.nacl||{})}}])