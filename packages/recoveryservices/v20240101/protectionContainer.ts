import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Base class for container with backup items. Containers with specific workloads are derived from this class.
 */
export class ProtectionContainer extends pulumi.CustomResource {
    /**
     * Get an existing ProtectionContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectionContainer {
        return new ProtectionContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices/v20240101:ProtectionContainer';

    /**
     * Returns true if the given object is an instance of ProtectionContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtectionContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectionContainer.__pulumiType;
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
     * ProtectionContainerResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.AzureBackupServerContainerResponse | types.outputs.AzureIaaSClassicComputeVMContainerResponse | types.outputs.AzureIaaSComputeVMContainerResponse | types.outputs.AzureSQLAGWorkloadContainerProtectionContainerResponse | types.outputs.AzureSqlContainerResponse | types.outputs.AzureStorageContainerResponse | types.outputs.AzureVMAppContainerProtectionContainerResponse | types.outputs.AzureWorkloadContainerResponse | types.outputs.DpmContainerResponse | types.outputs.GenericContainerResponse | types.outputs.IaaSVMContainerResponse | types.outputs.MabContainerResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProtectionContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectionContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20161201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20201001:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20201201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210101:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210201preview:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210210:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210301:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210401:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210601:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210701:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20210801:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20211001:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20211201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220101:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220301:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220401:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220601preview:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220901preview:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20220930preview:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20221001:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20230101:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20230201:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20230401:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20230601:ProtectionContainer" }, { type: "azure-native:recoveryservices/v20230801:ProtectionContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProtectionContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProtectionContainer resource.
 */
export interface ProtectionContainerArgs {
    /**
     * Name of the container to be registered.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the container.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * ProtectionContainerResource properties
     */
    properties?: pulumi.Input<types.inputs.AzureBackupServerContainerArgs | types.inputs.AzureIaaSClassicComputeVMContainerArgs | types.inputs.AzureIaaSComputeVMContainerArgs | types.inputs.AzureSQLAGWorkloadContainerProtectionContainerArgs | types.inputs.AzureSqlContainerArgs | types.inputs.AzureStorageContainerArgs | types.inputs.AzureVMAppContainerProtectionContainerArgs | types.inputs.AzureWorkloadContainerArgs | types.inputs.DpmContainerArgs | types.inputs.GenericContainerArgs | types.inputs.IaaSVMContainerArgs | types.inputs.MabContainerArgs>;
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