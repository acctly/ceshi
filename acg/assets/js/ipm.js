(function(r, c) { "use strict"; var i = "0.7.19",
        n = "",
        a = "?",
        u = "function",
        e = "undefined",
        p = "object",
        s = "string",
        o = "major",
        t = "model",
        d = "name",
        l = "type",
        w = "vendor",
        f = "version",
        m = "architecture",
        b = "console",
        g = "mobile",
        h = "tablet",
        v = "smarttv",
        x = "wearable",
        k = "embedded"; var y = { extend: function(i, e) { var s = {}; for (var o in i) { if (e[o] && e[o].length % 2 === 0) { s[o] = e[o].concat(i[o]) } else { s[o] = i[o] } } return s }, has: function(i, e) { if (typeof i === "string") { return e.toLowerCase().indexOf(i.toLowerCase()) !== -1 } else { return false } }, lowerize: function(i) { return i.toLowerCase() }, major: function(i) { return typeof i === s ? i.replace(/[^\d\.]/g, "").split(".")[0] : c }, trim: function(i) { return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") } }; var T = { rgx: function(i, e) { var s = 0,
                o, r, n, a, t, d; while (s < e.length && !t) { var l = e[s],
                    w = e[s + 1];
                o = r = 0; while (o < l.length && !t) { t = l[o++].exec(i); if (!!t) { for (n = 0; n < w.length; n++) { d = t[++r];
                            a = w[n]; if (typeof a === p && a.length > 0) { if (a.length == 2) { if (typeof a[1] == u) { this[a[0]] = a[1].call(this, d) } else { this[a[0]] = a[1] } } else if (a.length == 3) { if (typeof a[1] === u && !(a[1].exec && a[1].test)) { this[a[0]] = d ? a[1].call(this, d, a[2]) : c } else { this[a[0]] = d ? d.replace(a[1], a[2]) : c } } else if (a.length == 4) { this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : c } } else { this[a] = d ? d : c } } } }
                s += 2 } }, str: function(i, e) { for (var s in e) { if (typeof e[s] === p && e[s].length > 0) { for (var o = 0; o < e[s].length; o++) { if (y.has(e[s][o], i)) { return s === a ? c : s } } } else if (y.has(e[s], i)) { return s === a ? c : s } } return i } }; var S = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } }; var E = { browser: [
            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
            [d, f],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [
                [d, "Opera Mini"], f
            ],
            [/\s(opr)\/([\w\.]+)/i],
            [
                [d, "Opera"], f
            ],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
            [d, f],
            [/(konqueror)\/([\w\.]+)/i],
            [
                [d, "Konqueror"], f
            ],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [
                [d, "IE"], f
            ],
            [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],
            [
                [d, "Edge"], f
            ],
            [/(yabrowser)\/([\w\.]+)/i],
            [
                [d, "Yandex"], f
            ],
            [/(puffin)\/([\w\.]+)/i],
            [
                [d, "Puffin"], f
            ],
            [/(focus)\/([\w\.]+)/i],
            [
                [d, "Firefox Focus"], f
            ],
            [/(opt)\/([\w\.]+)/i],
            [
                [d, "Opera Touch"], f
            ],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [
                [d, "UCBrowser"], f
            ],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [
                [d, /_/g, " "], f
            ],
            [/(micromessenger)\/([\w\.]+)/i],
            [
                [d, "WeChat"], f
            ],
            [/(brave)\/([\w\.]+)/i],
            [
                [d, "Brave"], f
            ],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [d, f],
            [/(QQ)\/([\d\.]+)/i],
            [d, f],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [d, f],
            [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
            [d, f],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [d, f],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [d],
            [/(LBBROWSER)/i],
            [d],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [f, [d, "MIUI Browser"]],
            [/;fbav\/([\w\.]+);/i],
            [f, [d, "Facebook"]],
            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
            [d, f],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [f, [d, "Chrome Headless"]],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [
                [d, /(.+)/, "$1 WebView"], f
            ],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [
                [d, /(.+(?:g|us))(.+)/, "$1 $2"], f
            ],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [f, [d, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [d, f],
            [/(dolfin)\/([\w\.]+)/i],
            [
                [d, "Dolphin"], f
            ],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [
                [d, "Chrome"], f
            ],
            [/(coast)\/([\w\.]+)/i],
            [
                [d, "Opera Coast"], f
            ],
            [/fxios\/([\w\.-]+)/i],
            [f, [d, "Firefox"]],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [f, [d, "Mobile Safari"]],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [f, d],
            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [
                [d, "GSA"], f
            ],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [d, [f, T.str, S.browser.oldsafari.version]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [d, f],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [
                [d, "Netscape"], f
            ],
            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
            [d, f]
        ], cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [
                [m, "amd64"]
            ],
            [/(ia32(?=;))/i],
            [
                [m, y.lowerize]
            ],
            [/((?:i[346]|x)86)[;\)]/i],
            [
                [m, "ia32"]
            ],
            [/windows\s(ce|mobile);\sppc;/i],
            [
                [m, "arm"]
            ],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [
                [m, /ower/, "", y.lowerize]
            ],
            [/(sun4\w)[;\)]/i],
            [
                [m, "sparc"]
            ],
            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
            [
                [m, y.lowerize]
            ]
        ], device: [
            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
            [t, w, [l, h]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [t, [w, "Apple"],
                [l, h]
            ],
            [/(apple\s{0,1}tv)/i],
            [
                [t, "Apple TV"],
                [w, "Apple"]
            ],
            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
            [w, t, [l, h]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [t, [w, "Amazon"],
                [l, h]
            ],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [
                [t, T.str, S.device.amazon.model],
                [w, "Amazon"],
                [l, g]
            ],
            [/android.+aft([bms])\sbuild/i],
            [t, [w, "Amazon"],
                [l, v]
            ],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [t, w, [l, g]],
            [/\((ip[honed|\s\w*]+);/i],
            [t, [w, "Apple"],
                [l, g]
            ],
            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
            [w, t, [l, g]],
            [/\(bb10;\s(\w+)/i],
            [t, [w, "BlackBerry"],
                [l, g]
            ],
            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
            [t, [w, "Asus"],
                [l, h]
            ],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
                [w, "Sony"],
                [t, "Xperia Tablet"],
                [l, h]
            ],
            [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [t, [w, "Sony"],
                [l, g]
            ],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [w, t, [l, b]],
            [/android.+;\s(shield)\sbuild/i],
            [t, [w, "Nvidia"],
                [l, b]
            ],
            [/(playstation\s[34portablevi]+)/i],
            [t, [w, "Sony"],
                [l, b]
            ],
            [/(sprint\s(\w+))/i],
            [
                [w, T.str, S.device.sprint.vendor],
                [t, T.str, S.device.sprint.model],
                [l, g]
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [w, t, [l, h]],
            [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
            [w, [t, /_/g, " "],
                [l, g]
            ],
            [/(nexus\s9)/i],
            [t, [w, "HTC"],
                [l, h]
            ],
            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
            [t, [w, "Huawei"],
                [l, g]
            ],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [w, t, [l, g]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [t, [w, "Microsoft"],
                [l, b]
            ],
            [/(kin\.[onetw]{3})/i],
            [
                [t, /\./g, " "],
                [w, "Microsoft"],
                [l, g]
            ],
            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
            [t, [w, "Motorola"],
                [l, g]
            ],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [t, [w, "Motorola"],
                [l, h]
            ],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
                [w, y.trim],
                [t, y.trim],
                [l, v]
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
                [t, /^/, "SmartTV"],
                [w, "Samsung"],
                [l, v]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [t, [w, "Sharp"],
                [l, v]
            ],
            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
            [
                [w, "Samsung"], t, [l, h]
            ],
            [/smart-tv.+(samsung)/i],
            [w, [l, v], t],
            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
            [
                [w, "Samsung"], t, [l, g]
            ],
            [/sie-(\w*)/i],
            [t, [w, "Siemens"],
                [l, g]
            ],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [
                [w, "Nokia"], t, [l, g]
            ],
            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
            [t, [w, "Acer"],
                [l, h]
            ],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [t, [w, "LG"],
                [l, h]
            ],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [
                [w, "LG"], t, [l, h]
            ],
            [/(lg) netcast\.tv/i],
            [w, t, [l, v]],
            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
            [t, [w, "LG"],
                [l, g]
            ],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [t, [w, "Lenovo"],
                [l, h]
            ],
            [/linux;.+((jolla));/i],
            [w, t, [l, g]],
            [/((pebble))app\/[\d\.]+\s/i],
            [w, t, [l, x]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [w, t, [l, g]],
            [/crkey/i],
            [
                [t, "Chromecast"],
                [w, "Google"]
            ],
            [/android.+;\s(glass)\s\d/i],
            [t, [w, "Google"],
                [l, x]
            ],
            [/android.+;\s(pixel c)[\s)]/i],
            [t, [w, "Google"],
                [l, h]
            ],
            [/android.+;\s(pixel( [23])?( xl)?)\s/i],
            [t, [w, "Google"],
                [l, g]
            ],
            [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
            [
                [t, /_/g, " "],
                [w, "Xiaomi"],
                [l, g]
            ],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [
                [t, /_/g, " "],
                [w, "Xiaomi"],
                [l, h]
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [t, [w, "Meizu"],
                [l, h]
            ],
            [/(mz)-([\w-]{2,})/i],
            [
                [w, "Meizu"], t, [l, g]
            ],
            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
            [t, [w, "OnePlus"],
                [l, g]
            ],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [t, [w, "RCA"],
                [l, h]
            ],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [t, [w, "Dell"],
                [l, h]
            ],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [t, [w, "Verizon"],
                [l, h]
            ],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [
                [w, "Barnes & Noble"], t, [l, h]
            ],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [t, [w, "NuVision"],
                [l, h]
            ],
            [/android.+;\s(k88)\sbuild/i],
            [t, [w, "ZTE"],
                [l, h]
            ],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [t, [w, "Swiss"],
                [l, g]
            ],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [t, [w, "Swiss"],
                [l, h]
            ],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [t, [w, "Zeki"],
                [l, h]
            ],
            [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
            [
                [w, "Dragon Touch"], t, [l, h]
            ],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [t, [w, "Insignia"],
                [l, h]
            ],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [t, [w, "NextBook"],
                [l, h]
            ],
            [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
            [
                [w, "Voice"], t, [l, g]
            ],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [
                [w, "LvTel"], t, [l, g]
            ],
            [/android.+;\s(PH-1)\s/i],
            [t, [w, "Essential"],
                [l, g]
            ],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [t, [w, "Envizen"],
                [l, h]
            ],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [w, t, [l, h]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [t, [w, "MachSpeed"],
                [l, h]
            ],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [w, t, [l, h]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [t, [w, "Rotor"],
                [l, h]
            ],
            [/android.+(KS(.+))\s+build/i],
            [t, [w, "Amazon"],
                [l, h]
            ],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [w, t, [l, h]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [
                [l, y.lowerize], w, t
            ],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [t, [w, "Generic"]]
        ], engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [f, [d, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)/i],
            [
                [d, "Blink"]
            ],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
            [d, f],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [f, d]
        ], os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [d, f],
            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
            [d, [f, T.str, S.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
                [d, "Windows"],
                [f, T.str, S.os.windows.version]
            ],
            [/\((bb)(10);/i],
            [
                [d, "BlackBerry"], f
            ],
            [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
            [d, f],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [
                [d, "Symbian"], f
            ],
            [/\((series40);/i],
            [d],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [
                [d, "Firefox OS"], f
            ],
            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
            [d, f],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [
                [d, "Chromium OS"], f
            ],
            [/(sunos)\s?([\w\.\d]*)/i],
            [
                [d, "Solaris"], f
            ],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [d, f],
            [/(haiku)\s(\w+)/i],
            [d, f],
            [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
            [
                [f, /_/g, "."],
                [d, "iOS"]
            ],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
                [d, "Mac OS"],
                [f, /_/g, "."]
            ],
            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
            [d, f]
        ] }; var N = function(i, e) { if (typeof i === "object") { e = i;
            i = c } if (!(this instanceof N)) { return new N(i, e).getResult() } var s = i || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : n); var o = e ? y.extend(E, e) : E;
        this.getBrowser = function() { var i = { name: c, version: c };
            T.rgx.call(i, s, o.browser);
            i.major = y.major(i.version); return i };
        this.getCPU = function() { var i = { architecture: c };
            T.rgx.call(i, s, o.cpu); return i };
        this.getDevice = function() { var i = { vendor: c, model: c, type: c };
            T.rgx.call(i, s, o.device); return i };
        this.getEngine = function() { var i = { name: c, version: c };
            T.rgx.call(i, s, o.engine); return i };
        this.getOS = function() { var i = { name: c, version: c };
            T.rgx.call(i, s, o.os); return i };
        this.getResult = function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } };
        this.getUA = function() { return s };
        this.setUA = function(i) { s = i; return this }; return this };
    N.VERSION = i;
    N.BROWSER = { NAME: d, MAJOR: o, VERSION: f };
    N.CPU = { ARCHITECTURE: m };
    N.DEVICE = { MODEL: t, VENDOR: w, TYPE: l, CONSOLE: b, MOBILE: g, SMARTTV: v, TABLET: h, WEARABLE: x, EMBEDDED: k };
    N.ENGINE = { NAME: d, VERSION: f };
    N.OS = { NAME: d, VERSION: f }; if (typeof exports !== e) { if (typeof module !== e && module.exports) { exports = module.exports = N }
        exports.UAParser = N } else { if (typeof define === u && define.amd) { define(function() { return N }) } else if (r) { r.UAParser = N } } var A = r && (r.jQuery || r.Zepto); if (typeof A !== e && !A.ua) { var C = new N;
        A.ua = C.getResult();
        A.ua.get = function() { return C.getUA() };
        A.ua.set = function(i) { C.setUA(i); var e = C.getResult(); for (var s in e) { A.ua[s] = e[s] } } } })(typeof window === "object" ? window : this);
(function(i) { var e = false; if (typeof define === "function" && define.amd) { define(i);
        e = true } if (typeof exports === "object") { module.exports = i();
        e = true } if (!e) { var s = window.Cookies; var o = window.Cookies = i();
        o.noConflict = function() { window.Cookies = s; return o } } })(function() {
    function m() { var i = 0; var e = {}; for (; i < arguments.length; i++) { var s = arguments[i]; for (var o in s) { e[o] = s[o] } } return e }

    function i(p) {
        function f(i, e, s) { var o; if (typeof document === "undefined") { return } if (arguments.length > 1) { s = m({ path: "/" }, f.defaults, s); if (typeof s.expires === "number") { var r = new Date;
                    r.setMilliseconds(r.getMilliseconds() + s.expires * 864e5);
                    s.expires = r }
                s.expires = s.expires ? s.expires.toUTCString() : ""; try { o = JSON.stringify(e); if (/^[\{\[]/.test(o)) { e = o } } catch (i) {} if (!p.write) { e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) } else { e = p.write(e, i) }
                i = encodeURIComponent(String(i));
                i = i.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                i = i.replace(/[\(\)]/g, escape); var n = ""; for (var a in s) { if (!s[a]) { continue }
                    n += "; " + a; if (s[a] === true) { continue }
                    n += "=" + s[a] } return document.cookie = i + "=" + e + n } if (!i) { o = {} } var t = document.cookie ? document.cookie.split("; ") : []; var d = /(%[0-9A-Z]{2})+/g; var l = 0; for (; l < t.length; l++) { var w = t[l].split("="); var c = w.slice(1).join("="); if (!this.json && c.charAt(0) === '"') { c = c.slice(1, -1) } try { var u = w[0].replace(d, decodeURIComponent);
                    c = p.read ? p.read(c, u) : p(c, u) || c.replace(d, decodeURIComponent); if (this.json) { try { c = JSON.parse(c) } catch (i) {} } if (i === u) { o = c; break } if (!i) { o[u] = c } } catch (i) {} } return o }
        f.set = f;
        f.get = function(i) { return f.call(f, i) };
        f.getJSON = function() { return f.apply({ json: true }, [].slice.call(arguments)) };
        f.defaults = {};
        f.remove = function(i, e) { f(i, "", m(e, { expires: -1 })) };
        f.withConverter = i; return f } return i(function() {}) });
var currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
(function() { var i = currentScript.src; var e = document.referrer; var s = i.substring(i.indexOf("?") + 1); var o = new UAParser; var r = o.getResult(); var n = { add: function(i) { var e = document.createElement("div"); var s = '<div style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; z-index: 99999998; background-color: rgba(0,0,0,.5);">\n<div style="background-color: #fff; width: auto; margin: 150px 5% 0; border-radius: 5px;">\n<p style="color: #000; font-size: 20px; text-align: center; min-height: 100px; padding: 20px; display: flex; align-items: center; justify-content: center;">' + i.text + "</p>\n</div>\n</div>\n";
            e.innerHTML = s;
            document.getElementsByTagName("body")[0].appendChild(e) } }; if (r.browser.name.match(/safari/gi)) { if ("standalone" in window.navigator && window.navigator.standalone) { var d, l = false;
            document.addEventListener("click", function(i) { d = i.target; while (d.nodeName !== "A" && d.nodeName !== "HTML") d = d.parentNode; if ("href" in d && d.href.indexOf("http") !== -1 && (d.href.indexOf(document.location.host) !== -1 || l)) { i.preventDefault();
                    document.location.href = d.href } }, false) } } })();