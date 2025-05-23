import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified edge site in a specified resource group.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native orbital [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEdgeSite(args: GetEdgeSiteArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:getEdgeSite", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native orbital [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getEdgeSiteOutput(args: GetEdgeSiteOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEdgeSiteResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:orbital:getEdgeSite", {
        "edgeSiteName": args.edgeSiteName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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