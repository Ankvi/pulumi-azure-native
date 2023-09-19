import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class ProviderRegistration extends pulumi.CustomResource {
    /**
     * Get an existing ProviderRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProviderRegistration {
        return new ProviderRegistration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub/v20210901preview:ProviderRegistration';

    /**
     * Returns true if the given object is an instance of ProviderRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProviderRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProviderRegistration.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.ProviderRegistrationResponseProperties>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProviderRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderRegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerNamespace"] = args ? args.providerNamespace : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub:ProviderRegistration" }, { type: "azure-native:providerhub/v20201120:ProviderRegistration" }, { type: "azure-native:providerhub/v20210501preview:ProviderRegistration" }, { type: "azure-native:providerhub/v20210601preview:ProviderRegistration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProviderRegistration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProviderRegistration resource.
 */
export interface ProviderRegistrationArgs {
    properties?: pulumi.Input<types.inputs.ProviderRegistrationPropertiesArgs>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace?: pulumi.Input<string>;
}
