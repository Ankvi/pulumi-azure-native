import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Azure Arc PrivateLinkScope.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13, 2025-02-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateLinkScope(args: GetPrivateLinkScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute:getPrivateLinkScope", {
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateLinkScopeArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: string;
}

/**
 * An Azure Arc PrivateLinkScope definition.
 */
export interface GetPrivateLinkScopeResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    readonly properties: types.outputs.HybridComputePrivateLinkScopePropertiesResponse;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Returns a Azure Arc PrivateLinkScope.
 *
 * Uses Azure REST API version 2024-07-10.
 *
 * Other available API versions: 2020-08-15-preview, 2021-01-28-preview, 2021-03-25-preview, 2021-04-22-preview, 2021-05-17-preview, 2021-05-20, 2021-06-10-preview, 2021-12-10-preview, 2022-03-10, 2022-05-10-preview, 2022-08-11-preview, 2022-11-10, 2022-12-27, 2022-12-27-preview, 2023-03-15-preview, 2023-06-20-preview, 2023-10-03-preview, 2024-03-31-preview, 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview, 2025-01-13, 2025-02-19-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcompute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPrivateLinkScopeOutput(args: GetPrivateLinkScopeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPrivateLinkScopeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcompute:getPrivateLinkScope", {
        "resourceGroupName": args.resourceGroupName,
        "scopeName": args.scopeName,
    }, opts);
}

export interface GetPrivateLinkScopeOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Arc PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
}