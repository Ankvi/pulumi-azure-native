import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Site REST Resource.
 *
 * Uses Azure REST API version 2020-07-07.
 */
export function getHyperVSite(args: GetHyperVSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetHyperVSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getHyperVSite", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHyperVSiteArgs {
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
export interface GetHyperVSiteResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Name of the Hyper-V site.
     */
    readonly name?: string;
    /**
     * Nested properties of Hyper-V site.
     */
    readonly properties: types.outputs.SitePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    /**
     * Type of resource. Type = Microsoft.OffAzure/HyperVSites.
     */
    readonly type: string;
}
/**
 * Site REST Resource.
 *
 * Uses Azure REST API version 2020-07-07.
 */
export function getHyperVSiteOutput(args: GetHyperVSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHyperVSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getHyperVSite", {
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
    }, opts);
}

export interface GetHyperVSiteOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name.
     */
    siteName: pulumi.Input<string>;
}