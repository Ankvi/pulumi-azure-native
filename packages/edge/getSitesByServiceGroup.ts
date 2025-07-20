import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Site at SG scope
 *
 * Uses Azure REST API version 2025-03-01-preview.
 *
 * Other available API versions: 2025-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native edge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSitesByServiceGroup(args: GetSitesByServiceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSitesByServiceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getSitesByServiceGroup", {
        "servicegroupName": args.servicegroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetSitesByServiceGroupArgs {
    /**
     * The name of the service group
     */
    servicegroupName: string;
    /**
     * The name of the site
     */
    siteName: string;
}

/**
 * Site as ARM Resource
 */
export interface GetSitesByServiceGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SitePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get Site at SG scope
 *
 * Uses Azure REST API version 2025-03-01-preview.
 *
 * Other available API versions: 2025-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native edge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSitesByServiceGroupOutput(args: GetSitesByServiceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSitesByServiceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getSitesByServiceGroup", {
        "servicegroupName": args.servicegroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetSitesByServiceGroupOutputArgs {
    /**
     * The name of the service group
     */
    servicegroupName: pulumi.Input<string>;
    /**
     * The name of the site
     */
    siteName: pulumi.Input<string>;
}