export function success(body) {
    return buildResponse(200, body);
}

export function serverError(body) {
    return buildResponse(500, body);
}

export function notFound(body) {
    return buildResponse(404, body);
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}