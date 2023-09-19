import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Base class for backup ProtectionIntent.
 */
export class ProtectionIntent extends pulumi.CustomResource {
    /**
     * Get an existing ProtectionIntent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ProtectionIntent {
        return new ProtectionIntent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices/v20230401:ProtectionIntent';

    /**
     * Returns true if the given object is an instance of ProtectionIntent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProtectionIntent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProtectionIntent.__pulumiType;
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
     * ProtectionIntentResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.AzureRecoveryServiceVaultProtectionIntentResponse | types.outputs.AzureResourceProtectionIntentResponse | types.outputs.AzureWorkloadAutoProtectionIntentResponse | types.outputs.AzureWorkloadContainerAutoProtectionIntentResponse | types.outputs.AzureWorkloadSQLAutoProtectionIntentResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ProtectionIntent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectionIntentArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["intentObjectName"] = args ? args.intentObjectName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20170701:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210201:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210201preview:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210210:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210301:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210401:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210601:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210701:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20210801:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20211001:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20211201:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220101:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220201:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220301:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220401:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220601preview:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220901preview:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20220930preview:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20221001:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20230101:ProtectionIntent" }, { type: "azure-native:recoveryservices/v20230201:ProtectionIntent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ProtectionIntent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ProtectionIntent resource.
 */
export interface ProtectionIntentArgs {
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Fabric name associated with the backup item.
     */
    fabricName: pulumi.Input<string>;
    /**
     * Intent object name.
     */
    intentObjectName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * ProtectionIntentResource properties
     */
    properties?: pulumi.Input<types.inputs.AzureRecoveryServiceVaultProtectionIntentArgs | types.inputs.AzureResourceProtectionIntentArgs | types.inputs.AzureWorkloadAutoProtectionIntentArgs | types.inputs.AzureWorkloadContainerAutoProtectionIntentArgs | types.inputs.AzureWorkloadSQLAutoProtectionIntentArgs>;
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
