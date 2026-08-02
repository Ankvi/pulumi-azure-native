import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified edu enrollment.
 *
 * Uses Azure REST API version 2026-03-01-preview.
 */
export function getEduEnrollment(args: GetEduEnrollmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEduEnrollmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:programenrollment:getEduEnrollment", {
        "enrollmentName": args.enrollmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEduEnrollmentArgs {
    /**
     * The name of the edu enrollment
     */
    enrollmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An education program enrollment that groups Entra domains under a single sovereign/edu program scope.
 */
export interface GetEduEnrollmentResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.EduEnrollmentPropertiesResponse;
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
 * Gets the specified edu enrollment.
 *
 * Uses Azure REST API version 2026-03-01-preview.
 */
export function getEduEnrollmentOutput(args: GetEduEnrollmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEduEnrollmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:programenrollment:getEduEnrollment", {
        "enrollmentName": args.enrollmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEduEnrollmentOutputArgs {
    /**
     * The name of the edu enrollment
     */
    enrollmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}