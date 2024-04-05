import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a shared private link resource managed by the Azure AI Search service.
 */
export class SharedPrivateLinkResource extends pulumi.CustomResource {
    /**
     * Get an existing SharedPrivateLinkResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SharedPrivateLinkResource {
        return new SharedPrivateLinkResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:search/v20240301preview:SharedPrivateLinkResource';

    /**
     * Returns true if the given object is an instance of SharedPrivateLinkResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedPrivateLinkResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedPrivateLinkResource.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes the properties of a shared private link resource managed by the Azure AI Search service.
     */
    public readonly properties!: pulumi.Output<types.outputs.SharedPrivateLinkResourcePropertiesResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SharedPrivateLinkResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedPrivateLinkResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.searchServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'searchServiceName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["searchServiceName"] = args ? args.searchServiceName : undefined;
            resourceInputs["sharedPrivateLinkResourceName"] = args ? args.sharedPrivateLinkResourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:search:SharedPrivateLinkResource" }, { type: "azure-native:search/v20200801:SharedPrivateLinkResource" }, { type: "azure-native:search/v20200801preview:SharedPrivateLinkResource" }, { type: "azure-native:search/v20210401preview:SharedPrivateLinkResource" }, { type: "azure-native:search/v20220901:SharedPrivateLinkResource" }, { type: "azure-native:search/v20231101:SharedPrivateLinkResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SharedPrivateLinkResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SharedPrivateLinkResource resource.
 */
export interface SharedPrivateLinkResourceArgs {
    /**
     * Describes the properties of a shared private link resource managed by the Azure AI Search service.
     */
    properties?: pulumi.Input<types.inputs.SharedPrivateLinkResourcePropertiesArgs>;
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure AI Search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource managed by the Azure AI Search service within the specified resource group.
     */
    sharedPrivateLinkResourceName?: pulumi.Input<string>;
}