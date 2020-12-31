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
hostage: exhibit_name;

// 添加规则
addRule
  : 'add' candidate 'as' exhibitName actions
  ;

candidate: resourceOrObjectName;

alterRule
  : 'alter' exhibitName actions
  ;

exhibitName: exhibit_name;

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

resourceOrObjectName: resourceName | objectName;
resourceName: '$' resource_id;
objectName: '#' object_id;

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
  : 'add_attr' key '<base>' defaultValue description?
  ;

addAttrSelect
  : 'add_attr' key '<select' addAttrSelectOptions '>' description?
  ;
addAttrSelectOptions
  : (addAttrSelectOption ',')* addAttrSelectOption
  ;
addAttrSelectOption: ID;

addAttrInput
  : 'add_attr' key '<input>' defaultValue description?
  ;

deleteAttr
  : 'delete_attr' key
  ;

key: ID;
defaultValue: ID;
description: ID;
