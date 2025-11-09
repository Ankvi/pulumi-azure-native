import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Connection base resource schema.
 *
 * Uses Azure REST API version 2025-04-01-preview.
 *
 * Other available API versions: 2025-06-01, 2025-07-01-preview, 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProjectConnection(args: GetProjectConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cognitiveservices:getProjectConnection", {
        "accountName": args.accountName,
        "connectionName": args.connectionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectConnectionArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: string;
    /**
     * Friendly name of the connection
     */
    connectionName: string;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Connection base resource schema.
 */
export interface GetProjectConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Connection property base schema.
     */
    readonly properties: types.outputs.AADAuthTypeConnectionPropertiesResponse | types.outputs.AccessKeyAuthTypeConnectionPropertiesResponse | types.outputs.AccountKeyAuthTypeConnectionPropertiesResponse | types.outputs.ApiKeyAuthConnectionPropertiesResponse | types.outputs.CustomKeysConnectionPropertiesResponse | types.outputs.ManagedIdentityAuthTypeConnectionPropertiesResponse | types.outputs.NoneAuthTypeConnectionPropertiesResponse | types.outputs.OAuth2AuthTypeConnectionPropertiesResponse | types.outputs.PATAuthTypeConnectionPropertiesResponse | types.outputs.SASAuthTypeConnectionPropertiesResponse | types.outputs.ServicePrincipalAuthTypeConnectionPropertiesResponse | types.outputs.UsernamePasswordAuthTypeConnectionPropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Connection base resource schema.
 *
 * Uses Azure REST API version 2025-04-01-preview.
 *
 * Other available API versions: 2025-06-01, 2025-07-01-preview, 2025-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProjectConnectionOutput(args: GetProjectConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cognitiveservices:getProjectConnection", {
        "accountName": args.accountName,
        "connectionName": args.connectionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectConnectionOutputArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Friendly name of the connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of Cognitive Services account's project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}