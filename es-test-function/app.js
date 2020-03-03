const axios = require('axios');
// const url = 'http://checkip.amazonaws.com/';


/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    const response = null;
    console.log("Started!");
    try {
        var region = 'us-west-1'; // e.g. us-west-1
        var domain = '<ELASTICSEARCH_DOMAIN_URL>'; // e.g. search-domain.region.es.amazonaws.com

        let search_results = await axios({
            method: 'get',
            url: `${domain}/_xpack`
        });

        response = {
            statusCode: 200,
            body: search_results.data,
        };
    } catch (err) {
        console.log(err);
        return err;
    }
    console.log(response)
    return response;
};
