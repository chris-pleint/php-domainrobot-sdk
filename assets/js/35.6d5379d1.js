(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{415:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"asynchronous-vs-synchronous-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-vs-synchronous-requests"}},[t._v("#")]),t._v(" Asynchronous vs Synchronous Requests")]),t._v(" "),a("div",{staticClass:"custom-block noheader"},[a("p",[t._v("This library is mainly meant to be used with "),a("strong",[t._v("synchronous")]),t._v(" request but also provides the possibility to be used with "),a("strong",[t._v("asynchronous")]),t._v(" requests.")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("The "),a("strong",[t._v("main difference")]),t._v(" is that the asynchronous requests will provide you with less guidance than the synchronous requests.")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("See examples below for more information on this topic.")]),t._v(" "),a("p",[t._v("A synchronous request will return an Object as described in our official "),a("a",{attrs:{href:"https://help.internetx.com/display/APIJSONEN/Technical+Documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger documentation"),a("OutboundLink")],1),t._v(", whereas an asynchronous request will give you a DomainrobotResult Object which will only return the response as a plain array. You will then have to handle the data on your own.")]),t._v(" "),a("p",[t._v("Both methods provide certain advantages in certain situations.")]),t._v(" "),a("p",[t._v("Be aware that in both cases you will have access to the return status code and the plain array result through:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Domainrobot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLastDomainrobotResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDomainrobot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLastDomainrobotResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"synchronous-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-response"}},[t._v("#")]),t._v(" Synchronous response")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will return an array of Domainrobot\\Model\\Domain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domainList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domainrobot")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("domain")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now you can loop through the array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and query object properties of the domainList items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domainList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is an example of a retrieved $domainList")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     [0] => Domainrobot\\Model\\Domain Object(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         [container:protected] => Array(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [created] => 2019-09-12T10:31:00.000+0200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [updated] => 2020-06-23T16:36:41.000+0200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [owner] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                 (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [context] => 797095")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [user] => user")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                 )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [name] => example.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// )")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"asynchronous-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-response"}},[t._v("#")]),t._v(" Asynchronous response")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will return an array of domains as arrays")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$promise")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domainrobot")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("domain")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DomainrobotException "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$exception")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// extract the resulting domain array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domanList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now you can loob through the array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and query object properties through array key calls")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$domainList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get the status code of the request")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is an example of the retrieved $domanList")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     [stid] => 20200625-app3-dev-4752")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     [status] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [code] => S0105")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [text] => Domain-Daten wurden erfolgreich ermittelt.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [type] => SUCCESS")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     [object] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [type] => Domain")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [summary] => 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     [data] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             [0] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                 (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [created] => 2019-09-12T10:31:00.000+0200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [updated] => 2020-06-23T16:36:41.000+0200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [owner] => Array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                         (")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                             [context] => 797095")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                             [user] => user")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                         )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                     [name] => example.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//                 )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// )")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);