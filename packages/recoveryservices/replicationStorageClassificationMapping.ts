import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Storage mapping object.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2018-07-10.
 *
 * Other available API versions: 2023-06-01.
 */
export class ReplicationStorageClassificationMapping extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationStorageClassificationMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationStorageClassificationMapping {
        return new ReplicationStorageClassificationMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ReplicationStorageClassificationMapping';

    /**
     * Returns true if the given object is an instance of ReplicationStorageClassificationMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationStorageClassificationMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationStorageClassificationMapping.__pulumiType;
    }

    /**
     * Resource Location
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the storage mapping object.
     */
    public readonly properties!: pulumi.Output<types.outputs.StorageClassificationMappingPropertiesResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationStorageClassificationMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationStorageClassificationMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.storageClassificationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageClassificationName'");
            }
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["storageClassificationMappingName"] = args ? args.storageClassificationMappingName : undefined;
            resourceInputs["storageClassificationName"] = args ? args.storageClassificationName : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20160810:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20180110:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20180710:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210210:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210301:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210401:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210601:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210701:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20210801:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20211001:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20211101:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20211201:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220101:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220201:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220301:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220401:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220501:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220801:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20220910:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20221001:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20230101:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20230201:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20230401:ReplicationStorageClassificationMapping" }, { type: "azure-native:recoveryservices/v20230601:ReplicationStorageClassificationMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationStorageClassificationMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationStorageClassificationMapping resource.
 */
export interface ReplicationStorageClassificationMappingArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Storage mapping input properties.
     */
    properties?: pulumi.Input<types.inputs.StorageMappingInputPropertiesArgs>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Storage classification mapping name.
     */
    storageClassificationMappingName?: pulumi.Input<string>;
    /**
     * Storage classification name.
     */
    storageClassificationName: pulumi.Input<string>;
}
