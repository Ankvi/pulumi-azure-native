import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * cloud profile for AWS.
 */
export interface AwsCloudProfileArgs {
    /**
     * Account id for the AWS account.
     */
    accountId: pulumi.Input<string>;
    /**
     * List of AWS accounts which need to be excluded.
     */
    excludedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean value that indicates whether the account is organizational or not. True represents organization account, whereas false represents a single account.
     */
    isOrganizationalAccount?: pulumi.Input<boolean>;
}
/**
 * awsCloudProfileArgsProvideDefaults sets the appropriate defaults for AwsCloudProfileArgs
 */
export function awsCloudProfileArgsProvideDefaults(val: AwsCloudProfileArgs): AwsCloudProfileArgs {
    return {
        ...val,
        isOrganizationalAccount: (val.isOrganizationalAccount) ?? false,
    };
}
