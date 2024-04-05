import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified edge site in a specified resource group.
 */
export function getEdgeSite(args: GetEdgeSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeSiteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital/v20240301:getEdgeSite", {
        "edgeSiteName": args.edgeSiteName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEdgeSiteArgs {
    /**
     * Edge site name.
     */
    edgeSiteName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A customer's reference to a global communications site site.
 */
export interface GetEdgeSiteResult {
    /**
     * A reference to global communications site.
     */
    readonly globalCommunicationsSite: types.outputs.EdgeSitesPropertiesResponseGlobalCommunicationsSite;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
 * Gets the specified edge site in a specified resource group.
 */
export function getEdgeSiteOutput(args: GetEdgeSiteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEdgeSiteResult> {
    return pulumi.output(args).apply((a: any) => getEdgeSite(a, opts))
}

export interface GetEdgeSiteOutputArgs {
    /**
     * Edge site name.
     */
    edgeSiteName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}