!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);function r(){this.head={key:"",children:{}}}r.prototype.add=function(n){n=n.toLowerCase();var e=JSON.parse(JSON.stringify(n)),t=this.head,r=null,o=n.slice(0,1),a=this.head;for(n=n.slice(1);void 0!==t.children[o]&&o.length>0;)t=t.children[o],o=n.slice(0,1),n=n.slice(1);for(;o.length>0;)r={key:o,value:0===n.length?e:void 0,children:{},parent:a},t.children[o]=r,a=t,t=r,o=n.slice(0,1),n=n.slice(1)},r.prototype.search=function(n){n=n.toLowerCase();var e=this.head,t=n.slice(0,1),r=0;for(n=n.slice(1);void 0!==e.children[t]&&t.length>0;)e=e.children[t],t=n.slice(0,1),n=n.slice(1),r+=1;return null===e.value&&0===n.length?r:-1},r.prototype.getChildren=function(n,e,t){var r=[];for(r.push(t);e>0&&r.length>0;){var o=r.shift();for(var a in void 0!==o.value&&(n.push(o.value),e--),o.children)r.push(o.children[a])}return[n,e]},r.prototype.predictCurrentWord=function(n){n=n.toLowerCase();var e=3,t=new Array,r=this.head,o=n.slice(0,1);for(n=n.slice(1);void 0!==r.children[o]&&o.length>0;)r=r.children[o],o=n.slice(0,1),n=n.slice(1);var a=this.getChildren(t,e,r);return t=a[0],e=a[1],console.log(e),t},r.prototype.remove=function(n){n=n.toLowerCase();var e=this.search(n);e>-1&&removeH(this.head,n,e)};for(var o=new r,a="the\nof\nto\nand\na\nin\nis\nit\nyou\nthat\nhe\nwas\nfor\non\nare\nwith\nas\nI\nhis\nthey\nbe\nat\none\nhave\nthis\nfrom\nor\nhad\nby\nhot\nword\nbut\nwhat\nsome\nwe\ncan\nout\nother\nwere\nall\nthere\nwhen\nup\nuse\nyour\nhow\nsaid\nan\neach\nshe\nwhich\ndo\ntheir\ntime\nif\nwill\nway\nabout\nmany\nthen\nthem\nwrite\nwould\nlike\nso\nthese\nher\nlong\nmake\nthing\nsee\nhim\ntwo\nhas\nlook\nmore\nday\ncould\ngo\ncome\ndid\nnumber\nsound\nno\nmost\npeople\nmy\nover\nknow\nwater\nthan\ncall\nfirst\nwho\nmay\ndown\nside\nbeen\nnow\nfind\nany\nnew\nwork\npart\ntake\nget\nplace\nmade\nlive\nwhere\nafter\nback\nlittle\nonly\nround\nman\nyear\ncame\nshow\nevery\ngood\nme\ngive\nour\nunder\nname\nvery\nthrough\njust\nform\nsentence\ngreat\nthink\nsay\nhelp\nlow\nline\ndiffer\nturn\ncause\nmuch\nmean\nbefore\nmove\nright\nboy\nold\ntoo\nsame\ntell\ndoes\nset\nthree\nwant\nair\nwell\nalso\nplay\nsmall\nend\nput\nhome\nread\nhand\nport\nlarge\nspell\nadd\neven\nland\nhere\nmust\nbig\nhigh\nsuch\nfollow\nact\nwhy\nask\nmen\nchange\nwent\nlight\nkind\noff\nneed\nhouse\npicture\ntry\nus\nagain\nanimal\npoint\nmother\nworld\nnear\nbuild\nself\nearth\nfather\nhead\nstand\nown\npage\nshould\ncountry\nfound\nanswer\nschool\ngrow\nstudy\nstill\nlearn\nplant\ncover\nfood\nsun\nfour\nbetween\nstate\nkeep\neye\nnever\nlast\nlet\nthought\ncity\ntree\ncross\nfarm\nhard\nstart\nmight\nstory\nsaw\nfar\nsea\ndraw\nleft\nlate\nrun\ndon't\nwhile\npress\nclose\nnight\nreal\nlife\nfew\nnorth\nopen\nseem\ntogether\nnext\nwhite\nchildren\nbegin\ngot\nwalk\nexample\nease\npaper\ngroup\nalways\nmusic\nthose\nboth\nmark\noften\nletter\nuntil\nmile\nriver\ncar\nfeet\ncare\nsecond\nbook\ncarry\ntook\nscience\neat\nroom\nfriend\nbegan\nidea\nfish\nmountain\nstop\nonce\nbase\nhear\nhorse\ncut\nsure\nwatch\ncolor\nface\nwood\nmain\nenough\nplain\ngirl\nusual\nyoung\nready\nabove\never\nred\nlist\nthough\nfeel\ntalk\nbird\nsoon\nbody\ndog\nfamily\ndirect\npose\nleave\nsong\nmeasure\ndoor\nproduct\nblack\nshort\nnumeral\nclass\nwind\nquestion\nhappen\ncomplete\nship\narea\nhalf\nrock\norder\nfire\nsouth\nproblem\npiece\ntold\nknew\npass\nsince\ntop\nwhole\nking\nspace\nheard\nbest\nhour\nbetter\ntrue\nduring\nhundred\nfive\nremember\nstep\nearly\nhold\nwest\nground\ninterest\nreach\nfast\nverb\nsing\nlisten\nsix\ntable\ntravel\nless\nmorning\nten\nsimple\nseveral\nvowel\ntoward\nwar\nlay\nagainst\npattern\nslow\ncenter\nlove\nperson\nmoney\nserve\nappear\nroad\nmap\nrain\nrule\ngovern\npull\ncold\nnotice\nvoice\nunit\npower\ntown\nfine\ncertain\nfly\nfall\nlead\ncry\ndark\nmachine\nnote\nwait\nplan\nfigure\nstar\nbox\nnoun\nfield\nrest\ncorrect\nable\npound\ndone\nbeauty\ndrive\nstood\ncontain\nfront\nteach\nweek\nfinal\ngave\ngreen\noh\nquick\ndevelop\nocean\nwarm\nfree\nminute\nstrong\nspecial\nmind\nbehind\nclear\ntail\nproduce\nfact\nstreet\ninch\nmultiply\nnothing\ncourse\nstay\nwheel\nfull\nforce\nblue\nobject\ndecide\nsurface\ndeep\nmoon\nisland\nfoot\nsystem\nbusy\ntest\nrecord\nboat\ncommon\ngold\npossible\nplane\nstead\ndry\nwonder\nlaugh\nthousand\nago\nran\ncheck\ngame\nshape\nequate\nhot\nmiss\nbrought\nheat\nsnow\ntire\nbring\nyes\ndistant\nfill\neast\npaint\nlanguage\namong\ngrand\nball\nyet\nwave\ndrop\nheart\nam\npresent\nheavy\ndance\nengine\nposition\narm\nwide\nsail\nmaterial\nsize\nvary\nsettle\nspeak\nweight\ngeneral\nice\nmatter\ncircle\npair\ninclude\ndivide\nsyllable\nfelt\nperhaps\npick\nsudden\ncount\nsquare\nreason\nlength\nrepresent\nart\nsubject\nregion\nenergy\nhunt\nprobable\nbed\nbrother\negg\nride\ncell\nbelieve\nfraction\nforest\nsit\nrace\nwindow\nstore\nsummer\ntrain\nsleep\nprove\nlone\nleg\nexercise\nwall\ncatch\nmount\nwish\nsky\nboard\njoy\nwinter\nsat\nwritten\nwild\ninstrument\nkept\nglass\ngrass\ncow\njob\nedge\nsign\nvisit\npast\nsoft\nfun\nbright\ngas\nweather\nmonth\nmillion\nbear\nfinish\nhappy\nhope\nflower\nclothe\nstrange\ngone\njump\nbaby\neight\nvillage\nmeet\nroot\nbuy\nraise\nsolve\nmetal\nwhether\npush\nseven\nparagraph\nthird\nshall\nheld\nhair\ndescribe\ncook\nfloor\neither\nresult\nburn\nhill\nsafe\ncat\ncentury\nconsider\ntype\nlaw\nbit\ncoast\ncopy\nphrase\nsilent\ntall\nsand\nsoil\nroll\ntemperature\nfinger\nindustry\nvalue\nfight\nlie\nbeat\nexcite\nnatural\nview\nsense\near\nelse\nquite\nbroke\ncase\nmiddle\nkill\nson\nlake\nmoment\nscale\nloud\nspring\nobserve\nchild\nstraight\nconsonant\nnation\ndictionary\nmilk\nspeed\nmethod\norgan\npay\nage\nsection\ndress\ncloud\nsurprise\nquiet\nstone\ntiny\nclimb\ncool\ndesign\npoor\nlot\nexperiment\nbottom\nkey\niron\nsingle\nstick\nflat\ntwenty\nskin\nsmile\ncrease\nhole\ntrade\nmelody\ntrip\noffice\nreceive\nrow\nmouth\nexact\nsymbol\ndie\nleast\ntrouble\nshout\nexcept\nwrote\nseed\ntone\njoin\nsuggest\nclean\nbreak\nlady\nyard\nrise\nbad\nblow\noil\nblood\ntouch\ngrew\ncent\nmix\nteam\nwire\ncost\nlost\nbrown\nwear\ngarden\nequal\nsent\nchoose\nfell\nfit\nflow\nfair\nbank\ncollect\nsave\ncontrol\ndecimal\ngentle\nwoman\ncaptain\npractice\nseparate\ndifficult\ndoctor\nplease\nprotect\nnoon\nwhose\nlocate\nring\ncharacter\ninsect\ncaught\nperiod\nindicate\nradio\nspoke\natom\nhuman\nhistory\neffect\nelectric\nexpect\ncrop\nmodern\nelement\nhit\nstudent\ncorner\nparty\nsupply\nbone\nrail\nimagine\nprovide\nagree\nthus\ncapital\nwon't\nchair\ndanger\nfruit\nrich\nthick\nsoldier\nprocess\noperate\nguess\nnecessary\nsharp\nwing\ncreate\nneighbor\nwash\nbat\nrather\ncrowd\ncorn\ncompare\npoem\nstring\nbell\ndepend\nmeat\nrub\ntube\nfamous\ndollar\nstream\nfear\nsight\nthin\ntriangle\nplanet\nhurry\nchief\ncolony\nclock\nmine\ntie\nenter\nmajor\nfresh\nsearch\nsend\nyellow\ngun\nallow\nprint\ndead\nspot\ndesert\nsuit\ncurrent\nlift\nrose\ncontinue\nblock\nchart\nhat\nsell\nsuccess\ncompany\nsubtract\nevent\nparticular\ndeal\nswim\nterm\nopposite\nwife\nshoe\nshoulder\nspread\narrange\ncamp\ninvent\ncotton\nborn\ndetermine\nquart\nnine\ntruck\nnoise\nlevel\nchance\ngather\nshop\nstretch\nthrow\nshine\nproperty\ncolumn\nmolecule\nselect\nwrong\ngray\nrepeat\nrequire\nbroad\nprepare\nsalt\nnose\nplural\nanger\nclaim\ncontinent\noxygen\nsugar\ndeath\npretty\nskill\nwomen\nseason\nsolution\nmagnet\nsilver\nthank\nbranch\nmatch\nsuffix\nespecially\nfig\nafraid\nhuge\nsister\nsteel\ndiscuss\nforward\nsimilar\nguide\nexperience\nscore\napple\nbought\nled\npitch\ncoat\nmass\ncard\nband\nrope\nslip\nwin\ndream\nevening\ncondition\nfeed\ntool\ntotal\nbasic\nsmell\nvalley\nnor\ndouble\nseat\narrive\nmaster\ntrack\nparent\nshore\ndivision\nsheet\nsubstance\nfavor\nconnect\npost\nspend\nchord\nfat\nglad\noriginal\nshare\nstation\ndad\nbread\ncharge\nproper\nbar\noffer\nsegment\nslave\nduck\ninstant\nmarket\ndegree\npopulate\nchick\ndear\nenemy\nreply\ndrink\noccur\nsupport\nspeech\nnature\nrange\nsteam\nmotion\npath\nliquid\nlog\nmeant\nquotient\nteeth\nshell\nneck".replace(/\n/g," ").split(" "),i=0;i<a.length;i++)o.add(a[i]);var l=o;function s(){return"INPUT"==document.activeElement.tagName}function c(n,e="world"){n.value=function(n,e,t,r=" "){var o=n.lastIndexOf(r,e-1),a=n.substring(0,o);""!=a&&null!=a&&(a+=" ");var i=n.substring(e);""!=i.charAt(0)&&" "!=i.charAt(0)&&(i=" "+i);return console.log("Start   : "+o.toString()),console.log("Before  : "+a),console.log("Replace : "+t),console.log("After   : "+i),a+t+i}(n.value,n.selectionStart,e)}function d(n){var e=n.value,t=n.selectionStart;if(0==t)return"";if(e.charAt(t-1).match(/\w/)){var r=function(n,e){var t=e;for(;t>0&&n.charAt(t-1).match(/\w/);)t--;return t}(e,t);return 0==r?e.substring(0,t):e.substring(r,t)}return""}function u(n){return l.predictCurrentWord(n)}document.addEventListener("keydown",function(n){var e=n.key;s()&&["1","2","3"].includes(e)&&null!=document.getElementById("suggestionsTable")&&(n.preventDefault(),c(document.activeElement,u(d(document.activeElement))[parseInt(e)-1]))}),document.addEventListener("keyup",function(n){s()&&function(n){if(s()){var e=document.getElementById("suggestionsTable");if(console.log("current word: "+d(document.activeElement)),console.log(e),null!=e&&document.body.removeChild(e),""!=document.activeElement.value&&""!=d(document.activeElement)){var t=document.createElement("table");t.id="suggestionsTable",t.style.position="fixed";var r=document.activeElement.getBoundingClientRect();t.style.left=r.left.toString()+"px",t.style.top=(r.top+20).toString()+"px",console.log(document.activeElement.value);for(var o=u(d(document.activeElement)),a=0;a<o.length;a++){var i=document.createElement("tr"),l=document.createElement("td"),c=document.createElement("td");l.appendChild(document.createTextNode((a+1).toString())),c.appendChild(document.createTextNode(o[a])),i.append(l),i.append(c),t.appendChild(i)}document.body.appendChild(t)}}}(document.activeElement)})}]);