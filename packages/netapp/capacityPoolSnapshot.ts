import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Snapshot of a Volume
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2022-11-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native netapp [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CapacityPoolSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing CapacityPoolSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CapacityPoolSnapshot {
        return new CapacityPoolSnapshot(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:CapacityPoolSnapshot';

    /**
     * Returns true if the given object is an instance of CapacityPoolSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapacityPoolSnapshot {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapacityPoolSnapshot.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
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
     * Create a CapacityPoolSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapacityPoolSnapshotArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["snapshotId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["snapshotId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20170815:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20190501:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20190601:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20190701:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20190801:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20191001:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20191101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200201:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200301:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200501:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200601:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200701:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200801:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20200901:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20201101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20201201:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20210201:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20210401:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20210401preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20210601:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20210801:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20211001:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20220101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20220301:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20220501:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20220901:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20221101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20221101:Snapshot" }, { type: "azure-native:netapp/v20221101preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20221101preview:Snapshot" }, { type: "azure-native:netapp/v20230501:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20230501:Snapshot" }, { type: "azure-native:netapp/v20230501preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20230501preview:Snapshot" }, { type: "azure-native:netapp/v20230701:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20230701:Snapshot" }, { type: "azure-native:netapp/v20230701preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20230701preview:Snapshot" }, { type: "azure-native:netapp/v20231101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20231101:Snapshot" }, { type: "azure-native:netapp/v20231101preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20231101preview:Snapshot" }, { type: "azure-native:netapp/v20240101:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240101:Snapshot" }, { type: "azure-native:netapp/v20240301:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240301:Snapshot" }, { type: "azure-native:netapp/v20240301preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240301preview:Snapshot" }, { type: "azure-native:netapp/v20240501:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240501:Snapshot" }, { type: "azure-native:netapp/v20240501preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240501preview:Snapshot" }, { type: "azure-native:netapp/v20240701:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240701:Snapshot" }, { type: "azure-native:netapp/v20240701preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240701preview:Snapshot" }, { type: "azure-native:netapp/v20240901:CapacityPoolSnapshot" }, { type: "azure-native:netapp/v20240901:Snapshot" }, { type: "azure-native:netapp/v20240901preview:CapacityPoolSnapshot" }, { type: "azure-native:netapp:Snapshot" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CapacityPoolSnapshot.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CapacityPoolSnapshot resource.
 */
export interface CapacityPoolSnapshotArgs {
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