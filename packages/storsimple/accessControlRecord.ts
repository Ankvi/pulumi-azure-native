import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The access control record.
 *
 * Uses Azure REST API version 2017-06-01. In version 1.x of the Azure Native provider, it used API version 2017-06-01.
 */
export class AccessControlRecord extends pulumi.CustomResource {
    /**
     * Get an existing AccessControlRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccessControlRecord {
        return new AccessControlRecord(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:AccessControlRecord';

    /**
     * Returns true if the given object is an instance of AccessControlRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessControlRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessControlRecord.__pulumiType;
    }

    /**
     * The iSCSI initiator name (IQN).
     */
    public readonly initiatorName!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The number of volumes using the access control record.
     */
    public /*out*/ readonly volumeCount!: pulumi.Output<number>;

    /**
     * Create a AccessControlRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessControlRecordArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.initiatorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'initiatorName'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accessControlRecordName"] = args ? args.accessControlRecordName : undefined;
            resourceInputs["initiatorName"] = args ? args.initiatorName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeCount"] = undefined /*out*/;
        } else {
            resourceInputs["initiatorName"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeCount"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20161001:AccessControlRecord" }, { type: "azure-native:storsimple/v20170601:AccessControlRecord" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccessControlRecord.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccessControlRecord resource.
 */
export interface AccessControlRecordArgs {
    /**
     * The name of the access control record.
     */
    accessControlRecordName?: pulumi.Input<string>;
    /**
     * The iSCSI initiator name (IQN).
     */
    initiatorName: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}