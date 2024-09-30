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

/**
 * Endpoint details
 */
export interface EndpointPropertiesArgs {
    /**
     * The resource Id of the connectivity endpoint (optional).
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The type of endpoint.
     */
    type: pulumi.Input<string | enums.Type>;
}

/**
 * Properties of public cloud connectors.
 */
export interface PublicCloudConnectorPropertiesArgs {
    /**
     * Cloud profile for AWS.
     */
    awsCloudProfile: pulumi.Input<AwsCloudProfileArgs>;
    /**
     * Host cloud the public cloud connector.
     */
    hostType: pulumi.Input<string | enums.HostType>;
}
/**
 * publicCloudConnectorPropertiesArgsProvideDefaults sets the appropriate defaults for PublicCloudConnectorPropertiesArgs
 */
export function publicCloudConnectorPropertiesArgsProvideDefaults(val: PublicCloudConnectorPropertiesArgs): PublicCloudConnectorPropertiesArgs {
    return {
        ...val,
        awsCloudProfile: pulumi.output(val.awsCloudProfile).apply(awsCloudProfileArgsProvideDefaults),
    };
}

/**
 * Solution configuration resource.
 */
export interface SolutionConfigurationPropertiesArgs {
    /**
     * Solution settings
     */
    solutionSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The type of the solution
     */
    solutionType: pulumi.Input<string>;
}

