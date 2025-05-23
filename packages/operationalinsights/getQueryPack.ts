import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-09-01, 2019-09-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQueryPack(args: GetQueryPackArgs, opts?: pulumi.InvokeOptions): Promise<GetQueryPackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getQueryPack", {
        "queryPackName": args.queryPackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueryPackArgs {
    /**
     * The name of the Log Analytics QueryPack resource.
     */
    queryPackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Log Analytics QueryPack definition.
 */
export interface GetQueryPackResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: string;
    /**
     * The unique ID of your application. This field cannot be changed.
     */
    readonly queryPackId: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Creation Date for the Log Analytics QueryPack, in ISO 8601 format.
     */
    readonly timeCreated: string;
    /**
     * Last modified date of the Log Analytics QueryPack, in ISO 8601 format.
     */
    readonly timeModified: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-09-01, 2019-09-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQueryPackOutput(args: GetQueryPackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQueryPackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getQueryPack", {
        "queryPackName": args.queryPackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueryPackOutputArgs {
    /**
     * The name of the Log Analytics QueryPack resource.
     */
    queryPackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}