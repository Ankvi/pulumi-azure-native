import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents Storage Task.
 * Azure REST API version: 2023-01-01.
 */
export class StorageTask extends pulumi.CustomResource {
    /**
     * Get an existing StorageTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageTask {
        return new StorageTask(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storageactions:StorageTask';

    /**
     * Returns true if the given object is an instance of StorageTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageTask {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageTask.__pulumiType;
    }

    /**
     * The storage task action that is executed
     */
    public readonly action!: pulumi.Output<types.outputs.StorageTaskActionResponse>;
    /**
     * The creation date and time of the storage task in UTC.
     */
    public /*out*/ readonly creationTimeInUtc!: pulumi.Output<string>;
    /**
     * Text that describes the purpose of the storage task
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Storage Task is enabled when set to true and disabled when set to false
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The managed service identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Represents the provisioning state of the storage task.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Storage task version.
     */
    public /*out*/ readonly taskVersion!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StorageTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageTaskArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageTaskName"] = args ? args.storageTaskName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationTimeInUtc"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["taskVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["action"] = undefined /*out*/;
            resourceInputs["creationTimeInUtc"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["taskVersion"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storageactions/v20230101:StorageTask" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageTask.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageTask resource.
 */
export interface StorageTaskArgs {
    /**
     * The storage task action that is executed
     */
    action: pulumi.Input<types.inputs.StorageTaskActionArgs>;
    /**
     * Text that describes the purpose of the storage task
     */
    description: pulumi.Input<string>;
    /**
     * Storage Task is enabled when set to true and disabled when set to false
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The managed service identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage task within the specified resource group. Storage task names must be between 3 and 18 characters in length and use numbers and lower-case letters only.
     */
    storageTaskName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}