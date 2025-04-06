import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A user-defined logical grouping of machines.
 *
 * Uses Azure REST API version 2015-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2015-11-01-preview.
 */
export class MachineGroup extends pulumi.CustomResource {
    /**
     * Get an existing MachineGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineGroup {
        return new MachineGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:operationalinsights:MachineGroup';

    /**
     * Returns true if the given object is an instance of MachineGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineGroup.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Count of machines in this group. The value of count may be bigger than the number of machines in case of the group has been truncated due to exceeding the max number of machines a group can handle.
     */
    public readonly count!: pulumi.Output<number | undefined>;
    /**
     * User defined name for the group
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource ETAG.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Type of the machine group
     */
    public readonly groupType!: pulumi.Output<string | undefined>;
    /**
     * Additional resource type qualifier.
     * Expected value is 'machineGroup'.
     */
    public readonly kind!: pulumi.Output<"machineGroup">;
    /**
     * References of the machines in this group. The hints within each reference do not represent the current value of the corresponding fields. They are a snapshot created during the last time the machine group was updated.
     */
    public readonly machines!: pulumi.Output<types.outputs.MachineReferenceWithHintsResponse[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MachineGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["count"] = args ? args.count : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["groupType"] = args ? args.groupType : undefined;
            resourceInputs["kind"] = "machineGroup";
            resourceInputs["machineGroupName"] = args ? args.machineGroupName : undefined;
            resourceInputs["machines"] = args ? args.machines : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["count"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["groupType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["machines"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:operationalinsights/v20151101preview:MachineGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineGroup resource.
 */
export interface MachineGroupArgs {
    /**
     * Count of machines in this group. The value of count may be bigger than the number of machines in case of the group has been truncated due to exceeding the max number of machines a group can handle.
     */
    count?: pulumi.Input<number>;
    /**
     * User defined name for the group
     */
    displayName: pulumi.Input<string>;
    /**
     * Type of the machine group
     */
    groupType?: pulumi.Input<string | types.enums.MachineGroupType>;
    /**
     * Additional resource type qualifier.
     * Expected value is 'machineGroup'.
     */
    kind: pulumi.Input<"machineGroup">;
    /**
     * Machine Group resource name.
     */
    machineGroupName?: pulumi.Input<string>;
    /**
     * References of the machines in this group. The hints within each reference do not represent the current value of the corresponding fields. They are a snapshot created during the last time the machine group was updated.
     */
    machines?: pulumi.Input<pulumi.Input<types.inputs.MachineReferenceWithHintsArgs>[]>;
    /**
     * Resource group name within the specified subscriptionId.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * OMS workspace containing the resources of interest.
     */
    workspaceName: pulumi.Input<string>;
}