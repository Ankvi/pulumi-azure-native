import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX VM Group
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-07-17-preview.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class WorkloadNetworkVMGroup extends pulumi.CustomResource {
    /**
     * Get an existing WorkloadNetworkVMGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WorkloadNetworkVMGroup {
        return new WorkloadNetworkVMGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:WorkloadNetworkVMGroup';

    /**
     * Returns true if the given object is an instance of WorkloadNetworkVMGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WorkloadNetworkVMGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WorkloadNetworkVMGroup.__pulumiType;
    }

    /**
     * Display name of the VM group.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * Virtual machine members of this group.
     */
    public readonly members!: pulumi.Output<string[] | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * NSX revision number.
     */
    public readonly revision!: pulumi.Output<number | undefined>;
    /**
     * VM Group status.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WorkloadNetworkVMGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkloadNetworkVMGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["revision"] = args ? args.revision : undefined;
            resourceInputs["vmGroupId"] = args ? args.vmGroupId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["members"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200717preview:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20210101preview:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20210601:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20211201:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20220501:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20230301:WorkloadNetworkVMGroup" }, { type: "azure-native:avs/v20230901:WorkloadNetworkVMGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WorkloadNetworkVMGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WorkloadNetworkVMGroup resource.
 */
export interface WorkloadNetworkVMGroupArgs {
    /**
     * Display name of the VM group.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Virtual machine members of this group.
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * NSX revision number.
     */
    revision?: pulumi.Input<number>;
    /**
     * NSX VM Group identifier. Generally the same as the VM Group's display name
     */
    vmGroupId?: pulumi.Input<string>;
}