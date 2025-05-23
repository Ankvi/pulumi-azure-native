import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The lock information.
 *
 * Uses Azure REST API version 2020-05-01. In version 2.x of the Azure Native provider, it used API version 2020-05-01.
 */
export class ManagementLockAtResourceLevel extends pulumi.CustomResource {
    /**
     * Get an existing ManagementLockAtResourceLevel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementLockAtResourceLevel {
        return new ManagementLockAtResourceLevel(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:authorization:ManagementLockAtResourceLevel';

    /**
     * Returns true if the given object is an instance of ManagementLockAtResourceLevel.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementLockAtResourceLevel {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementLockAtResourceLevel.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Create a ManagementLockAtResourceLevel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementLockAtResourceLevelArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiVersion'");
            }
            if ((!args || args.level === undefined) && !opts.urn) {
                throw new Error("Missing required property 'level'");
            }
            if ((!args || args.parentResourcePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentResourcePath'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.resourceProviderNamespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceProviderNamespace'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["apiVersion"] = args ? args.apiVersion : undefined;
            resourceInputs["level"] = args ? args.level : undefined;
            resourceInputs["lockName"] = args ? args.lockName : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["owners"] = args ? args.owners : undefined;
            resourceInputs["parentResourcePath"] = args ? args.parentResourcePath : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["resourceProviderNamespace"] = args ? args.resourceProviderNamespace : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["level"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["owners"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:authorization/v20160901:ManagementLockAtResourceLevel" }, { type: "azure-native:authorization/v20170401:ManagementLockAtResourceLevel" }, { type: "azure-native:authorization/v20200501:ManagementLockAtResourceLevel" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementLockAtResourceLevel.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementLockAtResourceLevel resource.
 */
export interface ManagementLockAtResourceLevelArgs {
    /**
     * The API version to use for this operation.
     */
    apiVersion: pulumi.Input<string>;
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
    /**
     * The parent resource identity.
     */
    parentResourcePath: pulumi.Input<string>;
    /**
     * The name of the resource group containing the resource to lock. 
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource to lock.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The resource provider namespace of the resource to lock.
     */
    resourceProviderNamespace: pulumi.Input<string>;
    /**
     * The resource type of the resource to lock.
     */
    resourceType: pulumi.Input<string>;
}