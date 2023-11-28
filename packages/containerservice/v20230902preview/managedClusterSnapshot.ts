import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A managed cluster snapshot resource.
 */
export class ManagedClusterSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing ManagedClusterSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedClusterSnapshot {
        return new ManagedClusterSnapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice/v20230902preview:ManagedClusterSnapshot';

    /**
     * Returns true if the given object is an instance of ManagedClusterSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedClusterSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedClusterSnapshot.__pulumiType;
    }

    /**
     * CreationData to be used to specify the source resource ID to create this snapshot.
     */
    public readonly creationData!: pulumi.Output<types.outputs.CreationDataResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * What the properties will be showed when getting managed cluster snapshot. Those properties are read-only.
     */
    public /*out*/ readonly managedClusterPropertiesReadOnly!: pulumi.Output<types.outputs.ManagedClusterPropertiesForSnapshotResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    public readonly snapshotType!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedClusterSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterSnapshotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["creationData"] = args ? args.creationData : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["snapshotType"] = args ? args.snapshotType : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["managedClusterPropertiesReadOnly"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationData"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedClusterPropertiesReadOnly"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["snapshotType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220202preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220302preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220402preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220502preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220602preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220702preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220802preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220803preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20220902preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20221002preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20221102preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230102preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230202preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230302preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230402preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230502preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230602preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230702preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20230802preview:ManagedClusterSnapshot" }, { type: "azure-native:containerservice/v20231002preview:ManagedClusterSnapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedClusterSnapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedClusterSnapshot resource.
 */
export interface ManagedClusterSnapshotArgs {
    /**
     * CreationData to be used to specify the source resource ID to create this snapshot.
     */
    creationData?: pulumi.Input<types.inputs.CreationDataArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * The type of a snapshot. The default is NodePool.
     */
    snapshotType?: pulumi.Input<string | types.enums.SnapshotType>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
