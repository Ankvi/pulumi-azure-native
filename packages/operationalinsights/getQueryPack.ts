import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2019-09-01.
 *
 * Other available API versions: 2019-09-01-preview, 2023-09-01, 2025-02-01.
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
     * Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
     */
    readonly provisioningState: string;
    /**
     * The unique ID of your application. This field cannot be changed.
     */
    readonly queryPackId: string;
    /**
     * Resource tags
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
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Returns a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2019-09-01.
 *
 * Other available API versions: 2019-09-01-preview, 2023-09-01, 2025-02-01.
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