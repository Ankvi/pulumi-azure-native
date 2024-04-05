import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Storage resource for managedEnvironment.
 */
export class ManagedEnvironmentsStorage extends pulumi.CustomResource {
    /**
     * Get an existing ManagedEnvironmentsStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedEnvironmentsStorage {
        return new ManagedEnvironmentsStorage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app/v20230502preview:ManagedEnvironmentsStorage';

    /**
     * Returns true if the given object is an instance of ManagedEnvironmentsStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedEnvironmentsStorage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedEnvironmentsStorage.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Storage properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ManagedEnvironmentStorageResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedEnvironmentsStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedEnvironmentsStorageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageName"] = args ? args.storageName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20220101preview:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20220301:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20220601preview:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20221001:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20221101preview:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20230401preview:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20230501:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20230801preview:ManagedEnvironmentsStorage" }, { type: "azure-native:app/v20231102preview:ManagedEnvironmentsStorage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedEnvironmentsStorage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedEnvironmentsStorage resource.
 */
export interface ManagedEnvironmentsStorageArgs {
    /**
     * Name of the Environment.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Storage properties
     */
    properties?: pulumi.Input<types.inputs.ManagedEnvironmentStoragePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storage.
     */
    storageName?: pulumi.Input<string>;
}