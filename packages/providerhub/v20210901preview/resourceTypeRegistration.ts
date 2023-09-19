import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class ResourceTypeRegistration extends pulumi.CustomResource {
    /**
     * Get an existing ResourceTypeRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ResourceTypeRegistration {
        return new ResourceTypeRegistration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub/v20210901preview:ResourceTypeRegistration';

    /**
     * Returns true if the given object is an instance of ResourceTypeRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceTypeRegistration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceTypeRegistration.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.ResourceTypeRegistrationResponseProperties>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ResourceTypeRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceTypeRegistrationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.providerNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerNamespace"] = args ? args.providerNamespace : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub:ResourceTypeRegistration" }, { type: "azure-native:providerhub/v20201120:ResourceTypeRegistration" }, { type: "azure-native:providerhub/v20210501preview:ResourceTypeRegistration" }, { type: "azure-native:providerhub/v20210601preview:ResourceTypeRegistration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ResourceTypeRegistration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ResourceTypeRegistration resource.
 */
export interface ResourceTypeRegistrationArgs {
    properties?: pulumi.Input<types.inputs.ResourceTypeRegistrationPropertiesArgs>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The resource type.
     */
    resourceType?: pulumi.Input<string>;
}
