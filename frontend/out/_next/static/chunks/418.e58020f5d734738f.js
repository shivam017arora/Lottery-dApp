(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{33946:function(e,b,a){"use strict";a.r(b),a.d(b,{getED25519Key:function(){return h}});var c=a(50108),d=a.n(c),f=a(48764).Buffer;const g=d().lowlevel;function h(c){let h;h="string"==typeof c?f.from(c,"hex"):c;const a=new Uint8Array(64),i=[g.gf(),g.gf(),g.gf(),g.gf()],d=new Uint8Array([...new Uint8Array(h),...new Uint8Array(32)]),e=new Uint8Array(32);g.crypto_hash(a,d,32),a[0]&=248,a[31]&=127,a[31]|=64,g.scalarbase(i,a),g.pack(e,i);for(let b=0;b<32;b+=1)d[b+32]=e[b];return{sk:f.from(d),pk:f.from(e)}}},78848:function(){}}])