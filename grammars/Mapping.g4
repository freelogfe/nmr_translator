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
  | setTitle
  | setCover
  | addAttr
  | deleteAttr
  | ('set_labels' | 'replace' | 'show' | 'hide' | 'set_title' | 'set_cover' | 'add_attr' | 'delete_attr')
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

setTitle
  : 'set_title' title
  ;
title: ID;

setCover
  : 'set_cover' cover
  ;
cover: ID;

addAttr
  : addAttrBase
  | addAttrSelect
  | addAttrInput
  ;

addAttrBase
  : 'add_attr' key '<base>' defultValue description?
  ;

addAttrSelect
  : 'add_attr' key '<select' addAttrSelectOptions '>' description?
  ;
addAttrSelectOptions
  : (addAttrSelectOption ',')* addAttrSelectOption
  ;
addAttrSelectOption: ID;

addAttrInput
  : 'add_attr' key '<input>' defultValue description?
  ;

deleteAttr
  : 'delete_attr' key
  ;

key: ID;
defultValue: ID;
description: ID;

resourceOrObjectName: resourceName | objectName;
exhibitName: exhibit_name;
hostage: exhibit_name;
resourceName: '$' resource_id;
objectName: '#' object_id;
