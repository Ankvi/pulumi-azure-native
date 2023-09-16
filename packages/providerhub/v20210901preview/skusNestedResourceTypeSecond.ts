import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export class SkusNestedResourceTypeSecond extends pulumi.CustomResource {
    /**
     * Get an existing SkusNestedResourceTypeSecond resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SkusNestedResourceTypeSecond {
        return new SkusNestedResourceTypeSecond(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub/v20210901preview:SkusNestedResourceTypeSecond';

    /**
     * Returns true if the given object is an instance of SkusNestedResourceTypeSecond.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SkusNestedResourceTypeSecond {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SkusNestedResourceTypeSecond.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.providerhub.v20210901preview.SkuResourceResponseProperties>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.providerhub.v20210901preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SkusNestedResourceTypeSecond resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SkusNestedResourceTypeSecondArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.nestedResourceTypeFirst === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nestedResourceTypeFirst'");
            }
            if ((!args || args.nestedResourceTypeSecond === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nestedResourceTypeSecond'");
            }
            if ((!args || args.providerNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["nestedResourceTypeFirst"] = args ? args.nestedResourceTypeFirst : undefined;
            resourceInputs["nestedResourceTypeSecond"] = args ? args.nestedResourceTypeSecond : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerNamespace"] = args ? args.providerNamespace : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub:SkusNestedResourceTypeSecond" }, { type: "azure-native:providerhub/v20201120:SkusNestedResourceTypeSecond" }, { type: "azure-native:providerhub/v20210501preview:SkusNestedResourceTypeSecond" }, { type: "azure-native:providerhub/v20210601preview:SkusNestedResourceTypeSecond" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SkusNestedResourceTypeSecond.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SkusNestedResourceTypeSecond resource.
 */
export interface SkusNestedResourceTypeSecondArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: pulumi.Input<string>;
    /**
     * The second child resource type.
     */
    nestedResourceTypeSecond: pulumi.Input<string>;
    properties?: pulumi.Input<types.inputs.providerhub.v20210901preview.SkuResourcePropertiesArgs>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The resource type.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The SKU.
     */
    sku?: pulumi.Input<string>;
}
