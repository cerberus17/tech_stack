export const SELECT_LIBRARY_ACTION = 'select_library';

export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY_ACTION,
    selectedLibraryId: libraryId
  };
};