const {getAllRules} = require('../lib/semver');

getAllRules('1.0.0-alpha');
getAllRules('1.0.0-alpha.1');
getAllRules('1.0.0-alpha.beta');
getAllRules('1.0.0-beta');
getAllRules('1.0.0-beta.2');
getAllRules('1.0.0-beta.11');
getAllRules('1.0.0-rc.1');
getAllRules('1.0.0');
getAllRules('1.0.0-alpha+001');
getAllRules('1.0.0+20130313144700');
getAllRules('1.0.0-beta+exp.sha.5114f85');

// 标准的版本号必须（MUST）采用 X.Y.Z 的格式
getAllRules('1.');
getAllRules('1.2');
//  X、Y 和 Z 为非负的整数
getAllRules('1.-2.3');
getAllRules('a.0.0');
getAllRules('1.a.0');
getAllRules('1.0.a');
// 禁止（MUST NOT）在数字前方补零
getAllRules('01.2.3');
// 先行版本号 标识符必须（MUST）由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成
getAllRules('1.0.0-1@');
getAllRules('1.0.0-1*');
// 禁止（MUST NOT）留白
getAllRules('1.0.0-1 a');
// 禁止（MUST NOT）在前方补零
getAllRules('1.0.0-01');
// 版本编译元数据 标识符必须（MUST）由 ASCII 字母数字和连接号 [0-9A-Za-z-] 组成，且禁止（MUST NOT）留白
getAllRules('1.0.0+0 1');
getAllRules('1.0.0+a*');

