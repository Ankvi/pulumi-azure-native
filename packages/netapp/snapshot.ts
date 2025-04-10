import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Snapshot of a Volume
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class Snapshot extends pulumi.CustomResource {
    /**
     * Get an existing Snapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Snapshot {
        return new Snapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:Snapshot';

    /**
     * Returns true if the given object is an instance of Snapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Snapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Snapshot.__pulumiType;
    }

    /**
     * The creation date of the snapshot
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * UUID v4 used to identify the Snapshot
     */
    public /*out*/ readonly snapshotId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Snapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["snapshotName"] = args ? args.snapshotName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["snapshotId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["snapshotId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20170815:Snapshot" }, { type: "azure-native:netapp/v20190501:Snapshot" }, { type: "azure-native:netapp/v20190601:Snapshot" }, { type: "azure-native:netapp/v20190701:Snapshot" }, { type: "azure-native:netapp/v20190801:Snapshot" }, { type: "azure-native:netapp/v20191001:Snapshot" }, { type: "azure-native:netapp/v20191101:Snapshot" }, { type: "azure-native:netapp/v20200201:Snapshot" }, { type: "azure-native:netapp/v20200301:Snapshot" }, { type: "azure-native:netapp/v20200501:Snapshot" }, { type: "azure-native:netapp/v20200601:Snapshot" }, { type: "azure-native:netapp/v20200701:Snapshot" }, { type: "azure-native:netapp/v20200801:Snapshot" }, { type: "azure-native:netapp/v20200901:Snapshot" }, { type: "azure-native:netapp/v20201101:Snapshot" }, { type: "azure-native:netapp/v20201201:Snapshot" }, { type: "azure-native:netapp/v20210201:Snapshot" }, { type: "azure-native:netapp/v20210401:Snapshot" }, { type: "azure-native:netapp/v20210401preview:Snapshot" }, { type: "azure-native:netapp/v20210601:Snapshot" }, { type: "azure-native:netapp/v20210801:Snapshot" }, { type: "azure-native:netapp/v20211001:Snapshot" }, { type: "azure-native:netapp/v20220101:Snapshot" }, { type: "azure-native:netapp/v20220301:Snapshot" }, { type: "azure-native:netapp/v20220501:Snapshot" }, { type: "azure-native:netapp/v20220901:Snapshot" }, { type: "azure-native:netapp/v20221101:Snapshot" }, { type: "azure-native:netapp/v20221101preview:Snapshot" }, { type: "azure-native:netapp/v20230501:Snapshot" }, { type: "azure-native:netapp/v20230501preview:Snapshot" }, { type: "azure-native:netapp/v20230701:Snapshot" }, { type: "azure-native:netapp/v20230701preview:Snapshot" }, { type: "azure-native:netapp/v20231101:Snapshot" }, { type: "azure-native:netapp/v20231101preview:Snapshot" }, { type: "azure-native:netapp/v20240101:Snapshot" }, { type: "azure-native:netapp/v20240301:Snapshot" }, { type: "azure-native:netapp/v20240301preview:Snapshot" }, { type: "azure-native:netapp/v20240501:Snapshot" }, { type: "azure-native:netapp/v20240501preview:Snapshot" }, { type: "azure-native:netapp/v20240701:Snapshot" }, { type: "azure-native:netapp/v20240701preview:Snapshot" }, { type: "azure-native:netapp/v20240901:Snapshot" }, { type: "azure-native:netapp/v20240901preview:Snapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Snapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Snapshot resource.
 */
export interface SnapshotArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot
     */
    snapshotName?: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}