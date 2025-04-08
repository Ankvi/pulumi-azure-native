import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the HybridIdentityMetadata.
 *
 * Uses Azure REST API version 2023-03-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-07-15-preview.
 *
 * Other available API versions: 2022-07-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native connectedvmwarevsphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class HybridIdentityMetadatum extends pulumi.CustomResource {
    /**
     * Get an existing HybridIdentityMetadatum resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): HybridIdentityMetadatum {
        return new HybridIdentityMetadatum(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:connectedvmwarevsphere:HybridIdentityMetadatum';

    /**
     * Returns true if the given object is an instance of HybridIdentityMetadatum.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HybridIdentityMetadatum {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HybridIdentityMetadatum.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The identity of the resource.
     */
    public /*out*/ readonly identity!: pulumi.Output<types.outputs.IdentityResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the Public Key.
     */
    public readonly publicKey!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets or sets the Vm Id.
     */
    public readonly vmId!: pulumi.Output<string | undefined>;

    /**
     * Create a HybridIdentityMetadatum resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridIdentityMetadatumArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            resourceInputs["metadataName"] = args ? args.metadataName : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["vmId"] = args ? args.vmId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vmId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:connectedvmwarevsphere/v20201001preview:HybridIdentityMetadatum" }, { type: "azure-native:connectedvmwarevsphere/v20220110preview:HybridIdentityMetadatum" }, { type: "azure-native:connectedvmwarevsphere/v20220715preview:HybridIdentityMetadatum" }, { type: "azure-native:connectedvmwarevsphere/v20230301preview:HybridIdentityMetadatum" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridIdentityMetadatum.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridIdentityMetadatum resource.
 */
export interface HybridIdentityMetadatumArgs {
    /**
     * Name of the hybridIdentityMetadata.
     */
    metadataName?: pulumi.Input<string>;
    /**
     * Gets or sets the Public Key.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the vm.
     */
    virtualMachineName: pulumi.Input<string>;
    /**
     * Gets or sets the Vm Id.
     */
    vmId?: pulumi.Input<string>;
}