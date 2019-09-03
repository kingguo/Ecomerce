import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

export const withSpinner = WrappedComponent => ({
  isLoading,
  ...otherprops
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherprops}></WrappedComponent>
  );
};
