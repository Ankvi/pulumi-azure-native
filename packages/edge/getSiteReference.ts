import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get Site Reference Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getSiteReference(args: GetSiteReferenceArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteReferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:edge:getSiteReference", {
        "contextName": args.contextName,
        "resourceGroupName": args.resourceGroupName,
        "siteReferenceName": args.siteReferenceName,
    }, opts);
}

export interface GetSiteReferenceArgs {
    /**
     * The name of the Context.
     */
    contextName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the SiteReference
     */
    siteReferenceName: string;
}

/**
 * Site Reference Resource
 */
export interface GetSiteReferenceResult {
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
    readonly properties: types.outputs.SiteReferencePropertiesResponse;
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
 * Get Site Reference Resource
 *
 * Uses Azure REST API version 2025-06-01.
 */
export function getSiteReferenceOutput(args: GetSiteReferenceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSiteReferenceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:edge:getSiteReference", {
        "contextName": args.contextName,
        "resourceGroupName": args.resourceGroupName,
        "siteReferenceName": args.siteReferenceName,
    }, opts);
}

export interface GetSiteReferenceOutputArgs {
    /**
     * The name of the Context.
     */
    contextName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SiteReference
     */
    siteReferenceName: pulumi.Input<string>;
}