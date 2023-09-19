import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export class PrivateLinkAssociation extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkAssociation {
        return new PrivateLinkAssociation(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization/v20200501:PrivateLinkAssociation';

    /**
     * Returns true if the given object is an instance of PrivateLinkAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkAssociation.__pulumiType;
    }

    /**
     * The pla name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The private link association properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.PrivateLinkAssociationPropertiesExpandedResponse>;
    /**
     * The operation type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateLinkAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkAssociationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["plaId"] = args ? args.plaId : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization:PrivateLinkAssociation" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkAssociation resource.
 */
export interface PrivateLinkAssociationArgs {
    /**
     * The management group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * The ID of the PLA
     */
    plaId?: pulumi.Input<string>;
    /**
     * The properties of the PrivateLinkAssociation.
     */
    properties?: pulumi.Input<types.inputs.PrivateLinkAssociationPropertiesArgs>;
}
