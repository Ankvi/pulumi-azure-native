import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Ground Station contains one or more antennas.
 *
 * Uses Azure REST API version 2024-03-01-preview. In version 2.x of the Azure Native provider, it used API version 2024-03-01-preview.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native orbital [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class GroundStation extends pulumi.CustomResource {
    /**
     * Get an existing GroundStation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GroundStation {
        return new GroundStation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:orbital:GroundStation';

    /**
     * Returns true if the given object is an instance of GroundStation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroundStation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroundStation.__pulumiType;
    }

    /**
     * Altitude of the ground station.
     */
    public readonly altitudeMeters!: pulumi.Output<number | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Ground station capabilities.
     */
    public readonly capabilities!: pulumi.Output<string[]>;
    /**
     * City of ground station.
     */
    public readonly city!: pulumi.Output<string | undefined>;
    /**
     * A reference to global communications site.
     */
    public readonly globalCommunicationsSite!: pulumi.Output<types.outputs.GroundStationsPropertiesResponseGlobalCommunicationsSite>;
    /**
     * Latitude of the ground station in decimal degrees.
     */
    public readonly latitudeDegrees!: pulumi.Output<number | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Longitude of the ground station in decimal degrees.
     */
    public readonly longitudeDegrees!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Ground station provider name.
     */
    public readonly providerName!: pulumi.Output<string | undefined>;
    /**
     * Release Status of a ground station.
     */
    public /*out*/ readonly releaseMode!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GroundStation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroundStationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.capabilities === undefined) && !opts.urn) {
                throw new Error("Missing required property 'capabilities'");
            }
            if ((!args || args.globalCommunicationsSite === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalCommunicationsSite'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["altitudeMeters"] = args ? args.altitudeMeters : undefined;
            resourceInputs["capabilities"] = args ? args.capabilities : undefined;
            resourceInputs["city"] = args ? args.city : undefined;
            resourceInputs["globalCommunicationsSite"] = args ? args.globalCommunicationsSite : undefined;
            resourceInputs["groundStationName"] = args ? args.groundStationName : undefined;
            resourceInputs["latitudeDegrees"] = args ? args.latitudeDegrees : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["longitudeDegrees"] = args ? args.longitudeDegrees : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["releaseMode"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["altitudeMeters"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["capabilities"] = undefined /*out*/;
            resourceInputs["city"] = undefined /*out*/;
            resourceInputs["globalCommunicationsSite"] = undefined /*out*/;
            resourceInputs["latitudeDegrees"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["longitudeDegrees"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["providerName"] = undefined /*out*/;
            resourceInputs["releaseMode"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:orbital/v20240301:GroundStation" }, { type: "azure-native:orbital/v20240301preview:GroundStation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GroundStation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GroundStation resource.
 */
export interface GroundStationArgs {
    /**
     * Altitude of the ground station.
     */
    altitudeMeters?: pulumi.Input<number>;
    /**
     * Ground station capabilities.
     */
    capabilities: pulumi.Input<pulumi.Input<string | types.enums.Capability>[]>;
    /**
     * City of ground station.
     */
    city?: pulumi.Input<string>;
    /**
     * A reference to global communications site.
     */
    globalCommunicationsSite: pulumi.Input<types.inputs.GroundStationsPropertiesGlobalCommunicationsSiteArgs>;
    /**
     * Ground Station name.
     */
    groundStationName?: pulumi.Input<string>;
    /**
     * Latitude of the ground station in decimal degrees.
     */
    latitudeDegrees?: pulumi.Input<number>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Longitude of the ground station in decimal degrees.
     */
    longitudeDegrees?: pulumi.Input<number>;
    /**
     * Ground station provider name.
     */
    providerName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}