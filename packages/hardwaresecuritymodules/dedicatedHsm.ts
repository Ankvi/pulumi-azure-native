import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information with extended details.
 *
 * Uses Azure REST API version 2024-06-30-preview. In version 2.x of the Azure Native provider, it used API version 2021-11-30.
 *
 * Other available API versions: 2021-11-30. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hardwaresecuritymodules [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class DedicatedHsm extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHsm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DedicatedHsm {
        return new DedicatedHsm(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hardwaresecuritymodules:DedicatedHsm';

    /**
     * Returns true if the given object is an instance of DedicatedHsm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DedicatedHsm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DedicatedHsm.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Specifies the management network interfaces of the dedicated hsm.
     */
    public readonly managementNetworkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specifies the network interfaces of the dedicated hsm.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * This field will be used when RP does not support Availability zones.
     */
    public readonly stampId!: pulumi.Output<string | undefined>;
    /**
     * Resource Status Message.
     */
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
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
     * The Dedicated Hsm zones.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a DedicatedHsm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHsmArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementNetworkProfile"] = args ? args.managementNetworkProfile : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["stampId"] = args ? args.stampId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementNetworkProfile"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["stampId"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hardwaresecuritymodules/v20181031preview:DedicatedHsm" }, { type: "azure-native:hardwaresecuritymodules/v20211130:DedicatedHsm" }, { type: "azure-native:hardwaresecuritymodules/v20240630preview:DedicatedHsm" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DedicatedHsm.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DedicatedHsm resource.
 */
export interface DedicatedHsmArgs {
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the management network interfaces of the dedicated hsm.
     */
    managementNetworkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * Name of the dedicated Hsm
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the network interfaces of the dedicated hsm.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU details
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * This field will be used when RP does not support Availability zones.
     */
    stampId?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Dedicated Hsm zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}