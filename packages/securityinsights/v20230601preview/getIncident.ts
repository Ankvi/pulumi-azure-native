import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an incident.
 */
export function getIncident(args: GetIncidentArgs, opts?: pulumi.InvokeOptions): Promise<GetIncidentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230601preview:getIncident", {
        "incidentId": args.incidentId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIncidentArgs {
    /**
     * Incident ID
     */
    incidentId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

export interface GetIncidentResult {
    /**
     * Additional data on the incident
     */
    readonly additionalData: types.outputs.IncidentAdditionalDataResponse;
    /**
     * The reason the incident was closed
     */
    readonly classification?: string;
    /**
     * Describes the reason the incident was closed
     */
    readonly classificationComment?: string;
    /**
     * The classification reason the incident was closed with
     */
    readonly classificationReason?: string;
    /**
     * The time the incident was created
     */
    readonly createdTimeUtc: string;
    /**
     * The description of the incident
     */
    readonly description?: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The time of the first activity in the incident
     */
    readonly firstActivityTimeUtc?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * A sequential number
     */
    readonly incidentNumber: number;
    /**
     * The deep-link url to the incident in Azure portal
     */
    readonly incidentUrl: string;
    /**
     * List of labels relevant to this incident
     */
    readonly labels?: types.outputs.IncidentLabelResponse[];
    /**
     * The time of the last activity in the incident
     */
    readonly lastActivityTimeUtc?: string;
    /**
     * The last time the incident was updated
     */
    readonly lastModifiedTimeUtc: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Describes a user that the incident is assigned to
     */
    readonly owner?: types.outputs.IncidentOwnerInfoResponse;
    /**
     * The incident ID assigned by the incident provider
     */
    readonly providerIncidentId: string;
    /**
     * The name of the source provider that generated the incident
     */
    readonly providerName: string;
    /**
     * List of resource ids of Analytic rules related to the incident
     */
    readonly relatedAnalyticRuleIds: string[];
    /**
     * The severity of the incident
     */
    readonly severity: string;
    /**
     * The status of the incident
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Describes a team for the incident
     */
    readonly teamInformation?: types.outputs.TeamInformationResponse;
    /**
     * The title of the incident
     */
    readonly title: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an incident.
 */
export function getIncidentOutput(args: GetIncidentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIncidentResult> {
    return pulumi.output(args).apply((a: any) => getIncident(a, opts))
}

export interface GetIncidentOutputArgs {
    /**
     * Incident ID
     */
    incidentId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
