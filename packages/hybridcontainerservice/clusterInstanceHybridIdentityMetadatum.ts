import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the hybridIdentityMetadata.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hybridcontainerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ClusterInstanceHybridIdentityMetadatum extends pulumi.CustomResource {
    /**
     * Get an existing ClusterInstanceHybridIdentityMetadatum resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ClusterInstanceHybridIdentityMetadatum {
        return new ClusterInstanceHybridIdentityMetadatum(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridcontainerservice:ClusterInstanceHybridIdentityMetadatum';

    /**
     * Returns true if the given object is an instance of ClusterInstanceHybridIdentityMetadatum.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterInstanceHybridIdentityMetadatum {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterInstanceHybridIdentityMetadatum.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Onboarding public key for provisioning the Managed identity for the connected cluster.
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
     * Create a ClusterInstanceHybridIdentityMetadatum resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterInstanceHybridIdentityMetadatumArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedClusterResourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedClusterResourceUri'");
            }
            resourceInputs["connectedClusterResourceUri"] = args ? args.connectedClusterResourceUri : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["resourceUid"] = args ? args.resourceUid : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicKey"] = undefined /*out*/;
            resourceInputs["resourceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcontainerservice/v20231115preview:ClusterInstanceHybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20231115preview:HybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20240101:ClusterInstanceHybridIdentityMetadatum" }, { type: "azure-native:hybridcontainerservice/v20240101:HybridIdentityMetadatum" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ClusterInstanceHybridIdentityMetadatum.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ClusterInstanceHybridIdentityMetadatum resource.
 */
export interface ClusterInstanceHybridIdentityMetadatumArgs {
    /**
     * The fully qualified Azure Resource Manager identifier of the connected cluster resource.
     */
    connectedClusterResourceUri: pulumi.Input<string>;
    /**
     * Onboarding public key for provisioning the Managed identity for the connected cluster.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * Unique id of the parent provisioned cluster resource.
     */
    resourceUid?: pulumi.Input<string>;
}