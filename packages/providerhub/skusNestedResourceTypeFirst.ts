import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2021-09-01-preview. Prior API version in Azure Native 1.x: 2020-11-20
 */
export class SkusNestedResourceTypeFirst extends pulumi.CustomResource {
    /**
     * Get an existing SkusNestedResourceTypeFirst resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SkusNestedResourceTypeFirst {
        return new SkusNestedResourceTypeFirst(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub:SkusNestedResourceTypeFirst';

    /**
     * Returns true if the given object is an instance of SkusNestedResourceTypeFirst.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SkusNestedResourceTypeFirst {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SkusNestedResourceTypeFirst.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.providerhub.SkuResourceResponseProperties>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.providerhub.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SkusNestedResourceTypeFirst resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SkusNestedResourceTypeFirstArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.nestedResourceTypeFirst === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nestedResourceTypeFirst'");
            }
            if ((!args || args.providerNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["nestedResourceTypeFirst"] = args ? args.nestedResourceTypeFirst : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub/v20201120:SkusNestedResourceTypeFirst" }, { type: "azure-native:providerhub/v20210501preview:SkusNestedResourceTypeFirst" }, { type: "azure-native:providerhub/v20210601preview:SkusNestedResourceTypeFirst" }, { type: "azure-native:providerhub/v20210901preview:SkusNestedResourceTypeFirst" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SkusNestedResourceTypeFirst.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SkusNestedResourceTypeFirst resource.
 */
export interface SkusNestedResourceTypeFirstArgs {
    /**
     * The first child resource type.
     */
    nestedResourceTypeFirst: pulumi.Input<string>;
    properties?: pulumi.Input<types.inputs.providerhub.SkuResourcePropertiesArgs>;
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
