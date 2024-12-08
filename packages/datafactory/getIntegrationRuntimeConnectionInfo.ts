import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.
 * Azure REST API version: 2018-06-01.
 */
export function getIntegrationRuntimeConnectionInfo(args: GetIntegrationRuntimeConnectionInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getIntegrationRuntimeConnectionInfo", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationRuntimeConnectionInfoArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Connection information for encrypting the on-premises data source credentials.
 */
export interface GetIntegrationRuntimeConnectionInfoResult {
    /**
     * The on-premises integration runtime host URL.
     */
    readonly hostServiceUri: string;
    /**
     * The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation.
     */
    readonly identityCertThumbprint: string;
    /**
     * Whether the identity certificate is expired.
     */
    readonly isIdentityCertExprired: boolean;
    /**
     * The public key for encrypting a credential when transferring the credential to the integration runtime.
     */
    readonly publicKey: string;
    /**
     * The token generated in service. Callers use this token to authenticate to integration runtime.
     */
    readonly serviceToken: string;
    /**
     * The integration runtime version.
     */
    readonly version: string;
}
/**
 * Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.
 * Azure REST API version: 2018-06-01.
 */
export function getIntegrationRuntimeConnectionInfoOutput(args: GetIntegrationRuntimeConnectionInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationRuntimeConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getIntegrationRuntimeConnectionInfo", {
        "factoryName": args.factoryName,
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetIntegrationRuntimeConnectionInfoOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The integration runtime name.
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}