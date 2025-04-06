import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specific standard assignment for the requested scope by resourceId
 *
 * Uses Azure REST API version 2021-08-01-preview.
 */
export function getAssignment(args: GetAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:security:getAssignment", {
        "assignmentId": args.assignmentId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssignmentArgs {
    /**
     * The security assignment key - unique key for the standard assignment
     */
    assignmentId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Security Assignment on a resource group over a given scope
 */
export interface GetAssignmentResult {
    /**
     * Additional data about the assignment
     */
    readonly additionalData?: types.outputs.AssignmentPropertiesResponseAdditionalData;
    /**
     * Component item with key as applied to this standard assignment over the given scope
     */
    readonly assignedComponent?: types.outputs.AssignedComponentItemResponse;
    /**
     * Standard item with key as applied to this standard assignment over the given scope
     */
    readonly assignedStandard?: types.outputs.AssignedStandardItemResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * description of the standardAssignment
     */
    readonly description?: string;
    /**
     * display name of the standardAssignment
     */
    readonly displayName?: string;
    /**
     * expected effect of this assignment (Disable/Exempt/etc)
     */
    readonly effect?: string;
    /**
     * Entity tag is used for comparing two or more entities from the same requested resource.
     */
    readonly etag?: string;
    /**
     * Expiration date of this assignment as a full ISO date
     */
    readonly expiresOn?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Kind of the resource
     */
    readonly kind?: string;
    /**
     * Location where the resource is stored
     */
    readonly location?: string;
    /**
     * The assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs.
     */
    readonly metadata?: any;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Scope to which the standardAssignment applies - can be a subscription path or a resource group under that subscription
     */
    readonly scope?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * A list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get a specific standard assignment for the requested scope by resourceId
 *
 * Uses Azure REST API version 2021-08-01-preview.
 */
export function getAssignmentOutput(args: GetAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:security:getAssignment", {
        "assignmentId": args.assignmentId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssignmentOutputArgs {
    /**
     * The security assignment key - unique key for the standard assignment
     */
    assignmentId: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}