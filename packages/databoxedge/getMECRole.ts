import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific role by name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getMECRole(args: GetMECRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetMECRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getMECRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMECRoleArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The role name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * MEC role.
 */
export interface GetMECRoleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Activation key of the MEC.
     */
    readonly connectionString?: types.outputs.AsymmetricEncryptedSecretResponse;
    /**
     * Controller Endpoint.
     */
    readonly controllerEndpoint?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Role type.
     * Expected value is 'MEC'.
     */
    readonly kind: "MEC";
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Unique Id of the Resource.
     */
    readonly resourceUniqueId?: string;
    /**
     * Role status.
     */
    readonly roleStatus: string;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets a specific role by name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getMECRoleOutput(args: GetMECRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMECRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getMECRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMECRoleOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The role name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}