import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes an Arc Gateway.
 * Azure REST API version: 2024-03-31-preview.
 *
 * Other available API versions: 2024-05-20-preview, 2024-07-31-preview, 2024-09-10-preview, 2024-11-10-preview.
 */
export class Gateway extends pulumi.CustomResource {
    /**
     * Get an existing Gateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Gateway {
        return new Gateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcompute:Gateway';

    /**
     * Returns true if the given object is an instance of Gateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gateway.__pulumiType;
    }

    /**
     * Specifies the list of features that are enabled for this Gateway.
     */
    public readonly allowedFeatures!: pulumi.Output<string[] | undefined>;
    /**
     * The endpoint fqdn for the Gateway.
     */
    public /*out*/ readonly gatewayEndpoint!: pulumi.Output<string>;
    /**
     * A unique, immutable, identifier for the Gateway.
     */
    public /*out*/ readonly gatewayId!: pulumi.Output<string>;
    /**
     * The type of the Gateway resource.
     */
    public readonly gatewayType!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * Create a Gateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["allowedFeatures"] = args ? args.allowedFeatures : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["gatewayType"] = args ? args.gatewayType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["gatewayEndpoint"] = undefined /*out*/;
            resourceInputs["gatewayId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowedFeatures"] = undefined /*out*/;
            resourceInputs["gatewayEndpoint"] = undefined /*out*/;
            resourceInputs["gatewayId"] = undefined /*out*/;
            resourceInputs["gatewayType"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute/v20240331preview:Gateway" }, { type: "azure-native:hybridcompute/v20240520preview:Gateway" }, { type: "azure-native:hybridcompute/v20240731preview:Gateway" }, { type: "azure-native:hybridcompute/v20240910preview:Gateway" }, { type: "azure-native:hybridcompute/v20241110preview:Gateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gateway resource.
 */
export interface GatewayArgs {
    /**
     * Specifies the list of features that are enabled for this Gateway.
     */
    allowedFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Gateway.
     */
    gatewayName?: pulumi.Input<string>;
    /**
     * The type of the Gateway resource.
     */
    gatewayType?: pulumi.Input<string | types.enums.GatewayType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}