import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an entity query.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 */
export function getActivityCustomEntityQuery(args: GetActivityCustomEntityQueryArgs, opts?: pulumi.InvokeOptions): Promise<GetActivityCustomEntityQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getActivityCustomEntityQuery", {
        "entityQueryId": args.entityQueryId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetActivityCustomEntityQueryArgs {
    /**
     * entity query ID
     */
    entityQueryId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents Activity entity query.
 */
export interface GetActivityCustomEntityQueryResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The entity query content to display in timeline
     */
    readonly content?: string;
    /**
     * The time the activity was created
     */
    readonly createdTimeUtc: string;
    /**
     * The entity query description
     */
    readonly description?: string;
    /**
     * Determines whether this activity is enabled or disabled.
     */
    readonly enabled?: boolean;
    /**
     * The query applied only to entities matching to all filters
     */
    readonly entitiesFilter?: {[key: string]: string[]};
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The type of the query's source entity
     */
    readonly inputEntityType?: string;
    /**
     * The kind of the entity query
     * Expected value is 'Activity'.
     */
    readonly kind: "Activity";
    /**
     * The last time the activity was updated
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The Activity query definitions
     */
    readonly queryDefinitions?: types.outputs.ActivityEntityQueriesPropertiesResponseQueryDefinitions;
    /**
     * List of the fields of the source entity that are required to run the query
     */
    readonly requiredInputFieldsSets?: string[][];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The template id this activity was created from
     */
    readonly templateName?: string;
    /**
     * The entity query title
     */
    readonly title?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an entity query.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 */
export function getActivityCustomEntityQueryOutput(args: GetActivityCustomEntityQueryOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetActivityCustomEntityQueryResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getActivityCustomEntityQuery", {
        "entityQueryId": args.entityQueryId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetActivityCustomEntityQueryOutputArgs {
    /**
     * entity query ID
     */
    entityQueryId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}