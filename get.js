import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, serverError, notFound } from "./libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: process.env.tableName,
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    };

    try {
        const result = await dynamoDbLib.call("get", params);
        if (result.Item) {
            // Return the retrieved item
            return success(result.Item);
        } else {
            return notFound({ status: false, error: "Item not found." });
        }
    } catch (e) {
        return serverError({ status: false });
    }
}