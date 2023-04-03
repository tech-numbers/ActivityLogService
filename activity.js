const AWS = require("aws-sdk");
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

let saveIntoActivityLog =  async (input1, input2, input3, input4, input5, input6) => {
  
  console.log("[ActivityLogService: saveIntoActivityLog] -- Inside saveIntoActivityLog --"); 
  console.log("[ActivityLogService: saveIntoActivityLog] input1 -->", input1);
  console.log("[ActivityLogService: saveIntoActivityLog] input2 -->", input2);
  console.log("[ActivityLogService: saveIntoActivityLog] input1 -->", input3);
  console.log("[ActivityLogService: saveIntoActivityLog] input2 -->", input4);
  console.log("[ActivityLogService: saveIntoActivityLog] input1 -->", input5);
  const timestamp2 = new Date().getTime();
  console.log("[ActivityLogService: saveIntoActivityLog] timeStamp -->", timestamp2);

  let putItemInput = {
    TableName: "ActivityLog",
    Item: {
      "pk": input1,
      "sk": timestamp2,
      "userId": input2,
      "action": input3,
      "details": input4,
      "ipAddress": input5,
      "userAgent": input6
    }
  }

  try {
    const updateItemOutput = await dynamoDbClient.put(putItemInput).promise();
   // console.log("[ActivityLogService: saveMyNotification] updateItemOutput -->", updateItemOutput);
} catch (error) {
 console.error('[ActivityLogService: saveMyNotification] Error -->', error);
 return false;
}
}

module.exports = { saveIntoActivityLog };
