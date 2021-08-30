/* 
Create and export configuration variables
*/

//Container for all the environments
let environments = {};

//Stagng (default) envorinment
environments.staging = {
    'httpPort' : 3000,
    'httpsPort' : 3001,
    'envName' : 'staging'
};

//Production environment
environments.production = {
    'httpPort' : 5000,
    'httpsPort' : 5001,
    'envName' : 'production'
};

// Determine which environment was passed as a command-line argument
let currentEnvironment = typeof(process.env.NODE_ENV)=='string' ? process.env.NODE_ENV.toLowerCase() : '';

//Check that the current environment is one of the envs above, if not, default to string.
let environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

//Export the module
module.exports = environmentToExport;