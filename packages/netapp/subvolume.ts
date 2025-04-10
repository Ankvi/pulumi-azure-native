import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Subvolume Information properties
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2021-10-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class Subvolume extends pulumi.CustomResource {
    /**
     * Get an existing Subvolume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Subvolume {
        return new Subvolume(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:Subvolume';

    /**
     * Returns true if the given object is an instance of Subvolume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subvolume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subvolume.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * parent path to the subvolume
     */
    public readonly parentPath!: pulumi.Output<string | undefined>;
    /**
     * Path to the subvolume
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Subvolume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubvolumeArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["parentPath"] = args ? args.parentPath : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["subvolumeName"] = args ? args.subvolumeName : undefined;
            resourceInputs["volumeName"] = args ? args.volumeName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parentPath"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20211001:Subvolume" }, { type: "azure-native:netapp/v20220101:Subvolume" }, { type: "azure-native:netapp/v20220301:Subvolume" }, { type: "azure-native:netapp/v20220501:Subvolume" }, { type: "azure-native:netapp/v20220901:Subvolume" }, { type: "azure-native:netapp/v20221101:Subvolume" }, { type: "azure-native:netapp/v20221101preview:Subvolume" }, { type: "azure-native:netapp/v20230501:Subvolume" }, { type: "azure-native:netapp/v20230501preview:Subvolume" }, { type: "azure-native:netapp/v20230701:Subvolume" }, { type: "azure-native:netapp/v20230701preview:Subvolume" }, { type: "azure-native:netapp/v20231101:Subvolume" }, { type: "azure-native:netapp/v20231101preview:Subvolume" }, { type: "azure-native:netapp/v20240101:Subvolume" }, { type: "azure-native:netapp/v20240301:Subvolume" }, { type: "azure-native:netapp/v20240301preview:Subvolume" }, { type: "azure-native:netapp/v20240501:Subvolume" }, { type: "azure-native:netapp/v20240501preview:Subvolume" }, { type: "azure-native:netapp/v20240701:Subvolume" }, { type: "azure-native:netapp/v20240701preview:Subvolume" }, { type: "azure-native:netapp/v20240901:Subvolume" }, { type: "azure-native:netapp/v20240901preview:Subvolume" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Subvolume.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Subvolume resource.
 */
export interface SubvolumeArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * parent path to the subvolume
     */
    parentPath?: pulumi.Input<string>;
    /**
     * Path to the subvolume
     */
    path?: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Truncate subvolume to the provided size in bytes
     */
    size?: pulumi.Input<number>;
    /**
     * The name of the subvolume.
     */
    subvolumeName?: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}