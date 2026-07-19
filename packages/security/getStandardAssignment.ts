import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single standard assignment, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2024-08-01.
 */
export function getStandardAssignment(args: GetStandardAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetStandardAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getStandardAssignment", {
        "resourceId": args.resourceId,
        "standardAssignmentName": args.standardAssignmentName,
    }, opts);
}

export interface GetStandardAssignmentArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceId: string;
    /**
     * The standard assignments assignment key - unique key for the standard assignment
     */
    standardAssignmentName: string;
}

/**
 * Security Assignment on a resource group over a given scope
 */
export interface GetStandardAssignmentResult {
    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    readonly assignedStandard?: types.outputs.CommonAssignedStandardItemResponse;
    /**
     * Additional data about assignment that has Attest effect
     */
    readonly attestationData?: types.outputs.StandardAssignmentPropertiesAttestationDataResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description of the standardAssignment
     */
    readonly description?: string;
    /**
     * Display name of the standardAssignment
     */
    readonly displayName?: string;
    /**
     * Expected effect of this assignment (Audit/Exempt/Attest)
     */
    readonly effect?: string;
    /**
     * Excluded scopes, filter out the descendants of the scope (on management scopes)
     */
    readonly excludedScopes?: string[];
    /**
     * Additional data about assignment that has Exempt effect
     */
    readonly exemptionData?: types.outputs.StandardAssignmentPropertiesExemptionDataResponse;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    readonly expiresOn?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The standard assignment metadata.
     */
    readonly metadata?: types.outputs.StandardAssignmentMetadataResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * This operation retrieves a single standard assignment, given its name and the scope it was created at.
 *
 * Uses Azure REST API version 2024-08-01.
 */
export function getStandardAssignmentOutput(args: GetStandardAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStandardAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getStandardAssignment", {
        "resourceId": args.resourceId,
        "standardAssignmentName": args.standardAssignmentName,
    }, opts);
}

export interface GetStandardAssignmentOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The standard assignments assignment key - unique key for the standard assignment
     */
    standardAssignmentName: pulumi.Input<string>;
}