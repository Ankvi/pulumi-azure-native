import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the hybridIdentityMetadata.
 *
 * Uses Azure REST API version 2022-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2022-09-01-preview.
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
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice:HybridIdentityMetadatum';

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
     * The identity of the provisioned cluster.
     */
    public readonly identity!: pulumi.Output<types.outputs.ProvisionedClusterIdentityResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * provisioning state of the hybridIdentityMetadata resource.
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
     * The system data.
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["hybridIdentityMetadataResourceName"] = args ? args.hybridIdentityMetadataResourceName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["resourceUid"] = args ? args.resourceUid : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20220501preview:HybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20220901preview:HybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20231115preview:HybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20240101:HybridIdentityMetadatum" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(HybridIdentityMetadatum.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a HybridIdentityMetadatum resource.
 */
export interface HybridIdentityMetadatumArgs {
    /**
     * Parameter for the name of the hybrid identity metadata resource.
     */
    hybridIdentityMetadataResourceName?: pulumi.Input<string>;
    /**
     * The identity of the provisioned cluster.
     */
    identity?: pulumi.Input<types.inputs.ProvisionedClusterIdentityArgs>;
    /**
     * Onboarding public key for provisioning the Managed identity for the HybridAKS cluster.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameter for the name of the provisioned cluster
     */
    resourceName: pulumi.Input<string>;
    /**
     * Unique id of the parent provisioned cluster resource.
     */
    resourceUid?: pulumi.Input<string>;
}