import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DevOps Configuration resource.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-15-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDevOpsConfiguration(args: GetDevOpsConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetDevOpsConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getDevOpsConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetDevOpsConfigurationArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The security connector name.
     */
    securityConnectorName: string;
}

/**
 * DevOps Configuration resource.
 */
export interface GetDevOpsConfigurationResult {
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
     * DevOps Configuration properties.
     */
    readonly properties: types.outputs.DevOpsConfigurationPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * DevOps Configuration resource.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-15-preview, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native security [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDevOpsConfigurationOutput(args: GetDevOpsConfigurationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDevOpsConfigurationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getDevOpsConfiguration", {
        "resourceGroupName": args.resourceGroupName,
        "securityConnectorName": args.securityConnectorName,
    }, opts);
}

export interface GetDevOpsConfigurationOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security connector name.
     */
    securityConnectorName: pulumi.Input<string>;
}