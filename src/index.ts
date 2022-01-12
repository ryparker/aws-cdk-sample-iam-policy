import { App, Stack, CfnOutput } from "aws-cdk-lib";
import { Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";

const app = new App();
const stack = new Stack(app, "sample-iam-policy");
const policy = new Policy(stack, "policy", {
  force: true,
  statements: [
    new PolicyStatement({
      actions: ["s3:ListBucket"],
      resources: ["arn:aws:s3:::*"],
    }),
  ],
});

// new CfnOutput(stack, "Policy", {
//   value: policy.policyName,
// });
