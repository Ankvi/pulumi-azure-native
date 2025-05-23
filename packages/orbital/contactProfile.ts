import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Customer creates a Contact Profile Resource, which will contain all of the configurations required for scheduling a contact.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 */
export class ContactProfile extends pulumi.CustomResource {
    /**
     * Get an existing ContactProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContactProfile {
        return new ContactProfile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:orbital:ContactProfile';

    /**
     * Returns true if the given object is an instance of ContactProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContactProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContactProfile.__pulumiType;
    }

    /**
     * Auto-tracking configuration.
     */
    public readonly autoTrackingConfiguration!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * ARM resource identifier of the Event Hub used for telemetry. Requires granting Orbital Resource Provider the rights to send telemetry into the hub.
     */
    public readonly eventHubUri!: pulumi.Output<string | undefined>;
    /**
     * Links of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    public readonly links!: pulumi.Output<types.outputs.ContactProfileLinkResponse[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Minimum viable elevation for the contact in decimal degrees. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    public readonly minimumElevationDegrees!: pulumi.Output<number | undefined>;
    /**
     * Minimum viable contact duration in ISO 8601 format. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    public readonly minimumViableContactDuration!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network configuration of customer virtual network.
     */
    public readonly networkConfiguration!: pulumi.Output<types.outputs.ContactProfilesPropertiesResponseNetworkConfiguration>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Third-party mission configuration of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    public readonly thirdPartyConfigurations!: pulumi.Output<types.outputs.ContactProfileThirdPartyConfigurationResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ContactProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContactProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.links === undefined) && !opts.urn) {
                throw new Error("Missing required property 'links'");
            }
            if ((!args || args.networkConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkConfiguration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoTrackingConfiguration"] = args ? args.autoTrackingConfiguration : undefined;
            resourceInputs["contactProfileName"] = args ? args.contactProfileName : undefined;
            resourceInputs["eventHubUri"] = args ? args.eventHubUri : undefined;
            resourceInputs["links"] = args ? args.links : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumElevationDegrees"] = args ? args.minimumElevationDegrees : undefined;
            resourceInputs["minimumViableContactDuration"] = args ? args.minimumViableContactDuration : undefined;
            resourceInputs["networkConfiguration"] = args ? args.networkConfiguration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["thirdPartyConfigurations"] = args ? args.thirdPartyConfigurations : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoTrackingConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eventHubUri"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimumElevationDegrees"] = undefined /*out*/;
            resourceInputs["minimumViableContactDuration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkConfiguration"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["thirdPartyConfigurations"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:orbital/v20220301:ContactProfile" }, { type: "azure-native:orbital/v20221101:ContactProfile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContactProfile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContactProfile resource.
 */
export interface ContactProfileArgs {
    /**
     * Auto-tracking configuration.
     */
    autoTrackingConfiguration?: pulumi.Input<types.enums.AutoTrackingConfiguration>;
    /**
     * Contact Profile name.
     */
    contactProfileName?: pulumi.Input<string>;
    /**
     * ARM resource identifier of the Event Hub used for telemetry. Requires granting Orbital Resource Provider the rights to send telemetry into the hub.
     */
    eventHubUri?: pulumi.Input<string>;
    /**
     * Links of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    links: pulumi.Input<pulumi.Input<types.inputs.ContactProfileLinkArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Minimum viable elevation for the contact in decimal degrees. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    minimumElevationDegrees?: pulumi.Input<number>;
    /**
     * Minimum viable contact duration in ISO 8601 format. Used for listing the available contacts with a spacecraft at a given ground station.
     */
    minimumViableContactDuration?: pulumi.Input<string>;
    /**
     * Network configuration of customer virtual network.
     */
    networkConfiguration: pulumi.Input<types.inputs.ContactProfilesPropertiesNetworkConfigurationArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Third-party mission configuration of the Contact Profile. Describes RF links, modem processing, and IP endpoints.
     */
    thirdPartyConfigurations?: pulumi.Input<pulumi.Input<types.inputs.ContactProfileThirdPartyConfigurationArgs>[]>;
}