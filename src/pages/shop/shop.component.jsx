import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { withSpinner } from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class shopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  state = {
    loading: true
  };
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-75d04/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(res => console.log(res));
    collectionRef.get().then(async snapshot => {
      const colMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(colMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(
  null,
  mapDispathToProps
)(shopPage);
