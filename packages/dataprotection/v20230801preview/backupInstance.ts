import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * BackupInstance Resource
 */
export class BackupInstance extends pulumi.CustomResource {
    /**
     * Get an existing BackupInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupInstance {
        return new BackupInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dataprotection/v20230801preview:BackupInstance';

    /**
     * Returns true if the given object is an instance of BackupInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupInstance.__pulumiType;
    }

    /**
     * Proxy Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * BackupInstanceResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.BackupInstanceResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Proxy Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Proxy Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BackupInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["backupInstanceName"] = args ? args.backupInstanceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dataprotection:BackupInstance" }, { type: "azure-native:dataprotection/v20210101:BackupInstance" }, { type: "azure-native:dataprotection/v20210201preview:BackupInstance" }, { type: "azure-native:dataprotection/v20210601preview:BackupInstance" }, { type: "azure-native:dataprotection/v20210701:BackupInstance" }, { type: "azure-native:dataprotection/v20211001preview:BackupInstance" }, { type: "azure-native:dataprotection/v20211201preview:BackupInstance" }, { type: "azure-native:dataprotection/v20220101:BackupInstance" }, { type: "azure-native:dataprotection/v20220201preview:BackupInstance" }, { type: "azure-native:dataprotection/v20220301:BackupInstance" }, { type: "azure-native:dataprotection/v20220331preview:BackupInstance" }, { type: "azure-native:dataprotection/v20220401:BackupInstance" }, { type: "azure-native:dataprotection/v20220501:BackupInstance" }, { type: "azure-native:dataprotection/v20220901preview:BackupInstance" }, { type: "azure-native:dataprotection/v20221001preview:BackupInstance" }, { type: "azure-native:dataprotection/v20221101preview:BackupInstance" }, { type: "azure-native:dataprotection/v20221201:BackupInstance" }, { type: "azure-native:dataprotection/v20230101:BackupInstance" }, { type: "azure-native:dataprotection/v20230401preview:BackupInstance" }, { type: "azure-native:dataprotection/v20230501:BackupInstance" }, { type: "azure-native:dataprotection/v20230601preview:BackupInstance" }, { type: "azure-native:dataprotection/v20230801:BackupInstance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupInstance resource.
 */
export interface BackupInstanceArgs {
    /**
     * The name of the backup instance.
     */
    backupInstanceName?: pulumi.Input<string>;
    /**
     * BackupInstanceResource properties
     */
    properties?: pulumi.Input<types.inputs.BackupInstanceArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Proxy Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the backup vault.
     */
    vaultName: pulumi.Input<string>;
}
