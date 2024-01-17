import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine Learning datastore object wrapped into ARM resource envelope.
 * Azure REST API version: 2020-05-01-preview. Prior API version in Azure Native 1.x: 2020-05-01-preview.
 */
export class MachineLearningDatastore extends pulumi.CustomResource {
    /**
     * Get an existing MachineLearningDatastore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineLearningDatastore {
        return new MachineLearningDatastore(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:MachineLearningDatastore';

    /**
     * Returns true if the given object is an instance of MachineLearningDatastore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineLearningDatastore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineLearningDatastore.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public /*out*/ readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Datastore properties
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.DatastoreResponse>;
    /**
     * The sku of the workspace.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MachineLearningDatastore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineLearningDatastoreArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataStoreType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataStoreType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["accountKey"] = args ? args.accountKey : undefined;
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["adlsResourceGroup"] = args ? args.adlsResourceGroup : undefined;
            resourceInputs["adlsSubscriptionId"] = args ? args.adlsSubscriptionId : undefined;
            resourceInputs["authorityUrl"] = args ? args.authorityUrl : undefined;
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args ? args.clientSecret : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["dataStoreType"] = args ? args.dataStoreType : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["datastoreName"] = args ? args.datastoreName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["endpoint"] = args ? args.endpoint : undefined;
            resourceInputs["enforceSSL"] = (args ? args.enforceSSL : undefined) ?? true;
            resourceInputs["fileSystem"] = args ? args.fileSystem : undefined;
            resourceInputs["includeSecret"] = (args ? args.includeSecret : undefined) ?? true;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceUrl"] = args ? args.resourceUrl : undefined;
            resourceInputs["sasToken"] = args ? args.sasToken : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["skipValidation"] = args ? args.skipValidation : undefined;
            resourceInputs["storageAccountResourceGroup"] = args ? args.storageAccountResourceGroup : undefined;
            resourceInputs["storageAccountSubscriptionId"] = args ? args.storageAccountSubscriptionId : undefined;
            resourceInputs["storeName"] = args ? args.storeName : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["workspaceSystemAssignedIdentity"] = args ? args.workspaceSystemAssignedIdentity : undefined;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20210301preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20220201preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20220501:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20220601preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20221001:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20221001preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20221201preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20230201preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20230401:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20230401preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20230601preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20230801preview:MachineLearningDatastore" }, { type: "azure-native:machinelearningservices/v20231001:MachineLearningDatastore" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineLearningDatastore.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineLearningDatastore resource.
 */
export interface MachineLearningDatastoreArgs {
    /**
     * Account Key of storage account.
     */
    accountKey?: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The resource group the ADLS store belongs to. Defaults to selected resource group.
     */
    adlsResourceGroup?: pulumi.Input<string>;
    /**
     * The ID of the subscription the ADLS store belongs to. Defaults to selected subscription.
     */
    adlsSubscriptionId?: pulumi.Input<string>;
    /**
     * Authority url used to authenticate the user.
     */
    authorityUrl?: pulumi.Input<string>;
    /**
     * The service principal's client/application ID.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The service principal's secret.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The name of the azure blob container.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Specifies datastore type.
     */
    dataStoreType: pulumi.Input<string | types.enums.DatastoreTypeArm>;
    /**
     * The database name.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The Datastore name.
     */
    datastoreName?: pulumi.Input<string>;
    /**
     * The description of the datastore.
     */
    description?: pulumi.Input<string>;
    /**
     * The endpoint of the server.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * This sets the ssl value of the server. Defaults to true if not set.
     */
    enforceSSL?: pulumi.Input<boolean>;
    /**
     * The file system name of the ADLS Gen2.
     */
    fileSystem?: pulumi.Input<string>;
    /**
     * Include datastore secret in response.
     */
    includeSecret?: pulumi.Input<boolean>;
    /**
     * The name of the datastore.
     */
    name?: pulumi.Input<string>;
    /**
     * The password.
     */
    password?: pulumi.Input<string>;
    /**
     * The port number.
     */
    port?: pulumi.Input<string>;
    /**
     * The protocol to be used
     */
    protocol?: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Determines what operations will be performed.
     */
    resourceUrl?: pulumi.Input<string>;
    /**
     * Sas Token of storage account.
     */
    sasToken?: pulumi.Input<string>;
    /**
     * The SQL/MySQL/PostgreSQL server name
     */
    serverName?: pulumi.Input<string>;
    /**
     * The name of the file share.
     */
    shareName?: pulumi.Input<string>;
    /**
     * Skip validation that ensures data can be loaded from the dataset before registration.
     */
    skipValidation?: pulumi.Input<boolean>;
    /**
     * The resource group of the storage account. Defaults to selected resource group
     */
    storageAccountResourceGroup?: pulumi.Input<string>;
    /**
     * The subscription ID of the storage account. Defaults to selected subscription
     */
    storageAccountSubscriptionId?: pulumi.Input<string>;
    /**
     * The ADLS store name.
     */
    storeName?: pulumi.Input<string>;
    /**
     * The service principal Tenant ID.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The user ID.
     */
    userId?: pulumi.Input<string>;
    /**
     * The username of the database user.
     */
    userName?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
    /**
     * If set to true, datastore support data access authenticated with Workspace MSI.
     */
    workspaceSystemAssignedIdentity?: pulumi.Input<boolean>;
}