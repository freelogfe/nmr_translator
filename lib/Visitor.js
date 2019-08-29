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
    visitMapping_rule(ctx) {
        console.log('###visitMapping_rule###');
        console.log(this.__getFullRowString(ctx));
        console.log('');
        super.visitMapping_rule(ctx);
        // return this.visitChildren(ctx);
    };

    //
    //
    // // Visit a parse tree produced by mappingParser#hide_existing_presentation_rule.
    // visitHide_existing_presentation_rule(ctx) {
    //     console.log(ctx, 'visitHide_existing_presentation_rule');
    //     super.visitHide_existing_presentation_rule(ctx);
    //     // return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#mock_presentation_rule.
    // visitMock_presentation_rule(ctx) {
    //     console.log(ctx, 'visitMock_presentation_rule');
    //     super.visitMock_presentation_rule(ctx);
    //     // return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#remapping_rule.
    // visitRemapping_rule(ctx) {
    //     console.log(ctx, 'visitRemapping_rule');
    //     super.visitRemapping_rule(ctx);
    //     // return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#replaced.
    // visitReplaced(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#source_entity.
    // visitSource_entity(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#scope_specification.
    // visitScope_specification(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#scope_set.
    // visitScope_set(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#scope_set_element.
    // visitScope_set_element(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#resource_id.
    // visitResource_id(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#release_id.
    // visitRelease_id(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#mock_id.
    // visitMock_id(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#presentation_name.
    // visitPresentation_name(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#release_name.
    // visitRelease_name(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#mock_name.
    // visitMock_name(ctx) {
    //     return this.visitChildren(ctx);
    // };
    //
    //
    // // Visit a parse tree produced by mappingParser#bucket_name.
    visitBucket_name(ctx) {
        console.log('###visitBucket_name###');
        console.log(this.__getFullRowString(ctx));
        console.log('');
        // return this.visitChildren(ctx);
        super.visitBucket_name(ctx);
    }

    //
    //
    // // Visit a parse tree produced by mappingParser#user_name.
    visitUser_name(ctx) {
        console.log('###visitUser_name###');
        console.log(this.__getFullRowString(ctx));
        console.log('');
        // return this.visitChildren(ctx);
        super.visitUser_name(ctx);
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

exports.Visitor = Visitor;
