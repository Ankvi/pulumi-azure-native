import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The management group details.
 * Azure REST API version: 2021-04-01. Prior API version in Azure Native 1.x: 2020-05-01.
 *
 * Other available API versions: 2017-11-01-preview, 2020-02-01, 2023-04-01.
 */
export class ManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing ManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementGroup {
        return new ManagementGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:management:ManagementGroup';

    /**
     * Returns true if the given object is an instance of ManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementGroup.__pulumiType;
    }

    /**
     * The list of children.
     */
    public /*out*/ readonly children!: pulumi.Output<types.outputs.ManagementGroupChildInfoResponse[] | undefined>;
    /**
     * The details of a management group.
     */
    public readonly details!: pulumi.Output<types.outputs.ManagementGroupDetailsResponse | undefined>;
    /**
     * The friendly name of the management group.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * The name of the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.  For example, Microsoft.Management/managementGroups
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["details"] = args ? args.details : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["children"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["children"] = undefined /*out*/;
            resourceInputs["details"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:management/v20171101preview:ManagementGroup" }, { type: "azure-native:management/v20180101preview:ManagementGroup" }, { type: "azure-native:management/v20180301preview:ManagementGroup" }, { type: "azure-native:management/v20191101:ManagementGroup" }, { type: "azure-native:management/v20200201:ManagementGroup" }, { type: "azure-native:management/v20200501:ManagementGroup" }, { type: "azure-native:management/v20201001:ManagementGroup" }, { type: "azure-native:management/v20210401:ManagementGroup" }, { type: "azure-native:management/v20230401:ManagementGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementGroup resource.
 */
export interface ManagementGroupArgs {
    /**
     * The details of a management group used during creation.
     */
    details?: pulumi.Input<types.inputs.CreateManagementGroupDetailsArgs>;
    /**
     * The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Management Group ID.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The name of the management group. For example, 00000000-0000-0000-0000-000000000000
     */
    name?: pulumi.Input<string>;
}
