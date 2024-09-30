import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This operation retrieves a single standard assignment, given its name and the scope it was created at.
 * Azure REST API version: 2024-08-01.
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
     * The identifier of the resource.
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
    readonly assignedStandard?: types.outputs.AssignedStandardItemResponse;
    /**
     * Additional data about assignment that has Attest effect
     */
    readonly attestationData?: types.outputs.StandardAssignmentPropertiesResponseAttestationData;
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
    readonly exemptionData?: types.outputs.StandardAssignmentPropertiesResponseExemptionData;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    readonly expiresOn?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The standard assignment metadata.
     */
    readonly metadata?: types.outputs.StandardAssignmentMetadataResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * This operation retrieves a single standard assignment, given its name and the scope it was created at.
 * Azure REST API version: 2024-08-01.
 */
export function getStandardAssignmentOutput(args: GetStandardAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStandardAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getStandardAssignment", {
        "resourceId": args.resourceId,
        "standardAssignmentName": args.standardAssignmentName,
    }, opts);
}

export interface GetStandardAssignmentOutputArgs {
    /**
     * The identifier of the resource.
     */
    resourceId: pulumi.Input<string>;
    /**
     * The standard assignments assignment key - unique key for the standard assignment
     */
    standardAssignmentName: pulumi.Input<string>;
}