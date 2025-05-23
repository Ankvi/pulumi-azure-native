import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Customer creates a contact resource for a spacecraft resource.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 */
export class Contact extends pulumi.CustomResource {
    /**
     * Get an existing Contact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Contact {
        return new Contact(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:orbital:Contact';

    /**
     * Returns true if the given object is an instance of Contact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Contact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Contact.__pulumiType;
    }

    /**
     * The configuration associated with the allocated antenna.
     */
    public /*out*/ readonly antennaConfiguration!: pulumi.Output<types.outputs.ContactsPropertiesResponseAntennaConfiguration>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The reference to the contact profile resource.
     */
    public readonly contactProfile!: pulumi.Output<types.outputs.ContactsPropertiesResponseContactProfile>;
    /**
     * Azimuth of the antenna at the end of the contact in decimal degrees.
     */
    public /*out*/ readonly endAzimuthDegrees!: pulumi.Output<number>;
    /**
     * Spacecraft elevation above the horizon at contact end.
     */
    public /*out*/ readonly endElevationDegrees!: pulumi.Output<number>;
    /**
     * Any error message while scheduling a contact.
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * Azure Ground Station name.
     */
    public readonly groundStationName!: pulumi.Output<string>;
    /**
     * Maximum elevation of the antenna during the contact in decimal degrees.
     */
    public /*out*/ readonly maximumElevationDegrees!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Reservation end time of a contact (ISO 8601 UTC standard).
     */
    public readonly reservationEndTime!: pulumi.Output<string>;
    /**
     * Reservation start time of a contact (ISO 8601 UTC standard).
     */
    public readonly reservationStartTime!: pulumi.Output<string>;
    /**
     * Receive end time of a contact (ISO 8601 UTC standard).
     */
    public /*out*/ readonly rxEndTime!: pulumi.Output<string>;
    /**
     * Receive start time of a contact (ISO 8601 UTC standard).
     */
    public /*out*/ readonly rxStartTime!: pulumi.Output<string>;
    /**
     * Azimuth of the antenna at the start of the contact in decimal degrees.
     */
    public /*out*/ readonly startAzimuthDegrees!: pulumi.Output<number>;
    /**
     * Spacecraft elevation above the horizon at contact start.
     */
    public /*out*/ readonly startElevationDegrees!: pulumi.Output<number>;
    /**
     * Status of a contact.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Transmit end time of a contact (ISO 8601 UTC standard).
     */
    public /*out*/ readonly txEndTime!: pulumi.Output<string>;
    /**
     * Transmit start time of a contact (ISO 8601 UTC standard).
     */
    public /*out*/ readonly txStartTime!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Contact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContactArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.contactProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'contactProfile'");
            }
            if ((!args || args.groundStationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groundStationName'");
            }
            if ((!args || args.reservationEndTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservationEndTime'");
            }
            if ((!args || args.reservationStartTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'reservationStartTime'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.spacecraftName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'spacecraftName'");
            }
            resourceInputs["contactName"] = args ? args.contactName : undefined;
            resourceInputs["contactProfile"] = args ? args.contactProfile : undefined;
            resourceInputs["groundStationName"] = args ? args.groundStationName : undefined;
            resourceInputs["reservationEndTime"] = args ? args.reservationEndTime : undefined;
            resourceInputs["reservationStartTime"] = args ? args.reservationStartTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["spacecraftName"] = args ? args.spacecraftName : undefined;
            resourceInputs["antennaConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endAzimuthDegrees"] = undefined /*out*/;
            resourceInputs["endElevationDegrees"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["maximumElevationDegrees"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rxEndTime"] = undefined /*out*/;
            resourceInputs["rxStartTime"] = undefined /*out*/;
            resourceInputs["startAzimuthDegrees"] = undefined /*out*/;
            resourceInputs["startElevationDegrees"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["txEndTime"] = undefined /*out*/;
            resourceInputs["txStartTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["antennaConfiguration"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contactProfile"] = undefined /*out*/;
            resourceInputs["endAzimuthDegrees"] = undefined /*out*/;
            resourceInputs["endElevationDegrees"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["groundStationName"] = undefined /*out*/;
            resourceInputs["maximumElevationDegrees"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["reservationEndTime"] = undefined /*out*/;
            resourceInputs["reservationStartTime"] = undefined /*out*/;
            resourceInputs["rxEndTime"] = undefined /*out*/;
            resourceInputs["rxStartTime"] = undefined /*out*/;
            resourceInputs["startAzimuthDegrees"] = undefined /*out*/;
            resourceInputs["startElevationDegrees"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["txEndTime"] = undefined /*out*/;
            resourceInputs["txStartTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:orbital/v20220301:Contact" }, { type: "azure-native:orbital/v20221101:Contact" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Contact.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Contact resource.
 */
export interface ContactArgs {
    /**
     * Contact name.
     */
    contactName?: pulumi.Input<string>;
    /**
     * The reference to the contact profile resource.
     */
    contactProfile: pulumi.Input<types.inputs.ContactsPropertiesContactProfileArgs>;
    /**
     * Azure Ground Station name.
     */
    groundStationName: pulumi.Input<string>;
    /**
     * Reservation end time of a contact (ISO 8601 UTC standard).
     */
    reservationEndTime: pulumi.Input<string>;
    /**
     * Reservation start time of a contact (ISO 8601 UTC standard).
     */
    reservationStartTime: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Spacecraft ID.
     */
    spacecraftName: pulumi.Input<string>;
}