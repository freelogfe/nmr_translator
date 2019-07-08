grammar mapping;

import freelogEntities;

mapping_rules
  : mapping_rule+
  ;

mapping_rule
  : mock_presentation_rule
  | remapping_rule
  ;

mock_presentation_rule
  : mock_presentation_decl '->' replacer
  ;

mock_presentation_decl
  : 'new_pstn' ':' ID
  ;

remapping_rule
  : replaced '->' replacer
  ;

replaced
  : release_id
  ;

replacer
  : release_id
  | mock_id
  | resource_id
  ;
