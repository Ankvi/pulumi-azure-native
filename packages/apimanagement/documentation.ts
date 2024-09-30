import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Markdown documentation details.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01.
 */
export class Documentation extends pulumi.CustomResource {
    /**
     * Get an existing Documentation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Documentation {
        return new Documentation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:Documentation';

    /**
     * Returns true if the given object is an instance of Documentation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Documentation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Documentation.__pulumiType;
    }

    /**
     * Markdown documentation content.
     */
    public readonly content!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * documentation title.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Documentation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DocumentationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["documentationId"] = args ? args.documentationId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["content"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20220801:Documentation" }, { type: "azure-native:apimanagement/v20220901preview:Documentation" }, { type: "azure-native:apimanagement/v20230301preview:Documentation" }, { type: "azure-native:apimanagement/v20230501preview:Documentation" }, { type: "azure-native:apimanagement/v20230901preview:Documentation" }, { type: "azure-native:apimanagement/v20240501:Documentation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Documentation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Documentation resource.
 */
export interface DocumentationArgs {
    /**
     * Markdown documentation content.
     */
    content?: pulumi.Input<string>;
    /**
     * Documentation identifier. Must be unique in the current API Management service instance.
     */
    documentationId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * documentation title.
     */
    title?: pulumi.Input<string>;
}