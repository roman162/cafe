/*! @name videojs-contrib-eme @version 4.0.1 @license Apache-2.0 */
(function (videojs,QUnit,sinon) {
	'use strict';

	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;
	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var win;

	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	    win = commonjsGlobal;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}

	var window_1 = win;

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	var minDoc = {};

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	var cov_20o2qbsod0 = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/utils.js',
	      hash = 'f394ed017bb2b14c3a8770c838941398f2198067',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/utils.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 4,
	          column: 35
	        },
	        end: {
	          line: 14,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 6,
	          column: 17
	        },
	        end: {
	          line: 6,
	          column: 51
	        }
	      },
	      '2': {
	        start: {
	          line: 7,
	          column: 16
	        },
	        end: {
	          line: 7,
	          column: 39
	        }
	      },
	      '3': {
	        start: {
	          line: 9,
	          column: 2
	        },
	        end: {
	          line: 11,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 10,
	          column: 4
	        },
	        end: {
	          line: 10,
	          column: 36
	        }
	      },
	      '5': {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 15
	        }
	      },
	      '6': {
	        start: {
	          line: 16,
	          column: 34
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      '7': {
	        start: {
	          line: 17,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 80
	        }
	      },
	      '8': {
	        start: {
	          line: 20,
	          column: 35
	        },
	        end: {
	          line: 22,
	          column: 1
	        }
	      },
	      '9': {
	        start: {
	          line: 21,
	          column: 2
	        },
	        end: {
	          line: 21,
	          column: 81
	        }
	      },
	      '10': {
	        start: {
	          line: 24,
	          column: 34
	        },
	        end: {
	          line: 29,
	          column: 1
	        }
	      },
	      '11': {
	        start: {
	          line: 25,
	          column: 15
	        },
	        end: {
	          line: 25,
	          column: 42
	        }
	      },
	      '12': {
	        start: {
	          line: 27,
	          column: 2
	        },
	        end: {
	          line: 27,
	          column: 18
	        }
	      },
	      '13': {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 28,
	          column: 23
	        }
	      },
	      '14': {
	        start: {
	          line: 31,
	          column: 33
	        },
	        end: {
	          line: 50,
	          column: 1
	        }
	      },
	      '15': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 34,
	          column: 3
	        }
	      },
	      '16': {
	        start: {
	          line: 33,
	          column: 4
	        },
	        end: {
	          line: 33,
	          column: 16
	        }
	      },
	      '17': {
	        start: {
	          line: 36,
	          column: 2
	        },
	        end: {
	          line: 38,
	          column: 3
	        }
	      },
	      '18': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 17
	        }
	      },
	      '19': {
	        start: {
	          line: 40,
	          column: 20
	        },
	        end: {
	          line: 40,
	          column: 46
	        }
	      },
	      '20': {
	        start: {
	          line: 41,
	          column: 20
	        },
	        end: {
	          line: 41,
	          column: 46
	        }
	      },
	      '21': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 3
	        }
	      },
	      '22': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      '23': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 19
	        }
	      },
	      '24': {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 14
	        }
	      },
	      '25': {
	        start: {
	          line: 52,
	          column: 31
	        },
	        end: {
	          line: 59,
	          column: 1
	        }
	      },
	      '26': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 3
	        }
	      },
	      '27': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 37
	        }
	      },
	      '28': {
	        start: {
	          line: 58,
	          column: 2
	        },
	        end: {
	          line: 58,
	          column: 28
	        }
	      },
	      '29': {
	        start: {
	          line: 61,
	          column: 34
	        },
	        end: {
	          line: 72,
	          column: 1
	        }
	      },
	      '30': {
	        start: {
	          line: 62,
	          column: 17
	        },
	        end: {
	          line: 62,
	          column: 46
	        }
	      },
	      '31': {
	        start: {
	          line: 65,
	          column: 2
	        },
	        end: {
	          line: 69,
	          column: 5
	        }
	      },
	      '32': {
	        start: {
	          line: 66,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 5
	        }
	      },
	      '33': {
	        start: {
	          line: 67,
	          column: 6
	        },
	        end: {
	          line: 67,
	          column: 23
	        }
	      },
	      '34': {
	        start: {
	          line: 71,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 16
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 4,
	            column: 35
	          },
	          end: {
	            line: 4,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 4,
	            column: 47
	          },
	          end: {
	            line: 14,
	            column: 1
	          }
	        },
	        line: 4
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 16,
	            column: 34
	          },
	          end: {
	            line: 16,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 16,
	            column: 45
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 16
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 20,
	            column: 35
	          },
	          end: {
	            line: 20,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 20,
	            column: 46
	          },
	          end: {
	            line: 22,
	            column: 1
	          }
	        },
	        line: 20
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 24,
	            column: 34
	          },
	          end: {
	            line: 24,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 24,
	            column: 43
	          },
	          end: {
	            line: 29,
	            column: 1
	          }
	        },
	        line: 24
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 31,
	            column: 33
	          },
	          end: {
	            line: 31,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 31,
	            column: 65
	          },
	          end: {
	            line: 50,
	            column: 1
	          }
	        },
	        line: 31
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 52,
	            column: 31
	          },
	          end: {
	            line: 52,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 55
	          },
	          end: {
	            line: 59,
	            column: 1
	          }
	        },
	        line: 52
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 61,
	            column: 34
	          },
	          end: {
	            line: 61,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 61,
	            column: 47
	          },
	          end: {
	            line: 72,
	            column: 1
	          }
	        },
	        line: 61
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 65,
	            column: 30
	          },
	          end: {
	            line: 65,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 65,
	            column: 35
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        },
	        line: 65
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 17,
	            column: 56
	          },
	          end: {
	            line: 17,
	            column: 77
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 17,
	            column: 56
	          },
	          end: {
	            line: 17,
	            column: 68
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 72
	          },
	          end: {
	            line: 17,
	            column: 77
	          }
	        }],
	        line: 17
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 21,
	            column: 57
	          },
	          end: {
	            line: 21,
	            column: 78
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 21,
	            column: 57
	          },
	          end: {
	            line: 21,
	            column: 69
	          }
	        }, {
	          start: {
	            line: 21,
	            column: 73
	          },
	          end: {
	            line: 21,
	            column: 78
	          }
	        }],
	        line: 21
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 32,
	            column: 2
	          },
	          end: {
	            line: 34,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 32,
	            column: 2
	          },
	          end: {
	            line: 34,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 32,
	            column: 2
	          },
	          end: {
	            line: 34,
	            column: 3
	          }
	        }],
	        line: 32
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 36,
	            column: 2
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 36,
	            column: 2
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 36,
	            column: 2
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        }],
	        line: 36
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }],
	        line: 44
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }],
	        line: 53
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 53,
	            column: 6
	          },
	          end: {
	            line: 54,
	            column: 47
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 53,
	            column: 6
	          },
	          end: {
	            line: 53,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 54,
	            column: 47
	          }
	        }],
	        line: 53
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        }],
	        line: 66
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_20o2qbsod0.s[0]++;
	var stringToUint16Array = function stringToUint16Array(string) {
	  cov_20o2qbsod0.f[0]++;
	  var buffer = (cov_20o2qbsod0.s[1]++, new ArrayBuffer(string.length * 2));
	  var array = (cov_20o2qbsod0.s[2]++, new Uint16Array(buffer));
	  cov_20o2qbsod0.s[3]++;

	  for (var i = 0; i < string.length; i++) {
	    cov_20o2qbsod0.s[4]++;
	    array[i] = string.charCodeAt(i);
	  }

	  cov_20o2qbsod0.s[5]++;
	  return array;
	};
	cov_20o2qbsod0.s[6]++;
	var uint8ArrayToString = function uint8ArrayToString(array) {
	  cov_20o2qbsod0.f[1]++;
	  cov_20o2qbsod0.s[7]++;
	  return String.fromCharCode.apply(null, new Uint8Array((cov_20o2qbsod0.b[0][0]++, array.buffer) || (cov_20o2qbsod0.b[0][1]++, array)));
	};
	cov_20o2qbsod0.s[8]++;
	var uint16ArrayToString = function uint16ArrayToString(array) {
	  cov_20o2qbsod0.f[2]++;
	  cov_20o2qbsod0.s[9]++;
	  return String.fromCharCode.apply(null, new Uint16Array((cov_20o2qbsod0.b[1][0]++, array.buffer) || (cov_20o2qbsod0.b[1][1]++, array)));
	};
	cov_20o2qbsod0.s[10]++;
	var getHostnameFromUri = function getHostnameFromUri(uri) {
	  cov_20o2qbsod0.f[3]++;
	  var link = (cov_20o2qbsod0.s[11]++, document_1.createElement('a'));
	  cov_20o2qbsod0.s[12]++;
	  link.href = uri;
	  cov_20o2qbsod0.s[13]++;
	  return link.hostname;
	};
	cov_20o2qbsod0.s[14]++;
	var arrayBuffersEqual = function arrayBuffersEqual(arrayBuffer1, arrayBuffer2) {
	  cov_20o2qbsod0.f[4]++;
	  cov_20o2qbsod0.s[15]++;

	  if (arrayBuffer1 === arrayBuffer2) {
	    cov_20o2qbsod0.b[2][0]++;
	    cov_20o2qbsod0.s[16]++;
	    return true;
	  } else {
	    cov_20o2qbsod0.b[2][1]++;
	  }

	  cov_20o2qbsod0.s[17]++;

	  if (arrayBuffer1.byteLength !== arrayBuffer2.byteLength) {
	    cov_20o2qbsod0.b[3][0]++;
	    cov_20o2qbsod0.s[18]++;
	    return false;
	  } else {
	    cov_20o2qbsod0.b[3][1]++;
	  }

	  var dataView1 = (cov_20o2qbsod0.s[19]++, new DataView(arrayBuffer1));
	  var dataView2 = (cov_20o2qbsod0.s[20]++, new DataView(arrayBuffer2));
	  cov_20o2qbsod0.s[21]++;

	  for (var i = 0; i < dataView1.byteLength; i++) {
	    cov_20o2qbsod0.s[22]++;

	    if (dataView1.getUint8(i) !== dataView2.getUint8(i)) {
	      cov_20o2qbsod0.b[4][0]++;
	      cov_20o2qbsod0.s[23]++;
	      return false;
	    } else {
	      cov_20o2qbsod0.b[4][1]++;
	    }
	  }

	  cov_20o2qbsod0.s[24]++;
	  return true;
	};
	cov_20o2qbsod0.s[25]++;
	var arrayBufferFrom = function arrayBufferFrom(bufferOrTypedArray) {
	  cov_20o2qbsod0.f[5]++;
	  cov_20o2qbsod0.s[26]++;

	  if ((cov_20o2qbsod0.b[6][0]++, bufferOrTypedArray instanceof Uint8Array) || (cov_20o2qbsod0.b[6][1]++, bufferOrTypedArray instanceof Uint16Array)) {
	    cov_20o2qbsod0.b[5][0]++;
	    cov_20o2qbsod0.s[27]++;
	    return bufferOrTypedArray.buffer;
	  } else {
	    cov_20o2qbsod0.b[5][1]++;
	  }

	  cov_20o2qbsod0.s[28]++;
	  return bufferOrTypedArray;
	};
	cov_20o2qbsod0.s[29]++;
	var mergeAndRemoveNull = function mergeAndRemoveNull() {
	  cov_20o2qbsod0.f[6]++;
	  var result = (cov_20o2qbsod0.s[30]++, videojs.mergeOptions.apply(videojs, arguments));
	  cov_20o2qbsod0.s[31]++;
	  Object.keys(result).forEach(function (k) {
	    cov_20o2qbsod0.f[7]++;
	    cov_20o2qbsod0.s[32]++;

	    if (result[k] === null) {
	      cov_20o2qbsod0.b[7][0]++;
	      cov_20o2qbsod0.s[33]++;
	      delete result[k];
	    } else {
	      cov_20o2qbsod0.b[7][1]++;
	    }
	  });
	  cov_20o2qbsod0.s[34]++;
	  return result;
	};

	var cov_24npl0rlqa = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/http-handler.js',
	      hash = '4de5842a245c3038dd0942216fd53f44c2e6f18d',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/http-handler.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 3,
	          column: 26
	        },
	        end: {
	          line: 3,
	          column: 49
	        }
	      },
	      '1': {
	        start: {
	          line: 7,
	          column: 0
	        },
	        end: {
	          line: 29,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 8,
	          column: 2
	        },
	        end: {
	          line: 28,
	          column: 4
	        }
	      },
	      '3': {
	        start: {
	          line: 8,
	          column: 58
	        },
	        end: {
	          line: 28,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 9,
	          column: 4
	        },
	        end: {
	          line: 12,
	          column: 5
	        }
	      },
	      '5': {
	        start: {
	          line: 10,
	          column: 6
	        },
	        end: {
	          line: 10,
	          column: 20
	        }
	      },
	      '6': {
	        start: {
	          line: 11,
	          column: 6
	        },
	        end: {
	          line: 11,
	          column: 13
	        }
	      },
	      '7': {
	        start: {
	          line: 15,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 5
	        }
	      },
	      '8': {
	        start: {
	          line: 16,
	          column: 18
	        },
	        end: {
	          line: 16,
	          column: 30
	        }
	      },
	      '9': {
	        start: {
	          line: 18,
	          column: 6
	        },
	        end: {
	          line: 20,
	          column: 7
	        }
	      },
	      '10': {
	        start: {
	          line: 19,
	          column: 8
	        },
	        end: {
	          line: 19,
	          column: 78
	        }
	      },
	      '11': {
	        start: {
	          line: 22,
	          column: 6
	        },
	        end: {
	          line: 22,
	          column: 24
	        }
	      },
	      '12': {
	        start: {
	          line: 23,
	          column: 6
	        },
	        end: {
	          line: 23,
	          column: 13
	        }
	      },
	      '13': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 27,
	          column: 33
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 8,
	            column: 24
	          },
	          end: {
	            line: 8,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 8,
	            column: 58
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        },
	        line: 8
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 8,
	            column: 58
	          },
	          end: {
	            line: 8,
	            column: 59
	          }
	        },
	        loc: {
	          start: {
	            line: 8,
	            column: 91
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        },
	        line: 8
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 7,
	            column: 0
	          },
	          end: {
	            line: 29,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 7,
	            column: 0
	          },
	          end: {
	            line: 29,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 7,
	            column: 0
	          },
	          end: {
	            line: 29,
	            column: 1
	          }
	        }],
	        line: 7
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 9,
	            column: 4
	          },
	          end: {
	            line: 12,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 9,
	            column: 4
	          },
	          end: {
	            line: 12,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 9,
	            column: 4
	          },
	          end: {
	            line: 12,
	            column: 5
	          }
	        }],
	        line: 9
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 15,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 15,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 15,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        }],
	        line: 15
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 15,
	            column: 8
	          },
	          end: {
	            line: 15,
	            column: 64
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 15,
	            column: 8
	          },
	          end: {
	            line: 15,
	            column: 34
	          }
	        }, {
	          start: {
	            line: 15,
	            column: 38
	          },
	          end: {
	            line: 15,
	            column: 64
	          }
	        }],
	        line: 15
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 18,
	            column: 6
	          },
	          end: {
	            line: 20,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 18,
	            column: 6
	          },
	          end: {
	            line: 20,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 18,
	            column: 6
	          },
	          end: {
	            line: 20,
	            column: 7
	          }
	        }],
	        line: 18
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var httpResponseHandler = (cov_24npl0rlqa.s[0]++, videojs.xhr.httpHandler);
	cov_24npl0rlqa.s[1]++;

	if (!httpResponseHandler) {
	  cov_24npl0rlqa.b[0][0]++;
	  cov_24npl0rlqa.s[2]++;

	  httpResponseHandler = function httpResponseHandler(callback, decodeResponseBody) {
	    cov_24npl0rlqa.f[0]++;
	    cov_24npl0rlqa.s[3]++;
	    return function (err, response, responseBody) {
	      cov_24npl0rlqa.f[1]++;
	      cov_24npl0rlqa.s[4]++;

	      if (err) {
	        cov_24npl0rlqa.b[1][0]++;
	        cov_24npl0rlqa.s[5]++;
	        callback(err);
	        cov_24npl0rlqa.s[6]++;
	        return;
	      } else {
	        cov_24npl0rlqa.b[1][1]++;
	      }

	      cov_24npl0rlqa.s[7]++;

	      if ((cov_24npl0rlqa.b[3][0]++, response.statusCode >= 400) && (cov_24npl0rlqa.b[3][1]++, response.statusCode <= 599)) {
	        cov_24npl0rlqa.b[2][0]++;
	        var cause = (cov_24npl0rlqa.s[8]++, responseBody);
	        cov_24npl0rlqa.s[9]++;

	        if (decodeResponseBody) {
	          cov_24npl0rlqa.b[4][0]++;
	          cov_24npl0rlqa.s[10]++;
	          cause = String.fromCharCode.apply(null, new Uint8Array(responseBody));
	        } else {
	          cov_24npl0rlqa.b[4][1]++;
	        }

	        cov_24npl0rlqa.s[11]++;
	        callback({
	          cause: cause
	        });
	        cov_24npl0rlqa.s[12]++;
	        return;
	      } else {
	        cov_24npl0rlqa.b[2][1]++;
	      }

	      cov_24npl0rlqa.s[13]++;
	      callback(null, responseBody);
	    };
	  };
	} else {
	  cov_24npl0rlqa.b[0][1]++;
	}

	var cov_2136o8xm8e = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/playready.js',
	      hash = '9effb3fbc6287ca13a87ec57de84680b4c992f2b',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/playready.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 14,
	          column: 34
	        },
	        end: {
	          line: 43,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 16,
	          column: 20
	        },
	        end: {
	          line: 16,
	          column: 77
	        }
	      },
	      '2': {
	        start: {
	          line: 17,
	          column: 14
	        },
	        end: {
	          line: 18,
	          column: 50
	        }
	      },
	      '3': {
	        start: {
	          line: 19,
	          column: 25
	        },
	        end: {
	          line: 19,
	          column: 67
	        }
	      },
	      '4': {
	        start: {
	          line: 20,
	          column: 18
	        },
	        end: {
	          line: 20,
	          column: 20
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 3
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 24
	        },
	        end: {
	          line: 23,
	          column: 67
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 25
	        },
	        end: {
	          line: 24,
	          column: 69
	        }
	      },
	      '8': {
	        start: {
	          line: 26,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 5
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 6
	        },
	        end: {
	          line: 28,
	          column: 48
	        }
	      },
	      '10': {
	        start: {
	          line: 32,
	          column: 27
	        },
	        end: {
	          line: 32,
	          column: 67
	        }
	      },
	      '11': {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 37,
	          column: 3
	        }
	      },
	      '12': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 70
	        }
	      },
	      '13': {
	        start: {
	          line: 39,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 4
	        }
	      },
	      '14': {
	        start: {
	          line: 45,
	          column: 39
	        },
	        end: {
	          line: 62,
	          column: 1
	        }
	      },
	      '15': {
	        start: {
	          line: 46,
	          column: 26
	        },
	        end: {
	          line: 46,
	          column: 59
	        }
	      },
	      '16': {
	        start: {
	          line: 47,
	          column: 18
	        },
	        end: {
	          line: 47,
	          column: 41
	        }
	      },
	      '17': {
	        start: {
	          line: 49,
	          column: 18
	        },
	        end: {
	          line: 53,
	          column: 3
	        }
	      },
	      '18': {
	        start: {
	          line: 55,
	          column: 2
	        },
	        end: {
	          line: 61,
	          column: 42
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 14,
	            column: 34
	          },
	          end: {
	            line: 14,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 47
	          },
	          end: {
	            line: 43,
	            column: 1
	          }
	        },
	        line: 14
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 45,
	            column: 39
	          },
	          end: {
	            line: 45,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 45,
	            column: 98
	          },
	          end: {
	            line: 62,
	            column: 1
	          }
	        },
	        line: 45
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }],
	        line: 22
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }],
	        line: 35
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_2136o8xm8e.s[0]++;
	var getMessageContents = function getMessageContents(message) {
	  cov_2136o8xm8e.f[0]++;
	  var xmlString = (cov_2136o8xm8e.s[1]++, String.fromCharCode.apply(null, new Uint16Array(message)));
	  var xml = (cov_2136o8xm8e.s[2]++, new window_1.DOMParser().parseFromString(xmlString, 'application/xml'));
	  var headersElement = (cov_2136o8xm8e.s[3]++, xml.getElementsByTagName('HttpHeaders')[0]);
	  var headers = (cov_2136o8xm8e.s[4]++, {});
	  cov_2136o8xm8e.s[5]++;

	  if (headersElement) {
	    cov_2136o8xm8e.b[0][0]++;
	    var headerNames = (cov_2136o8xm8e.s[6]++, headersElement.getElementsByTagName('name'));
	    var headerValues = (cov_2136o8xm8e.s[7]++, headersElement.getElementsByTagName('value'));
	    cov_2136o8xm8e.s[8]++;

	    for (var i = 0; i < headerNames.length; i++) {
	      cov_2136o8xm8e.s[9]++;
	      headers[headerNames[i].childNodes[0].nodeValue] = headerValues[i].childNodes[0].nodeValue;
	    }
	  } else {
	    cov_2136o8xm8e.b[0][1]++;
	  }

	  var challengeElement = (cov_2136o8xm8e.s[10]++, xml.getElementsByTagName('Challenge')[0]);
	  var challenge;
	  cov_2136o8xm8e.s[11]++;

	  if (challengeElement) {
	    cov_2136o8xm8e.b[1][0]++;
	    cov_2136o8xm8e.s[12]++;
	    challenge = window_1.atob(challengeElement.childNodes[0].nodeValue);
	  } else {
	    cov_2136o8xm8e.b[1][1]++;
	  }

	  cov_2136o8xm8e.s[13]++;
	  return {
	    headers: headers,
	    message: challenge
	  };
	};
	cov_2136o8xm8e.s[14]++;
	var requestPlayreadyLicense = function requestPlayreadyLicense(keySystemOptions, messageBuffer, emeOptions, callback) {
	  cov_2136o8xm8e.f[1]++;
	  var messageContents = (cov_2136o8xm8e.s[15]++, getMessageContents(messageBuffer));
	  var message = (cov_2136o8xm8e.s[16]++, messageContents.message);
	  var headers = (cov_2136o8xm8e.s[17]++, mergeAndRemoveNull(messageContents.headers, emeOptions.emeHeaders, keySystemOptions.licenseHeaders));
	  cov_2136o8xm8e.s[18]++;
	  videojs.xhr({
	    uri: keySystemOptions.url,
	    method: 'post',
	    headers: headers,
	    body: message,
	    responseType: 'arraybuffer'
	  }, httpResponseHandler(callback, true));
	};

	var cov_35pu88uv6 = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/fairplay.js',
	      hash = 'cdec138835f66f4160380cc5701d3bba8e2a1d47',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/fairplay.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 13,
	          column: 35
	        },
	        end: {
	          line: 13,
	          column: 54
	        }
	      },
	      '1': {
	        start: {
	          line: 15,
	          column: 39
	        },
	        end: {
	          line: 50,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 16,
	          column: 2
	        },
	        end: {
	          line: 18,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 17,
	          column: 33
	        }
	      },
	      '4': {
	        start: {
	          line: 26,
	          column: 15
	        },
	        end: {
	          line: 26,
	          column: 16
	        }
	      },
	      '5': {
	        start: {
	          line: 27,
	          column: 17
	        },
	        end: {
	          line: 27,
	          column: 95
	        }
	      },
	      '6': {
	        start: {
	          line: 28,
	          column: 19
	        },
	        end: {
	          line: 28,
	          column: 39
	        }
	      },
	      '7': {
	        start: {
	          line: 29,
	          column: 24
	        },
	        end: {
	          line: 29,
	          column: 75
	        }
	      },
	      '8': {
	        start: {
	          line: 31,
	          column: 2
	        },
	        end: {
	          line: 31,
	          column: 30
	        }
	      },
	      '9': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 32
	        }
	      },
	      '10': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 34,
	          column: 50
	        }
	      },
	      '11': {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 35,
	          column: 14
	        }
	      },
	      '12': {
	        start: {
	          line: 37,
	          column: 18
	        },
	        end: {
	          line: 37,
	          column: 60
	        }
	      },
	      '13': {
	        start: {
	          line: 39,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 18
	        }
	      },
	      '14': {
	        start: {
	          line: 40,
	          column: 2
	        },
	        end: {
	          line: 40,
	          column: 31
	        }
	      },
	      '15': {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 52
	        }
	      },
	      '16': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 43,
	          column: 14
	        }
	      },
	      '17': {
	        start: {
	          line: 45,
	          column: 20
	        },
	        end: {
	          line: 45,
	          column: 67
	        }
	      },
	      '18': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 22
	        }
	      },
	      '19': {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 54
	        }
	      },
	      '20': {
	        start: {
	          line: 52,
	          column: 15
	        },
	        end: {
	          line: 104,
	          column: 1
	        }
	      },
	      '21': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 103,
	          column: 5
	        }
	      },
	      '22': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 5
	        }
	      },
	      '23': {
	        start: {
	          line: 55,
	          column: 6
	        },
	        end: {
	          line: 60,
	          column: 7
	        }
	      },
	      '24': {
	        start: {
	          line: 56,
	          column: 8
	        },
	        end: {
	          line: 56,
	          column: 82
	        }
	      },
	      '25': {
	        start: {
	          line: 58,
	          column: 8
	        },
	        end: {
	          line: 58,
	          column: 45
	        }
	      },
	      '26': {
	        start: {
	          line: 59,
	          column: 8
	        },
	        end: {
	          line: 59,
	          column: 15
	        }
	      },
	      '27': {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 73,
	          column: 5
	        }
	      },
	      '28': {
	        start: {
	          line: 66,
	          column: 6
	        },
	        end: {
	          line: 69,
	          column: 8
	        }
	      },
	      '29': {
	        start: {
	          line: 71,
	          column: 6
	        },
	        end: {
	          line: 71,
	          column: 45
	        }
	      },
	      '30': {
	        start: {
	          line: 72,
	          column: 6
	        },
	        end: {
	          line: 72,
	          column: 13
	        }
	      },
	      '31': {
	        start: {
	          line: 75,
	          column: 4
	        },
	        end: {
	          line: 75,
	          column: 42
	        }
	      },
	      '32': {
	        start: {
	          line: 77,
	          column: 4
	        },
	        end: {
	          line: 77,
	          column: 37
	        }
	      },
	      '33': {
	        start: {
	          line: 79,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 7
	        }
	      },
	      '34': {
	        start: {
	          line: 80,
	          column: 6
	        },
	        end: {
	          line: 90,
	          column: 9
	        }
	      },
	      '35': {
	        start: {
	          line: 81,
	          column: 8
	        },
	        end: {
	          line: 83,
	          column: 9
	        }
	      },
	      '36': {
	        start: {
	          line: 82,
	          column: 10
	        },
	        end: {
	          line: 82,
	          column: 54
	        }
	      },
	      '37': {
	        start: {
	          line: 84,
	          column: 8
	        },
	        end: {
	          line: 87,
	          column: 9
	        }
	      },
	      '38': {
	        start: {
	          line: 85,
	          column: 10
	        },
	        end: {
	          line: 85,
	          column: 22
	        }
	      },
	      '39': {
	        start: {
	          line: 86,
	          column: 10
	        },
	        end: {
	          line: 86,
	          column: 17
	        }
	      },
	      '40': {
	        start: {
	          line: 89,
	          column: 8
	        },
	        end: {
	          line: 89,
	          column: 51
	        }
	      },
	      '41': {
	        start: {
	          line: 93,
	          column: 4
	        },
	        end: {
	          line: 95,
	          column: 7
	        }
	      },
	      '42': {
	        start: {
	          line: 94,
	          column: 6
	        },
	        end: {
	          line: 94,
	          column: 16
	        }
	      },
	      '43': {
	        start: {
	          line: 98,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 7
	        }
	      },
	      '44': {
	        start: {
	          line: 99,
	          column: 20
	        },
	        end: {
	          line: 99,
	          column: 36
	        }
	      },
	      '45': {
	        start: {
	          line: 101,
	          column: 6
	        },
	        end: {
	          line: 101,
	          column: 85
	        }
	      },
	      '46': {
	        start: {
	          line: 106,
	          column: 37
	        },
	        end: {
	          line: 129,
	          column: 1
	        }
	      },
	      '47': {
	        start: {
	          line: 107,
	          column: 2
	        },
	        end: {
	          line: 128,
	          column: 4
	        }
	      },
	      '48': {
	        start: {
	          line: 108,
	          column: 20
	        },
	        end: {
	          line: 111,
	          column: 5
	        }
	      },
	      '49': {
	        start: {
	          line: 113,
	          column: 4
	        },
	        end: {
	          line: 127,
	          column: 8
	        }
	      },
	      '50': {
	        start: {
	          line: 118,
	          column: 6
	        },
	        end: {
	          line: 121,
	          column: 7
	        }
	      },
	      '51': {
	        start: {
	          line: 119,
	          column: 8
	        },
	        end: {
	          line: 119,
	          column: 22
	        }
	      },
	      '52': {
	        start: {
	          line: 120,
	          column: 8
	        },
	        end: {
	          line: 120,
	          column: 15
	        }
	      },
	      '53': {
	        start: {
	          line: 126,
	          column: 6
	        },
	        end: {
	          line: 126,
	          column: 46
	        }
	      },
	      '54': {
	        start: {
	          line: 131,
	          column: 35
	        },
	        end: {
	          line: 133,
	          column: 1
	        }
	      },
	      '55': {
	        start: {
	          line: 132,
	          column: 2
	        },
	        end: {
	          line: 132,
	          column: 44
	        }
	      },
	      '56': {
	        start: {
	          line: 135,
	          column: 33
	        },
	        end: {
	          line: 151,
	          column: 1
	        }
	      },
	      '57': {
	        start: {
	          line: 136,
	          column: 2
	        },
	        end: {
	          line: 150,
	          column: 4
	        }
	      },
	      '58': {
	        start: {
	          line: 137,
	          column: 20
	        },
	        end: {
	          line: 141,
	          column: 5
	        }
	      },
	      '59': {
	        start: {
	          line: 143,
	          column: 4
	        },
	        end: {
	          line: 149,
	          column: 44
	        }
	      },
	      '60': {
	        start: {
	          line: 153,
	          column: 17
	        },
	        end: {
	          line: 181,
	          column: 1
	        }
	      },
	      '61': {
	        start: {
	          line: 154,
	          column: 26
	        },
	        end: {
	          line: 154,
	          column: 65
	        }
	      },
	      '62': {
	        start: {
	          line: 155,
	          column: 25
	        },
	        end: {
	          line: 156,
	          column: 42
	        }
	      },
	      '63': {
	        start: {
	          line: 157,
	          column: 23
	        },
	        end: {
	          line: 157,
	          column: 74
	        }
	      },
	      '64': {
	        start: {
	          line: 158,
	          column: 21
	        },
	        end: {
	          line: 159,
	          column: 38
	        }
	      },
	      '65': {
	        start: {
	          line: 161,
	          column: 2
	        },
	        end: {
	          line: 180,
	          column: 5
	        }
	      },
	      '66': {
	        start: {
	          line: 162,
	          column: 4
	        },
	        end: {
	          line: 169,
	          column: 7
	        }
	      },
	      '67': {
	        start: {
	          line: 163,
	          column: 6
	        },
	        end: {
	          line: 166,
	          column: 7
	        }
	      },
	      '68': {
	        start: {
	          line: 164,
	          column: 8
	        },
	        end: {
	          line: 164,
	          column: 20
	        }
	      },
	      '69': {
	        start: {
	          line: 165,
	          column: 8
	        },
	        end: {
	          line: 165,
	          column: 15
	        }
	      },
	      '70': {
	        start: {
	          line: 168,
	          column: 6
	        },
	        end: {
	          line: 168,
	          column: 20
	        }
	      },
	      '71': {
	        start: {
	          line: 171,
	          column: 4
	        },
	        end: {
	          line: 179,
	          column: 7
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 15,
	            column: 39
	          },
	          end: {
	            line: 15,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 15,
	            column: 65
	          },
	          end: {
	            line: 50,
	            column: 1
	          }
	        },
	        line: 15
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 52,
	            column: 15
	          },
	          end: {
	            line: 52,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 86
	          },
	          end: {
	            line: 104,
	            column: 1
	          }
	        },
	        line: 52
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 53,
	            column: 21
	          },
	          end: {
	            line: 53,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 53,
	            column: 42
	          },
	          end: {
	            line: 103,
	            column: 3
	          }
	        },
	        line: 53
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 79,
	            column: 52
	          },
	          end: {
	            line: 79,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 79,
	            column: 63
	          },
	          end: {
	            line: 91,
	            column: 5
	          }
	        },
	        line: 79
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 80,
	            column: 52
	          },
	          end: {
	            line: 80,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 80,
	            column: 70
	          },
	          end: {
	            line: 90,
	            column: 7
	          }
	        },
	        line: 80
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 93,
	            column: 50
	          },
	          end: {
	            line: 93,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 93,
	            column: 56
	          },
	          end: {
	            line: 95,
	            column: 5
	          }
	        },
	        line: 93
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 98,
	            column: 50
	          },
	          end: {
	            line: 98,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 98,
	            column: 56
	          },
	          end: {
	            line: 102,
	            column: 5
	          }
	        },
	        line: 98
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 106,
	            column: 37
	          },
	          end: {
	            line: 106,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 106,
	            column: 58
	          },
	          end: {
	            line: 129,
	            column: 1
	          }
	        },
	        line: 106
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 107,
	            column: 9
	          },
	          end: {
	            line: 107,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 107,
	            column: 35
	          },
	          end: {
	            line: 128,
	            column: 3
	          }
	        },
	        line: 107
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 117,
	            column: 27
	          },
	          end: {
	            line: 117,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 117,
	            column: 45
	          },
	          end: {
	            line: 127,
	            column: 5
	          }
	        },
	        line: 117
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 131,
	            column: 35
	          },
	          end: {
	            line: 131,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 131,
	            column: 67
	          },
	          end: {
	            line: 133,
	            column: 1
	          }
	        },
	        line: 131
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 135,
	            column: 33
	          },
	          end: {
	            line: 135,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 135,
	            column: 54
	          },
	          end: {
	            line: 151,
	            column: 1
	          }
	        },
	        line: 135
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 136,
	            column: 9
	          },
	          end: {
	            line: 136,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 136,
	            column: 58
	          },
	          end: {
	            line: 150,
	            column: 3
	          }
	        },
	        line: 136
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 153,
	            column: 17
	          },
	          end: {
	            line: 153,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 153,
	            column: 59
	          },
	          end: {
	            line: 181,
	            column: 1
	          }
	        },
	        line: 153
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 161,
	            column: 21
	          },
	          end: {
	            line: 161,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 161,
	            column: 42
	          },
	          end: {
	            line: 170,
	            column: 3
	          }
	        },
	        line: 161
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 162,
	            column: 28
	          },
	          end: {
	            line: 162,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 162,
	            column: 43
	          },
	          end: {
	            line: 169,
	            column: 5
	          }
	        },
	        line: 162
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 170,
	            column: 10
	          },
	          end: {
	            line: 170,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 170,
	            column: 20
	          },
	          end: {
	            line: 180,
	            column: 3
	          }
	        },
	        line: 170
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        }],
	        line: 16
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 4
	          },
	          end: {
	            line: 61,
	            column: 5
	          }
	        }],
	        line: 54
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 81,
	            column: 8
	          },
	          end: {
	            line: 83,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 81,
	            column: 8
	          },
	          end: {
	            line: 83,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 81,
	            column: 8
	          },
	          end: {
	            line: 83,
	            column: 9
	          }
	        }],
	        line: 81
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 84,
	            column: 8
	          },
	          end: {
	            line: 87,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 84,
	            column: 8
	          },
	          end: {
	            line: 87,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 8
	          },
	          end: {
	            line: 87,
	            column: 9
	          }
	        }],
	        line: 84
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 118,
	            column: 6
	          },
	          end: {
	            line: 121,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 118,
	            column: 6
	          },
	          end: {
	            line: 121,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 6
	          },
	          end: {
	            line: 121,
	            column: 7
	          }
	        }],
	        line: 118
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 155,
	            column: 25
	          },
	          end: {
	            line: 156,
	            column: 42
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 155,
	            column: 25
	          },
	          end: {
	            line: 155,
	            column: 55
	          }
	        }, {
	          start: {
	            line: 156,
	            column: 4
	          },
	          end: {
	            line: 156,
	            column: 42
	          }
	        }],
	        line: 155
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 157,
	            column: 23
	          },
	          end: {
	            line: 157,
	            column: 74
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 157,
	            column: 23
	          },
	          end: {
	            line: 157,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 157,
	            column: 55
	          },
	          end: {
	            line: 157,
	            column: 74
	          }
	        }],
	        line: 157
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 158,
	            column: 21
	          },
	          end: {
	            line: 159,
	            column: 38
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 158,
	            column: 21
	          },
	          end: {
	            line: 158,
	            column: 47
	          }
	        }, {
	          start: {
	            line: 159,
	            column: 4
	          },
	          end: {
	            line: 159,
	            column: 38
	          }
	        }],
	        line: 158
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 166,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 166,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 163,
	            column: 6
	          },
	          end: {
	            line: 166,
	            column: 7
	          }
	        }],
	        line: 163
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var FAIRPLAY_KEY_SYSTEM = (cov_35pu88uv6.s[0]++, 'com.apple.fps.1_0');
	cov_35pu88uv6.s[1]++;

	var concatInitDataIdAndCertificate = function concatInitDataIdAndCertificate(_ref) {
	  var initData = _ref.initData,
	      id = _ref.id,
	      cert = _ref.cert;
	  cov_35pu88uv6.f[0]++;
	  cov_35pu88uv6.s[2]++;

	  if (typeof id === 'string') {
	    cov_35pu88uv6.b[0][0]++;
	    cov_35pu88uv6.s[3]++;
	    id = stringToUint16Array(id);
	  } else {
	    cov_35pu88uv6.b[0][1]++;
	  }

	  var offset = (cov_35pu88uv6.s[4]++, 0);
	  var buffer = (cov_35pu88uv6.s[5]++, new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength));
	  var dataView = (cov_35pu88uv6.s[6]++, new DataView(buffer));
	  var initDataArray = (cov_35pu88uv6.s[7]++, new Uint8Array(buffer, offset, initData.byteLength));
	  cov_35pu88uv6.s[8]++;
	  initDataArray.set(initData);
	  cov_35pu88uv6.s[9]++;
	  offset += initData.byteLength;
	  cov_35pu88uv6.s[10]++;
	  dataView.setUint32(offset, id.byteLength, true);
	  cov_35pu88uv6.s[11]++;
	  offset += 4;
	  var idArray = (cov_35pu88uv6.s[12]++, new Uint16Array(buffer, offset, id.length));
	  cov_35pu88uv6.s[13]++;
	  idArray.set(id);
	  cov_35pu88uv6.s[14]++;
	  offset += idArray.byteLength;
	  cov_35pu88uv6.s[15]++;
	  dataView.setUint32(offset, cert.byteLength, true);
	  cov_35pu88uv6.s[16]++;
	  offset += 4;
	  var certArray = (cov_35pu88uv6.s[17]++, new Uint8Array(buffer, offset, cert.byteLength));
	  cov_35pu88uv6.s[18]++;
	  certArray.set(cert);
	  cov_35pu88uv6.s[19]++;
	  return new Uint8Array(buffer, 0, buffer.byteLength);
	};

	cov_35pu88uv6.s[20]++;

	var addKey = function addKey(_ref2) {
	  var video = _ref2.video,
	      contentId = _ref2.contentId,
	      initData = _ref2.initData,
	      cert = _ref2.cert,
	      options = _ref2.options,
	      getLicense = _ref2.getLicense,
	      eventBus = _ref2.eventBus;
	  cov_35pu88uv6.f[1]++;
	  cov_35pu88uv6.s[21]++;
	  return new Promise(function (resolve, reject) {
	    cov_35pu88uv6.f[2]++;
	    cov_35pu88uv6.s[22]++;

	    if (!video.webkitKeys) {
	      cov_35pu88uv6.b[1][0]++;
	      cov_35pu88uv6.s[23]++;

	      try {
	        cov_35pu88uv6.s[24]++;
	        video.webkitSetMediaKeys(new window_1.WebKitMediaKeys(FAIRPLAY_KEY_SYSTEM));
	      } catch (error) {
	        cov_35pu88uv6.s[25]++;
	        reject('Could not create MediaKeys');
	        cov_35pu88uv6.s[26]++;
	        return;
	      }
	    } else {
	      cov_35pu88uv6.b[1][1]++;
	    }

	    var keySession;
	    cov_35pu88uv6.s[27]++;

	    try {
	      cov_35pu88uv6.s[28]++;
	      keySession = video.webkitKeys.createSession('video/mp4', concatInitDataIdAndCertificate({
	        id: contentId,
	        initData: initData,
	        cert: cert
	      }));
	    } catch (error) {
	      cov_35pu88uv6.s[29]++;
	      reject('Could not create key session');
	      cov_35pu88uv6.s[30]++;
	      return;
	    }

	    cov_35pu88uv6.s[31]++;
	    eventBus.trigger('keysessioncreated');
	    cov_35pu88uv6.s[32]++;
	    keySession.contentId = contentId;
	    cov_35pu88uv6.s[33]++;
	    keySession.addEventListener('webkitkeymessage', function (event) {
	      cov_35pu88uv6.f[3]++;
	      cov_35pu88uv6.s[34]++;
	      getLicense(options, contentId, event.message, function (err, license) {
	        cov_35pu88uv6.f[4]++;
	        cov_35pu88uv6.s[35]++;

	        if (eventBus) {
	          cov_35pu88uv6.b[2][0]++;
	          cov_35pu88uv6.s[36]++;
	          eventBus.trigger('licenserequestattempted');
	        } else {
	          cov_35pu88uv6.b[2][1]++;
	        }

	        cov_35pu88uv6.s[37]++;

	        if (err) {
	          cov_35pu88uv6.b[3][0]++;
	          cov_35pu88uv6.s[38]++;
	          reject(err);
	          cov_35pu88uv6.s[39]++;
	          return;
	        } else {
	          cov_35pu88uv6.b[3][1]++;
	        }

	        cov_35pu88uv6.s[40]++;
	        keySession.update(new Uint8Array(license));
	      });
	    });
	    cov_35pu88uv6.s[41]++;
	    keySession.addEventListener('webkitkeyadded', function () {
	      cov_35pu88uv6.f[5]++;
	      cov_35pu88uv6.s[42]++;
	      resolve();
	    });
	    cov_35pu88uv6.s[43]++;
	    keySession.addEventListener('webkitkeyerror', function () {
	      cov_35pu88uv6.f[6]++;
	      var error = (cov_35pu88uv6.s[44]++, keySession.error);
	      cov_35pu88uv6.s[45]++;
	      reject("KeySession error: code " + error.code + ", systemCode " + error.systemCode);
	    });
	  });
	};

	cov_35pu88uv6.s[46]++;
	var defaultGetCertificate = function defaultGetCertificate(fairplayOptions) {
	  cov_35pu88uv6.f[7]++;
	  cov_35pu88uv6.s[47]++;
	  return function (emeOptions, callback) {
	    cov_35pu88uv6.f[8]++;
	    var headers = (cov_35pu88uv6.s[48]++, mergeAndRemoveNull(emeOptions.emeHeaders, fairplayOptions.certificateHeaders));
	    cov_35pu88uv6.s[49]++;
	    videojs.xhr({
	      uri: fairplayOptions.certificateUri,
	      responseType: 'arraybuffer',
	      headers: headers
	    }, httpResponseHandler(function (err, license) {
	      cov_35pu88uv6.f[9]++;
	      cov_35pu88uv6.s[50]++;

	      if (err) {
	        cov_35pu88uv6.b[4][0]++;
	        cov_35pu88uv6.s[51]++;
	        callback(err);
	        cov_35pu88uv6.s[52]++;
	        return;
	      } else {
	        cov_35pu88uv6.b[4][1]++;
	      }

	      cov_35pu88uv6.s[53]++;
	      callback(null, new Uint8Array(license));
	    }));
	  };
	};
	cov_35pu88uv6.s[54]++;
	var defaultGetContentId = function defaultGetContentId(emeOptions, initDataString) {
	  cov_35pu88uv6.f[10]++;
	  cov_35pu88uv6.s[55]++;
	  return getHostnameFromUri(initDataString);
	};
	cov_35pu88uv6.s[56]++;
	var defaultGetLicense = function defaultGetLicense(fairplayOptions) {
	  cov_35pu88uv6.f[11]++;
	  cov_35pu88uv6.s[57]++;
	  return function (emeOptions, contentId, keyMessage, callback) {
	    cov_35pu88uv6.f[12]++;
	    var headers = (cov_35pu88uv6.s[58]++, mergeAndRemoveNull({
	      'Content-type': 'application/octet-stream'
	    }, emeOptions.emeHeaders, fairplayOptions.licenseHeaders));
	    cov_35pu88uv6.s[59]++;
	    videojs.xhr({
	      uri: fairplayOptions.licenseUri,
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: keyMessage,
	      headers: headers
	    }, httpResponseHandler(callback, true));
	  };
	};
	cov_35pu88uv6.s[60]++;

	var fairplay = function fairplay(_ref3) {
	  var video = _ref3.video,
	      initData = _ref3.initData,
	      options = _ref3.options,
	      eventBus = _ref3.eventBus;
	  cov_35pu88uv6.f[13]++;
	  var fairplayOptions = (cov_35pu88uv6.s[61]++, options.keySystems[FAIRPLAY_KEY_SYSTEM]);
	  var getCertificate = (cov_35pu88uv6.s[62]++, (cov_35pu88uv6.b[5][0]++, fairplayOptions.getCertificate) || (cov_35pu88uv6.b[5][1]++, defaultGetCertificate(fairplayOptions)));
	  var getContentId = (cov_35pu88uv6.s[63]++, (cov_35pu88uv6.b[6][0]++, fairplayOptions.getContentId) || (cov_35pu88uv6.b[6][1]++, defaultGetContentId));
	  var getLicense = (cov_35pu88uv6.s[64]++, (cov_35pu88uv6.b[7][0]++, fairplayOptions.getLicense) || (cov_35pu88uv6.b[7][1]++, defaultGetLicense(fairplayOptions)));
	  cov_35pu88uv6.s[65]++;
	  return new Promise(function (resolve, reject) {
	    cov_35pu88uv6.f[14]++;
	    cov_35pu88uv6.s[66]++;
	    getCertificate(options, function (err, cert) {
	      cov_35pu88uv6.f[15]++;
	      cov_35pu88uv6.s[67]++;

	      if (err) {
	        cov_35pu88uv6.b[8][0]++;
	        cov_35pu88uv6.s[68]++;
	        reject(err);
	        cov_35pu88uv6.s[69]++;
	        return;
	      } else {
	        cov_35pu88uv6.b[8][1]++;
	      }

	      cov_35pu88uv6.s[70]++;
	      resolve(cert);
	    });
	  }).then(function (cert) {
	    cov_35pu88uv6.f[16]++;
	    cov_35pu88uv6.s[71]++;
	    return addKey({
	      video: video,
	      cert: cert,
	      initData: initData,
	      getLicense: getLicense,
	      options: options,
	      contentId: getContentId(options, uint16ArrayToString(initData)),
	      eventBus: eventBus
	    });
	  });
	};

	var cov_10nrc4bste = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/eme.js',
	      hash = '235f62b40d356fa5f6922339196f1fcba793ec73',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/eme.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 12,
	          column: 28
	        },
	        end: {
	          line: 12,
	          column: 68
	        }
	      },
	      '1': {
	        start: {
	          line: 12,
	          column: 37
	        },
	        end: {
	          line: 12,
	          column: 68
	        }
	      },
	      '2': {
	        start: {
	          line: 25,
	          column: 42
	        },
	        end: {
	          line: 72,
	          column: 1
	        }
	      },
	      '3': {
	        start: {
	          line: 26,
	          column: 2
	        },
	        end: {
	          line: 28,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 27,
	          column: 52
	        }
	      },
	      '5': {
	        start: {
	          line: 30,
	          column: 21
	        },
	        end: {
	          line: 30,
	          column: 51
	        }
	      },
	      '6': {
	        start: {
	          line: 31,
	          column: 33
	        },
	        end: {
	          line: 31,
	          column: 35
	        }
	      },
	      '7': {
	        start: {
	          line: 32,
	          column: 24
	        },
	        end: {
	          line: 34,
	          column: 34
	        }
	      },
	      '8': {
	        start: {
	          line: 35,
	          column: 27
	        },
	        end: {
	          line: 35,
	          column: 60
	        }
	      },
	      '9': {
	        start: {
	          line: 36,
	          column: 26
	        },
	        end: {
	          line: 36,
	          column: 58
	        }
	      },
	      '10': {
	        start: {
	          line: 37,
	          column: 27
	        },
	        end: {
	          line: 39,
	          column: 37
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 26
	        },
	        end: {
	          line: 40,
	          column: 58
	        }
	      },
	      '12': {
	        start: {
	          line: 41,
	          column: 26
	        },
	        end: {
	          line: 41,
	          column: 58
	        }
	      },
	      '13': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 51,
	          column: 3
	        }
	      },
	      '14': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 50,
	          column: 6
	        }
	      },
	      '15': {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 61,
	          column: 3
	        }
	      },
	      '16': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 6
	        }
	      },
	      '17': {
	        start: {
	          line: 63,
	          column: 2
	        },
	        end: {
	          line: 65,
	          column: 3
	        }
	      },
	      '18': {
	        start: {
	          line: 64,
	          column: 4
	        },
	        end: {
	          line: 64,
	          column: 61
	        }
	      },
	      '19': {
	        start: {
	          line: 67,
	          column: 2
	        },
	        end: {
	          line: 69,
	          column: 3
	        }
	      },
	      '20': {
	        start: {
	          line: 68,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 57
	        }
	      },
	      '21': {
	        start: {
	          line: 71,
	          column: 2
	        },
	        end: {
	          line: 71,
	          column: 34
	        }
	      },
	      '22': {
	        start: {
	          line: 74,
	          column: 37
	        },
	        end: {
	          line: 93,
	          column: 1
	        }
	      },
	      '23': {
	        start: {
	          line: 80,
	          column: 2
	        },
	        end: {
	          line: 90,
	          column: 5
	        }
	      },
	      '24': {
	        start: {
	          line: 81,
	          column: 36
	        },
	        end: {
	          line: 81,
	          column: 96
	        }
	      },
	      '25': {
	        start: {
	          line: 83,
	          column: 4
	        },
	        end: {
	          line: 89,
	          column: 5
	        }
	      },
	      '26': {
	        start: {
	          line: 84,
	          column: 6
	        },
	        end: {
	          line: 85,
	          column: 89
	        }
	      },
	      '27': {
	        start: {
	          line: 87,
	          column: 6
	        },
	        end: {
	          line: 88,
	          column: 90
	        }
	      },
	      '28': {
	        start: {
	          line: 88,
	          column: 8
	        },
	        end: {
	          line: 88,
	          column: 88
	        }
	      },
	      '29': {
	        start: {
	          line: 92,
	          column: 2
	        },
	        end: {
	          line: 92,
	          column: 17
	        }
	      },
	      '30': {
	        start: {
	          line: 95,
	          column: 30
	        },
	        end: {
	          line: 179,
	          column: 1
	        }
	      },
	      '31': {
	        start: {
	          line: 105,
	          column: 6
	        },
	        end: {
	          line: 105,
	          column: 20
	        }
	      },
	      '32': {
	        start: {
	          line: 107,
	          column: 21
	        },
	        end: {
	          line: 107,
	          column: 46
	        }
	      },
	      '33': {
	        start: {
	          line: 109,
	          column: 2
	        },
	        end: {
	          line: 109,
	          column: 40
	        }
	      },
	      '34': {
	        start: {
	          line: 111,
	          column: 2
	        },
	        end: {
	          line: 178,
	          column: 5
	        }
	      },
	      '35': {
	        start: {
	          line: 113,
	          column: 4
	        },
	        end: {
	          line: 126,
	          column: 14
	        }
	      },
	      '36': {
	        start: {
	          line: 115,
	          column: 6
	        },
	        end: {
	          line: 117,
	          column: 7
	        }
	      },
	      '37': {
	        start: {
	          line: 116,
	          column: 8
	        },
	        end: {
	          line: 116,
	          column: 15
	        }
	      },
	      '38': {
	        start: {
	          line: 119,
	          column: 6
	        },
	        end: {
	          line: 125,
	          column: 11
	        }
	      },
	      '39': {
	        start: {
	          line: 121,
	          column: 10
	        },
	        end: {
	          line: 121,
	          column: 46
	        }
	      },
	      '40': {
	        start: {
	          line: 124,
	          column: 10
	        },
	        end: {
	          line: 124,
	          column: 22
	        }
	      },
	      '41': {
	        start: {
	          line: 128,
	          column: 4
	        },
	        end: {
	          line: 173,
	          column: 14
	        }
	      },
	      '42': {
	        start: {
	          line: 129,
	          column: 20
	        },
	        end: {
	          line: 129,
	          column: 25
	        }
	      },
	      '43': {
	        start: {
	          line: 132,
	          column: 6
	        },
	        end: {
	          line: 159,
	          column: 9
	        }
	      },
	      '44': {
	        start: {
	          line: 136,
	          column: 8
	        },
	        end: {
	          line: 141,
	          column: 11
	        }
	      },
	      '45': {
	        start: {
	          line: 142,
	          column: 8
	        },
	        end: {
	          line: 158,
	          column: 9
	        }
	      },
	      '46': {
	        start: {
	          line: 147,
	          column: 10
	        },
	        end: {
	          line: 147,
	          column: 25
	        }
	      },
	      '47': {
	        start: {
	          line: 148,
	          column: 10
	        },
	        end: {
	          line: 148,
	          column: 16
	        }
	      },
	      '48': {
	        start: {
	          line: 151,
	          column: 12
	        },
	        end: {
	          line: 152,
	          column: 72
	        }
	      },
	      '49': {
	        start: {
	          line: 156,
	          column: 10
	        },
	        end: {
	          line: 156,
	          column: 43
	        }
	      },
	      '50': {
	        start: {
	          line: 157,
	          column: 10
	        },
	        end: {
	          line: 157,
	          column: 16
	        }
	      },
	      '51': {
	        start: {
	          line: 161,
	          column: 6
	        },
	        end: {
	          line: 172,
	          column: 7
	        }
	      },
	      '52': {
	        start: {
	          line: 168,
	          column: 8
	        },
	        end: {
	          line: 171,
	          column: 11
	        }
	      },
	      '53': {
	        start: {
	          line: 169,
	          column: 10
	        },
	        end: {
	          line: 169,
	          column: 34
	        }
	      },
	      '54': {
	        start: {
	          line: 170,
	          column: 10
	        },
	        end: {
	          line: 170,
	          column: 41
	        }
	      },
	      '55': {
	        start: {
	          line: 175,
	          column: 4
	        },
	        end: {
	          line: 177,
	          column: 7
	        }
	      },
	      '56': {
	        start: {
	          line: 176,
	          column: 6
	        },
	        end: {
	          line: 176,
	          column: 59
	        }
	      },
	      '57': {
	        start: {
	          line: 208,
	          column: 26
	        },
	        end: {
	          line: 236,
	          column: 1
	        }
	      },
	      '58': {
	        start: {
	          line: 218,
	          column: 22
	        },
	        end: {
	          line: 226,
	          column: 3
	        }
	      },
	      '59': {
	        start: {
	          line: 228,
	          column: 2
	        },
	        end: {
	          line: 231,
	          column: 3
	        }
	      },
	      '60': {
	        start: {
	          line: 229,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 50
	        }
	      },
	      '61': {
	        start: {
	          line: 230,
	          column: 4
	        },
	        end: {
	          line: 230,
	          column: 39
	        }
	      },
	      '62': {
	        start: {
	          line: 233,
	          column: 2
	        },
	        end: {
	          line: 233,
	          column: 45
	        }
	      },
	      '63': {
	        start: {
	          line: 235,
	          column: 2
	        },
	        end: {
	          line: 235,
	          column: 27
	        }
	      },
	      '64': {
	        start: {
	          line: 257,
	          column: 34
	        },
	        end: {
	          line: 291,
	          column: 1
	        }
	      },
	      '65': {
	        start: {
	          line: 264,
	          column: 2
	        },
	        end: {
	          line: 264,
	          column: 43
	        }
	      },
	      '66': {
	        start: {
	          line: 265,
	          column: 19
	        },
	        end: {
	          line: 265,
	          column: 21
	        }
	      },
	      '67': {
	        start: {
	          line: 267,
	          column: 2
	        },
	        end: {
	          line: 269,
	          column: 3
	        }
	      },
	      '68': {
	        start: {
	          line: 268,
	          column: 4
	        },
	        end: {
	          line: 268,
	          column: 70
	        }
	      },
	      '69': {
	        start: {
	          line: 271,
	          column: 2
	        },
	        end: {
	          line: 284,
	          column: 3
	        }
	      },
	      '70': {
	        start: {
	          line: 272,
	          column: 17
	        },
	        end: {
	          line: 272,
	          column: 44
	        }
	      },
	      '71': {
	        start: {
	          line: 274,
	          column: 4
	        },
	        end: {
	          line: 283,
	          column: 8
	        }
	      },
	      '72': {
	        start: {
	          line: 286,
	          column: 2
	        },
	        end: {
	          line: 286,
	          column: 32
	        }
	      },
	      '73': {
	        start: {
	          line: 288,
	          column: 2
	        },
	        end: {
	          line: 288,
	          column: 54
	        }
	      },
	      '74': {
	        start: {
	          line: 290,
	          column: 2
	        },
	        end: {
	          line: 290,
	          column: 31
	        }
	      },
	      '75': {
	        start: {
	          line: 293,
	          column: 35
	        },
	        end: {
	          line: 295,
	          column: 1
	        }
	      },
	      '76': {
	        start: {
	          line: 293,
	          column: 57
	        },
	        end: {
	          line: 295,
	          column: 1
	        }
	      },
	      '77': {
	        start: {
	          line: 294,
	          column: 2
	        },
	        end: {
	          line: 294,
	          column: 78
	        }
	      },
	      '78': {
	        start: {
	          line: 297,
	          column: 33
	        },
	        end: {
	          line: 311,
	          column: 1
	        }
	      },
	      '79': {
	        start: {
	          line: 297,
	          column: 55
	        },
	        end: {
	          line: 311,
	          column: 1
	        }
	      },
	      '80': {
	        start: {
	          line: 298,
	          column: 18
	        },
	        end: {
	          line: 302,
	          column: 3
	        }
	      },
	      '81': {
	        start: {
	          line: 304,
	          column: 2
	        },
	        end: {
	          line: 310,
	          column: 42
	        }
	      },
	      '82': {
	        start: {
	          line: 313,
	          column: 28
	        },
	        end: {
	          line: 335,
	          column: 1
	        }
	      },
	      '83': {
	        start: {
	          line: 314,
	          column: 2
	        },
	        end: {
	          line: 334,
	          column: 4
	        }
	      },
	      '84': {
	        start: {
	          line: 315,
	          column: 4
	        },
	        end: {
	          line: 333,
	          column: 7
	        }
	      },
	      '85': {
	        start: {
	          line: 316,
	          column: 23
	        },
	        end: {
	          line: 326,
	          column: 7
	        }
	      },
	      '86': {
	        start: {
	          line: 317,
	          column: 8
	        },
	        end: {
	          line: 319,
	          column: 9
	        }
	      },
	      '87': {
	        start: {
	          line: 318,
	          column: 10
	        },
	        end: {
	          line: 318,
	          column: 54
	        }
	      },
	      '88': {
	        start: {
	          line: 320,
	          column: 8
	        },
	        end: {
	          line: 323,
	          column: 9
	        }
	      },
	      '89': {
	        start: {
	          line: 321,
	          column: 10
	        },
	        end: {
	          line: 321,
	          column: 22
	        }
	      },
	      '90': {
	        start: {
	          line: 322,
	          column: 10
	        },
	        end: {
	          line: 322,
	          column: 17
	        }
	      },
	      '91': {
	        start: {
	          line: 325,
	          column: 8
	        },
	        end: {
	          line: 325,
	          column: 25
	        }
	      },
	      '92': {
	        start: {
	          line: 328,
	          column: 6
	        },
	        end: {
	          line: 332,
	          column: 7
	        }
	      },
	      '93': {
	        start: {
	          line: 329,
	          column: 8
	        },
	        end: {
	          line: 329,
	          column: 82
	        }
	      },
	      '94': {
	        start: {
	          line: 331,
	          column: 8
	        },
	        end: {
	          line: 331,
	          column: 55
	        }
	      },
	      '95': {
	        start: {
	          line: 337,
	          column: 36
	        },
	        end: {
	          line: 375,
	          column: 1
	        }
	      },
	      '96': {
	        start: {
	          line: 338,
	          column: 2
	        },
	        end: {
	          line: 340,
	          column: 3
	        }
	      },
	      '97': {
	        start: {
	          line: 339,
	          column: 4
	        },
	        end: {
	          line: 339,
	          column: 49
	        }
	      },
	      '98': {
	        start: {
	          line: 342,
	          column: 2
	        },
	        end: {
	          line: 344,
	          column: 3
	        }
	      },
	      '99': {
	        start: {
	          line: 343,
	          column: 4
	        },
	        end: {
	          line: 343,
	          column: 55
	        }
	      },
	      '100': {
	        start: {
	          line: 346,
	          column: 2
	        },
	        end: {
	          line: 348,
	          column: 3
	        }
	      },
	      '101': {
	        start: {
	          line: 347,
	          column: 4
	        },
	        end: {
	          line: 347,
	          column: 101
	        }
	      },
	      '102': {
	        start: {
	          line: 350,
	          column: 21
	        },
	        end: {
	          line: 350,
	          column: 51
	        }
	      },
	      '103': {
	        start: {
	          line: 352,
	          column: 2
	        },
	        end: {
	          line: 354,
	          column: 3
	        }
	      },
	      '104': {
	        start: {
	          line: 353,
	          column: 4
	        },
	        end: {
	          line: 353,
	          column: 86
	        }
	      },
	      '105': {
	        start: {
	          line: 356,
	          column: 2
	        },
	        end: {
	          line: 358,
	          column: 3
	        }
	      },
	      '106': {
	        start: {
	          line: 357,
	          column: 4
	        },
	        end: {
	          line: 357,
	          column: 105
	        }
	      },
	      '107': {
	        start: {
	          line: 360,
	          column: 2
	        },
	        end: {
	          line: 362,
	          column: 3
	        }
	      },
	      '108': {
	        start: {
	          line: 361,
	          column: 4
	        },
	        end: {
	          line: 361,
	          column: 64
	        }
	      },
	      '109': {
	        start: {
	          line: 364,
	          column: 2
	        },
	        end: {
	          line: 372,
	          column: 3
	        }
	      },
	      '110': {
	        start: {
	          line: 365,
	          column: 4
	        },
	        end: {
	          line: 371,
	          column: 5
	        }
	      },
	      '111': {
	        start: {
	          line: 366,
	          column: 6
	        },
	        end: {
	          line: 366,
	          column: 81
	        }
	      },
	      '112': {
	        start: {
	          line: 367,
	          column: 11
	        },
	        end: {
	          line: 371,
	          column: 5
	        }
	      },
	      '113': {
	        start: {
	          line: 368,
	          column: 6
	        },
	        end: {
	          line: 368,
	          column: 80
	        }
	      },
	      '114': {
	        start: {
	          line: 370,
	          column: 6
	        },
	        end: {
	          line: 370,
	          column: 72
	        }
	      },
	      '115': {
	        start: {
	          line: 374,
	          column: 2
	        },
	        end: {
	          line: 374,
	          column: 26
	        }
	      },
	      '116': {
	        start: {
	          line: 377,
	          column: 33
	        },
	        end: {
	          line: 465,
	          column: 1
	        }
	      },
	      '117': {
	        start: {
	          line: 386,
	          column: 25
	        },
	        end: {
	          line: 386,
	          column: 42
	        }
	      },
	      '118': {
	        start: {
	          line: 387,
	          column: 20
	        },
	        end: {
	          line: 387,
	          column: 45
	        }
	      },
	      '119': {
	        start: {
	          line: 391,
	          column: 2
	        },
	        end: {
	          line: 398,
	          column: 3
	        }
	      },
	      '120': {
	        start: {
	          line: 392,
	          column: 4
	        },
	        end: {
	          line: 395,
	          column: 6
	        }
	      },
	      '121': {
	        start: {
	          line: 397,
	          column: 4
	        },
	        end: {
	          line: 397,
	          column: 29
	        }
	      },
	      '122': {
	        start: {
	          line: 400,
	          column: 20
	        },
	        end: {
	          line: 401,
	          column: 79
	        }
	      },
	      '123': {
	        start: {
	          line: 403,
	          column: 2
	        },
	        end: {
	          line: 447,
	          column: 3
	        }
	      },
	      '124': {
	        start: {
	          line: 405,
	          column: 4
	        },
	        end: {
	          line: 405,
	          column: 33
	        }
	      },
	      '125': {
	        start: {
	          line: 408,
	          column: 4
	        },
	        end: {
	          line: 408,
	          column: 34
	        }
	      },
	      '126': {
	        start: {
	          line: 412,
	          column: 4
	        },
	        end: {
	          line: 446,
	          column: 7
	        }
	      },
	      '127': {
	        start: {
	          line: 414,
	          column: 6
	        },
	        end: {
	          line: 414,
	          column: 34
	        }
	      },
	      '128': {
	        start: {
	          line: 416,
	          column: 6
	        },
	        end: {
	          line: 419,
	          column: 7
	        }
	      },
	      '129': {
	        start: {
	          line: 417,
	          column: 8
	        },
	        end: {
	          line: 417,
	          column: 33
	        }
	      },
	      '130': {
	        start: {
	          line: 418,
	          column: 8
	        },
	        end: {
	          line: 418,
	          column: 15
	        }
	      },
	      '131': {
	        start: {
	          line: 421,
	          column: 6
	        },
	        end: {
	          line: 430,
	          column: 9
	        }
	      },
	      '132': {
	        start: {
	          line: 422,
	          column: 8
	        },
	        end: {
	          line: 425,
	          column: 9
	        }
	      },
	      '133': {
	        start: {
	          line: 423,
	          column: 10
	        },
	        end: {
	          line: 423,
	          column: 22
	        }
	      },
	      '134': {
	        start: {
	          line: 424,
	          column: 10
	        },
	        end: {
	          line: 424,
	          column: 17
	        }
	      },
	      '135': {
	        start: {
	          line: 427,
	          column: 8
	        },
	        end: {
	          line: 427,
	          column: 27
	        }
	      },
	      '136': {
	        start: {
	          line: 429,
	          column: 8
	        },
	        end: {
	          line: 429,
	          column: 18
	        }
	      },
	      '137': {
	        start: {
	          line: 432,
	          column: 6
	        },
	        end: {
	          line: 432,
	          column: 47
	        }
	      },
	      '138': {
	        start: {
	          line: 434,
	          column: 6
	        },
	        end: {
	          line: 438,
	          column: 9
	        }
	      },
	      '139': {
	        start: {
	          line: 442,
	          column: 6
	        },
	        end: {
	          line: 444,
	          column: 7
	        }
	      },
	      '140': {
	        start: {
	          line: 443,
	          column: 8
	        },
	        end: {
	          line: 443,
	          column: 35
	        }
	      },
	      '141': {
	        start: {
	          line: 445,
	          column: 6
	        },
	        end: {
	          line: 445,
	          column: 82
	        }
	      },
	      '142': {
	        start: {
	          line: 449,
	          column: 2
	        },
	        end: {
	          line: 464,
	          column: 5
	        }
	      },
	      '143': {
	        start: {
	          line: 451,
	          column: 23
	        },
	        end: {
	          line: 452,
	          column: 82
	        }
	      },
	      '144': {
	        start: {
	          line: 454,
	          column: 4
	        },
	        end: {
	          line: 463,
	          column: 7
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 12,
	            column: 28
	          },
	          end: {
	            line: 12,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 12,
	            column: 37
	          },
	          end: {
	            line: 12,
	            column: 68
	          }
	        },
	        line: 12
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 25,
	            column: 42
	          },
	          end: {
	            line: 25,
	            column: 43
	          }
	        },
	        loc: {
	          start: {
	            line: 25,
	            column: 75
	          },
	          end: {
	            line: 72,
	            column: 1
	          }
	        },
	        line: 25
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 74,
	            column: 37
	          },
	          end: {
	            line: 74,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 74,
	            column: 53
	          },
	          end: {
	            line: 93,
	            column: 1
	          }
	        },
	        line: 74
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 80,
	            column: 34
	          },
	          end: {
	            line: 80,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 80,
	            column: 49
	          },
	          end: {
	            line: 90,
	            column: 3
	          }
	        },
	        line: 80
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 87,
	            column: 30
	          },
	          end: {
	            line: 87,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 88,
	            column: 8
	          },
	          end: {
	            line: 88,
	            column: 88
	          }
	        },
	        line: 88
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 95,
	            column: 30
	          },
	          end: {
	            line: 95,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 95,
	            column: 50
	          },
	          end: {
	            line: 179,
	            column: 1
	          }
	        },
	        line: 95
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 111,
	            column: 21
	          },
	          end: {
	            line: 111,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 111,
	            column: 42
	          },
	          end: {
	            line: 178,
	            column: 3
	          }
	        },
	        line: 111
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 113,
	            column: 43
	          },
	          end: {
	            line: 113,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 113,
	            column: 54
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        },
	        line: 113
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 120,
	            column: 14
	          },
	          end: {
	            line: 120,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 120,
	            column: 27
	          },
	          end: {
	            line: 122,
	            column: 9
	          }
	        },
	        line: 120
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 123,
	            column: 15
	          },
	          end: {
	            line: 123,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 123,
	            column: 24
	          },
	          end: {
	            line: 125,
	            column: 9
	          }
	        },
	        line: 123
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 128,
	            column: 53
	          },
	          end: {
	            line: 128,
	            column: 54
	          }
	        },
	        loc: {
	          start: {
	            line: 128,
	            column: 64
	          },
	          end: {
	            line: 173,
	            column: 5
	          }
	        },
	        line: 128
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 132,
	            column: 37
	          },
	          end: {
	            line: 132,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 132,
	            column: 56
	          },
	          end: {
	            line: 159,
	            column: 7
	          }
	        },
	        line: 132
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 168,
	            column: 32
	          },
	          end: {
	            line: 168,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 168,
	            column: 38
	          },
	          end: {
	            line: 171,
	            column: 9
	          }
	        },
	        line: 168
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 175,
	            column: 61
	          },
	          end: {
	            line: 175,
	            column: 62
	          }
	        },
	        loc: {
	          start: {
	            line: 175,
	            column: 67
	          },
	          end: {
	            line: 177,
	            column: 5
	          }
	        },
	        line: 175
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 208,
	            column: 26
	          },
	          end: {
	            line: 208,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 217,
	            column: 6
	          },
	          end: {
	            line: 236,
	            column: 1
	          }
	        },
	        line: 217
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 257,
	            column: 34
	          },
	          end: {
	            line: 257,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 261,
	            column: 6
	          },
	          end: {
	            line: 291,
	            column: 1
	          }
	        },
	        line: 261
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 293,
	            column: 35
	          },
	          end: {
	            line: 293,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 293,
	            column: 57
	          },
	          end: {
	            line: 295,
	            column: 1
	          }
	        },
	        line: 293
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 293,
	            column: 57
	          },
	          end: {
	            line: 293,
	            column: 58
	          }
	        },
	        loc: {
	          start: {
	            line: 293,
	            column: 95
	          },
	          end: {
	            line: 295,
	            column: 1
	          }
	        },
	        line: 293
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 297,
	            column: 33
	          },
	          end: {
	            line: 297,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 297,
	            column: 55
	          },
	          end: {
	            line: 311,
	            column: 1
	          }
	        },
	        line: 297
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 297,
	            column: 55
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        },
	        loc: {
	          start: {
	            line: 297,
	            column: 93
	          },
	          end: {
	            line: 311,
	            column: 1
	          }
	        },
	        line: 297
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 313,
	            column: 28
	          },
	          end: {
	            line: 313,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 313,
	            column: 67
	          },
	          end: {
	            line: 335,
	            column: 1
	          }
	        },
	        line: 313
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 314,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 314,
	            column: 48
	          },
	          end: {
	            line: 334,
	            column: 3
	          }
	        },
	        line: 314
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 315,
	            column: 23
	          },
	          end: {
	            line: 315,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 315,
	            column: 44
	          },
	          end: {
	            line: 333,
	            column: 5
	          }
	        },
	        line: 315
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 316,
	            column: 23
	          },
	          end: {
	            line: 316,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 316,
	            column: 46
	          },
	          end: {
	            line: 326,
	            column: 7
	          }
	        },
	        line: 316
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 337,
	            column: 36
	          },
	          end: {
	            line: 337,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 337,
	            column: 69
	          },
	          end: {
	            line: 375,
	            column: 1
	          }
	        },
	        line: 337
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 377,
	            column: 33
	          },
	          end: {
	            line: 377,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 385,
	            column: 6
	          },
	          end: {
	            line: 465,
	            column: 1
	          }
	        },
	        line: 385
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 412,
	            column: 35
	          },
	          end: {
	            line: 412,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 412,
	            column: 56
	          },
	          end: {
	            line: 431,
	            column: 5
	          }
	        },
	        line: 412
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 421,
	            column: 47
	          },
	          end: {
	            line: 421,
	            column: 48
	          }
	        },
	        loc: {
	          start: {
	            line: 421,
	            column: 62
	          },
	          end: {
	            line: 430,
	            column: 7
	          }
	        },
	        line: 421
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 431,
	            column: 12
	          },
	          end: {
	            line: 431,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 431,
	            column: 18
	          },
	          end: {
	            line: 433,
	            column: 5
	          }
	        },
	        line: 431
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 433,
	            column: 12
	          },
	          end: {
	            line: 433,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 433,
	            column: 34
	          },
	          end: {
	            line: 439,
	            column: 5
	          }
	        },
	        line: 433
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 439,
	            column: 13
	          },
	          end: {
	            line: 439,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 439,
	            column: 22
	          },
	          end: {
	            line: 446,
	            column: 5
	          }
	        },
	        line: 439
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 449,
	            column: 31
	          },
	          end: {
	            line: 449,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 449,
	            column: 37
	          },
	          end: {
	            line: 464,
	            column: 3
	          }
	        },
	        line: 449
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 26,
	            column: 2
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 26,
	            column: 2
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 26,
	            column: 2
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        }],
	        line: 26
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 32,
	            column: 24
	          },
	          end: {
	            line: 34,
	            column: 34
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 32,
	            column: 24
	          },
	          end: {
	            line: 32,
	            column: 54
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 5
	          },
	          end: {
	            line: 34,
	            column: 33
	          }
	        }],
	        line: 32
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 34,
	            column: 5
	          },
	          end: {
	            line: 34,
	            column: 33
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 34,
	            column: 18
	          },
	          end: {
	            line: 34,
	            column: 26
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 29
	          },
	          end: {
	            line: 34,
	            column: 33
	          }
	        }],
	        line: 34
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 37,
	            column: 27
	          },
	          end: {
	            line: 39,
	            column: 37
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 37,
	            column: 27
	          },
	          end: {
	            line: 37,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 5
	          },
	          end: {
	            line: 39,
	            column: 36
	          }
	        }],
	        line: 37
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 39,
	            column: 5
	          },
	          end: {
	            line: 39,
	            column: 36
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 39,
	            column: 18
	          },
	          end: {
	            line: 39,
	            column: 29
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 32
	          },
	          end: {
	            line: 39,
	            column: 36
	          }
	        }],
	        line: 39
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 43,
	            column: 2
	          },
	          end: {
	            line: 51,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 43,
	            column: 2
	          },
	          end: {
	            line: 51,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 43,
	            column: 2
	          },
	          end: {
	            line: 51,
	            column: 3
	          }
	        }],
	        line: 43
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 43,
	            column: 6
	          },
	          end: {
	            line: 43,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 43,
	            column: 6
	          },
	          end: {
	            line: 43,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 43,
	            column: 26
	          },
	          end: {
	            line: 43,
	            column: 41
	          }
	        }],
	        line: 43
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 47,
	            column: 9
	          },
	          end: {
	            line: 47,
	            column: 66
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 47,
	            column: 28
	          },
	          end: {
	            line: 47,
	            column: 61
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 64
	          },
	          end: {
	            line: 47,
	            column: 66
	          }
	        }],
	        line: 47
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 48,
	            column: 9
	          },
	          end: {
	            line: 48,
	            column: 63
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 48,
	            column: 27
	          },
	          end: {
	            line: 48,
	            column: 58
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 61
	          },
	          end: {
	            line: 48,
	            column: 63
	          }
	        }],
	        line: 48
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        }],
	        line: 53
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 53,
	            column: 6
	          },
	          end: {
	            line: 53,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 53,
	            column: 6
	          },
	          end: {
	            line: 53,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 26
	          },
	          end: {
	            line: 53,
	            column: 41
	          }
	        }],
	        line: 53
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 57,
	            column: 9
	          },
	          end: {
	            line: 57,
	            column: 66
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 57,
	            column: 28
	          },
	          end: {
	            line: 57,
	            column: 61
	          }
	        }, {
	          start: {
	            line: 57,
	            column: 64
	          },
	          end: {
	            line: 57,
	            column: 66
	          }
	        }],
	        line: 57
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 58,
	            column: 9
	          },
	          end: {
	            line: 58,
	            column: 63
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 58,
	            column: 27
	          },
	          end: {
	            line: 58,
	            column: 58
	          }
	        }, {
	          start: {
	            line: 58,
	            column: 61
	          },
	          end: {
	            line: 58,
	            column: 63
	          }
	        }],
	        line: 58
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 63,
	            column: 2
	          },
	          end: {
	            line: 65,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 63,
	            column: 2
	          },
	          end: {
	            line: 65,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 2
	          },
	          end: {
	            line: 65,
	            column: 3
	          }
	        }],
	        line: 63
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 67,
	            column: 2
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 67,
	            column: 2
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 67,
	            column: 2
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        }],
	        line: 67
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 83,
	            column: 4
	          },
	          end: {
	            line: 89,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 83,
	            column: 4
	          },
	          end: {
	            line: 89,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 83,
	            column: 4
	          },
	          end: {
	            line: 89,
	            column: 5
	          }
	        }],
	        line: 83
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 115,
	            column: 6
	          },
	          end: {
	            line: 117,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 115,
	            column: 6
	          },
	          end: {
	            line: 117,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 115,
	            column: 6
	          },
	          end: {
	            line: 117,
	            column: 7
	          }
	        }],
	        line: 115
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 115,
	            column: 10
	          },
	          end: {
	            line: 115,
	            column: 92
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 115,
	            column: 10
	          },
	          end: {
	            line: 115,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 115,
	            column: 53
	          },
	          end: {
	            line: 115,
	            column: 92
	          }
	        }],
	        line: 115
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 142,
	            column: 8
	          },
	          end: {
	            line: 158,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 143,
	            column: 8
	          },
	          end: {
	            line: 148,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 149,
	            column: 8
	          },
	          end: {
	            line: 157,
	            column: 16
	          }
	        }],
	        line: 142
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 161,
	            column: 6
	          },
	          end: {
	            line: 172,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 161,
	            column: 6
	          },
	          end: {
	            line: 172,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 161,
	            column: 6
	          },
	          end: {
	            line: 172,
	            column: 7
	          }
	        }],
	        line: 161
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        }],
	        line: 228
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 267,
	            column: 2
	          },
	          end: {
	            line: 269,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 267,
	            column: 2
	          },
	          end: {
	            line: 269,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 267,
	            column: 2
	          },
	          end: {
	            line: 269,
	            column: 3
	          }
	        }],
	        line: 267
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 317,
	            column: 8
	          },
	          end: {
	            line: 319,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 317,
	            column: 8
	          },
	          end: {
	            line: 319,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 317,
	            column: 8
	          },
	          end: {
	            line: 319,
	            column: 9
	          }
	        }],
	        line: 317
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 320,
	            column: 8
	          },
	          end: {
	            line: 323,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 320,
	            column: 8
	          },
	          end: {
	            line: 323,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 320,
	            column: 8
	          },
	          end: {
	            line: 323,
	            column: 9
	          }
	        }],
	        line: 320
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 328,
	            column: 6
	          },
	          end: {
	            line: 332,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 328,
	            column: 6
	          },
	          end: {
	            line: 332,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 328,
	            column: 6
	          },
	          end: {
	            line: 332,
	            column: 7
	          }
	        }],
	        line: 328
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 338,
	            column: 2
	          },
	          end: {
	            line: 340,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 338,
	            column: 2
	          },
	          end: {
	            line: 340,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 338,
	            column: 2
	          },
	          end: {
	            line: 340,
	            column: 3
	          }
	        }],
	        line: 338
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 342,
	            column: 2
	          },
	          end: {
	            line: 344,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 342,
	            column: 2
	          },
	          end: {
	            line: 344,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 342,
	            column: 2
	          },
	          end: {
	            line: 344,
	            column: 3
	          }
	        }],
	        line: 342
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 342,
	            column: 6
	          },
	          end: {
	            line: 342,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 342,
	            column: 6
	          },
	          end: {
	            line: 342,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 342,
	            column: 31
	          },
	          end: {
	            line: 342,
	            column: 58
	          }
	        }],
	        line: 342
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 346,
	            column: 2
	          },
	          end: {
	            line: 348,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 346,
	            column: 2
	          },
	          end: {
	            line: 348,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 346,
	            column: 2
	          },
	          end: {
	            line: 348,
	            column: 3
	          }
	        }],
	        line: 346
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 346,
	            column: 6
	          },
	          end: {
	            line: 346,
	            column: 59
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 346,
	            column: 6
	          },
	          end: {
	            line: 346,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 346,
	            column: 31
	          },
	          end: {
	            line: 346,
	            column: 59
	          }
	        }],
	        line: 346
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 352,
	            column: 2
	          },
	          end: {
	            line: 354,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 352,
	            column: 2
	          },
	          end: {
	            line: 354,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 352,
	            column: 2
	          },
	          end: {
	            line: 354,
	            column: 3
	          }
	        }],
	        line: 352
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 352,
	            column: 6
	          },
	          end: {
	            line: 352,
	            column: 87
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 352,
	            column: 6
	          },
	          end: {
	            line: 352,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 352,
	            column: 20
	          },
	          end: {
	            line: 352,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 352,
	            column: 55
	          },
	          end: {
	            line: 352,
	            column: 87
	          }
	        }],
	        line: 352
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 356,
	            column: 2
	          },
	          end: {
	            line: 358,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 356,
	            column: 2
	          },
	          end: {
	            line: 358,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 356,
	            column: 2
	          },
	          end: {
	            line: 358,
	            column: 3
	          }
	        }],
	        line: 356
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 356,
	            column: 6
	          },
	          end: {
	            line: 356,
	            column: 52
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 356,
	            column: 6
	          },
	          end: {
	            line: 356,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 356,
	            column: 20
	          },
	          end: {
	            line: 356,
	            column: 52
	          }
	        }],
	        line: 356
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 360,
	            column: 2
	          },
	          end: {
	            line: 362,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 360,
	            column: 2
	          },
	          end: {
	            line: 362,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 360,
	            column: 2
	          },
	          end: {
	            line: 362,
	            column: 3
	          }
	        }],
	        line: 360
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 360,
	            column: 6
	          },
	          end: {
	            line: 360,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 360,
	            column: 6
	          },
	          end: {
	            line: 360,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 360,
	            column: 20
	          },
	          end: {
	            line: 360,
	            column: 50
	          }
	        }],
	        line: 360
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 364,
	            column: 2
	          },
	          end: {
	            line: 372,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 364,
	            column: 2
	          },
	          end: {
	            line: 372,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 364,
	            column: 2
	          },
	          end: {
	            line: 372,
	            column: 3
	          }
	        }],
	        line: 364
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 364,
	            column: 6
	          },
	          end: {
	            line: 364,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 364,
	            column: 6
	          },
	          end: {
	            line: 364,
	            column: 26
	          }
	        }, {
	          start: {
	            line: 364,
	            column: 30
	          },
	          end: {
	            line: 364,
	            column: 58
	          }
	        }],
	        line: 364
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 365,
	            column: 4
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 365,
	            column: 4
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 365,
	            column: 4
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        }],
	        line: 365
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 367,
	            column: 11
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 367,
	            column: 11
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 367,
	            column: 11
	          },
	          end: {
	            line: 371,
	            column: 5
	          }
	        }],
	        line: 367
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 400,
	            column: 20
	          },
	          end: {
	            line: 401,
	            column: 79
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 401,
	            column: 4
	          },
	          end: {
	            line: 401,
	            column: 72
	          }
	        }, {
	          start: {
	            line: 401,
	            column: 75
	          },
	          end: {
	            line: 401,
	            column: 79
	          }
	        }],
	        line: 400
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 403,
	            column: 2
	          },
	          end: {
	            line: 447,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 403,
	            column: 2
	          },
	          end: {
	            line: 447,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 403,
	            column: 2
	          },
	          end: {
	            line: 447,
	            column: 3
	          }
	        }],
	        line: 403
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 416,
	            column: 6
	          },
	          end: {
	            line: 419,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 416,
	            column: 6
	          },
	          end: {
	            line: 419,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 416,
	            column: 6
	          },
	          end: {
	            line: 419,
	            column: 7
	          }
	        }],
	        line: 416
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 425,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 425,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 425,
	            column: 9
	          }
	        }],
	        line: 422
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 442,
	            column: 6
	          },
	          end: {
	            line: 444,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 442,
	            column: 6
	          },
	          end: {
	            line: 444,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 442,
	            column: 6
	          },
	          end: {
	            line: 444,
	            column: 7
	          }
	        }],
	        line: 442
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 451,
	            column: 23
	          },
	          end: {
	            line: 452,
	            column: 82
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 452,
	            column: 6
	          },
	          end: {
	            line: 452,
	            column: 75
	          }
	        }, {
	          start: {
	            line: 452,
	            column: 78
	          },
	          end: {
	            line: 452,
	            column: 82
	          }
	        }],
	        line: 451
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0,
	      '131': 0,
	      '132': 0,
	      '133': 0,
	      '134': 0,
	      '135': 0,
	      '136': 0,
	      '137': 0,
	      '138': 0,
	      '139': 0,
	      '140': 0,
	      '141': 0,
	      '142': 0,
	      '143': 0,
	      '144': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0, 0],
	      '32': [0, 0],
	      '33': [0, 0],
	      '34': [0, 0],
	      '35': [0, 0],
	      '36': [0, 0],
	      '37': [0, 0],
	      '38': [0, 0],
	      '39': [0, 0],
	      '40': [0, 0],
	      '41': [0, 0],
	      '42': [0, 0],
	      '43': [0, 0],
	      '44': [0, 0],
	      '45': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_10nrc4bste.s[0]++;

	var isFairplayKeySystem = function isFairplayKeySystem(str) {
	  cov_10nrc4bste.f[0]++;
	  cov_10nrc4bste.s[1]++;
	  return str.startsWith('com.apple.fps');
	};

	cov_10nrc4bste.s[2]++;
	var getSupportedConfigurations = function getSupportedConfigurations(keySystem, keySystemOptions) {
	  cov_10nrc4bste.f[1]++;
	  cov_10nrc4bste.s[3]++;

	  if (keySystemOptions.supportedConfigurations) {
	    cov_10nrc4bste.b[0][0]++;
	    cov_10nrc4bste.s[4]++;
	    return keySystemOptions.supportedConfigurations;
	  } else {
	    cov_10nrc4bste.b[0][1]++;
	  }

	  var isFairplay = (cov_10nrc4bste.s[5]++, isFairplayKeySystem(keySystem));
	  var supportedConfiguration = (cov_10nrc4bste.s[6]++, {});
	  var initDataTypes = (cov_10nrc4bste.s[7]++, (cov_10nrc4bste.b[1][0]++, keySystemOptions.initDataTypes) || (cov_10nrc4bste.b[1][1]++, isFairplay ? (cov_10nrc4bste.b[2][0]++, ['sinf']) : (cov_10nrc4bste.b[2][1]++, null)));
	  var audioContentType = (cov_10nrc4bste.s[8]++, keySystemOptions.audioContentType);
	  var audioRobustness = (cov_10nrc4bste.s[9]++, keySystemOptions.audioRobustness);
	  var videoContentType = (cov_10nrc4bste.s[10]++, (cov_10nrc4bste.b[3][0]++, keySystemOptions.videoContentType) || (cov_10nrc4bste.b[3][1]++, isFairplay ? (cov_10nrc4bste.b[4][0]++, 'video/mp4') : (cov_10nrc4bste.b[4][1]++, null)));
	  var videoRobustness = (cov_10nrc4bste.s[11]++, keySystemOptions.videoRobustness);
	  var persistentState = (cov_10nrc4bste.s[12]++, keySystemOptions.persistentState);
	  cov_10nrc4bste.s[13]++;

	  if ((cov_10nrc4bste.b[6][0]++, audioContentType) || (cov_10nrc4bste.b[6][1]++, audioRobustness)) {
	    cov_10nrc4bste.b[5][0]++;
	    cov_10nrc4bste.s[14]++;
	    supportedConfiguration.audioCapabilities = [_extends({}, audioContentType ? (cov_10nrc4bste.b[7][0]++, {
	      contentType: audioContentType
	    }) : (cov_10nrc4bste.b[7][1]++, {}), audioRobustness ? (cov_10nrc4bste.b[8][0]++, {
	      robustness: audioRobustness
	    }) : (cov_10nrc4bste.b[8][1]++, {}))];
	  } else {
	    cov_10nrc4bste.b[5][1]++;
	  }

	  cov_10nrc4bste.s[15]++;

	  if ((cov_10nrc4bste.b[10][0]++, videoContentType) || (cov_10nrc4bste.b[10][1]++, videoRobustness)) {
	    cov_10nrc4bste.b[9][0]++;
	    cov_10nrc4bste.s[16]++;
	    supportedConfiguration.videoCapabilities = [_extends({}, videoContentType ? (cov_10nrc4bste.b[11][0]++, {
	      contentType: videoContentType
	    }) : (cov_10nrc4bste.b[11][1]++, {}), videoRobustness ? (cov_10nrc4bste.b[12][0]++, {
	      robustness: videoRobustness
	    }) : (cov_10nrc4bste.b[12][1]++, {}))];
	  } else {
	    cov_10nrc4bste.b[9][1]++;
	  }

	  cov_10nrc4bste.s[17]++;

	  if (persistentState) {
	    cov_10nrc4bste.b[13][0]++;
	    cov_10nrc4bste.s[18]++;
	    supportedConfiguration.persistentState = persistentState;
	  } else {
	    cov_10nrc4bste.b[13][1]++;
	  }

	  cov_10nrc4bste.s[19]++;

	  if (initDataTypes) {
	    cov_10nrc4bste.b[14][0]++;
	    cov_10nrc4bste.s[20]++;
	    supportedConfiguration.initDataTypes = initDataTypes;
	  } else {
	    cov_10nrc4bste.b[14][1]++;
	  }

	  cov_10nrc4bste.s[21]++;
	  return [supportedConfiguration];
	};
	cov_10nrc4bste.s[22]++;
	var getSupportedKeySystem = function getSupportedKeySystem(keySystems) {
	  cov_10nrc4bste.f[2]++;
	  var promise;
	  cov_10nrc4bste.s[23]++;
	  Object.keys(keySystems).forEach(function (keySystem) {
	    cov_10nrc4bste.f[3]++;
	    var supportedConfigurations = (cov_10nrc4bste.s[24]++, getSupportedConfigurations(keySystem, keySystems[keySystem]));
	    cov_10nrc4bste.s[25]++;

	    if (!promise) {
	      cov_10nrc4bste.b[15][0]++;
	      cov_10nrc4bste.s[26]++;
	      promise = window_1.navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations);
	    } else {
	      cov_10nrc4bste.b[15][1]++;
	      cov_10nrc4bste.s[27]++;
	      promise = promise.catch(function (e) {
	        cov_10nrc4bste.f[4]++;
	        cov_10nrc4bste.s[28]++;
	        return window_1.navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations);
	      });
	    }
	  });
	  cov_10nrc4bste.s[29]++;
	  return promise;
	};
	cov_10nrc4bste.s[30]++;
	var makeNewRequest = function makeNewRequest(requestOptions) {
	  cov_10nrc4bste.f[5]++;

	  var _ref = (cov_10nrc4bste.s[31]++, requestOptions),
	      mediaKeys = _ref.mediaKeys,
	      initDataType = _ref.initDataType,
	      initData = _ref.initData,
	      options = _ref.options,
	      getLicense = _ref.getLicense,
	      removeSession = _ref.removeSession,
	      eventBus = _ref.eventBus,
	      contentId = _ref.contentId;

	  var keySession = (cov_10nrc4bste.s[32]++, mediaKeys.createSession());
	  cov_10nrc4bste.s[33]++;
	  eventBus.trigger('keysessioncreated');
	  cov_10nrc4bste.s[34]++;
	  return new Promise(function (resolve, reject) {
	    cov_10nrc4bste.f[6]++;
	    cov_10nrc4bste.s[35]++;
	    keySession.addEventListener('message', function (event) {
	      cov_10nrc4bste.f[7]++;
	      cov_10nrc4bste.s[36]++;

	      if ((cov_10nrc4bste.b[17][0]++, event.messageType !== 'license-request') && (cov_10nrc4bste.b[17][1]++, event.messageType !== 'license-renewal')) {
	        cov_10nrc4bste.b[16][0]++;
	        cov_10nrc4bste.s[37]++;
	        return;
	      } else {
	        cov_10nrc4bste.b[16][1]++;
	      }

	      cov_10nrc4bste.s[38]++;
	      getLicense(options, event.message, contentId).then(function (license) {
	        cov_10nrc4bste.f[8]++;
	        cov_10nrc4bste.s[39]++;
	        resolve(keySession.update(license));
	      }).catch(function (err) {
	        cov_10nrc4bste.f[9]++;
	        cov_10nrc4bste.s[40]++;
	        reject(err);
	      });
	    }, false);
	    cov_10nrc4bste.s[41]++;
	    keySession.addEventListener('keystatuseschange', function (event) {
	      cov_10nrc4bste.f[10]++;
	      var expired = (cov_10nrc4bste.s[42]++, false);
	      cov_10nrc4bste.s[43]++;
	      keySession.keyStatuses.forEach(function (status, keyId) {
	        cov_10nrc4bste.f[11]++;
	        cov_10nrc4bste.s[44]++;
	        eventBus.trigger({
	          keyId: keyId,
	          status: status,
	          target: keySession,
	          type: 'keystatuschange'
	        });
	        cov_10nrc4bste.s[45]++;

	        switch (status) {
	          case 'expired':
	            cov_10nrc4bste.b[18][0]++;
	            cov_10nrc4bste.s[46]++;
	            expired = true;
	            cov_10nrc4bste.s[47]++;
	            break;

	          case 'internal-error':
	            cov_10nrc4bste.b[18][1]++;
	            var message = (cov_10nrc4bste.s[48]++, 'Key status reported as "internal-error." Leaving the session open since we ' + 'don\'t have enough details to know if this error is fatal.');
	            cov_10nrc4bste.s[49]++;
	            videojs.log.warn(message, event);
	            cov_10nrc4bste.s[50]++;
	            break;
	        }
	      });
	      cov_10nrc4bste.s[51]++;

	      if (expired) {
	        cov_10nrc4bste.b[19][0]++;
	        cov_10nrc4bste.s[52]++;
	        keySession.close().then(function () {
	          cov_10nrc4bste.f[12]++;
	          cov_10nrc4bste.s[53]++;
	          removeSession(initData);
	          cov_10nrc4bste.s[54]++;
	          makeNewRequest(requestOptions);
	        });
	      } else {
	        cov_10nrc4bste.b[19][1]++;
	      }
	    }, false);
	    cov_10nrc4bste.s[55]++;
	    keySession.generateRequest(initDataType, initData).catch(function () {
	      cov_10nrc4bste.f[13]++;
	      cov_10nrc4bste.s[56]++;
	      reject('Unable to create or initialize key session');
	    });
	  });
	};
	cov_10nrc4bste.s[57]++;
	var addSession = function addSession(_ref2) {
	  var video = _ref2.video,
	      initDataType = _ref2.initDataType,
	      initData = _ref2.initData,
	      options = _ref2.options,
	      getLicense = _ref2.getLicense,
	      contentId = _ref2.contentId,
	      removeSession = _ref2.removeSession,
	      eventBus = _ref2.eventBus;
	  cov_10nrc4bste.f[14]++;
	  var sessionData = (cov_10nrc4bste.s[58]++, {
	    initDataType: initDataType,
	    initData: initData,
	    options: options,
	    getLicense: getLicense,
	    removeSession: removeSession,
	    eventBus: eventBus,
	    contentId: contentId
	  });
	  cov_10nrc4bste.s[59]++;

	  if (video.mediaKeysObject) {
	    cov_10nrc4bste.b[20][0]++;
	    cov_10nrc4bste.s[60]++;
	    sessionData.mediaKeys = video.mediaKeysObject;
	    cov_10nrc4bste.s[61]++;
	    return makeNewRequest(sessionData);
	  } else {
	    cov_10nrc4bste.b[20][1]++;
	  }

	  cov_10nrc4bste.s[62]++;
	  video.pendingSessionData.push(sessionData);
	  cov_10nrc4bste.s[63]++;
	  return Promise.resolve();
	};
	cov_10nrc4bste.s[64]++;
	var addPendingSessions = function addPendingSessions(_ref3) {
	  var video = _ref3.video,
	      certificate = _ref3.certificate,
	      createdMediaKeys = _ref3.createdMediaKeys;
	  cov_10nrc4bste.f[15]++;
	  cov_10nrc4bste.s[65]++;
	  video.mediaKeysObject = createdMediaKeys;
	  var promises = (cov_10nrc4bste.s[66]++, []);
	  cov_10nrc4bste.s[67]++;

	  if (certificate) {
	    cov_10nrc4bste.b[21][0]++;
	    cov_10nrc4bste.s[68]++;
	    promises.push(createdMediaKeys.setServerCertificate(certificate));
	  } else {
	    cov_10nrc4bste.b[21][1]++;
	  }

	  cov_10nrc4bste.s[69]++;

	  for (var i = 0; i < video.pendingSessionData.length; i++) {
	    var data = (cov_10nrc4bste.s[70]++, video.pendingSessionData[i]);
	    cov_10nrc4bste.s[71]++;
	    promises.push(makeNewRequest({
	      mediaKeys: video.mediaKeysObject,
	      initDataType: data.initDataType,
	      initData: data.initData,
	      options: data.options,
	      getLicense: data.getLicense,
	      removeSession: data.removeSession,
	      eventBus: data.eventBus,
	      contentId: data.contentId
	    }));
	  }

	  cov_10nrc4bste.s[72]++;
	  video.pendingSessionData = [];
	  cov_10nrc4bste.s[73]++;
	  promises.push(video.setMediaKeys(createdMediaKeys));
	  cov_10nrc4bste.s[74]++;
	  return Promise.all(promises);
	};
	cov_10nrc4bste.s[75]++;

	var defaultPlayreadyGetLicense = function defaultPlayreadyGetLicense(keySystemOptions) {
	  cov_10nrc4bste.f[16]++;
	  cov_10nrc4bste.s[76]++;
	  return function (emeOptions, keyMessage, callback) {
	    cov_10nrc4bste.f[17]++;
	    cov_10nrc4bste.s[77]++;
	    requestPlayreadyLicense(keySystemOptions, keyMessage, emeOptions, callback);
	  };
	};

	cov_10nrc4bste.s[78]++;
	var defaultGetLicense$1 = function defaultGetLicense$$1(keySystemOptions) {
	  cov_10nrc4bste.f[18]++;
	  cov_10nrc4bste.s[79]++;
	  return function (emeOptions, keyMessage, callback) {
	    cov_10nrc4bste.f[19]++;
	    var headers = (cov_10nrc4bste.s[80]++, mergeAndRemoveNull({
	      'Content-type': 'application/octet-stream'
	    }, emeOptions.emeHeaders, keySystemOptions.licenseHeaders));
	    cov_10nrc4bste.s[81]++;
	    videojs.xhr({
	      uri: keySystemOptions.url,
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: keyMessage,
	      headers: headers
	    }, httpResponseHandler(callback, true));
	  };
	};
	cov_10nrc4bste.s[82]++;

	var promisifyGetLicense = function promisifyGetLicense(keySystem, getLicenseFn, eventBus) {
	  cov_10nrc4bste.f[20]++;
	  cov_10nrc4bste.s[83]++;
	  return function (emeOptions, keyMessage, contentId) {
	    cov_10nrc4bste.f[21]++;
	    cov_10nrc4bste.s[84]++;
	    return new Promise(function (resolve, reject) {
	      cov_10nrc4bste.f[22]++;
	      cov_10nrc4bste.s[85]++;

	      var callback = function callback(err, license) {
	        cov_10nrc4bste.f[23]++;
	        cov_10nrc4bste.s[86]++;

	        if (eventBus) {
	          cov_10nrc4bste.b[22][0]++;
	          cov_10nrc4bste.s[87]++;
	          eventBus.trigger('licenserequestattempted');
	        } else {
	          cov_10nrc4bste.b[22][1]++;
	        }

	        cov_10nrc4bste.s[88]++;

	        if (err) {
	          cov_10nrc4bste.b[23][0]++;
	          cov_10nrc4bste.s[89]++;
	          reject(err);
	          cov_10nrc4bste.s[90]++;
	          return;
	        } else {
	          cov_10nrc4bste.b[23][1]++;
	        }

	        cov_10nrc4bste.s[91]++;
	        resolve(license);
	      };

	      cov_10nrc4bste.s[92]++;

	      if (isFairplayKeySystem(keySystem)) {
	        cov_10nrc4bste.b[24][0]++;
	        cov_10nrc4bste.s[93]++;
	        getLicenseFn(emeOptions, contentId, new Uint8Array(keyMessage), callback);
	      } else {
	        cov_10nrc4bste.b[24][1]++;
	        cov_10nrc4bste.s[94]++;
	        getLicenseFn(emeOptions, keyMessage, callback);
	      }
	    });
	  };
	};

	cov_10nrc4bste.s[95]++;

	var standardizeKeySystemOptions = function standardizeKeySystemOptions(keySystem, keySystemOptions) {
	  cov_10nrc4bste.f[24]++;
	  cov_10nrc4bste.s[96]++;

	  if (typeof keySystemOptions === 'string') {
	    cov_10nrc4bste.b[25][0]++;
	    cov_10nrc4bste.s[97]++;
	    keySystemOptions = {
	      url: keySystemOptions
	    };
	  } else {
	    cov_10nrc4bste.b[25][1]++;
	  }

	  cov_10nrc4bste.s[98]++;

	  if ((cov_10nrc4bste.b[27][0]++, !keySystemOptions.url) && (cov_10nrc4bste.b[27][1]++, keySystemOptions.licenseUri)) {
	    cov_10nrc4bste.b[26][0]++;
	    cov_10nrc4bste.s[99]++;
	    keySystemOptions.url = keySystemOptions.licenseUri;
	  } else {
	    cov_10nrc4bste.b[26][1]++;
	  }

	  cov_10nrc4bste.s[100]++;

	  if ((cov_10nrc4bste.b[29][0]++, !keySystemOptions.url) && (cov_10nrc4bste.b[29][1]++, !keySystemOptions.getLicense)) {
	    cov_10nrc4bste.b[28][0]++;
	    cov_10nrc4bste.s[101]++;
	    throw new Error("Missing url/licenseUri or getLicense in " + keySystem + " keySystem configuration.");
	  } else {
	    cov_10nrc4bste.b[28][1]++;
	  }

	  var isFairplay = (cov_10nrc4bste.s[102]++, isFairplayKeySystem(keySystem));
	  cov_10nrc4bste.s[103]++;

	  if ((cov_10nrc4bste.b[31][0]++, isFairplay) && (cov_10nrc4bste.b[31][1]++, keySystemOptions.certificateUri) && (cov_10nrc4bste.b[31][2]++, !keySystemOptions.getCertificate)) {
	    cov_10nrc4bste.b[30][0]++;
	    cov_10nrc4bste.s[104]++;
	    keySystemOptions.getCertificate = defaultGetCertificate(keySystemOptions);
	  } else {
	    cov_10nrc4bste.b[30][1]++;
	  }

	  cov_10nrc4bste.s[105]++;

	  if ((cov_10nrc4bste.b[33][0]++, isFairplay) && (cov_10nrc4bste.b[33][1]++, !keySystemOptions.getCertificate)) {
	    cov_10nrc4bste.b[32][0]++;
	    cov_10nrc4bste.s[106]++;
	    throw new Error("Missing getCertificate or certificateUri in " + keySystem + " keySystem configuration.");
	  } else {
	    cov_10nrc4bste.b[32][1]++;
	  }

	  cov_10nrc4bste.s[107]++;

	  if ((cov_10nrc4bste.b[35][0]++, isFairplay) && (cov_10nrc4bste.b[35][1]++, !keySystemOptions.getContentId)) {
	    cov_10nrc4bste.b[34][0]++;
	    cov_10nrc4bste.s[108]++;
	    keySystemOptions.getContentId = defaultGetContentId;
	  } else {
	    cov_10nrc4bste.b[34][1]++;
	  }

	  cov_10nrc4bste.s[109]++;

	  if ((cov_10nrc4bste.b[37][0]++, keySystemOptions.url) && (cov_10nrc4bste.b[37][1]++, !keySystemOptions.getLicense)) {
	    cov_10nrc4bste.b[36][0]++;
	    cov_10nrc4bste.s[110]++;

	    if (keySystem === 'com.microsoft.playready') {
	      cov_10nrc4bste.b[38][0]++;
	      cov_10nrc4bste.s[111]++;
	      keySystemOptions.getLicense = defaultPlayreadyGetLicense(keySystemOptions);
	    } else {
	      cov_10nrc4bste.b[38][1]++;
	      cov_10nrc4bste.s[112]++;

	      if (isFairplay) {
	        cov_10nrc4bste.b[39][0]++;
	        cov_10nrc4bste.s[113]++;
	        keySystemOptions.getLicense = defaultGetLicense(keySystemOptions);
	      } else {
	        cov_10nrc4bste.b[39][1]++;
	        cov_10nrc4bste.s[114]++;
	        keySystemOptions.getLicense = defaultGetLicense$1(keySystemOptions);
	      }
	    }
	  } else {
	    cov_10nrc4bste.b[36][1]++;
	  }

	  cov_10nrc4bste.s[115]++;
	  return keySystemOptions;
	};

	cov_10nrc4bste.s[116]++;
	var standard5July2016 = function standard5July2016(_ref4) {
	  var video = _ref4.video,
	      initDataType = _ref4.initDataType,
	      initData = _ref4.initData,
	      keySystemAccess = _ref4.keySystemAccess,
	      options = _ref4.options,
	      removeSession = _ref4.removeSession,
	      eventBus = _ref4.eventBus;
	  cov_10nrc4bste.f[25]++;
	  var keySystemPromise = (cov_10nrc4bste.s[117]++, Promise.resolve());
	  var keySystem = (cov_10nrc4bste.s[118]++, keySystemAccess.keySystem);
	  var keySystemOptions;
	  cov_10nrc4bste.s[119]++;

	  try {
	    cov_10nrc4bste.s[120]++;
	    keySystemOptions = standardizeKeySystemOptions(keySystem, options.keySystems[keySystem]);
	  } catch (e) {
	    cov_10nrc4bste.s[121]++;
	    return Promise.reject(e);
	  }

	  var contentId = (cov_10nrc4bste.s[122]++, keySystemOptions.getContentId ? (cov_10nrc4bste.b[40][0]++, keySystemOptions.getContentId(options, uint8ArrayToString(initData))) : (cov_10nrc4bste.b[40][1]++, null));
	  cov_10nrc4bste.s[123]++;

	  if (typeof video.mediaKeysObject === 'undefined') {
	    cov_10nrc4bste.b[41][0]++;
	    cov_10nrc4bste.s[124]++;
	    video.mediaKeysObject = null;
	    cov_10nrc4bste.s[125]++;
	    video.pendingSessionData = [];
	    var certificate;
	    cov_10nrc4bste.s[126]++;
	    keySystemPromise = new Promise(function (resolve, reject) {
	      cov_10nrc4bste.f[26]++;
	      cov_10nrc4bste.s[127]++;
	      video.keySystem = keySystem;
	      cov_10nrc4bste.s[128]++;

	      if (!keySystemOptions.getCertificate) {
	        cov_10nrc4bste.b[42][0]++;
	        cov_10nrc4bste.s[129]++;
	        resolve(keySystemAccess);
	        cov_10nrc4bste.s[130]++;
	        return;
	      } else {
	        cov_10nrc4bste.b[42][1]++;
	      }

	      cov_10nrc4bste.s[131]++;
	      keySystemOptions.getCertificate(options, function (err, cert) {
	        cov_10nrc4bste.f[27]++;
	        cov_10nrc4bste.s[132]++;

	        if (err) {
	          cov_10nrc4bste.b[43][0]++;
	          cov_10nrc4bste.s[133]++;
	          reject(err);
	          cov_10nrc4bste.s[134]++;
	          return;
	        } else {
	          cov_10nrc4bste.b[43][1]++;
	        }

	        cov_10nrc4bste.s[135]++;
	        certificate = cert;
	        cov_10nrc4bste.s[136]++;
	        resolve();
	      });
	    }).then(function () {
	      cov_10nrc4bste.f[28]++;
	      cov_10nrc4bste.s[137]++;
	      return keySystemAccess.createMediaKeys();
	    }).then(function (createdMediaKeys) {
	      cov_10nrc4bste.f[29]++;
	      cov_10nrc4bste.s[138]++;
	      return addPendingSessions({
	        video: video,
	        certificate: certificate,
	        createdMediaKeys: createdMediaKeys
	      });
	    }).catch(function (err) {
	      cov_10nrc4bste.f[30]++;
	      cov_10nrc4bste.s[139]++;

	      if (err) {
	        cov_10nrc4bste.b[44][0]++;
	        cov_10nrc4bste.s[140]++;
	        return Promise.reject(err);
	      } else {
	        cov_10nrc4bste.b[44][1]++;
	      }

	      cov_10nrc4bste.s[141]++;
	      return Promise.reject('Failed to create and initialize a MediaKeys object');
	    });
	  } else {
	    cov_10nrc4bste.b[41][1]++;
	  }

	  cov_10nrc4bste.s[142]++;
	  return keySystemPromise.then(function () {
	    cov_10nrc4bste.f[31]++;
	    var getLicense = (cov_10nrc4bste.s[143]++, video.keySystem ? (cov_10nrc4bste.b[45][0]++, promisifyGetLicense(keySystem, keySystemOptions.getLicense, eventBus)) : (cov_10nrc4bste.b[45][1]++, null));
	    cov_10nrc4bste.s[144]++;
	    return addSession({
	      video: video,
	      initDataType: initDataType,
	      initData: initData,
	      options: options,
	      getLicense: getLicense,
	      contentId: contentId,
	      removeSession: removeSession,
	      eventBus: eventBus
	    });
	  });
	};

	var stringToArrayBuffer = function stringToArrayBuffer(string) {
	  var buffer = new ArrayBuffer(string.length * 2);
	  var typedArray = new Uint16Array(buffer);

	  for (var i = 0; i < string.length; i++) {
	    typedArray[i] = string.charCodeAt(i);
	  }

	  return buffer;
	};
	var getMockEventBus = function getMockEventBus() {
	  var calls = [];
	  var mockEventBus = {
	    calls: calls,
	    trigger: function trigger(event) {
	      calls.push(event);
	    }
	  };
	  return mockEventBus;
	};

	var getMockSession = function getMockSession() {
	  var mockSession = {
	    addEventListener: function addEventListener(type, listener) {
	      return mockSession.listeners.push({
	        type: type,
	        listener: listener
	      });
	    },
	    generateRequest: function generateRequest(initDataType, initData) {
	      // noop
	      return new Promise(function (resolve, reject) {
	        return resolve();
	      });
	    },
	    keyStatuses: new Map(),
	    close: function close() {
	      mockSession.numCloses++; // fake a promise for easy testing

	      return {
	        then: function then(nextCall) {
	          return nextCall();
	        }
	      };
	    },
	    numCloses: 0,
	    listeners: []
	  };
	  return mockSession;
	};

	var resolveReject = function resolveReject(rejectVariable, rejectMessage) {
	  return new Promise(function (resolve, reject) {
	    if (rejectVariable) {
	      reject(rejectMessage);
	      return;
	    }

	    resolve();
	  });
	};

	QUnit.module('videojs-contrib-eme eme', {
	  beforeEach: function beforeEach() {
	    this.origXhr = videojs.xhr;
	  },
	  afterEach: function afterEach() {
	    videojs.xhr = this.origXhr;
	  }
	});
	QUnit.test('keystatuseschange triggers keystatuschange on eventBus for each key', function (assert) {
	  var callCount = {
	    total: 0,
	    1: {},
	    2: {},
	    3: {},
	    4: {},
	    5: {}
	  };
	  var initData = new Uint8Array([1, 2, 3]);
	  var mockSession = getMockSession();
	  var eventBus = {
	    trigger: function trigger(event) {
	      if (typeof event === 'string') {
	        return;
	      }

	      if (!callCount[event.keyId][event.status]) {
	        callCount[event.keyId][event.status] = 0;
	      }

	      callCount[event.keyId][event.status]++;
	      callCount.total++;
	    }
	  };
	  makeNewRequest({
	    mediaKeys: {
	      createSession: function createSession() {
	        return mockSession;
	      }
	    },
	    initDataType: '',
	    initData: initData,
	    options: {},
	    getLicense: function getLicense() {},
	    removeSession: function removeSession() {},
	    eventBus: eventBus
	  });
	  assert.equal(mockSession.listeners.length, 2, 'added listeners');
	  assert.equal(mockSession.listeners[1].type, 'keystatuseschange', 'added keystatuseschange listener'); // no key statuses

	  mockSession.listeners[1].listener();
	  assert.equal(callCount.total, 0, 'no events dispatched yet');
	  mockSession.keyStatuses.set(1, 'unrecognized');
	  mockSession.keyStatuses.set(2, 'expired');
	  mockSession.keyStatuses.set(3, 'internal-error');
	  mockSession.keyStatuses.set(4, 'output-restricted');
	  mockSession.keyStatuses.set(5, 'output-restricted');
	  mockSession.listeners[1].listener();
	  assert.equal(callCount[1].unrecognized, 1, 'dispatched `unrecognized` key status for key 1');
	  assert.equal(callCount[2].expired, 1, 'dispatched `expired` key status for key 2');
	  assert.equal(callCount[3]['internal-error'], 1, 'dispatched `internal-error` key status for key 3');
	  assert.equal(callCount[4]['output-restricted'], 1, 'dispatched `output-restricted` key status for key 4');
	  assert.equal(callCount[5]['output-restricted'], 1, 'dispatched `output-restricted` key status for key 5');
	  assert.equal(callCount.total, 5, '5 keystatuschange events received so far'); // Change a single key and check that it's triggered for all keys

	  mockSession.keyStatuses.set(1, 'usable');
	  mockSession.listeners[1].listener();
	  assert.equal(callCount[1].usable, 1, 'dispatched `usable` key status for key 1');
	  assert.equal(callCount[2].expired, 2, 'dispatched `expired` key status for key 2');
	  assert.equal(callCount[3]['internal-error'], 2, 'dispatched `internal-error` key status for key 3');
	  assert.equal(callCount[4]['output-restricted'], 2, 'dispatched `output-restricted` key status for key 4');
	  assert.equal(callCount[5]['output-restricted'], 2, 'dispatched `output-restricted` key status for key 5');
	  assert.equal(callCount.total, 10, '10 keystatuschange events received so far'); // Change the key statuses and recheck

	  mockSession.keyStatuses.set(1, 'output-downscaled');
	  mockSession.keyStatuses.set(2, 'released');
	  mockSession.keyStatuses.set(3, 'usable');
	  mockSession.keyStatuses.set(4, 'status-pending');
	  mockSession.keyStatuses.set(5, 'usable');
	  mockSession.listeners[1].listener();
	  assert.equal(callCount[1]['output-downscaled'], 1, 'dispatched `output-downscaled` key status for key 1');
	  assert.equal(callCount[2].released, 1, 'dispatched `released` key status for key 2');
	  assert.equal(callCount[3].usable, 1, 'dispatched `usable` key status for key 3');
	  assert.equal(callCount[4]['status-pending'], 1, 'dispatched `status-pending` key status for key 4');
	  assert.equal(callCount[5].usable, 1, 'dispatched `usable` key status for key 5');
	  assert.equal(callCount.total, 15, '15 keystatuschange events received so far');
	});
	QUnit.test('keystatuseschange with expired key closes and recreates session', function (assert) {
	  var removeSessionCalls = []; // once the eme module gets the removeSession function, the session argument is already
	  // bound to the function (note that it's a custom session maintained by the plugin, not
	  // the native session), so only initData is passed

	  var removeSession = function removeSession(initData) {
	    return removeSessionCalls.push(initData);
	  };

	  var initData = new Uint8Array([1, 2, 3]);
	  var mockSession = getMockSession();
	  var eventBus = {
	    trigger: function trigger(name) {}
	  };
	  var creates = 0;
	  makeNewRequest({
	    mediaKeys: {
	      createSession: function createSession() {
	        creates++;
	        return mockSession;
	      }
	    },
	    initDataType: '',
	    initData: initData,
	    options: {},
	    getLicense: function getLicense() {},
	    removeSession: removeSession,
	    eventBus: eventBus
	  });
	  assert.equal(creates, 1, 'created session');
	  assert.equal(mockSession.listeners.length, 2, 'added listeners');
	  assert.equal(mockSession.listeners[1].type, 'keystatuseschange', 'added keystatuseschange listener');
	  assert.equal(mockSession.numCloses, 0, 'no session close calls');
	  assert.equal(removeSessionCalls.length, 0, 'no removeSession calls'); // no key statuses

	  mockSession.listeners[1].listener();
	  assert.equal(mockSession.numCloses, 0, 'no session close calls');
	  assert.equal(removeSessionCalls.length, 0, 'no removeSession calls');
	  mockSession.keyStatuses.set(1, 'unrecognized');
	  mockSession.listeners[1].listener();
	  assert.equal(mockSession.numCloses, 0, 'no session close calls');
	  assert.equal(removeSessionCalls.length, 0, 'no removeSession calls');
	  mockSession.keyStatuses.set(2, 'expired');
	  mockSession.listeners[1].listener();
	  assert.equal(mockSession.numCloses, 1, 'closed session'); // close promise is fake and resolves synchronously, so we can assert removes
	  // synchronously

	  assert.equal(removeSessionCalls.length, 1, 'called remove session');
	  assert.equal(removeSessionCalls[0], initData, 'called to remove session with initData');
	  assert.equal(creates, 2, 'created another session');
	});
	QUnit.test('keystatuseschange with internal-error logs a warning', function (assert) {
	  var origWarn = videojs.log.warn;
	  var initData = new Uint8Array([1, 2, 3]);
	  var mockSession = getMockSession();
	  var warnCalls = [];
	  var eventBus = {
	    trigger: function trigger(name) {}
	  };

	  videojs.log.warn = function () {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return warnCalls.push(args);
	  };

	  makeNewRequest({
	    mediaKeys: {
	      createSession: function createSession() {
	        return mockSession;
	      }
	    },
	    initDataType: '',
	    initData: initData,
	    options: {},
	    getLicense: function getLicense() {},
	    removeSession: function removeSession() {},
	    eventBus: eventBus
	  });
	  assert.equal(mockSession.listeners.length, 2, 'added listeners');
	  assert.equal(mockSession.listeners[1].type, 'keystatuseschange', 'added keystatuseschange listener'); // no key statuses

	  mockSession.listeners[1].listener();
	  assert.equal(warnCalls.length, 0, 'no warn logs');
	  mockSession.keyStatuses.set(1, 'internal-error');
	  var keyStatusChangeEvent = {};
	  mockSession.listeners[1].listener(keyStatusChangeEvent);
	  assert.equal(warnCalls.length, 1, 'one warn log');
	  assert.equal(warnCalls[0][0], 'Key status reported as "internal-error." Leaving the session open ' + 'since we don\'t have enough details to know if this error is fatal.', 'logged correct warning');
	  assert.equal(warnCalls[0][1], keyStatusChangeEvent, 'logged event object');
	  videojs.log.warn = origWarn;
	});
	QUnit.test('accepts a license URL as an option', function (assert) {
	  var done = assert.async();
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var session = new videojs.EventTarget();

	  videojs.xhr = function (options) {
	    xhrCalls.push(options);
	  };

	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return {
	        createSession: function createSession() {
	          return session;
	        }
	      };
	    }
	  };
	  standard5July2016({
	    keySystemAccess: keySystemAccess,
	    video: {
	      setMediaKeys: function setMediaKeys(createdMediaKeys) {
	        return Promise.resolve(createdMediaKeys);
	      }
	    },
	    initDataType: '',
	    initData: '',
	    options: {
	      keySystems: {
	        'com.widevine.alpha': 'some-url'
	      }
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (e) {});
	  setTimeout(function () {
	    session.trigger({
	      type: 'message',
	      message: 'the-message',
	      messageType: 'license-request'
	    });
	    assert.equal(xhrCalls.length, 1, 'made one XHR');
	    assert.deepEqual(xhrCalls[0], {
	      uri: 'some-url',
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: 'the-message',
	      headers: {
	        'Content-type': 'application/octet-stream'
	      }
	    }, 'made request with proper options');
	    videojs.xhr = origXhr;
	    done();
	  });
	});
	QUnit.test('accepts a license URL as property', function (assert) {
	  var done = assert.async();
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var session = new videojs.EventTarget();
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return {
	        createSession: function createSession() {
	          return session;
	        }
	      };
	    }
	  };

	  videojs.xhr = function (options) {
	    xhrCalls.push(options);
	  };

	  standard5July2016({
	    keySystemAccess: keySystemAccess,
	    video: {
	      setMediaKeys: function setMediaKeys(createdMediaKeys) {
	        return Promise.resolve(createdMediaKeys);
	      }
	    },
	    initDataType: '',
	    initData: '',
	    options: {
	      keySystems: {
	        'com.widevine.alpha': {
	          url: 'some-url'
	        }
	      }
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (e) {});
	  setTimeout(function () {
	    session.trigger({
	      type: 'message',
	      message: 'the-message',
	      messageType: 'license-request'
	    });
	    assert.equal(xhrCalls.length, 1, 'made one XHR');
	    assert.deepEqual(xhrCalls[0], {
	      uri: 'some-url',
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: 'the-message',
	      headers: {
	        'Content-type': 'application/octet-stream'
	      }
	    }, 'made request with proper options');
	    videojs.xhr = origXhr;
	    done();
	  });
	});
	QUnit.test('5 July 2016 lifecycle', function (assert) {
	  assert.expect(33);
	  var errors = 0;
	  var done = assert.async();
	  var callbacks = {};
	  var callCounts = {
	    getCertificate: 0,
	    getLicense: 0,
	    createSession: 0,
	    keySessionGenerateRequest: 0,
	    keySessionUpdate: 0,
	    createMediaKeys: 0,
	    licenseRequestAttempts: 0
	  };

	  var getCertificate = function getCertificate(emeOptions, callback) {
	    callCounts.getCertificate++;
	    callbacks.getCertificate = callback;
	  };

	  var getLicense = function getLicense(emeOptions, keyMessage, callback) {
	    callCounts.getLicense++;
	    callbacks.getLicense = callback;
	  };

	  var _setMediaKeys;

	  var video = {
	    setMediaKeys: function setMediaKeys(mediaKeys) {
	      _setMediaKeys = mediaKeys;
	    }
	  };
	  var options = {
	    keySystems: {
	      'org.w3.clearkey': {
	        getCertificate: getCertificate,
	        getLicense: getLicense
	      }
	    }
	  };
	  var eventBus = {
	    trigger: function trigger(name) {
	      if (name === 'licenserequestattempted') {
	        callCounts.licenseRequestAttempts++;
	      }
	    }
	  };
	  var keySessionEventListeners = {};
	  var mediaKeys = {
	    createSession: function createSession() {
	      callCounts.createSession++;
	      return {
	        addEventListener: function addEventListener(name, callback) {
	          keySessionEventListeners[name] = callback;
	        },
	        generateRequest: function generateRequest() {
	          callCounts.keySessionGenerateRequest++;
	          return new Promise(function () {});
	        },
	        update: function update() {
	          callCounts.keySessionUpdate++;
	          return Promise.resolve();
	        }
	      };
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'org.w3.clearkey',
	    createMediaKeys: function createMediaKeys() {
	      callCounts.createMediaKeys++;
	      return mediaKeys;
	    }
	  };
	  standard5July2016({
	    video: video,
	    initDataType: '',
	    initData: '',
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: eventBus
	  }).then(function () {
	    return done();
	  }).catch(function () {
	    return errors++;
	  }); // Step 1: get certificate

	  assert.equal(callCounts.getCertificate, 1, 'certificate requested');
	  assert.equal(callCounts.createMediaKeys, 0, 'media keys not created');
	  assert.notEqual(mediaKeys, _setMediaKeys, 'media keys not yet set');
	  assert.equal(callCounts.createSession, 0, 'key session not created');
	  assert.equal(callCounts.keySessionGenerateRequest, 0, 'key session request not made');
	  assert.equal(callCounts.getLicense, 0, 'license not requested');
	  assert.equal(callCounts.keySessionUpdate, 0, 'key session not updated');
	  assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	  callbacks.getCertificate(null, ''); // getCertificate promise resolution

	  setTimeout(function () {
	    // Step 2: create media keys, set them, and generate key session request
	    assert.equal(callCounts.getCertificate, 1, 'certificate requested');
	    assert.equal(callCounts.createMediaKeys, 1, 'media keys created');
	    assert.equal(mediaKeys, _setMediaKeys, 'media keys set');
	    assert.equal(callCounts.createSession, 1, 'key session created');
	    assert.equal(callCounts.keySessionGenerateRequest, 1, 'key session request made');
	    assert.equal(callCounts.getLicense, 0, 'license not requested');
	    assert.equal(callCounts.keySessionUpdate, 0, 'key session not updated');
	    assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	    keySessionEventListeners.message({
	      messageType: 'license-request'
	    }); // Step 3: get license

	    assert.equal(callCounts.getCertificate, 1, 'certificate requested');
	    assert.equal(callCounts.createMediaKeys, 1, 'media keys created');
	    assert.equal(mediaKeys, _setMediaKeys, 'media keys set');
	    assert.equal(callCounts.createSession, 1, 'key session created');
	    assert.equal(callCounts.keySessionGenerateRequest, 1, 'key session request made');
	    assert.equal(callCounts.getLicense, 1, 'license requested');
	    assert.equal(callCounts.keySessionUpdate, 0, 'key session not updated');
	    assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	    callbacks.getLicense(); // getLicense promise resolution

	    setTimeout(function () {
	      // Step 4: update key session
	      assert.equal(callCounts.getCertificate, 1, 'certificate requested');
	      assert.equal(callCounts.createMediaKeys, 1, 'media keys created');
	      assert.equal(mediaKeys, _setMediaKeys, 'media keys set');
	      assert.equal(callCounts.createSession, 1, 'key session created');
	      assert.equal(callCounts.keySessionGenerateRequest, 1, 'key session request made');
	      assert.equal(callCounts.getLicense, 1, 'license requested');
	      assert.equal(callCounts.keySessionUpdate, 1, 'key session updated');
	      assert.equal(callCounts.licenseRequestAttempts, 1, 'license request event triggered');
	      assert.equal(errors, 0, 'no errors occurred');
	    });
	  });
	}); // Skip this test in Safari, getSupportedKeySystem is never used in Safari.

	if (!videojs.browser.IS_ANY_SAFARI) {
	  QUnit.test('getSupportedKeySystem error', function (assert) {
	    var done = assert.async(1);
	    getSupportedKeySystem({
	      'un.supported.keysystem': {}
	    }).catch(function (err) {
	      assert.equal(err.name, 'NotSupportedError', 'keysystem access request fails');
	      done();
	    });
	  });
	}

	QUnit.test('errors when missing url/licenseUri or getLicense', function (assert) {
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {}
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha'
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: {},
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'Error: Missing url/licenseUri or getLicense in com.widevine.alpha keySystem configuration.', 'correct error message');
	    done();
	  });
	});
	QUnit.test('errors when missing certificateUri and getCertificate for fairplay', function (assert) {
	  var options = {
	    keySystems: {
	      'com.apple.fps': {
	        url: 'fake-url'
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.apple.fps'
	  };
	  var done = assert.async();
	  standard5July2016({
	    video: {},
	    keySystemAccess: keySystemAccess,
	    options: options
	  }).catch(function (err) {
	    assert.equal(err, 'Error: Missing getCertificate or certificateUri in com.apple.fps keySystem configuration.', 'correct error message');
	    done();
	  });
	});
	QUnit.test('rejects promise when getCertificate throws error', function (assert) {
	  var getCertificate = function getCertificate(options, callback) {
	    callback('error fetching certificate');
	  };

	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {
	        url: 'some-url',
	        getCertificate: getCertificate
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha'
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: {},
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'error fetching certificate', 'correct error message');
	    done();
	  });
	});
	QUnit.test('rejects promise when createMediaKeys rejects', function (assert) {
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': 'some-url'
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.reject();
	    }
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: {},
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'Failed to create and initialize a MediaKeys object', 'uses generic message');
	    done();
	  });
	});
	QUnit.test('rejects promise when createMediaKeys rejects', function (assert) {
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': 'some-url'
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.reject('failed creating mediaKeys');
	    }
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: {},
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'failed creating mediaKeys', 'uses specific error when given');
	    done();
	  });
	});
	QUnit.test('rejects promise when addPendingSessions rejects', function (assert) {
	  var rejectSetServerCertificate = true;
	  var rejectGenerateRequest = true;
	  var rejectSetMediaKeys = true;
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {
	        url: 'some-url',
	        getCertificate: function getCertificate(emeOptions, callback) {
	          callback(null, 'some certificate');
	        }
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.resolve({
	        setServerCertificate: function setServerCertificate() {
	          return resolveReject(rejectSetServerCertificate, 'setServerCertificate failed');
	        },
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener() {},
	            generateRequest: function generateRequest() {
	              return resolveReject(rejectGenerateRequest, 'generateRequest failed');
	            }
	          };
	        }
	      });
	    }
	  };
	  var video = {
	    setMediaKeys: function setMediaKeys() {
	      return resolveReject(rejectSetMediaKeys, 'setMediaKeys failed');
	    }
	  };
	  var done = assert.async(3);
	  var callbacks = [];

	  var test = function test(errMessage, testDescription) {
	    video.mediaKeysObject = undefined;
	    standard5July2016({
	      video: video,
	      keySystemAccess: keySystemAccess,
	      options: options,
	      eventBus: getMockEventBus()
	    }).catch(function (err) {
	      assert.equal(err, errMessage, testDescription);
	      done();

	      if (callbacks[0]) {
	        callbacks.shift()();
	      }
	    });
	  };

	  callbacks.push(function () {
	    rejectSetServerCertificate = false;
	    test('setMediaKeys failed', 'second promise fails');
	  });
	  callbacks.push(function () {
	    rejectSetMediaKeys = false;
	    test('Unable to create or initialize key session', 'third promise fails');
	  });
	  test('setServerCertificate failed', 'first promise fails');
	});
	QUnit.test('getLicense not called for messageType that isnt license-request or license-renewal', function (assert) {
	  var done = assert.async();
	  var getLicenseCalls = 0;
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {
	        url: 'some-url',
	        getLicense: function getLicense(emeOptions, keyMessage, callback) {
	          getLicenseCalls++;
	        }
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.resolve({
	        setServerCertificate: function setServerCertificate() {
	          return Promise.resolve();
	        },
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener(event, callback) {
	              if (event === 'message') {
	                setTimeout(function () {
	                  callback({
	                    message: 'whatever',
	                    messageType: 'do-not-request-license'
	                  });
	                  assert.equal(getLicenseCalls, 0, 'did not call getLicense');
	                  done();
	                });
	              }
	            },
	            keyStatuses: [],
	            generateRequest: function generateRequest() {
	              return Promise.resolve();
	            }
	          };
	        }
	      });
	    }
	  };
	  var video = {
	    setMediaKeys: function setMediaKeys() {
	      return Promise.resolve();
	    }
	  };
	  standard5July2016({
	    video: video,
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  });
	});
	QUnit.test('getLicense promise rejection', function (assert) {
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {
	        url: 'some-url',
	        getLicense: function getLicense(emeOptions, keyMessage, callback) {
	          callback('error getting license');
	        }
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.resolve({
	        setServerCertificate: function setServerCertificate() {
	          return Promise.resolve();
	        },
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener(event, callback) {
	              setTimeout(function () {
	                callback({
	                  message: 'whatever',
	                  messageType: 'license-request'
	                });
	              });
	            },
	            keyStatuses: [],
	            generateRequest: function generateRequest() {
	              return Promise.resolve();
	            }
	          };
	        }
	      });
	    }
	  };
	  var video = {
	    setMediaKeys: function setMediaKeys() {
	      return Promise.resolve();
	    }
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: video,
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'error getting license', 'correct error message');
	    done();
	  });
	});
	QUnit.test('getLicense calls back with error for 400 and 500 status codes', function (assert) {
	  var getLicenseCallback = sinon.spy();
	  var getLicense = defaultGetLicense$1({});

	  function toArrayBuffer(obj) {
	    var json = JSON.stringify(obj);
	    var buffer = new ArrayBuffer(json.length);
	    var bufferView = new Uint8Array(buffer);

	    for (var i = 0; i < json.length; i++) {
	      bufferView[i] = json.charCodeAt(i);
	    }

	    return buffer;
	  }

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 400
	    }, toArrayBuffer({
	      body: 'some-body'
	    }));
	  };

	  getLicense({}, null, getLicenseCallback);

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 500
	    }, toArrayBuffer({
	      body: 'some-body'
	    }));
	  };

	  getLicense({}, null, getLicenseCallback);

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 599
	    }, toArrayBuffer({
	      body: 'some-body'
	    }));
	  };

	  getLicense({}, null, getLicenseCallback);
	  assert.equal(getLicenseCallback.callCount, 3, 'correct callcount');
	  assert.ok(getLicenseCallback.alwaysCalledWith({
	    cause: JSON.stringify({
	      body: 'some-body'
	    })
	  }), 'getLicense callback called with correct error');
	});
	QUnit.test('getLicense calls back with response body for non-400/500 status codes', function (assert) {
	  var getLicenseCallback = sinon.spy();
	  var getLicense = defaultGetLicense$1({});

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 200
	    }, {
	      body: 'some-body'
	    });
	  };

	  getLicense({}, null, getLicenseCallback);

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 399
	    }, {
	      body: 'some-body'
	    });
	  };

	  getLicense({}, null, getLicenseCallback);

	  videojs.xhr = function (params, callback) {
	    return callback(null, {
	      statusCode: 600
	    }, {
	      body: 'some-body'
	    });
	  };

	  getLicense({}, null, getLicenseCallback);
	  assert.equal(getLicenseCallback.callCount, 3, 'correct callcount');
	  assert.equal(getLicenseCallback.alwaysCalledWith(null, {
	    body: 'some-body'
	  }), true, 'getLicense callback called with correct args');
	});
	QUnit.test('keySession.update promise rejection', function (assert) {
	  var options = {
	    keySystems: {
	      'com.widevine.alpha': {
	        url: 'some-url',
	        getLicense: function getLicense(emeOptions, keyMessage, callback) {
	          callback(null, 'license');
	        }
	      }
	    }
	  };
	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return Promise.resolve({
	        setServerCertificate: function setServerCertificate() {
	          return Promise.resolve();
	        },
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener(event, callback) {
	              setTimeout(function () {
	                callback({
	                  messageType: 'license-request',
	                  message: 'whatever'
	                });
	              });
	            },
	            keyStatuses: [],
	            generateRequest: function generateRequest() {
	              return Promise.resolve();
	            },
	            update: function update() {
	              return Promise.reject('keySession update failed');
	            }
	          };
	        }
	      });
	    }
	  };
	  var video = {
	    setMediaKeys: function setMediaKeys() {
	      return Promise.resolve();
	    }
	  };
	  var done = assert.async(1);
	  standard5July2016({
	    video: video,
	    keySystemAccess: keySystemAccess,
	    options: options,
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'keySession update failed', 'correct error message');
	    done();
	  });
	});
	QUnit.test('emeHeaders option sets headers on default license xhr request', function (assert) {
	  var done = assert.async();
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var session = new videojs.EventTarget();

	  videojs.xhr = function (options) {
	    xhrCalls.push(options);
	  };

	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return {
	        createSession: function createSession() {
	          return session;
	        }
	      };
	    }
	  };
	  standard5July2016({
	    keySystemAccess: keySystemAccess,
	    video: {
	      setMediaKeys: function setMediaKeys(createdMediaKeys) {
	        return Promise.resolve(createdMediaKeys);
	      }
	    },
	    initDataType: '',
	    initData: '',
	    options: {
	      keySystems: {
	        'com.widevine.alpha': 'some-url'
	      },
	      emeHeaders: {
	        'Some-Header': 'some-header-value'
	      }
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (e) {});
	  setTimeout(function () {
	    session.trigger({
	      type: 'message',
	      message: 'the-message',
	      messageType: 'license-request'
	    });
	    assert.equal(xhrCalls.length, 1, 'made one XHR');
	    assert.deepEqual(xhrCalls[0], {
	      uri: 'some-url',
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: 'the-message',
	      headers: {
	        'Content-type': 'application/octet-stream',
	        'Some-Header': 'some-header-value'
	      }
	    }, 'made request with proper emeHeaders option value');
	    videojs.xhr = origXhr;
	    done();
	  });
	});
	QUnit.test('licenseHeaders keySystems property overrides emeHeaders value', function (assert) {
	  var done = assert.async();
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var session = new videojs.EventTarget();

	  videojs.xhr = function (options) {
	    xhrCalls.push(options);
	  };

	  var keySystemAccess = {
	    keySystem: 'com.widevine.alpha',
	    createMediaKeys: function createMediaKeys() {
	      return {
	        createSession: function createSession() {
	          return session;
	        }
	      };
	    }
	  };
	  standard5July2016({
	    keySystemAccess: keySystemAccess,
	    video: {
	      setMediaKeys: function setMediaKeys(createdMediaKeys) {
	        return Promise.resolve(createdMediaKeys);
	      }
	    },
	    initDataType: '',
	    initData: '',
	    options: {
	      keySystems: {
	        'com.widevine.alpha': {
	          url: 'some-url',
	          licenseHeaders: {
	            'Some-Header': 'priority-header-value'
	          }
	        }
	      },
	      emeHeaders: {
	        'Some-Header': 'lower-priority-header-value'
	      }
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (e) {});
	  setTimeout(function () {
	    session.trigger({
	      type: 'message',
	      message: 'the-message',
	      messageType: 'license-request'
	    });
	    assert.equal(xhrCalls.length, 1, 'made one XHR');
	    assert.deepEqual(xhrCalls[0], {
	      uri: 'some-url',
	      method: 'POST',
	      responseType: 'arraybuffer',
	      body: 'the-message',
	      headers: {
	        'Content-type': 'application/octet-stream',
	        'Some-Header': 'priority-header-value'
	      }
	    }, 'made request with proper licenseHeaders value');
	    videojs.xhr = origXhr;
	    done();
	  });
	});
	QUnit.test('sets required fairplay defaults if not explicitly configured', function (assert) {
	  var origRequestMediaKeySystemAccess = window_1.navigator.requestMediaKeySystemAccess;

	  window_1.navigator.requestMediaKeySystemAccess = function (keySystem, systemOptions) {
	    assert.ok(systemOptions[0].initDataTypes.indexOf('sinf') !== -1, 'includes required initDataType');
	    assert.ok(systemOptions[0].videoCapabilities[0].contentType.indexOf('video/mp4') !== -1, 'includes required video contentType');
	  };

	  getSupportedKeySystem({
	    'com.apple.fps': {}
	  });
	  window_1.requestMediaKeySystemAccess = origRequestMediaKeySystemAccess;
	});
	QUnit.module('session management');
	QUnit.test('addSession saves options', function (assert) {
	  var video = {
	    pendingSessionData: []
	  };
	  var initDataType = 'temporary';
	  var initData = new Uint8Array();
	  var options = {
	    some: 'option'
	  };

	  var getLicense = function getLicense() {
	    return '';
	  };

	  var removeSession = function removeSession() {
	    return '';
	  };

	  var eventBus = {
	    trigger: function trigger() {}
	  };
	  var contentId = null;
	  addSession({
	    video: video,
	    contentId: contentId,
	    initDataType: initDataType,
	    initData: initData,
	    options: options,
	    getLicense: getLicense,
	    removeSession: removeSession,
	    eventBus: eventBus
	  });
	  assert.deepEqual(video.pendingSessionData, [{
	    initDataType: initDataType,
	    initData: initData,
	    options: options,
	    getLicense: getLicense,
	    removeSession: removeSession,
	    eventBus: eventBus,
	    contentId: contentId
	  }], 'saved options into pendingSessionData array');
	});
	QUnit.test('addPendingSessions reuses saved options', function (assert) {
	  assert.expect(5);
	  var done = assert.async();
	  var options = {
	    some: 'option'
	  };

	  var getLicense = function getLicense(emeOptions, message) {
	    assert.deepEqual(emeOptions, options, 'used pending session data options');
	    return Promise.resolve('license');
	  };

	  var eventListeners = [];
	  var pendingSessionData = [{
	    initDataType: 'temporary',
	    initData: new Uint8Array(),
	    options: options,
	    getLicense: getLicense,
	    removeSession: function removeSession() {
	      return '';
	    },
	    eventBus: {
	      trigger: function trigger() {}
	    }
	  }];
	  var video = {
	    pendingSessionData: pendingSessionData,
	    // internal API, not used in this test
	    setMediaKeys: function setMediaKeys() {
	      return Promise.resolve();
	    }
	  };
	  var createdMediaKeys = {
	    createSession: function createSession() {
	      return {
	        addEventListener: function addEventListener(event, callback) {
	          return eventListeners.push({
	            event: event,
	            callback: callback
	          });
	        },
	        generateRequest: function generateRequest(initDataType, initData) {
	          assert.equal(initDataType, pendingSessionData[0].initDataType, 'generateRequest received correct initDataType');
	          assert.equal(initData, pendingSessionData[0].initData, 'generateRequest received correct initData');
	          assert.equal(eventListeners.length, 2, 'added two event listeners');
	          assert.equal(eventListeners[0].event, 'message', 'added listener for message event'); // callback should call getLicense, which continues this test

	          eventListeners[0].callback({
	            messageType: 'license-request',
	            message: 'test message'
	          });
	          return Promise.resolve();
	        },
	        // this call and everything after is beyond the scope of this test
	        update: function update() {
	          return Promise.resolve();
	        }
	      };
	    }
	  };
	  return addPendingSessions({
	    video: video,
	    createdMediaKeys: createdMediaKeys
	  }).then(function (resolve, reject) {
	    done();
	  });
	});
	QUnit.module('videojs-contrib-eme getSupportedConfigurations');
	QUnit.test('includes audio and video content types', function (assert) {
	  assert.deepEqual(getSupportedConfigurations('com.widevine.alpha', {
	    audioContentType: 'audio/mp4; codecs="mp4a.40.2"',
	    videoContentType: 'video/mp4; codecs="avc1.42E01E"'
	  }), [{
	    audioCapabilities: [{
	      contentType: 'audio/mp4; codecs="mp4a.40.2"'
	    }],
	    videoCapabilities: [{
	      contentType: 'video/mp4; codecs="avc1.42E01E"'
	    }]
	  }], 'included audio and video content types');
	});
	QUnit.test('includes audio and video robustness', function (assert) {
	  assert.deepEqual(getSupportedConfigurations('com.widevine.alpha', {
	    audioRobustness: 'SW_SECURE_CRYPTO',
	    videoRobustness: 'SW_SECURE_CRYPTO'
	  }), [{
	    audioCapabilities: [{
	      robustness: 'SW_SECURE_CRYPTO'
	    }],
	    videoCapabilities: [{
	      robustness: 'SW_SECURE_CRYPTO'
	    }]
	  }], 'included audio and video robustness');
	});
	QUnit.test('includes audio and video content types and robustness', function (assert) {
	  assert.deepEqual(getSupportedConfigurations('com.widevine.alpha', {
	    audioContentType: 'audio/mp4; codecs="mp4a.40.2"',
	    audioRobustness: 'SW_SECURE_CRYPTO',
	    videoContentType: 'video/mp4; codecs="avc1.42E01E"',
	    videoRobustness: 'SW_SECURE_CRYPTO'
	  }), [{
	    audioCapabilities: [{
	      contentType: 'audio/mp4; codecs="mp4a.40.2"',
	      robustness: 'SW_SECURE_CRYPTO'
	    }],
	    videoCapabilities: [{
	      contentType: 'video/mp4; codecs="avc1.42E01E"',
	      robustness: 'SW_SECURE_CRYPTO'
	    }]
	  }], 'included audio and video content types and robustness');
	});
	QUnit.test('includes persistentState', function (assert) {
	  assert.deepEqual(getSupportedConfigurations('com.widevine.alpha', {
	    persistentState: 'optional'
	  }), [{
	    persistentState: 'optional'
	  }], 'included persistentState');
	});
	QUnit.test('uses supportedConfigurations directly if provided', function (assert) {
	  assert.deepEqual(getSupportedConfigurations('com.widevine.alpha', {
	    supportedConfigurations: [{
	      initDataTypes: ['cenc'],
	      audioCapabilities: [{
	        contentType: 'audio/mp4; codecs="mp4a.40.2"',
	        robustness: 'SW_SECURE_CRYPTO',
	        extraOption: 'audio-extra'
	      }],
	      videoCapabilities: [{
	        contentType: 'video/mp4; codecs="avc1.42E01E"',
	        robustness: 'SW_SECURE_CRYPTO',
	        extraOption: 'video-extra'
	      }]
	    }],
	    // should not be used
	    audioContentType: 'audio/mp4; codecs="mp4a.40.5"',
	    audioRobustness: 'HW_SECURE_CRYPTO',
	    videoContentType: 'video/mp4; codecs="avc1.42001e"',
	    videoRobustness: 'HW_SECURE_CRYPTO'
	  }), [{
	    initDataTypes: ['cenc'],
	    audioCapabilities: [{
	      contentType: 'audio/mp4; codecs="mp4a.40.2"',
	      robustness: 'SW_SECURE_CRYPTO',
	      extraOption: 'audio-extra'
	    }],
	    videoCapabilities: [{
	      contentType: 'video/mp4; codecs="avc1.42E01E"',
	      robustness: 'SW_SECURE_CRYPTO',
	      extraOption: 'video-extra'
	    }]
	  }], 'used supportedConfigurations directly');
	});
	QUnit.test('makeNewRequest triggers keysessioncreated', function (assert) {
	  var done = assert.async();
	  var mockSession = getMockSession();
	  makeNewRequest({
	    mediaKeys: {
	      createSession: function createSession() {
	        return mockSession;
	      }
	    },
	    eventBus: {
	      trigger: function trigger(eventName) {
	        if (eventName === 'keysessioncreated') {
	          assert.ok(true, 'got a keysessioncreated event');
	          done();
	        }
	      }
	    }
	  });
	});

	QUnit.module('videojs-contrib-eme fairplay', {
	  beforeEach: function beforeEach() {
	    this.origXhr = videojs.xhr;

	    videojs.xhr = function (params, callback) {
	      return callback(null, {
	        statusCode: 200
	      }, new Uint8Array([0, 1, 2, 3]).buffer);
	    };
	  },
	  afterEach: function afterEach() {
	    videojs.xhr = this.origXhr;
	  }
	});
	QUnit.test('lifecycle', function (assert) {
	  assert.expect(23);
	  var done = assert.async();
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var callbacks = {};
	  var callCounts = {
	    getCertificate: 0,
	    getLicense: 0,
	    updateKeySession: 0,
	    createSession: 0,
	    licenseRequestAttempts: 0
	  };

	  var getCertificate = function getCertificate(emeOptions, callback) {
	    callCounts.getCertificate++;
	    callbacks.getCertificate = callback;
	  };

	  var getLicense = function getLicense(emeOptions, contentId, keyMessage, callback) {
	    callCounts.getLicense++;
	    callbacks.getLicense = callback;
	  };

	  var options = {
	    keySystems: {
	      'com.apple.fps.1_0': {
	        getCertificate: getCertificate,
	        getLicense: getLicense,
	        // not needed due to mocking
	        getContentId: function getContentId() {
	          return 'some content id';
	        }
	      }
	    }
	  };
	  var eventBus = {
	    trigger: function trigger(name) {
	      if (name === 'licenserequestattempted') {
	        callCounts.licenseRequestAttempts++;
	      }
	    }
	  }; // trap event listeners

	  var keySessionEventListeners = {};

	  var updateKeySession = function updateKeySession(key) {
	    callCounts.updateKeySession++;
	  };

	  var onKeySessionCreated;

	  var createSession = function createSession(type, concatenatedData) {
	    callCounts.createSession++;
	    return {
	      addEventListener: function addEventListener(name, callback) {
	        keySessionEventListeners[name] = callback;

	        if (name === 'webkitkeyerror') {
	          // Since we don't have a way of executing code at the end of addKey's promise,
	          // we assume that adding the listener for webkitkeyerror is the last run code
	          // within the promise.
	          onKeySessionCreated();
	        }
	      },
	      update: updateKeySession
	    };
	  }; // mock webkitKeys to avoid browser specific calls and enable us to verify ordering


	  var video = {
	    webkitKeys: {
	      createSession: createSession
	    }
	  };
	  fairplay({
	    video: video,
	    initData: initData,
	    options: options,
	    eventBus: eventBus
	  }).then(function () {
	    done();
	  }); // Step 1: getCertificate

	  assert.equal(callCounts.getCertificate, 1, 'getCertificate has been called');
	  assert.equal(callCounts.createSession, 0, 'a key session has not been created');
	  assert.equal(callCounts.getLicense, 0, 'getLicense has not been called');
	  assert.equal(callCounts.updateKeySession, 0, 'updateKeySession has not been called');
	  assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	  callbacks.getCertificate(null, new Uint16Array([4, 5, 6, 7]).buffer);

	  onKeySessionCreated = function onKeySessionCreated() {
	    // Step 2: create a key session
	    assert.equal(callCounts.getCertificate, 1, 'getCertificate has been called');
	    assert.equal(callCounts.createSession, 1, 'a key session has been created');
	    assert.equal(callCounts.getLicense, 0, 'getLicense has not been called');
	    assert.equal(callCounts.updateKeySession, 0, 'updateKeySession has not been called');
	    assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	    assert.ok(keySessionEventListeners.webkitkeymessage, 'added an event listener for webkitkeymessage');
	    assert.ok(keySessionEventListeners.webkitkeyadded, 'added an event listener for webkitkeyadded');
	    assert.ok(keySessionEventListeners.webkitkeyerror, 'added an event listener for webkitkeyerror');
	    keySessionEventListeners.webkitkeymessage({}); // Step 3: get the key on webkitkeymessage

	    assert.equal(callCounts.getCertificate, 1, 'getCertificate has been called');
	    assert.equal(callCounts.createSession, 1, 'a key session has been created');
	    assert.equal(callCounts.getLicense, 1, 'getLicense has been called');
	    assert.equal(callCounts.updateKeySession, 0, 'updateKeySession has not been called');
	    assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	    callbacks.getLicense(null, []); // Step 4: update the key session with the key

	    assert.equal(callCounts.getCertificate, 1, 'getCertificate has been called');
	    assert.equal(callCounts.createSession, 1, 'a key session has been created');
	    assert.equal(callCounts.getLicense, 1, 'getLicense has been called');
	    assert.equal(callCounts.updateKeySession, 1, 'updateKeySession has been called');
	    assert.equal(callCounts.licenseRequestAttempts, 1, 'license request event triggered');
	    keySessionEventListeners.webkitkeyadded();
	  };
	});
	QUnit.test('error in getCertificate rejects promise', function (assert) {
	  var keySystems = {};
	  var done = assert.async(1);
	  keySystems[FAIRPLAY_KEY_SYSTEM] = {
	    getCertificate: function getCertificate(options, callback) {
	      callback('error in getCertificate');
	    }
	  };
	  fairplay({
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'error in getCertificate', 'message is good');
	    done();
	  });
	});
	QUnit.test('error in WebKitMediaKeys rejects promise', function (assert) {
	  var keySystems = {};
	  var done = assert.async(1);
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {}
	  };

	  window_1.WebKitMediaKeys = function () {
	    throw new Error('unsupported keySystem');
	  };

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {};
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'Could not create MediaKeys', 'message is good');
	    done();
	  });
	});
	QUnit.test('error in webkitSetMediaKeys rejects promise', function (assert) {
	  var keySystems = {};
	  var done = assert.async(1);
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {
	      throw new Error('MediaKeys unusable');
	    }
	  };

	  window_1.WebKitMediaKeys = function () {};

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {};
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'Could not create MediaKeys', 'message is good');
	    done();
	  });
	});
	QUnit.test('error in webkitKeys.createSession rejects promise', function (assert) {
	  var keySystems = {};
	  var done = assert.async(1);
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {
	      video.webkitKeys = {
	        createSession: function createSession() {
	          throw new Error('invalid mimeType or initData');
	        }
	      };
	    }
	  };

	  window_1.WebKitMediaKeys = function () {};

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {};
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'Could not create key session', 'message is good');
	    done();
	  });
	});
	QUnit.test('error in getLicense rejects promise', function (assert) {
	  var keySystems = {};
	  var done = assert.async(1);
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {
	      video.webkitKeys = {
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener(event, callback) {
	              if (event === 'webkitkeymessage') {
	                callback({
	                  message: 'whatever'
	                });
	              }
	            }
	          };
	        }
	      };
	    }
	  };

	  window_1.WebKitMediaKeys = function () {};

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {
	    getLicense: function getLicense(options, contentId, message, callback) {
	      callback('error in getLicense');
	    }
	  };
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'error in getLicense', 'message is good');
	    done();
	  });
	});
	QUnit.test('keysessioncreated fired on key session created', function (assert) {
	  var keySystems = {};
	  var done = assert.async();
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var sessionCreated = false;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {
	      video.webkitKeys = {
	        createSession: function createSession() {
	          sessionCreated = true;
	          return {
	            addEventListener: function addEventListener() {}
	          };
	        }
	      };
	    }
	  };
	  var eventBus = {
	    trigger: function trigger(event) {
	      if (event === 'keysessioncreated') {
	        assert.ok(sessionCreated, 'keysessioncreated fired after session created');
	        done();
	      }
	    }
	  };

	  window_1.WebKitMediaKeys = function () {};

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {
	    licenseUri: 'some-url',
	    certificateUri: 'some-other-url'
	  };
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: eventBus
	  });
	});
	QUnit.test('a webkitkeyerror rejects promise', function (assert) {
	  var keySession;
	  var keySystems = {};
	  var done = assert.async(1);
	  var initData = new Uint8Array([1, 2, 3, 4]).buffer;
	  var video = {
	    webkitSetMediaKeys: function webkitSetMediaKeys() {
	      video.webkitKeys = {
	        createSession: function createSession() {
	          return {
	            addEventListener: function addEventListener(event, callback) {
	              if (event === 'webkitkeyerror') {
	                callback('webkitkeyerror');
	              }
	            },
	            error: {
	              code: 0,
	              systemCode: 1
	            }
	          };
	        }
	      };
	    }
	  };

	  window_1.WebKitMediaKeys = function () {};

	  keySystems[FAIRPLAY_KEY_SYSTEM] = {
	    getLicense: function getLicense(options, contentId, message, callback) {
	      callback(null);
	      keySession.trigger('webkitkeyerror');
	    }
	  };
	  fairplay({
	    video: video,
	    initData: initData,
	    options: {
	      keySystems: keySystems
	    },
	    eventBus: getMockEventBus()
	  }).catch(function (err) {
	    assert.equal(err, 'KeySession error: code 0, systemCode 1', 'message is good');
	    done();
	  });
	});
	QUnit.test('emeHeaders sent with license and certificate requests', function (assert) {
	  var origXhr = videojs.xhr;
	  var emeOptions = {
	    emeHeaders: {
	      'Some-Header': 'some-header-value'
	    }
	  };
	  var fairplayOptions = {
	    licenseUri: 'some-url',
	    certificateUri: 'some-other-url'
	  };
	  var xhrCalls = [];

	  videojs.xhr = function (xhrOptions) {
	    xhrCalls.push(xhrOptions);
	  };

	  var getLicense = defaultGetLicense(fairplayOptions);
	  var getCertificate = defaultGetCertificate(fairplayOptions);
	  getLicense(emeOptions);
	  getCertificate(emeOptions);
	  assert.equal(xhrCalls.length, 2, 'made two XHR requests');
	  assert.deepEqual(xhrCalls[0], {
	    uri: 'some-url',
	    method: 'POST',
	    responseType: 'arraybuffer',
	    body: undefined,
	    headers: {
	      'Content-type': 'application/octet-stream',
	      'Some-Header': 'some-header-value'
	    }
	  }, 'made license request with proper emeHeaders value');
	  assert.deepEqual(xhrCalls[1], {
	    uri: 'some-other-url',
	    responseType: 'arraybuffer',
	    headers: {
	      'Some-Header': 'some-header-value'
	    }
	  }, 'made certificate request with proper emeHeaders value');
	  videojs.xhr = origXhr;
	});
	QUnit.test('licenseHeaders and certificateHeaders properties override emeHeaders value', function (assert) {
	  var origXhr = videojs.xhr;
	  var emeOptions = {
	    emeHeaders: {
	      'Some-Header': 'some-header-value'
	    }
	  };
	  var fairplayOptions = {
	    licenseUri: 'some-url',
	    certificateUri: 'some-other-url',
	    licenseHeaders: {
	      'Some-Header': 'higher-priority-license-header'
	    },
	    certificateHeaders: {
	      'Some-Header': 'higher-priority-cert-header'
	    }
	  };
	  var xhrCalls = [];

	  videojs.xhr = function (xhrOptions) {
	    xhrCalls.push(xhrOptions);
	  };

	  var getLicense = defaultGetLicense(fairplayOptions);
	  var getCertificate = defaultGetCertificate(fairplayOptions);
	  getLicense(emeOptions);
	  getCertificate(emeOptions);
	  assert.equal(xhrCalls.length, 2, 'made two XHR requests');
	  assert.deepEqual(xhrCalls[0], {
	    uri: 'some-url',
	    method: 'POST',
	    responseType: 'arraybuffer',
	    body: undefined,
	    headers: {
	      'Content-type': 'application/octet-stream',
	      'Some-Header': 'higher-priority-license-header'
	    }
	  }, 'made license request with proper licenseHeaders value');
	  assert.deepEqual(xhrCalls[1], {
	    uri: 'some-other-url',
	    responseType: 'arraybuffer',
	    headers: {
	      'Some-Header': 'higher-priority-cert-header'
	    }
	  }, 'made certificate request with proper certificateHeaders value');
	  videojs.xhr = origXhr;
	});

	var license = 'this is a license';
	var challengeElement = "\n  <?xml version=\"1.0\" encoding=\"utf-8\"?>\n  <soap:Envelope\n    xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n    <soap:Body>\n      <AcquireLicenseResponse xmlns=\"http://schemas.microsoft.com/DRM/2007/03/protocols\">\n        <AcquireLicenseResult>\n          <Response xmlns=\"http://schemas.microsoft.com/DRM/2007/03/protocols/messages\">\n            <LicenseResponse xmlns=\"http://schemas.microsoft.com/DRM/2007/03/protocols\">\n              <Version>1</Version>\n              <Licenses>\n                <License>" + license + "</License>\n              </Licenses>\n            </LicenseResponse>\n          </Response>\n        </AcquireLicenseResult>\n      </AcquireLicenseResponse>\n    </soap:Body>\n  </soap:Envelope>";
	var defaultHeaders = [{
	  name: 'Content-Type',
	  value: 'text/xml; charset=utf-8'
	}, {
	  name: 'SOAPAction',
	  value: '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	}];

	var createHeaders = function createHeaders(headers) {
	  return headers.reduce(function (acc, header) {
	    return acc + ("\n      <HttpHeader>\n        <name>" + header.name + "</name>\n        <value>" + header.value + "</value>\n      </HttpHeader>\n    ");
	  }, '');
	};

	var createMessageBuffer = function createMessageBuffer(headers) {
	  headers = headers || defaultHeaders; // can't use TextEncoder because Safari doesn't support it

	  return stringToArrayBuffer("\n    <PlayReadyKeyMessage type=\"LicenseAcquisition\">\n      <LicenseAcquisition Version=\"1\">\n        <Challenge encoding=\"base64encoded\">" + window_1.btoa(challengeElement) + "</Challenge>\n        <HttpHeaders>" + createHeaders(headers) + "</HttpHeaders>\n      </LicenseAcquisition>\n    </PlayReadyKeyMessage>");
	};

	var cov_13j1rp1jb0 = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/ms-prefixed.js',
	      hash = 'e8a72f04ffc231244df836c70faa01d5679c9f00',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/ms-prefixed.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 12,
	          column: 36
	        },
	        end: {
	          line: 12,
	          column: 61
	        }
	      },
	      '1': {
	        start: {
	          line: 14,
	          column: 31
	        },
	        end: {
	          line: 65,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 15,
	          column: 25
	        },
	        end: {
	          line: 15,
	          column: 65
	        }
	      },
	      '3': {
	        start: {
	          line: 17,
	          column: 2
	        },
	        end: {
	          line: 31,
	          column: 3
	        }
	      },
	      '4': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 7
	        }
	      },
	      '5': {
	        start: {
	          line: 19,
	          column: 6
	        },
	        end: {
	          line: 26,
	          column: 7
	        }
	      },
	      '6': {
	        start: {
	          line: 20,
	          column: 8
	        },
	        end: {
	          line: 24,
	          column: 11
	        }
	      },
	      '7': {
	        start: {
	          line: 25,
	          column: 8
	        },
	        end: {
	          line: 25,
	          column: 15
	        }
	      },
	      '8': {
	        start: {
	          line: 28,
	          column: 6
	        },
	        end: {
	          line: 28,
	          column: 26
	        }
	      },
	      '9': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 30,
	          column: 11
	        }
	      },
	      '10': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 37,
	          column: 3
	        }
	      },
	      '11': {
	        start: {
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 47
	        }
	      },
	      '12': {
	        start: {
	          line: 35,
	          column: 9
	        },
	        end: {
	          line: 37,
	          column: 3
	        }
	      },
	      '13': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 26
	        }
	      },
	      '14': {
	        start: {
	          line: 39,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 3
	        }
	      },
	      '15': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 48
	        }
	      },
	      '16': {
	        start: {
	          line: 43,
	          column: 19
	        },
	        end: {
	          line: 58,
	          column: 3
	        }
	      },
	      '17': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 50
	        }
	      },
	      '19': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 53,
	          column: 9
	        }
	      },
	      '21': {
	        start: {
	          line: 54,
	          column: 6
	        },
	        end: {
	          line: 54,
	          column: 13
	        }
	      },
	      '22': {
	        start: {
	          line: 57,
	          column: 4
	        },
	        end: {
	          line: 57,
	          column: 49
	        }
	      },
	      '23': {
	        start: {
	          line: 60,
	          column: 2
	        },
	        end: {
	          line: 64,
	          column: 3
	        }
	      },
	      '24': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 73
	        }
	      },
	      '25': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 87
	        }
	      },
	      '26': {
	        start: {
	          line: 67,
	          column: 29
	        },
	        end: {
	          line: 105,
	          column: 1
	        }
	      },
	      '27': {
	        start: {
	          line: 69,
	          column: 18
	        },
	        end: {
	          line: 69,
	          column: 67
	        }
	      },
	      '28': {
	        start: {
	          line: 71,
	          column: 2
	        },
	        end: {
	          line: 73,
	          column: 3
	        }
	      },
	      '29': {
	        start: {
	          line: 72,
	          column: 4
	        },
	        end: {
	          line: 72,
	          column: 53
	        }
	      },
	      '30': {
	        start: {
	          line: 75,
	          column: 2
	        },
	        end: {
	          line: 75,
	          column: 40
	        }
	      },
	      '31': {
	        start: {
	          line: 86,
	          column: 2
	        },
	        end: {
	          line: 88,
	          column: 5
	        }
	      },
	      '32': {
	        start: {
	          line: 87,
	          column: 4
	        },
	        end: {
	          line: 87,
	          column: 55
	        }
	      },
	      '33': {
	        start: {
	          line: 90,
	          column: 2
	        },
	        end: {
	          line: 97,
	          column: 5
	        }
	      },
	      '34': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 96,
	          column: 7
	        }
	      },
	      '35': {
	        start: {
	          line: 99,
	          column: 2
	        },
	        end: {
	          line: 104,
	          column: 5
	        }
	      },
	      '36': {
	        start: {
	          line: 100,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 7
	        }
	      },
	      '37': {
	        start: {
	          line: 113,
	          column: 2
	        },
	        end: {
	          line: 115,
	          column: 3
	        }
	      },
	      '38': {
	        start: {
	          line: 114,
	          column: 4
	        },
	        end: {
	          line: 114,
	          column: 24
	        }
	      },
	      '39': {
	        start: {
	          line: 117,
	          column: 2
	        },
	        end: {
	          line: 122,
	          column: 3
	        }
	      },
	      '40': {
	        start: {
	          line: 118,
	          column: 4
	        },
	        end: {
	          line: 118,
	          column: 71
	        }
	      },
	      '41': {
	        start: {
	          line: 120,
	          column: 4
	        },
	        end: {
	          line: 121,
	          column: 29
	        }
	      },
	      '42': {
	        start: {
	          line: 124,
	          column: 2
	        },
	        end: {
	          line: 124,
	          column: 52
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 14,
	            column: 31
	          },
	          end: {
	            line: 14,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 70
	          },
	          end: {
	            line: 65,
	            column: 1
	          }
	        },
	        line: 14
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 18,
	            column: 81
	          },
	          end: {
	            line: 18,
	            column: 82
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 95
	          },
	          end: {
	            line: 29,
	            column: 5
	          }
	        },
	        line: 18
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 43,
	            column: 19
	          },
	          end: {
	            line: 43,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 43,
	            column: 42
	          },
	          end: {
	            line: 58,
	            column: 3
	          }
	        },
	        line: 43
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 67,
	            column: 29
	          },
	          end: {
	            line: 67,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 67,
	            column: 69
	          },
	          end: {
	            line: 105,
	            column: 1
	          }
	        },
	        line: 67
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 86,
	            column: 43
	          },
	          end: {
	            line: 86,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 86,
	            column: 54
	          },
	          end: {
	            line: 88,
	            column: 3
	          }
	        },
	        line: 86
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 90,
	            column: 41
	          },
	          end: {
	            line: 90,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 90,
	            column: 52
	          },
	          end: {
	            line: 97,
	            column: 3
	          }
	        },
	        line: 90
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 99,
	            column: 41
	          },
	          end: {
	            line: 99,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 99,
	            column: 47
	          },
	          end: {
	            line: 104,
	            column: 3
	          }
	        },
	        line: 99
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 107,
	            column: 15
	          },
	          end: {
	            line: 107,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 107,
	            column: 57
	          },
	          end: {
	            line: 125,
	            column: 1
	          }
	        },
	        line: 107
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        }],
	        line: 17
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 19,
	            column: 6
	          },
	          end: {
	            line: 26,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 19,
	            column: 6
	          },
	          end: {
	            line: 26,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 6
	          },
	          end: {
	            line: 26,
	            column: 7
	          }
	        }],
	        line: 19
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }],
	        line: 33
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 35,
	            column: 9
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 35,
	            column: 9
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 9
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        }],
	        line: 35
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 39,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 39,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        }],
	        line: 39
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }],
	        line: 44
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }],
	        line: 48
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 60,
	            column: 2
	          },
	          end: {
	            line: 64,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 60,
	            column: 2
	          },
	          end: {
	            line: 64,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 60,
	            column: 2
	          },
	          end: {
	            line: 64,
	            column: 3
	          }
	        }],
	        line: 60
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 71,
	            column: 2
	          },
	          end: {
	            line: 73,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 71,
	            column: 2
	          },
	          end: {
	            line: 73,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 71,
	            column: 2
	          },
	          end: {
	            line: 73,
	            column: 3
	          }
	        }],
	        line: 71
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 113,
	            column: 2
	          },
	          end: {
	            line: 115,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 113,
	            column: 2
	          },
	          end: {
	            line: 115,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 113,
	            column: 2
	          },
	          end: {
	            line: 115,
	            column: 3
	          }
	        }],
	        line: 113
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var PLAYREADY_KEY_SYSTEM = (cov_13j1rp1jb0.s[0]++, 'com.microsoft.playready');
	cov_13j1rp1jb0.s[1]++;
	var addKeyToSession = function addKeyToSession(options, session, event, eventBus) {
	  cov_13j1rp1jb0.f[0]++;
	  var playreadyOptions = (cov_13j1rp1jb0.s[2]++, options.keySystems[PLAYREADY_KEY_SYSTEM]);
	  cov_13j1rp1jb0.s[3]++;

	  if (typeof playreadyOptions.getKey === 'function') {
	    cov_13j1rp1jb0.b[0][0]++;
	    cov_13j1rp1jb0.s[4]++;
	    playreadyOptions.getKey(options, event.destinationURL, event.message.buffer, function (err, key) {
	      cov_13j1rp1jb0.f[1]++;
	      cov_13j1rp1jb0.s[5]++;

	      if (err) {
	        cov_13j1rp1jb0.b[1][0]++;
	        cov_13j1rp1jb0.s[6]++;
	        eventBus.trigger({
	          message: 'Unable to get key: ' + err,
	          target: session,
	          type: 'mskeyerror'
	        });
	        cov_13j1rp1jb0.s[7]++;
	        return;
	      } else {
	        cov_13j1rp1jb0.b[1][1]++;
	      }

	      cov_13j1rp1jb0.s[8]++;
	      session.update(key);
	    });
	    cov_13j1rp1jb0.s[9]++;
	    return;
	  } else {
	    cov_13j1rp1jb0.b[0][1]++;
	  }

	  cov_13j1rp1jb0.s[10]++;

	  if (typeof playreadyOptions === 'string') {
	    cov_13j1rp1jb0.b[2][0]++;
	    cov_13j1rp1jb0.s[11]++;
	    playreadyOptions = {
	      url: playreadyOptions
	    };
	  } else {
	    cov_13j1rp1jb0.b[2][1]++;
	    cov_13j1rp1jb0.s[12]++;

	    if (typeof playreadyOptions === 'boolean') {
	      cov_13j1rp1jb0.b[3][0]++;
	      cov_13j1rp1jb0.s[13]++;
	      playreadyOptions = {};
	    } else {
	      cov_13j1rp1jb0.b[3][1]++;
	    }
	  }

	  cov_13j1rp1jb0.s[14]++;

	  if (!playreadyOptions.url) {
	    cov_13j1rp1jb0.b[4][0]++;
	    cov_13j1rp1jb0.s[15]++;
	    playreadyOptions.url = event.destinationURL;
	  } else {
	    cov_13j1rp1jb0.b[4][1]++;
	  }

	  cov_13j1rp1jb0.s[16]++;

	  var callback = function callback(err, responseBody) {
	    cov_13j1rp1jb0.f[2]++;
	    cov_13j1rp1jb0.s[17]++;

	    if (eventBus) {
	      cov_13j1rp1jb0.b[5][0]++;
	      cov_13j1rp1jb0.s[18]++;
	      eventBus.trigger('licenserequestattempted');
	    } else {
	      cov_13j1rp1jb0.b[5][1]++;
	    }

	    cov_13j1rp1jb0.s[19]++;

	    if (err) {
	      cov_13j1rp1jb0.b[6][0]++;
	      cov_13j1rp1jb0.s[20]++;
	      eventBus.trigger({
	        message: 'Unable to request key from url: ' + playreadyOptions.url,
	        target: session,
	        type: 'mskeyerror'
	      });
	      cov_13j1rp1jb0.s[21]++;
	      return;
	    } else {
	      cov_13j1rp1jb0.b[6][1]++;
	    }

	    cov_13j1rp1jb0.s[22]++;
	    session.update(new Uint8Array(responseBody));
	  };

	  cov_13j1rp1jb0.s[23]++;

	  if (playreadyOptions.getLicense) {
	    cov_13j1rp1jb0.b[7][0]++;
	    cov_13j1rp1jb0.s[24]++;
	    playreadyOptions.getLicense(options, event.message.buffer, callback);
	  } else {
	    cov_13j1rp1jb0.b[7][1]++;
	    cov_13j1rp1jb0.s[25]++;
	    requestPlayreadyLicense(playreadyOptions, event.message.buffer, options, callback);
	  }
	};
	cov_13j1rp1jb0.s[26]++;
	var createSession = function createSession(video, initData, options, eventBus) {
	  cov_13j1rp1jb0.f[3]++;
	  var session = (cov_13j1rp1jb0.s[27]++, video.msKeys.createSession('video/mp4', initData));
	  cov_13j1rp1jb0.s[28]++;

	  if (!session) {
	    cov_13j1rp1jb0.b[8][0]++;
	    cov_13j1rp1jb0.s[29]++;
	    throw new Error('Could not create key session.');
	  } else {
	    cov_13j1rp1jb0.b[8][1]++;
	  }

	  cov_13j1rp1jb0.s[30]++;
	  eventBus.trigger('keysessioncreated');
	  cov_13j1rp1jb0.s[31]++;
	  session.addEventListener('mskeymessage', function (event) {
	    cov_13j1rp1jb0.f[4]++;
	    cov_13j1rp1jb0.s[32]++;
	    addKeyToSession(options, session, event, eventBus);
	  });
	  cov_13j1rp1jb0.s[33]++;
	  session.addEventListener('mskeyerror', function (event) {
	    cov_13j1rp1jb0.f[5]++;
	    cov_13j1rp1jb0.s[34]++;
	    eventBus.trigger({
	      message: 'Unexpected key error from key session with ' + ("code: " + session.error.code + " and systemCode: " + session.error.systemCode),
	      target: session,
	      type: 'mskeyerror'
	    });
	  });
	  cov_13j1rp1jb0.s[35]++;
	  session.addEventListener('mskeyadded', function () {
	    cov_13j1rp1jb0.f[6]++;
	    cov_13j1rp1jb0.s[36]++;
	    eventBus.trigger({
	      target: session,
	      type: 'mskeyadded'
	    });
	  });
	};
	var msPrefixed = (function (_ref) {
	  var video = _ref.video,
	      initData = _ref.initData,
	      options = _ref.options,
	      eventBus = _ref.eventBus;
	  cov_13j1rp1jb0.f[7]++;
	  cov_13j1rp1jb0.s[37]++;

	  if (video.msKeys) {
	    cov_13j1rp1jb0.b[9][0]++;
	    cov_13j1rp1jb0.s[38]++;
	    delete video.msKeys;
	  } else {
	    cov_13j1rp1jb0.b[9][1]++;
	  }

	  cov_13j1rp1jb0.s[39]++;

	  try {
	    cov_13j1rp1jb0.s[40]++;
	    video.msSetMediaKeys(new window_1.MSMediaKeys(PLAYREADY_KEY_SYSTEM));
	  } catch (e) {
	    cov_13j1rp1jb0.s[41]++;
	    throw new Error('Unable to create media keys for PlayReady key system. ' + 'Error: ' + e.message);
	  }

	  cov_13j1rp1jb0.s[42]++;
	  createSession(video, initData, options, eventBus);
	});

	QUnit.module('videojs-contrib-eme ms-prefixed', {
	  beforeEach: function beforeEach() {
	    var _this = this;

	    this.origMSMediaKeys = window_1.MSMediaKeys;

	    window_1.MSMediaKeys = function () {};

	    var session = new videojs.EventTarget();
	    session.keys = [];

	    session.update = function (key) {
	      return session.keys.push(key);
	    }; // mock the video since the APIs won't be available on non IE11 browsers


	    var video = {
	      msSetMediaKeys: function msSetMediaKeys() {
	        video.msKeys = {
	          createSession: function createSession$$1() {
	            return _this.session;
	          }
	        };
	      }
	    };
	    this.session = session;
	    this.video = video;
	  },
	  afterEach: function afterEach() {
	    window_1.MSMediaKeys = this.origMSMediaKeys;
	  }
	});
	QUnit.test('overwrites msKeys', function (assert) {
	  var origMsKeys = {};
	  this.video.msKeys = origMsKeys;
	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': true
	      }
	    },
	    eventBus: getMockEventBus()
	  });
	  assert.notEqual(this.video.msKeys, origMsKeys, 'overwrote msKeys');
	});
	QUnit.test('error thrown when creating keys bubbles up', function (assert) {
	  var _this2 = this;

	  window_1.MSMediaKeys = function () {
	    throw new Error('error');
	  };

	  assert.throws(function () {
	    return msPrefixed({
	      video: _this2.video
	    });
	  }, new Error('Unable to create media keys for PlayReady key system. Error: error'), 'error is thrown with proper message');
	});
	QUnit.test('createSession throws unknown error', function (assert) {
	  var video = {
	    msSetMediaKeys: function msSetMediaKeys() {
	      video.msKeys = {
	        createSession: function createSession$$1() {
	          throw new Error('whatever');
	        }
	      };
	    }
	  };
	  assert.throws(function () {
	    return msPrefixed({
	      video: video
	    });
	  }, new Error('whatever'), 'error is thrown with proper message');
	});
	QUnit.test('throws error if session was not created', function (assert) {
	  var video = {
	    msSetMediaKeys: function msSetMediaKeys() {
	      video.msKeys = {
	        createSession: function createSession$$1() {
	          return null;
	        }
	      };
	    }
	  };
	  assert.throws(function () {
	    return msPrefixed({
	      video: video
	    });
	  }, new Error('Could not create key session.'), 'error is thrown with proper message');
	});
	QUnit.test('throws error on keysession mskeyerror event', function (assert) {
	  var errorMessage;
	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': true
	      }
	    },
	    eventBus: {
	      trigger: function trigger(event) {
	        errorMessage = typeof event === 'string' ? event : event.message;
	      }
	    }
	  });
	  this.session.error = {
	    code: 5,
	    systemCode: 9
	  };
	  this.session.trigger('mskeyerror');
	  assert.equal(errorMessage, 'Unexpected key error from key session with code: 5 and systemCode: 9', 'error is thrown with proper message');
	});
	QUnit.test('calls getKey when provided on key message', function (assert) {
	  var passedOptions = null;
	  var passedDestinationURL = null;
	  var passedBuffer = null;
	  var passedCallback = null;

	  var getKeyCallback = function getKeyCallback(callback) {
	    callback(null, 'a key');
	  };

	  var errorMessage;
	  var emeOptions = {
	    keySystems: {
	      'com.microsoft.playready': {
	        getKey: function getKey(options, destinationURL, buffer, callback) {
	          passedOptions = options;
	          passedDestinationURL = destinationURL;
	          passedBuffer = buffer;
	          passedCallback = callback;
	          getKeyCallback(callback);
	        }
	      }
	    }
	  };
	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: emeOptions,
	    eventBus: {
	      trigger: function trigger(event) {
	        errorMessage = typeof event === 'string' ? event : event.message;
	      }
	    }
	  });
	  assert.notOk(passedOptions, 'getKey not called');
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'url',
	    message: {
	      buffer: 'buffer'
	    }
	  });
	  assert.equal(passedOptions, emeOptions, 'getKey called with options');
	  assert.equal(passedDestinationURL, 'url', 'getKey called with destinationURL');
	  assert.equal(passedBuffer, 'buffer', 'getKey called with buffer');
	  assert.equal(typeof passedCallback, 'function', 'getKey called with callback');
	  assert.equal(this.session.keys.length, 1, 'added key to session');
	  assert.equal(this.session.keys[0], 'a key', 'added correct key to session');

	  getKeyCallback = function getKeyCallback(callback) {
	    callback('an error', 'an errored key');
	  };

	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'url',
	    message: {
	      buffer: 'buffer'
	    }
	  });
	  assert.equal(errorMessage, 'Unable to get key: an error', 'fires mskeyerror on eventBus when callback has an error');
	  assert.equal(this.session.keys.length, 1, 'did not add a new key');
	});
	QUnit.test('makes request when nothing provided on key message', function (assert) {
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var errorMessage;

	  videojs.xhr = function (config, callback) {
	    return xhrCalls.push({
	      config: config,
	      callback: callback
	    });
	  };

	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': true
	      }
	    },
	    eventBus: {
	      trigger: function trigger(event) {
	        if (typeof event === 'object' && event.type === 'mskeyerror') {
	          errorMessage = event.message;
	        }
	      }
	    }
	  });
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'destination-url',
	    message: {
	      buffer: createMessageBuffer()
	    }
	  });
	  assert.equal(xhrCalls.length, 1, 'one xhr request');
	  assert.equal(xhrCalls[0].config.uri, 'destination-url', 'made request to destinationURL');
	  assert.deepEqual(xhrCalls[0].config.headers, {
	    'Content-Type': 'text/xml; charset=utf-8',
	    'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }, 'uses headers from message');
	  assert.equal(xhrCalls[0].config.body, challengeElement, 'sends the challenge element');
	  assert.equal(xhrCalls[0].config.method, 'post', 'request is a post');
	  assert.equal(xhrCalls[0].config.responseType, 'arraybuffer', 'responseType is an arraybuffer');
	  var response = {
	    body: stringToArrayBuffer('key value')
	  };
	  xhrCalls[0].callback('an error', response, response.body);
	  assert.equal(errorMessage, 'Unable to request key from url: destination-url', 'triggers mskeyerror on event bus when callback has an error');
	  assert.equal(this.session.keys.length, 0, 'no key added to session');
	  xhrCalls[0].callback(null, response, response.body);
	  assert.equal(this.session.keys.length, 1, 'key added to session');
	  assert.deepEqual(this.session.keys[0], new Uint8Array(response.body), 'correct key added to session');
	  videojs.xhr = origXhr;
	});
	QUnit.test('makes request on key message when empty object provided in options', function (assert) {
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];

	  videojs.xhr = function (config, callback) {
	    return xhrCalls.push({
	      config: config,
	      callback: callback
	    });
	  };

	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': {}
	      }
	    },
	    eventBus: getMockEventBus()
	  });
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'destination-url',
	    message: {
	      buffer: createMessageBuffer()
	    }
	  });
	  assert.equal(xhrCalls.length, 1, 'one xhr request');
	  assert.equal(xhrCalls[0].config.uri, 'destination-url', 'made request to destinationURL');
	  assert.deepEqual(xhrCalls[0].config.headers, {
	    'Content-Type': 'text/xml; charset=utf-8',
	    'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }, 'uses headers from message');
	  assert.equal(xhrCalls[0].config.body, challengeElement, 'sends the challenge element');
	  assert.equal(xhrCalls[0].config.method, 'post', 'request is a post');
	  assert.equal(xhrCalls[0].config.responseType, 'arraybuffer', 'responseType is an arraybuffer');
	  videojs.xhr = origXhr;
	});
	QUnit.test('makes request with provided url string on key message', function (assert) {
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var errorMessage;

	  videojs.xhr = function (config, callback) {
	    return xhrCalls.push({
	      config: config,
	      callback: callback
	    });
	  };

	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': 'provided-url'
	      }
	    },
	    eventBus: {
	      trigger: function trigger(event) {
	        if (typeof event === 'object' && event.type === 'mskeyerror') {
	          errorMessage = event.message;
	        }
	      }
	    }
	  });
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'destination-url',
	    message: {
	      buffer: createMessageBuffer([{
	        name: 'Content-Type',
	        value: 'text/xml; charset=utf-8'
	      }, {
	        name: 'SOAPAction',
	        value: '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	      }])
	    }
	  });
	  assert.equal(xhrCalls.length, 1, 'one xhr request');
	  assert.equal(xhrCalls[0].config.uri, 'provided-url', 'made request to provided-url');
	  assert.deepEqual(xhrCalls[0].config.headers, {
	    'Content-Type': 'text/xml; charset=utf-8',
	    'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }, 'uses headers from message');
	  assert.equal(xhrCalls[0].config.body, challengeElement, 'sends the challenge element');
	  assert.equal(xhrCalls[0].config.method, 'post', 'request is a post');
	  assert.equal(xhrCalls[0].config.responseType, 'arraybuffer', 'responseType is an arraybuffer');
	  var response = {
	    body: stringToArrayBuffer('key value')
	  };
	  xhrCalls[0].callback('an error', response, response.body);
	  assert.equal(errorMessage, 'Unable to request key from url: provided-url', 'triggers mskeyerror on event bus when callback has an error');
	  assert.equal(this.session.keys.length, 0, 'no key added to session');
	  xhrCalls[0].callback(null, response, response.body);
	  assert.equal(this.session.keys.length, 1, 'key added to session');
	  assert.deepEqual(this.session.keys[0], new Uint8Array(response.body), 'correct key added to session');
	  videojs.xhr = origXhr;
	});
	QUnit.test('makes request with provided url on key message', function (assert) {
	  var origXhr = videojs.xhr;
	  var xhrCalls = [];
	  var callCounts = {
	    licenseRequestAttempts: 0
	  };
	  var errorMessage;

	  videojs.xhr = function (config, callback) {
	    return xhrCalls.push({
	      config: config,
	      callback: callback
	    });
	  };

	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': {
	          url: 'provided-url'
	        }
	      }
	    },
	    eventBus: {
	      trigger: function trigger(event) {
	        if (event === 'licenserequestattempted') {
	          callCounts.licenseRequestAttempts++;
	        } else if (typeof event === 'object' && event.type === 'mskeyerror') {
	          errorMessage = event.message;
	        }
	      }
	    }
	  });
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'destination-url',
	    message: {
	      buffer: createMessageBuffer([{
	        name: 'Content-Type',
	        value: 'text/xml; charset=utf-8'
	      }, {
	        name: 'SOAPAction',
	        value: '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	      }])
	    }
	  });
	  assert.equal(xhrCalls.length, 1, 'one xhr request');
	  assert.equal(xhrCalls[0].config.uri, 'provided-url', 'made request to provided-url');
	  assert.deepEqual(xhrCalls[0].config.headers, {
	    'Content-Type': 'text/xml; charset=utf-8',
	    'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }, 'uses headers from message');
	  assert.equal(xhrCalls[0].config.body, challengeElement, 'sends the challenge element');
	  assert.equal(xhrCalls[0].config.method, 'post', 'request is a post');
	  assert.equal(xhrCalls[0].config.responseType, 'arraybuffer', 'responseType is an arraybuffer');
	  assert.equal(callCounts.licenseRequestAttempts, 0, 'license request event not triggered (since no callback yet)');
	  var response = {
	    body: stringToArrayBuffer('key value')
	  };
	  xhrCalls[0].callback('an error', response, response.body);
	  assert.equal(callCounts.licenseRequestAttempts, 1, 'license request event triggered');
	  assert.equal(errorMessage, 'Unable to request key from url: provided-url', 'triggers mskeyerror on event bus when callback has an error');
	  assert.equal(this.session.keys.length, 0, 'no key added to session');
	  xhrCalls[0].callback(null, response, response.body);
	  assert.equal(callCounts.licenseRequestAttempts, 2, 'second license request event triggered');
	  assert.equal(this.session.keys.length, 1, 'key added to session');
	  assert.deepEqual(this.session.keys[0], new Uint8Array(response.body), 'correct key added to session');
	  videojs.xhr = origXhr;
	});
	QUnit.test('will use a custom getLicense method if one is provided', function (assert) {
	  var callCount = 0;
	  msPrefixed({
	    video: this.video,
	    initData: '',
	    options: {
	      keySystems: {
	        'com.microsoft.playready': {
	          getLicense: function getLicense() {
	            callCount++;
	          }
	        }
	      }
	    },
	    eventBus: getMockEventBus()
	  });
	  var buffer = createMessageBuffer([{
	    name: 'Content-Type',
	    value: 'text/xml; charset=utf-8'
	  }, {
	    name: 'SOAPAction',
	    value: '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }]);
	  this.session.trigger({
	    type: 'mskeymessage',
	    destinationURL: 'destination-url',
	    message: {
	      buffer: buffer
	    }
	  });
	  assert.equal(callCount, 1, 'getLicense was called');
	});
	QUnit.test('createSession triggers keysessioncreated', function (assert) {
	  var video = {
	    msKeys: {
	      createSession: function createSession$$1() {
	        return {
	          addEventListener: function addEventListener() {}
	        };
	      }
	    }
	  };
	  var eventBus = getMockEventBus();
	  createSession(video, '', {}, eventBus);
	  assert.equal(eventBus.calls.length, 1, 'one event triggered');
	  assert.equal(eventBus.calls[0], 'keysessioncreated', 'triggered keysessioncreated event');
	});

	QUnit.module('playready');
	QUnit.test('getMessageContents parses message contents', function (assert) {
	  var _getMessageContents = getMessageContents(createMessageBuffer()),
	      headers = _getMessageContents.headers,
	      message = _getMessageContents.message;

	  assert.deepEqual(headers, {
	    'Content-Type': 'text/xml; charset=utf-8',
	    'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"'
	  }, 'parses headers');
	  assert.deepEqual(message, challengeElement, 'parses challenge element');
	});
	QUnit.test('emeHeaders sent with license requests', function (assert) {
	  var origXhr = videojs.xhr;
	  var emeOptions = {
	    emeHeaders: {
	      'Some-Header': 'some-header-value'
	    }
	  };
	  var keySystemOptions = {
	    url: 'some-url',
	    licenseHeaders: {}
	  };
	  var xhrCalls = [];

	  videojs.xhr = function (xhrOptions) {
	    xhrCalls.push(xhrOptions);
	  };

	  requestPlayreadyLicense(keySystemOptions, createMessageBuffer(), emeOptions);
	  assert.equal(xhrCalls.length, 1, 'made one XHR');
	  assert.deepEqual(xhrCalls[0], {
	    uri: 'some-url',
	    method: 'post',
	    headers: {
	      'Content-Type': 'text/xml; charset=utf-8',
	      'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"',
	      'Some-Header': 'some-header-value'
	    },
	    body: challengeElement,
	    responseType: 'arraybuffer'
	  }, 'license request sent with correct headers');
	  videojs.xhr = origXhr;
	});
	QUnit.test('licenseHeaders property overrides emeHeaders', function (assert) {
	  var origXhr = videojs.xhr;
	  var emeOptions = {
	    emeHeaders: {
	      'Some-Header': 'some-header-value'
	    }
	  };
	  var keySystemOptions = {
	    url: 'some-url',
	    licenseHeaders: {
	      'Some-Header': 'priority-header-value'
	    }
	  };
	  var xhrCalls = [];

	  videojs.xhr = function (xhrOptions) {
	    xhrCalls.push(xhrOptions);
	  };

	  requestPlayreadyLicense(keySystemOptions, createMessageBuffer(), emeOptions);
	  assert.equal(xhrCalls.length, 1, 'made one XHR');
	  assert.deepEqual(xhrCalls[0], {
	    uri: 'some-url',
	    method: 'post',
	    headers: {
	      'Content-Type': 'text/xml; charset=utf-8',
	      'SOAPAction': '"http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense"',
	      'Some-Header': 'priority-header-value'
	    },
	    body: challengeElement,
	    responseType: 'arraybuffer'
	  }, 'license request sent with correct headers');
	  videojs.xhr = origXhr;
	});

	var cov_uhwo2tac4 = function () {
	  var path = '/Users/bclifford/Code/eme-release/src/plugin.js',
	      hash = 'e01cc5e4e4ff1e38dc295429c5c1493078740cb0',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/bclifford/Code/eme-release/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 14,
	          column: 26
	        },
	        end: {
	          line: 40,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 15,
	          column: 2
	        },
	        end: {
	          line: 37,
	          column: 3
	        }
	      },
	      '2': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 5
	        }
	      },
	      '3': {
	        start: {
	          line: 19,
	          column: 6
	        },
	        end: {
	          line: 19,
	          column: 15
	        }
	      },
	      '4': {
	        start: {
	          line: 31,
	          column: 26
	        },
	        end: {
	          line: 31,
	          column: 63
	        }
	      },
	      '5': {
	        start: {
	          line: 32,
	          column: 27
	        },
	        end: {
	          line: 32,
	          column: 52
	        }
	      },
	      '6': {
	        start: {
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 5
	        }
	      },
	      '7': {
	        start: {
	          line: 35,
	          column: 6
	        },
	        end: {
	          line: 35,
	          column: 18
	        }
	      },
	      '8': {
	        start: {
	          line: 39,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 15
	        }
	      },
	      '9': {
	        start: {
	          line: 42,
	          column: 29
	        },
	        end: {
	          line: 49,
	          column: 1
	        }
	      },
	      '10': {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 48,
	          column: 3
	        }
	      },
	      '11': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 5
	        }
	      },
	      '12': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 28
	        }
	      },
	      '13': {
	        start: {
	          line: 46,
	          column: 6
	        },
	        end: {
	          line: 46,
	          column: 13
	        }
	      },
	      '14': {
	        start: {
	          line: 51,
	          column: 36
	        },
	        end: {
	          line: 93,
	          column: 1
	        }
	      },
	      '15': {
	        start: {
	          line: 52,
	          column: 2
	        },
	        end: {
	          line: 55,
	          column: 3
	        }
	      },
	      '16': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 29
	        }
	      },
	      '17': {
	        start: {
	          line: 57,
	          column: 17
	        },
	        end: {
	          line: 57,
	          column: 31
	        }
	      },
	      '18': {
	        start: {
	          line: 59,
	          column: 2
	        },
	        end: {
	          line: 92,
	          column: 5
	        }
	      },
	      '19': {
	        start: {
	          line: 60,
	          column: 22
	        },
	        end: {
	          line: 60,
	          column: 47
	        }
	      },
	      '20': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 66,
	          column: 5
	        }
	      },
	      '21': {
	        start: {
	          line: 65,
	          column: 6
	        },
	        end: {
	          line: 65,
	          column: 52
	        }
	      },
	      '22': {
	        start: {
	          line: 73,
	          column: 4
	        },
	        end: {
	          line: 79,
	          column: 5
	        }
	      },
	      '23': {
	        start: {
	          line: 78,
	          column: 6
	        },
	        end: {
	          line: 78,
	          column: 31
	        }
	      },
	      '24': {
	        start: {
	          line: 81,
	          column: 4
	        },
	        end: {
	          line: 81,
	          column: 32
	        }
	      },
	      '25': {
	        start: {
	          line: 83,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 7
	        }
	      },
	      '26': {
	        start: {
	          line: 95,
	          column: 40
	        },
	        end: {
	          line: 111,
	          column: 1
	        }
	      },
	      '27': {
	        start: {
	          line: 96,
	          column: 2
	        },
	        end: {
	          line: 99,
	          column: 3
	        }
	      },
	      '28': {
	        start: {
	          line: 98,
	          column: 4
	        },
	        end: {
	          line: 98,
	          column: 29
	        }
	      },
	      '29': {
	        start: {
	          line: 105,
	          column: 2
	        },
	        end: {
	          line: 110,
	          column: 5
	        }
	      },
	      '30': {
	        start: {
	          line: 113,
	          column: 36
	        },
	        end: {
	          line: 155,
	          column: 1
	        }
	      },
	      '31': {
	        start: {
	          line: 114,
	          column: 2
	        },
	        end: {
	          line: 117,
	          column: 3
	        }
	      },
	      '32': {
	        start: {
	          line: 116,
	          column: 4
	        },
	        end: {
	          line: 116,
	          column: 11
	        }
	      },
	      '33': {
	        start: {
	          line: 127,
	          column: 2
	        },
	        end: {
	          line: 133,
	          column: 3
	        }
	      },
	      '34': {
	        start: {
	          line: 127,
	          column: 40
	        },
	        end: {
	          line: 127,
	          column: 64
	        }
	      },
	      '35': {
	        start: {
	          line: 132,
	          column: 4
	        },
	        end: {
	          line: 132,
	          column: 11
	        }
	      },
	      '36': {
	        start: {
	          line: 135,
	          column: 17
	        },
	        end: {
	          line: 135,
	          column: 31
	        }
	      },
	      '37': {
	        start: {
	          line: 138,
	          column: 2
	        },
	        end: {
	          line: 141,
	          column: 3
	        }
	      },
	      '38': {
	        start: {
	          line: 140,
	          column: 4
	        },
	        end: {
	          line: 140,
	          column: 61
	        }
	      },
	      '39': {
	        start: {
	          line: 143,
	          column: 2
	        },
	        end: {
	          line: 145,
	          column: 3
	        }
	      },
	      '40': {
	        start: {
	          line: 144,
	          column: 4
	        },
	        end: {
	          line: 144,
	          column: 11
	        }
	      },
	      '41': {
	        start: {
	          line: 147,
	          column: 2
	        },
	        end: {
	          line: 147,
	          column: 47
	        }
	      },
	      '42': {
	        start: {
	          line: 149,
	          column: 2
	        },
	        end: {
	          line: 154,
	          column: 5
	        }
	      },
	      '43': {
	        start: {
	          line: 157,
	          column: 26
	        },
	        end: {
	          line: 159,
	          column: 1
	        }
	      },
	      '44': {
	        start: {
	          line: 158,
	          column: 2
	        },
	        end: {
	          line: 158,
	          column: 74
	        }
	      },
	      '45': {
	        start: {
	          line: 169,
	          column: 29
	        },
	        end: {
	          line: 176,
	          column: 1
	        }
	      },
	      '46': {
	        start: {
	          line: 170,
	          column: 14
	        },
	        end: {
	          line: 170,
	          column: 26
	        }
	      },
	      '47': {
	        start: {
	          line: 172,
	          column: 2
	        },
	        end: {
	          line: 175,
	          column: 3
	        }
	      },
	      '48': {
	        start: {
	          line: 173,
	          column: 4
	        },
	        end: {
	          line: 173,
	          column: 31
	        }
	      },
	      '49': {
	        start: {
	          line: 174,
	          column: 4
	        },
	        end: {
	          line: 174,
	          column: 29
	        }
	      },
	      '50': {
	        start: {
	          line: 186,
	          column: 31
	        },
	        end: {
	          line: 208,
	          column: 1
	        }
	      },
	      '51': {
	        start: {
	          line: 187,
	          column: 2
	        },
	        end: {
	          line: 207,
	          column: 4
	        }
	      },
	      '52': {
	        start: {
	          line: 188,
	          column: 18
	        },
	        end: {
	          line: 191,
	          column: 5
	        }
	      },
	      '53': {
	        start: {
	          line: 193,
	          column: 4
	        },
	        end: {
	          line: 204,
	          column: 5
	        }
	      },
	      '54': {
	        start: {
	          line: 194,
	          column: 6
	        },
	        end: {
	          line: 194,
	          column: 31
	        }
	      },
	      '55': {
	        start: {
	          line: 195,
	          column: 11
	        },
	        end: {
	          line: 204,
	          column: 5
	        }
	      },
	      '56': {
	        start: {
	          line: 196,
	          column: 6
	        },
	        end: {
	          line: 198,
	          column: 7
	        }
	      },
	      '57': {
	        start: {
	          line: 197,
	          column: 8
	        },
	        end: {
	          line: 197,
	          column: 41
	        }
	      },
	      '58': {
	        start: {
	          line: 199,
	          column: 6
	        },
	        end: {
	          line: 203,
	          column: 7
	        }
	      },
	      '59': {
	        start: {
	          line: 202,
	          column: 8
	        },
	        end: {
	          line: 202,
	          column: 37
	        }
	      },
	      '60': {
	        start: {
	          line: 206,
	          column: 4
	        },
	        end: {
	          line: 206,
	          column: 24
	        }
	      },
	      '61': {
	        start: {
	          line: 221,
	          column: 22
	        },
	        end: {
	          line: 315,
	          column: 1
	        }
	      },
	      '62': {
	        start: {
	          line: 222,
	          column: 2
	        },
	        end: {
	          line: 224,
	          column: 3
	        }
	      },
	      '63': {
	        start: {
	          line: 223,
	          column: 4
	        },
	        end: {
	          line: 223,
	          column: 11
	        }
	      },
	      '64': {
	        start: {
	          line: 226,
	          column: 2
	        },
	        end: {
	          line: 226,
	          column: 24
	        }
	      },
	      '65': {
	        start: {
	          line: 228,
	          column: 2
	        },
	        end: {
	          line: 314,
	          column: 3
	        }
	      },
	      '66': {
	        start: {
	          line: 231,
	          column: 4
	        },
	        end: {
	          line: 238,
	          column: 7
	        }
	      },
	      '67': {
	        start: {
	          line: 235,
	          column: 6
	        },
	        end: {
	          line: 235,
	          column: 28
	        }
	      },
	      '68': {
	        start: {
	          line: 236,
	          column: 6
	        },
	        end: {
	          line: 237,
	          column: 25
	        }
	      },
	      '69': {
	        start: {
	          line: 239,
	          column: 9
	        },
	        end: {
	          line: 314,
	          column: 3
	        }
	      },
	      '70': {
	        start: {
	          line: 240,
	          column: 21
	        },
	        end: {
	          line: 250,
	          column: 5
	        }
	      },
	      '71': {
	        start: {
	          line: 247,
	          column: 6
	        },
	        end: {
	          line: 247,
	          column: 28
	        }
	      },
	      '72': {
	        start: {
	          line: 248,
	          column: 6
	        },
	        end: {
	          line: 249,
	          column: 25
	        }
	      },
	      '73': {
	        start: {
	          line: 254,
	          column: 4
	        },
	        end: {
	          line: 290,
	          column: 7
	        }
	      },
	      '74': {
	        start: {
	          line: 255,
	          column: 22
	        },
	        end: {
	          line: 255,
	          column: 40
	        }
	      },
	      '75': {
	        start: {
	          line: 256,
	          column: 40
	        },
	        end: {
	          line: 256,
	          column: 81
	        }
	      },
	      '76': {
	        start: {
	          line: 257,
	          column: 18
	        },
	        end: {
	          line: 257,
	          column: 30
	        }
	      },
	      '77': {
	        start: {
	          line: 260,
	          column: 6
	        },
	        end: {
	          line: 260,
	          column: 66
	        }
	      },
	      '78': {
	        start: {
	          line: 264,
	          column: 6
	        },
	        end: {
	          line: 269,
	          column: 7
	        }
	      },
	      '79': {
	        start: {
	          line: 265,
	          column: 8
	        },
	        end: {
	          line: 268,
	          column: 10
	        }
	      },
	      '80': {
	        start: {
	          line: 276,
	          column: 6
	        },
	        end: {
	          line: 289,
	          column: 7
	        }
	      },
	      '81': {
	        start: {
	          line: 279,
	          column: 8
	        },
	        end: {
	          line: 279,
	          column: 63
	        }
	      },
	      '82': {
	        start: {
	          line: 280,
	          column: 8
	        },
	        end: {
	          line: 284,
	          column: 38
	        }
	      },
	      '83': {
	        start: {
	          line: 281,
	          column: 10
	        },
	        end: {
	          line: 281,
	          column: 61
	        }
	      },
	      '84': {
	        start: {
	          line: 282,
	          column: 10
	        },
	        end: {
	          line: 282,
	          column: 51
	        }
	      },
	      '85': {
	        start: {
	          line: 283,
	          column: 10
	        },
	        end: {
	          line: 283,
	          column: 26
	        }
	      },
	      '86': {
	        start: {
	          line: 288,
	          column: 8
	        },
	        end: {
	          line: 288,
	          column: 24
	        }
	      },
	      '87': {
	        start: {
	          line: 292,
	          column: 9
	        },
	        end: {
	          line: 314,
	          column: 3
	        }
	      },
	      '88': {
	        start: {
	          line: 298,
	          column: 4
	        },
	        end: {
	          line: 308,
	          column: 7
	        }
	      },
	      '89': {
	        start: {
	          line: 302,
	          column: 6
	        },
	        end: {
	          line: 302,
	          column: 28
	        }
	      },
	      '90': {
	        start: {
	          line: 303,
	          column: 6
	        },
	        end: {
	          line: 307,
	          column: 7
	        }
	      },
	      '91': {
	        start: {
	          line: 304,
	          column: 8
	        },
	        end: {
	          line: 304,
	          column: 91
	        }
	      },
	      '92': {
	        start: {
	          line: 306,
	          column: 8
	        },
	        end: {
	          line: 306,
	          column: 24
	        }
	      },
	      '93': {
	        start: {
	          line: 309,
	          column: 4
	        },
	        end: {
	          line: 309,
	          column: 44
	        }
	      },
	      '94': {
	        start: {
	          line: 311,
	          column: 4
	        },
	        end: {
	          line: 313,
	          column: 7
	        }
	      },
	      '95': {
	        start: {
	          line: 312,
	          column: 6
	        },
	        end: {
	          line: 312,
	          column: 47
	        }
	      },
	      '96': {
	        start: {
	          line: 329,
	          column: 12
	        },
	        end: {
	          line: 405,
	          column: 1
	        }
	      },
	      '97': {
	        start: {
	          line: 330,
	          column: 17
	        },
	        end: {
	          line: 330,
	          column: 21
	        }
	      },
	      '98': {
	        start: {
	          line: 332,
	          column: 19
	        },
	        end: {
	          line: 332,
	          column: 42
	        }
	      },
	      '99': {
	        start: {
	          line: 334,
	          column: 2
	        },
	        end: {
	          line: 334,
	          column: 54
	        }
	      },
	      '100': {
	        start: {
	          line: 334,
	          column: 21
	        },
	        end: {
	          line: 334,
	          column: 52
	        }
	      },
	      '101': {
	        start: {
	          line: 337,
	          column: 2
	        },
	        end: {
	          line: 404,
	          column: 4
	        }
	      },
	      '102': {
	        start: {
	          line: 351,
	          column: 31
	        },
	        end: {
	          line: 355,
	          column: 7
	        }
	      },
	      '103': {
	        start: {
	          line: 358,
	          column: 33
	        },
	        end: {
	          line: 362,
	          column: 7
	        }
	      },
	      '104': {
	        start: {
	          line: 364,
	          column: 6
	        },
	        end: {
	          line: 364,
	          column: 28
	        }
	      },
	      '105': {
	        start: {
	          line: 366,
	          column: 6
	        },
	        end: {
	          line: 401,
	          column: 7
	        }
	      },
	      '106': {
	        start: {
	          line: 367,
	          column: 8
	        },
	        end: {
	          line: 374,
	          column: 13
	        }
	      },
	      '107': {
	        start: {
	          line: 368,
	          column: 22
	        },
	        end: {
	          line: 368,
	          column: 32
	        }
	      },
	      '108': {
	        start: {
	          line: 370,
	          column: 12
	        },
	        end: {
	          line: 370,
	          column: 28
	        }
	      },
	      '109': {
	        start: {
	          line: 371,
	          column: 12
	        },
	        end: {
	          line: 373,
	          column: 13
	        }
	      },
	      '110': {
	        start: {
	          line: 372,
	          column: 14
	        },
	        end: {
	          line: 372,
	          column: 30
	        }
	      },
	      '111': {
	        start: {
	          line: 375,
	          column: 13
	        },
	        end: {
	          line: 401,
	          column: 7
	        }
	      },
	      '112': {
	        start: {
	          line: 376,
	          column: 29
	        },
	        end: {
	          line: 387,
	          column: 9
	        }
	      },
	      '113': {
	        start: {
	          line: 377,
	          column: 10
	        },
	        end: {
	          line: 377,
	          column: 55
	        }
	      },
	      '114': {
	        start: {
	          line: 378,
	          column: 10
	        },
	        end: {
	          line: 378,
	          column: 55
	        }
	      },
	      '115': {
	        start: {
	          line: 379,
	          column: 10
	        },
	        end: {
	          line: 386,
	          column: 11
	        }
	      },
	      '116': {
	        start: {
	          line: 380,
	          column: 12
	        },
	        end: {
	          line: 380,
	          column: 41
	        }
	      },
	      '117': {
	        start: {
	          line: 381,
	          column: 12
	        },
	        end: {
	          line: 383,
	          column: 13
	        }
	      },
	      '118': {
	        start: {
	          line: 382,
	          column: 14
	        },
	        end: {
	          line: 382,
	          column: 38
	        }
	      },
	      '119': {
	        start: {
	          line: 385,
	          column: 12
	        },
	        end: {
	          line: 385,
	          column: 23
	        }
	      },
	      '120': {
	        start: {
	          line: 389,
	          column: 8
	        },
	        end: {
	          line: 389,
	          column: 53
	        }
	      },
	      '121': {
	        start: {
	          line: 390,
	          column: 8
	        },
	        end: {
	          line: 390,
	          column: 53
	        }
	      },
	      '122': {
	        start: {
	          line: 391,
	          column: 8
	        },
	        end: {
	          line: 400,
	          column: 9
	        }
	      },
	      '123': {
	        start: {
	          line: 392,
	          column: 10
	        },
	        end: {
	          line: 392,
	          column: 104
	        }
	      },
	      '124': {
	        start: {
	          line: 394,
	          column: 10
	        },
	        end: {
	          line: 394,
	          column: 55
	        }
	      },
	      '125': {
	        start: {
	          line: 395,
	          column: 10
	        },
	        end: {
	          line: 395,
	          column: 55
	        }
	      },
	      '126': {
	        start: {
	          line: 396,
	          column: 10
	        },
	        end: {
	          line: 396,
	          column: 26
	        }
	      },
	      '127': {
	        start: {
	          line: 397,
	          column: 10
	        },
	        end: {
	          line: 399,
	          column: 11
	        }
	      },
	      '128': {
	        start: {
	          line: 398,
	          column: 12
	        },
	        end: {
	          line: 398,
	          column: 28
	        }
	      },
	      '129': {
	        start: {
	          line: 408,
	          column: 23
	        },
	        end: {
	          line: 408,
	          column: 63
	        }
	      },
	      '130': {
	        start: {
	          line: 410,
	          column: 0
	        },
	        end: {
	          line: 410,
	          column: 27
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 14,
	            column: 26
	          },
	          end: {
	            line: 14,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 50
	          },
	          end: {
	            line: 40,
	            column: 1
	          }
	        },
	        line: 14
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 42,
	            column: 29
	          },
	          end: {
	            line: 42,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 42,
	            column: 53
	          },
	          end: {
	            line: 49,
	            column: 1
	          }
	        },
	        line: 42
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 51,
	            column: 36
	          },
	          end: {
	            line: 51,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 51,
	            column: 76
	          },
	          end: {
	            line: 93,
	            column: 1
	          }
	        },
	        line: 51
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 59,
	            column: 56
	          },
	          end: {
	            line: 59,
	            column: 57
	          }
	        },
	        loc: {
	          start: {
	            line: 59,
	            column: 77
	          },
	          end: {
	            line: 92,
	            column: 3
	          }
	        },
	        line: 59
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 95,
	            column: 40
	          },
	          end: {
	            line: 95,
	            column: 41
	          }
	        },
	        loc: {
	          start: {
	            line: 95,
	            column: 70
	          },
	          end: {
	            line: 111,
	            column: 1
	          }
	        },
	        line: 95
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 113,
	            column: 36
	          },
	          end: {
	            line: 113,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 113,
	            column: 76
	          },
	          end: {
	            line: 155,
	            column: 1
	          }
	        },
	        line: 113
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 127,
	            column: 22
	          },
	          end: {
	            line: 127,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 127,
	            column: 40
	          },
	          end: {
	            line: 127,
	            column: 64
	          }
	        },
	        line: 127
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 157,
	            column: 26
	          },
	          end: {
	            line: 157,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 157,
	            column: 38
	          },
	          end: {
	            line: 159,
	            column: 1
	          }
	        },
	        line: 157
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 169,
	            column: 29
	          },
	          end: {
	            line: 169,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 169,
	            column: 41
	          },
	          end: {
	            line: 176,
	            column: 1
	          }
	        },
	        line: 169
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 186,
	            column: 31
	          },
	          end: {
	            line: 186,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 186,
	            column: 43
	          },
	          end: {
	            line: 208,
	            column: 1
	          }
	        },
	        line: 186
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 187,
	            column: 9
	          },
	          end: {
	            line: 187,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 187,
	            column: 23
	          },
	          end: {
	            line: 207,
	            column: 3
	          }
	        },
	        line: 187
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 221,
	            column: 22
	          },
	          end: {
	            line: 221,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 221,
	            column: 44
	          },
	          end: {
	            line: 315,
	            column: 1
	          }
	        },
	        line: 221
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 231,
	            column: 51
	          },
	          end: {
	            line: 231,
	            column: 52
	          }
	        },
	        loc: {
	          start: {
	            line: 231,
	            column: 62
	          },
	          end: {
	            line: 238,
	            column: 5
	          }
	        },
	        line: 231
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 240,
	            column: 21
	          },
	          end: {
	            line: 240,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 240,
	            column: 32
	          },
	          end: {
	            line: 250,
	            column: 5
	          }
	        },
	        line: 240
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 254,
	            column: 55
	          },
	          end: {
	            line: 254,
	            column: 56
	          }
	        },
	        loc: {
	          start: {
	            line: 254,
	            column: 66
	          },
	          end: {
	            line: 290,
	            column: 5
	          }
	        },
	        line: 254
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 280,
	            column: 62
	          },
	          end: {
	            line: 280,
	            column: 63
	          }
	        },
	        loc: {
	          start: {
	            line: 280,
	            column: 68
	          },
	          end: {
	            line: 284,
	            column: 9
	          }
	        },
	        line: 280
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 298,
	            column: 51
	          },
	          end: {
	            line: 298,
	            column: 52
	          }
	        },
	        loc: {
	          start: {
	            line: 298,
	            column: 62
	          },
	          end: {
	            line: 308,
	            column: 5
	          }
	        },
	        line: 298
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 311,
	            column: 25
	          },
	          end: {
	            line: 311,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 311,
	            column: 31
	          },
	          end: {
	            line: 313,
	            column: 5
	          }
	        },
	        line: 311
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 329,
	            column: 12
	          },
	          end: {
	            line: 329,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 329,
	            column: 35
	          },
	          end: {
	            line: 405,
	            column: 1
	          }
	        },
	        line: 329
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 334,
	            column: 15
	          },
	          end: {
	            line: 334,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 334,
	            column: 21
	          },
	          end: {
	            line: 334,
	            column: 52
	          }
	        },
	        line: 334
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 348,
	            column: 52
	          },
	          end: {
	            line: 348,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 348,
	            column: 63
	          },
	          end: {
	            line: 348,
	            column: 65
	          }
	        },
	        line: 348
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 368,
	            column: 16
	          },
	          end: {
	            line: 368,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 368,
	            column: 22
	          },
	          end: {
	            line: 368,
	            column: 32
	          }
	        },
	        line: 368
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 369,
	            column: 17
	          },
	          end: {
	            line: 369,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 369,
	            column: 28
	          },
	          end: {
	            line: 374,
	            column: 11
	          }
	        },
	        line: 369
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 376,
	            column: 29
	          },
	          end: {
	            line: 376,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 376,
	            column: 40
	          },
	          end: {
	            line: 387,
	            column: 9
	          }
	        },
	        line: 376
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 18,
	            column: 4
	          },
	          end: {
	            line: 20,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 18,
	            column: 4
	          },
	          end: {
	            line: 20,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 18,
	            column: 4
	          },
	          end: {
	            line: 20,
	            column: 5
	          }
	        }],
	        line: 18
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 36,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 36,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 36,
	            column: 5
	          }
	        }],
	        line: 34
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        }],
	        line: 44
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 52,
	            column: 2
	          },
	          end: {
	            line: 55,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 52,
	            column: 2
	          },
	          end: {
	            line: 55,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 2
	          },
	          end: {
	            line: 55,
	            column: 3
	          }
	        }],
	        line: 52
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 52,
	            column: 37
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 52,
	            column: 14
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 18
	          },
	          end: {
	            line: 52,
	            column: 37
	          }
	        }],
	        line: 52
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 66,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 66,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 4
	          },
	          end: {
	            line: 66,
	            column: 5
	          }
	        }],
	        line: 63
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 63,
	            column: 8
	          },
	          end: {
	            line: 64,
	            column: 42
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 63,
	            column: 8
	          },
	          end: {
	            line: 63,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 64,
	            column: 8
	          },
	          end: {
	            line: 64,
	            column: 42
	          }
	        }],
	        line: 63
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 73,
	            column: 4
	          },
	          end: {
	            line: 79,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 73,
	            column: 4
	          },
	          end: {
	            line: 79,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 73,
	            column: 4
	          },
	          end: {
	            line: 79,
	            column: 5
	          }
	        }],
	        line: 73
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 73,
	            column: 8
	          },
	          end: {
	            line: 73,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 73,
	            column: 8
	          },
	          end: {
	            line: 73,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 73,
	            column: 42
	          },
	          end: {
	            line: 73,
	            column: 51
	          }
	        }],
	        line: 73
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 96,
	            column: 2
	          },
	          end: {
	            line: 99,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 96,
	            column: 2
	          },
	          end: {
	            line: 99,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 96,
	            column: 2
	          },
	          end: {
	            line: 99,
	            column: 3
	          }
	        }],
	        line: 96
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 96,
	            column: 6
	          },
	          end: {
	            line: 96,
	            column: 88
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 96,
	            column: 6
	          },
	          end: {
	            line: 96,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 96,
	            column: 29
	          },
	          end: {
	            line: 96,
	            column: 69
	          }
	        }, {
	          start: {
	            line: 96,
	            column: 73
	          },
	          end: {
	            line: 96,
	            column: 88
	          }
	        }],
	        line: 96
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 117,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 117,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 117,
	            column: 3
	          }
	        }],
	        line: 114
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 114,
	            column: 6
	          },
	          end: {
	            line: 114,
	            column: 70
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 114,
	            column: 6
	          },
	          end: {
	            line: 114,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 114,
	            column: 29
	          },
	          end: {
	            line: 114,
	            column: 70
	          }
	        }],
	        line: 114
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 127,
	            column: 2
	          },
	          end: {
	            line: 133,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 127,
	            column: 2
	          },
	          end: {
	            line: 133,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 2
	          },
	          end: {
	            line: 133,
	            column: 3
	          }
	        }],
	        line: 127
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 127,
	            column: 40
	          },
	          end: {
	            line: 127,
	            column: 64
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 127,
	            column: 40
	          },
	          end: {
	            line: 127,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 47
	          },
	          end: {
	            line: 127,
	            column: 64
	          }
	        }],
	        line: 127
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 138,
	            column: 2
	          },
	          end: {
	            line: 141,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 138,
	            column: 2
	          },
	          end: {
	            line: 141,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 138,
	            column: 2
	          },
	          end: {
	            line: 141,
	            column: 3
	          }
	        }],
	        line: 138
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 138,
	            column: 6
	          },
	          end: {
	            line: 139,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 138,
	            column: 6
	          },
	          end: {
	            line: 138,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 139,
	            column: 6
	          },
	          end: {
	            line: 139,
	            column: 51
	          }
	        }],
	        line: 138
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 143,
	            column: 2
	          },
	          end: {
	            line: 145,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 143,
	            column: 2
	          },
	          end: {
	            line: 145,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 143,
	            column: 2
	          },
	          end: {
	            line: 145,
	            column: 3
	          }
	        }],
	        line: 143
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 172,
	            column: 2
	          },
	          end: {
	            line: 175,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 172,
	            column: 2
	          },
	          end: {
	            line: 175,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 172,
	            column: 2
	          },
	          end: {
	            line: 175,
	            column: 3
	          }
	        }],
	        line: 172
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 193,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 193,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 193,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }],
	        line: 193
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 195,
	            column: 11
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 195,
	            column: 11
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 195,
	            column: 11
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }],
	        line: 195
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 196,
	            column: 6
	          },
	          end: {
	            line: 198,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 196,
	            column: 6
	          },
	          end: {
	            line: 198,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 196,
	            column: 6
	          },
	          end: {
	            line: 198,
	            column: 7
	          }
	        }],
	        line: 196
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 199,
	            column: 6
	          },
	          end: {
	            line: 203,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 199,
	            column: 6
	          },
	          end: {
	            line: 203,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 6
	          },
	          end: {
	            line: 203,
	            column: 7
	          }
	        }],
	        line: 199
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 199,
	            column: 10
	          },
	          end: {
	            line: 201,
	            column: 37
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 199,
	            column: 10
	          },
	          end: {
	            line: 199,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 200,
	            column: 11
	          },
	          end: {
	            line: 200,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 201,
	            column: 11
	          },
	          end: {
	            line: 201,
	            column: 36
	          }
	        }],
	        line: 199
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 222,
	            column: 2
	          },
	          end: {
	            line: 224,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 222,
	            column: 2
	          },
	          end: {
	            line: 224,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 222,
	            column: 2
	          },
	          end: {
	            line: 224,
	            column: 3
	          }
	        }],
	        line: 222
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 228,
	            column: 2
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }],
	        line: 228
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 239,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 239,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 239,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }],
	        line: 239
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 256,
	            column: 40
	          },
	          end: {
	            line: 256,
	            column: 81
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 256,
	            column: 40
	          },
	          end: {
	            line: 256,
	            column: 73
	          }
	        }, {
	          start: {
	            line: 256,
	            column: 77
	          },
	          end: {
	            line: 256,
	            column: 81
	          }
	        }],
	        line: 256
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 260,
	            column: 34
	          },
	          end: {
	            line: 260,
	            column: 65
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 260,
	            column: 34
	          },
	          end: {
	            line: 260,
	            column: 59
	          }
	        }, {
	          start: {
	            line: 260,
	            column: 63
	          },
	          end: {
	            line: 260,
	            column: 65
	          }
	        }],
	        line: 260
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 264,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 264,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 264,
	            column: 6
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        }],
	        line: 264
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 276,
	            column: 6
	          },
	          end: {
	            line: 289,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 276,
	            column: 6
	          },
	          end: {
	            line: 289,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 276,
	            column: 6
	          },
	          end: {
	            line: 289,
	            column: 7
	          }
	        }],
	        line: 276
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 292,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 292,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 292,
	            column: 9
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        }],
	        line: 292
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 329,
	            column: 21
	          },
	          end: {
	            line: 329,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 329,
	            column: 31
	          },
	          end: {
	            line: 329,
	            column: 33
	          }
	        }],
	        line: 329
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 348,
	            column: 24
	          },
	          end: {
	            line: 348,
	            column: 39
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 348,
	            column: 37
	          },
	          end: {
	            line: 348,
	            column: 39
	          }
	        }],
	        line: 348
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 348,
	            column: 41
	          },
	          end: {
	            line: 348,
	            column: 65
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 348,
	            column: 52
	          },
	          end: {
	            line: 348,
	            column: 65
	          }
	        }],
	        line: 348
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 348,
	            column: 67
	          },
	          end: {
	            line: 348,
	            column: 98
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 348,
	            column: 93
	          },
	          end: {
	            line: 348,
	            column: 98
	          }
	        }],
	        line: 348
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        }],
	        line: 366
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 371,
	            column: 12
	          },
	          end: {
	            line: 373,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 371,
	            column: 12
	          },
	          end: {
	            line: 373,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 371,
	            column: 12
	          },
	          end: {
	            line: 373,
	            column: 13
	          }
	        }],
	        line: 371
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 375,
	            column: 13
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 375,
	            column: 13
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 375,
	            column: 13
	          },
	          end: {
	            line: 401,
	            column: 7
	          }
	        }],
	        line: 375
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 379,
	            column: 10
	          },
	          end: {
	            line: 386,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 379,
	            column: 10
	          },
	          end: {
	            line: 386,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 379,
	            column: 10
	          },
	          end: {
	            line: 386,
	            column: 11
	          }
	        }],
	        line: 379
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 381,
	            column: 12
	          },
	          end: {
	            line: 383,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 381,
	            column: 12
	          },
	          end: {
	            line: 383,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 381,
	            column: 12
	          },
	          end: {
	            line: 383,
	            column: 13
	          }
	        }],
	        line: 381
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 397,
	            column: 10
	          },
	          end: {
	            line: 399,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 397,
	            column: 10
	          },
	          end: {
	            line: 399,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 397,
	            column: 10
	          },
	          end: {
	            line: 399,
	            column: 11
	          }
	        }],
	        line: 397
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 408,
	            column: 23
	          },
	          end: {
	            line: 408,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 408,
	            column: 23
	          },
	          end: {
	            line: 408,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 408,
	            column: 49
	          },
	          end: {
	            line: 408,
	            column: 63
	          }
	        }],
	        line: 408
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0],
	      '33': [0],
	      '34': [0],
	      '35': [0],
	      '36': [0, 0],
	      '37': [0, 0],
	      '38': [0, 0],
	      '39': [0, 0],
	      '40': [0, 0],
	      '41': [0, 0],
	      '42': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_uhwo2tac4.s[0]++;
	var hasSession = function hasSession(sessions, initData) {
	  cov_uhwo2tac4.f[0]++;
	  cov_uhwo2tac4.s[1]++;

	  for (var i = 0; i < sessions.length; i++) {
	    cov_uhwo2tac4.s[2]++;

	    if (!sessions[i].initData) {
	      cov_uhwo2tac4.b[0][0]++;
	      cov_uhwo2tac4.s[3]++;
	      continue;
	    } else {
	      cov_uhwo2tac4.b[0][1]++;
	    }

	    var sessionBuffer = (cov_uhwo2tac4.s[4]++, arrayBufferFrom(sessions[i].initData));
	    var initDataBuffer = (cov_uhwo2tac4.s[5]++, arrayBufferFrom(initData));
	    cov_uhwo2tac4.s[6]++;

	    if (arrayBuffersEqual(sessionBuffer, initDataBuffer)) {
	      cov_uhwo2tac4.b[1][0]++;
	      cov_uhwo2tac4.s[7]++;
	      return true;
	    } else {
	      cov_uhwo2tac4.b[1][1]++;
	    }
	  }

	  cov_uhwo2tac4.s[8]++;
	  return false;
	};
	cov_uhwo2tac4.s[9]++;
	var removeSession = function removeSession(sessions, initData) {
	  cov_uhwo2tac4.f[1]++;
	  cov_uhwo2tac4.s[10]++;

	  for (var i = 0; i < sessions.length; i++) {
	    cov_uhwo2tac4.s[11]++;

	    if (sessions[i].initData === initData) {
	      cov_uhwo2tac4.b[2][0]++;
	      cov_uhwo2tac4.s[12]++;
	      sessions.splice(i, 1);
	      cov_uhwo2tac4.s[13]++;
	      return;
	    } else {
	      cov_uhwo2tac4.b[2][1]++;
	    }
	  }
	};
	cov_uhwo2tac4.s[14]++;
	var handleEncryptedEvent = function handleEncryptedEvent(event, options, sessions, eventBus) {
	  cov_uhwo2tac4.f[2]++;
	  cov_uhwo2tac4.s[15]++;

	  if ((cov_uhwo2tac4.b[4][0]++, !options) || (cov_uhwo2tac4.b[4][1]++, !options.keySystems)) {
	    cov_uhwo2tac4.b[3][0]++;
	    cov_uhwo2tac4.s[16]++;
	    return Promise.resolve();
	  } else {
	    cov_uhwo2tac4.b[3][1]++;
	  }

	  var initData = (cov_uhwo2tac4.s[17]++, event.initData);
	  cov_uhwo2tac4.s[18]++;
	  return getSupportedKeySystem(options.keySystems).then(function (keySystemAccess) {
	    cov_uhwo2tac4.f[3]++;
	    var keySystem = (cov_uhwo2tac4.s[19]++, keySystemAccess.keySystem);
	    cov_uhwo2tac4.s[20]++;

	    if ((cov_uhwo2tac4.b[6][0]++, options.keySystems[keySystem]) && (cov_uhwo2tac4.b[6][1]++, options.keySystems[keySystem].pssh)) {
	      cov_uhwo2tac4.b[5][0]++;
	      cov_uhwo2tac4.s[21]++;
	      initData = options.keySystems[keySystem].pssh;
	    } else {
	      cov_uhwo2tac4.b[5][1]++;
	    }

	    cov_uhwo2tac4.s[22]++;

	    if ((cov_uhwo2tac4.b[8][0]++, hasSession(sessions, initData)) || (cov_uhwo2tac4.b[8][1]++, !initData)) {
	      cov_uhwo2tac4.b[7][0]++;
	      cov_uhwo2tac4.s[23]++;
	      return Promise.resolve();
	    } else {
	      cov_uhwo2tac4.b[7][1]++;
	    }

	    cov_uhwo2tac4.s[24]++;
	    sessions.push({
	      initData: initData
	    });
	    cov_uhwo2tac4.s[25]++;
	    return standard5July2016({
	      video: event.target,
	      initDataType: event.initDataType,
	      initData: initData,
	      keySystemAccess: keySystemAccess,
	      options: options,
	      removeSession: removeSession.bind(null, sessions),
	      eventBus: eventBus
	    });
	  });
	};
	cov_uhwo2tac4.s[26]++;
	var handleWebKitNeedKeyEvent = function handleWebKitNeedKeyEvent(event, options, eventBus) {
	  cov_uhwo2tac4.f[4]++;
	  cov_uhwo2tac4.s[27]++;

	  if ((cov_uhwo2tac4.b[10][0]++, !options.keySystems) || (cov_uhwo2tac4.b[10][1]++, !options.keySystems[FAIRPLAY_KEY_SYSTEM]) || (cov_uhwo2tac4.b[10][2]++, !event.initData)) {
	    cov_uhwo2tac4.b[9][0]++;
	    cov_uhwo2tac4.s[28]++;
	    return Promise.resolve();
	  } else {
	    cov_uhwo2tac4.b[9][1]++;
	  }

	  cov_uhwo2tac4.s[29]++;
	  return fairplay({
	    video: event.target,
	    initData: event.initData,
	    options: options,
	    eventBus: eventBus
	  });
	};
	cov_uhwo2tac4.s[30]++;
	var handleMsNeedKeyEvent = function handleMsNeedKeyEvent(event, options, sessions, eventBus) {
	  cov_uhwo2tac4.f[5]++;
	  cov_uhwo2tac4.s[31]++;

	  if ((cov_uhwo2tac4.b[12][0]++, !options.keySystems) || (cov_uhwo2tac4.b[12][1]++, !options.keySystems[PLAYREADY_KEY_SYSTEM])) {
	    cov_uhwo2tac4.b[11][0]++;
	    cov_uhwo2tac4.s[32]++;
	    return;
	  } else {
	    cov_uhwo2tac4.b[11][1]++;
	  }

	  cov_uhwo2tac4.s[33]++;

	  if (sessions.reduce(function (acc, session) {
	    cov_uhwo2tac4.f[6]++;
	    cov_uhwo2tac4.s[34]++;
	    return (cov_uhwo2tac4.b[14][0]++, acc) || (cov_uhwo2tac4.b[14][1]++, session.playready);
	  }, false)) {
	    cov_uhwo2tac4.b[13][0]++;
	    cov_uhwo2tac4.s[35]++;
	    return;
	  } else {
	    cov_uhwo2tac4.b[13][1]++;
	  }

	  var initData = (cov_uhwo2tac4.s[36]++, event.initData);
	  cov_uhwo2tac4.s[37]++;

	  if ((cov_uhwo2tac4.b[16][0]++, options.keySystems[PLAYREADY_KEY_SYSTEM]) && (cov_uhwo2tac4.b[16][1]++, options.keySystems[PLAYREADY_KEY_SYSTEM].pssh)) {
	    cov_uhwo2tac4.b[15][0]++;
	    cov_uhwo2tac4.s[38]++;
	    initData = options.keySystems[PLAYREADY_KEY_SYSTEM].pssh;
	  } else {
	    cov_uhwo2tac4.b[15][1]++;
	  }

	  cov_uhwo2tac4.s[39]++;

	  if (!initData) {
	    cov_uhwo2tac4.b[17][0]++;
	    cov_uhwo2tac4.s[40]++;
	    return;
	  } else {
	    cov_uhwo2tac4.b[17][1]++;
	  }

	  cov_uhwo2tac4.s[41]++;
	  sessions.push({
	    playready: true,
	    initData: initData
	  });
	  cov_uhwo2tac4.s[42]++;
	  msPrefixed({
	    video: event.target,
	    initData: initData,
	    options: options,
	    eventBus: eventBus
	  });
	};
	cov_uhwo2tac4.s[43]++;
	var getOptions = function getOptions(player) {
	  cov_uhwo2tac4.f[7]++;
	  cov_uhwo2tac4.s[44]++;
	  return videojs.mergeOptions(player.currentSource(), player.eme.options);
	};
	cov_uhwo2tac4.s[45]++;
	var setupSessions = function setupSessions(player) {
	  cov_uhwo2tac4.f[8]++;
	  var src = (cov_uhwo2tac4.s[46]++, player.src());
	  cov_uhwo2tac4.s[47]++;

	  if (src !== player.eme.activeSrc) {
	    cov_uhwo2tac4.b[18][0]++;
	    cov_uhwo2tac4.s[48]++;
	    player.eme.activeSrc = src;
	    cov_uhwo2tac4.s[49]++;
	    player.eme.sessions = [];
	  } else {
	    cov_uhwo2tac4.b[18][1]++;
	  }
	};
	cov_uhwo2tac4.s[50]++;
	var emeErrorHandler = function emeErrorHandler(player) {
	  cov_uhwo2tac4.f[9]++;
	  cov_uhwo2tac4.s[51]++;
	  return function (objOrErr) {
	    cov_uhwo2tac4.f[10]++;
	    var error = (cov_uhwo2tac4.s[52]++, {
	      code: 5
	    });
	    cov_uhwo2tac4.s[53]++;

	    if (typeof objOrErr === 'string') {
	      cov_uhwo2tac4.b[19][0]++;
	      cov_uhwo2tac4.s[54]++;
	      error.message = objOrErr;
	    } else {
	      cov_uhwo2tac4.b[19][1]++;
	      cov_uhwo2tac4.s[55]++;

	      if (objOrErr) {
	        cov_uhwo2tac4.b[20][0]++;
	        cov_uhwo2tac4.s[56]++;

	        if (objOrErr.message) {
	          cov_uhwo2tac4.b[21][0]++;
	          cov_uhwo2tac4.s[57]++;
	          error.message = objOrErr.message;
	        } else {
	          cov_uhwo2tac4.b[21][1]++;
	        }

	        cov_uhwo2tac4.s[58]++;

	        if ((cov_uhwo2tac4.b[23][0]++, objOrErr.cause) && ((cov_uhwo2tac4.b[23][1]++, objOrErr.cause.length) || (cov_uhwo2tac4.b[23][2]++, objOrErr.cause.byteLength))) {
	          cov_uhwo2tac4.b[22][0]++;
	          cov_uhwo2tac4.s[59]++;
	          error.cause = objOrErr.cause;
	        } else {
	          cov_uhwo2tac4.b[22][1]++;
	        }
	      } else {
	        cov_uhwo2tac4.b[20][1]++;
	      }
	    }

	    cov_uhwo2tac4.s[60]++;
	    player.error(error);
	  };
	};
	cov_uhwo2tac4.s[61]++;

	var onPlayerReady = function onPlayerReady(player, emeError) {
	  cov_uhwo2tac4.f[11]++;
	  cov_uhwo2tac4.s[62]++;

	  if (player.$('.vjs-tech').tagName.toLowerCase() !== 'video') {
	    cov_uhwo2tac4.b[24][0]++;
	    cov_uhwo2tac4.s[63]++;
	    return;
	  } else {
	    cov_uhwo2tac4.b[24][1]++;
	  }

	  cov_uhwo2tac4.s[64]++;
	  setupSessions(player);
	  cov_uhwo2tac4.s[65]++;

	  if (window_1.MediaKeys) {
	    cov_uhwo2tac4.b[25][0]++;
	    cov_uhwo2tac4.s[66]++;
	    player.tech_.el_.addEventListener('encrypted', function (event) {
	      cov_uhwo2tac4.f[12]++;
	      cov_uhwo2tac4.s[67]++;
	      setupSessions(player);
	      cov_uhwo2tac4.s[68]++;
	      handleEncryptedEvent(event, getOptions(player), player.eme.sessions, player.tech_).catch(emeError);
	    });
	  } else {
	    cov_uhwo2tac4.b[25][1]++;
	    cov_uhwo2tac4.s[69]++;

	    if (window_1.WebKitMediaKeys) {
	      cov_uhwo2tac4.b[26][0]++;
	      cov_uhwo2tac4.s[70]++;

	      var handleFn = function handleFn(event) {
	        cov_uhwo2tac4.f[13]++;
	        cov_uhwo2tac4.s[71]++;
	        setupSessions(player);
	        cov_uhwo2tac4.s[72]++;
	        handleWebKitNeedKeyEvent(event, getOptions(player), player.tech_).catch(emeError);
	      };

	      cov_uhwo2tac4.s[73]++;
	      player.tech_.el_.addEventListener('webkitneedkey', function (event) {
	        cov_uhwo2tac4.f[14]++;
	        var options = (cov_uhwo2tac4.s[74]++, getOptions(player));
	        var firstWebkitneedkeyTimeout = (cov_uhwo2tac4.s[75]++, (cov_uhwo2tac4.b[27][0]++, options.firstWebkitneedkeyTimeout) || (cov_uhwo2tac4.b[27][1]++, 1000));
	        var src = (cov_uhwo2tac4.s[76]++, player.src());
	        cov_uhwo2tac4.s[77]++;
	        player.eme.webkitneedkey_ = (cov_uhwo2tac4.b[28][0]++, player.eme.webkitneedkey_) || (cov_uhwo2tac4.b[28][1]++, {});
	        cov_uhwo2tac4.s[78]++;

	        if (player.eme.webkitneedkey_.src !== src) {
	          cov_uhwo2tac4.b[29][0]++;
	          cov_uhwo2tac4.s[79]++;
	          player.eme.webkitneedkey_ = {
	            handledFirstEvent: false,
	            src: src
	          };
	        } else {
	          cov_uhwo2tac4.b[29][1]++;
	        }

	        cov_uhwo2tac4.s[80]++;

	        if (!player.eme.webkitneedkey_.handledFirstEvent) {
	          cov_uhwo2tac4.b[30][0]++;
	          cov_uhwo2tac4.s[81]++;
	          player.clearTimeout(player.eme.webkitneedkey_.timeout);
	          cov_uhwo2tac4.s[82]++;
	          player.eme.webkitneedkey_.timeout = player.setTimeout(function () {
	            cov_uhwo2tac4.f[15]++;
	            cov_uhwo2tac4.s[83]++;
	            player.eme.webkitneedkey_.handledFirstEvent = true;
	            cov_uhwo2tac4.s[84]++;
	            player.eme.webkitneedkey_.timeout = null;
	            cov_uhwo2tac4.s[85]++;
	            handleFn(event);
	          }, firstWebkitneedkeyTimeout);
	        } else {
	          cov_uhwo2tac4.b[30][1]++;
	          cov_uhwo2tac4.s[86]++;
	          handleFn(event);
	        }
	      });
	    } else {
	      cov_uhwo2tac4.b[26][1]++;
	      cov_uhwo2tac4.s[87]++;

	      if (window_1.MSMediaKeys) {
	        cov_uhwo2tac4.b[31][0]++;
	        cov_uhwo2tac4.s[88]++;
	        player.tech_.el_.addEventListener('msneedkey', function (event) {
	          cov_uhwo2tac4.f[16]++;
	          cov_uhwo2tac4.s[89]++;
	          setupSessions(player);
	          cov_uhwo2tac4.s[90]++;

	          try {
	            cov_uhwo2tac4.s[91]++;
	            handleMsNeedKeyEvent(event, getOptions(player), player.eme.sessions, player.tech_);
	          } catch (error) {
	            cov_uhwo2tac4.s[92]++;
	            emeError(error);
	          }
	        });
	        cov_uhwo2tac4.s[93]++;
	        player.tech_.on('mskeyerror', emeError);
	        cov_uhwo2tac4.s[94]++;
	        player.on('dispose', function () {
	          cov_uhwo2tac4.f[17]++;
	          cov_uhwo2tac4.s[95]++;
	          player.tech_.off('mskeyerror', emeError);
	        });
	      } else {
	        cov_uhwo2tac4.b[31][1]++;
	      }
	    }
	  }
	};

	cov_uhwo2tac4.s[96]++;

	var eme = function eme(options) {
	  if (options === void 0) {
	    options = (cov_uhwo2tac4.b[32][0]++, {});
	  }

	  cov_uhwo2tac4.f[18]++;
	  var player = (cov_uhwo2tac4.s[97]++, this);
	  var emeError = (cov_uhwo2tac4.s[98]++, emeErrorHandler(player));
	  cov_uhwo2tac4.s[99]++;
	  player.ready(function () {
	    cov_uhwo2tac4.f[19]++;
	    cov_uhwo2tac4.s[100]++;
	    return onPlayerReady(player, emeError);
	  });
	  cov_uhwo2tac4.s[101]++;
	  player.eme = {
	    initializeMediaKeys: function initializeMediaKeys(emeOptions, callback, suppressErrorIfPossible) {
	      if (emeOptions === void 0) {
	        emeOptions = (cov_uhwo2tac4.b[33][0]++, {});
	      }

	      if (callback === void 0) {
	        callback = (cov_uhwo2tac4.b[34][0]++, function () {
	          cov_uhwo2tac4.f[20]++;
	        });
	      }

	      if (suppressErrorIfPossible === void 0) {
	        suppressErrorIfPossible = (cov_uhwo2tac4.b[35][0]++, false);
	      }

	      var mergedEmeOptions = (cov_uhwo2tac4.s[102]++, videojs.mergeOptions(player.currentSource(), options, emeOptions));
	      var mockEncryptedEvent = (cov_uhwo2tac4.s[103]++, {
	        initDataType: 'cenc',
	        initData: null,
	        target: player.tech_.el_
	      });
	      cov_uhwo2tac4.s[104]++;
	      setupSessions(player);
	      cov_uhwo2tac4.s[105]++;

	      if (window_1.MediaKeys) {
	        cov_uhwo2tac4.b[36][0]++;
	        cov_uhwo2tac4.s[106]++;
	        handleEncryptedEvent(mockEncryptedEvent, mergedEmeOptions, player.eme.sessions, player.tech_).then(function () {
	          cov_uhwo2tac4.f[21]++;
	          cov_uhwo2tac4.s[107]++;
	          return callback();
	        }).catch(function (error) {
	          cov_uhwo2tac4.f[22]++;
	          cov_uhwo2tac4.s[108]++;
	          callback(error);
	          cov_uhwo2tac4.s[109]++;

	          if (!suppressErrorIfPossible) {
	            cov_uhwo2tac4.b[37][0]++;
	            cov_uhwo2tac4.s[110]++;
	            emeError(error);
	          } else {
	            cov_uhwo2tac4.b[37][1]++;
	          }
	        });
	      } else {
	        cov_uhwo2tac4.b[36][1]++;
	        cov_uhwo2tac4.s[111]++;

	        if (window_1.MSMediaKeys) {
	          cov_uhwo2tac4.b[38][0]++;
	          cov_uhwo2tac4.s[112]++;

	          var msKeyHandler = function msKeyHandler(event) {
	            cov_uhwo2tac4.f[23]++;
	            cov_uhwo2tac4.s[113]++;
	            player.tech_.off('mskeyadded', msKeyHandler);
	            cov_uhwo2tac4.s[114]++;
	            player.tech_.off('mskeyerror', msKeyHandler);
	            cov_uhwo2tac4.s[115]++;

	            if (event.type === 'mskeyerror') {
	              cov_uhwo2tac4.b[39][0]++;
	              cov_uhwo2tac4.s[116]++;
	              callback(event.target.error);
	              cov_uhwo2tac4.s[117]++;

	              if (!suppressErrorIfPossible) {
	                cov_uhwo2tac4.b[40][0]++;
	                cov_uhwo2tac4.s[118]++;
	                emeError(event.message);
	              } else {
	                cov_uhwo2tac4.b[40][1]++;
	              }
	            } else {
	              cov_uhwo2tac4.b[39][1]++;
	              cov_uhwo2tac4.s[119]++;
	              callback();
	            }
	          };

	          cov_uhwo2tac4.s[120]++;
	          player.tech_.one('mskeyadded', msKeyHandler);
	          cov_uhwo2tac4.s[121]++;
	          player.tech_.one('mskeyerror', msKeyHandler);
	          cov_uhwo2tac4.s[122]++;

	          try {
	            cov_uhwo2tac4.s[123]++;
	            handleMsNeedKeyEvent(mockEncryptedEvent, mergedEmeOptions, player.eme.sessions, player.tech_);
	          } catch (error) {
	            cov_uhwo2tac4.s[124]++;
	            player.tech_.off('mskeyadded', msKeyHandler);
	            cov_uhwo2tac4.s[125]++;
	            player.tech_.off('mskeyerror', msKeyHandler);
	            cov_uhwo2tac4.s[126]++;
	            callback(error);
	            cov_uhwo2tac4.s[127]++;

	            if (!suppressErrorIfPossible) {
	              cov_uhwo2tac4.b[41][0]++;
	              cov_uhwo2tac4.s[128]++;
	              emeError(error);
	            } else {
	              cov_uhwo2tac4.b[41][1]++;
	            }
	          }
	        } else {
	          cov_uhwo2tac4.b[38][1]++;
	        }
	      }
	    },
	    options: options
	  };
	};

	var registerPlugin = (cov_uhwo2tac4.s[129]++, (cov_uhwo2tac4.b[42][0]++, videojs.registerPlugin) || (cov_uhwo2tac4.b[42][1]++, videojs.plugin));
	cov_uhwo2tac4.s[130]++;
	registerPlugin('eme', eme);

	var Player = videojs.getComponent('Player');

	function noop() {}

	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof eme, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-contrib-eme', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video);
	    this.origRequestMediaKeySystemAccess = window_1.navigator.requestMediaKeySystemAccess;

	    window_1.navigator.requestMediaKeySystemAccess = function (keySystem, options) {
	      return Promise.resolve({
	        keySystem: 'org.w3.clearkey',
	        createMediaKeys: function createMediaKeys() {
	          return {
	            createSession: function createSession() {
	              return new videojs.EventTarget();
	            }
	          };
	        }
	      });
	    };
	  },
	  afterEach: function afterEach() {
	    window_1.navigator.requestMediaKeySystemAccess = this.origRequestMediaKeySystemAccess;
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.strictEqual(typeof Player.prototype.eme, 'function', 'videojs-contrib-eme plugin was registered');
	});
	QUnit.test('exposes options', function (assert) {
	  assert.notOk(this.player.eme.options, 'options is unavailable at start');
	  this.player.eme();
	  assert.deepEqual(this.player.eme.options, {}, 'options defaults to empty object once initialized');
	  this.video = document_1.createElement('video');
	  this.video.setAttribute('data-setup', JSON.stringify({
	    plugins: {
	      eme: {
	        applicationId: 'application-id',
	        publisherId: 'publisher-id'
	      }
	    }
	  }));
	  this.fixture.appendChild(this.video);
	  this.player = videojs(this.video);
	  assert.ok(this.player.eme.options, 'exposes options');
	  assert.strictEqual(this.player.eme.options.applicationId, 'application-id', 'exposes applicationId');
	  assert.strictEqual(this.player.eme.options.publisherId, 'publisher-id', 'exposes publisherId');
	}); // skip test for prefix-only Safari

	if (!window_1.MediaKeys) {
	  QUnit.test('initializeMediaKeys standard', function (assert) {
	    var _this = this;

	    assert.expect(9);
	    var done = assert.async();
	    var initData = new Uint8Array([1, 2, 3]).buffer;
	    var errors = 0;
	    var options = {
	      keySystems: {
	        'org.w3.clearkey': {
	          pssh: initData
	        }
	      }
	    };

	    var callback = function callback(error) {
	      var sessions = _this.player.eme.sessions;
	      assert.equal(sessions.length, 1, 'created a session when keySystems in options');
	      assert.deepEqual(sessions[0].initData, initData, 'captured initData in the session');
	      assert.equal(error, 'Error: Missing url/licenseUri or getLicense in com.widevine.alpha configuration.', 'callback receives error');
	    };

	    this.player.eme();
	    this.player.on('error', function () {
	      errors++;
	      assert.equal(errors, 1, 'error triggered only once');
	      assert.equal(_this.player.error().message, 'Missing url/licenseUri or getLicense in com.widevine.alpha configuration.', 'error is called on player');

	      _this.player.error(null);
	    });
	    this.player.eme.initializeMediaKeys(options, callback); // need to clear sessions to have the error trigger again

	    this.player.eme.sessions = [];
	    this.player.eme.initializeMediaKeys(options, callback, true);
	    setTimeout(function () {
	      assert.equal(_this.player.error(), null, 'no error called on player with suppressError = true');
	      done();
	    });
	    this.clock.tick(1);
	  });
	}

	QUnit.test('initializeMediaKeys ms-prefix', function (assert) {
	  var _this2 = this;

	  assert.expect(17);
	  var done = assert.async(); // stub setMediaKeys

	  var setMediaKeys = this.player.tech_.el_.setMediaKeys;
	  var throwError = true;
	  var errors = 0;
	  var keySession;
	  var errorMessage;
	  var origMediaKeys = window_1.MediaKeys;
	  var origWebKitMediaKeys = window_1.WebKitMediaKeys;
	  window_1.MediaKeys = undefined;
	  window_1.WebKitMediaKeys = undefined;

	  if (!window_1.MSMediaKeys) {
	    window_1.MSMediaKeys = function () {};
	  }

	  this.player.tech_.el_.setMediaKeys = null;

	  if (!this.player.tech_.el_.msSetMediaKeys) {
	    this.player.tech_.el_.msSetMediaKeys = function () {
	      _this2.player.tech_.el_.msKeys = {
	        createSession: function createSession() {
	          if (throwError) {
	            throw new Error('error creating keySession');
	          } else {
	            keySession = new videojs.EventTarget();
	            return keySession;
	          }
	        }
	      };
	    };
	  }

	  var initData = new Uint8Array([1, 2, 3]).buffer;
	  var options = {
	    keySystems: {
	      'com.microsoft.playready': {
	        pssh: initData
	      }
	    }
	  };

	  var callback = function callback(error) {
	    var sessions = _this2.player.eme.sessions;
	    assert.equal(sessions.length, 1, 'created a session when keySystems in options');
	    assert.deepEqual(sessions[0].initData, initData, 'captured initData in the session');
	    assert.notEqual(error, undefined, 'callback receives error');
	  };

	  var reset = function reset() {
	    _this2.player.eme.sessions = [];
	    keySession = null;
	  };

	  var asyncKeySessionError = function asyncKeySessionError() {
	    if (keySession) {
	      // we stubbed the keySession
	      setTimeout(function () {
	        keySession.error = {
	          code: 1,
	          systemCode: 2
	        };
	        keySession.trigger({
	          target: keySession,
	          type: 'mskeyerror'
	        });
	      });

	      _this2.clock.tick(1);
	    }
	  };

	  this.player.eme();
	  this.player.on('error', function () {
	    errors++;
	    assert.equal(_this2.player.error().message, errorMessage, 'error is called on player');

	    _this2.player.error(null);
	  }); // sync error thrown by handleMsNeedKeyEvent

	  errorMessage = 'error creating keySession';
	  this.player.eme.initializeMediaKeys(options, callback);
	  reset();
	  this.player.eme.initializeMediaKeys(options, callback, true);
	  reset(); // async error event on key session

	  throwError = false;
	  errorMessage = 'Unexpected key error from key session with code: 1 and systemCode: 2';
	  this.player.eme.initializeMediaKeys(options, callback);
	  asyncKeySessionError();
	  reset();
	  this.player.eme.initializeMediaKeys(options, callback, true);
	  asyncKeySessionError();
	  reset();
	  setTimeout(function () {
	    // `error` will be called on the player 3 times, because a key session
	    // error can't be suppressed on IE11
	    assert.equal(errors, 3, 'error called on player 3 times');
	    assert.equal(_this2.player.error(), null, 'no error called on player with suppressError = true');
	    window_1.MediaKeys = origMediaKeys;
	    window_1.WebKitMediaKeys = origWebKitMediaKeys;
	    done();
	  });
	  this.clock.tick(1);
	  this.player.tech_.el_.msSetMediaKeys = null;
	  this.player.tech_.el_.setMediaKeys = setMediaKeys;
	});
	QUnit.test('tech error listener is removed on dispose', function (assert) {
	  var _this3 = this;

	  var done = assert.async(1);
	  var called = 0;
	  var origMediaKeys = window_1.MediaKeys;
	  var origWebKitMediaKeys = window_1.WebKitMediaKeys;
	  window_1.MediaKeys = undefined;
	  window_1.WebKitMediaKeys = undefined;

	  if (!window_1.MSMediaKeys) {
	    window_1.MSMediaKeys = noop.bind(this);
	  }

	  this.player.error = function () {
	    called++;
	  };

	  this.player.eme();
	  this.player.ready(function () {
	    assert.equal(called, 0, 'never called');

	    _this3.player.tech_.trigger('mskeyerror');

	    assert.equal(called, 1, 'called once');

	    _this3.player.dispose();

	    _this3.player.tech_.trigger('mskeyerror');

	    assert.equal(called, 1, 'not called after player disposal');
	    _this3.player.error = undefined;
	    window_1.MediaKeys = origMediaKeys;
	    window_1.WebKitMediaKeys = origWebKitMediaKeys;
	    done();
	  });
	  this.clock.tick(1);
	});
	QUnit.test('only registers for spec-compliant events even if legacy APIs are available', function (assert) {
	  var done = assert.async(1);
	  var origMediaKeys = window_1.MediaKeys;
	  var origMSMediaKeys = window_1.MSMediaKeys;
	  var origWebKitMediaKeys = window_1.WebKitMediaKeys;
	  var events = {
	    encrypted: 0,
	    msneedkey: 0,
	    webkitneedkey: 0
	  };
	  this.player.tech_.el_ = {
	    addEventListener: function addEventListener(e) {
	      return events[e]++;
	    },
	    hasAttribute: function hasAttribute() {
	      return false;
	    }
	  };
	  window_1.MediaKeys = noop;
	  window_1.MSMediaKeys = noop;
	  window_1.WebKitMediaKeys = noop;
	  this.player.eme();
	  this.player.ready(function () {
	    assert.equal(events.encrypted, 1, 'registers for encrypted events');
	    assert.equal(events.msneedkey, 0, "doesn't register for msneedkey events");
	    assert.equal(events.webkitneedkey, 0, "doesn't register for webkitneedkey events");
	    window_1.MediaKeys = origMediaKeys;
	    window_1.MSMediaKeys = origMSMediaKeys;
	    window_1.WebKitMediaKeys = origWebKitMediaKeys;
	    done();
	  });
	  this.clock.tick(1);
	});
	QUnit.module('plugin guard functions', {
	  beforeEach: function beforeEach() {
	    this.options = {
	      keySystems: {
	        'org.w3.clearkey': {
	          url: 'some-url'
	        }
	      }
	    };
	    this.origXhr = videojs.xhr;

	    videojs.xhr = function (params, callback) {
	      return callback(null, {
	        statusCode: 200
	      }, new Uint8Array([0, 1, 2, 3]).buffer);
	    };

	    this.initData1 = new Uint8Array([1, 2, 3]).buffer;
	    this.initData2 = new Uint8Array([4, 5, 6]).buffer;
	    this.event1 = {
	      // mock video target to prevent errors since it's a pain to mock out the continuation
	      // of functionality on a successful pass through of the guards
	      target: {},
	      initData: this.initData1
	    };
	    this.event2 = {
	      target: {},
	      initData: this.initData2
	    };

	    if (!window_1.MSMediaKeys) {
	      window_1.MSMediaKeys = noop.bind(this);
	    }

	    if (!window_1.WebKitMediaKeys) {
	      window_1.WebKitMediaKeys = noop.bind(this);
	    }

	    this.origRequestMediaKeySystemAccess = window_1.navigator.requestMediaKeySystemAccess;

	    window_1.navigator.requestMediaKeySystemAccess = function (keySystem, options) {
	      return Promise.resolve({
	        keySystem: 'org.w3.clearkey',
	        createMediaKeys: function createMediaKeys() {
	          return {
	            createSession: function createSession() {
	              return new videojs.EventTarget();
	            }
	          };
	        }
	      });
	    };
	  },
	  afterEach: function afterEach() {
	    window_1.navigator.requestMediaKeySystemAccess = this.origRequestMediaKeySystemAccess;
	    videojs.xhr = this.origXhr;
	  }
	});
	QUnit.test('handleEncryptedEvent checks for required options', function (assert) {
	  var done = assert.async();
	  var sessions = [];
	  handleEncryptedEvent(this.event1, {}, sessions).then(function () {
	    assert.equal(sessions.length, 0, 'did not create a session when no options');
	    done();
	  });
	});
	QUnit.test('handleEncryptedEvent checks for required init data', function (assert) {
	  var done = assert.async();
	  var sessions = [];
	  handleEncryptedEvent({
	    target: {},
	    initData: null
	  }, this.options, sessions).then(function () {
	    assert.equal(sessions.length, 0, 'did not create a session when no init data');
	    done();
	  });
	});
	QUnit.test('handleEncryptedEvent creates session', function (assert) {
	  var _this4 = this;

	  var done = assert.async();
	  var sessions = []; // testing the rejection path because this isn't a real session

	  handleEncryptedEvent(this.event1, this.options, sessions).catch(function () {
	    assert.equal(sessions.length, 1, 'created a session when keySystems in options');
	    assert.equal(sessions[0].initData, _this4.initData1, 'captured initData in the session');
	    done();
	  });
	});
	QUnit.test('handleEncryptedEvent creates new session for new init data', function (assert) {
	  var _this5 = this;

	  var done = assert.async();
	  var sessions = []; // testing the rejection path because this isn't a real session

	  handleEncryptedEvent(this.event1, this.options, sessions).catch(function () {
	    return handleEncryptedEvent(_this5.event2, _this5.options, sessions).catch(function () {
	      assert.equal(sessions.length, 2, 'created a new session when new init data');
	      assert.equal(sessions[0].initData, _this5.initData1, 'retained session init data');
	      assert.equal(sessions[1].initData, _this5.initData2, 'added new session init data');
	      done();
	    });
	  });
	});
	QUnit.test('handleEncryptedEvent doesn\'t create duplicate sessions', function (assert) {
	  var _this6 = this;

	  var done = assert.async();
	  var sessions = []; // testing the rejection path because this isn't a real session

	  handleEncryptedEvent(this.event1, this.options, sessions).catch(function () {
	    return handleEncryptedEvent(_this6.event2, _this6.options, sessions).catch(function () {
	      return handleEncryptedEvent(_this6.event2, _this6.options, sessions).then(function () {
	        assert.equal(sessions.length, 2, 'no new session when same init data');
	        assert.equal(sessions[0].initData, _this6.initData1, 'retained session init data');
	        assert.equal(sessions[1].initData, _this6.initData2, 'retained session init data');
	        done();
	      });
	    });
	  });
	});
	QUnit.test('handleEncryptedEvent uses predefined init data', function (assert) {
	  var _this7 = this;

	  var done = assert.async();
	  var options = {
	    keySystems: {
	      'org.w3.clearkey': {
	        pssh: this.initData1
	      }
	    }
	  };
	  var sessions = []; // testing the rejection path because this isn't a real session

	  handleEncryptedEvent(this.event2, options, sessions).catch(function () {
	    assert.equal(sessions.length, 1, 'created a session when keySystems in options');
	    assert.deepEqual(sessions[0].initData, _this7.initData1, 'captured initData in the session');
	    done();
	  });
	});
	QUnit.test('handleMsNeedKeyEvent uses predefined init data', function (assert) {
	  var _this8 = this;

	  var options = {
	    keySystems: {
	      'com.microsoft.playready': {
	        pssh: this.initData1
	      }
	    }
	  };
	  var sessions = [];
	  this.event2.target = {
	    msSetMediaKeys: function msSetMediaKeys() {
	      _this8.event2.target.msKeys = {
	        createSession: function createSession() {
	          return new videojs.EventTarget();
	        }
	      };
	    }
	  };
	  handleMsNeedKeyEvent(this.event2, options, sessions, getMockEventBus());
	  assert.equal(sessions.length, 1, 'created a session when keySystems in options');
	  assert.deepEqual(sessions[0].initData, this.initData1, 'captured initData in the session');
	  this.event2.target = {};
	});
	QUnit.test('handleMsNeedKeyEvent checks for required options', function (assert) {
	  var event = {
	    initData: new Uint8Array([1, 2, 3]),
	    // mock video target to prevent errors since it's a pain to mock out the continuation
	    // of functionality on a successful pass through of the guards
	    target: {
	      msSetMediaKeys: function msSetMediaKeys() {
	        this.msKeys = {
	          createSession: function createSession() {
	            return new videojs.EventTarget();
	          }
	        };
	      }
	    }
	  };
	  var options = {};
	  var sessions = [];
	  var mockEventBus = getMockEventBus();
	  handleMsNeedKeyEvent(event, options, sessions, mockEventBus);
	  assert.equal(sessions.length, 0, 'no session created when no options');
	  options = {
	    keySystems: {}
	  };
	  handleMsNeedKeyEvent(event, options, sessions, mockEventBus);
	  assert.equal(sessions.length, 0, 'no session created when no PlayReady key system');
	  options = {
	    keySystems: {
	      'com.microsoft.notplayready': true
	    }
	  };
	  handleMsNeedKeyEvent(event, options, sessions, mockEventBus);
	  assert.equal(sessions.length, 0, 'no session created when no proper PlayReady key system');
	  options = {
	    keySystems: {
	      'com.microsoft.playready': true
	    }
	  };
	  handleMsNeedKeyEvent(event, options, sessions, mockEventBus);
	  assert.equal(sessions.length, 1, 'session created');
	  assert.ok(sessions[0].playready, 'created a PlayReady session');
	  var createdSession = sessions[0]; // even when there's new init data, we should not create a new session

	  event.initData = new Uint8Array([4, 5, 6]);
	  handleMsNeedKeyEvent(event, options, sessions, mockEventBus);
	  assert.equal(sessions.length, 1, 'no new session created');
	  assert.equal(sessions[0], createdSession, 'did not replace session');
	});
	QUnit.test('handleMsNeedKeyEvent checks for required init data', function (assert) {
	  var event = {
	    // mock video target to prevent errors since it's a pain to mock out the continuation
	    // of functionality on a successful pass through of the guards
	    target: {},
	    initData: null
	  };
	  var options = {
	    keySystems: {
	      'com.microsoft.playready': true
	    }
	  };
	  var sessions = [];
	  handleMsNeedKeyEvent(event, options, sessions, getMockEventBus());
	  assert.equal(sessions.length, 0, 'no session created when no init data');
	});
	QUnit.test('handleWebKitNeedKeyEvent checks for required options', function (assert) {
	  var event = {
	    initData: new Uint8Array([1, 2, 3, 4]),
	    target: {
	      webkitSetMediaKeys: noop
	    }
	  };
	  var done = assert.async(4);
	  var options = {};
	  handleWebKitNeedKeyEvent(event, options).then(function (val) {
	    assert.equal(val, undefined, 'resolves an empty promise when no options');
	    done();
	  });
	  options = {
	    keySystems: {}
	  };
	  handleWebKitNeedKeyEvent(event, options).then(function (val) {
	    assert.equal(val, undefined, 'resolves an empty promise when no FairPlay key system');
	    done();
	  });
	  options = {
	    keySystems: {
	      'com.apple.notfps.1_0': {}
	    }
	  };
	  handleWebKitNeedKeyEvent(event, options).then(function (val) {
	    assert.equal(val, undefined, 'resolves an empty promise when no proper FairPlay key system');
	    done();
	  });
	  options = {
	    keySystems: {
	      'com.apple.fps.1_0': {}
	    }
	  };
	  var promise = handleWebKitNeedKeyEvent(event, options);
	  promise.catch(function (err) {
	    assert.equal(err, 'Could not create key session', 'expected error message');
	    done();
	  });
	  assert.ok(promise, 'returns promise when proper FairPlay key system');
	});
	QUnit.test('handleWebKitNeedKeyEvent checks for required init data', function (assert) {
	  var done = assert.async();
	  var event = {
	    initData: null
	  };
	  var options = {
	    keySystems: {
	      'com.apple.fps.1_0': {}
	    }
	  };
	  handleWebKitNeedKeyEvent(event, options).then(function (val) {
	    assert.equal(val, undefined, 'resolves an empty promise when no init data');
	    done();
	  });
	});
	QUnit.module('plugin isolated functions');
	QUnit.test('hasSession determines if a session exists', function (assert) {
	  // cases in spec (where initData should always be an ArrayBuffer)
	  var initData = new Uint8Array([1, 2, 3]).buffer;
	  assert.notOk(hasSession([], initData), 'false when no sessions');
	  assert.ok(hasSession([{
	    initData: initData
	  }], initData), 'true when initData is present in a session');
	  assert.ok(hasSession([{}, {
	    initData: new Uint8Array([1, 2, 3]).buffer
	  }], initData), 'true when same initData contents present in a session');
	  assert.notOk(hasSession([{
	    initData: new Uint8Array([1, 2]).buffer
	  }], initData), 'false when initData contents not present in a session'); // cases outside of spec (where initData is not always an ArrayBuffer)

	  assert.ok(hasSession([{
	    initData: new Uint8Array([1, 2, 3])
	  }], initData), 'true even if session initData is a typed array and initData is an ArrayBuffer');
	  assert.ok(hasSession([{
	    initData: new Uint8Array([1, 2, 3]).buffer
	  }], new Uint8Array([1, 2, 3])), 'true even if session initData is an ArrayBuffer and initData is a typed array');
	  assert.ok(hasSession([{
	    initData: new Uint8Array([1, 2, 3])
	  }], new Uint8Array([1, 2, 3])), 'true even if both session initData and initData are typed arrays');
	});
	QUnit.test('setupSessions sets up sessions for new sources', function (assert) {
	  // mock the player with an eme plugin object attached to it
	  var _src = 'some-src';
	  var player = {
	    eme: {},
	    src: function src() {
	      return _src;
	    }
	  };
	  setupSessions(player);
	  assert.ok(Array.isArray(player.eme.sessions), 'creates a sessions array when none exist');
	  assert.equal(player.eme.sessions.length, 0, 'sessions array is empty');
	  assert.equal(player.eme.activeSrc, 'some-src', 'set activeSrc property');
	  setupSessions(player);
	  assert.equal(player.eme.sessions.length, 0, 'sessions array is still empty');
	  assert.equal(player.eme.activeSrc, 'some-src', 'activeSrc property did not change');
	  player.eme.sessions.push({});
	  _src = 'other-src';
	  setupSessions(player);
	  assert.equal(player.eme.sessions.length, 0, 'sessions array reset');
	  assert.equal(player.eme.activeSrc, 'other-src', 'activeSrc property changed');
	  player.eme.sessions.push({});
	  setupSessions(player);
	  assert.equal(player.eme.sessions.length, 1, 'sessions array unchanged');
	  assert.equal(player.eme.activeSrc, 'other-src', 'activeSrc property unchanged');
	});
	QUnit.test('getOptions prioritizes eme options over source options', function (assert) {
	  var player = {
	    eme: {
	      options: {
	        keySystems: {
	          keySystem1: {
	            audioContentType: 'audio-content-type',
	            videoContentType: 'video-content-type'
	          },
	          keySystem3: {
	            licenseUrl: 'license-url-3'
	          }
	        },
	        extraOption: 'extra-option'
	      }
	    },
	    currentSource: function currentSource() {
	      return {
	        keySystems: {
	          keySystem1: {
	            licenseUrl: 'license-url-1',
	            videoContentType: 'source-video-content-type'
	          },
	          keySystem2: {
	            licenseUrl: 'license-url-2'
	          }
	        },
	        type: 'application/dash+xml'
	      };
	    }
	  };
	  assert.deepEqual(getOptions(player), {
	    keySystems: {
	      keySystem1: {
	        audioContentType: 'audio-content-type',
	        videoContentType: 'video-content-type',
	        licenseUrl: 'license-url-1'
	      },
	      keySystem2: {
	        licenseUrl: 'license-url-2'
	      },
	      keySystem3: {
	        licenseUrl: 'license-url-3'
	      }
	    },
	    type: 'application/dash+xml',
	    extraOption: 'extra-option'
	  }, 'updates source options with eme options');
	});
	QUnit.test('removeSession removes sessions', function (assert) {
	  var initData1 = new Uint8Array([1, 2, 3]);
	  var initData2 = new Uint8Array([2, 3, 4]);
	  var initData3 = new Uint8Array([3, 4, 5]);
	  var sessions = [{
	    initData: initData1
	  }, {
	    initData: initData2
	  }, {
	    initData: initData3
	  }];
	  removeSession(sessions, initData2);
	  assert.deepEqual(sessions, [{
	    initData: initData1
	  }, {
	    initData: initData3
	  }], 'removed session with initData');
	  removeSession(sessions, null);
	  assert.deepEqual(sessions, [{
	    initData: initData1
	  }, {
	    initData: initData3
	  }], 'does nothing when passed null');
	  removeSession(sessions, new Uint8Array([6, 7, 8]));
	  assert.deepEqual(sessions, [{
	    initData: initData1
	  }, {
	    initData: initData3
	  }], 'does nothing when passed non-matching initData');
	  removeSession(sessions, new Uint8Array([1, 2, 3]));
	  assert.deepEqual(sessions, [{
	    initData: initData1
	  }, {
	    initData: initData3
	  }], 'did not remove session because initData is not the same reference');
	  removeSession(sessions, initData1);
	  assert.deepEqual(sessions, [{
	    initData: initData3
	  }], 'removed session with initData');
	  removeSession(sessions, initData3);
	  assert.deepEqual(sessions, [], 'removed session with initData');
	  removeSession(sessions, initData2);
	  assert.deepEqual(sessions, [], 'does nothing when no sessions');
	});
	QUnit.test('emeError properly handles various parameter types', function (assert) {
	  var errorObj;
	  var player = {
	    tech_: {
	      el_: videojs.EventTarget()
	    },
	    error: function error(obj) {
	      errorObj = obj;
	    }
	  };
	  var emeError = emeErrorHandler(player);
	  emeError(undefined);
	  assert.equal(errorObj.message, null, 'null error message');
	  emeError({});
	  assert.equal(errorObj.message, null, 'null error message');
	  emeError(new Error('some error'));
	  assert.equal(errorObj.message, 'some error', 'use error text when error');
	  emeError('some string');
	  assert.equal(errorObj.message, 'some string', 'use string when string');
	  emeError({
	    type: 'mskeyerror',
	    message: 'some event'
	  });
	  assert.equal(errorObj.message, 'some event', 'use message property when object has it');
	});

	QUnit.module('utils');
	QUnit.test('arrayBuffersEqual checks if two array buffers are equal', function (assert) {
	  assert.ok(arrayBuffersEqual(new ArrayBuffer(3), new ArrayBuffer(3)), 'same size empty array buffers are equal');
	  assert.notOk(arrayBuffersEqual(new ArrayBuffer(2), new ArrayBuffer(3)), 'different size empty array buffers are not equal');
	  var arrayBuffer = new ArrayBuffer(10);
	  assert.ok(arrayBuffersEqual(arrayBuffer, arrayBuffer), 'same array buffer is equal');
	  assert.ok(arrayBuffersEqual(new Uint8Array([1, 2, 3]).buffer, new Uint8Array([1, 2, 3]).buffer), 'array buffers with same content are equal');
	  assert.notOk(arrayBuffersEqual(new Uint8Array([1, 2, 3]).buffer, new Uint8Array([1, 2, 4]).buffer), 'array buffers with different content are not equal');
	  assert.notOk(arrayBuffersEqual(new Uint8Array([1, 2, 3]).buffer, new Uint8Array([1, 2]).buffer), 'array buffers with different content lengths are not equal');
	});
	QUnit.test('arrayBufferFrom returns buffer from typed arrays', function (assert) {
	  var uint8Array = new Uint8Array([1, 2, 3]);
	  var buffer = arrayBufferFrom(uint8Array);
	  assert.ok(buffer instanceof ArrayBuffer, 'returned an ArrayBuffer');
	  assert.equal(buffer, uint8Array.buffer, 'buffer is the Uint8Array\'s buffer');
	  var uint16Array = new Uint16Array([4, 5, 6]);
	  buffer = arrayBufferFrom(uint16Array);
	  assert.ok(buffer instanceof ArrayBuffer, 'returned an ArrayBuffer');
	  assert.equal(buffer, uint16Array.buffer, 'buffer is the Uint16Array\'s buffer');
	  buffer = arrayBufferFrom(buffer);
	  assert.ok(buffer instanceof ArrayBuffer, 'buffer is still an ArrayBuffer');
	  assert.equal(buffer, uint16Array.buffer, 'buffer is the same buffer');
	});
	QUnit.test('mergeAndRemoveNull removes property if value is null', function (assert) {
	  var object1 = {
	    a: 'a',
	    b: 'b',
	    c: 'c'
	  };
	  var object2 = {
	    a: 'A',
	    b: null
	  };
	  var resultObj = mergeAndRemoveNull(object1, object2);
	  assert.deepEqual(resultObj, {
	    a: 'A',
	    c: 'c'
	  }, 'successfully merged and removed null property');
	});

}(videojs,QUnit,sinon));
