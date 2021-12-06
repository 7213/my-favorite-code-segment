"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[290],{9468:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],s={},o=void 0,u={unversionedId:"\u4e00\u79cdJS Parser\uff1aTDOP/\u4f5c\u7528\u57df\u548c\u8bed\u53e5",id:"\u4e00\u79cdJS Parser\uff1aTDOP/\u4f5c\u7528\u57df\u548c\u8bed\u53e5",isDocsHomePage:!1,title:"\u4f5c\u7528\u57df\u548c\u8bed\u53e5",description:"\u6709\u4e86\u7b2c\u4e00\u7bc7\u548c\u7b2c\u4e8c\u7bc7\u7684\u7406\u89e3\uff0c\u6211\u4eec\u56de\u5230Douglas Crockford JS\u7248\u672cTDOP\u7684\u5b9e\u73b0\uff0c\u628a\u8fd9\u4e00\u5207\u4e32\u8054\u8d77\u6765\u3002\u5b83\u89e3\u6790\u6807\u51c6\u7684JS\u6e90\u7801\uff0c\u5e76\u8f93\u51fa\u76f8\u5e94\u7684AST\uff0c\u5b83\u7684\u5165\u53e3parse\u5982\u4e0b\uff1a",source:"@site/docs/\u4e00\u79cdJS Parser\uff1aTDOP/03.\u4f5c\u7528\u57df\u548c\u8bed\u53e5.md",sourceDirName:"\u4e00\u79cdJS Parser\uff1aTDOP",slug:"/\u4e00\u79cdJS Parser\uff1aTDOP/\u4f5c\u7528\u57df\u548c\u8bed\u53e5",permalink:"/docs/\u4e00\u79cdJS Parser\uff1aTDOP/\u4f5c\u7528\u57df\u548c\u8bed\u53e5",editUrl:"https://github.com/7213/my-favorite-code-segment/tree/main/docs/docs/\u4e00\u79cdJS Parser\uff1aTDOP/03.\u4f5c\u7528\u57df\u548c\u8bed\u53e5.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7b26\u53f7\u4e0e\u8868\u8fbe\u5f0f",permalink:"/docs/\u4e00\u79cdJS Parser\uff1aTDOP/\u7b26\u53f7\u8868\u4e0e\u8868\u8fbe\u5f0f"},next:{title:"\u51fd\u6570",permalink:"/docs/\u6570\u5b66/\u51fd\u6570"}},p=[{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",children:[],level:3},{value:"\u8bed\u53e5",id:"\u8bed\u53e5",children:[],level:3},{value:"\u6269\u5c55\u9605\u8bfb",id:"\u6269\u5c55\u9605\u8bfb",children:[],level:2}],c={toc:p};function m(n){var e=n.components,t=(0,r.Z)(n,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6709\u4e86\u7b2c\u4e00\u7bc7\u548c\u7b2c\u4e8c\u7bc7\u7684\u7406\u89e3\uff0c\u6211\u4eec\u56de\u5230Douglas Crockford JS\u7248\u672cTDOP\u7684\u5b9e\u73b0\uff0c\u628a\u8fd9\u4e00\u5207\u4e32\u8054\u8d77\u6765\u3002",(0,l.kt)("br",null),"\u5b83\u89e3\u6790\u6807\u51c6\u7684JS\u6e90\u7801\uff0c\u5e76\u8f93\u51fa\u76f8\u5e94\u7684AST\uff0c\u5b83\u7684\u5165\u53e3parse\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function parse(source) {\n    tokens = source.tokens("=<>!+-*&|/%^", "=<>&|");\n    token_nr = 0;\n    scope = null;\n    new_scope();\n    advance();\n    var s = statements();\n    advance("(end)");\n    scope.pop();\n    return s;\n};\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u5c06\u6e90\u7801\u89e3\u6790\u4e3atokens"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u9876\u5c42\u4f5c\u7528\u57df"),(0,l.kt)("li",{parentName:"ul"},'\u89e3\u6790"JS\u8bed\u53e5"(statements)\u5f00\u59cb\u6784\u5efaAST'),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u6790\u503csymbol",(0,l.kt)("inlineCode",{parentName:"li"},'"(end)"'),"\u7ed3\u675f"),(0,l.kt)("li",{parentName:"ul"},"\u63a8\u51fa\u9876\u5c42\u4f5c\u7528\u57df"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56deAST(s)",(0,l.kt)("a",{name:"D73kX"}))),(0,l.kt)("h3",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e00\u4e2a\u9876\u5c42\u7a7a\u95f4\u6765\u5b58\u653e\u9876\u5c42\u58f0\u660e\u7684\u53d8\u91cf\u3002",(0,l.kt)("br",null),"\u4f5c\u7528\u57df\u672c\u8d28\u662f\u8bfb/\u5199\u53d8\u91cf\u7684\u4e00\u7247\u533a\u57df\uff0c\u5b83\u8d1f\u8d23\u5b58\u50a8\u53d8\u91cf\u5e76\u63a7\u5236\u7740\u53d8\u91cf\u7684\u53ef\u89c1\u6027\u3002",(0,l.kt)("br",null),"\u6bcf\u8fdb\u5165\u4e00\u4e2a\u8bed\u6cd5\u5b9a\u4e49\u7684\u4f5c\u7528\u57df\u5757\u5c31\u521b\u5efa\u4e00\u4e2a\u4f5c\u7528\u57df\u5bf9\u8c61\u5e76\u4e14\u5c06\u5f53\u524d\u4f5c\u7528\u57df\u4f5c\u4e3a\u81ea\u5df1\u7684\xa0\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\xa0\uff0c\u4ece\u800c\u5c06\u4f5c\u7528\u57df\u8fde\u6210\u4e00\u6761\u94fe\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"scope"),"\xa0\u7528\u6765\u6307\u5411\u5f53\u524d\u8fdb\u5165\u7684\u4f5c\u7528\u57df\u3002\u5b83\u7684\u539f\u578b\u5b9a\u4e49\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'var original_scope = {\n    define: function (n) { // \u5b9a\u4e49\u53d8\u91cf\n        var t = this.def[n.value];\n        if (typeof t === "object") {\n            n.error((t.reserved)\n                ? "Already reserved."\n                : "Already defined.");\n        }\n        this.def[n.value] = n;\n        n.reserved = false;\n        n.nud = itself;\n        n.led = null;\n        n.std = null;\n        n.lbp = 0;\n        n.scope = scope;\n        return n;\n    },\n    find: function (n) {  // \u67e5\u627e\u53d8\u91cf\n        var e = this;\n        var o;\n        while (true) {\n            o = e.def[n];\n            if (o && typeof o !== "function") {\n                return e.def[n];\n            }\n            e = e.parent;\n            if (!e) {\n                o = symbol_table[n];\n                return (o && typeof o !== "function")\n                    ? o\n                    : symbol_table["(name)"];\n            }\n        }\n    },\n    pop: function () {   // \u4ece\u5f53\u524d\u4f5c\u7528\u57df\u63a8\u51fa\n        scope = this.parent;\n    },\n    reserve: function (n) {  // \u4fdd\u8bc1\u53d8\u91cf\u5728\u5f53\u524d\u4f5c\u7528\u57df\u7684\u552f\u4e00\u6027\n        if (n.arity !== "name" || n.reserved) {\n            return;\n        }\n        var t = this.def[n.value];\n        if (t) {\n            if (t.reserved) {\n                return;\n            }\n            if (t.arity === "name") {\n                n.error("Already defined.");\n            }\n        }\n        this.def[n.value] = n;\n        n.reserved = true;\n    }\n};\n')),(0,l.kt)("br",null),"\u5f53\u89e3\u6790\u6e90\u7801\u65f6\u9047\u5230 `var` \u3001`function` \u3001 `class`\xa0 \u7b49symbol\u65f6\u7528define\u5728\u5f53\u524d\u4f5c\u7528\u57df\u5b9a\u4e49\u53d8\u91cf\uff1b\u5982\u679c\u662f\u4f5c\u4e3a**\u5de6\u53f3\u503c**\u7684\u53d8\u91cfsymbol\uff0c\u5c31\u4f7f\u7528 `find`\xa0\u6cbf\u7740\u4f5c\u7528\u57df\u94fe\u67e5\u627e\u6b64\u53d8\u91cf\u3002",(0,l.kt)("br",null),"\u5f53\u79bb\u5f00\u4f5c\u7528\u57df\u5757\u65f6\u5c31pop\u51fa\u6808\u5c06\u5f53\u524d\u4f5c\u7528\u57df\u6307\u56deparent",(0,l.kt)("br",null),(0,l.kt)("a",{name:"TmMmU"}),(0,l.kt)("h3",{id:"\u8bed\u53e5"},"\u8bed\u53e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"advance()"),"\xa0\u65b9\u6cd5\u83b7\u53d6\u7b2c\u4e00\u4e2atoken\u5f00\u542f\u89e3\u6790ast\u7684\u65c5\u7a0b\uff0c\u89e3\u6790\u7684\u6e90\u7801\u5fc5\u987b\u4ee5\u5b9a\u4e49\u7684\u201cJS\u8bed\u53e5\u201c\u7684\u8bcd\u6cd5\u5355\u5143\u5f00\u59cb\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'stmt("while", function () {}); // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3atoken\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u89e3\u6790\u65b9\u6cd5\nstmt("{", function () {});\nstmt("var", function () {});\nstmt("if", function () {});\nstmt("return", function () {});\nstmt("break", function () {});\n')),(0,l.kt)("br",null),"\u8fd9\u91cc\u6211\u4eec\u4ee5\u89e3\u6790\u4e0b\u5217\u6e90\u7801->ast\u8bf4\u660e\u6574\u4e2atdop\u7684\u6d41\u7a0b",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var needJump = false;\nvar topLimiit = 0;\nwhile(needJump) {\n    if (topLimiit > 99) {\n      needJump = true;\n        topLimiit += 1;\n  }\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u6e90\u7801\u5305\u542b3\u4e2aJS\u8bed\u53e5\u3002",(0,l.kt)("br",null),"1\uff09\u524d\u4e24\u884c\u7684\u89e3\u6790\u903b\u8f91\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'stmt("var", function () {\n  var a = [];\n  var n;\n  var t;\n  while (true) {\n    n = token;\n    if (n.arity !== "name") {\n      n.error("Expected a new variable name.");\n    }\n    scope.define(n);\n    advance();\n    if (token.id === "=") {\n      t = token;\n      advance("=");\n      t.first = n;\n      t.second = expression(0);\n      t.arity = "binary";\n      a.push(t);\n    }\n    if (token.id !== ",") {\n      break;\n    }\n    advance(",");\n  }\n  advance(";");\n  return (a.length === 0)\n    ? null\n  : (a.length === 1)\n    ? a[0]\n  : a;\n});\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c10\u884c\uff1a\u5728\u5f53\u524d\u4f5c\u7528\u57df\u5b9a\u4e49\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"12-19\u884c\uff1a\u89e3\u6790\u5f62\u5982var assignVal = 1; ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'\u89e3\u6790\u4e2d\u7f00\u4e3a"="symbol'),(0,l.kt)("li",{parentName:"ul"},'\u89e3\u6790\u5de6\u503c\u4e3a"needJump"'),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u53f3\u503c\u53ef\u80fd\u662f\u8868\u8fbe\u5f0f\uff0c\u7528expression(0)\u4ece\u5f53\u524dtoken\u5f00\u59cb\u76f4\u81f3\u9012\u5f52\u6d88\u8d39\u6389\u6240\u6709\u7b26\u5408\u4e00\u6b21\u8bed\u4e49\u7684token"),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210ast\u5b50\u6811\u5982\u4e0b")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "value": "=",\n  "arity": "binary",\n  "first": {\n    "value": "needJump",\n    "arity": "name"\n  },\n  "second": {\n    "value": false,\n    "arity": "literal"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"20-23\u884c\uff1a\u5904\u7406var a,b,c\u7684\u8bed\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c25\u884c\uff1a\u89e3\u6790\u5230';'\u4ee3\u8868\u672c\u8bed\u53e5\u7ed3\u675f")),(0,l.kt)("br",null),"2\uff09\u89e3\u6790while",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'stmt("while", function () {\n  advance("(");\n  this.first = expression(0);\n  advance(")");\n  this.second = block();\n  this.arity = "statement";\n  return this;\n});\n')),(0,l.kt)("a",{name:"q4n8b"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u7b2c2\u884c\uff1a\u524d\u8fdbtoken\u5e76\u6cbf\u7740while\u540e\u662f\u5426\u4e3a"(" symbol'),(0,l.kt)("li",{parentName:"ul"},'\u7b2c3\u884c\uff1a\u5de6\u503c\u4e3a\u8868\u8fbe\u5f0f(\u5982\uff1awhile(a+b))\uff0c\u7528expression(0)\u5b8c\u6574\u89e3\u6790\u81f3")"symbol\u524d'),(0,l.kt)("li",{parentName:"ul"},'\u7b2c4\u884c\uff1a\u524d\u8fdb\u5e76\u68c0\u67e5\u5f53\u524dsymbol\u662f\u5426\u4e3a")"'),(0,l.kt)("li",{parentName:"ul"},'\u7b2c5\u884c\uff1ablock()\uff0c\u53f3\u503c\u8fdb\u5165"{"symbo\u5f00\u59cb\u7ee7\u7eed\u9012\u5f52\u89e3\u6790\uff0c\u9047\u5230\u8868\u8fbe\u5f0f\u6309\u7167expresstion\u8fdb\u884c\u89e3\u6790\uff0c\u9047\u5230\u76f8\u5e94\u7684symbol\u5c31\u662f\u7528\u76f8\u5e94nud\u548cled\u6765\u6b63\u786e\u5438\u5f15\u64cd\u4f5c\u6570')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c#"},'stmt("{", function () {\n  new_scope();\n  var a = statements();\n  scope.pop();\n  advance("}");\n  return a;\n});\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u7b2c6\u884c\uff1a\u5f53\u524d\u53c2\u6570\u7c7b\u578b\u4e3a"statement"')),(0,l.kt)("br",null),"\u6700\u7ec8 while\u751f\u6210\u7684ast\u5b50\u6811\u5982\u4e0b",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": "while",\n    "arity": "statement",\n      "first": {\n        "value": "needJump",\n          "arity": "name"\n      },\n        "second": {\n          "value": "if",\n            "arity": "statement",\n              "first": {\n                "value": ">",\n                  "arity": "binary",\n                    "first": {\n                      "value": "topLimiit",\n                        "arity": "name"\n                    },\n                      "second": {\n                        "value": 99,\n                          "arity": "literal"\n                      }\n              },\n                "second": [\n                  {\n                    "value": "=",\n                    "arity": "binary",\n                    "first": {\n                      "value": "needJump",\n                      "arity": "name"\n                    },\n                    "second": {\n                      "value": true,\n                      "arity": "literal"\n                    }\n                  },\n                  {\n                    "value": "+=",\n                    "arity": "binary",\n                    "first": {\n                      "value": "topLimiit",\n                      "arity": "name"\n                    },\n                    "second": {\n                      "value": 1,\n                      "arity": "literal"\n                    }\n                  }\n                ],\n                  "third": null\n        }\n}\n')),(0,l.kt)("br",null),"\u7406\u89e3TDOP\u7684\u5173\u952e\u5728\u4e8e\u5bf9\u80fd\u5728\u7406\u6e05expression(bp)\u3001symbol\u7684nud\u3001led\u5f62\u6210\u9012\u5f52\u8c03\u7528\u94fe\u6765\u6d88\u8d39token\u7684\u6784\u56fe\u3002",(0,l.kt)("br",null),(0,l.kt)("a",{name:"eaiB9"}),(0,l.kt)("h2",{id:"\u6269\u5c55\u9605\u8bfb"},"\u6269\u5c55\u9605\u8bfb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://crockford.com/javascript/tdop/tdop.html"},"https://crockford.com/javascript/tdop/tdop.html"),(0,l.kt)("br",null)),(0,l.kt)("br",null))}m.isMDXComponent=!0}}]);