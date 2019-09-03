const {mappingVisitor} = require('../gen/mappingVisitor');

// const mappingVisitor = require('../gen/mappingListener').mappingListener;

/**
 * 重载 mappingVisitor 中的方法，实现业务逻辑
 */
class Visitor extends mappingVisitor {
    constructor() {
        super();

    }

    // Visit a parse tree produced by mappingParser#mapping_rules.
    visitMapping_rules(ctx) {
        // console.log(ctx, 'ctxctxctxctxctxctx');
        // return this.visitChildren(ctx);
        console.log('###visitMapping_rules###');
        console.log(this.__getFullRowString(ctx), 'visitMapping_rules');
        console.log('');
        super.visitMapping_rules(ctx);
    };

    // Visit a parse tree produced by mappingParser#mapping_rule.
    // visitMapping_rule(ctx) {
    //     console.log('###visitMapping_rule###');
    //     console.log(this.__getFullRowString(ctx));
    //     console.log('');
    //     super.visitMapping_rule(ctx);
    //     // return this.visitChildren(ctx);
    // };

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

exports.Visitor = Visitor;
