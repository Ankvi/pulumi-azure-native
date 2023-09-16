import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export class OperationByProviderRegistration extends pulumi.CustomResource {
    /**
     * Get an existing OperationByProviderRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OperationByProviderRegistration {
        return new OperationByProviderRegistration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub/v20210901preview:OperationByProviderRegistration';

    /**
     * Returns true if the given object is an instance of OperationByProviderRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OperationByProviderRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OperationByProviderRegistration.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OperationByProviderRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OperationByProviderRegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.providerNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            resourceInputs["providerNamespace"] = args ? args.providerNamespace : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub:OperationByProviderRegistration" }, { type: "azure-native:providerhub/v20201120:OperationByProviderRegistration" }, { type: "azure-native:providerhub/v20210501preview:OperationByProviderRegistration" }, { type: "azure-native:providerhub/v20210601preview:OperationByProviderRegistration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OperationByProviderRegistration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OperationByProviderRegistration resource.
 */
export interface OperationByProviderRegistrationArgs {
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
}
