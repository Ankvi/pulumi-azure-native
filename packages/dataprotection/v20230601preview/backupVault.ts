import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backup Vault Resource
 */
export class BackupVault extends pulumi.CustomResource {
    /**
     * Get an existing BackupVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupVault {
        return new BackupVault(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dataprotection/v20230601preview:BackupVault';

    /**
     * Returns true if the given object is an instance of BackupVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupVault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupVault.__pulumiType;
    }

    /**
     * Optional ETag.
     */
    public readonly eTag!: pulumi.Output<string | undefined>;
    /**
     * Input Managed Identity Details
     */
    public readonly identity!: pulumi.Output<types.outputs.DppIdentityDetailsResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * BackupVaultResource properties
     */
    public readonly properties!: pulumi.Output<types.outputs.BackupVaultResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BackupVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupVaultArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dataprotection:BackupVault" }, { type: "azure-native:dataprotection/v20210101:BackupVault" }, { type: "azure-native:dataprotection/v20210201preview:BackupVault" }, { type: "azure-native:dataprotection/v20210601preview:BackupVault" }, { type: "azure-native:dataprotection/v20210701:BackupVault" }, { type: "azure-native:dataprotection/v20211001preview:BackupVault" }, { type: "azure-native:dataprotection/v20211201preview:BackupVault" }, { type: "azure-native:dataprotection/v20220101:BackupVault" }, { type: "azure-native:dataprotection/v20220201preview:BackupVault" }, { type: "azure-native:dataprotection/v20220301:BackupVault" }, { type: "azure-native:dataprotection/v20220331preview:BackupVault" }, { type: "azure-native:dataprotection/v20220401:BackupVault" }, { type: "azure-native:dataprotection/v20220501:BackupVault" }, { type: "azure-native:dataprotection/v20220901preview:BackupVault" }, { type: "azure-native:dataprotection/v20221001preview:BackupVault" }, { type: "azure-native:dataprotection/v20221101preview:BackupVault" }, { type: "azure-native:dataprotection/v20221201:BackupVault" }, { type: "azure-native:dataprotection/v20230101:BackupVault" }, { type: "azure-native:dataprotection/v20230401preview:BackupVault" }, { type: "azure-native:dataprotection/v20230501:BackupVault" }, { type: "azure-native:dataprotection/v20230801preview:BackupVault" }, { type: "azure-native:dataprotection/v20231101:BackupVault" }, { type: "azure-native:dataprotection/v20231201:BackupVault" }, { type: "azure-native:dataprotection/v20240201preview:BackupVault" }, { type: "azure-native:dataprotection/v20240301:BackupVault" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupVault.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupVault resource.
 */
export interface BackupVaultArgs {
    /**
     * Optional ETag.
     */
    eTag?: pulumi.Input<string>;
    /**
     * Input Managed Identity Details
     */
    identity?: pulumi.Input<types.inputs.DppIdentityDetailsArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * BackupVaultResource properties
     */
    properties: pulumi.Input<types.inputs.BackupVaultArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the backup vault.
     */
    vaultName?: pulumi.Input<string>;
}