import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get connection info for an integration runtime
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIntegrationRuntimeConnectionInfo(args: GetIntegrationRuntimeConnectionInfoArgs, opts?: pulumi.InvokeOptions): Promise<GetIntegrationRuntimeConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getIntegrationRuntimeConnectionInfo", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeConnectionInfoArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
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
 * Get connection info for an integration runtime
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-05-01, 2021-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native synapse [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIntegrationRuntimeConnectionInfoOutput(args: GetIntegrationRuntimeConnectionInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIntegrationRuntimeConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getIntegrationRuntimeConnectionInfo", {
        "integrationRuntimeName": args.integrationRuntimeName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIntegrationRuntimeConnectionInfoOutputArgs {
    /**
     * Integration runtime name
     */
    integrationRuntimeName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}