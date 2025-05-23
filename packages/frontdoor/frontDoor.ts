import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Front Door represents a collection of backend endpoints to route traffic to along with rules that specify how traffic is sent there.
 *
 * Uses Azure REST API version 2021-06-01.
 *
 * Other available API versions: 2019-04-01, 2019-05-01, 2020-01-01, 2020-04-01, 2020-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native frontdoor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class FrontDoor extends pulumi.CustomResource {
    /**
     * Get an existing FrontDoor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FrontDoor {
        return new FrontDoor(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:frontdoor:FrontDoor';

    /**
     * Returns true if the given object is an instance of FrontDoor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FrontDoor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FrontDoor.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Backend pools available to routing rules.
     */
    public readonly backendPools!: pulumi.Output<types.outputs.BackendPoolResponse[] | undefined>;
    /**
     * Settings for all backendPools
     */
    public readonly backendPoolsSettings!: pulumi.Output<types.outputs.BackendPoolsSettingsResponse | undefined>;
    /**
     * The host that each frontendEndpoint must CNAME to.
     */
    public /*out*/ readonly cname!: pulumi.Output<string>;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * Key-Value pair representing additional properties for frontdoor.
     */
    public /*out*/ readonly extendedProperties!: pulumi.Output<{[key: string]: string}>;
    /**
     * A friendly name for the frontDoor
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * The Id of the frontdoor.
     */
    public /*out*/ readonly frontdoorId!: pulumi.Output<string>;
    /**
     * Frontend endpoints available to routing rules.
     */
    public readonly frontendEndpoints!: pulumi.Output<types.outputs.FrontendEndpointResponse[] | undefined>;
    /**
     * Health probe settings associated with this Front Door instance.
     */
    public readonly healthProbeSettings!: pulumi.Output<types.outputs.HealthProbeSettingsModelResponse[] | undefined>;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    public readonly loadBalancingSettings!: pulumi.Output<types.outputs.LoadBalancingSettingsModelResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Front Door.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource status of the Front Door.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Routing rules associated with this Front Door.
     */
    public readonly routingRules!: pulumi.Output<types.outputs.RoutingRuleResponse[] | undefined>;
    /**
     * Rules Engine Configurations available to routing rules.
     */
    public /*out*/ readonly rulesEngines!: pulumi.Output<types.outputs.RulesEngineResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FrontDoor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FrontDoorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendPools"] = args ? args.backendPools : undefined;
            resourceInputs["backendPoolsSettings"] = args ? (args.backendPoolsSettings ? pulumi.output(args.backendPoolsSettings).apply(types.inputs.backendPoolsSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["enabledState"] = args ? args.enabledState : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["frontDoorName"] = args ? args.frontDoorName : undefined;
            resourceInputs["frontendEndpoints"] = args ? args.frontendEndpoints : undefined;
            resourceInputs["healthProbeSettings"] = args ? args.healthProbeSettings : undefined;
            resourceInputs["loadBalancingSettings"] = args ? args.loadBalancingSettings : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingRules"] = args ? args.routingRules : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cname"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["frontdoorId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["rulesEngines"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backendPools"] = undefined /*out*/;
            resourceInputs["backendPoolsSettings"] = undefined /*out*/;
            resourceInputs["cname"] = undefined /*out*/;
            resourceInputs["enabledState"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["frontdoorId"] = undefined /*out*/;
            resourceInputs["frontendEndpoints"] = undefined /*out*/;
            resourceInputs["healthProbeSettings"] = undefined /*out*/;
            resourceInputs["loadBalancingSettings"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["routingRules"] = undefined /*out*/;
            resourceInputs["rulesEngines"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:frontdoor/v20190401:FrontDoor" }, { type: "azure-native:frontdoor/v20190501:FrontDoor" }, { type: "azure-native:frontdoor/v20200101:FrontDoor" }, { type: "azure-native:frontdoor/v20200401:FrontDoor" }, { type: "azure-native:frontdoor/v20200501:FrontDoor" }, { type: "azure-native:frontdoor/v20210601:FrontDoor" }, { type: "azure-native:network/v20210601:FrontDoor" }, { type: "azure-native:network:FrontDoor" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FrontDoor.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FrontDoor resource.
 */
export interface FrontDoorArgs {
    /**
     * Backend pools available to routing rules.
     */
    backendPools?: pulumi.Input<pulumi.Input<types.inputs.BackendPoolArgs>[]>;
    /**
     * Settings for all backendPools
     */
    backendPoolsSettings?: pulumi.Input<types.inputs.BackendPoolsSettingsArgs>;
    /**
     * Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: pulumi.Input<string | types.enums.FrontDoorEnabledState>;
    /**
     * A friendly name for the frontDoor
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Name of the Front Door which is globally unique.
     */
    frontDoorName?: pulumi.Input<string>;
    /**
     * Frontend endpoints available to routing rules.
     */
    frontendEndpoints?: pulumi.Input<pulumi.Input<types.inputs.FrontendEndpointArgs>[]>;
    /**
     * Health probe settings associated with this Front Door instance.
     */
    healthProbeSettings?: pulumi.Input<pulumi.Input<types.inputs.HealthProbeSettingsModelArgs>[]>;
    /**
     * Load balancing settings associated with this Front Door instance.
     */
    loadBalancingSettings?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancingSettingsModelArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Routing rules associated with this Front Door.
     */
    routingRules?: pulumi.Input<pulumi.Input<types.inputs.RoutingRuleArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}