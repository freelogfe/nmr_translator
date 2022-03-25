// 规则
export interface Rule {
    // 原始文本
    text: string;
    // 操作 add | alter | activate_theme | comment
    operation: string;
    // 命令行动作
    actions?: Action[];
    // 展品名，当 operation = add | alter | activate_theme 时，存在该属性
    exhibitName?: string;
    // 标的物，当 operation = add 时，存在该属性
    candidate?: Candidate;
}

// 标的物
export interface Candidate {
    // 名称
    name: string;
    // 版本号 当 type = resource 时，存在该属性
    versionRange?: string;
    // 类型，resource | object
    type: string;
}

// 动作
export interface Action {
    // 操作
    operation: string;
    // 内容，见下面 ContentXx
    content: ContentSetLabel[] | ContentReplace | ContentOnline | ContentSetTitle | ContentSetCover | ContentAddAttr | ContentDeleteAttr | ContentComment;
}

// 设置标签 operation: "set_labels"
export interface ContentSetLabel extends String {
}

// 替换 operation: "replace"
export interface ContentReplace {
    // 被替换者
    replaced: Candidate;
    // 替代者
    replacer: Candidate;
    // 作用域集合
    scopes: Candidate[][];
}

// 设置上下线 operation: "online"
export interface ContentOnline extends Boolean {
}

// 设置标题 operation: "set_title"
export interface ContentSetTitle extends String {
}

// 设置封面 operation: "set_cover"
export interface ContentSetCover extends String {
}

// 添加属性 operation: "add_attr"
export interface ContentAddAttr {
    // 键
    key: string;
    // 值
    value: string;
    // 描述
    description: string;
}

// 删除属性 operation: "delete_attr"
export interface ContentDeleteAttr {
    // 键
    key: string;
}

// 添加依赖 operation: "add_rely"
export interface ContentAddRely{
    // 被添加的依赖
    resources: string[];
    // 添加到的依赖
    target?: string;
}

// 删除依赖 operation: "delete_rely"
export interface ContentDeleteRely{
    // 被添加的依赖
    resources: string[];
    // 添加到的依赖
    target?: string;
}

// 注释 operation: "comment"
export interface ContentComment extends String {
}
