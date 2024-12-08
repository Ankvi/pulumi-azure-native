import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a Traffic Manager profile.
 * Azure REST API version: 2022-04-01. Prior API version in Azure Native 1.x: 2018-08-01.
 *
 * Other available API versions: 2022-04-01-preview.
 */
export class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Profile {
        return new Profile(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:Profile';

    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Profile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Profile.__pulumiType;
    }

    /**
     * The list of allowed endpoint record types.
     */
    public readonly allowedEndpointRecordTypes!: pulumi.Output<string[] | undefined>;
    /**
     * The DNS settings of the Traffic Manager profile.
     */
    public readonly dnsConfig!: pulumi.Output<types.outputs.DnsConfigResponse | undefined>;
    /**
     * The list of endpoints in the Traffic Manager profile.
     */
    public readonly endpoints!: pulumi.Output<types.outputs.EndpointResponse[] | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of endpoints to be returned for MultiValue routing type.
     */
    public readonly maxReturn!: pulumi.Output<number | undefined>;
    /**
     * The endpoint monitoring settings of the Traffic Manager profile.
     */
    public readonly monitorConfig!: pulumi.Output<types.outputs.MonitorConfigResponse | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The status of the Traffic Manager profile.
     */
    public readonly profileStatus!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The traffic routing method of the Traffic Manager profile.
     */
    public readonly trafficRoutingMethod!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
     */
    public readonly trafficViewEnrollmentStatus!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowedEndpointRecordTypes"] = args ? args.allowedEndpointRecordTypes : undefined;
            resourceInputs["dnsConfig"] = args ? args.dnsConfig : undefined;
            resourceInputs["endpoints"] = args ? args.endpoints : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["maxReturn"] = args ? args.maxReturn : undefined;
            resourceInputs["monitorConfig"] = args ? args.monitorConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["profileStatus"] = args ? args.profileStatus : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trafficRoutingMethod"] = args ? args.trafficRoutingMethod : undefined;
            resourceInputs["trafficViewEnrollmentStatus"] = args ? args.trafficViewEnrollmentStatus : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        } else {
            resourceInputs["allowedEndpointRecordTypes"] = undefined /*out*/;
            resourceInputs["dnsConfig"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxReturn"] = undefined /*out*/;
            resourceInputs["monitorConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profileStatus"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["trafficRoutingMethod"] = undefined /*out*/;
            resourceInputs["trafficViewEnrollmentStatus"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20151101:Profile" }, { type: "azure-native:network/v20170301:Profile" }, { type: "azure-native:network/v20170501:Profile" }, { type: "azure-native:network/v20180201:Profile" }, { type: "azure-native:network/v20180301:Profile" }, { type: "azure-native:network/v20180401:Profile" }, { type: "azure-native:network/v20180801:Profile" }, { type: "azure-native:network/v20220401:Profile" }, { type: "azure-native:network/v20220401preview:Profile" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Profile.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * The list of allowed endpoint record types.
     */
    allowedEndpointRecordTypes?: pulumi.Input<pulumi.Input<string | types.enums.AllowedEndpointRecordType>[]>;
    /**
     * The DNS settings of the Traffic Manager profile.
     */
    dnsConfig?: pulumi.Input<types.inputs.DnsConfigArgs>;
    /**
     * The list of endpoints in the Traffic Manager profile.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    endpoints?: pulumi.Input<pulumi.Input<types.inputs.EndpointArgs>[]>;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    id?: pulumi.Input<string>;
    /**
     * The Azure Region where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Maximum number of endpoints to be returned for MultiValue routing type.
     */
    maxReturn?: pulumi.Input<number>;
    /**
     * The endpoint monitoring settings of the Traffic Manager profile.
     */
    monitorConfig?: pulumi.Input<types.inputs.MonitorConfigArgs>;
    /**
     * The name of the resource
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Traffic Manager profile.
     */
    profileName?: pulumi.Input<string>;
    /**
     * The status of the Traffic Manager profile.
     */
    profileStatus?: pulumi.Input<string | types.enums.ProfileStatus>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The traffic routing method of the Traffic Manager profile.
     */
    trafficRoutingMethod?: pulumi.Input<string | types.enums.TrafficRoutingMethod>;
    /**
     * Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
     */
    trafficViewEnrollmentStatus?: pulumi.Input<string | types.enums.TrafficViewEnrollmentStatus>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    type?: pulumi.Input<string>;
}