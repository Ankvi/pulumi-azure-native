import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response for iSCSI Target requests.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class IscsiTarget extends pulumi.CustomResource {
    /**
     * Get an existing IscsiTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IscsiTarget {
        return new IscsiTarget(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagepool:IscsiTarget';

    /**
     * Returns true if the given object is an instance of IscsiTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IscsiTarget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IscsiTarget.__pulumiType;
    }

    /**
     * Mode for Target connectivity.
     */
    public readonly aclMode!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * List of private IPv4 addresses to connect to the iSCSI Target.
     */
    public /*out*/ readonly endpoints!: pulumi.Output<string[] | undefined>;
    /**
     * List of LUNs to be exposed through iSCSI Target.
     */
    public readonly luns!: pulumi.Output<types.outputs.IscsiLunResponse[] | undefined>;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    public readonly managedBy!: pulumi.Output<string>;
    /**
     * List of Azure resource ids that manage this resource.
     */
    public readonly managedByExtended!: pulumi.Output<string[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The port used by iSCSI Target portal group.
     */
    public /*out*/ readonly port!: pulumi.Output<number | undefined>;
    /**
     * State of the operation on the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of identifiers for active sessions on the iSCSI target
     */
    public /*out*/ readonly sessions!: pulumi.Output<string[]>;
    /**
     * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
     */
    public readonly staticAcls!: pulumi.Output<types.outputs.AclResponse[] | undefined>;
    /**
     * Operational status of the iSCSI Target.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Resource metadata required by ARM RPC
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemMetadataResponse>;
    /**
     * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
     */
    public readonly targetIqn!: pulumi.Output<string>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IscsiTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IscsiTargetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.aclMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aclMode'");
            }
            if ((!args || args.diskPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'diskPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aclMode"] = args ? args.aclMode : undefined;
            resourceInputs["diskPoolName"] = args ? args.diskPoolName : undefined;
            resourceInputs["iscsiTargetName"] = args ? args.iscsiTargetName : undefined;
            resourceInputs["luns"] = args ? args.luns : undefined;
            resourceInputs["managedBy"] = args ? args.managedBy : undefined;
            resourceInputs["managedByExtended"] = args ? args.managedByExtended : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["staticAcls"] = args ? args.staticAcls : undefined;
            resourceInputs["targetIqn"] = args ? args.targetIqn : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sessions"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["aclMode"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["luns"] = undefined /*out*/;
            resourceInputs["managedBy"] = undefined /*out*/;
            resourceInputs["managedByExtended"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sessions"] = undefined /*out*/;
            resourceInputs["staticAcls"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetIqn"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagepool/v20200315preview:IscsiTarget" }, { type: "azure-native:storagepool/v20210401preview:IscsiTarget" }, { type: "azure-native:storagepool/v20210801:IscsiTarget" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IscsiTarget.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IscsiTarget resource.
 */
export interface IscsiTargetArgs {
    /**
     * Mode for Target connectivity.
     */
    aclMode: pulumi.Input<string | types.enums.IscsiTargetAclMode>;
    /**
     * The name of the Disk Pool.
     */
    diskPoolName: pulumi.Input<string>;
    /**
     * The name of the iSCSI Target.
     */
    iscsiTargetName?: pulumi.Input<string>;
    /**
     * List of LUNs to be exposed through iSCSI Target.
     */
    luns?: pulumi.Input<pulumi.Input<types.inputs.IscsiLunArgs>[]>;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    managedBy?: pulumi.Input<string>;
    /**
     * List of Azure resource ids that manage this resource.
     */
    managedByExtended?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Access Control List (ACL) for an iSCSI Target; defines LUN masking policy
     */
    staticAcls?: pulumi.Input<pulumi.Input<types.inputs.AclArgs>[]>;
    /**
     * iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
     */
    targetIqn?: pulumi.Input<string>;
}