add $u2/r10.0@1.1.1 as p3
  do
    set_labels t1,t2,t3
    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6>$u7/m7, $u8/m8
    show
  end
alter p4
  do
    hide
    set_title "000"
    set_cover "000"
    add_attr 1 2 3
    delete_attr 4
  end
activate_theme 123
