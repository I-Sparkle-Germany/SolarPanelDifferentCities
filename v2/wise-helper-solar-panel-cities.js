let wiseAPI;

function initializeWiseIntegration() {
  wiseAPI = new WISEAPI();
  wiseAPI.handleComponentStateMessage = (message) => {
    loadFromWISE(message.componentState?.studentData);
  };
  wiseAPI.sendApplicationInitializedMessage();
}

/**
 * Save the student data to WISE
 */
function saveToWISE(studentData) {
  const componentState = wiseAPI.createComponentState(studentData, 'studentWork');
  try {
    wiseAPI.sendMessageToParent(componentState);
  } catch (err) {
    console.log('not posted');
  }
}
