import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Restore Point details.
 */
export class RestorePoint extends pulumi.CustomResource {
    /**
     * Get an existing RestorePoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RestorePoint {
        return new RestorePoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20211101:RestorePoint';

    /**
     * Returns true if the given object is an instance of RestorePoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RestorePoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RestorePoint.__pulumiType;
    }

    /**
     * Gets the consistency mode for the restore point. Please refer to https://aka.ms/RestorePoints for more details.
     */
    public /*out*/ readonly consistencyMode!: pulumi.Output<string>;
    /**
     * List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
     */
    public readonly excludeDisks!: pulumi.Output<types.outputs.compute.v20211101.ApiEntityReferenceResponse[] | undefined>;
    /**
     * The restore point instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.compute.v20211101.RestorePointInstanceViewResponse>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the restore point.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets the details of the VM captured at the time of the restore point creation.
     */
    public /*out*/ readonly sourceMetadata!: pulumi.Output<types.outputs.compute.v20211101.RestorePointSourceMetadataResponse>;
    /**
     * Resource Id of the source restore point from which a copy needs to be created.
     */
    public readonly sourceRestorePoint!: pulumi.Output<types.outputs.compute.v20211101.ApiEntityReferenceResponse | undefined>;
    /**
     * Gets the creation time of the restore point.
     */
    public readonly timeCreated!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RestorePoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RestorePointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.restorePointCollectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'restorePointCollectionName'");
            }
            resourceInputs["excludeDisks"] = args ? args.excludeDisks : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restorePointCollectionName"] = args ? args.restorePointCollectionName : undefined;
            resourceInputs["restorePointName"] = args ? args.restorePointName : undefined;
            resourceInputs["sourceRestorePoint"] = args ? args.sourceRestorePoint : undefined;
            resourceInputs["timeCreated"] = args ? args.timeCreated : undefined;
            resourceInputs["consistencyMode"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceMetadata"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["consistencyMode"] = undefined /*out*/;
            resourceInputs["excludeDisks"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceMetadata"] = undefined /*out*/;
            resourceInputs["sourceRestorePoint"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:RestorePoint" }, { type: "azure-native:compute/v20210301:RestorePoint" }, { type: "azure-native:compute/v20210401:RestorePoint" }, { type: "azure-native:compute/v20210701:RestorePoint" }, { type: "azure-native:compute/v20220301:RestorePoint" }, { type: "azure-native:compute/v20220801:RestorePoint" }, { type: "azure-native:compute/v20221101:RestorePoint" }, { type: "azure-native:compute/v20230301:RestorePoint" }, { type: "azure-native:compute/v20230701:RestorePoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RestorePoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RestorePoint resource.
 */
export interface RestorePointArgs {
    /**
     * List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
     */
    excludeDisks?: pulumi.Input<pulumi.Input<types.inputs.compute.v20211101.ApiEntityReferenceArgs>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName: pulumi.Input<string>;
    /**
     * The name of the restore point.
     */
    restorePointName?: pulumi.Input<string>;
    /**
     * Resource Id of the source restore point from which a copy needs to be created.
     */
    sourceRestorePoint?: pulumi.Input<types.inputs.compute.v20211101.ApiEntityReferenceArgs>;
    /**
     * Gets the creation time of the restore point.
     */
    timeCreated?: pulumi.Input<string>;
}
