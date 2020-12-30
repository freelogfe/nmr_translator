grammar Mapping;

import FreelogEntities, Semver;

mappingRules
  : mappingRule*
  ;

mappingRule
  : addRule
  | alterRule
  | 'activate_theme' hostage
  | ~('add' | 'alter' | 'activate_theme')
  ;


// 添加规则
addRule
  : 'add' candidate 'as' exhibitName actions
  ;

candidate: resourceOrObjectName;

alterRule
  : 'alter' exhibitName actions
  ;

actions
  : (codeBlock | lineCode)
  ;

//setRule
//  : 'set' 'do' 'show_page_build' hostage 'end'
//  ;

codeBlock
  : 'do' 'end'
  | 'do' linesCode 'end'
  ;
linesCode: lineCode*;
lineCode
  : setLabels
  | replace
  | show
  | hide
  | ('set_labels' | 'replace' | 'show' | 'hide')
  ;

setLabels
  : 'set_labels' labels
  | 'set_labels';
labels
  : (label ',')* label
  ;
label: ID;

replace: 'replace' target 'with' source under?;
target: resourceOrObjectName;
source: resourceOrObjectName;
under: 'under' scope (',' scope)*;
scope: scopeNode ('>' scopeNode)*;
scopeNode: resourceOrObjectName;

show: 'show';
hide: 'hide';

resourceOrObjectName: resourceName | objectName;
exhibitName: exhibit_name;
hostage: exhibit_name;
resourceName: '$' resource_id;
objectName: '#' object_id;
