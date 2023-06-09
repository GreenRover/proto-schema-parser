// copied from: https://raw.githubusercontent.com/vipszx/protobuf-jsonschema/master/types.js
const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

module.exports = {
  bytes: {
    type: 'string',
    'x-primitive': 'bytes',
  },
  string: {
    type: 'string',
    'x-primitive': 'string',
  },
  bool: {
    type: 'boolean',
    'x-primitive': 'bool',
  },
  int32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    'x-primitive': 'int32',
  },
  sint32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    'x-primitive': 'sint32',
  },
  uint32: {
    type: 'integer',
    minimum: 0,
    maximum: 0xffffffff,
    'x-primitive': 'uint32',
  },
  int64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    'x-primitive': 'int64',
  },
  sint64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    'x-primitive': 'sint64',
  },
  uint64: {
    type: 'integer',
    minimum: 0,
    maximum: MAX_SAFE_INTEGER,
    'x-primitive': 'uint64',
  },
  fixed32: {
    type: 'number',
    'x-primitive': 'fixed32',
  },
  fixed64: {
    type: 'number',
    'x-primitive': 'fixed64',
  },
  sfixed32: {
    type: 'number',
    'x-primitive': 'sfixed32',
  },
  sfixed64: {
    type: 'number',
    'x-primitive': 'sfixed64',
  },
  float: {
    type: 'number',
    'x-primitive': 'float',
  },
  double: {
    type: 'number',
    'x-primitive': 'double',
  }
};