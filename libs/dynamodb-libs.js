import AWS from "aws-sdk";

export function call(action, params) {
const dynamodb = new AWS.DynamoDB.DocumentClient();

return dynamoDb[action](params).promise();
}