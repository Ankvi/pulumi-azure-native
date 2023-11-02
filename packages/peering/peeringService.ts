import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Peering Service
 * Azure REST API version: 2022-10-01. Prior API version in Azure Native 1.x: 2021-01-01.
 */
export class PeeringService extends pulumi.CustomResource {
    /**
     * Get an existing PeeringService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PeeringService {
        return new PeeringService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering:PeeringService';

    /**
     * Returns true if the given object is an instance of PeeringService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PeeringService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PeeringService.__pulumiType;
    }

    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The Log Analytics Workspace Properties
     */
    public /*out*/ readonly logAnalyticsWorkspaceProperties!: pulumi.Output<types.outputs.LogAnalyticsWorkspacePropertiesResponse | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The location (state/province) of the customer.
     */
    public readonly peeringServiceLocation!: pulumi.Output<string | undefined>;
    /**
     * The name of the service provider.
     */
    public readonly peeringServiceProvider!: pulumi.Output<string | undefined>;
    /**
     * The backup peering (Microsoft/service provider) location to be used for customer traffic.
     */
    public readonly providerBackupPeeringLocation!: pulumi.Output<string | undefined>;
    /**
     * The primary peering (Microsoft/service provider) location to be used for customer traffic.
     */
    public readonly providerPrimaryPeeringLocation!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    public readonly sku!: pulumi.Output<types.outputs.PeeringServiceSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PeeringService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PeeringServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["peeringServiceLocation"] = args ? args.peeringServiceLocation : undefined;
            resourceInputs["peeringServiceName"] = args ? args.peeringServiceName : undefined;
            resourceInputs["peeringServiceProvider"] = args ? args.peeringServiceProvider : undefined;
            resourceInputs["providerBackupPeeringLocation"] = args ? args.providerBackupPeeringLocation : undefined;
            resourceInputs["providerPrimaryPeeringLocation"] = args ? args.providerPrimaryPeeringLocation : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["logAnalyticsWorkspaceProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logAnalyticsWorkspaceProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peeringServiceLocation"] = undefined /*out*/;
            resourceInputs["peeringServiceProvider"] = undefined /*out*/;
            resourceInputs["providerBackupPeeringLocation"] = undefined /*out*/;
            resourceInputs["providerPrimaryPeeringLocation"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering/v20190801preview:PeeringService" }, { type: "azure-native:peering/v20190901preview:PeeringService" }, { type: "azure-native:peering/v20200101preview:PeeringService" }, { type: "azure-native:peering/v20200401:PeeringService" }, { type: "azure-native:peering/v20201001:PeeringService" }, { type: "azure-native:peering/v20210101:PeeringService" }, { type: "azure-native:peering/v20210601:PeeringService" }, { type: "azure-native:peering/v20220101:PeeringService" }, { type: "azure-native:peering/v20220601:PeeringService" }, { type: "azure-native:peering/v20221001:PeeringService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PeeringService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PeeringService resource.
 */
export interface PeeringServiceArgs {
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The location (state/province) of the customer.
     */
    peeringServiceLocation?: pulumi.Input<string>;
    /**
     * The name of the peering service.
     */
    peeringServiceName?: pulumi.Input<string>;
    /**
     * The name of the service provider.
     */
    peeringServiceProvider?: pulumi.Input<string>;
    /**
     * The backup peering (Microsoft/service provider) location to be used for customer traffic.
     */
    providerBackupPeeringLocation?: pulumi.Input<string>;
    /**
     * The primary peering (Microsoft/service provider) location to be used for customer traffic.
     */
    providerPrimaryPeeringLocation?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU that defines the type of the peering service.
     */
    sku?: pulumi.Input<types.inputs.PeeringServiceSkuArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
