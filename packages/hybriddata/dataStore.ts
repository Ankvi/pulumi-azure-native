import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Data store.
 * Azure REST API version: 2019-06-01. Prior API version in Azure Native 1.x: 2019-06-01.
 */
export class DataStore extends pulumi.CustomResource {
    /**
     * Get an existing DataStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataStore {
        return new DataStore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybriddata:DataStore';

    /**
     * Returns true if the given object is an instance of DataStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataStore.__pulumiType;
    }

    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    public readonly customerSecrets!: pulumi.Output<types.outputs.CustomerSecretResponse[] | undefined>;
    /**
     * The arm id of the data store type.
     */
    public readonly dataStoreTypeId!: pulumi.Output<string>;
    /**
     * A generic json used differently by each data source type.
     */
    public readonly extendedProperties!: pulumi.Output<any | undefined>;
    /**
     * Name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    public readonly repositoryId!: pulumi.Output<string | undefined>;
    /**
     * State of the data source.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataStoreArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataManagerName'");
            }
            if ((!args || args.dataStoreTypeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataStoreTypeId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.state === undefined) && !opts.urn) {
                throw new Error("Missing required property 'state'");
            }
            resourceInputs["customerSecrets"] = args ? args.customerSecrets : undefined;
            resourceInputs["dataManagerName"] = args ? args.dataManagerName : undefined;
            resourceInputs["dataStoreName"] = args ? args.dataStoreName : undefined;
            resourceInputs["dataStoreTypeId"] = args ? args.dataStoreTypeId : undefined;
            resourceInputs["extendedProperties"] = args ? args.extendedProperties : undefined;
            resourceInputs["repositoryId"] = args ? args.repositoryId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customerSecrets"] = undefined /*out*/;
            resourceInputs["dataStoreTypeId"] = undefined /*out*/;
            resourceInputs["extendedProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["repositoryId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybriddata/v20160601:DataStore" }, { type: "azure-native:hybriddata/v20190601:DataStore" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataStore.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataStore resource.
 */
export interface DataStoreArgs {
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    customerSecrets?: pulumi.Input<pulumi.Input<types.inputs.CustomerSecretArgs>[]>;
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: pulumi.Input<string>;
    /**
     * The data store/repository name to be created or updated.
     */
    dataStoreName?: pulumi.Input<string>;
    /**
     * The arm id of the data store type.
     */
    dataStoreTypeId: pulumi.Input<string>;
    /**
     * A generic json used differently by each data source type.
     */
    extendedProperties?: any;
    /**
     * Arm Id for the manager resource to which the data source is associated. This is optional.
     */
    repositoryId?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * State of the data source.
     */
    state: pulumi.Input<types.enums.State>;
}