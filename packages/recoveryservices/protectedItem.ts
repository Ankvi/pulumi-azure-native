import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Base class for backup items.
 *
 * Uses Azure REST API version 2024-10-01. In version 2.x of the Azure Native provider, it used API version 2023-04-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-07-30-preview, 2024-11-01-preview, 2025-01-01, 2025-02-01, 2025-02-28-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ProtectedItem extends pulumi.CustomResource {
    /**
     * Get an existing ProtectedItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectedItem {
        return new ProtectedItem(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ProtectedItem';

    /**
     * Returns true if the given object is an instance of ProtectedItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtectedItem {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectedItem.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ProtectedItemResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.AzureFileshareProtectedItemResponse | types.outputs.AzureIaaSClassicComputeVMProtectedItemResponse | types.outputs.AzureIaaSComputeVMProtectedItemResponse | types.outputs.AzureIaaSVMProtectedItemResponse | types.outputs.AzureSqlProtectedItemResponse | types.outputs.AzureVmWorkloadProtectedItemResponse | types.outputs.AzureVmWorkloadSAPAseDatabaseProtectedItemResponse | types.outputs.AzureVmWorkloadSAPHanaDBInstanceProtectedItemResponse | types.outputs.AzureVmWorkloadSAPHanaDatabaseProtectedItemResponse | types.outputs.AzureVmWorkloadSQLDatabaseProtectedItemResponse | types.outputs.DPMProtectedItemResponse | types.outputs.GenericProtectedItemResponse | types.outputs.MabFileFolderProtectedItemResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProtectedItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectedItemArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.containerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["protectedItemName"] = args ? args.protectedItemName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20160601:ProtectedItem" }, { type: "azure-native:recoveryservices/v20190513:ProtectedItem" }, { type: "azure-native:recoveryservices/v20190615:ProtectedItem" }, { type: "azure-native:recoveryservices/v20201001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20201201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210201preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210210:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210301:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210601:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210701:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210801:ProtectedItem" }, { type: "azure-native:recoveryservices/v20211001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20211201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220301:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220601preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220901preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220930preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20221001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230601:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230801:ProtectedItem" }, { type: "azure-native:recoveryservices/v20240101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20240201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20240401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20240430preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20240730preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20241001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20241101preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20250101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20250201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20250228preview:ProtectedItem" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProtectedItem.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProtectedItem resource.
 */
export interface ProtectedItemArgs {
    /**
     * Container name associated with the backup item.
     */
    containerName: pulumi.Input<string>;
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the backup item.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * ProtectedItemResource properties
     */
    properties?: pulumi.Input<types.inputs.AzureFileshareProtectedItemArgs | types.inputs.AzureIaaSClassicComputeVMProtectedItemArgs | types.inputs.AzureIaaSComputeVMProtectedItemArgs | types.inputs.AzureIaaSVMProtectedItemArgs | types.inputs.AzureSqlProtectedItemArgs | types.inputs.AzureVmWorkloadProtectedItemArgs | types.inputs.AzureVmWorkloadSAPAseDatabaseProtectedItemArgs | types.inputs.AzureVmWorkloadSAPHanaDBInstanceProtectedItemArgs | types.inputs.AzureVmWorkloadSAPHanaDatabaseProtectedItemArgs | types.inputs.AzureVmWorkloadSQLDatabaseProtectedItemArgs | types.inputs.DPMProtectedItemArgs | types.inputs.GenericProtectedItemArgs | types.inputs.MabFileFolderProtectedItemArgs>;
    /**
     * Item name to be backed up.
     */
    protectedItemName?: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    vaultName: pulumi.Input<string>;
}