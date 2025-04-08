import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the specified registration assignment.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getRegistrationAssignment(args: GetRegistrationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistrationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managedservices:getRegistrationAssignment", {
        "expandRegistrationDefinition": args.expandRegistrationDefinition,
        "registrationAssignmentId": args.registrationAssignmentId,
        "scope": args.scope,
    }, opts);
}

export interface GetRegistrationAssignmentArgs {
    /**
     * The flag indicating whether to return the registration definition details along with the registration assignment details.
     */
    expandRegistrationDefinition?: boolean;
    /**
     * The GUID of the registration assignment.
     */
    registrationAssignmentId: string;
    /**
     * The scope of the resource.
     */
    scope: string;
}

/**
 * The registration assignment.
 */
export interface GetRegistrationAssignmentResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The fully qualified path of the registration assignment.
     */
    readonly id: string;
    /**
     * The name of the registration assignment.
     */
    readonly name: string;
    /**
     * The properties of a registration assignment.
     */
    readonly properties: types.outputs.RegistrationAssignmentPropertiesResponse;
    /**
     * The metadata for the registration assignment resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the Azure resource (Microsoft.ManagedServices/registrationAssignments).
     */
    readonly type: string;
}
/**
 * Gets the details of the specified registration assignment.
 *
 * Uses Azure REST API version 2022-10-01.
 */
export function getRegistrationAssignmentOutput(args: GetRegistrationAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRegistrationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managedservices:getRegistrationAssignment", {
        "expandRegistrationDefinition": args.expandRegistrationDefinition,
        "registrationAssignmentId": args.registrationAssignmentId,
        "scope": args.scope,
    }, opts);
}

export interface GetRegistrationAssignmentOutputArgs {
    /**
     * The flag indicating whether to return the registration definition details along with the registration assignment details.
     */
    expandRegistrationDefinition?: pulumi.Input<boolean>;
    /**
     * The GUID of the registration assignment.
     */
    registrationAssignmentId: pulumi.Input<string>;
    /**
     * The scope of the resource.
     */
    scope: pulumi.Input<string>;
}