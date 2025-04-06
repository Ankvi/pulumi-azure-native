import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * AFDOrigin group comprising of origins is used for load balancing to origins when the content cannot be served from Azure Front Door.
 *
 * Uses Azure REST API version 2024-09-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cdn [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AFDOriginGroup extends pulumi.CustomResource {
    /**
     * Get an existing AFDOriginGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AFDOriginGroup {
        return new AFDOriginGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:AFDOriginGroup';

    /**
     * Returns true if the given object is an instance of AFDOriginGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AFDOriginGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AFDOriginGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    public readonly healthProbeSettings!: pulumi.Output<types.outputs.HealthProbeParametersResponse | undefined>;
    /**
     * Load balancing settings for a backend pool
     */
    public readonly loadBalancingSettings!: pulumi.Output<types.outputs.LoadBalancingSettingsParametersResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the profile which holds the origin group.
     */
    public readonly profileName!: pulumi.Output<string>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    public readonly sessionAffinityState!: pulumi.Output<string | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    public readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AFDOriginGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AFDOriginGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["healthProbeSettings"] = args ? args.healthProbeSettings : undefined;
            resourceInputs["loadBalancingSettings"] = args ? args.loadBalancingSettings : undefined;
            resourceInputs["originGroupName"] = args ? args.originGroupName : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sessionAffinityState"] = args ? args.sessionAffinityState : undefined;
            resourceInputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = args ? args.trafficRestorationTimeToHealedOrNewEndpointsInMinutes : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["healthProbeSettings"] = undefined /*out*/;
            resourceInputs["loadBalancingSettings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["profileName"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sessionAffinityState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:AFDOriginGroup" }, { type: "azure-native:cdn/v20210601:AFDOriginGroup" }, { type: "azure-native:cdn/v20220501preview:AFDOriginGroup" }, { type: "azure-native:cdn/v20221101preview:AFDOriginGroup" }, { type: "azure-native:cdn/v20230501:AFDOriginGroup" }, { type: "azure-native:cdn/v20230701preview:AFDOriginGroup" }, { type: "azure-native:cdn/v20240201:AFDOriginGroup" }, { type: "azure-native:cdn/v20240501preview:AFDOriginGroup" }, { type: "azure-native:cdn/v20240601preview:AFDOriginGroup" }, { type: "azure-native:cdn/v20240901:AFDOriginGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AFDOriginGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AFDOriginGroup resource.
 */
export interface AFDOriginGroupArgs {
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    healthProbeSettings?: pulumi.Input<types.inputs.HealthProbeParametersArgs>;
    /**
     * Load balancing settings for a backend pool
     */
    loadBalancingSettings?: pulumi.Input<types.inputs.LoadBalancingSettingsParametersArgs>;
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    originGroupName?: pulumi.Input<string>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
     */
    sessionAffinityState?: pulumi.Input<string | types.enums.EnabledState>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}