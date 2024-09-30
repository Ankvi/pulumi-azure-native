import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified contact Profile in a specified resource group.
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-03-01.
 */
export function getContactProfile(args: GetContactProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetContactProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:orbital:getContactProfile", {
        "contactProfileName": args.contactProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContactProfileArgs {
    /**
     * Contact Profile name.
     */
    contactProfileName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Customer creates a Contact Profile Resource, which will contain all of the configurations required for scheduling a contact.
 */
export interface GetContactProfileResult {
    /**
     * Auto-tracking configuration.
     */
    readonly autoTrackingConfiguration?: string;
    /**
     * ARM resource identifier of the Event Hub used for telemetry. Requires granting Orbital Resource Provider the rights to send telemetry into the hub.
     */
    readonly eventHubUri?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Links of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    readonly links: types.outputs.ContactProfileLinkResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Minimum viable elevation for the contact in decimal degrees. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    readonly minimumElevationDegrees?: number;
    /**
     * Minimum viable contact duration in ISO 8601 format. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    readonly minimumViableContactDuration?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network configuration of customer virtual network.
     */
    readonly networkConfiguration: types.outputs.ContactProfilesPropertiesResponseNetworkConfiguration;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Third-party mission configuration of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    readonly thirdPartyConfigurations?: types.outputs.ContactProfileThirdPartyConfigurationResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified contact Profile in a specified resource group.
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-03-01.
 */
export function getContactProfileOutput(args: GetContactProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContactProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:orbital:getContactProfile", {
        "contactProfileName": args.contactProfileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetContactProfileOutputArgs {
    /**
     * Contact Profile name.
     */
    contactProfileName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}