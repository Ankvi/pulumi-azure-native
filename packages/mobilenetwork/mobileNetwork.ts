import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Mobile network resource.
 *
 * Uses Azure REST API version 2023-06-01. In version 1.x of the Azure Native provider, it used API version 2022-04-01-preview.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-09-01, 2024-02-01, 2024-04-01.
 */
export class MobileNetwork extends pulumi.CustomResource {
    /**
     * Get an existing MobileNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MobileNetwork {
        return new MobileNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork:MobileNetwork';

    /**
     * Returns true if the given object is an instance of MobileNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MobileNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MobileNetwork.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the mobile network resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
     */
    public readonly publicLandMobileNetworkIdentifier!: pulumi.Output<types.outputs.PlmnIdResponse>;
    /**
     * The mobile network resource identifier
     */
    public /*out*/ readonly serviceKey!: pulumi.Output<string>;
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
     * Create a MobileNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MobileNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.publicLandMobileNetworkIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicLandMobileNetworkIdentifier'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mobileNetworkName"] = args ? args.mobileNetworkName : undefined;
            resourceInputs["publicLandMobileNetworkIdentifier"] = args ? args.publicLandMobileNetworkIdentifier : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicLandMobileNetworkIdentifier"] = undefined /*out*/;
            resourceInputs["serviceKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork/v20220301preview:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20220401preview:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20221101:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20230601:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20230901:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20240201:MobileNetwork" }, { type: "azure-native:mobilenetwork/v20240401:MobileNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MobileNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MobileNetwork resource.
 */
export interface MobileNetworkArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the mobile network.
     */
    mobileNetworkName?: pulumi.Input<string>;
    /**
     * The unique public land mobile network identifier for the network. This is made up of the mobile country code and mobile network code, as defined in https://www.itu.int/rec/T-REC-E.212. The values 001-01 and 001-001 can be used for testing and the values 999-99 and 999-999 can be used on internal private networks.
     */
    publicLandMobileNetworkIdentifier: pulumi.Input<types.inputs.PlmnIdArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}