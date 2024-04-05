import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the hybridIdentityMetadata.
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
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice/v20231115preview:HybridIdentityMetadatum';

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
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
     */
    public readonly publicKey!: pulumi.Output<string | undefined>;
    /**
     * Unique id of the parent provisioned cluster resource.
     */
    public readonly resourceUid!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.connectedClusterResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedClusterResourceUri'");
            }
            resourceInputs["connectedClusterResourceUri"] = args ? args.connectedClusterResourceUri : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["resourceUid"] = args ? args.resourceUid : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20240101:HybridIdentityMetadatum" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridIdentityMetadatum.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridIdentityMetadatum resource.
 */
export interface HybridIdentityMetadatumArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
    /**
     * Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * Unique id of the parent provisioned cluster resource.
     */
    resourceUid?: pulumi.Input<string>;
}