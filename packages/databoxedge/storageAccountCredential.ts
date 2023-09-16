import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The storage account credential.
 * Azure REST API version: 2022-03-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class StorageAccountCredential extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccountCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccountCredential {
        return new StorageAccountCredential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:StorageAccountCredential';

    /**
     * Returns true if the given object is an instance of StorageAccountCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccountCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccountCredential.__pulumiType;
    }

    /**
     * Encrypted storage key.
     */
    public readonly accountKey!: pulumi.Output<types.outputs.databoxedge.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * Type of storage accessed on the storage account.
     */
    public readonly accountType!: pulumi.Output<string>;
    /**
     * Alias for the storage account.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * Blob end point for private clouds.
     */
    public readonly blobDomainName!: pulumi.Output<string | undefined>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    public readonly connectionString!: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    public readonly sslStatus!: pulumi.Output<string>;
    /**
     * Id of the storage account.
     */
    public readonly storageAccountId!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of StorageAccountCredential
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.databoxedge.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Username for the storage account.
     */
    public readonly userName!: pulumi.Output<string | undefined>;

    /**
     * Create a StorageAccountCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountCredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountType'");
            }
            if ((!args || args.alias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sslStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sslStatus'");
            }
            resourceInputs["accountKey"] = args ? args.accountKey : undefined;
            resourceInputs["accountType"] = args ? args.accountType : undefined;
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["blobDomainName"] = args ? args.blobDomainName : undefined;
            resourceInputs["connectionString"] = args ? args.connectionString : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sslStatus"] = args ? args.sslStatus : undefined;
            resourceInputs["storageAccountId"] = args ? args.storageAccountId : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountKey"] = undefined /*out*/;
            resourceInputs["accountType"] = undefined /*out*/;
            resourceInputs["alias"] = undefined /*out*/;
            resourceInputs["blobDomainName"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sslStatus"] = undefined /*out*/;
            resourceInputs["storageAccountId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20190701:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20190801:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20200501preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20200901:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20200901preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20201201:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20210201:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20210201preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20210601:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20210601preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20220301:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20220401preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20221201preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20230101preview:StorageAccountCredential" }, { type: "azure-native:databoxedge/v20230701:StorageAccountCredential" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageAccountCredential.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccountCredential resource.
 */
export interface StorageAccountCredentialArgs {
    /**
     * Encrypted storage key.
     */
    accountKey?: pulumi.Input<types.inputs.databoxedge.AsymmetricEncryptedSecretArgs>;
    /**
     * Type of storage accessed on the storage account.
     */
    accountType: pulumi.Input<string | types.enums.AccountType>;
    /**
     * Alias for the storage account.
     */
    alias: pulumi.Input<string>;
    /**
     * Blob end point for private clouds.
     */
    blobDomainName?: pulumi.Input<string>;
    /**
     * Connection string for the storage account. Use this string if username and account key are not specified.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The storage account credential name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Signifies whether SSL needs to be enabled or not.
     */
    sslStatus: pulumi.Input<string | types.enums.SSLStatus>;
    /**
     * Id of the storage account.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Username for the storage account.
     */
    userName?: pulumi.Input<string>;
}
