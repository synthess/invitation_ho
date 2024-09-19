"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4243],{3069:function(e,t,n){n.d(t,{EK:function(){return ec},IO:function(){return tD},JU:function(){return th},PL:function(){return tQ},QT:function(){return tY},TQ:function(){return tM},Xo:function(){return tL},ad:function(){return ta},ar:function(){return tO},b9:function(){return t$},hJ:function(){return tc}});var r,i,s,a=n(25816),o=n(8463),l=n(53333),u=n(74444);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let h="9.23.0",d=new l.Yd("@firebase/firestore");function f(e,...t){if(d.logLevel<=l.in.DEBUG){let n=t.map(g);d.debug(`Firestore (${h}): ${e}`,...n)}}function p(e,...t){if(d.logLevel<=l.in.ERROR){let n=t.map(g);d.error(`Firestore (${h}): ${e}`,...n)}}function m(e,...t){if(d.logLevel<=l.in.WARN){let n=t.map(g);d.warn(`Firestore (${h}): ${e}`,...n)}}function g(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y(e="Unexpected state"){let t=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}function w(e,t){e||y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let v="unknown",_="invalid-argument",b="not-found",T="unauthenticated",S="failed-precondition",I="unimplemented";class E extends u.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class k{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.auth=null,e.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(w("string"==typeof e.accessToken),new A(e.accessToken,new c(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class F{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=c.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);let e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class P{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new F(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(e){this.l=e,this.appCheck=null,e.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(w("string"==typeof e.token),new D(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class q{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new q("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof q&&e.projectId===this.projectId&&e.database===this.database}}class x{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===x.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof x?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends x{construct(e,t,n){return new L(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new E(_,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new L(t)}static emptyPath(){return new L([])}}let C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends x{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new E(_,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new E(_,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new E(_,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new E(_,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(e){this.path=e}static fromPath(e){return new U(L.fromString(e))}static fromName(e){return new U(L.fromString(e).popFirst(5))}static empty(){return new U(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===L.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new L(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M(e,t,n){if(!n)throw new E(_,`Function ${e}() cannot be called with an empty ${t}.`)}function B(e){if(!U.isDocumentKey(e))throw new E(_,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function j(e){if(U.isDocumentKey(e))throw new E(_,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function z(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":y()}function K(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=z(e);throw new E(_,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Y=null;function Q(){return null===Y?Y=268435456+Math.round(2147483648*Math.random()):Y++,"0x"+Y.toString(16)}function J(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let X={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};function H(e){if(void 0===e)return p("RPC_ERROR","HTTP error has no status"),v;switch(e){case 200:return"ok";case 400:return S;case 401:return T;case 403:return"permission-denied";case 404:return b;case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return v;case 501:return I;case 503:return"unavailable";case 504:return"deadline-exceeded";default:return e>=200&&e<300?"ok":e>=400&&e<500?S:e>=500&&e<600?"internal":v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (s=i||(i={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";class W extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.m=t+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,t,n,r,i){let s=Q(),a=this.I(e,t);f("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.T(o,r,i),this.A(e,a,o,n).then(t=>(f("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw m("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}R(e,t,n,r,i,s){return this.v(e,t,n,r,i)}T(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+h,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}I(e,t){let n=X[e];return`${this.m}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.P=t}V(e,t){throw Error("Not supported by FetchConnection")}async A(e,t,n,r){var i;let s=JSON.stringify(r),a;try{a=await this.P(t,{method:"POST",headers:n,body:s})}catch(o){throw new E(H(o.status),"Request failed with error: "+o.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);let u=null===(i=null==l?void 0:l.error)||void 0===i?void 0:i.message;throw new E(H(a.status),`Request failed with error: ${null!=u?u:a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee{static N(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=Z(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function et(e,t){return e<t?-1:e>t?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function en(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function er(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ei extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ei("Invalid base64 string: "+t):t}}(e);return new es(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ea=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(w(!!e),"string"==typeof e){let t=0,n=ea.exec(e);if(w(!!n),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:el(e.seconds),nanos:el(e.nanos)}}function el(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eu(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new E(_,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new E(_,"Timestamp seconds out of range: "+e)}static now(){return ec.fromMillis(Date.now())}static fromDate(e){return ec.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new ec(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eh(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ed(e){let t=e.mapValue.fields.__previous_value__;return eh(t)?ed(t):t}function ef(e){let t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new ec(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ep={fields:{__type__:{stringValue:"__max__"}}};function em(e){var t;return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eh(e)?4:"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue?9007199254740991:10:y()}function eg(e,t){var n,r,i,s,a,o,l;if(e===t)return!0;let u=em(e);if(u!==em(t))return!1;switch(u){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ef(e).isEqual(ef(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eo(e.timestampValue),r=eo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eu(e.bytesValue).isEqual(eu(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return el(e.geoPointValue.latitude)===el(t.geoPointValue.latitude)&&el(e.geoPointValue.longitude)===el(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return el(e.integerValue)===el(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=el(e.doubleValue),r=el(t.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return a=e.arrayValue.values||[],o=t.arrayValue.values||[],a.length===o.length&&a.every((e,t)=>eg(e,o[t]));case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(en(n)!==en(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!eg(n[i],r[i])))return!1;return!0}(e,t);default:return y()}}function ey(e,t){return void 0!==(e.values||[]).find(e=>eg(e,t))}function ew(e,t){if(e===t)return 0;let n=em(e),r=em(t);if(n!==r)return et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=el(e.integerValue||e.doubleValue),r=el(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ev(e.timestampValue,t.timestampValue);case 4:return ev(ef(e),ef(t));case 5:return et(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eu(e),r=eu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=et(n[i],r[i]);if(0!==s)return s}return et(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=et(el(e.latitude),el(t.latitude));return 0!==n?n:et(el(e.longitude),el(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=ew(n[i],r[i]);if(s)return s}return et(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ep&&t===ep)return 0;if(e===ep)return 1;if(t===ep)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=et(r[a],s[a]);if(0!==o)return o;let l=ew(n[r[a]],i[s[a]]);if(0!==l)return l}return et(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function ev(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return et(e,t);let n=eo(e),r=eo(t),i=et(n.seconds,r.seconds);return 0!==i?i:et(n.nanos,r.nanos)}function e_(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eb(e){return!!e&&"arrayValue"in e}function eT(e){return!!e&&"nullValue"in e}function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eI(e){return!!e&&"mapValue"in e}function eE(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return er(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eE(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=eE(e.arrayValue.values[r]);return n}return Object.assign({},e)}class eA{constructor(e,t){this.position=e,this.inclusive=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eV{}class ek extends eV{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eF(e,t,n):"array-contains"===t?new eO(e,n):"in"===t?new eq(e,n):"not-in"===t?new ex(e,n):"array-contains-any"===t?new eL(e,n):new ek(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eP(e,n):new eD(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ew(t,this.value)):null!==t&&em(this.value)===em(t)&&this.matchesComparison(ew(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eN extends eV{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new eN(e,t)}matches(e){return"and"===this.op?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.D||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.F(e=>e.isInequality());return null!==e?e.field:null}F(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}class eF extends ek{constructor(e,t,n){super(e,t,n),this.key=U.fromName(n.referenceValue)}matches(e){let t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class eP extends ek{constructor(e,t){super(e,"in",t),this.keys=eR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eD extends ek{constructor(e,t){super(e,"not-in",t),this.keys=eR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eR(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>U.fromName(e.referenceValue))}class eO extends ek{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eb(t)&&ey(t.arrayValue,this.value)}}class eq extends ek{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ey(this.value.arrayValue,t)}}class ex extends ek{constructor(e,t){super(e,"not-in",t)}matches(e){if(ey(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ey(this.value.arrayValue,t)}}class eL extends ek{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eb(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ey(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e${constructor(e){this.timestamp=e}static fromTimestamp(e){return new e$(e)}static min(){return new e$(new ec(0,0))}static max(){return new e$(new ec(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class eU{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:eU.RED,this.left=null!=r?r:eU.EMPTY,this.right=null!=i?i:eU.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new eU(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return eU.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eU.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eU.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eU.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw y();let e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}eU.EMPTY=null,eU.RED=!0,eU.BLACK=!1,eU.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new eU(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eM{constructor(e){this.value=e}static empty(){return new eM({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eI(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eE(t)}setAll(e){let t=$.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eE(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eI(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eg(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eI(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(er(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eM(eE(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eB{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eB(e,0,e$.min(),e$.min(),e$.min(),eM.empty(),0)}static newFoundDocument(e,t,n,r){return new eB(e,1,t,e$.min(),n,r,0)}static newNoDocument(e,t){return new eB(e,2,t,e$.min(),e$.min(),eM.empty(),0)}static newUnknownDocument(e,t){return new eB(e,3,t,e$.min(),e$.min(),eM.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(e$.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eM.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eM.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=e$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eB&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eB(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ej{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.S=null}}function ez(e,t=null,n=[],r=[],i=null,s=null,a=null){return new ej(e,t,n,r,i,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eK{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.q=null,this.O=null,this.startAt,this.endAt}}function eG(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function eY(e){for(let t of e.filters){let n=t.getFirstInequalityField();if(null!==n)return n}return null}function eQ(e){return null!==e.collectionGroup}function eJ(e){var t;let n=e;if(null===n.q){n.q=[];let r=eY(n),i=eG(n);if(null!==r&&null===i)r.isKeyField()||n.q.push(new eC(r)),n.q.push(new eC($.keyField(),"asc"));else{let s=!1;for(let a of n.explicitOrderBy)n.q.push(a),a.field.isKeyField()&&(s=!0);if(!s){let o=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n.q.push(new eC($.keyField(),o))}}}return n.q}function eX(e,t){t.getFirstInequalityField(),eY(e);let n=e.filters.concat([t]);return new eK(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eH={asc:"ASCENDING",desc:"DESCENDING"},eW={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eZ={and:"AND",or:"OR"};class e0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function e1(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function e4(e){return w(!!e),e$.fromTimestamp(function(e){let t=eo(e);return new ec(t.seconds,t.nanos)}(e))}function e9(e,t){var n;return new L(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function e3(e,t){let n=function(e){let t=L.fromString(e);return w(e5(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new E(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new U((w(n.length>4&&"documents"===n.get(4)),n.popFirst(5)))}function e2(e,t){return e9(e.databaseId,t)}function e6(e){return{fieldPath:e.canonicalString()}}function e5(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e8(e){return new e0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e7 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.J=!1}X(){if(this.J)throw new E(S,"The client has already been terminated.")}v(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.v(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(v,e.toString())})}R(e,t,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(v,e.toString())})}terminate(){this.J=!0}}async function te(e,t){var n,r;let i=(r=e.serializer,new L(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()+"/documents"),s={documents:t.map(t=>{var n,r;return e9((n=e.serializer).databaseId,t.path)})},a=await e.R("BatchGetDocuments",i,s,t.length),o=new Map;a.forEach(t=>{var n,r;let i=(n=e.serializer,"found"in t?function(e,t){w(!!t.found),t.found.name,t.found.updateTime;let n=e3(e,t.found.name),r=e4(t.found.updateTime),i=t.found.createTime?e4(t.found.createTime):e$.min(),s=new eM({mapValue:{fields:t.found.fields}});return eB.newFoundDocument(n,r,i,s)}(n,t):"missing"in t?function(e,t){w(!!t.missing),w(!!t.readTime);let n=e3(e,t.missing),r=e4(t.readTime);return eB.newNoDocument(n,r)}(n,t):y());o.set(i.key.toString(),i)});let l=[];return t.forEach(e=>{let t=o.get(e.toString());w(!!t),l.push(t)}),l}async function tt(e,t){var n;let r=function(e,t){var n,r,i,s,a;let o={structuredQuery:{}},l=t.path;null!==t.collectionGroup?(o.parent=e2(e,l),o.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o.parent=e2(e,l.popLast()),o.structuredQuery.from=[{collectionId:l.lastSegment()}]);let u=function(e){if(0!==e.length)return function e(t){return t instanceof ek?function(e){var t;if("=="===e.op){if(eS(e.value))return{unaryFilter:{field:e6(e.field),op:"IS_NAN"}};if(eT(e.value))return{unaryFilter:{field:e6(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eS(e.value))return{unaryFilter:{field:e6(e.field),op:"IS_NOT_NAN"}};if(eT(e.value))return{unaryFilter:{field:e6(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:e6(e.field),op:eW[t=e.op],value:e.value}}}(t):t instanceof eN?function(t){var n;let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:eZ[n=t.op],filters:r}}}(t):y()}(eN.create(e,"and"))}(t.filters);u&&(o.structuredQuery.where=u);let c=function(e){if(0!==e.length)return e.map(e=>{var t,n;return{field:e6(e.field),direction:(n=e.dir,eH[n])}})}(t.orderBy);c&&(o.structuredQuery.orderBy=c);let h=(i=t.limit,e.useProto3Json||null==i?i:{value:i});return null!==h&&(o.structuredQuery.limit=h),t.startAt&&(o.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(o.structuredQuery.endAt={before:!(a=t.endAt).inclusive,values:a.position}),o}(e.serializer,function(e){var t;let n=e;if(!n.O){if("F"===n.limitType)n.O=ez(n.path,n.collectionGroup,eJ(n),n.filters,n.limit,n.startAt,n.endAt);else{let r=[];for(let i of eJ(n)){let s="desc"===i.dir?"asc":"desc";r.push(new eC(i.field,s))}let a=n.endAt?new eA(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new eA(n.startAt.position,n.startAt.inclusive):null;n.O=ez(n.path,n.collectionGroup,r,n.filters,n.limit,a,o)}}return n.O}(t));return(await e.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(e=>!!e.document).map(t=>(function(e,t,n){let r=e3(e,t.name),i=e4(t.updateTime),s=t.createTime?e4(t.createTime):e$.min(),a=new eM({mapValue:{fields:t.fields}}),o=eB.newFoundDocument(r,i,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o})(e.serializer,t.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tn=new Map;function tr(e){var t,n,r,i,s,a,o,l,u;if(e._terminated)throw new E(S,"The client has already been terminated.");if(!tn.has(e)){f("ComponentProvider","Initializing Datastore");let c=(t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),s=new O(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,G(i.experimentalLongPollingOptions),i.useFetchStreams),new W(s,fetch.bind(null))),h=e8(e._databaseId),d=(a=e._authCredentials,o=e._appCheckCredentials,l=c,u=h,new e7(a,o,l,u));tn.set(e,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ return tn.get(e)}class ti{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(_,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(_,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}!function(e,t,n,r){if(!0===t&&!0===r)throw new E(_,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(_,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(_,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(_,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ts{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ti({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(S,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(S,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ti(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new P(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=tn.get(e);t&&(f("ComponentProvider","Removing Datastore"),tn.delete(e),t.terminate())}(this),Promise.resolve()}}function ta(e,t){let n="object"==typeof e?e:(0,a.Mq)(),r=(0,a.qX)(n,"firestore/lite").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let i=(0,u.P0)("firestore");i&&function(e,t,n,r={}){var i;let s=(e=K(e,ts))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let o,l;if("string"==typeof r.mockUserToken)o=r.mockUserToken,l=c.MOCK_USER;else{o=(0,u.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new E(_,"mockUserToken must contain 'sub' or 'user_id' field!");l=new c(h)}e._authCredentials=new k(new A(o,l))}}(r,...i)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new to(this.firestore,e,this._key)}}class tl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new tl(this.firestore,e,this._query)}}class tu extends tl{constructor(e,t,n){super(e,t,new eK(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new to(this.firestore,null,new U(e))}withConverter(e){return new tu(this.firestore,e,this._path)}}function tc(e,t,...n){if(e=(0,u.m9)(e),M("collection","path",t),e instanceof ts){let r=L.fromString(t,...n);return j(r),new tu(e,null,r)}{if(!(e instanceof to||e instanceof tu))throw new E(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(L.fromString(t,...n));return j(i),new tu(e.firestore,null,i)}}function th(e,t,...n){if(e=(0,u.m9)(e),1===arguments.length&&(t=ee.N()),M("doc","path",t),e instanceof ts){let r=L.fromString(t,...n);return B(r),new to(e,null,new U(r))}{if(!(e instanceof to||e instanceof tu))throw new E(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(L.fromString(t,...n));return B(i),new to(e.firestore,e instanceof tu?e.converter:null,new U(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class td{constructor(e){this._byteString=e}static fromBase64String(e){try{return new td(es.fromBase64String(e))}catch(t){throw new E(_,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new td(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(_,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(_,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(_,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tg=/^__.*__$/;function ty(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class tw{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.tt(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new tw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,st:!1});return r.it(e),r}ot(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,st:!1});return r.tt(),r}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return tE(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(0===e.length)throw this.ct("Document fields must not be empty");if(ty(this.et)&&tg.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class tv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||e8(e)}ft(e,t,n,r=!1){return new tw({et:e,methodName:t,lt:n,path:$.emptyPath(),st:!1,ht:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t_(e){let t=e._freezeSettings(),n=e8(e._databaseId);return new tv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function tb(e,t,n,r=!1){return tT(n,e.ft(r?4:3,t))}function tT(e,t){if(tS(e=(0,u.m9)(e)))return function(e,t,n){var r;if(!tS(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let i=z(n);throw"an object"===i?t.ct(e+" a custom object"):t.ct(e+" "+i)}}("Unsupported field value:",t,e),function(e,t){let n={};return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):er(e,(e,r)=>{let i=tT(r,t.rt(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}(e,t);if(e instanceof tp)return function(e,t){if(!ty(t.et))throw t.ct(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ct(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.st&&4!==t.et)throw t.ct("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=tT(i,t.ut(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i,s,a,o;if(null===(e=(0,u.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!J(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?{integerValue:""+(s=r)}:function(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(t)?"-0":t}}(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let l=ec.fromDate(e);return{timestampValue:e1(t.serializer,l)}}if(e instanceof ec){let c=new ec(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:e1(t.serializer,c)}}if(e instanceof tm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof td)return{bytesValue:(a=t.serializer,o=e._byteString,a.useProto3Json?o.toBase64():o.toUint8Array())};if(e instanceof to){let h=t.databaseId,d=e.firestore._databaseId;if(!d.isEqual(h))throw t.ct(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:e9(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ct(`Unsupported field value: ${z(e)}`)}(e,t)}function tS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ec||e instanceof tm||e instanceof td||e instanceof to||e instanceof tp)}let tI=RegExp("[~\\*/\\[\\]]");function tE(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new E(_,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tA{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new to(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new tV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(tN("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class tV extends tA{data(){return super.data()}}class tk{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function tN(e,t){return"string"==typeof t?function(e,t,n){if(t.search(tI)>=0)throw tE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new tf(...t.split("."))._internalPath}catch(r){throw tE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}(e,t):t instanceof tf?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tF{}class tP extends tF{}function tD(e,t,...n){let r=[];for(let i of(t instanceof tF&&r.push(t),function(e){let t=e.filter(e=>e instanceof tq).length,n=e.filter(e=>e instanceof tR).length;if(t>1||t>0&&n>0)throw new E(_,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class tR extends tP{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new tR(e,t,n)}_apply(e){let t=this._parse(e);return tz(e._query,t),new tl(e.firestore,e.converter,eX(e._query,t))}_parse(e){let t=t_(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(_,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){tj(a,s);let l=[];for(let u of a)l.push(tB(r,e,u));o={arrayValue:{values:l}}}else o=tB(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||tj(a,s),o=tb(n,t,a,"in"===s||"not-in"===s);return ek.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function tO(e,t,n){let r=tN("where",e);return tR._create(r,t,n)}class tq extends tF{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tq(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eN.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let i of r)tz(n,i),n=eX(n,i)}(e._query,t),new tl(e.firestore,e.converter,eX(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class tx extends tP{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tx(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new E(_,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(_,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new eC(t,n);return function(e,t){if(null===eG(e)){let n=eY(e);null!==n&&tK(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new tl(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new eK(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function tL(e,t="asc"){let n=tN("orderBy",e);return tx._create(n,t)}class tC extends tP{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new tC(e,t,n)}_apply(e){var t,n,r;return new tl(e.firestore,e.converter,(t=e._query,n=this._limit,r=this._limitType,new eK(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,r,t.startAt,t.endAt)))}}function t$(e){return function(e,t){if(t<=0)throw new E(_,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),tC._create("limit",e,"F")}class tU extends tP{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new tU(e,t,n)}_apply(e){var t,n;let r=function(e,t,n,r){if(n[0]=(0,u.m9)(n[0]),n[0]instanceof tA)return function(e,t,n,r,i){if(!r)throw new E(b,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let a of eJ(e))if(a.field.isKeyField())s.push(e_(t,r.key));else{let o=r.data.field(a.field);if(eh(o))throw new E(_,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===o){let l=a.field.canonicalString();throw new E(_,`Invalid query. You are trying to start or end a query using a document for which the field '${l}' (used as the orderBy) does not exist.`)}s.push(o)}return new eA(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=t_(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new E(_,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let l=0;l<i.length;l++){let u=i[l];if(a[l].field.isKeyField()){if("string"!=typeof u)throw new E(_,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!eQ(e)&&-1!==u.indexOf("/"))throw new E(_,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);let c=e.path.child(L.fromString(u));if(!U.isDocumentKey(c))throw new E(_,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${c}' is not because it contains an odd number of segments.`);let h=new U(c);o.push(e_(t,h))}else{let d=tb(n,r,u);o.push(d)}}return new eA(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}(e,this.type,this._docOrFields,this._inclusive);return new tl(e.firestore,e.converter,(t=e._query,new eK(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt)))}}function tM(...e){return tU._create("startAfter",e,!1)}function tB(e,t,n){if("string"==typeof(n=(0,u.m9)(n))){if(""===n)throw new E(_,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eQ(t)&&-1!==n.indexOf("/"))throw new E(_,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(L.fromString(n));if(!U.isDocumentKey(r))throw new E(_,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e_(e,new U(r))}if(n instanceof to)return e_(e,n._key);throw new E(_,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${z(n)}.`)}function tj(e,t){if(!Array.isArray(e)||0===e.length)throw new E(_,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function tz(e,t){if(t.isInequality()){let n=eY(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new E(_,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=eG(e);null!==i&&tK(e,r,i)}let s=function(e,t){for(let n of e)for(let r of n.getFlattenedFilters())if(t.indexOf(r.op)>=0)return r.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==s)throw s===t.op?new E(_,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_,`Invalid query. You cannot use '${t.op.toString()}' filters with '${s.toString()}' filters.`)}function tK(e,t,n){if(!n.isEqual(t))throw new E(_,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class tG extends class{convertValue(e,t="none"){switch(em(e)){case 0:return null;case 1:return e.booleanValue;case 2:return el(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return er(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new tm(el(e.latitude),el(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ed(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ef(e));default:return null}}convertTimestamp(e){let t=eo(e);return new ec(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=L.fromString(e);w(e5(n));let r=new q(n.get(1),n.get(3)),i=new U(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new td(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new to(this.firestore,null,t)}}function tY(e){let t=tr((e=K(e,to)).firestore),n=new tG(e.firestore);return te(t,[e._key]).then(t=>{w(1===t.length);let r=t[0];return new tA(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)})}function tQ(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(I,"limitToLast() queries require specifying at least one orderBy() clause")}((e=K(e,tl))._query);let t=tr(e.firestore),n=new tG(e.firestore);return tt(t,e._query).then(t=>{let r=t.map(t=>new tV(e.firestore,n,t.key,t,e.converter));return"L"===e._query.limitType&&r.reverse(),new tk(e,r)})}h=`${a.Jn}_lite`,(0,a.Xd)(new o.wA("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{let r=e.getProvider("app").getImmediate(),i=new ts(new N(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(_,'"projectId" not provided in firebase.initializeApp.');return new q(e.options.projectId,t)}(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,a.KN)("firestore-lite","3.13.0",""),(0,a.KN)("firestore-lite","3.13.0","esm2017")}}]);