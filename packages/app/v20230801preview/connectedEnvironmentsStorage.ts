import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Storage resource for connectedEnvironment.
 */
export class ConnectedEnvironmentsStorage extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedEnvironmentsStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedEnvironmentsStorage {
        return new ConnectedEnvironmentsStorage(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app/v20230801preview:ConnectedEnvironmentsStorage';

    /**
     * Returns true if the given object is an instance of ConnectedEnvironmentsStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedEnvironmentsStorage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedEnvironmentsStorage.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Storage properties
     */
    public readonly properties!: pulumi.Output<types.outputs.ConnectedEnvironmentStorageResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectedEnvironmentsStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedEnvironmentsStorageArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedEnvironmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedEnvironmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectedEnvironmentName"] = args ? args.connectedEnvironmentName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:app:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20220601preview:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20221001:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20221101preview:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20230401preview:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20230501:ConnectedEnvironmentsStorage" }, { type: "azure-native:app/v20230502preview:ConnectedEnvironmentsStorage" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedEnvironmentsStorage.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedEnvironmentsStorage resource.
 */
export interface ConnectedEnvironmentsStorageArgs {
    /**
     * Name of the Environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * Storage properties
     */
    properties?: pulumi.Input<types.inputs.ConnectedEnvironmentStoragePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the storage.
     */
    storageName?: pulumi.Input<string>;
}
