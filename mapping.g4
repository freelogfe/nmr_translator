grammar mapping;

import freelogEntities, semver;

mapping_rules
  : mapping_rule+
  ;

mapping_rule
  : mock_presentation_rule
  | hide_existing_presentation_rule
  | remapping_rule
  ;

hide_existing_presentation_rule
  : '-' presentation_name
  ;

mock_presentation_rule
  : '+' presentation_name '->' source_entity
  ;

remapping_rule
  : '*' replaced '->' source_entity scope_specification?
  ;

replaced
  : release_id
  ;

source_entity
  : release_id
  | mock_id
  | resource_id
  ;

scope_specification
  : SCOPE '=' scope_set
  ;

scope_set
  : scope_set_element
  | '[' (scope_set_element ',')* scope_set_element ']'
  ;

scope_set_element
  : presentation_name ('->' (source_entity '->')* source_entity)?
  ;
