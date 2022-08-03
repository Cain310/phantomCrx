(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequirea886;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},t.parcelRequirea886=i),i.register("1eJXt",(function(t,r){n(t.exports,"BlocklistConnectRequest",(function(){return H}),(function(e){return H=e})),n(t.exports,"BlocklistOrigin",(function(){return J}),(function(e){return J=e}));var o=i("cuInp"),a=i("1vgyn"),l=i("yrqZm"),c=i("5BN27"),u=i("eNGT7"),s=i("jcs3P"),d=i("jj9QT"),f=i("5oDS0"),p=i("6AaHU"),g=i("7Z3sw"),m=i("3u496"),x=i("hZbar"),b=i("kJkjp"),h=i("226dB"),v=i("8fnAG"),T=i("jJ2Ea");function y(){var e=o.taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return y=function(){return e},e}function E(){var e=o.taggedTemplateLiteral(["\n  border: 1px solid ",";\n  border-radius: 8px;\n  padding: 10px 10px;\n  margin-bottom: 10px;\n"]);return E=function(){return e},e}function w(){var e=o.taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fae5e6;\n"]);return w=function(){return e},e}function k(){var e=o.taggedTemplateLiteral(["\n  position: absolute;\n  width: 760px;\n  height: 603px;\n  left: calc(50% - 760px / 2 + 0.5px);\n  top: calc(50% - 603px / 2);\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-right: 20px;\n"]);return k=function(){return e},e}function O(){var e=o.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]);return O=function(){return e},e}function C(){var e=o.taggedTemplateLiteral(["\n  text-decoration: underline;\n  color: ",";\n"]);return C=function(){return e},e}var I,L,S,B,_,A,N=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))},U="#eb3742",D=c.default.div(I||(I=y())),j=c.default.div(L||(L=E()),U),H=function(n){var t=n.tabId,r=n.origin,o=n.confirmApproval,i=n.denyApproval,a=u.useTranslation().t;return e(l).createElement(T.Container,null,e(l).createElement(d.AccountHeader,{lastChild:e(l).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(l).createElement(T.Body,null,e(l).createElement(T.TopGroup,null,e(l).createElement(f.TabIconHeader,{tabId:t,secondaryText:s.removeWebPrefixes(r),showWarning:!0})),e(l).createElement(D,null,e(l).createElement(j,null,e(l).createElement(g.Text,{size:14,color:U},a("blocklistConnectionDisabled"))),e(l).createElement(g.Text,{size:14,color:"#777777",hoverColor:U,onClick:function(){return o(r)}},a("blocklistConnectionIgnoreWarning")))),e(l).createElement(T.Footer,{plain:!0},e(l).createElement(p.Button,{onClick:function(){return i(r)}},a("blocklistConnectionActionButtonClose"))))},P=c.default.div(S||(S=w())),M=c.default.div(B||(B=k()),U),W=c.default.div(_||(_=O())),G=c.default.a(A||(A=C()),U),J=function(n){var t=n.origin,r=u.useTranslation().t,i=t?b.removeSubdomainFromDomain(t):"";return e(l).createElement(P,null,e(l).createElement(M,null,e(l).createElement(W,null,e(l).createElement(m.LogoPhishingDetected,null)),e(l).createElement(g.Text,{size:30,color:U,weight:"600"},r("blocklistOriginDomainIsBlocked",{domainName:i||r("blocklistOriginThisDomain")})),e(l).createElement(g.Text,{color:U},r("blocklistOriginSiteIsMalicious")),e(l).createElement(g.Text,{color:U},e(l).createElement(u.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(l).createElement(G,{href:x.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(l).createElement(G,{href:x.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),i?e(l).createElement(g.Text,{color:U,onClick:function(){return N(void 0,void 0,void 0,e(a).mark((function n(){var r,l;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getStorageValue(h.StorageKeys.UserWhitelistedOrigins);case 2:r=e.sent,(l=JSON.parse("".concat(r)))?l.push(i):l=[i],l=o.toConsumableArray(new Set(l)),v.setStorageValue(h.StorageKeys.UserWhitelistedOrigins,JSON.stringify(l)),window.location.href=t;case 8:case"end":return e.stop()}}),n)})))},hoverUnderline:!0},r("blocklistOriginIgnoreWarning",{domainName:i})):e(l).createElement(e(l).Fragment,null)))}}))}();define=__define;})(window.define);