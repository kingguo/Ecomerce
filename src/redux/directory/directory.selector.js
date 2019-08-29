import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectionSections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
