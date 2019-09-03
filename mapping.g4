grammar mapping;

import freelogEntities, semver;

mapping_rules
  : mapping_rule+
  ;

mapping_rule
  : add_presentation_rule
  | replace_presentation_rule
  | downline_presentation_rule
  | online_presentation_rule
  | set_tags_rule
  ;

// 添加规则
add_presentation_rule
  : '+' presentation_name '=>' source_entity set_tags
  ;

replace_presentation_rule
  : '*' replaced '=>' source_entity scope_specification?
  ;

// 下线规则
downline_presentation_rule
  : '-' presentation_name
  ;

// 上线规则
online_presentation_rule
  : '^' presentation_name
  ;

// 设置标签规则
set_tags_rule
  : '[SET]' presentation_name set_tags
  ;



// 设置标签
set_tags
  : 'tag=[' ((tag ',')* tag)? ']'
  ;

// TODO 单个标签
tag
  : ID
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

//
scope_specification
  : SCOPE '=' scope_set
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

