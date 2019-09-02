import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selector";

const collectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection
});

export default connect(mapStateToProps)(collectionOverview);
