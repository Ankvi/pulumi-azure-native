import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The lock information.
 *
 * Uses Azure REST API version 2020-05-01. In version 1.x of the Azure Native provider, it used API version 2017-04-01.
 */
export class ManagementLockAtSubscriptionLevel extends pulumi.CustomResource {
    /**
     * Get an existing ManagementLockAtSubscriptionLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementLockAtSubscriptionLevel {
        return new ManagementLockAtSubscriptionLevel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:ManagementLockAtSubscriptionLevel';

    /**
     * Returns true if the given object is an instance of ManagementLockAtSubscriptionLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementLockAtSubscriptionLevel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementLockAtSubscriptionLevel.__pulumiType;
    }

    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    public readonly level!: pulumi.Output<string>;
    /**
     * The name of the lock.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * The owners of the lock.
     */
    public readonly owners!: pulumi.Output<types.outputs.ManagementLockOwnerResponse[] | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource type of the lock - Microsoft.Authorization/locks.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementLockAtSubscriptionLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementLockAtSubscriptionLevelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.level === undefined) && !opts.urn) {
                throw new Error("Missing required property 'level'");
            }
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["lockName"] = args ? args.lockName : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["level"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["owners"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20150101:ManagementLockAtSubscriptionLevel" }, { type: "azure-native:authorization/v20160901:ManagementLockAtSubscriptionLevel" }, { type: "azure-native:authorization/v20170401:ManagementLockAtSubscriptionLevel" }, { type: "azure-native:authorization/v20200501:ManagementLockAtSubscriptionLevel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementLockAtSubscriptionLevel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementLockAtSubscriptionLevel resource.
 */
export interface ManagementLockAtSubscriptionLevelArgs {
    /**
     * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
     */
    level: pulumi.Input<string | types.enums.LockLevel>;
    /**
     * The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
     */
    lockName?: pulumi.Input<string>;
    /**
     * Notes about the lock. Maximum of 512 characters.
     */
    notes?: pulumi.Input<string>;
    /**
     * The owners of the lock.
     */
    owners?: pulumi.Input<pulumi.Input<types.inputs.ManagementLockOwnerArgs>[]>;
}