import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Type of the Storage Target.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-11-01-preview, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagecache [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StorageTarget extends pulumi.CustomResource {
    /**
     * Get an existing StorageTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageTarget {
        return new StorageTarget(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagecache:StorageTarget';

    /**
     * Returns true if the given object is an instance of StorageTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageTarget {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageTarget.__pulumiType;
    }

    /**
     * The percentage of cache space allocated for this storage target
     */
    public /*out*/ readonly allocationPercentage!: pulumi.Output<number>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Properties when targetType is blobNfs.
     */
    public readonly blobNfs!: pulumi.Output<types.outputs.BlobNfsTargetResponse | undefined>;
    /**
     * Properties when targetType is clfs.
     */
    public readonly clfs!: pulumi.Output<types.outputs.ClfsTargetResponse | undefined>;
    /**
     * List of cache namespace junctions to target for namespace associations.
     */
    public readonly junctions!: pulumi.Output<types.outputs.NamespaceJunctionResponse[] | undefined>;
    /**
     * Region name string.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Name of the Storage Target.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties when targetType is nfs3.
     */
    public readonly nfs3!: pulumi.Output<types.outputs.Nfs3TargetResponse | undefined>;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Storage target operational state.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the Storage Target.
     */
    public readonly targetType!: pulumi.Output<string>;
    /**
     * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Properties when targetType is unknown.
     */
    public readonly unknown!: pulumi.Output<types.outputs.UnknownTargetResponse | undefined>;

    /**
     * Create a StorageTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageTargetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.cacheName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cacheName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.targetType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetType'");
            }
            resourceInputs["blobNfs"] = args ? args.blobNfs : undefined;
            resourceInputs["cacheName"] = args ? args.cacheName : undefined;
            resourceInputs["clfs"] = args ? args.clfs : undefined;
            resourceInputs["junctions"] = args ? args.junctions : undefined;
            resourceInputs["nfs3"] = args ? args.nfs3 : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["storageTargetName"] = args ? args.storageTargetName : undefined;
            resourceInputs["targetType"] = args ? args.targetType : undefined;
            resourceInputs["unknown"] = args ? args.unknown : undefined;
            resourceInputs["allocationPercentage"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allocationPercentage"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobNfs"] = undefined /*out*/;
            resourceInputs["clfs"] = undefined /*out*/;
            resourceInputs["junctions"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nfs3"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["unknown"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagecache/v20190801preview:StorageTarget" }, { type: "azure-native:storagecache/v20191101:StorageTarget" }, { type: "azure-native:storagecache/v20200301:StorageTarget" }, { type: "azure-native:storagecache/v20201001:StorageTarget" }, { type: "azure-native:storagecache/v20210301:StorageTarget" }, { type: "azure-native:storagecache/v20210501:StorageTarget" }, { type: "azure-native:storagecache/v20210901:StorageTarget" }, { type: "azure-native:storagecache/v20220101:StorageTarget" }, { type: "azure-native:storagecache/v20220501:StorageTarget" }, { type: "azure-native:storagecache/v20230101:StorageTarget" }, { type: "azure-native:storagecache/v20230301preview:StorageTarget" }, { type: "azure-native:storagecache/v20230501:StorageTarget" }, { type: "azure-native:storagecache/v20231101preview:StorageTarget" }, { type: "azure-native:storagecache/v20240301:StorageTarget" }, { type: "azure-native:storagecache/v20240701:StorageTarget" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageTarget.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageTarget resource.
 */
export interface StorageTargetArgs {
    /**
     * Properties when targetType is blobNfs.
     */
    blobNfs?: pulumi.Input<types.inputs.BlobNfsTargetArgs>;
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: pulumi.Input<string>;
    /**
     * Properties when targetType is clfs.
     */
    clfs?: pulumi.Input<types.inputs.ClfsTargetArgs>;
    /**
     * List of cache namespace junctions to target for namespace associations.
     */
    junctions?: pulumi.Input<pulumi.Input<types.inputs.NamespaceJunctionArgs>[]>;
    /**
     * Properties when targetType is nfs3.
     */
    nfs3?: pulumi.Input<types.inputs.Nfs3TargetArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Storage target operational state.
     */
    state?: pulumi.Input<string | types.enums.OperationalStateType>;
    /**
     * Name of Storage Target.
     */
    storageTargetName?: pulumi.Input<string>;
    /**
     * Type of the Storage Target.
     */
    targetType: pulumi.Input<string | types.enums.StorageTargetType>;
    /**
     * Properties when targetType is unknown.
     */
    unknown?: pulumi.Input<types.inputs.UnknownTargetArgs>;
}