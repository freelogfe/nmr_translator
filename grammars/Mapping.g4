grammar Mapping;

import FreelogEntities, Semver;

mapping_rules
  : mapping_rule+
  ;

mapping_rule
  : add_presentation_rule
  | replace_presentation_rule
  | downline_presentation_rule
  | online_presentation_rule
  | set_rule
  ;

disabled_modifier: '!';

// 添加规则
add_presentation_rule
  : disabled_modifier? '+' presentation_name '=>' the_candidate set_tags?
  ;

replace_presentation_rule
  : disabled_modifier? '*' replaced '=>' replacer scope_specification?
  ;

// 下线规则
downline_presentation_rule
  : disabled_modifier? '-' presentation_name
  ;

// 上线规则
online_presentation_rule
  : disabled_modifier? '^' presentation_name
  ;

// 设置标签规则
set_rule
  : disabled_modifier? '&' presentation_name set_tags
  | disabled_modifier? '&' presentation_name set_version
  | disabled_modifier? '&' presentation_name set_version set_tags
  | disabled_modifier? '&' presentation_name set_tags set_version
  ;

// 设置版本
set_version
  : 'version=' (valid_semver)
  ;

// 设置标签
set_tags
  : 'tags=[' ((tags ',')* tags)? ']'
  ;

// TODO 单个标签s
tags
  : ID
//  | INT
  ;

// 独立的资源
source_entity
  : release_id
  | mock_id
  ;

// 要被替换的内容
replaced
  : release_id
  ;

replacer
  : source_entity
  ;

the_candidate
  : source_entity
  ;


//
scope_specification
  : 'scope' '=' scope_set
  ;

//
scope_set
  : scope_set_element
  | '[' (scope_set_element ',')* scope_set_element ']'
  ;

//
scope_set_element
  : presentation_name ('->' (source_entity '->')* source_entity)?
  ;



// 添加
//mock_presentation_rule
//  : '+' presentation_name '->' source_entity
//  ;

// 替代
//remapping_rule
//  : '*' replaced '->' source_entity scope_specification?
//  ;

//  | resource_id
