import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * ExpressRouteCircuit resource.
 */
export class ExpressRouteCircuit extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuit {
        return new ExpressRouteCircuit(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:ExpressRouteCircuit';

    /**
     * Returns true if the given object is an instance of ExpressRouteCircuit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteCircuit {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteCircuit.__pulumiType;
    }

    /**
     * Allow classic operations.
     */
    public readonly allowClassicOperations!: pulumi.Output<boolean | undefined>;
    /**
     * The authorizationKey.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * The authorization status of the Circuit.
     */
    public /*out*/ readonly authorizationStatus!: pulumi.Output<string>;
    /**
     * The list of authorizations.
     */
    public readonly authorizations!: pulumi.Output<types.outputs.network.v20230201.ExpressRouteCircuitAuthorizationResponse[] | undefined>;
    /**
     * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    public readonly bandwidthInGbps!: pulumi.Output<number | undefined>;
    /**
     * The CircuitProvisioningState state of the resource.
     */
    public readonly circuitProvisioningState!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    public readonly expressRoutePort!: pulumi.Output<types.outputs.network.v20230201.SubResourceResponse | undefined>;
    /**
     * The GatewayManager Etag.
     */
    public readonly gatewayManagerEtag!: pulumi.Output<string | undefined>;
    /**
     * Flag denoting global reach status.
     */
    public readonly globalReachEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of peerings.
     */
    public readonly peerings!: pulumi.Output<types.outputs.network.v20230201.ExpressRouteCircuitPeeringResponse[] | undefined>;
    /**
     * The provisioning state of the express route circuit resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The ServiceKey.
     */
    public readonly serviceKey!: pulumi.Output<string | undefined>;
    /**
     * The ServiceProviderNotes.
     */
    public readonly serviceProviderNotes!: pulumi.Output<string | undefined>;
    /**
     * The ServiceProviderProperties.
     */
    public readonly serviceProviderProperties!: pulumi.Output<types.outputs.network.v20230201.ExpressRouteCircuitServiceProviderPropertiesResponse | undefined>;
    /**
     * The ServiceProviderProvisioningState state of the resource.
     */
    public readonly serviceProviderProvisioningState!: pulumi.Output<string | undefined>;
    /**
     * The SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.network.v20230201.ExpressRouteCircuitSkuResponse | undefined>;
    /**
     * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     */
    public /*out*/ readonly stag!: pulumi.Output<number>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExpressRouteCircuit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowClassicOperations"] = args ? args.allowClassicOperations : undefined;
            resourceInputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            resourceInputs["authorizations"] = args ? args.authorizations : undefined;
            resourceInputs["bandwidthInGbps"] = args ? args.bandwidthInGbps : undefined;
            resourceInputs["circuitName"] = args ? args.circuitName : undefined;
            resourceInputs["circuitProvisioningState"] = args ? args.circuitProvisioningState : undefined;
            resourceInputs["expressRoutePort"] = args ? args.expressRoutePort : undefined;
            resourceInputs["gatewayManagerEtag"] = args ? args.gatewayManagerEtag : undefined;
            resourceInputs["globalReachEnabled"] = args ? args.globalReachEnabled : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peerings"] = args ? args.peerings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceKey"] = args ? args.serviceKey : undefined;
            resourceInputs["serviceProviderNotes"] = args ? args.serviceProviderNotes : undefined;
            resourceInputs["serviceProviderProperties"] = args ? args.serviceProviderProperties : undefined;
            resourceInputs["serviceProviderProvisioningState"] = args ? args.serviceProviderProvisioningState : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["authorizationStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["stag"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowClassicOperations"] = undefined /*out*/;
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["authorizationStatus"] = undefined /*out*/;
            resourceInputs["authorizations"] = undefined /*out*/;
            resourceInputs["bandwidthInGbps"] = undefined /*out*/;
            resourceInputs["circuitProvisioningState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRoutePort"] = undefined /*out*/;
            resourceInputs["gatewayManagerEtag"] = undefined /*out*/;
            resourceInputs["globalReachEnabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceKey"] = undefined /*out*/;
            resourceInputs["serviceProviderNotes"] = undefined /*out*/;
            resourceInputs["serviceProviderProperties"] = undefined /*out*/;
            resourceInputs["serviceProviderProvisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["stag"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ExpressRouteCircuit" }, { type: "azure-native:network/v20150501preview:ExpressRouteCircuit" }, { type: "azure-native:network/v20150615:ExpressRouteCircuit" }, { type: "azure-native:network/v20160330:ExpressRouteCircuit" }, { type: "azure-native:network/v20160601:ExpressRouteCircuit" }, { type: "azure-native:network/v20160901:ExpressRouteCircuit" }, { type: "azure-native:network/v20161201:ExpressRouteCircuit" }, { type: "azure-native:network/v20170301:ExpressRouteCircuit" }, { type: "azure-native:network/v20170601:ExpressRouteCircuit" }, { type: "azure-native:network/v20170801:ExpressRouteCircuit" }, { type: "azure-native:network/v20170901:ExpressRouteCircuit" }, { type: "azure-native:network/v20171001:ExpressRouteCircuit" }, { type: "azure-native:network/v20171101:ExpressRouteCircuit" }, { type: "azure-native:network/v20180101:ExpressRouteCircuit" }, { type: "azure-native:network/v20180201:ExpressRouteCircuit" }, { type: "azure-native:network/v20180401:ExpressRouteCircuit" }, { type: "azure-native:network/v20180601:ExpressRouteCircuit" }, { type: "azure-native:network/v20180701:ExpressRouteCircuit" }, { type: "azure-native:network/v20180801:ExpressRouteCircuit" }, { type: "azure-native:network/v20181001:ExpressRouteCircuit" }, { type: "azure-native:network/v20181101:ExpressRouteCircuit" }, { type: "azure-native:network/v20181201:ExpressRouteCircuit" }, { type: "azure-native:network/v20190201:ExpressRouteCircuit" }, { type: "azure-native:network/v20190401:ExpressRouteCircuit" }, { type: "azure-native:network/v20190601:ExpressRouteCircuit" }, { type: "azure-native:network/v20190701:ExpressRouteCircuit" }, { type: "azure-native:network/v20190801:ExpressRouteCircuit" }, { type: "azure-native:network/v20190901:ExpressRouteCircuit" }, { type: "azure-native:network/v20191101:ExpressRouteCircuit" }, { type: "azure-native:network/v20191201:ExpressRouteCircuit" }, { type: "azure-native:network/v20200301:ExpressRouteCircuit" }, { type: "azure-native:network/v20200401:ExpressRouteCircuit" }, { type: "azure-native:network/v20200501:ExpressRouteCircuit" }, { type: "azure-native:network/v20200601:ExpressRouteCircuit" }, { type: "azure-native:network/v20200701:ExpressRouteCircuit" }, { type: "azure-native:network/v20200801:ExpressRouteCircuit" }, { type: "azure-native:network/v20201101:ExpressRouteCircuit" }, { type: "azure-native:network/v20210201:ExpressRouteCircuit" }, { type: "azure-native:network/v20210301:ExpressRouteCircuit" }, { type: "azure-native:network/v20210501:ExpressRouteCircuit" }, { type: "azure-native:network/v20210801:ExpressRouteCircuit" }, { type: "azure-native:network/v20220101:ExpressRouteCircuit" }, { type: "azure-native:network/v20220501:ExpressRouteCircuit" }, { type: "azure-native:network/v20220701:ExpressRouteCircuit" }, { type: "azure-native:network/v20220901:ExpressRouteCircuit" }, { type: "azure-native:network/v20221101:ExpressRouteCircuit" }, { type: "azure-native:network/v20230401:ExpressRouteCircuit" }, { type: "azure-native:network/v20230501:ExpressRouteCircuit" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteCircuit.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitArgs {
    /**
     * Allow classic operations.
     */
    allowClassicOperations?: pulumi.Input<boolean>;
    /**
     * The authorizationKey.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The list of authorizations.
     */
    authorizations?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.ExpressRouteCircuitAuthorizationArgs>[]>;
    /**
     * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
     */
    bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The name of the circuit.
     */
    circuitName?: pulumi.Input<string>;
    /**
     * The CircuitProvisioningState state of the resource.
     */
    circuitProvisioningState?: pulumi.Input<string>;
    /**
     * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
     */
    expressRoutePort?: pulumi.Input<types.inputs.network.v20230201.SubResourceArgs>;
    /**
     * The GatewayManager Etag.
     */
    gatewayManagerEtag?: pulumi.Input<string>;
    /**
     * Flag denoting global reach status.
     */
    globalReachEnabled?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The list of peerings.
     */
    peerings?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.ExpressRouteCircuitPeeringArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ServiceKey.
     */
    serviceKey?: pulumi.Input<string>;
    /**
     * The ServiceProviderNotes.
     */
    serviceProviderNotes?: pulumi.Input<string>;
    /**
     * The ServiceProviderProperties.
     */
    serviceProviderProperties?: pulumi.Input<types.inputs.network.v20230201.ExpressRouteCircuitServiceProviderPropertiesArgs>;
    /**
     * The ServiceProviderProvisioningState state of the resource.
     */
    serviceProviderProvisioningState?: pulumi.Input<string | types.enums.v20230201.ServiceProviderProvisioningState>;
    /**
     * The SKU.
     */
    sku?: pulumi.Input<types.inputs.network.v20230201.ExpressRouteCircuitSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
