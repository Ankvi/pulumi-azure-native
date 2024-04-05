import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * BaseBackupPolicy resource
 */
export class BackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupPolicy {
        return new BackupPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dataprotection/v20231201:BackupPolicy';

    /**
     * Returns true if the given object is an instance of BackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupPolicy.__pulumiType;
    }

    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * BaseBackupPolicyResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.BackupPolicyResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dataprotection:BackupPolicy" }, { type: "azure-native:dataprotection/v20210101:BackupPolicy" }, { type: "azure-native:dataprotection/v20210201preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20210601preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20210701:BackupPolicy" }, { type: "azure-native:dataprotection/v20211001preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20211201preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20220101:BackupPolicy" }, { type: "azure-native:dataprotection/v20220201preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20220301:BackupPolicy" }, { type: "azure-native:dataprotection/v20220331preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20220401:BackupPolicy" }, { type: "azure-native:dataprotection/v20220501:BackupPolicy" }, { type: "azure-native:dataprotection/v20220901preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20221001preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20221101preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20221201:BackupPolicy" }, { type: "azure-native:dataprotection/v20230101:BackupPolicy" }, { type: "azure-native:dataprotection/v20230401preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20230501:BackupPolicy" }, { type: "azure-native:dataprotection/v20230601preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20230801preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20231101:BackupPolicy" }, { type: "azure-native:dataprotection/v20240201preview:BackupPolicy" }, { type: "azure-native:dataprotection/v20240301:BackupPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupPolicy resource.
 */
export interface BackupPolicyArgs {
    /**
     * Name of the policy
     */
    backupPolicyName?: pulumi.Input<string>;
    /**
     * BaseBackupPolicyResource properties
     */
    properties?: pulumi.Input<types.inputs.BackupPolicyArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}