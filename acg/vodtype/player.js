var killErrors = function(value) {
    return true
};
window.onerror = null;
window.onerror = killErrors;
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return out
}

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);
        if (c1 == -1)
            break;
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);
        if (c2 == -1)
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61)
                return out;
            c3 = base64DecodeChars[c3]
        } while (i < len && c3 == -1);
        if (c3 == -1)
            break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61)
                return out;
            c4 = base64DecodeChars[c4]
        } while (i < len && c4 == -1);
        if (c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }
    return out
}

function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i)
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        }
    }
    return out
}

function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                break
        }
    }
    return out
}
var _0xodQ = 'jsjiami.com.v6',
    _0x4267 = [_0xodQ, 'w7s+w7g=', 'w5zCv0dhw4U=', 'SmxGw4LCgA==', 'PsKgwqPCqMKeOV8vw6dxwpXDtQ==', 'wpB6RVTDiQ==', 'M8O8wogvw67DsWfDjQ==', 'esKzVgpNw6JE', 'w5rDmcK5RTNLKg==', 'w6h8w4rCiQc=', 'AMKQM0kL', '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', 'w6jDlF3DlsKE', 'LJjsCFGkjiami.com.TIve6ezVAK=='];
(function(_0x291cbf, _0x5e023d, _0x57b897) {
    var _0x4eb74e = function(_0x34a06c, _0x21ab3f, _0x3edd9a, _0x50170c, _0x101e2c) {
        _0x21ab3f = _0x21ab3f >> 0x8,
            _0x101e2c = 'po';
        var _0x70a3f3 = 'shift',
            _0x5340d5 = 'push';
        if (_0x21ab3f < _0x34a06c) {
            while (--_0x34a06c) {
                _0x50170c = _0x291cbf[_0x70a3f3]();
                if (_0x21ab3f === _0x34a06c) {
                    _0x21ab3f = _0x50170c;
                    _0x3edd9a = _0x291cbf[_0x101e2c + 'p']();
                } else if (_0x21ab3f && _0x3edd9a['replace'](/[LJCFGkTIeezVAK=]/g, '') === _0x21ab3f) {
                    _0x291cbf[_0x5340d5](_0x50170c);
                }
            }
            _0x291cbf[_0x5340d5](_0x291cbf[_0x70a3f3]());
        }
        return 0x63d91;
    };
    return _0x4eb74e(++_0x5e023d, _0x57b897) >> _0x5e023d ^ _0x57b897;
}(_0x4267, 0x1d4, 0x1d400));
var _0x3ada = function(_0x6fc5ef, _0x139482) {
    _0x6fc5ef = ~~'0x' ['concat'](_0x6fc5ef);
    var _0x585aab = _0x4267[_0x6fc5ef];
    if (_0x3ada['TeipXZ'] === undefined) {
        (function() {
            var _0x3d22a1 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x3fa07d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x3d22a1['atob'] || (_0x3d22a1['atob'] = function(_0x5ea429) {
                var _0x2d2ee7 = String(_0x5ea429)['replace'](/=+$/, '');
                for (var _0x178927 = 0x0, _0x11a2aa, _0x5c398b, _0x4b8c98 = 0x0, _0x447769 = ''; _0x5c398b = _0x2d2ee7['charAt'](_0x4b8c98++); ~_0x5c398b && (_0x11a2aa = _0x178927 % 0x4 ? _0x11a2aa * 0x40 + _0x5c398b : _0x5c398b,
                        _0x178927++ % 0x4) ? _0x447769 += String['fromCharCode'](0xff & _0x11a2aa >> (-0x2 * _0x178927 & 0x6)) : 0x0) {
                    _0x5c398b = _0x3fa07d['indexOf'](_0x5c398b);
                }
                return _0x447769;
            });
        }());
        var _0x36a849 = function(_0x5e351c, _0x139482) {
            var _0x324a8f = [],
                _0xebdae8 = 0x0,
                _0x181934, _0x5b687a = '',
                _0x126205 = '';
            _0x5e351c = atob(_0x5e351c);
            for (var _0x6630 = 0x0, _0x37d833 = _0x5e351c['length']; _0x6630 < _0x37d833; _0x6630++) {
                _0x126205 += '%' + ('00' + _0x5e351c['charCodeAt'](_0x6630)['toString'](0x10))['slice'](-0x2);
            }
            _0x5e351c = decodeURIComponent(_0x126205);
            for (var _0x47c448 = 0x0; _0x47c448 < 0x100; _0x47c448++) {
                _0x324a8f[_0x47c448] = _0x47c448;
            }
            for (_0x47c448 = 0x0; _0x47c448 < 0x100; _0x47c448++) {
                _0xebdae8 = (_0xebdae8 + _0x324a8f[_0x47c448] + _0x139482['charCodeAt'](_0x47c448 % _0x139482['length'])) % 0x100;
                _0x181934 = _0x324a8f[_0x47c448];
                _0x324a8f[_0x47c448] = _0x324a8f[_0xebdae8];
                _0x324a8f[_0xebdae8] = _0x181934;
            }
            _0x47c448 = 0x0;
            _0xebdae8 = 0x0;
            for (var _0x13707d = 0x0; _0x13707d < _0x5e351c['length']; _0x13707d++) {
                _0x47c448 = (_0x47c448 + 0x1) % 0x100;
                _0xebdae8 = (_0xebdae8 + _0x324a8f[_0x47c448]) % 0x100;
                _0x181934 = _0x324a8f[_0x47c448];
                _0x324a8f[_0x47c448] = _0x324a8f[_0xebdae8];
                _0x324a8f[_0xebdae8] = _0x181934;
                _0x5b687a += String['fromCharCode'](_0x5e351c['charCodeAt'](_0x13707d) ^ _0x324a8f[(_0x324a8f[_0x47c448] + _0x324a8f[_0xebdae8]) % 0x100]);
            }
            return _0x5b687a;
        };
        _0x3ada['aZvYnt'] = _0x36a849;
        _0x3ada['ErHoCX'] = {};
        _0x3ada['TeipXZ'] = !![];
    }
    var _0x298ce8 = _0x3ada['ErHoCX'][_0x6fc5ef];
    if (_0x298ce8 === undefined) {
        if (_0x3ada['dEOLTy'] === undefined) {
            _0x3ada['dEOLTy'] = !![];
        }
        _0x585aab = _0x3ada['aZvYnt'](_0x585aab, _0x139482);
        _0x3ada['ErHoCX'][_0x6fc5ef] = _0x585aab;
    } else {
        _0x585aab = _0x298ce8;
    }
    return _0x585aab;
};
eval(function(_0x2e1450, _0x243f6a, _0x37a5db, _0x25f314, _0x2c4169, _0x5462cb) {
    var _0x4c8b0f = {
        'vqspk': function(_0x37cbba, _0x11aa36) {
            return _0x37cbba(_0x11aa36);
        },
        'yyiuK': function(_0x349a3b, _0x43205e) {
            return _0x349a3b > _0x43205e;
        },
        'yZjqT': function(_0x13987c, _0x157031) {
            return _0x13987c + _0x157031;
        },
        'jgRCt': _0x3ada('0', 'GJzu')
    };
    _0x2c4169 = function(_0x37a5db) {
        return (_0x37a5db < _0x243f6a ? '' : _0x2c4169(_0x4c8b0f[_0x3ada('1', '3H6*')](parseInt, _0x37a5db / _0x243f6a))) + (_0x4c8b0f[_0x3ada('2', '0o$J')](_0x37a5db = _0x37a5db % _0x243f6a, 0x23) ? String[_0x3ada('3', 'F]%T')](_0x4c8b0f[_0x3ada('4', 'G6]j')](_0x37a5db, 0x1d)) : _0x37a5db[_0x3ada('5', '9J)h')](0x24));
    };
    if (!'' [_0x3ada('6', '7E(B')](/^/, String)) {
        while (_0x37a5db--)
            _0x5462cb[_0x4c8b0f[_0x3ada('1', '3H6*')](_0x2c4169, _0x37a5db)] = _0x25f314[_0x37a5db] || _0x4c8b0f[_0x3ada('1', '3H6*')](_0x2c4169, _0x37a5db);
        _0x25f314 = [function(_0x2c4169) {
            return _0x5462cb[_0x2c4169];
        }];
        _0x2c4169 = function() {
            return _0x4c8b0f['jgRCt'];
        };
        _0x37a5db = 0x1;
    };
    while (_0x37a5db--)
        if (_0x25f314[_0x37a5db])
            _0x2e1450 = _0x2e1450[_0x3ada('7', 'lqec')](new RegExp(_0x4c8b0f[_0x3ada('8', '$Emh')](_0x4c8b0f[_0x3ada('9', '5J@j')]('\x5cb', _0x2c4169(_0x37a5db)), '\x5cb'), 'g'), _0x25f314[_0x37a5db]);
    return _0x2e1450;
}('y\x20e={\x2715\x27:7(f,t){c(!t){t=1F\x201G()}y\x20a=[\x27日\x27,\x27一\x27,\x27二\x27,\x27三\x27,\x27四\x27,\x27五\x27,\x27六\x27];f=f.4(/1H|1I/,t.1J());f=f.4(/1K|1L/,(t.U()%6)>9?(t.U()%6).q():\x270\x27+(t.U()%6));f=f.4(/1M/,t.E()>9?t.E().q():\x270\x27+t.E());f=f.4(/M/g,t.E());f=f.4(/w|W/g,a[t.1N()]);f=f.4(/1O|1P/,t.F()>9?t.F().q():\x270\x27+t.F());f=f.4(/d|D/g,t.F());f=f.4(/1Q|1R/,t.G()>9?t.G().q():\x270\x27+t.G());f=f.4(/h|H/g,t.G());f=f.4(/1S/,t.I()>9?t.I().q():\x270\x27+t.I());f=f.4(/m/g,t.I());f=f.4(/1T|1U/,t.J()>9?t.J().q():\x270\x27+t.J());f=f.4(/s|S/g,t.J());16\x20f},\x2717\x27:7(s,n){16\x203.18.4(\x27{V}\x27,s).4(\x27{V}\x27,s).4(\x27{X}\x27,n).4(\x27{X}\x27,n)},\x271V\x27:7(s,n){1W.1X=3.17(s,n)},\x271Y\x27:7(){$(\x27#j\x27).Y(\x27k\x27,3.19);1Z(7(){e.1a()},3.1b*20);$(\x22#Z\x22).10(0).21=3.22+\x27\x27;y\x20a=K.23(\x271c\x27);a.24=\x2725/26\x27;a.27=1d;a.28=\x2729-8\x27;a.k=11(\x272a=\x27)+\x27?r=\x27+3.15(\x272b\x27);y\x20b=K.2c(\x271c\x27)[0];b.2d.2e(a,b)},\x272f\x27:7(){c($(\x22#j\x22).Y(\x27k\x27)!=3.12){$(\x22#j\x22).Y(\x27k\x27,3.12)}$(\x22#j\x22).1e()},\x271a\x27:7(){$(\x27#j\x27).2g()},\x272h\x27:7(){3.1f=2i;$(\x27#1g\x27).1e()},\x271h\x27:7(){K.1i(\x27<A>.e{2j:\x20#2k;2l-2m:2n;2o:#2p;2q:1j;2r:1j;L:2s;2t:2u;u:\x27+3.v+\x27;l:\x27+3.x+\x27;2v-l:2w;}.e\x2013{u:6%;l:6%;}.e\x20#Z{L:2x;!2y;u:6%;l:6%;}</A><1k\x202z=\x22e\x22>\x27+\x27<N\x20O=\x22j\x22\x20k=\x22\x22\x201l=\x220\x22\x201m=\x2214\x22\x20u=\x226%\x22\x20l=\x226%\x22\x20A=\x22L:1n;z-1o:1p;\x22></N><N\x20O=\x221g\x22\x20k=\x22\x22\x201l=\x220\x22\x201m=\x2214\x22\x20u=\x226%\x22\x20l=\x226%\x22\x20A=\x22L:1n;z-1o:1p;2A:2B;\x22></N>\x27+\x27<13\x202C=\x220\x22\x202D=\x220\x22\x202E=\x220\x22><2F><1q\x20O=\x22Z\x22\x202G=\x222H\x22\x20A=\x22\x22>&2I;</1q></13></1k>\x27);3.1r=$(\x27.e\x27).10(0).1r;3.1s=$(\x27.e\x27).10(0).1s;K.1i(\x27<1t\x27+\x271u\x20k=\x22\x27+3.1v+3.o+\x27.2J\x22></1t\x27+\x271u>\x27)},\x271w\x27:7(){},\x272K\x27:7(){3.1f=1d;3.1x=\x27\x27;y\x20a=2L;c(a.1y==\x271\x27){a.B=P(a.B);a.C=P(a.C)}1z\x20c(a.1y==\x272\x27){a.B=P(11(a.B));a.C=P(11(a.C))}3.p=2M.2N.2O();3.v=5.u;3.x=5.l;c(3.p.i(\x222P\x22)>0||3.p.i(\x222Q\x22)>0||3.p.i(\x222R\x22)>0||3.p.i(\x222S\x22)>0||3.p.i(\x222T\x22)>0||3.p.i(\x222U\x22)>0){3.v=5.2V;3.x=5.2W}c(3.v.i(\x221A\x22)==-1&&3.v.i(\x22%\x22)==-1){3.v=\x276%\x27}c(3.x.i(\x221A\x22)==-1&&3.x.i(\x22%\x22)==-1){3.x=\x276%\x27}3.19=5.2X;3.12=5.j;3.1b=5.2Y;3.1B=a.2Z;3.30=a.31;3.32=a.33;3.18=34(a.35);3.o=a.36;3.37=a.38;3.Q=a.1C==\x2714\x27?\x27\x27:a.1C;3.39=a.B;3.3a=a.C;3.3b=a.3c;3.3d=a.3e;3.3f=a.O;3.3g=a.V;3.3h=a.X;c(5.1D[3.Q]!=1E){3.Q=5.1D[3.Q].3i}c(5.R[3.o]!=1E){c(5.R[3.o].3j==\x221\x22){3.1x=5.R[3.o].T==\x27\x27?5.T:5.R[3.o].T;3.o=\x27T\x27}}3.1v=3k.3l+\x27/3m/3n/\x27;c(3.1B==\x223o\x22){e.1w()}1z{e.1h()}}};', 0x3e, 0xd3, _0x3ada('a', 'cp6z')[_0x3ada('b', '1m$s')]('|'), 0x0, {}));;
_0xodQ = 'jsjiami.com.v6';
MacPlayer.Init();