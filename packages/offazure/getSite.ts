import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Site REST Resource.
 * Azure REST API version: 2020-07-07.
 */
export function getSite(args: GetSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getSite", {
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
     * Site name.
     */
    siteName: string;
}

/**
 * Site REST Resource.
 */
export interface GetSiteResult {
    /**
     * eTag for concurrency control.
     */
    readonly eTag?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Azure location in which Sites is created.
     */
    readonly location?: string;
    /**
     * Name of the VMware site.
     */
    readonly name?: string;
    /**
     * Nested properties of VMWare site.
     */
    readonly properties: types.outputs.SitePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    /**
     * Type of resource. Type = Microsoft.OffAzure/VMWareSites.
     */
    readonly type: string;
}
/**
 * Site REST Resource.
 * Azure REST API version: 2020-07-07.
 */
export function getSiteOutput(args: GetSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getSite", {
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
     * Site name.
     */
    siteName: pulumi.Input<string>;
}