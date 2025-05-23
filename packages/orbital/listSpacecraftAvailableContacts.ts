import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns list of available contacts. A contact is available if the spacecraft is visible from the ground station for more than the minimum viable contact duration provided in the contact profile.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function listSpacecraftAvailableContacts(args: ListSpacecraftAvailableContactsArgs, opts?: pulumi.InvokeOptions): Promise<ListSpacecraftAvailableContactsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:listSpacecraftAvailableContacts", {
        "contactProfile": args.contactProfile,
        "endTime": args.endTime,
        "groundStationName": args.groundStationName,
        "resourceGroupName": args.resourceGroupName,
        "spacecraftName": args.spacecraftName,
        "startTime": args.startTime,
    }, opts);
}

export interface ListSpacecraftAvailableContactsArgs {
    /**
     * The reference to the contact profile resource.
     */
    contactProfile: types.inputs.ContactParametersContactProfile;
    /**
     * End time of a contact (ISO 8601 UTC standard).
     */
    endTime: string;
    /**
     * Name of Azure Ground Station.
     */
    groundStationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Spacecraft ID.
     */
    spacecraftName: string;
    /**
     * Start time of a contact (ISO 8601 UTC standard).
     */
    startTime: string;
}

/**
 * Response for the ListAvailableContacts API service call.
 */
export interface ListSpacecraftAvailableContactsResult {
    /**
     * The URL to get the next set of results.
     */
    readonly nextLink: string;
    /**
     * A list of available contacts.
     */
    readonly value?: types.outputs.AvailableContactsResponse[];
}
/**
 * Returns list of available contacts. A contact is available if the spacecraft is visible from the ground station for more than the minimum viable contact duration provided in the contact profile.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function listSpacecraftAvailableContactsOutput(args: ListSpacecraftAvailableContactsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSpacecraftAvailableContactsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:orbital:listSpacecraftAvailableContacts", {
        "contactProfile": args.contactProfile,
        "endTime": args.endTime,
        "groundStationName": args.groundStationName,
        "resourceGroupName": args.resourceGroupName,
        "spacecraftName": args.spacecraftName,
        "startTime": args.startTime,
    }, opts);
}

export interface ListSpacecraftAvailableContactsOutputArgs {
    /**
     * The reference to the contact profile resource.
     */
    contactProfile: pulumi.Input<types.inputs.ContactParametersContactProfileArgs>;
    /**
     * End time of a contact (ISO 8601 UTC standard).
     */
    endTime: pulumi.Input<string>;
    /**
     * Name of Azure Ground Station.
     */
    groundStationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Spacecraft ID.
     */
    spacecraftName: pulumi.Input<string>;
    /**
     * Start time of a contact (ISO 8601 UTC standard).
     */
    startTime: pulumi.Input<string>;
}