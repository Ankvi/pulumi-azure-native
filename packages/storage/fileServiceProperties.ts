import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of File services in storage account.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-02-01.
 *
 * Other available API versions: 2023-01-01.
 */
export class FileServiceProperties extends pulumi.CustomResource {
    /**
     * Get an existing FileServiceProperties resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FileServiceProperties {
        return new FileServiceProperties(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storage:FileServiceProperties';

    /**
     * Returns true if the given object is an instance of FileServiceProperties.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FileServiceProperties {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FileServiceProperties.__pulumiType;
    }

    /**
     * Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
     */
    public readonly cors!: pulumi.Output<types.outputs.CorsRulesResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Protocol settings for file service
     */
    public readonly protocolSettings!: pulumi.Output<types.outputs.ProtocolSettingsResponse | undefined>;
    /**
     * The file service properties for share soft delete.
     */
    public readonly shareDeleteRetentionPolicy!: pulumi.Output<types.outputs.DeleteRetentionPolicyResponse | undefined>;
    /**
     * Sku name and tier.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FileServiceProperties resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileServicePropertiesArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["cors"] = args ? args.cors : undefined;
            resourceInputs["fileServicesName"] = args ? args.fileServicesName : undefined;
            resourceInputs["protocolSettings"] = args ? args.protocolSettings : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareDeleteRetentionPolicy"] = args ? args.shareDeleteRetentionPolicy : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protocolSettings"] = undefined /*out*/;
            resourceInputs["shareDeleteRetentionPolicy"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storage/v20190401:FileServiceProperties" }, { type: "azure-native:storage/v20190601:FileServiceProperties" }, { type: "azure-native:storage/v20200801preview:FileServiceProperties" }, { type: "azure-native:storage/v20210101:FileServiceProperties" }, { type: "azure-native:storage/v20210201:FileServiceProperties" }, { type: "azure-native:storage/v20210401:FileServiceProperties" }, { type: "azure-native:storage/v20210601:FileServiceProperties" }, { type: "azure-native:storage/v20210801:FileServiceProperties" }, { type: "azure-native:storage/v20210901:FileServiceProperties" }, { type: "azure-native:storage/v20220501:FileServiceProperties" }, { type: "azure-native:storage/v20220901:FileServiceProperties" }, { type: "azure-native:storage/v20230101:FileServiceProperties" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FileServiceProperties.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FileServiceProperties resource.
 */
export interface FileServicePropertiesArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    accountName: pulumi.Input<string>;
    /**
     * Specifies CORS rules for the File service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the File service.
     */
    cors?: pulumi.Input<types.inputs.CorsRulesArgs>;
    /**
     * The name of the file Service within the specified storage account. File Service Name must be "default"
     */
    fileServicesName?: pulumi.Input<string>;
    /**
     * Protocol settings for file service
     */
    protocolSettings?: pulumi.Input<types.inputs.ProtocolSettingsArgs>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The file service properties for share soft delete.
     */
    shareDeleteRetentionPolicy?: pulumi.Input<types.inputs.DeleteRetentionPolicyArgs>;
}
