import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-09-01, 2019-09-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQuery(args: GetQueryArgs, opts?: pulumi.InvokeOptions): Promise<GetQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getQuery", {
        "id": args.id,
        "queryPackName": args.queryPackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueryArgs {
    /**
     * The id of a specific query defined in the Log Analytics QueryPack
     */
    id: string;
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
 * A Log Analytics QueryPack-Query definition.
 */
export interface GetQueryResult {
    /**
     * Object Id of user creating the query.
     */
    readonly author: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Body of the query.
     */
    readonly body: string;
    /**
     * Description of the query.
     */
    readonly description?: string;
    /**
     * Unique display name for your query within the Query Pack.
     */
    readonly displayName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Additional properties that can be set for the query.
     */
    readonly properties: any;
    /**
     * The related metadata items for the function.
     */
    readonly related?: types.outputs.LogAnalyticsQueryPackQueryPropertiesResponseRelated;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags associated with the query.
     */
    readonly tags?: {[key: string]: string[]};
    /**
     * Creation Date for the Log Analytics Query, in ISO 8601 format.
     */
    readonly timeCreated: string;
    /**
     * Last modified date of the Log Analytics Query, in ISO 8601 format.
     */
    readonly timeModified: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2019-09-01, 2019-09-01-preview, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native operationalinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getQueryOutput(args: GetQueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getQuery", {
        "id": args.id,
        "queryPackName": args.queryPackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetQueryOutputArgs {
    /**
     * The id of a specific query defined in the Log Analytics QueryPack
     */
    id: pulumi.Input<string>;
    /**
     * The name of the Log Analytics QueryPack resource.
     */
    queryPackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}