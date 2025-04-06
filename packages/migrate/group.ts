import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A group created in a Migration project.
 *
 * Uses Azure REST API version 2019-10-01. In version 2.x of the Azure Native provider, it used API version 2019-10-01.
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
    public static readonly __pulumiType = 'azure-native:migrate:Group';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * For optimistic concurrency control.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Name of the group.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the group.
     */
    public readonly properties!: pulumi.Output<types.outputs.GroupPropertiesResponse>;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups].
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["groupName"] = args ? args.groupName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20180202:Group" }, { type: "azure-native:migrate/v20191001:Group" }, { type: "azure-native:migrate/v20230315:Group" }, { type: "azure-native:migrate/v20230315:GroupsOperation" }, { type: "azure-native:migrate/v20230401preview:Group" }, { type: "azure-native:migrate/v20230401preview:GroupsOperation" }, { type: "azure-native:migrate/v20230501preview:Group" }, { type: "azure-native:migrate/v20230501preview:GroupsOperation" }, { type: "azure-native:migrate/v20230909preview:Group" }, { type: "azure-native:migrate/v20230909preview:GroupsOperation" }, { type: "azure-native:migrate/v20240101preview:Group" }, { type: "azure-native:migrate/v20240101preview:GroupsOperation" }, { type: "azure-native:migrate:GroupsOperation" }] };
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
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Properties of the group.
     */
    properties: pulumi.Input<types.inputs.GroupPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}