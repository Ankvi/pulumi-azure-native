import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified contact in a specified resource group.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getContact(args: GetContactArgs, opts?: pulumi.InvokeOptions): Promise<GetContactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:getContact", {
        "contactName": args.contactName,
        "resourceGroupName": args.resourceGroupName,
        "spacecraftName": args.spacecraftName,
    }, opts);
}

export interface GetContactArgs {
    /**
     * Contact name.
     */
    contactName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Spacecraft ID.
     */
    spacecraftName: string;
}

/**
 * Customer creates a contact resource for a spacecraft resource.
 */
export interface GetContactResult {
    /**
     * The configuration associated with the allocated antenna.
     */
    readonly antennaConfiguration: types.outputs.ContactsPropertiesResponseAntennaConfiguration;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The reference to the contact profile resource.
     */
    readonly contactProfile: types.outputs.ContactsPropertiesResponseContactProfile;
    /**
     * Azimuth of the antenna at the end of the contact in decimal degrees.
     */
    readonly endAzimuthDegrees: number;
    /**
     * Spacecraft elevation above the horizon at contact end.
     */
    readonly endElevationDegrees: number;
    /**
     * Any error message while scheduling a contact.
     */
    readonly errorMessage: string;
    /**
     * Azure Ground Station name.
     */
    readonly groundStationName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Maximum elevation of the antenna during the contact in decimal degrees.
     */
    readonly maximumElevationDegrees: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Reservation end time of a contact (ISO 8601 UTC standard).
     */
    readonly reservationEndTime: string;
    /**
     * Reservation start time of a contact (ISO 8601 UTC standard).
     */
    readonly reservationStartTime: string;
    /**
     * Receive end time of a contact (ISO 8601 UTC standard).
     */
    readonly rxEndTime: string;
    /**
     * Receive start time of a contact (ISO 8601 UTC standard).
     */
    readonly rxStartTime: string;
    /**
     * Azimuth of the antenna at the start of the contact in decimal degrees.
     */
    readonly startAzimuthDegrees: number;
    /**
     * Spacecraft elevation above the horizon at contact start.
     */
    readonly startElevationDegrees: number;
    /**
     * Status of a contact.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Transmit end time of a contact (ISO 8601 UTC standard).
     */
    readonly txEndTime: string;
    /**
     * Transmit start time of a contact (ISO 8601 UTC standard).
     */
    readonly txStartTime: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified contact in a specified resource group.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getContactOutput(args: GetContactOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContactResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:orbital:getContact", {
        "contactName": args.contactName,
        "resourceGroupName": args.resourceGroupName,
        "spacecraftName": args.spacecraftName,
    }, opts);
}

export interface GetContactOutputArgs {
    /**
     * Contact name.
     */
    contactName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Spacecraft ID.
     */
    spacecraftName: pulumi.Input<string>;
}