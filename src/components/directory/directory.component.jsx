import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectionSections } from "../../redux/directory/directory.selector";

const directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionPropos }) => (
      <MenuItem key={id} {...otherSectionPropos} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectionSections
});

export default connect(mapStateToProps)(directory);
