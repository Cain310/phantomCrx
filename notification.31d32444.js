(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var n=i[e];delete i[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},t.parcelRequirea886=o),o.register("2uRZU",(function(t,r){n(t.exports,"BlocklistConnectRequest",(function(){return W}),(function(e){return W=e})),n(t.exports,"BlocklistOrigin",(function(){return j}),(function(e){return j=e}));var i=o("cuInp"),a=o("1vgyn"),l=o("yrqZm"),c=o("5BN27"),u=o("gVpKh"),s=o("jcs3P"),d=o("ivCTy"),f=o("1Jwz2"),p=o("lP5so"),g=o("kb4iW"),m=o("dfTp4"),b=o("hZbar"),x=o("kJkjp"),h=o("226dB"),v=o("8fnAG"),T=o("gXPCw");function y(){var e=i.taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return y=function(){return e},e}function E(){var e=i.taggedTemplateLiteral(["\n  border: 1px solid ",";\n  border-radius: 8px;\n  padding: 10px 10px;\n  margin-bottom: 10px;\n"]);return E=function(){return e},e}function w(){var e=i.taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fae5e6;\n"]);return w=function(){return e},e}function k(){var e=i.taggedTemplateLiteral(["\n  position: absolute;\n  width: 760px;\n  height: 603px;\n  left: calc(50% - 760px / 2 + 0.5px);\n  top: calc(50% - 603px / 2);\n  border: 2px solid ",";\n  box-sizing: border-box;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n  padding-right: 20px;\n"]);return k=function(){return e},e}function O(){var e=i.taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]);return O=function(){return e},e}function C(){var e=i.taggedTemplateLiteral(["\n  text-decoration: underline;\n  color: ",";\n"]);return C=function(){return e},e}var I,L,B,S,_,U,A=function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((r=r.apply(e,n||[])).next())}))},N="#eb3742",P=c.default.div(I||(I=y())),D=c.default.div(L||(L=E()),N),W=function(n){var t=n.tabId,r=n.origin,i=n.confirmApproval,o=n.denyApproval,a=u.useTranslation().t;return e(l).createElement(T.Container,null,e(l).createElement(d.AccountHeader,{lastChild:e(l).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(l).createElement(T.Body,null,e(l).createElement(T.TopGroup,null,e(l).createElement(f.TabIconHeader,{tabId:t,secondaryText:s.removeWebPrefixes(r),showWarning:!0})),e(l).createElement(P,null,e(l).createElement(D,null,e(l).createElement(g.Text,{size:14,color:N},a("blocklistConnectionDisabled"))),e(l).createElement(g.Text,{size:14,color:"#777777",hoverColor:N,onClick:function(){return i(r)}},a("blocklistConnectionIgnoreWarning")))),e(l).createElement(T.Footer,{plain:!0},e(l).createElement(p.Button,{onClick:function(){return o(r)}},a("blocklistConnectionActionButtonClose"))))},H=c.default.div(B||(B=w())),K=c.default.div(S||(S=k()),N),M=c.default.div(_||(_=O())),R=c.default.a(U||(U=C()),N),j=function(n){var t=n.origin,r=u.useTranslation().t,o=t?x.removeSubdomainFromDomain(t):"";return e(l).createElement(H,null,e(l).createElement(K,null,e(l).createElement(M,null,e(l).createElement(m.LogoPhishingDetected,null)),e(l).createElement(g.Text,{size:30,color:N,weight:"600"},r("blocklistOriginDomainIsBlocked",{domainName:o||r("blocklistOriginThisDomain")})),e(l).createElement(g.Text,{color:N},r("blocklistOriginSiteIsMalicious")),e(l).createElement(g.Text,{color:N},e(l).createElement(u.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(l).createElement(R,{href:b.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(l).createElement(R,{href:b.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),o?e(l).createElement(g.Text,{color:N,onClick:function(){return A(void 0,void 0,void 0,e(a).mark((function n(){var r,l;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getStorageValue(h.StorageKeys.UserWhitelistedOrigins);case 2:r=e.sent,(l=JSON.parse("".concat(r)))?l.push(o):l=[o],l=i.toConsumableArray(new Set(l)),v.setStorageValue(h.StorageKeys.UserWhitelistedOrigins,JSON.stringify(l)),window.location.href=t;case 8:case"end":return e.stop()}}),n)})))},hoverUnderline:!0},r("blocklistOriginIgnoreWarning",{domainName:o})):e(l).createElement(e(l).Fragment,null)))}}))}();define=__define;})(window.define);