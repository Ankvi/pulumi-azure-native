import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
 *
 * Uses Azure REST API version 2023-05-01. In version 1.x of the Azure Native provider, it used API version 2020-09-01.
 *
 * Other available API versions: 2023-07-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-09-01.
 */
export class OriginGroup extends pulumi.CustomResource {
    /**
     * Get an existing OriginGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OriginGroup {
        return new OriginGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:OriginGroup';

    /**
     * Returns true if the given object is an instance of OriginGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OriginGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OriginGroup.__pulumiType;
    }

    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    public readonly healthProbeSettings!: pulumi.Output<types.outputs.HealthProbeParametersResponse | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    public readonly origins!: pulumi.Output<types.outputs.ResourceReferenceResponse[]>;
    /**
     * Provisioning status of the origin group.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the origin group.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    public readonly responseBasedOriginErrorDetectionSettings!: pulumi.Output<types.outputs.ResponseBasedOriginErrorDetectionParametersResponse | undefined>;
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
     * Create a OriginGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OriginGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.origins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'origins'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["healthProbeSettings"] = args ? args.healthProbeSettings : undefined;
            resourceInputs["originGroupName"] = args ? args.originGroupName : undefined;
            resourceInputs["origins"] = args ? args.origins : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["responseBasedOriginErrorDetectionSettings"] = args ? args.responseBasedOriginErrorDetectionSettings : undefined;
            resourceInputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = args ? args.trafficRestorationTimeToHealedOrNewEndpointsInMinutes : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["healthProbeSettings"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["origins"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["responseBasedOriginErrorDetectionSettings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["trafficRestorationTimeToHealedOrNewEndpointsInMinutes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20191231:OriginGroup" }, { type: "azure-native:cdn/v20200331:OriginGroup" }, { type: "azure-native:cdn/v20200415:OriginGroup" }, { type: "azure-native:cdn/v20200901:OriginGroup" }, { type: "azure-native:cdn/v20210601:OriginGroup" }, { type: "azure-native:cdn/v20220501preview:OriginGroup" }, { type: "azure-native:cdn/v20221101preview:OriginGroup" }, { type: "azure-native:cdn/v20230501:OriginGroup" }, { type: "azure-native:cdn/v20230701preview:OriginGroup" }, { type: "azure-native:cdn/v20240201:OriginGroup" }, { type: "azure-native:cdn/v20240501preview:OriginGroup" }, { type: "azure-native:cdn/v20240601preview:OriginGroup" }, { type: "azure-native:cdn/v20240901:OriginGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OriginGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OriginGroup resource.
 */
export interface OriginGroupArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Health probe settings to the origin that is used to determine the health of the origin.
     */
    healthProbeSettings?: pulumi.Input<types.inputs.HealthProbeParametersArgs>;
    /**
     * Name of the origin group which is unique within the endpoint.
     */
    originGroupName?: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN within given origin group.
     */
    origins: pulumi.Input<pulumi.Input<types.inputs.ResourceReferenceArgs>[]>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
     */
    responseBasedOriginErrorDetectionSettings?: pulumi.Input<types.inputs.ResponseBasedOriginErrorDetectionParametersArgs>;
    /**
     * Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
     */
    trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: pulumi.Input<number>;
}