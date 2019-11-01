grammar Mapping;

import FreelogEntities, Semver;

mappingRules
  : mappingRule*
  ;

mappingRule
  : addRule
  | alterRule
  ;

// 添加规则
addRule
  : 'add' releaseOrMockName 'as' presentationName codeBlock
  ;

alterRule
  : 'alter' presentationName codeBlock
  ;


codeBlock: 'do' linesCode 'end';
linesCode: lineCode*;
lineCode
  : setTags
  | replace
  | show
  | hide
  ;

setTags: 'set_tags' tags;
tags
  : ((ID ',')* ID)?
  ;

replace: 'replace' target 'with' source under?;
target: releaseOrMockName;
source: releaseOrMockName;
under: 'under' scope (',' scope)*;
scope: releaseOrMockName ('>' releaseOrMockName)*;

show: 'show';
hide: 'hide';

releaseOrMockName: releaseName | mockName;
presentationName: presentation_name;
releaseName: '$' release_id;
mockName: '#' mock_id;

//theCandidate
//  : sourceEntity
//  ;

// 设置标签规则
//setRule
//  : '&' presentation_name configs?
//  ;

// 所有配置
//configs
//  : tagsConfig replaceConfig? onlineConfig?
//  | tagsConfig onlineConfig? replaceConfig?
//  | replaceConfig tagsConfig? onlineConfig?
//  | replaceConfig onlineConfig? tagsConfig?
//  | onlineConfig replaceConfig? tagsConfig?
//  | onlineConfig tagsConfig? replaceConfig?
//  ;


// 设置标签
//tagsConfig
//  : 'tags' '=' '[' ((tags ',')* tags)? ']'
//  ;

// TODO 单个标签s
//tags
//  : ID
//  | INT
//  ;

//replaceConfig
//  : 'replace' '=' '[' (replaceItem ',')* replaceItem? ']'
//  ;
//
//replaceItem
//  : replaced '=>' replacer setScope?
//  ;
//
//// 要被替换的内容
//replaced
//  : release_id
//  ;
//
//replacer
//  : sourceEntity
//  ;
//
////
//setScope
//  : '*' '[' (scope_set (',' scope_set)*)? ']'
//  ;
//
////
//scope_set
//  : sourceEntity ('>' sourceEntity)*
//  ;
//
//// 独立的资源
//sourceEntity
//  : release_id
//  | mock_id
//  ;
//
//onlineConfig
//  : 'online' '=' bool
//  ;
//
//bool: 'true' | 'false';
