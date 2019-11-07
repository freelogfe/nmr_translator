grammar Mapping;

import FreelogEntities, Semver;

mappingRules
  : mappingRule*
  ;

mappingRule
  : addRule
  | alterRule
  | ~('add' | 'alter')
  ;


// 添加规则
addRule
  : 'add' candidate 'as' presentationName codeBlock
  | 'add' candidate 'as' presentationName lineCode
  ;

candidate: releaseOrMockName;

alterRule
  : 'alter' presentationName codeBlock
  | 'alter' presentationName lineCode
  ;

codeBlock
  : 'do' 'end'
  | 'do' linesCode 'end'
  ;
linesCode: lineCode*;
lineCode
  : setTags
  | replace
  | show
  | hide
  | ('set_tags' | 'replace' | 'show' | 'hide')
  ;

setTags
  : 'set_tags' tags
  | 'set_tags';
tags
  : (tag ',')* tag
  ;
tag: ID;

replace: 'replace' target 'with' source under?;
target: releaseOrMockName;
source: releaseOrMockName;
under: 'under' scope (',' scope)*;
scope: scopeNode ('>' scopeNode)*;
scopeNode: releaseOrMockName;

show: 'show';
hide: 'hide';

releaseOrMockName: releaseName | mockName;
presentationName: presentation_name;
releaseName: '$' release_id;
mockName: '#' mock_id;
