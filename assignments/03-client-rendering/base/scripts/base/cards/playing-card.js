var a3_0x5f0db4 = a3_0x5d3b;
function a3_0x4ed8() {
  var _0x2f6943 = [
    "42cNYOVi",
    "2515HYUmBc",
    "data",
    "pip",
    "\x20of\x20",
    "toString",
    "3091475DFinRb",
    "1364688mQsBnj",
    "7667044MdsggA",
    "7511520FvtJQG",
    "278XzeMCt",
    "fromJSON",
    "9jCsdCX",
    "toJSON",
    "4989yzZkzl",
    "playing-card",
    "828uSjtzU",
    "667068ufUgwl",
  ];
  a3_0x4ed8 = function () {
    return _0x2f6943;
  };
  return a3_0x4ed8();
}
(function (_0x5099fa, _0x32eed8) {
  var _0x2ef255 = a3_0x5d3b,
    _0x4946ac = _0x5099fa();
  while (!![]) {
    try {
      var _0x3f6976 =
        (-parseInt(_0x2ef255(0xcd)) / 0x1) * (parseInt(_0x2ef255(0xc4)) / 0x2) +
        (parseInt(_0x2ef255(0xc8)) / 0x3) * (-parseInt(_0x2ef255(0xca)) / 0x4) +
        parseInt(_0x2ef255(0xc0)) / 0x5 +
        (parseInt(_0x2ef255(0xcb)) / 0x6) * (-parseInt(_0x2ef255(0xcc)) / 0x7) +
        (-parseInt(_0x2ef255(0xc1)) / 0x8) * (parseInt(_0x2ef255(0xc6)) / 0x9) +
        parseInt(_0x2ef255(0xc3)) / 0xa +
        parseInt(_0x2ef255(0xc2)) / 0xb;
      if (_0x3f6976 === _0x32eed8) break;
      else _0x4946ac["push"](_0x4946ac["shift"]());
    } catch (_0x27f2ef) {
      _0x4946ac["push"](_0x4946ac["shift"]());
    }
  }
})(a3_0x4ed8, 0x829bb);
import a3_0x45fb3d from "../card.js";
function a3_0x5d3b(_0x1d9616, _0x5d1ac5) {
  var _0x4ed885 = a3_0x4ed8();
  return (
    (a3_0x5d3b = function (_0x5d3ba3, _0x5ecf09) {
      _0x5d3ba3 = _0x5d3ba3 - 0xc0;
      var _0xf9ee44 = _0x4ed885[_0x5d3ba3];
      return _0xf9ee44;
    }),
    a3_0x5d3b(_0x1d9616, _0x5d1ac5)
  );
}
export default class PlayingCard extends a3_0x45fb3d {
  #data;
  constructor(_0x129a64) {
    super(_0x129a64), this.#fromJSON(_0x129a64);
  }
  get [a3_0x5f0db4(0xce)]() {
    return this.#data;
  }
  [a3_0x5f0db4(0xd1)]() {
    var _0xca1a75 = a3_0x5f0db4;
    return this.#data[_0xca1a75(0xcf)] + _0xca1a75(0xd0) + this.#data["suit"];
  }
  [a3_0x5f0db4(0xc7)]() {
    var _0x3cb321 = a3_0x5f0db4;
    return {
      ...super[_0x3cb321(0xc7)](),
      type: _0x3cb321(0xc9),
      data: this.#data,
    };
  }
  #fromJSON(_0x5d727a) {
    var _0x54b9a8 = a3_0x5f0db4;
    this.#data = _0x5d727a?.[_0x54b9a8(0xce)] ?? {};
  }
  static [a3_0x5f0db4(0xc5)](_0x5b0120) {
    return new PlayingCard(_0x5b0120);
  }
}
