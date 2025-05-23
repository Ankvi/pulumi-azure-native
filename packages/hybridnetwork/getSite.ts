import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified network site.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSite(args: GetSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork:getSite", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetSiteArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the network service site.
     */
    siteName: string;
}

/**
 * Site resource.
 */
export interface GetSiteResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Site properties.
     */
    readonly properties: types.outputs.SitePropertiesFormatResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified network site.
 *
 * Uses Azure REST API version 2024-04-15.
 *
 * Other available API versions: 2023-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridnetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSiteOutput(args: GetSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridnetwork:getSite", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetSiteOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network service site.
     */
    siteName: pulumi.Input<string>;
}