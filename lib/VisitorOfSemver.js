const {semverVisitor} = require('../gen/semverVisitor');

// const mappingVisitor = require('../gen/mappingListener').mappingListener;

/**
 * 重载 mappingVisitor 中的方法，实现业务逻辑
 */
class VisitorOfSemver extends semverVisitor {
    constructor() {
        super();

    }

    visitValid_semver(ctx) {
        // console.log(this.__getFullRowString(ctx));
        super.visitValid_semver(ctx)
    }

    /**
     * 根据上下文 获取原生文本字符串
     * @param ctx
     * @return {T[] | SharedArrayBuffer | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | T[] | Float64Array | Float32Array | string | Uint16Array | ArrayBuffer | Int32Array | BigInt64Array | Uint8Array | Int8Array | T[]}
     * @private
     */
    __getFullRowString(ctx) {
        return ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1);
    }

}

exports.VisitorOfSemver = VisitorOfSemver;
