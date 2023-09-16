import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Base class for backup items.
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
    public static readonly __pulumiType = 'azure-native:recoveryservices/v20230401:ProtectedItem';

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
    public readonly properties!: pulumi.Output<types.outputs.recoveryservices.v20230401.AzureFileshareProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSClassicComputeVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSComputeVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureIaaSVMProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureSqlProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPAseDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDBInstanceProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.AzureVmWorkloadSQLDatabaseProtectedItemResponse | types.outputs.recoveryservices.v20230401.DPMProtectedItemResponse | types.outputs.recoveryservices.v20230401.GenericProtectedItemResponse | types.outputs.recoveryservices.v20230401.MabFileFolderProtectedItemResponse>;
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
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices:ProtectedItem" }, { type: "azure-native:recoveryservices/v20160601:ProtectedItem" }, { type: "azure-native:recoveryservices/v20190513:ProtectedItem" }, { type: "azure-native:recoveryservices/v20190615:ProtectedItem" }, { type: "azure-native:recoveryservices/v20201001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20201201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210201preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210210:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210301:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210601:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210701:ProtectedItem" }, { type: "azure-native:recoveryservices/v20210801:ProtectedItem" }, { type: "azure-native:recoveryservices/v20211001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20211201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220201:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220301:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220401:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220601preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220901preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20220930preview:ProtectedItem" }, { type: "azure-native:recoveryservices/v20221001:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230101:ProtectedItem" }, { type: "azure-native:recoveryservices/v20230201:ProtectedItem" }] };
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
    properties?: pulumi.Input<types.inputs.recoveryservices.v20230401.AzureFileshareProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureIaaSClassicComputeVMProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureIaaSComputeVMProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureIaaSVMProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureSqlProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureVmWorkloadProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureVmWorkloadSAPAseDatabaseProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDBInstanceProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureVmWorkloadSAPHanaDatabaseProtectedItemArgs | types.inputs.recoveryservices.v20230401.AzureVmWorkloadSQLDatabaseProtectedItemArgs | types.inputs.recoveryservices.v20230401.DPMProtectedItemArgs | types.inputs.recoveryservices.v20230401.GenericProtectedItemArgs | types.inputs.recoveryservices.v20230401.MabFileFolderProtectedItemArgs>;
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
