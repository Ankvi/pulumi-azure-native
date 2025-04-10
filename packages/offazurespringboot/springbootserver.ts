import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The springbootservers envelope resource definition.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 */
export class Springbootserver extends pulumi.CustomResource {
    /**
     * Get an existing Springbootserver resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Springbootserver {
        return new Springbootserver(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:offazurespringboot:Springbootserver';

    /**
     * Returns true if the given object is an instance of Springbootserver.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Springbootserver {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Springbootserver.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The springbootservers resource definition.
     */
    public readonly properties!: pulumi.Output<types.outputs.SpringbootserversPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Springbootserver resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringbootserverArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.siteName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteName'");
            }
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["siteName"] = args ? args.siteName : undefined;
            resourceInputs["springbootserversName"] = args ? args.springbootserversName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:offazurespringboot/v20230101preview:Springbootserver" }, { type: "azure-native:offazurespringboot/v20230101preview:springbootserver" }, { type: "azure-native:offazurespringboot/v20240401preview:Springbootserver" }, { type: "azure-native:offazurespringboot/v20240401preview:springbootserver" }, { type: "azure-native:offazurespringboot:springbootserver" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Springbootserver.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Springbootserver resource.
 */
export interface SpringbootserverArgs {
    /**
     * The springbootservers resource definition.
     */
    properties?: pulumi.Input<types.inputs.SpringbootserversPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The springbootsites name.
     */
    siteName: pulumi.Input<string>;
    /**
     * The springbootservers name.
     */
    springbootserversName?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}