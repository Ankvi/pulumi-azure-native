import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A group created in a Migration project.
 */
export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate/v20180202:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * List of References to Assessments created on this group.
     */
    public /*out*/ readonly assessments!: pulumi.Output<string[]>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    /**
     * For optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * List of machine names that are part of this group.
     */
    public readonly machines!: pulumi.Output<string[]>;
    /**
     * Name of the group.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups].
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    public /*out*/ readonly updatedTimestamp!: pulumi.Output<string>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.machines === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machines'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["machines"] = args ? args.machines : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["assessments"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        } else {
            resourceInputs["assessments"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["machines"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedTimestamp"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20171111preview:Group" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Group.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * For optimistic concurrency control.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    groupName?: pulumi.Input<string>;
    /**
     * List of machine names that are part of this group.
     */
    machines: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}