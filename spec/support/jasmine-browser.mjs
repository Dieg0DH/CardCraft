export default {
  srcDir: "src",
  // Using empty srcFiles for ES modules
  srcFiles: [],
  specDir: "spec",
  specFiles: ["**/*[sS]pec.?(m)js"],
  helpers: ["helpers/**/*.?(m)js"],
  // New ES modules support
  esmFilenameExtension: ".mjs",
  modulesWithSideEffectsInSrcFiles: false,
  enableTopLevelAwait: false,

  env: {
    stopSpecOnExpectationFailure: false,
    stopOnSpecFailure: false,
    random: true,
    forbidDuplicateNames: true,
  },

  // Network configuration
  listenAddress: "localhost",
  hostname: "localhost",

  // Browser configuration
  browser: {
    name: "firefox",
  },
};
